import { destructiveCommandMatch } from '@/core/rules/destructive';
import type { DestructiveCommandRuleMatch } from '@/core/rules/types';
import type { CommandRedirection } from '@/core/shell/model';

const REASON_DD_DEVICE_WRITE =
  'dd writing to a /dev device can destroy a disk or partition. Run device writes manually after confirming the target.';
const REASON_MKFS_DEVICE =
  'mkfs formatting a /dev device erases everything on it. Run the format manually after confirming the target.';
const REASON_DISK_ERASE =
  'This erases or repartitions a disk. Run disk erase and partition commands manually after confirming the target.';
const REASON_REDIRECT_BLOCK_DEVICE =
  'This output redirect overwrites a disk device. Run device writes manually after confirming the target.';
const REASON_SHRED_TARGET =
  'shred permanently destroys the given target. Use rm for ordinary deletes, or run shred manually.';

const FILESYSTEM_FORMAT_HEAD = /^(?:mkfs(?:\..+)?|mke2fs|newfs(?:_.+)?)$/;
const DISK_ERASE_HEADS = new Set(['diskutil', 'wipefs', 'sgdisk', 'parted']);
const DISKUTIL_ERASE_VERBS = new Set([
  'erasedisk',
  'erasevolume',
  'reformat',
  'partitiondisk',
  'zerodisk',
  'randomdisk',
  'secureerase',
]);
const WIPEFS_ERASE_OPTION = /^(?:-[^-]*[ao]|--all$|--offset(?:=|$))/;
const SGDISK_READ_ONLY_OPTIONS = new Set([
  '-p',
  '--print',
  '-i',
  '--info',
  '-v',
  '--verify',
  '-O',
  '--print-mbr',
  '-L',
  '--list-types',
  '-P',
  '--pretend',
  '-b',
  '--backup',
  '-V',
  '--version',
  '-?',
  '--help',
  '--usage',
]);
const BLOCK_DEVICE_PATH =
  /^\/dev\/(?:r?disk\d|sd[a-z]|hd[a-z]|vd[a-z]|xvd[a-z]|nvme\d|mmcblk\d|md\d|dm-\d|loop\d|mapper\/|disk\/)/;
const DEVICE_WRITING_REDIRECTIONS = new Set(['>', '>|', '>>', '<>', '>&']);
const PARTED_TABLE_EDITS = new Set(['mklabel', 'mktable', 'mkpart', 'rm', 'resizepart']);

export function isDeviceCommand(head: string): boolean {
  return (
    head === 'dd' ||
    head === 'shred' ||
    FILESYSTEM_FORMAT_HEAD.test(head) ||
    DISK_ERASE_HEADS.has(head)
  );
}

function erasesDisk(head: string, operands: readonly string[]): boolean {
  const namesDevice = operands.some((token) => token.startsWith('/dev/'));
  if (head === 'diskutil') {
    const verb = operands.find((token) => !token.startsWith('-'));
    return verb !== undefined && DISKUTIL_ERASE_VERBS.has(verb.toLowerCase());
  }
  if (head === 'wipefs') {
    return namesDevice && operands.some((token) => WIPEFS_ERASE_OPTION.test(token));
  }
  if (head === 'sgdisk') {
    return (
      namesDevice &&
      operands.some(
        (token) =>
          token.startsWith('-') && !SGDISK_READ_ONLY_OPTIONS.has(token.split('=', 1)[0] ?? token),
      )
    );
  }
  return (
    head === 'parted' &&
    namesDevice &&
    operands.some((token) => PARTED_TABLE_EDITS.has(token.toLowerCase()))
  );
}

export function analyzeDeviceCommandMatch(
  head: string,
  tokens: readonly string[],
): DestructiveCommandRuleMatch | null {
  const operands = tokens.slice(1);
  if (head === 'dd' && operands.some((token) => /^of=\/dev\/.+/.test(token))) {
    return destructiveCommandMatch('dd.device-write', REASON_DD_DEVICE_WRITE);
  }
  if (FILESYSTEM_FORMAT_HEAD.test(head) && operands.some((token) => token.startsWith('/dev/'))) {
    return destructiveCommandMatch('mkfs.device', REASON_MKFS_DEVICE);
  }
  if (erasesDisk(head, operands)) {
    return destructiveCommandMatch('disk.erase', REASON_DISK_ERASE);
  }
  if (head === 'shred' && operands.length > 0) {
    return destructiveCommandMatch('shred.target', REASON_SHRED_TARGET);
  }
  return null;
}

export function analyzeDeviceRedirectionMatch(
  redirections: readonly CommandRedirection[],
): DestructiveCommandRuleMatch | null {
  return redirections.some(
    (redirection) =>
      DEVICE_WRITING_REDIRECTIONS.has(redirection.operator) &&
      redirection.target?.provenance === 'literal' &&
      BLOCK_DEVICE_PATH.test(redirection.target.text),
  )
    ? destructiveCommandMatch('redirect.block-device', REASON_REDIRECT_BLOCK_DEVICE)
    : null;
}
