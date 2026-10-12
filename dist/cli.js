import{a,s,De,et,T,gt,tt,c,n,nt,P,S,pe,yt,m,Te,x,ot,l,o,w,i,se,r,g,me,H,xt,vt,p,ge,he,St,L,Z,ae,C,wt,I,h,_e,W,u,A,X,it,st,M,E,O,ye,be,Le,Ct,d,e,Me,Pe,Fe,xe,at,ct,ce,Ie,le,$e,Q,B,je,ve,z,lt,V,ee,te,ue,ut,dt,k,F,Ue,He,We,R,Be,Ae,ze,y,t,ne,Se,b,v,D,Et,Ve,qe,f,q}from"./chunks/index-szahvnh8.js";import{Ze}from"./chunks/index-mzsrpm7v.js";import{Ke,we}from"./chunks/index-ygv7kphr.js";import{Xe}from"./chunks/index-8tb9vmtm.js";import"./chunks/index-z4p2xpqh.js";import{oe,K,Qe,U,G}from"./chunks/index-976gh1s5.js";var Vp=["-h","--help"];function gn(_,N){let j=Object.entries(_.booleans??{}),J=Object.entries(_.values??{}),Y=Object.entries(_.lists??{}),re=Object.fromEntries(j.map(([Ee])=>[Ee,!1])),ie={},de=Object.fromEntries(Y.map(([Ee])=>[Ee,[]])),fe=[],ke=[],Ce=!1,Re=-1;for(let[Ee,Ne]of N.entries()){if(Ee<=Re)continue;if(Ne==="--"){fe.push(...N.slice(Ee+1));break}if(Vp.includes(Ne)){Ce=!0;continue}let Oe=j.find(([,Ye])=>Ye.includes(Ne));if(Oe){re[Oe[0]]=!0;continue}let Je=J.find(([,Ye])=>Ye.includes(Ne));if(Je){let Ye=N[Ee+1];if(Ye===void 0||Ye.startsWith("-")){ke.push(`${Ne} requires a value`);continue}ie[Je[0]]=Ye,Re=Ee+1;continue}let Ge=Y.find(([,Ye])=>Ye.includes(Ne));if(Ge){let Ye=N.slice(Ee+1),rn=Ye.findIndex((sn)=>sn.startsWith("-")),on=Ye.slice(0,rn===-1?Ye.length:rn);if(on.length===0){ke.push(`${Ne} requires at least one value`);continue}de[Ge[0]]=[...de[Ge[0]]??[],...on],Re=Ee+on.length;continue}if(Ne.startsWith("-")){ke.push(`Unknown option for ${_.label}: ${Ne}`);continue}if(_.positionals==="tail"){fe.push(...N.slice(Ee));break}fe.push(Ne)}if(_.positionals!=="list"&&_.positionals!=="tail")ke.push(...fe.map((Ee)=>`Unexpected argument for ${_.label}: ${Ee}`));return{flags:re,values:ie,lists:de,positionals:fe,help:Ce,errors:ke}}function Dn(_){for(let N of _)console.error(N);return _.length>0}import{readdirSync as Xp,statSync as qs,unlinkSync as Qp}from"node:fs";import{basename as Vs,dirname as ef,isAbsolute as nf,join as tf,relative as rf,resolve as of,sep as sf}from"node:path";var Us=(_)=>{let N=Date.now()-new Date(_).getTime();if(!Number.isFinite(N))return"";let j=Math.floor(N/60000),J=Math.floor(j/60),Y=Math.floor(J/24);if(Y>0)return`${Y}d ago`;if(J>0)return`${J}h ago`;if(j>0)return`${j}m ago`;return"just now"},Mo=(_)=>{let N=(_??"").trim().split(/\s+/).filter((Y)=>Y&&!/^[A-Za-z_][A-Za-z0-9_]*=/.test(Y)),j=N[0]?.split("/").pop();if(!j)return null;let J=N[1];return J&&/^[a-z][a-z0-9-]*$/.test(J)?`${j} ${J}`:j};function Gs(_){let N=(Y)=>`${Y.sessionId}
${Mo(Y.segment||Y.command)}`,j=_.filter((Y)=>Y.decision!=="allow"),J=j.filter((Y)=>Y.sessionId).reduce((Y,re)=>Y.set(N(re),(Y.get(N(re))??0)+1),new Map);return new Set(j.filter((Y)=>Y.failureStage||(J.get(N(Y))??0)>=2))}import{existsSync as Kp,readdirSync as Jp,readFileSync as Wp}from"node:fs";import{join as zp}from"node:path";function zn(_,N){try{return Jp(_,{withFileTypes:!0,encoding:"utf8"}).flatMap((j)=>{let J=zp(_,j.name);if(j.isDirectory())return zn(J,N);if(j.name.endsWith(".jsonl"))return[J];return[]})}catch{if(N&&Kp(_))N.count++;return[]}}var Yp=["segment","reason","sessionId","decision","agent","ruleId","failureStage"];function Zp(_){if(!_||typeof _!=="object"||Array.isArray(_))return!1;let N=_;if(typeof N.ts!=="string"||typeof N.command!=="string")return!1;return Yp.every((j)=>N[j]===void 0||typeof N[j]==="string")}function It(_,N){try{return Wp(_,"utf-8").split(`
`).filter(Boolean).flatMap((j)=>{try{let J=JSON.parse(j);if(!Zp(J)){if(N)N.count++;return[]}return[J]}catch{if(N)N.count++;return[]}})}catch{if(N)N.count++;return[]}}function yn(_){return Array.from(_,(N)=>{let j=N.charCodeAt(0);if(j<=31||j>=127&&j<=159)return`\\x${j.toString(16).padStart(2,"0")}`;return N}).join("")}function af(_,N){let j=oe(_),J=gn({label:"logs",booleans:{all:["--all"],suspect:["--suspect"],json:["--json"],pruneLegacy:["--prune-legacy"],dryRun:["--dry-run"]},values:{id:["--id"],limit:["--limit"],since:["--since"],agent:["--agent"],rule:["--rule"],session:["--session"],project:["--project"]}},N);if(Dn(J.errors))return null;if(J.values.id!==void 0&&!/^[a-f0-9]{16}$/.test(J.values.id))return console.error("--id must be 16 hexadecimal characters"),null;let Y=J.values.limit===void 0?20:Bs(J.values.limit);if(Y===null)return console.error("--limit must be a positive number"),null;let re=J.values.since===void 0?Math.min(30,j):Bs(J.values.since);if(re===null||re>j)return console.error(`--since must be a positive number of days no greater than ${j}`),null;let ie={limit:Y,limitExplicit:J.values.limit!==void 0,since:re,sinceExplicit:J.values.since!==void 0,all:J.flags.all,json:J.flags.json,suspect:J.flags.suspect,pruneLegacy:J.flags.pruneLegacy,dryRun:J.flags.dryRun,id:J.values.id,agent:J.values.agent,rule:J.values.rule,session:J.values.session,project:J.values.project===void 0?void 0:of(J.values.project)};if(ie.id&&(ie.agent!==void 0||ie.rule!==void 0||ie.session!==void 0||ie.project!==void 0||ie.suspect||ie.sinceExplicit||ie.limitExplicit))return console.error("--id cannot be combined with --agent, --rule, --session, --project, --suspect, --since, or --limit"),null;if(ie.pruneLegacy&&(ie.id!==void 0||ie.agent!==void 0||ie.rule!==void 0||ie.session!==void 0||ie.project!==void 0||ie.suspect||ie.all||ie.sinceExplicit||ie.limitExplicit))return console.error("--prune-legacy cannot be combined with --id, --agent, --rule, --session, --project, --suspect, --all, --since, or --limit"),null;if(ie.dryRun&&!ie.pruneLegacy)return console.error("--dry-run requires --prune-legacy"),null;return ie}async function Ks(_,N,j={}){let J=af(_,N);if(!J)return 1;let Y=j.logsDir??U(_);if(J.pruneLegacy)return lf(Y,J.json,J.dryRun);if(!Y)return console.log(J.json?"[]":J.id?`No retained audit log entry found for id ${yn(J.id)}.`:"No audit log entries found."),0;K(_,Y);let re={count:0},ie=zn(Y,re).flatMap((Re)=>It(Re,re).map((Ee)=>({entry:Ee,file:Re})));if(re.count>0)console.error(`warning: ${re.count} audit log ${re.count===1?"source":"sources"} could not be read; these results are incomplete`);if(J.id)return pf(ie,J,j.timeZone);let de=Date.now()-J.since*24*60*60*1000,fe=ie.filter((Re)=>ff(Re,J,Y,de)),ke=J.suspect?Gs(fe.map((Re)=>Re.entry)):null,Ce=(ke?fe.filter((Re)=>ke.has(Re.entry)):fe).sort((Re,Ee)=>Date.parse(Ee.entry.ts)-Date.parse(Re.entry.ts)).slice(0,J.limit);if(J.json)return console.log(JSON.stringify(Ce.map((Re)=>Re.entry),null,2)),0;if(Ce.length===0)return console.log("No audit log entries found."),0;for(let Re of Ce)console.log(yf(Re.entry,j.timeZone));return 0}function lf(_,N,j){let J=_?df(_).map((de)=>tf(_,de)):[];if(j)return cf(J,N);let Y=[],re=0,ie=0;for(let de of J){let fe=qs(de,{throwIfNoEntry:!1})?.size??0,ke=uf(de);if(ke){Y.push(`${Vs(de)}: ${ke}`);continue}re++,ie+=fe}if(N)return console.log(JSON.stringify({removedFiles:re,removedBytes:ie,failedFiles:Y.length})),Y.length===0?0:1;console.log(re===0&&Y.length===0?"No legacy audit log files found.":`Removed ${re} legacy audit log ${re===1?"file":"files"} (${Js(ie)}).`);for(let de of Y)console.error(`Could not remove ${yn(de)}`);if(console.log("Nested v2 audit logs were not changed."),re>0)console.log("This deletion cannot be undone.");return Y.length===0?0:1}function cf(_,N){let j=_.reduce((J,Y)=>J+(qs(Y,{throwIfNoEntry:!1})?.size??0),0);if(N)return console.log(JSON.stringify({dryRun:!0,files:_.length,bytes:j})),0;if(console.log(_.length===0?"No legacy audit log files found.":`Would remove ${_.length} legacy audit log ${_.length===1?"file":"files"} (${Js(j)}).`),console.log("Nested v2 audit logs are not included."),_.length>0)console.log("Run the same command without --dry-run to delete them.");return 0}function df(_){try{return Xp(_,{withFileTypes:!0}).filter((N)=>N.isFile()&&N.name.endsWith(".jsonl")).map((N)=>N.name)}catch{return[]}}function uf(_){try{return Qp(_),null}catch(N){return N instanceof Error?N.message:String(N)}}function Js(_){let N=["B","KiB","MiB","GiB"],j=Math.min(Math.floor(Math.log2(Math.max(_,1))/10),N.length-1);return`${Math.round(_/1024**j*10)/10} ${N[j]}`}function pf(_,N,j){let J=_.filter((re)=>re.entry.id===N.id);if(J.length>1)return console.error(`Multiple audit log entries found for id ${yn(N.id??"")}.`),1;if(N.json)return console.log(JSON.stringify(J.map((re)=>re.entry),null,2)),0;let Y=J[0];if(!Y)return console.log(`No retained audit log entry found for id ${yn(N.id??"")}.`),0;return console.log(hf(Y.entry,j)),0}function ff(_,N,j,J){if(!N.all&&_.entry.decision==="allow")return!1;if(Date.parse(_.entry.ts)<J)return!1;if(N.agent!==void 0&&_.entry.agent!==N.agent)return!1;if(N.rule!==void 0&&_.entry.ruleId!==N.rule)return!1;if(N.session!==void 0&&!mf(_,j,N.session))return!1;if(N.project!==void 0&&!gf(_.entry.cwd,N.project))return!1;return!0}function mf(_,N,j){if(_.entry.sessionId===j)return!0;return ef(_.file)===N&&Vs(_.file,".jsonl")===j}function gf(_,N){if(!_)return!1;let j=rf(N,_);return j!==".."&&!j.startsWith(`..${sf}`)&&!nf(j)}function yf(_,N){let j=yn(_.id??"-"),J=yn(_.decision??"deny"),Y=_.cwd?`  [${yn(_.cwd)}]`:"",re=_.segment||_.command,ie=re===_.command?"":"↳ ",de=re.length>50?`${re.slice(0,50)}…`:re;return`${j.padEnd(16)}  ${yn(Ws(_.ts,N))}  ${J.padEnd(5)}  ${yn(_.agent??"-").padEnd(15)}  ${yn(_.ruleId??"-").padEnd(20)}  ${ie}${yn(de)}${Y}`}function hf(_,N){let j=(Y)=>yn(Y===void 0||Y===null||Y===""?"-":Y),J=_.shape?`${_.agent??"-"} (shape: ${_.shape})`:_.agent??"-";return[`id:        ${j(_.id)}`,`ts:        ${j(Ws(_.ts,N))}`,`decision:  ${j(_.decision)}`,`agent:     ${j(J)}`,`level:     ${j(_.level)}`,`tool:      ${j(_.toolName)}`,`rule:      ${j(_.ruleId)}`,`intent:    ${j(_.intent)}`,`stage:     ${j(_.failureStage)}`,`error:     ${j(_.errorCode)}`,`session:   ${j(_.sessionId)}`,`cwd:       ${j(_.cwd)}`,`version:   ${j(_.v)}`,`truncated: ${j(_.truncated===!0?"yes":void 0)}`,`reason:    ${j(_.reason)}`,`command:   ${j(_.command)}`,`segment:   ${j(_.segment)}`].join(`
`)}function Ws(_,N){let j=new Date(_);if(Number.isNaN(j.getTime()))return _;return new Intl.DateTimeFormat("sv-SE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23",timeZone:N}).format(j)}function Bs(_){let N=Number(_);return Number.isFinite(N)&&N>0?N:null}var zs={name:"doctor",aliases:["--doctor"],description:"Run diagnostic checks to verify installation and configuration",usage:"doctor [options]",options:[{flags:"--json",description:"Output diagnostics as JSON"},{flags:"--skip-update-check",description:"Skip npm registry version check"},{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net doctor","cc-safety-net doctor --json","cc-safety-net doctor --skip-update-check"]};var Ys={name:"explain",description:"Show step-by-step analysis trace of how a command would be analyzed",usage:"explain [options] <command>",argument:"<command>",options:[{flags:"--json",description:"Output analysis as JSON"},{flags:"--cwd",argument:"<path>",description:"Use custom working directory"},{flags:"-h, --help",description:"Show this help"}],examples:['cc-safety-net explain "git reset --hard"','cc-safety-net explain --json "rm -rf /"','cc-safety-net explain --cwd /tmp "git status"']};var Zs={name:"gui",description:"Open the local policy editor GUI",usage:"gui [options]",options:[{flags:"--no-open",description:"Print the URL without opening a browser"},{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net gui","cc-safety-net gui --no-open"]};var Uo=["npx","--offline","--no-install","@deepseek-ai/dsh","--version"],Xs=["cursor-agent","--version"],Pr=[{id:"antigravity-cli",displayName:"Antigravity CLI",doctorOrder:3,runtime:{order:1,flags:["-ac","--agy-cli"],description:"Run as Antigravity CLI PreToolUse hook",legacyTopLevelFlags:[]},install:{order:2,flag:"--agy-cli",artifactKind:"hook config",probeCommand:["agy","--version"]}},{id:"claude-code",displayName:"Claude Code",doctorOrder:1,runtime:{order:2,displayName:"Coding CLI",flags:["-cc","--coding-cli"],legacyFlags:["--claude-code"],description:"Run as Coding CLI PreToolUse hook",legacyTopLevelFlags:["-cc","--claude-code"]},install:{order:3,flag:"--claude-code",artifactKind:"plugin",probeCommand:["claude","--version"]}},{id:"codex",displayName:"Codex",doctorOrder:4,runtime:{order:3,flags:["-cx","--codex"],description:"Run as a Codex PreToolUse hook",legacyTopLevelFlags:[]},install:{order:4,flag:"--codex",artifactKind:"plugin",probeCommand:["codex","--version"]}},{id:"copilot-cli",displayName:"GitHub Copilot CLI",doctorOrder:10,runtime:{order:8,flags:["-cp","--copilot-cli"],description:"Run as GitHub Copilot CLI PreToolUse hook",legacyTopLevelFlags:["-cp","--copilot-cli"]},install:{order:10,flag:"--copilot-cli",artifactKind:"plugin",probeCommand:["copilot","--binary-version"]}},{id:"gemini-cli",displayName:"Gemini CLI",doctorOrder:9,runtime:{order:7,flags:["-gc","--gemini-cli"],description:"Run as Gemini CLI BeforeTool hook",legacyTopLevelFlags:["-gc","--gemini-cli"]},install:{order:9,flag:"--gemini-cli",artifactKind:"extension",probeCommand:["gemini","--version"]}},{id:"grok-build",displayName:"Grok Build",doctorOrder:11,runtime:{order:9,flags:["-gb","--grok-build"],description:"Run as Grok Build PreToolUse hook",legacyTopLevelFlags:[]},install:{order:11,flag:"--grok-build",artifactKind:"hook config",probeCommand:["grok","--version"]}},{id:"hermes-agent",displayName:"Hermes Agent",doctorOrder:12,runtime:{order:10,flags:["-ha","--hermes-agent"],description:"Run as Hermes Agent pre_tool_call hook",legacyTopLevelFlags:[]},install:{order:12,flag:"--hermes-agent",artifactKind:"plugin",probeCommand:["hermes","--version"]}},{id:"kimi-code",displayName:"Kimi Code",doctorOrder:13,runtime:{order:11,flags:["-kc","--kimi-code"],description:"Run as Kimi Code PreToolUse hook",legacyTopLevelFlags:[]},install:{order:13,flag:"--kimi-code",artifactKind:"hook config",probeCommand:["kimi","--version"]}},{id:"openclaw",displayName:"OpenClaw",doctorOrder:14,install:{order:14,flag:"--openclaw",artifactKind:"plugin",probeCommand:["openclaw","--version"]}},{id:"opencode",displayName:"OpenCode",doctorOrder:15,install:{order:15,flag:"--opencode",artifactKind:"plugin",probeCommand:["opencode","--version"]}},{id:"pi",displayName:"Pi",doctorOrder:16,install:{order:16,flag:"--pi",artifactKind:"package",probeCommand:["pi","--version"]}},{id:"cursor",displayName:"Cursor",doctorOrder:5,runtime:{order:4,flags:["-cu","--cursor"],description:"Run as Cursor preToolUse hook",legacyTopLevelFlags:[]},install:{order:5,flag:"--cursor",artifactKind:"hook config",probeCommand:["cursor","--version"]}},{id:"deepseek-harness",displayName:"DeepSeek Harness",doctorOrder:6,install:{order:6,flag:"--deepseek-harness",artifactKind:"package",probeCommand:Uo}},{id:"devin",displayName:"Devin CLI",doctorOrder:7,runtime:{order:5,flags:["-dv","--devin"],description:"Run as Devin CLI PreToolUse hook",legacyTopLevelFlags:[]},install:{order:7,flag:"--devin",artifactKind:"hook config",probeCommand:["devin","--version"]}},{id:"droid",displayName:"Factory Droid",doctorOrder:8,runtime:{order:6,flags:["-fd","--droid"],description:"Run as Factory Droid PreToolUse hook",legacyTopLevelFlags:[]},install:{order:8,flag:"--droid",artifactKind:"hook config",probeCommand:["droid","--version"]}},{id:"amp",displayName:"Amp Code",doctorOrder:2,install:{order:1,flag:"--amp",artifactKind:"plugin",probeCommand:["amp","--version"]}}],Rr=Pr.slice().sort((_,N)=>_.doctorOrder-N.doctorOrder).map((_)=>_.id),Yt=Pr.filter((_)=>("runtime"in _)).slice().sort((_,N)=>_.runtime.order-N.runtime.order).map((_)=>({id:_.id,displayName:"displayName"in _.runtime?_.runtime.displayName:_.displayName,flags:_.runtime.flags,legacyFlags:"legacyFlags"in _.runtime?_.runtime.legacyFlags:[],description:_.runtime.description,legacyTopLevelFlags:_.runtime.legacyTopLevelFlags})),Rn=Pr.slice().sort((_,N)=>_.install.order-N.install.order).map((_)=>({id:_.id,..._.install})).map(({order:_,...N})=>N),vf=Object.fromEntries(Pr.map((_)=>[_.id,_.displayName]));function cn(_){return vf[_]}var bf=Yt.map((_)=>({flags:_.flags.join(", "),description:_.description})),wf=Yt.flatMap((_)=>_.flags.map((N)=>`cc-safety-net hook ${N}`)),Qs={name:"hook",description:"Run as an agent CLI hook (reads JSON from stdin)",usage:"hook INTEGRATION_FLAG",options:[...bf,{flags:"-h, --help",description:"Show this help"}],examples:wf};var ea={name:"install",description:"Install CC Safety Net into a coding agent CLI",usage:"install [TARGET_FLAG]",options:[...Rn.map((_)=>({flags:_.flag,description:`Install ${cn(_.id)} ${_.artifactKind}`})),{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net install",...Rn.map((_)=>`cc-safety-net install ${_.flag}`)]},na={name:"uninstall",description:"Uninstall CC Safety Net from a coding agent CLI",usage:"uninstall [TARGET_FLAG]",options:[...Rn.map((_)=>({flags:_.flag,description:`Uninstall ${cn(_.id)} ${_.artifactKind}`})),{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net uninstall",...Rn.map((_)=>`cc-safety-net uninstall ${_.flag}`)]},ta={name:"update",description:"Update every installed CC Safety Net integration to the latest version",usage:"update",options:[{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net update"]};var ra={name:"logs",description:"Browse audit log entries recorded by hooks",usage:"logs [options]",options:[{flags:"--id",argument:"<id>",description:"Show one entry from retained history by its 16-character id (not guaranteed once it is older than the configured retention)"},{flags:"--limit",argument:"<n>",description:"Maximum entries to print",default:"20"},{flags:"--since",argument:"<days>",description:"Only include entries newer than this many days (max: the configured audit retention, 1-365)",default:"30"},{flags:"--agent",argument:"<name>",description:"Filter by agent name"},{flags:"--rule",argument:"<ruleId>",description:"Filter by rule id"},{flags:"--session",argument:"<id>",description:"Filter by session id"},{flags:"--project",argument:"<path>",description:"Filter by project path"},{flags:"--suspect",description:"Only denials that look like false positives"},{flags:"--all",description:"Include allow entries"},{flags:"--prune-legacy",description:"Permanently delete all legacy root-level logs; nested logs are untouched"},{flags:"--dry-run",description:"With --prune-legacy, report what would be deleted and delete nothing"},{flags:"--json",description:"Output entries as JSON"},{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net logs --id 3fa9c2d1a70e8b42","cc-safety-net logs --agent claude-code","cc-safety-net logs --project . --since 7","cc-safety-net logs --suspect --since 7","cc-safety-net logs --json","cc-safety-net logs --prune-legacy --dry-run","cc-safety-net logs --prune-legacy"]};var Er={name:"policy",description:"Check and apply project or user policy proposals",usage:"policy <subcommand>",subcommands:[{usage:"check <file>",description:"Validate a policy proposal and print its diff"},{usage:"apply <file>",description:"Apply a proposal after confirming in a terminal"}],options:[{flags:"-g, --global",description:"Use the user-scope policy instead of the project one"},{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net policy check proposal.json","cc-safety-net policy apply proposal.json","cc-safety-net policy apply proposal.json --global"]};var Go=[{flags:"--ref",argument:"<ref>",description:"Use a branch, tag, or commit"},{flags:"--only",argument:"<rulebook...>",description:"Add only these repository rulebooks"},{flags:"-g, --global",description:"Use user-scope rule config"},{flags:"-h, --help",description:"Show this help"}],Bo=["cc-safety-net rule add project-rules","cc-safety-net rule add acme/safety-rules","cc-safety-net rule add acme/safety-rules --only aws gcloud","cc-safety-net rule add acme/safety-rules --ref v2 --only aws","cc-safety-net rule add --only terraform aws"],$t={name:"rule",description:"Manage CC Safety Net rule config and rulebook sources",usage:"rule <subcommand>",subcommands:[{usage:"init [--example]",description:"Create inert rule config"},{usage:"add [source] [--ref <ref>] [--only <rulebook...>]",description:"Add rulebook sources and sync"},{usage:"remove <source>",description:"Remove a rulebook source and sync"},{usage:"update [source]",description:"Re-fetch and vendor remote rulebooks"},{usage:"sync",description:"Deprecated: migrate lock and cache leftovers"},{usage:"list",description:"List active rulebooks"},{usage:"wrapper add <command>",description:"Trust a transparent command wrapper"},{usage:"wrapper remove <command>",description:"Remove a transparent command wrapper"},{usage:"wrapper list",description:"List transparent command wrappers"},{usage:"tool add <name> [--cwd-arg <name>] [--project]",description:"Analyze a community shell tool (user scope by default)"},{usage:"tool remove <name> [--project]",description:"Stop analyzing a declared tool"},{usage:"tool list",description:"List declared command tools in both scopes"},{usage:"migrate [--cleanup]",description:"Migrate legacy inline rules"},{usage:"doc",description:"Print the rulebook authoring guide"},{usage:"verify",description:"Validate rule config files"}],options:[{flags:"-g, --global",description:"Use user-scope rule config"},{flags:"--cleanup",description:"Delete legacy files after rule migrate verifies them"},{flags:"--delete-source",description:"Delete clean local source directory on remove"},{flags:"--example",description:"Create an inactive example rulebook with rule init"},{flags:"--project",description:"Use project-scope rule config with rule tool"},{flags:"--cwd-arg",argument:"<name>",description:"Name the working-directory argument with rule tool add"},...Go.slice(0,2),{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net rule init","cc-safety-net rule init --example","cc-safety-net rule wrapper add rtk","cc-safety-net rule tool add ops_bash","cc-safety-net rule tool add ops_run_background --cwd-arg cwd --project",...Bo,"cc-safety-net rule update","cc-safety-net rule migrate --cleanup","cc-safety-net rule verify"]};var oa={name:"status",description:"Show what the runtime is enforcing right now",usage:"status",options:[{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net status"]};var ia={name:"statusline",description:"Print status line with mode indicators for shell integration",usage:"statusline --claude-code",options:[{flags:"-cc, --claude-code",description:"Print status line for Claude Code"},{flags:"-h, --help",description:"Show this help"}],examples:["cc-safety-net statusline -cc","cc-safety-net statusline --claude-code"]};var _r=[oa,zs,ra,Ys,$t,Er,ea,ta,na,Qs,Zs,ia];function kf(_){return _.aliases??[]}function Tr(_){let N=_.toLowerCase();return _r.find((j)=>j.name.toLowerCase()===N||kf(j).some((J)=>J.toLowerCase()===N))}import{existsSync as ah}from"node:fs";import{basename as Cf}from"node:path";function Ar(_,N=7,j=U(_)){let J=Date.now()-N*24*60*60*1000,Y=[],re=new Set,ie=0,de,fe,ke,Ce;if(j)K(_,j);let Re={count:0},Ee=j?zn(j,Re):[];for(let Oe of Ee)for(let Je of It(Oe,Re)){if(Je.decision==="allow")continue;let Ge=new Date(Je.ts).getTime();if(Ge>=J){if(ie++,re.add(Je.sessionId??Cf(Oe,".jsonl")),fe===void 0||Ge<=fe)de=Je.ts,fe=Ge;if(Ce===void 0||Ge>Ce)ke=Je.ts,Ce=Ge;xf(Y,Je,Ge)}}let Ne=Y.map((Oe)=>({timestamp:Oe.ts,command:Oe.command,reason:Oe.reason,relativeTime:Us(new Date(Oe.ts))}));return{totalBlocked:ie,sessionCount:re.size,recentEntries:Ne,oldestEntry:de,newestEntry:ke,unreadable:Re.count}}function xf(_,N,j){let J=_.findIndex((Y)=>j>new Date(Y.ts).getTime());if(J===-1){if(_.length<3)_.push(N);return}if(_.splice(J,0,N),_.length>3)_.pop()}import{dirname as Lf}from"node:path";import{dirname as Sf,join as Pf,resolve as Rf}from"node:path";var Ef="config.json";function vn(_,N,j,J){g(_f(_),`${JSON.stringify(N,null,2)}
`,j,J)}function _f(_){return typeof _==="string"?se(_):_}function Vo(_){return{errors:ce(Af(_),": "," "),ruleNames:new Set($e(_).map((N)=>N.toLowerCase()))}}var Tf="must match pattern (letters, numbers, hyphens, underscores; max 64 chars)",sa="must match pattern (letters, numbers, hyphens, underscores)";function Af(_){if(!aa(_))return[e([],"Config must be an object")];return[..._.version===1?[]:[e(["version"],"must be 1")],...Of(_.rules)]}function Of(_){if(_===void 0)return[];if(!Array.isArray(_))return[e(["rules"],"must be an array")];return[..._.flatMap((N,j)=>aa(N)?If(N,["rules",j]):[e(["rules",j],"must be an object")]),...Me(_)]}function If(_,N){return[...qo(_.name,[...N,"name"],"required string",p,Tf),...qo(_.command,[...N,"command"],"required string",E,sa),..._.subcommand===void 0?[]:qo(_.subcommand,[...N,"subcommand"],"must be a string if provided",E,sa),...$f(_.block_args,[...N,"block_args"]),...Df(_.reason,[...N,"reason"]),..._.intent===void 0||Ie(_.intent)?[]:[e([...N,"intent"],Pe)]]}function qo(_,N,j,J,Y){if(typeof _!=="string")return[e(N,j)];return J.test(_)?[]:[e(N,Y)]}function $f(_,N){if(!Array.isArray(_))return[e(N,"required array")];if(_.length===0)return[e(N,"must have at least one element")];return _.flatMap((j,J)=>{if(typeof j!=="string")return[e([...N,J],"must be a string")];return j===""?[e([...N,J],"must not be empty")]:[]})}function Df(_,N){if(typeof _!=="string")return[e(N,"required string")];if(_==="")return[e(N,"must not be empty")];return _.length>O?[e(N,`must be at most ${O} characters`)]:[]}function aa(_){return!!_&&typeof _==="object"&&!Array.isArray(_)}function Ko(_){let N=la(_);if(!N.ok)return N.result;return Vo(N.parsed)}function la(_){let N=[],j=new Set;try{let J=typeof _==="string"?se(_):_,Y=r(J);if(Y===null)return N.push(`File not found: ${J.path}`),{ok:!1,result:{errors:N,ruleNames:j}};if(!Y.trim())return N.push("Config file is empty"),{ok:!1,result:{errors:N,ruleNames:j}};return{ok:!0,parsed:JSON.parse(Y)}}catch(J){if(J instanceof o)return N.push(J.message),{ok:!1,result:{errors:N,ruleNames:j}};let Y=J instanceof Error?J.message:String(J);return N.push(J instanceof SyntaxError?"Invalid JSON":Y),{ok:!1,result:{errors:N,ruleNames:j}}}}function Or(_){return Rf(_,".safety-net.json")}function Un(_){let N=la(_);if(!N.ok)return N.result;let j=at(N.parsed);return{errors:j.errors,ruleNames:j.sources}}function Dt(_,N={}){return Pf(Sf(_e(_,N)),Ef)}function ca(_,N,j){let J;try{if(r(N)===null)return{path:_,exists:!1,valid:!1,ruleCount:0};J=Un(N),J.errors.push(...B(_,j))}catch(Y){if(!(Y instanceof o))throw Y;J={errors:[Y.message],ruleNames:new Set}}return{path:_,exists:!0,valid:J.errors.length===0,ruleCount:J.ruleNames.size,...J.errors.length>0?{errors:J.errors}:{}}}function Nf(_,N){return{source:N,name:_.name,command:_.command,subcommand:_.subcommand,blockArgs:[..._.block_args],reason:_.reason}}function da(_,N){let j=W(_),J=I(N),Y=Lf(j),re=Q(_,{cwd:N,userConfigPath:j,projectConfigPath:J,userConfigDir:Y}),ie=X(_,{cwd:N,userConfigPath:j,projectConfigPath:J,userConfigDir:Y}),de=new Map(re.rulebooks.flatMap((fe)=>fe.rules.map((ke)=>[ke,fe.source])));return{userConfig:ca(j,ie.userConfigTarget,ie.userScope),projectConfig:ca(J,ie.projectConfigTarget,ie.projectScope),effectiveRules:re.rules.map((fe)=>Nf(fe,de.get(fe.name)??"project"))}}var jf=[{flag:n.level,description:"Safety level preset: standard, strict, or paranoid",defaultBehavior:"standard"},{flag:n.strict,description:"Legacy; equivalent to safety.overrides.fail_closed",defaultBehavior:"permissive"},{flag:n.paranoid,description:"Legacy; equivalent to safety.overrides.paranoid_rm and paranoid_interpreters",defaultBehavior:"off"},{flag:n.paranoidRm,description:"Legacy; equivalent to safety.overrides.paranoid_rm",defaultBehavior:"off"},{flag:n.paranoidInterpreters,description:"Legacy; equivalent to safety.overrides.paranoid_interpreters",defaultBehavior:"off"},{flag:n.worktree,description:"Allow local git discards in linked worktrees",defaultBehavior:"off"},{flag:n.debug,description:"Print diagnostic messages to stderr",defaultBehavior:"off"},{flag:n.auditScope,description:"Command decisions recorded: all, or blocked (privacy-minimizing, denials only)",defaultBehavior:"all"},{flag:n.projectTightenOnly,description:"Ignore project policy settings that weaken the user policy",defaultBehavior:"off"}];function ua(_){return[...jf.map((N)=>({name:N.flag.name,value:pe(N.flag,_.env),isSet:yt(N.flag,_.env),legacyName:N.flag.legacyName,legacyValue:N.flag.legacyName?_.env.get(N.flag.legacyName):void 0,legacyIsSet:N.flag.legacyName?_.env.get(N.flag.legacyName)!==void 0:void 0,description:N.description,defaultBehavior:N.defaultBehavior})),{name:"CC_SAFETY_NET_HOME",value:_.env.get("CC_SAFETY_NET_HOME"),isSet:_.env.get("CC_SAFETY_NET_HOME")!==void 0,description:"Override user-scope config/cache directory",defaultBehavior:"~/.cc-safety-net"}]}var pa={error:0,warning:1,info:2},Hf=["policy","config","audit"];function Ff(_){return _.map((N)=>{if(N==="ownership")return"is not owned by the current user";if(N==="permissions")return"has unsafe permissions";if(N==="symlink")return"is a symbolic link";return"is not a directory"}).join(" and ")}var Mf=[{derive:(_)=>_.hooks.length>0&&_.hooks.every((N)=>!N.configured)?[{checkId:"integration.none-configured",severity:"error",title:"No integration configured",detail:"CC Safety Net is not connected to any supported coding-agent integration.",fixHint:"Run `cc-safety-net install` and configure at least one integration."}]:[]},{derive:(_)=>_.hooks.filter((N)=>N.inspectionStatus==="failed").map((N)=>{let j=cn(N.platform);return{checkId:"integration.inspection-failed",severity:"error",title:`${j} inspection failed`,detail:`Doctor could not verify the ${j} integration configuration.`,fixHint:`Correct the reported ${j} configuration error, then run \`cc-safety-net doctor\` again.`,integration:N.platform}})},{derive:(_)=>_.userConfig.exists&&!_.userConfig.valid?[{checkId:"config.user-invalid",severity:"error",title:"User configuration is invalid",detail:"Doctor could not load a valid user rules configuration.",fixHint:"Run `cc-safety-net rule verify`, correct the reported error, then rerun doctor.",path:_.userConfig.path}]:[]},{derive:(_)=>_.projectConfig.exists&&!_.projectConfig.valid?[{checkId:"config.project-invalid",severity:"error",title:"Project configuration is invalid",detail:"Doctor could not load a valid project rules configuration.",fixHint:"Run `cc-safety-net rule verify`, correct the reported error, then rerun doctor.",path:_.projectConfig.path}]:[]},{derive:(_)=>_.configState.state==="degraded"?[{checkId:"config.runtime-degraded",severity:"warning",title:"Runtime is enforcing a fallback configuration",detail:`The rejected candidate configuration is not active: ${_.configState.reason}`,fixHint:"Fix the file named in the reason, or run `cc-safety-net rule update` to vendor a remote source, then rerun doctor."}]:[]},{derive:(_)=>_.v2Leftovers&&_.v2Leftovers.length>0?[{checkId:"config.v2-leftovers",severity:"info",title:"Rulebook lock and cache leftovers detected",detail:`Files an earlier version left behind are no longer read: ${_.v2Leftovers.join(", ")}.`,fixHint:"Run `cc-safety-net rule sync` (add `--global` for user scope) to migrate them, then rerun doctor."}]:[]},{derive:(_)=>_.legacyConfigs&&_.legacyConfigs.length>0?[{checkId:"config.legacy-ignored",severity:"warning",title:"Legacy inline rule configs are ignored",detail:`CC Safety Net no longer loads these files, so their rules enforce nothing: ${_.legacyConfigs.join(", ")}.`,fixHint:"Run `cc-safety-net rule migrate` to convert them (add `--cleanup` to delete each file once it is converted), then rerun doctor."}]:[]},{derive:(_)=>{let N=_.environment.find((j)=>j.name==="CC_SAFETY_NET_AUDIT_SCOPE");return nt(N?.value)==="invalid"?[{checkId:"environment.audit-scope-invalid",severity:"warning",title:"Audit scope value is invalid",detail:"CC_SAFETY_NET_AUDIT_SCOPE is not `all` or `blocked`, so allowed command decisions are not recorded.",fixHint:"Set CC_SAFETY_NET_AUDIT_SCOPE to `all` or `blocked`, then restart the integration."}]:[]}},...Hf.map((_)=>({derive:(N)=>N.posture.directories.filter((j)=>j.kind===_&&j.status==="unsafe").map((j)=>({checkId:`posture.${_}-directory-unsafe`,severity:"error",title:`${_[0]?.toUpperCase()}${_.slice(1)} directory is unsafe`,detail:`The ${_} directory ${Ff(j.issues)}.`,fixHint:"Ensure this is a real directory owned by the current user with no group or other write access, then rerun doctor.",...j.path?{path:j.path}:{}}))})),{derive:(_)=>{let N=[..._.effectiveSafety.weakenedRuleOverrides].sort();return N.length>0?[{checkId:"posture.rule-overrides-weaken-preset",severity:"warning",title:"Rule overrides weaken the selected preset",detail:`Explicit overrides disable rules the resolved preset would enable: ${N.join(", ")}.`,fixHint:`Remove these \`off\` overrides or set them to \`on\`: ${N.join(", ")}.`}]:[]}}];function fa(_){return Mf.flatMap((N,j)=>N.derive(_).map((J,Y)=>({finding:J,catalogOrder:j,occurrence:Y}))).sort((N,j)=>pa[N.finding.severity]-pa[j.finding.severity]||N.catalogOrder-j.catalogOrder||N.occurrence-j.occurrence).map((N)=>N.finding)}function Ln(){return Boolean(process.stdout.isTTY&&!process.env.NO_COLOR)}var Uf=(_)=>Ln()?`\x1B[32m${_}\x1B[0m`:_,Gf=(_)=>Ln()?`\x1B[33m${_}\x1B[0m`:_,Bf=(_)=>Ln()?`\x1B[34m${_}\x1B[0m`:_,qf=(_)=>Ln()?`\x1B[36m${_}\x1B[0m`:_,Vf=(_)=>Ln()?`\x1B[31m${_}\x1B[0m`:_,Kf=(_)=>Ln()?`\x1B[2m${_}\x1B[0m`:_,Jf=(_)=>Ln()?`\x1B[1m${_}\x1B[0m`:_,en={green:Uf,yellow:Gf,blue:Bf,cyan:qf,red:Vf,dim:Kf,bold:Jf},Wf="\x1B[0m",zf=[39,82,198,226,208,51,196,46,201,214,93,154,220,27,49,190,200,33,129,227,45,160,63,118,123,202];function Yf(_){let N=_;return()=>(N=(N*1664525+1013904223)%4294967296,N/4294967296)}function Zf(_){let N=[...zf],j=Yf(_);for(let J=N.length-1;J>0;J--){let Y=Math.floor(j()*(J+1)),re=N[J];N[J]=N[Y],N[Y]=re}return N}function Xf(_,N=0){if(!Ln())return"";let j=Zf(N);return`\x1B[38;5;${j[_%j.length]}m`}function ma(_,N,j=0){if(!Ln())return`"${_}"`;return`${Xf(N,j)}"${_}"${Wf}`}function Ir(_){return _==="default"?"built-in default":`${_} policy`}var Qf=new RegExp("\x1B\\[[0-9;]*m","g"),Jo=(_)=>_.replace(Qf,"").length;function Yn(_){let N=(_.headers??_.rows[0]??[]).map((ie,de)=>{let fe=Math.max(..._.rows.map((ke)=>Jo(ke[de]??"")));return Math.max(Jo(ie),fe)}),j=(ie,de)=>ie+" ".repeat(Math.max(0,de-Jo(ie))),J=(ie,de)=>de[0]+N.map((fe)=>ie.repeat(fe+2)).join(de[1])+de[2],Y=(ie)=>`│ ${ie.map((de,fe)=>j(de,N[fe]??0)).join(" │ ")} │`,re=_.headers?[`   ${Y(_.headers)}`,`   ${J("─",["├","┼","┤"])}`]:[];return[`   ${J("─",["┌","┬","┐"])}`,...re,..._.rows.map((ie)=>`   ${Y(ie)}`),`   ${J("─",["└","┴","┘"])}`].join(`
`)}function ga(_){let N=[];N.push("Hook Integration"),N.push(em(_));let j=[],J=[];for(let Y of _){let re=cn(Y.platform);if(Y.errors&&Y.errors.length>0)for(let ie of Y.errors)if(Y.configured)j.push({platform:re,message:ie});else J.push({platform:re,message:ie})}for(let Y of j)N.push(`   Warning (${Y.platform}): ${Y.message}`);for(let Y of J)N.push(en.red(`   Error (${Y.platform}): ${Y.message}`));return N.join(`
`)}function em(_){let N=["Platform","Discovery","Configuration","Inspection"],j=_.map((J)=>{let Y=cn(J.platform);if(J.inspectionStatus==="not-inspected"){let fe=en.dim("Not inspected");return[Y,fe,fe,fe]}let re=J.detected?en.green("Detected"):J.inspectionStatus==="failed"?en.red("Unknown"):en.dim("Not detected"),ie=J.configured?en.green("Configured"):J.detected?en.yellow("Not configured"):J.inspectionStatus==="failed"?en.red("Unknown"):en.dim("Not applicable"),de=J.inspectionStatus==="verified"?en.green("Verified"):J.inspectionStatus==="failed"?en.red("Failed"):en.dim("Not applicable");return[Y,re,ie,de]});return Yn({headers:N,rows:j})}function ya(_){let j=["Guard Engine Verification",`   Synthetic self-test: ${_.failed>0?en.red(`${_.passed}/${_.total} FAIL`):en.green(`${_.passed}/${_.total} passed`)}`],J=_.results.filter((Y)=>!Y.passed);if(J.length>0){j.push(""),j.push(en.red("   Failures:"));for(let Y of J)j.push(en.red(`   • ${Y.description}`)),j.push(en.red(`     expected ${Y.expected}, got ${Y.actual}`))}return j.join(`
`)}function nm(_){if(_.length===0)return"   (no custom rules)";let N=["Source","Name","Command","Block Args"],j=_.map((J)=>[J.source,J.name,J.subcommand?`${J.command} ${J.subcommand}`:J.command,J.blockArgs.join(", ")]);return Yn({headers:N,rows:j})}function ha(_){let N=[];if(N.push("Configuration"),N.push(tm(_.userConfig,_.projectConfig)),N.push(""),_.effectiveRules.length>0)N.push(`   Effective rules (${_.effectiveRules.length} total):`),N.push(nm(_.effectiveRules));else N.push("   Effective rules: (none - using built-in rules only)");return N.join(`
`)}function tm(_,N){let j=["Scope","Status"],J=(re)=>{if(!re.exists)return en.dim("N/A");if(!re.valid)return en.red(`Invalid (${re.errors?.[0]??"unknown error"})`);return en.green("Configured")},Y=[["User",J(_)],["Project",J(N)]];return Yn({headers:j,rows:Y})}function va(_){let N=[];return N.push("Environment"),N.push(rm(_)),N.join(`
`)}function ba(_){let N=_.effectiveSafety.policyScopes,j=["Effective Safety",`   Selected preset: ${_.effectiveSafety.selectedPreset}${N?` (${Ir(N.levelScope)})`:""}`,`   Effective: ${_.effectiveSafety.level}`],J=[["fail_closed","fail_closed"],["paranoid_rm","paranoid_rm"],["paranoid_interpreters","paranoid_interpreters"]];for(let[Y,re]of J){let ie=_.effectiveSafety.capabilities[Y],de=ie.enabled?en.green("ON"):en.dim("OFF"),fe=ie.sources.length>0?` (${ie.sources.join(", ")})`:"";j.push(`   ${re}: ${de} via ${ie.source}${fe}`)}if(N&&N.weakenings.length>0){j.push(`   Project policy deltas${N.weakeningsIgnored?" (ignored)":""}:`);for(let Y of N.weakenings)j.push(`      ${Y}`)}j.push(`   Stored rule customizations: ${_.effectiveSafety.ruleCounts.stored}`),j.push(`   Effective rule customizations: ${_.effectiveSafety.ruleCounts.effective}`);for(let[Y,re]of Object.entries(_.effectiveSafety.ruleOverrides))j.push(`   ${Y}: ${re}`);return j.join(`
`)}function wa(_){let N=["Findings"];if(_.length===0)return N.push("   No findings from inspected doctor facts."),N.join(`
`);for(let j of _){let J=`[${j.severity.toUpperCase()}] ${j.checkId}: ${yn(j.title)}`,Y=j.severity==="error"?en.red:j.severity==="warning"?en.yellow:en.blue;if(N.push(`   ${Y(J)}`),N.push(`      ${yn(j.detail)}`),j.path)N.push(`      Path: ${yn(j.path)}`);if(j.fixHint)N.push(`      Fix: ${yn(j.fixHint)}`)}return N.join(`
`)}function rm(_){let N=["Variable","Status","Legacy"],j=_.map((J)=>{let Y=J.isSet?en.green("✓"):en.dim("✗"),re=J.legacyName&&J.legacyIsSet?`${J.legacyName} ${en.green("✓")}`:J.legacyName??"";return[J.name,Y,re]});return Yn({headers:N,rows:j})}function ka(_){let N=[];if(_.totalBlocked===0)N.push("Recent Activity"),N.push("   No blocked commands in the last 7 days"),N.push("   Tip: This is normal for new installations");else N.push(`Recent Activity · last 7 days (${_.totalBlocked} blocked / ${_.sessionCount} sessions)`),N.push(om(_.recentEntries));if(_.unreadable>0)N.push(`   Warning: ${_.unreadable} audit log ${_.unreadable===1?"source":"sources"} could not be read; this summary is incomplete`);return N.join(`
`)}function om(_){let N=["Time","Command"],j=_.map((J)=>{let Y=yn(J.command.replace(/\r\n|\r|\n/g," ↵ ").replace(/\t/g," ")),re=Y.length>40?`${Y.slice(0,37)}...`:Y;return[J.relativeTime,re]});return Yn({headers:N,rows:j})}function Ca(_){let N=[];if(N.push("Update Check"),_.latestVersion===null&&!_.error)return N.push($r([["Status",en.dim("Skipped")],["Installed",_.currentVersion]])),N.join(`
`);if(_.error)return N.push($r([["Status",`${en.yellow("⚠")} Error`],["Installed",_.currentVersion],["Error",en.dim(_.error)]])),N.join(`
`);if(_.updateAvailable)return N.push($r([["Status",`${en.yellow("⚠")} Update Available`],["Current",_.currentVersion],["Latest",en.green(_.latestVersion??"")]])),N.push(""),N.push("   Run: bunx cc-safety-net@latest doctor"),N.push("   Or:  npx cc-safety-net@latest doctor"),N.join(`
`);return N.push($r([["Status",`${en.green("✓")} Up to date`],["Version",_.currentVersion]])),N.join(`
`)}function $r(_){return Yn({rows:_})}function xa(_){let N=[];return N.push("System Info"),N.push(im(_)),N.join(`
`)}function im(_){let N=["Component","Version"],j=(re)=>{if(re===null)return en.dim("not found");return re},Y=[{label:"cc-safety-net",value:_.version},...Rr.map((re)=>({label:cn(re),value:_.versions[re]??null})),{label:"Node.js",value:_.nodeVersion},{label:"npm",value:_.npmVersion},{label:"Bun",value:_.bunVersion},{label:"Platform",value:_.platform}].map((re)=>[re.label,j(re.value)]);return Yn({headers:N,rows:Y})}function Sa(_){if(_.findings.length===0)return en.green(`
No findings from inspected doctor facts.`);let N={error:_.findings.filter((re)=>re.severity==="error").length,warning:_.findings.filter((re)=>re.severity==="warning").length,info:_.findings.filter((re)=>re.severity==="info").length},j=["error","warning","info"].filter((re)=>N[re]>0).map((re)=>`${N[re]} ${re}`),J=_.findings.length===1?"finding":"findings",Y=`
${_.findings.length} ${J}: ${j.join(", ")}.`;if(N.error>0)return en.red(Y);if(N.warning>0)return en.yellow(Y);return en.blue(Y)}import{lstatSync as sm}from"node:fs";import{dirname as Wo}from"node:path";function zo(_,N){try{let j=sm(N);if(j.isSymbolicLink())return{kind:_,path:N,status:"unsafe",issues:["symlink"]};if(!j.isDirectory())return{kind:_,path:N,status:"unsafe",issues:["not-directory"]};if(process.platform==="win32"||typeof process.getuid!=="function")return{kind:_,path:N,status:"unknown",issues:[]};let J=[...j.uid!==process.getuid()?["ownership"]:[],...(j.mode&18)!==0?["permissions"]:[]];return{kind:_,path:N,status:J.length>0?"unsafe":"safe",issues:J}}catch(j){if(typeof j==="object"&&j!==null&&"code"in j&&j.code==="ENOENT")return{kind:_,path:N,status:"not-applicable",issues:[]};return{kind:_,path:N,status:"unknown",issues:[]}}}function Pa(_,N){let j=U(_);return{directories:[zo("policy",Wo(Wo(N))),zo("config",Wo(N)),...j?[zo("audit",j)]:[{kind:"audit",status:"unknown",issues:[]}]]}}import{spawn as am}from"node:child_process";import{existsSync as Ra}from"node:fs";import{delimiter as lm,extname as cm,join as dm}from"node:path";import{stripVTControlCharacters as Ea}from"node:util";var Ta="2.6.9",um=5000,pm="_CC_SAFETY_NET_TEST_SPAWN_PLATFORM";function pn(){return Ta}function Yo(_,N){let j=_[N];if(j)return j;let J=Object.keys(_).find((Y)=>Y.toLowerCase()===N.toLowerCase()&&!!_[Y]);return J?_[J]:j}function fm(_){return(Yo(_,"PATHEXT")||".COM;.EXE;.BAT;.CMD").split(";").filter((N)=>N.length>0)}function mm(_,N){let j=cm(_)?[_]:[...fm(N).map((J)=>`${_}${J}`),_];if(_.includes("/")||_.includes("\\"))return j.find((J)=>Ra(J))??_;return(Yo(N,"PATH")??"").split(lm).flatMap((J)=>j.map((Y)=>dm(J,Y))).find((J)=>Ra(J))??_}function _a(_){if(!/[\s"&|<>^]/.test(_))return _;return`"${_.replace(/"/g,'""')}"`}function Zn(_,N){let[j,...J]=_,Y=N[pm]==="win32"?"win32":process.platform;if(!j||Y!=="win32")return{cmd:j??"",args:J};let re=mm(j,N);if(!/\.(?:bat|cmd)$/i.test(re))return{cmd:re,args:J};return{cmd:Yo(N,"COMSPEC")??"cmd.exe",args:["/d","/c",["call",_a(re),...J.map(_a)].join(" ")]}}var Lt=async(_,N=um)=>{let j=await gm(_,{timeoutMs:N});if(j.code!==0)return null;return Ea(j.stdout).trim()||Ea(j.stderr).trim()||null};function gm(_,N){let[j,...J]=_;if(!j)return Promise.resolve({code:null,stdout:"",stderr:""});return new Promise((Y)=>{try{let re=Zn([j,...J],process.env),ie=am(re.cmd,re.args,{stdio:["ignore","pipe","pipe"]}),de=!1,fe="",ke="";ie.stdout.on("data",(Ee)=>{fe+=Ee.toString()}),ie.stderr.on("data",(Ee)=>{ke+=Ee.toString()});let Ce=(Ee)=>{if(de)return;de=!0,clearTimeout(Re),Y(Ee)},Re=setTimeout(()=>{ie.kill(),Ce({code:null,stdout:fe,stderr:ke})},N.timeoutMs);ie.on("close",(Ee)=>{Ce({code:Ee,stdout:fe,stderr:ke})}),ie.on("error",()=>{Ce({code:null,stdout:fe,stderr:ke})})}catch{Y({code:null,stdout:"",stderr:""})}})}function Dr(_){if(!_)return null;let N=/Claude Code\s+(\d+\.\d+\.\d+)/i.exec(_);if(N)return N[1]??null;let j=/v?(\d+\.\d+\.\d+(?:-[a-zA-Z0-9.]+)?)/i.exec(_);if(j)return j[1]??null;return _.split(`
`)[0]?.trim()||null}async function Lr(_,N=Lt,j=process.cwd()){let J=Promise.all(Rn.map(async(Re)=>[Re.id,Dr(await N([...Re.probeCommand]))])),[Y,re,ie,de,fe,ke,Ce]=await Promise.all([J,J.then(async(Re)=>{let Ee=Re.find(([Je])=>Je==="opencode")?.[1];if(!Ee?.startsWith("2.")||!_(Ee))return null;let Ne=["--param",`location[directory]=${j}`],Oe=["opencode","api","integration.list",...Ne];return await N(Oe,30000),N(["opencode","api","plugin.list",...Ne],30000)}),N(["codex","plugin","list"],30000),N(["amp","plugins","list"],30000),N(["node","--version"]),N(["npm","--version"]),N(["bun","--version"])]);return{version:Ta,versions:Object.fromEntries(Y),codexPluginListOutput:ie,ampPluginListOutput:de,openCodePluginListOutput:re,nodeVersion:Dr(fe),npmVersion:Dr(ke),bunVersion:Dr(Ce),platform:`${process.platform} ${process.arch}`}}function Zo(_,N){if(N==="dev")return!1;let j=_.split(".").map(Number),J=N.split(".").map(Number),[Y=0,re=0,ie=0]=j,[de=0,fe=0,ke=0]=J;if(Y!==de)return Y>de;if(re!==fe)return re>fe;return ie>ke}async function Gn(){let _=pn(),N=new AbortController,j=setTimeout(()=>N.abort(),3000);try{let J=await fetch("https://registry.npmjs.org/cc-safety-net/latest",{signal:N.signal});if(!J.ok)return{currentVersion:_,latestVersion:null,updateAvailable:!1,error:`npm registry returned ${J.status}`};let Y=await J.json(),re=Zo(Y.version,_);return{currentVersion:_,latestVersion:Y.version,updateAvailable:re}}catch(J){return{currentVersion:_,latestVersion:null,updateAvailable:!1,error:J instanceof Error?J.message:"Network error"}}finally{clearTimeout(j)}}import*as ja from"node:readline";var $a=(_)=>`\x1B[${_}B`,ym=(_)=>`\x1B[${_}A`;var Aa=["░","▒","▓","╱","╲","┃","━","┏","┓","┗","┛","╋"];function hm(_){return new Promise((N)=>setTimeout(N,_))}function vm(_,N,j){if(!j)return N(_);if(j.aborted)return Promise.resolve();return new Promise((J,Y)=>{let re=()=>j.removeEventListener("abort",ie),ie=()=>{re(),J()};j.addEventListener("abort",ie,{once:!0}),N(_).then(()=>{re(),J()},(de)=>{re(),Y(de)})})}function Nr(_){return Math.max(0,Math.min(1,_))}function Nt(_){return Math.max(0,Math.min(255,Math.round(_)))}function Xo(_){return _<=0.0031308?12.92*_:1.055*_**0.4166666666666667-0.055}function bm(_,N,j){let J=j*Math.PI/180,Y=N*Math.cos(J),re=N*Math.sin(J),ie=(_+0.3963377774*Y+0.2158037573*re)**3,de=(_-0.1055613458*Y-0.0638541728*re)**3,fe=(_-0.0894841775*Y-1.291485548*re)**3;return{blue:Nt(Xo(Nr(-0.0041960863*ie-0.7034186147*de+1.707614701*fe))*255),green:Nt(Xo(Nr(-1.2684380046*ie+2.6097574011*de-0.3413193965*fe))*255),red:Nt(Xo(Nr(4.0767416621*ie-3.3077115913*de+0.2309699292*fe))*255)}}function Qo(_,N){let j=(N*_*180/Math.PI%360+360)%360;return bm(0.72,0.15,j)}function Da(_,N=0.1){let j=Qo(N,_);return`\x1B[38;2;${j.red};${j.green};${j.blue}m`}function wm(_,N){return{blue:Nt(_.blue+(255-_.blue)*N),green:Nt(_.green+(255-_.green)*N),red:Nt(_.red+(255-_.red)*N)}}function La(_,N,j){let J=Math.imul(_+2654435769,2246822507)^Math.imul(N+3266489909,668265263)^Math.imul(j+374761393,2654435761),Y=J^J>>>15,re=Math.imul(Y,739982445),ie=re^re>>>12,de=Math.imul(ie,695872825);return((de^de>>>15)>>>0)/4294967296}function km(_,N,j){let J=Math.floor(La(_,N,j)*Aa.length);return Aa[J]??"░"}function Oa(_){let N=Nr(_);return N*N*N*(N*(N*6-15)+10)}function Cm(_){if(_.length===0)return"";let N=[],j=!1,J="";for(let Y of _){let re=`${Y.red};${Y.green};${Y.blue}`;if(Y.bold!==j)N.push(Y.bold?"\x1B[1m":"\x1B[22m"),j=Y.bold;if(re!==J)N.push(`\x1B[38;2;${re}m`),J=re;N.push(Y.character)}return`${N.join("")}\x1B[22m\x1B[39m`}function xm(_,N,j,J,Y){return _.map((re,ie)=>({...Qo(j,J+N+ie/Y),bold:!1,character:re}))}function Sm(_,N,j,J,Y,re,ie,de){let fe=Math.max(1,J*0.75),ke=Math.min(1,j/fe),Ce=Y*Oa(ke),Re=Math.max(0,(j-fe)/Math.max(1,J-fe)),Ee=(1-Oa(j/J))*de*2,Ne=0.35*Math.max(0,1-Re*2),Oe=ke>=1,Je=Math.min(_.length,Math.ceil(Ce+2+1));return _.slice(0,Je).map((Ge,Ye)=>{let rn=Qo(re,ie+N+Ye/de+Ee),on=Ye+La(N,Ye,7919)*2-1;if(on>Ce+2)return{...rn,bold:!1,character:" "};let sn=Ce-on,tn=0.8*Math.exp(-(sn*sn)/12.5),fn=Math.min(0.9,tn+Ne),$n=!Oe&&on>Ce-4;return{...wm(rn,fn),bold:fn>0.3,character:$n?km(N,Ye,j):Ge}})}function Ia(_){return`\x1B[?2026h${_.map((N,j)=>`\x1B8${j>0?$a(j):""}${Cm(N)}`).join("")}\x1B[?2026l`}async function ei(_,N={}){if(!_)return;let j=N.output??process.stdout,J=N.sleep??hm,Y=N.seed??0,re=_.split(`
`).map((Ce)=>Array.from(Ce)),ie=Math.max(...re.map((Ce)=>Ce.length)),de=12000*re.filter((Ce)=>Ce.length>0).length/40,fe=ie>0?Math.max(1,Math.ceil(de/16.666666666666668)):0,ke=fe>0?de/fe:0;j.write(`\x1B[?25l${re.length>1?`${`
`.repeat(re.length-1)}${ym(re.length-1)}`:""}\x1B7`);try{for(let Ce=1;Ce<=fe;Ce+=1){if(N.signal?.aborted)break;j.write(Ia(re.map((Re,Ee)=>Sm(Re,Ee,Ce,fe,ie,0.1,Y,3)))),await vm(ke,J,N.signal)}}finally{if(j.write(Ia(re.map((Ce,Re)=>xm(Ce,Re,0.1,Y,3)))),j.write("\x1B8"),re.length>1)j.write($a(re.length-1));j.write(`
\x1B[0m\x1B[?25h`)}}var Na=["┏━┛┏━┛  ┏━┛┏━┃┏━┛┏━┛━┏┛┃ ┃  ┏━ ┏━┛━┏┛","┃  ┃    ━━┃┏━┃┏━┛┏━┛ ┃ ━┏┛  ┃ ┃┏━┛ ┃ ","━━┛━━┛  ━━┛┛ ┛┛  ━━┛ ┛  ┛   ┛ ┛━━┛ ┛ "].join(`
`);function Pm(_){return Boolean(_.isTTY)}async function Zt(_={}){let N=_.output??process.stdout;if(!Pm(N))return;let j=_.input??process.stdin,J={output:N,seed:_.seed??Math.random()*8192,sleep:_.sleep};if(!j.isTTY||typeof j.setRawMode!=="function"){await ei(Na,J);return}let Y=new AbortController,re=j.readableFlowing===!0,ie=j.isRaw===!0,de=!1,fe=(ke,Ce)=>{if(Ce.ctrl&&Ce.name==="c")de=!0;if(de||Ce.name==="return"||Ce.name==="enter")Y.abort()};ja.emitKeypressEvents(j),j.on("keypress",fe),j.setRawMode(!0),j.resume();try{await ei(Na,{...J,signal:Y.signal})}finally{if(j.off("keypress",fe),j.setRawMode(ie),!re)j.pause()}if(!de)return;if(_.onInterrupt){_.onInterrupt();return}process.kill(process.pid,"SIGINT")}import{createHash as Am}from"node:crypto";import{existsSync as Ma}from"node:fs";import{dirname as jr,join as Ua}from"node:path";import{dirname as Ha,join as Rm,resolve as Em}from"node:path";var _m="rule.lock";function Tm(_){return Rm(Ha(_),_m)}function Fa(_={}){return Em(_.cwd??process.cwd(),".safety-net.json")}function hn(_,N){let j=N.global?N.userConfigPath??W(_,N):N.projectConfigPath??I(N.cwd??process.cwd()),J=N.global?it(_,N):st(j,N.cwd??process.cwd()),Y=Tm(j);return{configDir:Ha(j),configPath:j,lockPath:Y,filesystemScope:J,configTarget:i(J,j),lockTarget:i(J,Y)}}var Om="`cc-safety-net rule sync` is deprecated: rulebooks are live files that need no synchronization. This run only migrates the lock and cache an earlier version left behind.",Im="cache",$m="rulebooks";function Ga(_,N={}){let j=hn(_,N),J=i(j.filesystemScope,qa(j.configDir)),Y=r(j.lockTarget);if(console.log(Om),Y===null&&!Ma(J.path))return console.log(`No v2 lock or cache leftovers found in ${jr(j.configDir)}; nothing to migrate.`),0;let re=Hm(Y),ie=d(j.configTarget);if(!ie.config&&(r(j.configTarget)!==null||re.size>0))return console.error(`Cannot migrate: the rules config in ${jr(j.configDir)} is missing or unreadable while v2 leftovers remain. Restore rule.json, then re-run rule sync.`),1;let de=ie.config?.rules??[];for(let fe of de.flatMap((ke)=>Dm(ke,re,j,J,N.global===!0)))console.log(fe);return H(j.lockTarget),xt(J),console.log(`Removed the v2 lock and cache under ${jr(j.configDir)}.`),0}function Ba(_,N){return[...new Set([{cwd:N},{cwd:N,global:!0}].flatMap((j)=>{let J=hn(_,j);return[J.lockPath,qa(J.configDir)]}))].filter((j)=>Ma(j))}function Dm(_,N,j,J,Y){if(!C(_))return[];let re=L(_).name,ie=i(j.filesystemScope,M(j.configDir,re)),de=r(ie);if(de!==null&&Lm(de,re))return[];let fe=N.get(_),ke=fe?Nm(fe,re,J.path,j.filesystemScope):null;if(ke===null)return[`Could not migrate ${_} from the v2 cache. Run \`cc-safety-net rule update ${_}${Y?" --global":""}\` to vendor it.`];if(g(ie,ke),de!==null)return[`Restored ${_} from the v2 cache over an invalid file.`];return[`Vendored ${_} from the v2 cache.`]}function Lm(_,N){let j=ve(_);return!("problem"in j)&&j.rulebook.name===N}function Nm(_,N,j,J){let Y=Ua(j,$m,`${jm(_)}--${_.digest.replace("sha256:","").slice(0,12)}`,ge),re=r(i(J,Y));if(re===null||Um(re)!==_.digest)return null;let ie=ve(re);if("problem"in ie||ie.rulebook.name!==N)return null;return re}function qa(_){return Ua(jr(_),Im)}function jm(_){return([_.owner,_.repo,_.display_ref,_.name].every((J)=>typeof J==="string"&&J!=="")?`${_.owner}/${_.repo}#${_.display_ref}/${_.name}`:_.spec).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"rulebook"}function Hm(_){let N=_===null?null:Mm(_),j=Va(N)&&Array.isArray(N.rulebooks)?N.rulebooks:[];return new Map(j.filter(Fm).map((J)=>[J.spec,J]))}function Fm(_){return Va(_)&&typeof _.spec==="string"&&typeof _.digest==="string"}function Va(_){return!!_&&typeof _==="object"}function Mm(_){try{return JSON.parse(_)}catch{return null}}function Um(_){return`sha256:${Am("sha256").update(_).digest("hex")}`}var Ka="\r\x1B[2K",Gm="\x1B[?25l",Bm="\x1B[39m",qm="\x1B[?25h",Vm=100,Km=0.55,Jm=80,Ja=["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"];function Wm(_){return new Promise((N)=>setTimeout(N,_))}async function Hr(_,N={}){let j=N.output??process.stdout;if(!j.isTTY)return _;let J=N.sleep??Wm,Y=!1,re=_.then((de)=>(Y=!0,de),(de)=>{throw Y=!0,de});if(await Promise.race([re.then(()=>!0),J(Vm).then(()=>!1)]))return re;j.write(Gm);try{for(let de=0;!Y;de+=1)j.write(`${Ka}${Da(de*Km)}${Ja[de%Ja.length]}${Bm} ${N.loadingMessage??"Loading…"}`),await Promise.race([re,J(Jm)]);return await re}finally{j.write(`${Ka}${qm}`)}}async function Xt(_,N,j,J={}){let Y=N();if(_)await j();if(_&&Y.ready)await Hr(Y.ready,J);return Y.finish()}import{stripVTControlCharacters as zm}from"node:util";var Fr="amp plugins list",Ym=/^\s*[✓✗]\s+cc-safety-net(?:\.ts)?\s+\(User Plugins\)\s+(\S+)\s*$/;function Wa(_){if(!_.ampPluginListOutput)return{platform:"amp",status:"n/a"};let N=zm(_.ampPluginListOutput).split(`
`).map((j)=>Ym.exec(j)?.[1]).find((j)=>j!==void 0);if(!N)return{platform:"amp",status:"n/a"};if(N!=="active")return{platform:"amp",status:"disabled",method:Fr,configPath:Fr,errors:[`Amp personal plugin cc-safety-net is ${N}; run "plugins: reload" in Amp or reinstall with install --amp`]};return{platform:"amp",status:"configured",method:Fr,configPath:Fr}}import{existsSync as og,readFileSync as ig}from"node:fs";import{isAbsolute as Nx,join as rg}from"node:path";function Qt(_){return rg(_,".gemini","config","hooks.json")}var za=new Map([["run_command","auto"]]);var sg=/cc-safety-net\s+hook\s+(?:[^\s]+\s+)*(?:--agy-cli|-ac)(\s|["']|$)/;function ag(_){if(!_||typeof _!=="object"||Array.isArray(_))return[];return Object.values(_).flatMap((N)=>{if(!N||typeof N!=="object"||Array.isArray(N))return[];let j=N,J=j.PreToolUse;if(!Array.isArray(J))return[];return J.flatMap((Y)=>{if(!Y||typeof Y!=="object"||Array.isArray(Y))return[];let re=Y.hooks;if(!Array.isArray(re))return[];return re.flatMap((ie)=>{if(!ie||typeof ie!=="object"||Array.isArray(ie))return[];let de=ie.command;if(typeof de!=="string"||!sg.test(de))return[];return[{command:de,enabled:j.enabled!==!1}]})})})}function Ya(_){let N=Qt(_.environment.home);if(!og(N))return{platform:"antigravity-cli",status:"n/a",configPath:N};let j;try{j=ag(JSON.parse(ig(N,"utf-8")))}catch(J){return{platform:"antigravity-cli",status:"n/a",configPath:N,errors:[`Failed to parse Antigravity hooks config ${N}: ${J instanceof Error?J.message:String(J)}`]}}if(j.some((J)=>J.enabled))return{platform:"antigravity-cli",status:"configured",method:"hook config",configPath:N};if(j.length>0)return{platform:"antigravity-cli",status:"disabled",method:"hook config",configPath:N};return{platform:"antigravity-cli",status:"n/a",configPath:N}}import{existsSync as pg}from"node:fs";import{join as er}from"node:path";import{existsSync as lg,lstatSync as cg,readFileSync as dg}from"node:fs";import{join as ug}from"node:path";function kn(_,N=(j)=>j){if(!lg(_))return{kind:"missing"};try{return{kind:"ok",value:JSON.parse(N(dg(_,"utf-8")))}}catch{return{kind:"unreadable"}}}function Nn(_,N){if(_==="~")return N;if(_.startsWith("~/")||_.startsWith("~\\"))return ug(N,_.slice(2));return _}function dn(_){try{return cg(_)}catch{return}}function Gr(_,N){let j=dn(N);if(!j)return{platform:_,status:"n/a",configPath:N};if(!j.isSymbolicLink()&&j.isDirectory())return;return{platform:_,status:"n/a",configPath:N,errors:[`${N} is a symlink or not a directory; move or remove it before installing`]}}function nn(_,N){return typeof _==="object"&&_!==null?_[N]:void 0}var Br="cc-safety-net@cc-marketplace";function qr(_){return _.env.get("CLAUDE_CONFIG_DIR")||er(_.home,".claude")}function oi(_){return er(qr(_),"plugins","installed_plugins.json")}function Za(_,N){let j=nn(nn(_,"plugins"),N);return Array.isArray(j)&&j.length>0}function Vr(_,N){let j=kn(oi(_));return j.kind==="ok"&&Za(j.value,N)}function Kr(_){let N=oi(_),j=kn(N);if(j.kind==="unreadable")return{platform:"claude-code",status:"not-inspected"};if(j.kind==="missing")return{platform:"claude-code",status:"n/a"};if(!Za(j.value,Br))return{platform:"claude-code",status:"n/a"};let J=er(qr(_),"settings.json"),Y=kn(J);if(Y.kind==="unreadable")return{platform:"claude-code",status:"not-inspected"};if(!(Y.kind==="ok"&&nn(nn(Y.value,"enabledPlugins"),Br)===!0))return{platform:"claude-code",status:"disabled",method:"plugin config",configPath:J,errors:[`${Br} is installed but not enabled in Claude Code`]};return{platform:"claude-code",status:"configured",method:"plugin config",configPath:N}}function Xa(_){if(Kr(_).status!=="configured")return;let N=kn(oi(_)),j=N.kind==="ok"?nn(nn(N.value,"plugins"),Br):void 0,J=(Array.isArray(j)?j:[]).filter((de)=>nn(de,"scope")==="user").map((de)=>nn(de,"installPath")).find((de)=>typeof de==="string");if(!J)return;let Y=er(J,".cursor-plugin","plugin.json"),re=kn(Y),ie=re.kind==="ok"?nn(re.value,"hooks"):void 0;return typeof ie==="string"&&pg(er(J,ie))?Y:void 0}function Qa(_){return Kr(_.environment)}var el="Start Codex, open `/hooks`, select the cc-safety-net PreToolUse hook, and press `t` to trust it.";function nl(_){if(!_.codexPluginListOutput)return{platform:"codex",status:"n/a"};let N=_.codexPluginListOutput.split(`
`).find((j)=>j.includes("https://github.com/kenryu42/cc-safety-net.git"));if(!N)return{platform:"codex",status:"n/a"};if(!N.includes("installed,"))return{platform:"codex",status:"n/a"};if(!N.includes("installed, enabled"))return{platform:"codex",status:"disabled",method:"codex plugin list",configPath:"codex plugin list",errors:["Codex plugin line for https://github.com/kenryu42/cc-safety-net.git must contain installed, enabled."]};return{platform:"codex",status:"configured",method:"codex plugin list",configPath:"codex plugin list",errors:["Codex runs only trusted hooks, and doctor cannot check trust. Start Codex, open `/hooks`, select the cc-safety-net PreToolUse hook, and press `t` to trust it."]}}import{existsSync as Yr,readdirSync as fg,readFileSync as mg}from"node:fs";import{join as wn}from"node:path";function bn(_){let N="",j=0,J=!1,Y=!1,re=-1;while(j<_.length){let ie=_[j],de=_[j+1];if(Y){N+=ie,Y=!1,j++;continue}if(ie==='"'&&!J){J=!0,re=-1,N+=ie,j++;continue}if(ie==='"'&&J){J=!1,N+=ie,j++;continue}if(ie==="\\"&&J){Y=!0,N+=ie,j++;continue}if(J){N+=ie,j++;continue}if(ie==="/"&&de==="/"){while(j<_.length&&_[j]!==`
`)j++;continue}if(ie==="/"&&de==="*"){j+=2;while(j<_.length-1){if(_[j]==="*"&&_[j+1]==="/"){j+=2;break}j++}continue}if(ie===","){re=N.length,N+=ie,j++;continue}if(ie==="}"||ie==="]"){if(re!==-1){let fe=N.slice(re+1);if(/^\s*$/.test(fe))N=N.slice(0,re)+fe}re=-1,N+=ie,j++;continue}if(!/\s/.test(ie))re=-1;N+=ie,j++}return N}function rl(_,N,j){let J=N+1,Y=!1;while(J<_.length){if(Y){Y=!1,J++;continue}if(_[J]==="\\"){Y=!0,J++;continue}if(_[J]==='"')return J+1;J++}throw Error(j)}function si(_,N,j){let J=_[N],Y=J==="["?"]":"}",re=0,ie=N;while(ie<_.length){let de=j.skipComment?.(_,ie)??ie;if(de!==ie){ie=de;continue}if(_[ie]==='"'){ie=rl(_,ie,j.stringError);continue}if(_[ie]===J)re++;if(_[ie]===Y){if(re--,re===0)return ie}ie++}throw Error(j.bracketError)}function ol(_,N){let j=_.lastIndexOf(`
`,N)+1;return/^[ \t]*/.exec(_.slice(j))?.[0]??""}function il(_,N){let j=N.end+(/^\s*/.exec(_.slice(N.end))?.[0].length??0);if(_[j]===","){let ie=_[j+1]===`
`?j+2:j+1;return`${_.slice(0,N.start)}${_.slice(ie)}`}let J=_.slice(0,N.start).search(/\s*$/)-1;if(_[J]!==",")return`${_.slice(0,N.start)}${_.slice(N.end)}`;let Y=_.lastIndexOf(`
`,J-1),re=Y!==-1&&/^\s*$/.test(_.slice(Y+1,J))?Y:J;return`${_.slice(0,re)}${_.slice(N.end)}`}function ii(_,N){if(_.startsWith("//",N)){let j=_.indexOf(`
`,N+2);return j===-1?_.length:j+1}if(_.startsWith("/*",N)){let j=_.indexOf("*/",N+2);return j===-1?_.length:j+2}return N}function tl(_,N){let j=N;while(j<_.length){if(/\s/.test(_[j]??"")){j++;continue}let J=ii(_,j);if(J===j)return j;j=J}return j}function sl(_,N,j){let J=0,Y=0;while(Y<_.length){let re=ii(_,Y);if(re!==Y){Y=re;continue}if(_[Y]==='"'){let ie=rl(_,Y,j.stringError);if(J===1&&JSON.parse(_.slice(Y,ie))===N){let de=tl(_,ie),fe=tl(_,de+1);if(_[de]===":"&&_[fe]==="[")return{start:fe,end:si(_,fe,{skipComment:ii,...j})}}Y=ie;continue}if(_[Y]==="{"||_[Y]==="[")J++;if(_[Y]==="}"||_[Y]==="]")J--;Y++}return}var Tn="cc-safety-net@cc-marketplace",Jr=["cc-marketplace","cc-safety-net"],al=["_direct","copilot-safety-net"],ll=["cc-marketplace","safety-net"],cl="safety-net@cc-marketplace";function Wr(_,N){let j=N.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return new RegExp(`(^|[^a-z0-9-])${j}([^a-z0-9-]|$)`,"m").test(_??"")}function dl(_){return Wr(_,"cc-safety-net@cc-marketplace")}function ul(_){return Wr(_,"cc-marketplace")}function pl(_){return Wr(_,"copilot-safety-net")}function fl(_){return Wr(_,"safety-net@cc-marketplace")}function zr(_){if(!_?.includes("cc-safety-net"))return!1;return/(^|\s)hook\s+(?:[^\s]+\s+)*(--copilot-cli|-cp)(\s|$)/.test(_)}function gl(_,N){if(!_)return null;let j=_.match(/(\d+)\.(\d+)\.(\d+)/);if(!j)return null;let J=[Number(j[1]),Number(j[2]),Number(j[3])];for(let Y=0;Y<N.length;Y++){let re=J[Y]??0,ie=N[Y]??0;if(re!==ie)return re>ie}return!0}function gg(_){return gl(_,[0,0,422])}function yg(_){return gl(_,[1,0,8])}function tr(_){return _.env.get("COPILOT_HOME")||wn(_.home,".copilot")}function ai(_){return(_.hooks?.preToolUse??[]).some((j)=>{if(j.type!==void 0&&j.type!=="command")return!1;return zr(j.command)||zr(j.bash)||zr(j.powershell)||zr(j.exec&&[j.exec,...j.args??[]].join(" "))})}function nr(_){return _===void 0||typeof _==="string"}function hg(_){return _===void 0||Array.isArray(_)&&_.every((N)=>typeof N==="string")}function vg(_){if(!_||typeof _!=="object"||Array.isArray(_))return!1;let N=_;if(N.disableAllHooks!==void 0&&typeof N.disableAllHooks!=="boolean")return!1;if(N.hooks===void 0)return!0;if(!N.hooks||typeof N.hooks!=="object"||Array.isArray(N.hooks))return!1;let j=N.hooks.preToolUse;if(j===void 0)return!0;return Array.isArray(j)&&j.every((J)=>J!==null&&typeof J==="object"&&!Array.isArray(J)&&nr(J.type)&&nr(J.command)&&nr(J.bash)&&nr(J.powershell)&&nr(J.exec)&&hg(J.args))}function li(_,N){try{let j=JSON.parse(bn(mg(_,"utf-8")));if(!vg(j)){N?.push(`Invalid hook config ${_}: hooks.preToolUse must be an array of hook objects`);return}return j}catch(j){N?.push(`Failed to parse ${_}: ${j instanceof Error?j.message:String(j)}`);return}}function yl(_,N){try{return fg(_).filter((j)=>j.endsWith(".json")).sort((j,J)=>j.localeCompare(J))}catch(j){return N?.push(`Failed to read ${_}: ${j instanceof Error?j.message:String(j)}`),[]}}function bg(_,N){if(!Yr(_))return[];let j=[];for(let J of yl(_,N)){let Y=wn(_,J),re=li(Y,N);if(re&&ai(re))j.push(Y)}return j}function jt(_,N){if(!Yr(_))return;let j=li(_,N);if(!j)return;return{path:_,config:j}}function ml(_,N,j,J){if(N){_.push(`GitHub Copilot CLI ${N} does not support ${j}; requires ${J}+`);return}_.push(`GitHub Copilot CLI version unavailable; skipping ${j} because it requires ${J}+`)}function wg(_){for(let N of _){if(N?.config.disableAllHooks===!0)return N.path;if(N?.config.disableAllHooks===!1)return}return}function kg(_,N,j,J){let Y=tr(_),re=wn(N,".github","hooks"),ie=wn(Y,"hooks"),de=wn(N,".github","copilot"),fe=wn(N,".claude"),ke=yg(j),Ce=ke===!0?J:void 0,Re=[jt(wn(de,"settings.local.json"),Ce),jt(wn(de,"settings.json"),Ce),jt(wn(fe,"settings.local.json"),Ce),jt(wn(fe,"settings.json"),Ce)],Ee=[jt(wn(Y,"settings.json"),Ce),jt(wn(Y,"config.json"),Ce)];if(ke!==!1){let sn=wg([...Re,...Ee]);if(sn){if(ke===null)J.push(`GitHub Copilot CLI version unavailable; treating disableAllHooks in ${sn} as active`);return{activeConfigPaths:[],repoInlineSources:Re,disabledBy:sn}}}let Ne=bg(re,J),Oe=gg(j),Je=Oe===!0?J:void 0,Ge=Yr(ie)?yl(ie,Je):[],Ye=[];for(let sn of Ge){let tn=wn(ie,sn),fn=li(tn,Je);if(fn&&ai(fn))Ye.push(tn)}if(Oe!==!0&&Ye.length>0)ml(J,j,`user hook files in ${ie}`,"0.0.422"),Ye.length=0;let rn=[];for(let sn of[...Re,...Ee]){if(!sn)continue;if(!ai(sn.config))continue;if(ke===!0){rn.push(sn);continue}ml(J,j,"inline hook definitions in Copilot config files","1.0.8");break}let on=(sn)=>sn.filter((tn)=>!!tn&&rn.includes(tn)).map((tn)=>tn.path);return{activeConfigPaths:[...on(Re),...Ne,...on(Ee),...Ye],repoInlineSources:Re}}function hl(_){let N=[],j=kg(_.environment,_.cwd,_.copilotCliVersion,N);if(j.disabledBy)return{platform:"copilot-cli",status:"disabled",method:"hook config",configPath:j.disabledBy,configPaths:[j.disabledBy],errors:N.length>0?N:void 0};let J=tr(_.environment),Y=wn(J,"installed-plugins",...Jr),re=Yr(Y),ie=wn(J,"settings.json"),de=kn(ie,bn),fe=(Ne)=>nn(nn(Ne,"enabledPlugins"),Tn),ke=j.repoInlineSources.find((Ne)=>typeof fe(Ne?.config)==="boolean"),Ce=ke??(de.kind==="ok"?{path:ie,config:de.value}:void 0);if(re&&!ke&&de.kind==="unreadable")return{platform:"copilot-cli",status:"not-inspected"};let Re=re&&Ce!==void 0&&fe(Ce.config)===!1;if(Re&&j.activeConfigPaths.length===0)return{platform:"copilot-cli",status:"disabled",method:"plugin config",configPath:Ce.path,errors:[`${Tn} is installed but not enabled in Copilot CLI`]};let Ee=re&&!Re;if(Ee||j.activeConfigPaths.length>0){let Ne=j.activeConfigPaths[0];return{platform:"copilot-cli",status:"configured",method:Ee?"plugin config":"hook config",configPath:Ne??(Ee?Y:void 0),configPaths:j.activeConfigPaths.length>0?j.activeConfigPaths:void 0,errors:N.length>0?N:void 0}}return{platform:"copilot-cli",status:"n/a",errors:N.length>0?N:void 0}}import{existsSync as yi,readdirSync as Lg,readFileSync as Ng}from"node:fs";import{join as gi}from"node:path";import{existsSync as fi,mkdirSync as _g,readFileSync as Tg,rmSync as Ag}from"node:fs";import{dirname as Og,join as Zr}from"node:path";import{existsSync as Cg,renameSync as xg,statSync as Sg,writeFileSync as Pg}from"node:fs";function ln(_,N){let j=`${_}.${process.pid}.tmp`;Pg(j,N,Cg(_)?{mode:Sg(_).mode&511}:{}),xg(j,_)}import{spawn as Rg}from"node:child_process";function Eg(_){return _.join(" ")}function ci(_,N,j){return[`Failed to run ${Eg(_)}${N===null?"":` (exit ${N})`}.`,j.trim()].filter(Boolean).join(`
`)}function di(_){let N={stdout:"",stderr:""};return _.stdout.setEncoding("utf-8"),_.stderr.setEncoding("utf-8"),_.stdout.on("data",(j)=>{N.stdout+=j}),_.stderr.on("data",(j)=>{N.stderr+=j}),N}function mn(_,N){return new Promise((j,J)=>{let Y=Zn([..._],process.env),re=Rg(Y.cmd,Y.args,{stdio:["ignore","pipe","pipe"]}),ie=di(re),de=()=>[ie.stdout,ie.stderr].filter(Boolean).join(`
`),fe=N?.timeoutMs??120000,ke=setTimeout(()=>{re.kill(),J(Error(ci(_,null,`Timed out after ${fe}ms.
${de()}`.trim())))},fe);re.on("error",(Ce)=>{clearTimeout(ke),J(Error(ci(_,null,`${Ce.message}
${de()}`.trim())))}),re.on("close",(Ce)=>{if(clearTimeout(ke),Ce!==0){J(Error(ci(_,Ce,de())));return}j(N?.stdoutOnly?ie.stdout:de())})})}async function ui(_){for(let N of _)await mn(N)}async function vl(_){for(let N of _)try{await mn(N)}catch(j){console.warn(j instanceof Error?j.message:String(j))}}var Cn=Object.fromEntries(Yt.map((_)=>[_.id,`npx -y cc-safety-net hook ${_.flags[1]}`]));var or=Cn.cursor,bl=30;function Qr(_){return Zr(_.home,".cursor","hooks.json")}var rr="cc-safety-net";function mi(_){let N=Zr(_.home,".cursor","plugins");return{cache:Zr(N,"cache",rr),marketplaceClone:Zr(N,"marketplaces","github.com","kenryu42","cc-safety-net")}}async function wl(_){let N=Object.values(mi(_));if(!N.some((J)=>fi(J)))return;let j="No marketplace matches";return await mn(["cursor-agent","plugin","marketplace","remove",rr]).catch((J)=>{if(!(J instanceof Error&&J.message.includes(j)))throw J}),N.forEach((J)=>Ag(J,{recursive:!0,force:!0})),[`Removed the ${rr} marketplace from your Cursor account.`,"If /plugins in cursor-agent still lists CC Safety Net as installed, uninstall it there."].join(`
`)}function Qn(_){return typeof _==="object"&&_!==null&&!Array.isArray(_)}function pi(){return{command:or,timeout:bl,failClosed:!0}}function Xr(_){return Qn(_)&&_.command===or}function Ig(_){return Object.keys(_).length===3&&_.command===or&&_.timeout===bl&&_.failClosed===!0}function $g(_){try{return JSON.parse(Tg(_,"utf-8"))}catch(N){if(N instanceof SyntaxError)throw Error(`Failed to parse Cursor hooks config ${_}: ${N.message}`);throw N}}function kl(_){let N=$g(_);if(!Qn(N))throw Error(`Cursor hooks config ${_} must be a JSON object`);if(N.version!==1)throw Error(`Cursor hooks config ${_} must set "version": 1`);if(N.hooks!==void 0&&!Qn(N.hooks))throw Error(`Cursor hooks config ${_} "hooks" must be an object`);let j=Qn(N.hooks)?N.hooks.preToolUse:void 0;if(j!==void 0&&!Array.isArray(j))throw Error(`Cursor hooks config ${_} "hooks.preToolUse" must be an array`);return N}function Cl(_){let N=Qn(_.hooks)?_.hooks.preToolUse:void 0;return Array.isArray(N)?N:[]}function Dg(_){if(!_.some(Xr))return[..._,pi()];return _.reduce((N,j)=>{if(!Xr(j))return N.result.push(j),N;if(!N.inserted)N.result.push(pi()),N.inserted=!0;return N},{result:[],inserted:!1}).result}function xl(_,N,j){let J=Qn(N.hooks)?N.hooks:{},Y={...N,hooks:{...J,preToolUse:j}};ln(_,`${JSON.stringify(Y,null,2)}
`)}function Sl(_){let N=Qr(_);if(!fi(N))return _g(Og(N),{recursive:!0}),ln(N,`${JSON.stringify({version:1,hooks:{preToolUse:[pi()]}},null,2)}
`),{path:N,alreadyInstalled:!1};let j=kl(N),J=Cl(j),Y=J.filter(Xr);if(Qn(j.hooks)&&Array.isArray(j.hooks.preToolUse)&&Y.length===1&&Y[0]!==void 0&&Ig(Y[0]))return{path:N,alreadyInstalled:!0};return xl(N,j,Dg(J)),{path:N,alreadyInstalled:!1}}function Pl(_){let N=Qr(_);if(!fi(N))return{path:N,alreadyInstalled:!1};let j=kl(N),J=Cl(j),Y=J.filter((re)=>!Xr(re));if(Y.length===J.length)return{path:N,alreadyInstalled:!1};return xl(N,j,Y),{path:N,alreadyInstalled:!0}}function jg(_){if(!_||typeof _!=="object"||Array.isArray(_))return[];let N=_.hooks;if(!N||typeof N!=="object"||Array.isArray(N))return[];let j=N.preToolUse;if(!Array.isArray(j))return[];return j.filter((J)=>!!J&&typeof J==="object"&&!Array.isArray(J)&&J.command===or)}function Hg(_){let N=[];if(_.length>1)N.push("Multiple managed cc-safety-net hooks found; reinstall to collapse duplicates");let j=_[0];if(j&&j.failClosed!==!0)N.push('Managed hook is missing "failClosed": true; reinstall to repair');if(j&&j.timeout!==30)N.push('Managed hook "timeout" is not 30; reinstall to repair');return N}var eo="Claude Code plugin",hi="Cursor plugin";function Fg(_){let N=gi(mi(_).cache,rr);if(!yi(N))return{};try{return{version:Lg(N).map((j)=>gi(N,j)).find((j)=>yi(gi(j,".cache-complete")))}}catch{return{unreadable:N}}}function Mg(_,N){if(N){let Y=["Cursor records enabled plugins on your Cursor account, which doctor cannot check, and keeps a plugin's files after it is uninstalled.","Cursor pins marketplace plugins to the commit they were added at, so `cc-safety-net update` cannot update this plugin, while the npx hook (`cc-safety-net install --cursor`) stays current."].join(" ");return{method:hi,configPath:N,duplicate:`The Cursor plugin also runs this check, so every tool call is checked twice. ${Y} If the plugin is installed, run \`cc-safety-net uninstall --cursor\`, uninstall CC Safety Net from /plugins in cursor-agent, then run \`cc-safety-net install --cursor\`.`,alone:`${Y} If /plugins in cursor-agent does not list CC Safety Net as installed, run \`cc-safety-net install --cursor\`.`}}let j=Xa(_);if(!j)return;let J="Cursor runs the Claude Code plugin only while it imports Claude Code plugins, which doctor cannot check.";return{method:eo,configPath:j,duplicate:`The Claude Code plugin also runs this check in Cursor, so every tool call is checked twice. ${J} If Cursor runs it, run \`cc-safety-net uninstall --cursor\` to remove this hook.`,alone:`${J} If it stops, run \`cc-safety-net install --cursor\`.`}}function Rl(_){let N=Ug(_),j=Fg(_.environment);if(j.unreadable)return N.status==="configured"?{...N,errors:[...N.errors??[],`Cannot read ${j.unreadable}, so doctor cannot tell whether the Cursor plugin also runs this check.`]}:{platform:"cursor",status:"not-inspected"};let J=Mg(_.environment,j.version);if(!J)return N;if(N.status==="configured")return{...N,errors:[...N.errors??[],J.duplicate]};return{platform:"cursor",status:"configured",method:J.method,configPath:J.configPath,errors:[...N.errors??[],J.alone]}}function Ug(_){let N=Qr(_.environment);if(!yi(N))return{platform:"cursor",status:"n/a",configPath:N};let j;try{j=JSON.parse(Ng(N,"utf-8"))}catch(re){return{platform:"cursor",status:"n/a",configPath:N,errors:[`Failed to parse Cursor hooks config ${N}: ${re instanceof Error?re.message:String(re)}`]}}let J=jg(j);if(J.length===0)return{platform:"cursor",status:"n/a",configPath:N};let Y=Hg(J);return{platform:"cursor",status:"configured",method:"hook config",configPath:N,errors:Y.length>0?Y:void 0}}import{readdirSync as Gg}from"node:fs";import{join as vi,resolve as Bg}from"node:path";var bi="cc-safety-net";function wi(_){let N=_.env.get("DSH_HOME");return vi(N?.trim()?Bg(Nn(N,_.home)):vi(_.home,".dsh"),"profiles")}function El(_){let N=wi(_),j=dn(N)?.isDirectory()?Gg(N,{withFileTypes:!0}).filter((Y)=>Y.isDirectory()&&Y.name!=="node_modules").map((Y)=>{let re=vi(N,Y.name,"package.json");return{name:Y.name,configPath:re,manifest:kn(re)}}):[];return{installed:j.flatMap((Y)=>{if(Y.manifest.kind!=="ok")return[];let re=Y.manifest.value;if(nn(nn(re,"dependencies"),bi)===void 0)return[];let ie=nn(nn(nn(re,"dsh"),"profile"),"bundles");return[{name:Y.name,configPath:Y.configPath,enabled:Array.isArray(ie)&&ie.includes(bi)}]}),unreadable:j.some((Y)=>Y.manifest.kind==="unreadable")}}function ki(_){return El(_).installed}function _l(_){let N=El(_.environment),j=N.installed.filter((re)=>re.enabled),J=N.installed.filter((re)=>!re.enabled),Y=J.map((re)=>`${bi} is installed in the ${re.name} profile but its bundle is disabled`);if(j.length>0)return{platform:"deepseek-harness",status:"configured",method:"dsh bundle",configPaths:j.map((re)=>re.configPath),...Y.length>0?{errors:Y}:{}};if(J.length>0)return{platform:"deepseek-harness",status:"disabled",method:"dsh bundle",configPaths:J.map((re)=>re.configPath),errors:Y};return N.unreadable?{platform:"deepseek-harness",status:"not-inspected"}:{platform:"deepseek-harness",status:"n/a"}}import{existsSync as zg}from"node:fs";import{existsSync as Ol,mkdirSync as qg,readFileSync as Vg}from"node:fs";import{dirname as Kg,join as Si}from"node:path";function Ci(_){return typeof _==="object"&&_!==null&&!Array.isArray(_)}function xi(_,N){return Ci(_)&&_.command===N}function Tl(_,N){return Ci(_)&&Array.isArray(_.hooks)&&_.hooks.some((j)=>xi(j,N))}function rt(_,N){return{hooks:[{type:"command",command:_,timeout:N}]}}function jn(_,N){return _.flatMap((j)=>{if(!Ci(j)||!Array.isArray(j.hooks))return[j];let J=j.hooks.filter((Y)=>!xi(Y,N));if(J.length===j.hooks.length)return[j];return J.length===0?[]:[{...j,hooks:J}]})}function Ht(_,N,j){let J=_.filter((Y)=>Tl(Y,N));return J.length===1&&JSON.stringify(J[0])===JSON.stringify(rt(N,j))}function Ft(_,N){return _.find((j)=>Tl(j,N))}function Mt(_,N,j){let J=Array.isArray(_.hooks)?_.hooks.find((Y)=>xi(Y,N)):void 0;return[..._.matcher===void 0||_.matcher===""||_.matcher==="*"?[]:['Managed hook has a "matcher" that narrows coverage; reinstall to repair'],...J?.type==="command"?[]:['Managed hook "type" is not "command"; reinstall to repair'],...J?.timeout===j?[]:[`Managed hook "timeout" is not ${j}; reinstall to repair`]]}var pt=Cn.devin,no=30,Jg={config:{},hooks:{},preToolUse:[]};function to(_,N=process.platform){let j=N==="win32"?_.env.get("APPDATA")||Si(_.home,"AppData","Roaming"):_.env.get("XDG_CONFIG_HOME")||Si(_.home,".config");return Si(j,"devin","config.json")}function Al(_){return typeof _==="object"&&_!==null&&!Array.isArray(_)}function Wg(_){try{return{ok:!0,value:JSON.parse(bn(Vg(_,"utf-8")))}}catch(N){return{ok:!1,message:N instanceof Error?N.message:String(N)}}}function Pi(_){let N=Wg(_);if(!N.ok)return`Failed to parse Devin CLI config ${_}: ${N.message}`;let j=N.value;if(!Al(j))return`Devin CLI config ${_} must be a JSON object`;let J=j.hooks===void 0?{}:j.hooks;if(!Al(J))return`Devin CLI config ${_} "hooks" must be an object`;let Y=J.PreToolUse===void 0?[]:J.PreToolUse;if(!Array.isArray(Y))return`Devin CLI config ${_} "hooks.PreToolUse" must be an array`;return{config:j,hooks:J,preToolUse:Y}}function Il(_){let N=Pi(_);if(typeof N==="string")throw Error(N);return N}function $l(_,N,j){let J={...N.config,hooks:{...N.hooks,PreToolUse:j}};ln(_,`${JSON.stringify(J,null,2)}
`)}function Dl(_){let N=to(_),j=Ol(N)?Il(N):Jg;if(Ht(j.preToolUse,pt,no))return{path:N,alreadyInstalled:!0};return qg(Kg(N),{recursive:!0}),$l(N,j,[...jn(j.preToolUse,pt),rt(pt,no)]),{path:N,alreadyInstalled:!1}}function Ll(_){let N=to(_);if(!Ol(N))return{path:N,alreadyInstalled:!1};let j=Il(N),J=jn(j.preToolUse,pt);if(JSON.stringify(J)===JSON.stringify(j.preToolUse))return{path:N,alreadyInstalled:!1};return $l(N,j,J),{path:N,alreadyInstalled:!0}}function Nl(_){let N=to(_.environment);if(!zg(N))return{platform:"devin",status:"n/a",configPath:N};let j=Pi(N);if(typeof j==="string")return{platform:"devin",status:"n/a",configPath:N,errors:[j]};let J=Ft(j.preToolUse,pt);if(!J)return{platform:"devin",status:"n/a",configPath:N};let Y=Mt(J,pt,no);return{platform:"devin",status:"configured",method:"hook config",configPath:N,errors:Y.length>0?Y:void 0}}import{existsSync as ny,readFileSync as ty}from"node:fs";import{existsSync as ro,mkdirSync as Yg,readFileSync as Zg,rmSync as Xg}from"node:fs";import{dirname as Qg,join as jl}from"node:path";var ft=Cn.droid,oo=30;function io(_){return jl(_.home,".factory","hooks.json")}function Hl(_){return jl(_.home,".factory","settings.json")}function Ri(_){return typeof _==="object"&&_!==null&&!Array.isArray(_)}function Fl(_){try{return JSON.parse(Zg(_,"utf-8"))}catch(N){if(N instanceof SyntaxError)throw Error(`Failed to parse Factory Droid hooks config ${_}: ${N.message}`);throw N}}function Ml(_){let N=Fl(_);if(!Ri(N))throw Error(`Factory Droid hooks config ${_} must be a JSON object`);if(N.PreToolUse===void 0||Array.isArray(N.PreToolUse))return N;throw Error(`Factory Droid hooks config ${_} "PreToolUse" must be an array`)}function ey(_){if(!ro(_))return{};let N=Fl(_);return Ri(N)&&Ri(N.hooks)?N.hooks:{}}function Ul(_){return Array.isArray(_.PreToolUse)?_.PreToolUse:[]}function Gl(_,N,j){ln(_,`${JSON.stringify({...N,PreToolUse:j},null,2)}
`)}function Bl(_){let N=io(_),j=ro(N),J=j?Ml(N):ey(Hl(_)),Y=Ul(J);if(j&&Ht(Y,ft,oo))return{path:N,alreadyInstalled:!0};return Yg(Qg(N),{recursive:!0}),Gl(N,J,[...jn(Y,ft),rt(ft,oo)]),{path:N,alreadyInstalled:!1}}function ql(_){let N=io(_);if(!ro(N))return{path:N,alreadyInstalled:!1};let j=Ml(N),J=Ul(j),Y=jn(J,ft);if(JSON.stringify(Y)===JSON.stringify(J))return{path:N,alreadyInstalled:!1};let re=ro(Hl(_));if(Y.length===0&&Object.keys(j).length===1&&!re)return Xg(N),{path:N,alreadyInstalled:!0};return Gl(N,j,Y),{path:N,alreadyInstalled:!0}}function Vl(_){let N=io(_.environment);if(!ny(N))return{platform:"droid",status:"n/a",configPath:N};let j;try{j=JSON.parse(ty(N,"utf-8"))}catch(ie){return{platform:"droid",status:"n/a",configPath:N,errors:[`Failed to parse Factory Droid hooks config ${N}: ${ie instanceof Error?ie.message:String(ie)}`]}}let J=typeof j==="object"&&j!==null&&"PreToolUse"in j?j.PreToolUse:void 0,Y=Ft(Array.isArray(J)?J:[],ft);if(!Y)return{platform:"droid",status:"n/a",configPath:N};let re=[...Y.commandRegex===void 0||Y.commandRegex===""?[]:['Managed hook has a "commandRegex" that narrows coverage; reinstall to repair'],...Mt(Y,ft,oo)];return{platform:"droid",status:"configured",method:"hook config",configPath:N,errors:re.length>0?re:void 0}}import{existsSync as ry}from"node:fs";import{join as Ei}from"node:path";var _i="gemini-safety-net";function Ti(_){let N=Ei(_.home,".gemini","extensions"),j=Ei(N,_i);if(!ry(j))return{platform:"gemini-cli",status:"n/a"};let J=Ei(N,"extension-enablement.json"),Y=kn(J);if(Y.kind==="unreadable")return{platform:"gemini-cli",status:"not-inspected"};let re=Y.kind==="ok"?nn(nn(Y.value,_i),"overrides"):void 0;if(Array.isArray(re)&&re.some((de)=>typeof de==="string"&&de.startsWith("!")))return{platform:"gemini-cli",status:"disabled",method:"extension config",configPath:J,errors:[`${_i} is disabled in Gemini CLI`]};return{platform:"gemini-cli",status:"configured",method:"extension config",configPath:j}}function Kl(_){return Ti(_.environment)}import{existsSync as ay,readFileSync as ly}from"node:fs";import{existsSync as Wl,mkdirSync as oy,readFileSync as zl,rmSync as iy}from"node:fs";import{dirname as sy,join as Jl}from"node:path";var mt=Cn["grok-build"],ao=30,Ai=rt(mt,ao);function lo(_){return Jl(_.env.get("GROK_HOME")??Jl(_.home,".grok"),"hooks","cc-safety-net.json")}function co(_){return typeof _==="object"&&_!==null&&!Array.isArray(_)}function Yl(_){try{let N=JSON.parse(_);return co(N)?N:null}catch{return null}}function Zl(_){let N=co(_.hooks)?_.hooks.PreToolUse:void 0;return Array.isArray(N)?N:[]}function so(_,N,j){let J=co(N.hooks)?N.hooks:{};ln(_,`${JSON.stringify({...N,hooks:{...J,PreToolUse:j}},null,2)}
`)}function Xl(_){let N=lo(_);if(!Wl(N))return oy(sy(N),{recursive:!0}),so(N,{},[Ai]),{path:N,alreadyInstalled:!1};let j=Yl(zl(N,"utf-8"));if(!j)return so(N,{},[Ai]),{path:N,alreadyInstalled:!1};let J=Zl(j);if(Ht(J,mt,ao))return{path:N,alreadyInstalled:!0};return so(N,j,[...jn(J,mt),Ai]),{path:N,alreadyInstalled:!1}}function Ql(_){let N=lo(_);if(!Wl(N))return{path:N,alreadyInstalled:!1};let j=Yl(zl(N,"utf-8"));if(!j)return{path:N,alreadyInstalled:!1};let J=Zl(j),Y=jn(J,mt);if(JSON.stringify(Y)===JSON.stringify(J))return{path:N,alreadyInstalled:!1};let re=co(j.hooks)?j.hooks:{};if(Y.length===0&&Object.keys(j).length===1&&Object.keys(re).length===1)return iy(N),{path:N,alreadyInstalled:!0};return so(N,j,Y),{path:N,alreadyInstalled:!0}}function ec(_){return!!_&&typeof _==="object"&&!Array.isArray(_)}function nc(_){let N=lo(_.environment);if(!ay(N))return{platform:"grok-build",status:"n/a",configPath:N};let j;try{j=JSON.parse(ly(N,"utf-8"))}catch(ie){return{platform:"grok-build",status:"n/a",configPath:N,errors:[`Failed to parse Grok Build hooks config ${N}: ${ie instanceof Error?ie.message:String(ie)}`]}}let J=ec(j)&&ec(j.hooks)?j.hooks.PreToolUse:void 0,Y=Ft(Array.isArray(J)?J:[],mt);if(!Y)return{platform:"grok-build",status:"n/a",configPath:N};let re=Mt(Y,mt,ao);return{platform:"grok-build",status:"configured",method:"hook config",configPath:N,errors:re.length>0?re:void 0}}import{readFileSync as dc}from"node:fs";import{join as uc}from"node:path";var Pn="cc-safety-net",Oi="# cc-safety-net managed Hermes Agent plugin. Do not edit. Reinstall with: npx -y cc-safety-net install --hermes-agent",cy=30;function tc(_){return`${Oi}
# version: ${_}
`}function dy(_){return`${tc(_)}name: ${Pn}
version: "${_}"
description: "Block destructive commands and secret-file access before Hermes runs a tool."
author: "cc-safety-net"
provides_hooks:
  - pre_tool_call
`}function uy(_){return`${tc(_)}"""CC Safety Net guard for Hermes Agent.

Registers pre_tool_call and forwards the tool call to the packaged CC Safety Net
adapter (cc-safety-net hook --hermes-agent) over JSON stdin. The adapter prints nothing
when the call is allowed and an {"action": "block", ...} directive when it is denied.
Every transport and analysis failure is returned as a block that names its cause.
"""

import json
import os
import shutil
import signal
import subprocess

HOOK_EVENT = "pre_tool_call"
SUPPORTED_TOOLS = ("patch", "read_file", "terminal", "write_file")
ANALYZER = [${Cn["hermes-agent"].split(" ").map((N)=>`"${N}"`).join(", ")}]
TIMEOUT_SECONDS = ${cy}


def _block(detail):
    return {"action": "block", "message": "CC Safety Net failed closed: " + detail}


def _terminal_cwd(task_id):
    """Return the directory Hermes will run this terminal command in.

    A \`terminal\` call without \`workdir\` runs in the session's own cwd RECORD, not in the
    Hermes process directory: \`_resolve_command_cwd\` in tools/terminal_tool.py returns
    \`workdir or get_session_cwd(session_key) or default_cwd\`, and that record is rewritten
    after every completed command, so it IS the session's \`cd\` state. The session key is
    derived exactly as terminal_tool derives it: the contextvar when set, the raw task_id
    otherwise. No record yet (first command of a session) means \`default_cwd\`, which the local
    terminal backend reads from \`TERMINAL_CWD\` (\`hermes_cli/config.py\` bridges the configured
    \`terminal.cwd\` into it) and only then falls back to the process directory.
    """
    from tools.approval import get_current_session_key
    from tools.terminal_tool import get_session_cwd

    return (
        get_session_cwd(get_current_session_key(default="") or (task_id or ""))
        or os.environ.get("TERMINAL_CWD")
        or os.getcwd()
    )


def _file_tool_cwd(task_id):
    """Return the directory Hermes resolves this file tool's relative paths against.

    tools/file_tools.py passes \`task_id or "default"\` to \`_resolve_base_dir\`, which walks the
    session's cwd record, the task's cwd override, \`TERMINAL_CWD\`, then the process directory.
    tools.file_tools defines it up to v2026.8.31 and re-exports it from tools.file_tools_paths since.
    """
    from tools.file_tools import _resolve_base_dir

    return str(_resolve_base_dir(task_id or "default"))


def _pre_tool_call(tool_name="", args=None, session_id="", task_id="", **_):
    if tool_name not in SUPPORTED_TOOLS:
        return None

    executable = shutil.which(ANALYZER[0])
    if executable is None:
        return _block(ANALYZER[0] + " was not found on PATH.")

    try:
        cwd = _terminal_cwd(task_id) if tool_name == "terminal" else _file_tool_cwd(task_id)
    except OSError as error:
        return _block("the working directory could not be resolved (%s)." % error)
    except ImportError as error:
        # Without Hermes' own directory lookup we cannot tell which directory the call acts in,
        # and analysing the wrong one clears every path-scoped protection.
        return _block(
            "the Hermes %s directory could not be read (%s). Update cc-safety-net and "
            "reinstall the plugin with: npx -y cc-safety-net install --hermes-agent."
            % ("session" if tool_name == "terminal" else "file tool", error)
        )

    payload = json.dumps(
        {
            "hook_event_name": HOOK_EVENT,
            "tool_name": tool_name,
            "tool_input": args if isinstance(args, dict) else None,
            "session_id": session_id if isinstance(session_id, str) else "",
            "cwd": cwd,
        }
    )

    try:
        if os.name == "nt":
            launch_options = {}
        else:
            launch_options = {"start_new_session": True}
        process = subprocess.Popen(
            [executable] + ANALYZER[1:],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            # Decode explicitly: the analyzer writes UTF-8, and a locale decoder would raise
            # UnicodeDecodeError on output it cannot read. "replace" turns that into unreadable
            # output, which blocks with its cause named.
            encoding="utf-8",
            errors="replace",
            # Resolve the analyzer from a neutral directory: npx prefers a repository-local
            # node_modules/.bin/cc-safety-net, so inheriting Hermes' working directory would
            # let workspace contents stand in for the analyzer. The payload's "cwd" above is
            # still the real Hermes working directory, which the analysis needs.
            cwd=os.path.expanduser("~"),
            # Own process group so the timeout below can kill the whole tree: npx's descendants
            # outlive a kill aimed at npx alone and keep holding the pipes captured here. Windows
            # uses taskkill's process-tree traversal instead because sessions are POSIX-only.
            **launch_options,
        )
    except OSError as error:
        return _block("analysis could not start (%s)." % error)

    try:
        stdout, _ = process.communicate(payload, timeout=TIMEOUT_SECONDS)
    except subprocess.TimeoutExpired:
        try:
            if os.name == "nt":
                system_root = os.environ.get("SystemRoot")
                if not system_root:
                    raise OSError("SystemRoot is unavailable")
                subprocess.run(
                    [
                        os.path.join(system_root, "System32", "taskkill.exe"),
                        "/PID",
                        str(process.pid),
                        "/T",
                        "/F",
                    ],
                    stdin=subprocess.DEVNULL,
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.DEVNULL,
                    timeout=1,
                    check=False,
                )
            else:
                os.killpg(process.pid, signal.SIGKILL)
        except (OSError, subprocess.SubprocessError):
            pass
        try:
            process.communicate(timeout=1)
        except (OSError, subprocess.SubprocessError):
            pass
        return _block("analysis timed out after %ss." % TIMEOUT_SECONDS)

    if process.returncode != 0:
        return _block("analysis exited with status %s." % process.returncode)

    directive = (stdout or "").strip()
    if not directive:
        return None

    try:
        parsed = json.loads(directive)
    except ValueError:
        return _block("analysis returned unreadable output.")

    if isinstance(parsed, dict) and parsed.get("action") == "block":
        message = parsed.get("message")
        if isinstance(message, str) and message:
            return parsed
    return _block("analysis returned an unexpected directive.")


def register(ctx):
    ctx.register_hook("pre_tool_call", _pre_tool_call)
`}function ir(_){return[{name:"__init__.py",content:uy(_)},{name:"plugin.yaml",content:dy(_)}]}import{mkdirSync as py,readdirSync as fy,readFileSync as rc,rmSync as Ii}from"node:fs";import{basename as my,dirname as gy,join as Hn}from"node:path";var yy="__pycache__",hy=/^[a-z0-9][a-z0-9_-]{0,63}$/;function vy(_){try{return rc(_,"utf-8").trim()}catch{return}}function $i(_){let N=_.env.get("HERMES_HOME")?.trim();if(N&&my(gy(N))==="profiles")return N;let j=N||Hn(_.home,".hermes"),J=Hn(j,"active_profile"),Y=vy(J),re=Y?.toLowerCase();if(!re||re==="default")return j;if(!hy.test(re))throw Error(`Invalid Hermes profile name "${Y}" in ${J}; run \`hermes profile use <name>\` with a valid profile.`);return Hn(j,"profiles",re)}function Di(_){return Hn($i(_),"plugins",Pn)}function Li(_){return _.startsWith(Oi)}function Ni(_,N){let j=Di(_),J=dn(j);if(J&&(J.isSymbolicLink()||!J.isDirectory()))throw Error(`Refusing to ${N} ${j}: not a regular directory. Move or remove it and rerun ${N==="install"?"install":"uninstall"} --hermes-agent.`);return j}function oc(_,N){let j=dn(_);if(!j)return;if(j.isSymbolicLink()||!j.isFile())throw Error(`Refusing to ${N} ${_}: not a regular file. Move or remove it.`);let J=rc(_,"utf-8");if(!Li(J))throw Error(`Refusing to ${N} unmanaged file at ${_}. Move or remove it.`);return J}function ic(_){let N=Ni(_,"install"),j=ir(pn());if(j.map((Y)=>oc(Hn(N,Y.name),"overwrite")).every((Y,re)=>Y===j[re]?.content))return{path:N,alreadyInstalled:!0};return py(N,{recursive:!0}),j.forEach((Y)=>{ln(Hn(N,Y.name),Y.content)}),{path:N,alreadyInstalled:!1}}function ji(_){let N=Ni(_,"remove");if(!dn(N))return[];return ir(pn()).filter((j)=>oc(Hn(N,j.name),"remove")!==void 0)}function sc(_){let N=Ni(_,"remove");if(!dn(N))return{path:N,alreadyInstalled:!1};let j=ji(_);if(j.forEach((J)=>{Ii(Hn(N,J.name))}),Ii(Hn(N,yy),{recursive:!0,force:!0}),fy(N).length===0)Ii(N,{recursive:!0});return{path:N,alreadyInstalled:j.length>0}}var sr="hermes-agent",ac=/^([^\s#][^:]*):/,by=/^\s+([A-Za-z_][\w-]*):/,lc=/^\s+-\s*(.*)$/;function wy(_){return _.trim().replace(/^(["'])(.*)\1$/,"$2")}function ky(_){let N=_.split(/\r?\n/),j=N.findIndex((re)=>ac.exec(re)?.[1]?.trim()==="plugins");if(j===-1)return[];let J=N.slice(j+1),Y=J.findIndex((re)=>ac.test(re));return Y===-1?J:J.slice(0,Y)}function cc(_,N){let j=ky(_),J=j.findIndex((ie)=>by.exec(ie)?.[1]===N);if(J===-1)return[];let Y=j.slice(J+1),re=Y.findIndex((ie)=>!lc.test(ie));return(re===-1?Y:Y.slice(0,re)).map((ie)=>wy(lc.exec(ie)?.[1]??""))}function Cy(_){try{return dc(uc($i(_),"config.yaml"),"utf-8")}catch{return}}function Hi(_){let N=Cy(_)??"";return cc(N,"enabled").includes(Pn)&&!cc(N,"disabled").includes(Pn)}function pc(_){return/^# version:\s*(.+)$/m.exec(_)?.[1]?.trim()}function xy(_,N){let j=dn(_);if(!j)return{error:`${N.name} is missing from ${_}; run install --hermes-agent`};if(j.isSymbolicLink()||!j.isFile())return{error:`${_} is a symlink or not a regular file; move or remove it`};try{let J=dc(_,"utf-8");if(!Li(J))return{error:`Unmanaged ${N.name} occupies ${_}; move or remove it`};if(pc(J)===pn()&&J!==N.content)return{error:`Modified ${N.name} occupies ${_}; run install --hermes-agent to restore it`};return{content:J}}catch(J){return{error:`Failed to read ${_}: ${J instanceof Error?J.message:String(J)}`}}}function Sy(_){try{return{path:Di(_)}}catch(N){return{error:N instanceof Error?N.message:String(N)}}}function fc(_){let N=Sy(_.environment);if("error"in N)return{platform:sr,status:"n/a",errors:[N.error]};let j=N.path,J=Gr(sr,j);if(J)return J;let Y=ir(pn()).map((fe)=>xy(uc(j,fe.name),fe)),re=Y.flatMap((fe)=>("error"in fe)?[fe.error]:[]);if(re.length>0)return{platform:sr,status:"n/a",configPath:j,errors:re};let ie=Y.some((fe)=>("content"in fe)&&pc(fe.content)!==pn()),de=ie?["Installed Hermes Agent plugin is outdated; run install --hermes-agent to update"]:[];if(!Hi(_.environment))return{platform:sr,status:"disabled",method:"plugin directory",configPath:j,errors:[`${Pn} is not enabled in Hermes; run \`hermes plugins enable ${Pn}\``,...de]};return{platform:sr,status:"configured",method:"plugin directory",configPath:j,errors:ie?de:void 0}}import{existsSync as Py,readFileSync as Ry}from"node:fs";import{join as mc}from"node:path";var Ey=/cc-safety-net\s+hook\s+(?:[^\s]+\s+)*--kimi-code(\s|["']|$)/;function _y(_){return mc(_.env.get("KIMI_CODE_HOME")||mc(_.home,".kimi-code"),"config.toml")}function ar(_){let N=_y(_.environment);if(!Py(N))return{platform:"kimi-code",status:"n/a",configPath:N};try{if(!Ey.test(Ry(N,"utf-8")))return{platform:"kimi-code",status:"n/a",configPath:N}}catch(j){return{platform:"kimi-code",status:"n/a",configPath:N,errors:[`Failed to read ${N}: ${j instanceof Error?j.message:String(j)}`]}}return{platform:"kimi-code",status:"configured",method:"hook config",configPath:N}}import{readFileSync as xc}from"node:fs";import{join as cr}from"node:path";var un="cc-safety-net",Sn="index.js",Ut="openclaw.plugin.json",Gt="package.json";var uo="// cc-safety-net managed OpenClaw plugin. Do not edit. Reinstall with: npx -y cc-safety-net install --openclaw";import{existsSync as Ty,lstatSync as Ay,readdirSync as Oy,readFileSync as Iy}from"node:fs";import{dirname as gc,join as Bn}from"node:path";import{fileURLToPath as $y}from"node:url";var Fi=Bn("openclaw",un),ht=`run \`openclaw plugins enable ${un}\``,Dy="config reload superseded by a newer runtime config source",Ly=[Sn,Ut,Gt];function yc(_){let N=_.env.get("OPENCLAW_HOME")?.trim();return N?Nn(N,_.home):_.home}function hc(_){let N=yc(_),j=_.env.get("OPENCLAW_STATE_DIR")?.trim();if(j)return Nn(j,N);let J=_.env.get("OPENCLAW_CONFIG_PATH")?.trim();return J?gc(Nn(J,N)):Bn(N,".openclaw")}function vc(_){let N=_.env.get("OPENCLAW_CONFIG_PATH")?.trim();return N?Nn(N,yc(_)):Bn(hc(_),"openclaw.json")}function lr(_){return Bn(hc(_),"extensions",un)}function Ny(_){let N=Oy(_);if(N.length===0)return!0;if(N.some((Y)=>!Ly.includes(Y)))return!1;let j=Bn(_,Sn),J=dn(j);return J!==void 0&&!J.isSymbolicLink()&&J.isFile()&&Iy(j,"utf-8").startsWith(uo)}function Mi(_){let N=lr(_),j=dn(N);if(!j)return;if(!j.isSymbolicLink()&&j.isDirectory()&&Ny(N))return;throw Error(`Refusing to modify ${N}: it does not hold a cc-safety-net managed OpenClaw plugin. Move or remove it, then run the command again.`)}function bc(){let _=gc($y(import.meta.url));return[Bn(_,Fi),Bn(_,"..",Fi),Bn(_,"..","..","..","dist",Fi)]}function Ui(_=bc()){return _.find((N)=>Ty(N)&&Ay(N).isDirectory())}function jy(_=bc()){let N=Ui(_);if(!N)throw Error("Packaged OpenClaw plugin directory not found. Reinstall cc-safety-net and try again.");return N}function wc(_=jy()){return[["openclaw","plugins","install",_,"--force","--accept-capabilities"]]}function Hy(_){let N=(()=>{try{return JSON.parse(_)}catch{return}})(),j=nn(nn(N,"plugin"),"status");return typeof j==="string"?j:void 0}async function Fy(){await mn(["openclaw","plugins","enable",un]).catch((_)=>{if(!(_ instanceof Error&&_.message.includes(Dy)))throw _})}async function kc(_){let N=async()=>Hy(await mn(["openclaw","plugins","inspect",un,"--runtime","--json"],{stdoutOnly:!0})),j=await N(),J=j==="disabled"&&_;if(J)await Fy();let Y=J?await N():j;if(Y==="loaded")return;throw Error(`${Y===void 0?`The ${un} plugin's load state could not be verified: OpenClaw's runtime inspect report was unreadable.`:Y==="disabled"?`OpenClaw reports the ${un} plugin with status "disabled"; ${ht}.`:`OpenClaw reports the ${un} plugin with status "${Y}".`} Run \`openclaw plugins inspect ${un} --runtime\` for details.`)}var po="openclaw";function Bt(_,N){let j=cr(_,N),J=dn(j);if(!J)return{error:`${N} is missing from ${j}; run install --openclaw`};if(J.isSymbolicLink()||!J.isFile())return{error:`${j} is a symlink or not a regular file; move or remove it`};try{return{content:xc(j,"utf-8")}}catch(Y){return{error:`Failed to read ${j}: ${Y instanceof Error?Y.message:String(Y)}`}}}function Sc(_){try{return JSON.parse(bn(_))}catch{return}}function My(_){let N=Bt(_,Ut);if("error"in N)return N.error;if(nn(Sc(N.content),"id")===un)return;return`${cr(_,Ut)} is not a valid ${un} manifest; run install --openclaw`}function Uy(_){let N=Bt(_,Gt);if("error"in N)return N.error;let j=nn(nn(Sc(N.content),"openclaw"),"extensions");if(Array.isArray(j)&&j.includes(`./${Sn}`))return;return`${cr(_,Gt)} does not point OpenClaw at ${Sn}; run install --openclaw`}function Cc(_){return Array.isArray(_)?_.filter((N)=>typeof N==="string"):[]}function Gy(_){let N=vc(_);if(!dn(N))return`${un} is not enabled; ${ht}`;let j=(()=>{try{return JSON.parse(bn(xc(N,"utf-8")))}catch{return}})();if(j===void 0)return`Failed to read ${N}; fix it, then ${ht}`;let J=nn(j,"plugins");if(nn(J,"enabled")===!1)return`plugins.enabled is false in ${N}; no OpenClaw plugin loads`;let Y=nn(nn(nn(J,"entries"),un),"enabled");if(Cc(nn(J,"deny")).includes(un)||Y===!1)return`${un} is disabled in ${N}; ${ht}`;let re=Cc(nn(J,"allow"));if(re.length>0&&!re.includes(un))return`plugins.allow in ${N} does not list ${un}; add it, then ${ht}`;if(re.includes(un)||Y===!0)return;return`${un} is not enabled; ${ht}`}function Pc(_){return/^\/\/ version:\s*(.+)$/m.exec(_)?.[1]?.trim()}function By(_,N,j){if(j===void 0)return[];let J=Bt(j,Sn);if(!(("content"in J)&&Pc(J.content)===N))return[];return[Sn,Ut,Gt].flatMap((re)=>{let ie=Bt(_,re),de=Bt(j,re);if("error"in ie||"error"in de||ie.content===de.content)return[];return[`Modified ${re} occupies ${cr(_,re)}; run install --openclaw to restore it`]})}function Rc(_){let N=lr(_.environment),j=Gr(po,N);if(j)return j;let J=Bt(N,Sn),re=["error"in J?J.error:J.content.startsWith(uo)?void 0:`Unmanaged ${Sn} occupies ${cr(N,Sn)}; move or remove it`,My(N),Uy(N)].filter((Ce)=>Ce!==void 0),ie="content"in J?Pc(J.content):void 0,de=re.length>0?re:By(N,ie,Ui());if(de.length>0)return{platform:po,status:"n/a",configPath:N,errors:de};let fe=ie===pn()?[]:["Installed OpenClaw plugin is outdated; run install --openclaw to update"],ke=Gy(_.environment);if(ke)return{platform:po,status:"disabled",method:"plugin directory",configPath:N,errors:[ke,...fe]};return{platform:po,status:"configured",method:"plugin directory",configPath:N,errors:fe.length>0?fe:void 0}}import{existsSync as Xy,readFileSync as Qy}from"node:fs";import{basename as eh}from"node:path";import{existsSync as fo,readFileSync as Gi,rmSync as qy}from"node:fs";import{join as An}from"node:path";import{pathToFileURL as Vy}from"node:url";var dr="cc-safety-net",bt=`${dr}@latest`,Bi=["opencode.json","opencode.jsonc"],Ky=60,Jy=250,Ec="CCSafetyNetPlugin",Wy={stringError:"Unterminated string in OpenCode config",bracketError:"Unmatched plugin array in OpenCode config"};function _c(_){return An(_.env.get("XDG_CONFIG_HOME")||An(_.home,".config"),"opencode")}function qi(_){return _.env.get("OPENCODE_CONFIG_DIR")||_c(_)}function Vi(_){return Bi.map((N)=>An(qi(_),N))}function Ki(_){return[...new Set([qi(_),_c(_)])].flatMap((N)=>Bi.map((j)=>An(N,j)))}function Tc(_){return An(_.env.get("XDG_CACHE_HOME")||An(_.home,".cache"),"opencode","packages",bt)}function Ac(_){qy(Tc(_),{recursive:!0,force:!0})}async function Oc(_){let N=(await mn(["opencode","--version"],{stdoutOnly:!0})).trim(),j=/^(?:opencode\s+)?v?(\d+)\.(\d+)\.(\d+)(?:[-+].*)?$/.exec(N),J=Number(j?.[1]),Y=Number(j?.[2]),re=Number(j?.[3]);if(!j||J!==1&&J!==2||J===1&&(Y<18||Y===18&&re<29)||J===2&&Y===0&&re<6)throw Error(`OpenCode 1.18.29+ or 2.0.6+ is required; found ${N||"an unknown version"}.`);if(J===2){for(let ie of Vi(_)){if(!fo(ie))continue;let de=Wi(Gi(ie,"utf-8"),ie);if(["plugin","plugins"].some((ke)=>{let Ce=nn(de,ke);return Array.isArray(Ce)&&Ce.some((Re)=>mo(Re)&&(typeof Re==="string"?Re:nn(Re,"package"))!==bt)}))throw Error(`Change the cc-safety-net package spec in ${ie} to ${bt}, preserving its options, then retry. Adding another spec would create a duplicate plugin ID.`)}return{commands:[],afterInstall:async()=>{if((await mn(["opencode","plugin","add",bt],{stdoutOnly:!0})).includes("is already configured in"))await mn(["opencode","plugin","update",bt]);let de=await Dc();if(!/^cc-safety-net\s+\S+\s+cc-safety-net@latest\s*$/m.test(de))throw Error("OpenCode did not load cc-safety-net from cc-safety-net@latest. Run `opencode plugin list` for details.");let fe=["--param",`location[directory]=${process.cwd()}`];await mn(["opencode","api","integration.list",...fe]);let ke=await mn(["opencode","api","plugin.list",...fe],{stdoutOnly:!0}),Ce=Ji(ke);if(Ce)throw Error(Ce);if(!Ic(ke).some($c))throw Error("OpenCode lists no active cc-safety-net for this directory. Run `opencode api plugin.list` for details.")}}}return Ac(_),{commands:[["opencode","plugin","-g","-f",bt]],afterInstall:()=>Yy(_)}}function Ic(_){return zy(_).filter((N)=>nn(N,"id")===dr||mo(nn(nn(N,"source"),"target"))).map((N)=>nn(N,"state"))}function $c(_){return nn(_,"status")==="active"}function Ji(_){let N=Ic(_);if(N.some($c))return;let j=N.find((J)=>nn(J,"status")==="failed");if(!j)return;return`OpenCode reports cc-safety-net failed: ${String(nn(j,"error")).split(`
`)[0]}`}function zy(_){if(!_)return[];try{let N=nn(JSON.parse(_),"data");return Array.isArray(N)?N:[]}catch{return[]}}async function Dc(_=1){let N=await mn(["opencode","plugin","list"],{stdoutOnly:!0});if(/^cc-safety-net\s|\scc-safety-net@latest\s*$/m.test(N)||_===Ky)return N;return await new Promise((j)=>setTimeout(j,Jy)),Dc(_+1)}async function Yy(_){let N=An(Tc(_),"node_modules",dr),j=An(N,"package.json");if(!fo(j))throw Error(`The OpenCode plugin cache at ${N} is missing its package, so OpenCode would load nothing and fail open. Run \`opencode plugin -g -f ${bt}\` for details.`);let J=nn(JSON.parse(Gi(j,"utf-8")),"main");if(typeof J!=="string")throw Error(`The cached OpenCode plugin at ${N} declares no "main" entry.`);let Y=An(N,J);if(typeof(await import(Vy(Y).href))[Ec]==="function")return;throw Error(`The cached OpenCode plugin at ${Y} does not export a callable ${Ec}, so OpenCode would load nothing and fail open.`)}function Wi(_,N){try{return JSON.parse(bn(_))}catch(j){if(j instanceof SyntaxError)throw Error(`Failed to parse OpenCode config ${N}: ${j.message}`);throw j}}function mo(_){let N=typeof _==="string"?_:nn(_,"package");return typeof N==="string"&&(N===dr||N.startsWith(`${dr}@`))}function zi(_){return["plugin","plugins"].some((N)=>{let j=nn(_,N);return Array.isArray(j)&&j.some(mo)})}function Zy(_,N){let J=["plugin","plugins"].flatMap((Y)=>{let re=sl(_,Y,Wy);if(!re)return[];let ie=[],de=0,fe=re.start+1,ke=_.slice(re.start+1,re.end).matchAll(/\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|[^"\s{}[\],/]+|[{}[\],]/g);for(let Ce of ke){if(Ce[0].startsWith("//")||Ce[0].startsWith("/*"))continue;let Re=re.start+1+Ce.index;if(de===0)fe=Re;if(Ce[0]==="{"||Ce[0]==="[")de++;if(Ce[0]==="}"||Ce[0]==="]")de--;if(de!==0||Ce[0]===",")continue;let Ee=Re+Ce[0].length;if(mo(JSON.parse(bn(_.slice(fe,Ee)))))ie.push({start:fe,end:Ee})}return ie}).sort((Y,re)=>Y.start-re.start).reverse().reduce((Y,re)=>{let ie=/^(?:\s|\/\/[^\n]*(?:\n|$)|\/\*[\s\S]*?\*\/)*,/.exec(Y.slice(re.end));if(ie?.[0].includes("/")){let de=re.end+ie[0].length-1;return Y.slice(0,re.start)+Y.slice(re.end,de)+Y.slice(de+1)}return il(Y,re)},_);return Wi(J,N),J}function Lc(_){Ac(_);let N=Ki(_),j=N.find((re)=>fo(re)),J=[],Y=[];for(let re of N){if(!fo(re))continue;try{let ie=Gi(re,"utf-8");if(!zi(Wi(ie,re)))continue;ln(re,Zy(ie,re)),Y.push(re)}catch(ie){J.push(ie instanceof Error?ie.message:String(ie))}}if(J.length>0)throw Error(J.join(`
`));return{path:Y[0]??j??An(qi(_),Bi[0]),alreadyInstalled:Y.length>0}}function qt(_){let N=[];for(let j of _.openCodeVersion?.startsWith("2.")?Vi(_.environment):Ki(_.environment))if(Xy(j))try{let J=Qy(j,"utf-8"),Y=bn(J),re=JSON.parse(Y);if(zi(re)){let ie=Ji(_.openCodePluginListOutput);if(ie)return{platform:"opencode",status:"disabled",method:"opencode api plugin.list",configPath:j,errors:[...N,ie]};return{platform:"opencode",status:"configured",method:"plugin array",configPath:j,errors:N.length>0?N:void 0}}}catch(J){N.push(`Failed to parse ${eh(j)}: ${J instanceof Error?J.message:String(J)}`)}return{platform:"opencode",status:"n/a",errors:N.length>0?N:void 0}}import{join as Nc}from"node:path";function Yi(_){let N=_.env.get("PI_CODING_AGENT_DIR");return Nc(N?Nn(N,_.home):Nc(_.home,".pi","agent"),"settings.json")}function Zi(_){if(typeof _!=="string")return!1;return _==="npm:cc-safety-net"||_.startsWith("npm:cc-safety-net@")}function jc(_){let N=Yi(_.environment),j=kn(N);if(j.kind==="unreadable")return{platform:"pi",status:"not-inspected"};if(j.kind==="missing")return{platform:"pi",status:"n/a"};let J=nn(j.value,"packages");if(!Array.isArray(J))return{platform:"pi",status:"n/a"};let Y=J.find((de)=>Zi(typeof de==="string"?de:nn(de,"source")));if(Y===void 0)return{platform:"pi",status:"n/a"};let re=nn(Y,"extensions");if(Array.isArray(re)&&re.some((de)=>typeof de==="string"&&de.startsWith("-")))return{platform:"pi",status:"disabled",method:"package config",configPath:N,errors:["npm:cc-safety-net is installed but its extension is disabled in Pi settings"]};return{platform:"pi",status:"configured",method:"package config",configPath:N}}var nh={amp:Wa,"antigravity-cli":Ya,"claude-code":Qa,codex:nl,"copilot-cli":hl,cursor:Rl,"deepseek-harness":_l,devin:Nl,droid:Vl,"gemini-cli":Kl,"grok-build":nc,"hermes-agent":fc,"kimi-code":ar,openclaw:Rc,opencode:qt,pi:jc};function Vt(_,N,j){let J={...j,cwd:N,environment:_};return Rr.map((Y)=>th(nh[Y](J)))}function th(_){if(_.status==="not-inspected")return{platform:_.platform,detected:!1,configured:!1,inspectionStatus:"not-inspected"};return{platform:_.platform,detected:_.status!=="n/a",configured:_.status==="configured",inspectionStatus:_.status!=="n/a"?"verified":_.errors&&_.errors.length>0?"failed":"not-applicable",method:_.method,configPath:_.configPath,configPaths:_.configPaths,errors:_.errors}}import{join as rh}from"node:path";var oh=Object.freeze([{command:"git reset --hard",description:"git reset --hard",expectBlocked:!0},{command:"rm -rf /",description:"rm -rf /",expectBlocked:!0},{command:"rm -rf ./node_modules",description:"rm in cwd (safe)",expectBlocked:!1}]),ih=Object.freeze({state:"ready",diagnostics:Object.freeze([]),ruleMetadata:Object.freeze({}),policy:Object.freeze({rules:Object.freeze([]),transparentWrappers:Object.freeze([]),commandTools:Object.freeze([]),safety:Object.freeze({}),worktreeMode:!1,destructiveCommandProtectionEnabled:!0,destructiveCommandRuleOverrides:Object.freeze({}),destructiveCommandAllowPaths:Object.freeze([]),secretProtection:Object.freeze({enabled:!0,disabledRules:Object.freeze([]),denyPaths:Object.freeze([]),allowPaths:Object.freeze([])})})}),sh={strict:!1,paranoidRm:!1,paranoidInterpreters:!1,worktreeMode:!1,effectiveLevel:"standard",capabilities:{fail_closed:{enabled:!1,source:"preset",sources:[]},paranoid_rm:{enabled:!1,source:"preset",sources:[]},paranoid_interpreters:{enabled:!1,source:"preset",sources:[]}}};function Hc(_){let N=rh(_.tmpdir,"cc-safety-net-self-test"),j=oh.map((J)=>{let Y=G(_,l("self-test",{command:J.command},{kind:"command",shell:"auto"},{configCwd:N,executionCwd:N},J.command),{guard:{dependencies:{loadPolicySnapshot:()=>ih,getModes:()=>sh,findPolicyMutation:()=>null}},audit:{agent:"self-test",getSessionId:()=>{return}}}),re=J.expectBlocked?"blocked":"allowed",ie=Y.decision.kind==="deny"?"blocked":"allowed";return{command:J.command,description:J.description,expected:re,actual:ie,passed:re===ie,reason:Y.decision.kind==="deny"?Y.decision.reason:void 0,ruleId:Y.decision.kind==="deny"?Y.decision.ruleId:void 0}});return{passed:j.filter((J)=>J.passed).length,failed:j.filter((J)=>!J.passed).length,total:j.length,results:j}}function Xi(_){let N=gn({label:"doctor",booleans:{json:["--json"],skipUpdateCheck:["--skip-update-check"]}},_);if(Dn(N.errors))return null;return{json:N.flags.json,skipUpdateCheck:N.flags.skipUpdateCheck}}async function Fc(_,N={}){let j=await Xt(!N.json,()=>{let J=lh(_,N);return{ready:J,finish:()=>J}},()=>Zt(),{loadingMessage:"Checking system status…"});if(N.json)console.log(JSON.stringify(j,null,2));else ch(j);return j.engineSelfTest.failed>0||j.findings.some((J)=>J.severity==="error")?1:0}async function lh(_,N){let j=N.cwd??process.cwd(),J=await Lr((Ge)=>qt({environment:_,cwd:j,openCodeVersion:Ge}).status!=="n/a",void 0,j),Y=Vt(_,j,{ampPluginListOutput:J.ampPluginListOutput,codexPluginListOutput:J.codexPluginListOutput,copilotCliVersion:J.versions["copilot-cli"],openCodeVersion:J.versions.opencode,openCodePluginListOutput:J.openCodePluginListOutput}),re=da(_,j),ie=ua(_),de=R(_,{cwd:j}),fe=de.policy,ke=P(fe,_.env),Ce=V(fe,ke.capabilities),Re=Ar(_,7),Ee=Ba(_,j),Ne=[Or(j),Dt(_)].filter((Ge)=>ah(Ge)),Oe=N.skipUpdateCheck?{currentVersion:pn(),latestVersion:null,updateAvailable:!1}:await Gn(),Je={hooks:Y,engineSelfTest:Hc(_),userConfig:re.userConfig,projectConfig:re.projectConfig,configState:Be(de),effectiveRules:re.effectiveRules,environment:ie,effectiveSafety:{selectedPreset:fe.safety.level??"standard",level:ke.effectiveLevel,capabilities:ke.capabilities,ruleOverrides:fe.destructiveCommandRuleOverrides,weakenedRuleOverrides:Object.entries(Ce).filter(([,Ge])=>Ge.source==="rule_override"&&Ge.override==="off"&&Ge.inheritedEnabled&&Ge.changesInherited).map(([Ge])=>Ge),ruleCounts:{stored:Object.keys(fe.destructiveCommandRuleOverrides).length,effective:Object.values(Ce).filter((Ge)=>Ge.changesInherited).length},...de.policyScopes?{policyScopes:de.policyScopes}:{}},...Ee.length>0?{v2Leftovers:Ee}:{},...Ne.length>0?{legacyConfigs:Ne}:{},posture:Pa(_,re.userConfig.path),activity:Re,update:Oe,system:J};return{...Je,findings:fa(Je)}}function ch(_){console.log(),console.log(ga(_.hooks)),console.log(),console.log(ya(_.engineSelfTest)),console.log(),console.log(ha(_)),console.log(),console.log(va(_.environment)),console.log(),console.log(ba(_)),console.log(),console.log(wa(_.findings)),console.log(),console.log(ka(_.activity)),console.log(),console.log(xa(_.system)),console.log(),console.log(Ca(_.update)),console.log(Sa(_))}import{existsSync as dh}from"node:fs";var uh=/^[A-Za-z0-9_@%+=:,./-]+$/,Mc="Usage: cc-safety-net explain [--json] [--cwd <path>] <command>";function Qi(_){let N=gn({label:"explain",booleans:{json:["--json"]},values:{cwd:["--cwd"]},positionals:"tail"},_);if(Dn(N.errors))return console.error(Mc),console.error("Pass -- before a command that starts with dashes."),null;if(N.values.cwd!==void 0&&!dh(N.values.cwd))return console.error(`Error: --cwd path does not exist: ${N.values.cwd}`),null;let j=N.positionals.length===1?N.positionals[0]:N.positionals.map((J)=>uh.test(J)?J:`'${J.replaceAll("'","'\\''")}'`).join(" ");if(!j)return console.error("Error: No command provided"),console.error(Mc),null;return{json:N.flags.json,cwd:N.values.cwd,command:j}}function Uc(_){if(_)return{dh:"=",dv:"|",dtl:"+",dtr:"+",dbl:"+",dbr:"+",h:"-",v:"|",tl:"+",tr:"+",bl:"+",br:"+",sh:"="};return{dh:"═",dv:"║",dtl:"╔",dtr:"╗",dbl:"╚",dbr:"╝",h:"─",v:"│",tl:"┌",tr:"┐",bl:"└",br:"┘",sh:"━"}}function Gc(_,N){let J=N-18;return[`${_.dtl}${_.dh.repeat(N)}${_.dtr}`,`${_.dv}  Command Analysis${" ".repeat(J)}${_.dv}`,`${_.dbl}${_.dh.repeat(N)}${_.dbr}`]}function es(_){return JSON.stringify(_)}function Bc(_,N=0){return`[${_.map((J,Y)=>ma(J,Y,N)).join(",")}]`}function ur(_,N,j=70){let J=_.split(" "),Y=[],re="";for(let ie of J)if(re&&re.length+ie.length+1>j)Y.push(re),re=ie;else re=re?`${re} ${ie}`:ie;if(re)Y.push(re);return Y.map((ie,de)=>de===0?ie:`${N}${ie}`)}function qc(_,N,j){let J=[];switch(_.type){case"parse":return null;case"env-strip":return J.push(""),J.push(`STEP ${N} ${j.h} Strip environment variables`),J.push(`  Removed: ${_.envVars.map((Y)=>`${Y}=<redacted>`).join(", ")}`),J.push(`  Tokens:  ${es(_.output)}`),{lines:J,incrementStep:!0};case"leading-tokens-stripped":return J.push(""),J.push(`STEP ${N} ${j.h} Strip wrappers`),J.push(`  Removed: ${_.removed.join(", ")}`),J.push(`  Tokens:  ${es(_.output)}`),{lines:J,incrementStep:!0};case"shell-wrapper":return J.push(""),J.push(`STEP ${N} ${j.h} Detect shell wrapper`),J.push(`  Wrapper: ${_.wrapper} -c`),J.push(`  Inner:   ${_.innerCommand}`),{lines:J,incrementStep:!0};case"interpreter":{if(J.push(""),J.push(`STEP ${N} ${j.h} Detect interpreter`),J.push(`  Interpreter: ${_.interpreter}`),J.push(`  Code:        ${_.codeArg}`),_.paranoidBlocked)J.push("  Result:      ✗ BLOCKED (paranoid mode)");return{lines:J,incrementStep:!0}}case"busybox":return J.push(""),J.push(`STEP ${N} ${j.h} Busybox wrapper`),J.push(`  Subcommand: ${_.subcommand}`),{lines:J,incrementStep:!0};case"transparent-wrapper":return J.push(""),J.push(`STEP ${N} ${j.h} Transparent wrapper`),J.push(`  Wrapper: ${_.wrapper}`),J.push(`  Tokens:  ${es(_.output)}`),{lines:J,incrementStep:!0};case"recurse":return{lines:[],incrementStep:!1};case"rule-check":{if(J.push(""),J.push(`STEP ${N} ${j.h} Match rules`),J.push(`  Rule:   ${_.rule}()`),_.matched)J.push("  Result: MATCHED");else J.push("  Result: No match");return{lines:J,incrementStep:!0}}case"worktree-relaxation":return J.push(""),J.push(`STEP ${N} ${j.h} Worktree relaxation`),J.push(`  Mode:   ${n.worktree.name}`),J.push(`  Git cwd: ${_.gitCwd}`),J.push("  Result: Allowed local discard in linked worktree"),{lines:J,incrementStep:!0};case"temp-root-relaxation":return J.push(""),J.push(`STEP ${N} ${j.h} Temp-root relaxation`),J.push(`  Git cwd: ${_.gitCwd}`),J.push("  Result: Allowed git discard in a temp-root repository"),{lines:J,incrementStep:!0};case"tmpdir-check":return null;case"fallback-scan":{if(_.embeddedCommandFound)return J.push(""),J.push(`STEP ${N} ${j.h} Fallback scan`),J.push(`  Found: ${_.embeddedCommandFound}`),{lines:J,incrementStep:!0};return null}case"custom-rules-check":{if(_.rulesChecked){if(J.push(""),J.push(`STEP ${N} ${j.h} Custom rules`),_.matched)J.push("  Result: MATCHED");else J.push("  Result: No match");return{lines:J,incrementStep:!0}}return null}case"cwd-change":return null;case"dangerous-text":{if(_.matched)return J.push(""),J.push(`STEP ${N} ${j.h} Dangerous text check`),J.push(`  Token:  ${_.token}`),J.push("  Result: MATCHED"),{lines:J,incrementStep:!0};return null}case"strict-unparseable":return J.push(""),J.push(`STEP ${N} ${j.h} Strict mode check`),J.push(`  Command: ${_.rawCommand}`),J.push("  Result:  ✗ UNPARSEABLE"),{lines:J,incrementStep:!0};case"segment-skipped":return null;case"error":return J.push(""),J.push(`ERROR: ${_.message}`),{lines:J,incrementStep:!1};default:return _}}function ns(_,N){let j=Uc(N?.asciiOnly??!1),J=58,Y=[],re=1;Y.push(...Gc(j,58)),Y.push("");let ie=_.trace.steps.find((Oe)=>Oe.type==="error");if(ie&&ie.type==="error"){Y.push("ERROR"),Y.push(`  ${ie.message}`),Y.push(""),Y.push("RESULT"),Y.push(`  Status: ${_.result==="blocked"?en.red("BLOCKED"):en.green("ALLOWED")}`),Y.push(""),Y.push("CONFIG");let Oe=_.configSource??"none";return Y.push(`  Path: ${Oe}`),Y.join(`
`)}let de=_.trace.steps.find((Oe)=>Oe.type==="parse");if(de&&de.type==="parse"){Y.push("INPUT"),Y.push(`  ${de.input}`),Y.push(""),Y.push(`STEP ${re} ${j.h} Split shell commands`),re++;for(let Oe=0;Oe<de.segments.length;Oe++){let Je=de.segments[Oe];if(Je){let Ge=Math.random();Y.push(`  Segment ${Oe+1}: ${Bc(Je,Ge)}`)}}}let fe=_.trace.segments,ke=fe.length>1;for(let Oe of fe){if(ke){Y.push("");let rn="";if(de&&de.type==="parse"){let Fo=de.segments[Oe.index];if(Fo)rn=Fo.join(" ")}let on=54,sn=rn,tn=` Segment ${Oe.index+1}: `,fn=" ";if(rn){if(tn.length+rn.length+fn.length>on){let qp=on-tn.length-fn.length;sn=`${rn.substring(0,qp-1)}…`}}let $n=rn?`${tn}${sn}${fn}`:` Segment ${Oe.index+1} `,Gp=rn?`${tn}${en.cyan(sn)}${fn}`:$n,Fs=58-$n.length,Ms=Math.floor(Fs/2),Bp=Fs-Ms;Y.push(`${j.sh.repeat(Ms)}${Gp}${j.sh.repeat(Bp)}`)}if(Oe.steps.find((rn)=>rn.type==="segment-skipped")){Y.push(""),Y.push("  (skipped — prior segment blocked)");continue}let Ge=!1,Ye=!1;for(let rn of Oe.steps){let on=qc(rn,re,j);if(on){if(Ye=!0,rn.type==="recurse"){Y.push("");let sn=" RECURSING ",tn=58-sn.length-4;Y.push(`  ${j.tl}${j.h}${sn}${j.h.repeat(tn)}`),Y.push(`  ${j.v}`),Ge=!0;continue}for(let sn of on.lines)if(Ge)Y.push(`  ${j.v} ${sn}`);else Y.push(sn);if(on.incrementStep)re++}}if(Ge)Y.push(`  ${j.v}`),Y.push(`  ${j.bl}${j.h.repeat(56)}`);if(!Ye)Y.push(""),Y.push(`  ${en.green("✓")} Allowed (no matching rules)`)}if(Y.push(""),Y.push("RESULT"),_.result==="blocked"){if(Y.push(`  Status: ${en.red("BLOCKED")}`),_.customRule){if(Y.push(`  Rule: ${_.customRule.id}`),_.customRule.rulebook)Y.push(`  Rulebook: ${_.customRule.rulebook.name} ${_.customRule.rulebook.version}`);if(_.customRule.source)Y.push(`  Source: ${_.customRule.source}`);if(_.customRule.override)Y.push(`  Override: reason ${_.customRule.override.reason}`)}if(_.reason){let Oe=ur(_.reason,"          ");Y.push(`  Reason: ${Oe[0]}`);for(let Je=1;Je<Oe.length;Je++)Y.push(Oe[Je]??"")}}else Y.push(`  Status: ${en.green("ALLOWED")}`);Y.push(""),Y.push("CONFIG");let Ce=_.configSource??"none",Re=_.configValid?"":" (invalid)";Y.push(`  Path: ${Ce}${Re}`);let Ee=_.safetyPresetScope;Y.push(`  Safety preset: ${_.selectedPreset??"standard"}${Ee?` (${Ir(Ee)})`:""}`),Y.push(`  Effective capabilities: ${_.effectiveLevel}`);let Ne=Object.entries(_.destructiveCommandRuleOverrides??{});if(Y.push(`  Rule customizations: ${Ne.length}`),_.ruleActivation)Y.push(`  Rule activation: ${_.ruleActivation.id} — ${_.ruleActivation.enabled?"on":"off"} via ${_.ruleActivation.source}`);return Y.join(`
`)}function ts(_){return JSON.stringify(_,null,2)}import{resolve as yh}from"node:path";var ph=["AKIA","ASIA","ghp_","gho_","ghu_","ghs_","ghr_","github_pat_","glpat-","xox","npm_","pypi-","rk_","sk-","sk_","gsk_","xai-","pplx-","bastn_","tgp_v1_","flp_","wfr_","fw_","fwp_","tp-","psk-"];function Vc(_){let N=0,j={allocateSegment(){return N++},getNextSegmentIndex(){return N},recordGlobal(J){_.record({kind:"step",scope:"global",step:J})},recordSegment(J,Y=j.currentSegmentIndex){if(Y===void 0)return;_.record({kind:"step",scope:"segment",segmentIndex:Y,step:J})}};return j}function Kc(_={}){let N=[],j=_.maxEvents??512,J={maxTextLength:_.maxTextLength??2048,maxListLength:_.maxListLength??128,maxObjectProperties:_.maxObjectProperties??_.maxListLength??128,maxDepth:_.maxDepth??16},Y,re=new Set;return{record(ie){if(Y)return;if(!ie||N.length>=j)return;try{N.push(is(fh(ie,J,re)))}catch{}},finish(){if(Y)return Y;return Y=is({events:Object.freeze(N)}),Y}}}function fh(_,N,j){if(_.kind!=="step")throw TypeError("invalid trace event");let{scope:J,step:Y}=_;go(Y,j,N);let re=rs(Y,N,j);if(J==="global")return{kind:"step",scope:"global",step:re};if(J!=="segment")throw TypeError("invalid trace event scope");return{kind:"step",scope:"segment",segmentIndex:_.segmentIndex,step:re}}function go(_,N,j,J=0,Y=new WeakSet){if(typeof _==="string"){let de=_.slice(0,j.maxTextLength);if(!tt(de))return;for(let fe of gt(de))for(let ke of fe.match(/[^\s"'()$]+/g)??[])N.add(Jc(ke));return}if(!_||typeof _!=="object"||J>=j.maxDepth||Y.has(_))return;if(Y.add(_),Array.isArray(_)){let de=Math.min(_.length,j.maxListLength);for(let fe=0;fe<de;fe++)go(_[fe],N,j,J+1,Y);return}let re=0,ie=new Set;for(let de in _){if(!Object.hasOwn(_,de))continue;if(re>=j.maxObjectProperties)break;re++,go(de,N,j);let fe=os(de,j,N);if(ie.has(fe))continue;ie.add(fe),go(_[de],N,j,J+1,Y)}}function rs(_,N,j,J=0,Y=new WeakSet){if(typeof _==="string")return os(_,N,j);if(!_||typeof _!=="object")return _;if(J>=N.maxDepth)return;if(Y.has(_))return;if(Y.add(_),Array.isArray(_)){let de=[],fe=Math.min(_.length,N.maxListLength);for(let ke=0;ke<fe;ke++)de.push(rs(_[ke],N,j,J+1,Y));return de}let re={},ie=0;for(let de in _){if(!Object.hasOwn(_,de))continue;if(ie>=N.maxObjectProperties)break;ie++;let fe=os(de,N,j);if(Object.hasOwn(re,fe))continue;Object.defineProperty(re,fe,{value:rs(_[de],N,j,J+1,Y),enumerable:!0,configurable:!0,writable:!0})}return re}function os(_,N,j){let J=_.slice(0,N.maxTextLength),Y=tt(J)?et(J):J,re=j.size>0?gh(Y,j):Y;return(mh(re)?De(re):re).slice(0,N.maxTextLength)}function mh(_){return _.includes("PRIVATE KEY")||_.includes("://")||_.includes("eyJ")||_.includes(":")&&/(?:authorization|cookie|x-api-key|api-key|(?:^|\s)(?:-u|--user)(?:\s|=))/i.test(_)||_.length>=14&&ph.some((N)=>_.includes(N))||_.length>=49&&/\b[a-f0-9]{32}\.[A-Za-z0-9]{16}\b/.test(_)}function gh(_,N){return _.replace(/[^\s"'()$]+/g,(j)=>N.has(Jc(j))?"<redacted>":j)}function Jc(_){let N=2166136261,j=2166136261;for(let J=0;J<_.length;J++)N=Math.imul(N^_.charCodeAt(J),16777619),j=Math.imul(j^_.charCodeAt(_.length-J-1),16777619);return`${N>>>0}:${j>>>0}:${_.length}`}function is(_){if(_&&typeof _==="object"&&!Object.isFrozen(_)){for(let N of Object.values(_))is(N);Object.freeze(_)}return _}function pr(_,N={},j){let J=yh(N.cwd??process.cwd()),Y=N.policySnapshot??R(j,{cwd:J,userConfigDir:N.userConfigDir}),re=P(Y.policy,j.env),ie=ze({policySnapshot:Y,effectiveCapabilities:re.capabilities,strict:re.strict,paranoidRm:re.paranoidRm,paranoidInterpreters:re.paranoidInterpreters,worktreeMode:re.worktreeMode}),de={effectiveLevel:ie.effectiveLevel,selectedPreset:Y.policy.safety.level??"standard",...Y.policyScopes?{safetyPresetScope:Y.policyScopes.levelScope}:{},effectiveCapabilities:ie.effectiveCapabilities,destructiveCommandRuleOverrides:Y.policy.destructiveCommandRuleOverrides},{configSource:fe,configValid:ke}=vh(j,{cwd:J,userConfigDir:N.userConfigDir});if(!_||!_.trim())return{trace:{steps:[{type:"error",message:"No command provided"}],segments:[]},result:"allowed",configSource:fe,configValid:ke,...de};let Ce=y(_,"auto");if(Ce.status==="limited")throw new b;let Re=Ce.dialect==="powershell"?y(_,"posix"):Ce,Ee=Et(Re),Ne=Kc(),Oe=Vc(Ne);Oe.recordGlobal({type:"parse",input:_,segments:Ee.map(($n)=>[...$n])});let Je=l("Bash",{command:_},{kind:"command",shell:"auto"},{configCwd:J,executionCwd:J},_),Ge=q(Je,{environment:j,trace:Oe,dependencies:{loadPolicySnapshot:()=>Y}}),Ye=Ge.decision.kind==="deny"?Ge.decision:null;if(Ye&&(Ge.stage==="policy-protection"||Ge.stage==="secret-protection"))return{trace:{steps:[],segments:[{index:0,steps:[{type:"rule-check",rule:hh(Ye),matched:!0,reason:Ye.reason}]}]},result:"blocked",reason:T(Ye.reason),segment:T(Wc(Ye,_)),ruleId:T(Ye.ruleId),configSource:fe,configValid:ke,...de};let rn=Oe.getNextSegmentIndex();if(Ye&&rn>0&&rn<Ee.length)Oe.recordSegment({type:"segment-skipped",index:rn,reason:"prior-segment-blocked"},rn);let on=Ne.finish(),sn=Ye?.ruleId??bh(Je,Y,re,j),tn=z.find(($n)=>$n.id===sn&&$n.activationCapability),fn=tn?ie.policy.effectiveDestructiveCommandRules[tn.id]:void 0;return{trace:kh(on),result:Ye?"blocked":"allowed",reason:Ye?T(Ye.reason):void 0,segment:Ye?T(Wc(Ye,_)):void 0,ruleId:Ye?T(Ye.ruleId):void 0,customRule:wh(Ch(Ye?.ruleId,Y)),configSource:fe,configValid:ke,...de,...tn&&fn?{ruleActivation:{id:tn.id,...fn}}:{}}}function Wc(_,N){return _.evidence?.segment??N}function hh(_){if(_.reason===qe)return"policy-protection:findPolicyConfigMutationTargetInSemanticFacts";if(_.reason===Ve)return"policy-apply-protection:findPolicyApplyInvocationInSemanticFacts";if(_.reason===v)return"git-metadata-protection:findGitMetadataMutationTargetInSemanticFacts";return"secret-protection:findSensitiveTargetInSemanticFacts"}function vh(_,N){let j=I(N.cwd),J=W(_,N),Y=X(_,{cwd:N.cwd,userConfigDir:N.userConfigDir});try{if(r(Y.projectConfigTarget)!==null){if(Un(Y.projectConfigTarget).errors.length===0)return{configSource:j,configValid:!0};return{configSource:j,configValid:!1}}}catch(re){if(re instanceof o)return{configSource:j,configValid:!1};throw re}try{if(r(Y.userConfigTarget)!==null){let re=Un(Y.userConfigTarget);return{configSource:J,configValid:re.errors.length===0}}return{configSource:null,configValid:!0}}catch(re){if(re instanceof o)return{configSource:J,configValid:!1};throw re}}function bh(_,N,j,J){let Y=N.policy,re=Ae({...Y,destructiveCommandProtectionEnabled:!0,destructiveCommandRuleOverrides:{...Y.destructiveCommandRuleOverrides,...Object.fromEntries(z.flatMap((de)=>de.activationCapability?[[de.id,"on"]]:[]))}},N.state==="degraded"?{diagnostics:N.diagnostics,reason:N.reason}:void 0),ie=q(_,{environment:J,dependencies:{loadPolicySnapshot:()=>re,getModes:()=>({...j,strict:!0,paranoidRm:!0,paranoidInterpreters:!0}),findSensitiveTarget:()=>null}});return ie.decision.kind==="deny"?ie.decision.ruleId:void 0}function wh(_){if(!_)return;return{id:T(_.id),..._.rulebook?{rulebook:{name:T(_.rulebook.name),version:T(_.rulebook.version)}}:{},..._.source?{source:T(_.source)}:{},..._.override?{override:{type:"reason",reason:T(_.override.reason)}}:{}}}function kh(_){let N=_.events.flatMap((J)=>J.kind==="step"&&J.scope==="global"?[J.step]:[]),j=new Map;for(let J of _.events){if(J.kind!=="step"||J.scope!=="segment")continue;let Y=j.get(J.segmentIndex)??{index:J.segmentIndex,steps:[]};Y.steps.push(J.step),j.set(J.segmentIndex,Y)}return{steps:N,segments:[...j.values()]}}function Ch(_,N){let j=_?.replace(/^custom\./,"");if(!j||!N.policy.rules.some((J)=>J.name===j))return;return N.ruleMetadata[j]??Object.freeze({id:j})}function zc(_){return new Promise((N)=>{process.stdout.write(`${_}
`,()=>N())})}async function Yc(_,N){let j=Qi(N);if(!j)return 1;try{let J=pr(j.command,{cwd:j.cwd},_),Y=!!process.env.NO_COLOR||!process.stdout.isTTY;return await zc(j.json?ts(J):ns(J,{asciiOnly:Y})),0}catch(J){let Y=xh(J instanceof f?J.cause:J);if(Y===void 0)throw J;if(j.json)return await zc(JSON.stringify({error:Y})),1;return console.error(Y),1}}function xh(_){if(_ instanceof b)return _.message;if(_ instanceof m)return _.message;if(_ instanceof s&&a[_.kind].errorCode==="path-canonicalization-limit")return"Path canonicalization work limit exceeded.";return}var Zc="2.6.9",En="  ",kt="cc-safety-net";function Xc(_){return _.argument?`${_.flags} ${_.argument}`:_.flags}function Sh(_){return Math.max(..._.map((N)=>Xc(N).length))}function Ph(_){return Math.max(..._.map((N)=>N.usage.length))}function Rh(_){return Math.max(..._.map((N)=>`${kt} ${N.usage}`.length))}function Eh(_,N){let j=`${kt} ${_.usage}`;return`${En}${j.padEnd(N+2)}${_.description}`}function On(_,N){return`${En}${_.padEnd(Math.max(40,_.length+2))}${N}`}function Kt(_,N=console.log){let j=[];if(j.push(`${kt} ${_.name}`),j.push(""),j.push(`${En}${_.description}`),j.push(""),j.push("USAGE:"),j.push(`${En}${kt} ${_.usage}`),j.push(""),_.subcommands&&_.subcommands.length>0){j.push("SUBCOMMANDS:");let J=Ph(_.subcommands);for(let Y of _.subcommands)j.push(`${En}${Y.usage.padEnd(J+2)}${Y.description}`);j.push("")}if(_.options.length>0){j.push("OPTIONS:");let J=Sh(_.options);for(let Y of _.options){let re=Xc(Y),ie=Y.default?`${Y.description} (default: ${Y.default})`:Y.description;j.push(`${En}${re.padEnd(J+2)}${ie}`)}j.push("")}if(_.examples&&_.examples.length>0){j.push("EXAMPLES:");for(let J of _.examples)j.push(`${En}${J}`)}N(j.join(`
`))}function ss(){let _=Rh(_r),N=[];N.push(`${kt} v${Zc}`),N.push(""),N.push("Blocks destructive commands and secret access."),N.push(""),N.push("COMMANDS:");for(let j of _r)N.push(Eh(j,_));N.push(""),N.push("GLOBAL OPTIONS:"),N.push(`${En}-h, --help       Show help (use with command for command-specific help)`),N.push(`${En}-V, --version    Show version`),N.push(""),N.push("HELP:"),N.push(`${En}${kt} help <command>     Show help for a specific command`),N.push(`${En}${kt} <command> --help   Show help for a specific command`),N.push(""),N.push("ENVIRONMENT VARIABLES:"),N.push(On(`${n.level.name}=standard|strict|paranoid`,"Set session safety level")),N.push(On(`${n.worktree.name}=1`,"Allow local git discards in linked worktrees")),N.push(On(`${n.debug.name}=1`,"Print diagnostic messages to stderr")),N.push(On(`${n.auditScope.name}=all|blocked`,"Record all command decisions, or denials only")),N.push(On(`${n.projectTightenOnly.name}=1`,"Ignore project policy settings that weaken the user policy")),N.push(On("CC_SAFETY_NET_HOME","Override rule config home directory")),N.push(""),N.push("LEGACY ENVIRONMENT VARIABLES (STILL SUPPORTED):"),N.push(On(`${n.strict.name}=1`,"Force safety.overrides.fail_closed on")),N.push(On(`${n.paranoid.name}=1`,"Force paranoid_rm and paranoid_interpreters on")),N.push(On(`${n.paranoidRm.name}=1`,"Force safety.overrides.paranoid_rm on")),N.push(On(`${n.paranoidInterpreters.name}=1`,"Force safety.overrides.paranoid_interpreters on")),N.push(""),N.push("Documentation:        https://ccsafetynet.com/docs"),console.log(N.join(`
`))}function Qc(){console.log(Zc)}function fr(_,N=console.log){let j=Tr(_);if(!j)return!1;if(j.name.toLowerCase()!==_.toLowerCase())return!1;return Kt(j,N),!0}import{existsSync as xo,readFileSync as iu}from"node:fs";import{join as Co}from"node:path";import*as qn from"node:readline";function _h(_){return _==="install"?"Install":"Uninstall"}function Th(_){return _==="install"?"Installing":"Uninstalling"}function Ah(_){return _==="install"?"into":"from"}function td(_){return _?.available===!0}function Oh(_,N){let j=new Set(N);return _.filter((J)=>j.has(J.target)).map((J)=>J.target)}function ed(_,N,j){if(_.every((J)=>!J.available))return N;return Array.from({length:_.length},(J,Y)=>Y+1).map((J)=>(N+J*j+_.length)%_.length).find((J)=>td(_[J]))}function Ih(_,N,j){if(j.ctrl&&j.name==="c")return"interrupt";if(j.name==="escape"||N==="q")return"abort";if(_==="install"&&(N==="u"||N==="U"))return"update";if(j.name==="up"||N==="k")return"up";if(j.name==="down"||N==="j")return"down";if(j.name==="space"||N===" ")return"toggle";if(j.name==="return"||j.name==="enter")return"confirm";return null}function $h(_){return{cursor:_.findIndex((N)=>N.available),selected:[]}}function Dh(_,N,j){if(j==="confirm"||j==="update"||j==="abort"||j==="interrupt")return{state:_,done:j};if(j==="up")return{state:{..._,cursor:ed(N,_.cursor,-1)}};if(j==="down")return{state:{..._,cursor:ed(N,_.cursor,1)}};let J=N[_.cursor];if(!td(J))return{state:_};let Y=_.selected.includes(J.target)?_.selected.filter((re)=>re!==J.target):Oh(N,[..._.selected,J.target]);return{state:{..._,selected:Y}}}var rd="◉",od="◯",id=">",sd=" ";function Lh(_,N,j){return["",`${_h(_)} CC Safety Net ${Ah(_)}:`,"",...N.map((J,Y)=>{let re=j.selected.includes(J.target),ie=Y===j.cursor,de=re?rd:od,fe=ie?id:sd,ke=J.available?"":` (${J.unavailableReason??"not installed"})`,Ce=`${de} ${J.label}${ke}`,Re=!J.available?en.dim(Ce):re?en.green(Ce):ie?en.bold(Ce):Ce;return`${fe} ${Re}`}),"",_==="install"?"Space: select  Enter: confirm  u: update installed  Up/Down: move  q/Esc: cancel":N.some((J)=>J.available)?"Space: select  Enter: confirm  Up/Down: move  q/Esc: cancel":`No selectable integrations found for ${_}. q/Esc: close`].join(`
`)}var nd=["global-hook","plugin"];function Nh(_,N,j={}){let J=j.color!==!1?en.bold:(re)=>re;return["","Install the Kimi Code integration as:","",...[`Global hook — ${N?"already installed; selecting it reports the current state":"write the hook into ~/.kimi-code/config.toml now"}`,"Native Kimi plugin — print the steps to run inside Kimi Code"].map((re,ie)=>{let de=ie===_,fe=`${de?rd:od} ${re}`;return`${de?id:sd} ${de?J(fe):fe}`}),"","Enter: confirm  Up/Down: move  q/Esc: cancel"].join(`
`)}function ad(_){let{input:N,output:j}=_;qn.emitKeypressEvents(N);let J=N.isRaw===!0;N.setRawMode(!0),N.resume();let Y=0,re=()=>{if(Y===0)return;qn.moveCursor(j,0,-Y),qn.cursorTo(j,0),qn.clearScreenDown(j)},ie=()=>{re();let de=_.render();j.write(`${de}
`),Y=de.split(`
`).length};return new Promise((de)=>{let fe=(Ce)=>{N.off("keypress",ke),N.setRawMode(J),N.pause(),re(),de(Ce)};function ke(Ce,Re){_.onKey(Ce,Re,{finish:fe,draw:ie})}N.on("keypress",ke),ie()})}function ld(_={}){let N=0;return ad({input:_.input??process.stdin,output:_.output??process.stdout,render:()=>Nh(N,_.globalHookInstalled===!0),onKey:(j,J,Y)=>{if(J.ctrl&&J.name==="c"){Y.finish(null),(_.onInterrupt??(()=>process.kill(process.pid,"SIGINT")))();return}if(J.name==="escape"||j==="q")return Y.finish(null);if(J.name==="return"||J.name==="enter")return Y.finish(nd[N]);if(J.name==="up"||J.name==="down"||j==="k"||j==="j")N=(N+1)%nd.length,Y.draw()}})}function as(_=process.stdin,N=process.stdout){return Boolean(_.isTTY&&N.isTTY&&typeof _.setRawMode==="function")}function cd(_,N,j={}){let J=j.output??process.stdout,Y=$h(N);return ad({input:j.input??process.stdin,output:J,render:()=>Lh(_,N,Y),onKey:(re,ie,de)=>{let fe=Ih(_,re,ie);if(!fe)return;let ke=Dh(Y,N,fe);if(Y=ke.state,ke.done==="interrupt"){de.finish(null),(j.onInterrupt??(()=>process.kill(process.pid,"SIGINT")))();return}if(ke.done==="abort")return de.finish(null);if(ke.done==="update")return de.finish("update");if(ke.done==="confirm"){if(Y.selected.length===0){J.write("\x07"),de.draw();return}de.finish([...Y.selected]),J.write(`${Th(_)} selected integrations...
`);return}de.draw()}})}import{existsSync as dd,lstatSync as Hh,mkdirSync as Fh,mkdtempSync as Mh,readdirSync as Uh,readFileSync as Wt,rmSync as ho}from"node:fs";import{basename as Gh,dirname as Bh,join as xn}from"node:path";import{fileURLToPath as qh}from"node:url";var ls="// cc-safety-net managed Amp plugin. Do not edit. Reinstall with: npx -y cc-safety-net install --amp",Pt="cc-safety-net",Rt="cc-safety-net/index.ts";import{spawn as jh}from"node:child_process";var cs=(_,N)=>{let j=Zn([..._],process.env);return new Promise((J)=>{let Y=jh(j.cmd,j.args,{cwd:N,stdio:["ignore","pipe","pipe"]}),re=di(Y),ie=!1,de=setTimeout(()=>{ie=!0,Y.kill()},120000);Y.on("error",(fe)=>{clearTimeout(de),J({status:null,errorCode:fe.code,stdout:re.stdout,stderr:[fe.message,re.stderr].filter(Boolean).join(`
`)})}),Y.on("close",(fe)=>{clearTimeout(de),J({status:ie?null:fe,errorCode:ie?"ETIMEDOUT":void 0,stdout:re.stdout,stderr:re.stderr})})})};var Jt="cc-safety-net.ts",ds=xn("amp",Rt);function Vh(_){return xn(_.home,".config","amp","plugins","cc-safety-net.ts")}function Kh(){let _=Bh(qh(import.meta.url)),N=xn(_,ds),j=xn(_,"..",ds),J=xn(_,"..","..","..","dist",ds);return[N,j,J]}function Jh(_=Kh()){let N=_.find((j)=>dd(j)&&Hh(j).isFile());if(!N)throw Error("Packaged Amp plugin artifact not found. Reinstall cc-safety-net and try again.");return N}function ud(_){try{return JSON.parse(_)}catch{return}}function vo(_){return _.subarray(0,Buffer.byteLength(ls)).toString("utf-8")===ls}async function mr(_,N,j){let J=await _(N,j);if(J.status===0)return J;throw Error([`Failed to run ${N.join(" ")}${J.status===null?"":` (exit ${J.status})`}.`,[J.stdout,J.stderr].filter(Boolean).join(`
`).trim()].filter(Boolean).join(`
`))}async function pd(_){let N=await _(["amp","plugins","repositories","--json"]);if(N.status===null)throw Error(`${N.errorCode==="ENOENT"?'Amp CLI not found. Install the amp CLI, sign in with "amp login", and rerun install --amp.':`amp plugins repositories --json did not finish (${N.errorCode??"terminated"}). Check that the amp CLI responds and rerun install --amp.`}
${N.stderr}`.trim());if(N.status!==0)throw Error(`Failed to run amp plugins repositories --json (exit ${N.status}). Sign in with "amp login" and rerun install --amp.
${[N.stdout,N.stderr].filter(Boolean).join(`
`)}`.trim());let j=ud(N.stdout),J=(Array.isArray(j)?j:[]).filter((Y)=>nn(Y,"scope")==="user"&&nn(Y,"exists")===!0&&nn(Y,"viewerCanWrite")===!0).map((Y)=>nn(Y,"cloneRef")).find((Y)=>typeof Y==="string"&&Y.length>0);if(!J)throw Error('Your Amp account has no writable Personal Plugins repository. Sign in with "amp login", open Amp once to create it, and rerun install --amp.');return J}async function fd(_,N,j){let J=Mh(xn(N.tmpdir,"cc-safety-net-amp-"));try{return await mr(_,["amp","clone","user-plugins",J]),await j(J)}finally{ho(J,{recursive:!0,force:!0})}}function us(_){return`rerun ${_==="overwrite"?"install":"uninstall"} --amp`}function md(_,N,j){let J=xn(_,N),Y=dn(J);if(!Y)return;if(Y.isSymbolicLink()||!Y.isFile())throw Error(`Refusing to ${j} ${N} in your Amp personal plugins repository: not a regular file. Remove it there and ${us(j)}.`);let re=Wt(J);if(vo(re))return re;throw Error(`Refusing to ${j} unmanaged file ${N} in your Amp personal plugins repository. Remove it there and ${us(j)}.`)}function gd(_,N){let j=xn(_,Pt),J=dn(j);if(!J)return;if(J.isSymbolicLink()||!J.isDirectory())throw Error(`Refusing to ${N} ${Pt} in your Amp personal plugins repository: not a regular directory. Remove it there and ${us(N)}.`);return md(_,Rt,N)}function Wh(_){let N=xn(_,Jt),j=dn(N);if(!j||j.isSymbolicLink()||!j.isFile())return;let J=Wt(N);return vo(J)?J:void 0}async function yd(_,N,j,J){if(await mr(_,j,N),(await mr(_,["git","status","--porcelain"],N)).stdout.trim()==="")return!1;return await mr(_,["git","-c","commit.gpgsign=false","-c","user.name=cc-safety-net","-c","user.email=cc-safety-net@localhost","commit","-m",J],N),await mr(_,["git","push","origin","HEAD"],N),!0}function yo(_,N){zh(_,N),Yh(_,N)}function hd(_,N){if(N==="keep")return;throw Error(`Local Amp plugin ${_} is not a managed copy and masks the personal plugin. Remove it and rerun install --amp.`)}function zh(_,N){let j=Vh(_),J=dn(j);if(!J)return;if(!J.isSymbolicLink()&&J.isFile()&&vo(Wt(j))){ho(j);return}hd(j,N)}function Yh(_,N){let j=xn(_.home,".config","amp","plugins",Pt),J=dn(j);if(!J)return;if(!J.isSymbolicLink()&&J.isDirectory()&&Zh(j)){ho(j,{recursive:!0});return}hd(j,N)}function Zh(_){let N=Gh(Rt);if(Uh(_).join("\x00")!==N)return!1;let j=xn(_,N),J=dn(j);return!!J&&!J.isSymbolicLink()&&J.isFile()&&vo(Wt(j))}function Xh(_){let N=u(_);if(!dd(N))return"";let j=ud(Wt(N,"utf-8"));if(!j||typeof j!=="object"||Array.isArray(j))return"";return`;globalThis.__CC_SAFETY_NET_EMBEDDED_POLICY__ = ${JSON.stringify(k(j,_.home))};
`}async function vd(_,N=Jh(),j=cs){let J=Buffer.concat([Wt(N),Buffer.from(Xh(_),"utf-8")]),Y=await pd(j);return fd(j,_,async(re)=>{let ie=`${Y}/${Pt}`,de=gd(re,"overwrite"),fe=md(re,Jt,"overwrite");if(de?.equals(J)&&!fe)return yo(_,"fail"),{path:ie,alreadyInstalled:!0};if(Fh(xn(re,Pt),{recursive:!0}),ln(xn(re,Rt),J),fe)ho(xn(re,Jt));let ke=await yd(j,re,["git","add","--",Rt,...fe?[Jt]:[]],`chore: update cc-safety-net plugin to v${pn()}`);return yo(_,"fail"),{path:ie,alreadyInstalled:!ke}})}async function bd(_,N=cs){let j=await pd(N);return fd(N,_,async(J)=>{let Y=gd(J,"remove"),re=Wh(J),ie=`${j}/${re&&!Y?Jt:Pt}`;if(!Y&&!re)return yo(_,"keep"),{path:ie,alreadyInstalled:!1};return await yd(N,J,["git","rm","--",...Y?[Rt]:[],...re?[Jt]:[]],`chore: remove cc-safety-net plugin v${pn()}`),yo(_,"keep"),{path:ie,alreadyInstalled:!0}})}import{existsSync as wd,mkdirSync as Qh,readFileSync as ev}from"node:fs";import{dirname as nv}from"node:path";var ps=Cn["antigravity-cli"],_t="cc-safety-net";function Tt(_){return Boolean(_)&&typeof _==="object"&&!Array.isArray(_)}function wo(){return{PreToolUse:[{hooks:[{type:"command",command:ps,timeout:30}]}]}}function kd(_){try{let N=JSON.parse(ev(_,"utf-8"));if(!N||typeof N!=="object"||Array.isArray(N))throw Error("Antigravity hooks config must be a JSON object");return N}catch(N){if(N instanceof SyntaxError)throw Error(`Failed to parse Antigravity hooks config ${_}: ${N.message}`);throw N}}function Cd(_){let N=_[_t];if(N===void 0){let J=wo();return _[_t]=J,{definition:J,preToolUse:J.PreToolUse??[]}}if(!Tt(N))throw Error(`Antigravity hooks config entry "${_t}" must be an object`);let j=Array.isArray(N.PreToolUse)?N.PreToolUse:[];return N.PreToolUse=j,{definition:N,preToolUse:j}}function xd(_){if(!Array.isArray(_.PreToolUse))return!1;return _.PreToolUse.some((N)=>Tt(N)&&Array.isArray(N.hooks)&&N.hooks.some((j)=>Tt(j)&&j.command===ps))}function tv(_){return Object.values(_).some((N)=>Tt(N)&&N.enabled!==!1&&xd(N))}function rv(_){if(_[_t]===void 0)return!1;let N=Cd(_);if(N.definition.enabled!==!1||!xd(N.definition))return!1;return N.definition.enabled=!0,!0}function ov(_){if(_[_t]===void 0){_[_t]=wo();return}let N=Cd(_);N.definition.enabled=!0,N.preToolUse.push(wo().PreToolUse?.[0]??{hooks:[]})}function iv(_){let N=!1;for(let j of Object.values(_)){if(!Tt(j)||!Array.isArray(j.PreToolUse))continue;j.PreToolUse=j.PreToolUse.flatMap((J)=>{if(!Tt(J)||!Array.isArray(J.hooks))return[J];let Y=J.hooks.filter((re)=>!Tt(re)||re.command!==ps);if(Y.length!==J.hooks.length)N=!0;return Y.length===0?[]:[{...J,hooks:Y}]})}return N}function bo(_,N){ln(_,`${JSON.stringify(N,null,2)}
`)}function Sd(_){let N=Qt(_.home);if(Qh(nv(N),{recursive:!0}),!wd(N))return bo(N,{[_t]:wo()}),{path:N,alreadyInstalled:!1};let j=kd(N);if(tv(j))return{path:N,alreadyInstalled:!0};if(rv(j))return bo(N,j),{path:N,alreadyInstalled:!1};return ov(j),bo(N,j),{path:N,alreadyInstalled:!1}}function Pd(_){let N=Qt(_.home);if(!wd(N))return{path:N,alreadyInstalled:!1};let j=kd(N);if(!iv(j))return{path:N,alreadyInstalled:!1};return bo(N,j),{path:N,alreadyInstalled:!0}}import{existsSync as gs,readlinkSync as lv}from"node:fs";import{join as Vn}from"node:path";import{spawn as sv}from"node:child_process";var In=Rn.map((_)=>({target:_.id,flag:_.flag,label:cn(_.id),probeCommand:_.probeCommand}));function fs(_){let N=new Set(_);return In.map((j)=>j.target).filter((j)=>N.has(j))}async function Rd(_,N){for(let j of _)await N(j)}var av=5000;function gr(_,N=av){return new Promise((j)=>{let J=Zn([..._],process.env),Y=sv(J.cmd,J.args,{env:process.env,stdio:"ignore"}),re=!1,ie=(fe)=>{if(re)return;re=!0,clearTimeout(de),j(fe)},de=setTimeout(()=>{Y.kill(),ie(!1)},N);Y.on("error",()=>ie(!1)),Y.on("close",(fe)=>ie(fe===0))})}function Ed(_=gr,N={}){let j=new Set(N.configuredTargets??[]);return Promise.all(In.map(async(J)=>({target:J.target,flag:J.flag,label:J.label,...Td(N.action,await _(J.probeCommand)||J.target==="cursor"&&await _(Xs),j.has(J.target))})))}function _d(_,N){let j=new Set(N.configuredTargets??[]);return _.map((J)=>({...J,...Td(N.action,J.available,j.has(J.target))}))}function Td(_,N,j){if(_==="uninstall")return j?{available:!0}:{available:!1,unavailableReason:"not installed"};if(_==="install"&&j)return{available:!1,unavailableReason:"already installed"};if(!N)return{available:!1,unavailableReason:"CLI not installed"};return{available:!0}}var Kn="cc-safety-net",$d=["npx","-y","@deepseek-ai/dsh"],Ad="DeepSeek Harness",Od=["@deepseek-ai","dsh-desktop"],Dd="Quit DeepSeek Harness Desktop, then run this command again: Desktop plugins can only change while it is closed.",ms=(_)=>`DeepSeek Harness Desktop is not in its default location, so ${_} ${Kn} from its Plugins page.`,Ld=(_,N)=>gs(Vn(wi(_),N,"package.json"));function ys(_,N){let j=N.platform??process.platform,J=Ld(_,"desktop"),Y=j==="darwin"?[Vn(_.home,"Applications"),N.systemApplications??"/Applications"].map((re)=>Vn(re,`${Ad}.app`,"Contents","Resources","runtime","cli","bin","dsh")):j==="win32"?[Vn(_.env.get("LOCALAPPDATA")||Vn(_.home,"AppData","Local"),"Programs",Ad,"resources","runtime","cli","bin","dsh.cmd")]:[];return{profile:J,cli:J?Y.find((re)=>gs(re)):void 0}}function Nd(_,N=process.platform){if(N==="win32")return gs(Vn(_.env.get("APPDATA")||Vn(_.home,"AppData","Roaming"),...Od,"lockfile"));let j=cv(Vn(_.home,"Library","Application Support",...Od,"SingletonLock")),J=Number(/-(\d+)$/.exec(j??"")?.[1]);return Number.isInteger(J)&&J>0&&dv(J)}function cv(_){try{return lv(_)}catch{return}}function dv(_){try{return process.kill(_,0),!0}catch(N){return N.code==="EPERM"}}async function jd(_,N={}){let j=ys(_,N);if(j.cli&&Nd(_,N.platform))throw Error(Dd);let J=!j.cli||Ld(_,"web")||await(N.probe??gr)(Uo),Y=[...j.cli?[{profile:"desktop",label:"Desktop",dsh:[j.cli]}]:[],...J?[{profile:"web",label:"web",dsh:$d}]:[]];return{commands:Y.map((re)=>[...re.dsh,"plugin","--profile",re.profile,"add",`${Kn}@${pn()}`]),afterInstall:async()=>{let re=new Set(ki(_).filter((de)=>de.enabled).map((de)=>de.name)),ie=Y.filter((de)=>!re.has(de.profile));if(ie.length>0)throw Error(`DeepSeek Harness installed ${Kn} in the ${Id(ie)} but did not enable it. Enable it from the Plugins page.`)},message:[`Added ${Kn} to the DeepSeek Harness ${Id(Y)}.`,...j.profile&&!j.cli?[ms("add")]:[]].join(`
`)}}function Id(_){return`${_.map((N)=>N.label).join(" and ")} profile${_.length>1?"s":""}`}function Hd(_,N={}){let j=new Set(ki(_).map((re)=>re.name));if(!j.has("desktop")&&!j.has("web"))throw Error(`${Kn} is not installed in the DeepSeek Harness web or Desktop profile`);let J=j.has("desktop")?ys(_,N).cli:void 0,Y=j.has("desktop")&&!J;if(Y&&!j.has("web"))throw Error(ms("remove"));if(J&&Nd(_,N.platform))throw Error(Dd);return{commands:[...J?[[J,"plugin","--profile","desktop","remove",Kn]]:[],...j.has("web")?[[...$d,"plugin","--profile","web","remove",Kn]]:[]],...Y?{afterUninstall:()=>{throw Error(`Removed ${Kn} from the DeepSeek Harness web profile, but ${ms("remove")}`)}}:{}}}function Fd(_,N,j={}){let J=ys(N,j).cli!==void 0;return _.map((Y)=>Y.target==="deepseek-harness"&&J?{...Y,available:!0,unavailableReason:void 0}:Y)}import{existsSync as uv,readdirSync as pv,rmSync as fv}from"node:fs";import{join as mv}from"node:path";function Md(_,N=process.platform,j){if(!uv(_))return;let J=N==="win32"?/^bunx-\d+-cc-safety-net@/:new RegExp(`^bunx-${process.getuid?.()??0}-cc-safety-net@`);pv(_).filter((Y)=>Y!==j&&J.test(Y)).forEach((Y)=>{fv(mv(_,Y),{recursive:!0,force:!0})})}import{existsSync as Ud,readdirSync as gv,rmSync as yv}from"node:fs";import{join as zt}from"node:path";function ko(_,N=process.platform){let j=zt(_.env.get("npm_config_cache")||(N==="win32"?zt(_.env.get("LOCALAPPDATA")||zt(_.home,"AppData","Local"),"npm-cache"):zt(_.home,".npm")),"_npx");if(!Ud(j))return;gv(j).filter((J)=>Ud(zt(j,J,"node_modules","cc-safety-net"))).forEach((J)=>{yv(zt(j,J),{recursive:!0,force:!0})})}import{existsSync as Jd,mkdirSync as vv,readFileSync as Wd}from"node:fs";import{dirname as bv,join as Kd}from"node:path";function hv(_,N){if(_[N]!=="#")return N;let j=_.indexOf(`
`,N+1);return j===-1?_.length:j+1}function hs(_,N,j){let J=new RegExp(`^(\\s*)${N}\\s*=\\s*\\[`),Y=0;for(let re of _.split(`
`)){if(/^\s*\[/.test(re))return;let ie=J.exec(re);if(ie){let de=Y+ie[0].lastIndexOf("[");return{start:de,end:si(_,de,{skipComment:hv,...j})}}Y+=re.length+1}return}function Gd(_,N,j){let J=_.slice(0,N.end).trimEnd(),Y=ol(_,N.end),re=Y===""?"     ":`${Y}  `,ie=!J.endsWith("[")&&!J.endsWith(",");return`${J}${ie?",":""}
${re}${j}${_.slice(N.end)}`}function Bd(_,N,j){let J=_.indexOf(j,N.start);if(J===-1||J>N.end)return _;return`${_.slice(0,J)}${_.slice(J+j.length).replace(/^\s*,/,"")}`}function qd(_,N){let j=new RegExp(`^\\s*${N}\\s*=\\s*\\[\\s*]\\s*(?:#.*)?$`),J=_.split(`
`),Y=J.findIndex((de)=>/^\s*\[/.test(de)),re=Y===-1?J:J.slice(0,Y),ie=Y===-1?[]:J.slice(Y);return[...re.filter((de)=>!j.test(de)),...ie].join(`
`)}function Vd(_,N,j){let J=new RegExp(`^\\s*\\[\\[${N}]]\\s*$`,"m");return _.split(/(?=^\s*\[)/m).filter((Y)=>!J.test(Y)||!Y.includes(j)).join("").trimEnd()}var yr=Cn["kimi-code"],vs=`[[hooks]]
event = "PreToolUse"
command = "${yr}"`,zd=`{ event = "PreToolUse", command = "${yr}" }`,Yd={stringError:"Unterminated string in Kimi Code config",bracketError:"Unmatched hooks array in Kimi Code config"};function Zd(_){return Kd(_.env.get("KIMI_CODE_HOME")??Kd(_.home,".kimi-code"),"config.toml")}function wv(_){let N=hs(_,"hooks",Yd);if(N&&_.slice(N.start+1,N.end).trim())return Gd(_,N,zd);let j=qd(_,"hooks").trimEnd();if(j==="")return`${vs}
`;return`${j}

${vs}
`}function Xd(_){let N=Zd(_);if(vv(bv(N),{recursive:!0}),!Jd(N))return ln(N,`${vs}
`),{path:N,alreadyInstalled:!1};let j=Wd(N,"utf-8");if(j.includes(yr))return{path:N,alreadyInstalled:!0};return ln(N,wv(j)),{path:N,alreadyInstalled:!1}}function Qd(_){let N=Zd(_);if(!Jd(N))return{path:N,alreadyInstalled:!1};let j=Wd(N,"utf-8");if(!j.includes(yr))return{path:N,alreadyInstalled:!1};let J=hs(j,"hooks",Yd),Y=J?Bd(j,J,zd):`${Vd(j,"hooks",yr)}
`;return ln(N,Y),{path:N,alreadyInstalled:!0}}var bs="safety-net@cc-marketplace",eu=new Set(["claude-code","codex","copilot-cli","gemini-cli","hermes-agent","openclaw","opencode","pi"]),nu=new Set(["antigravity-cli","cursor","devin","droid","grok-build","hermes-agent","kimi-code"]);function ws(_){return/^\s*safety-net@cc-marketplace[^a-z0-9-][^\n]*installed,/m.test(_??"")}function su(_){return/^\s*cc-safety-net[^a-z0-9-][^\n]*installed,/m.test(_??"")}function kv(_){return/^Marketplace `cc-marketplace`\s*$/m.test(_??"")}var au={"claude-code":{installCommands:(_)=>{let N=Vr(_,"cc-safety-net@cc-marketplace");return{commands:[...N?[["claude","plugin","marketplace","update","cc-marketplace"],["claude","plugin","update","cc-safety-net@cc-marketplace"]]:[["claude","plugin","marketplace","add","kenryu42/cc-marketplace"],["claude","plugin","marketplace","update","cc-marketplace"],["claude","plugin","install","cc-safety-net@cc-marketplace"]],...Kr(_).status==="disabled"?[["claude","plugin","enable","cc-safety-net@cc-marketplace"]]:[]],cleanupCommands:Vr(_,bs)?[["claude","plugin","uninstall",bs]]:[],update:N}},uninstallCommands:[["claude","plugin","uninstall","cc-safety-net@cc-marketplace"],["claude","plugin","marketplace","remove","cc-marketplace"]]},codex:{installCommands:async(_,N)=>{let j=N??await mn(["codex","plugin","list"]),J=su(j);return{commands:[J||kv(j)?["codex","plugin","marketplace","upgrade","cc-marketplace"]:["codex","plugin","marketplace","add","kenryu42/cc-marketplace"],["codex","plugin","add","cc-safety-net@cc-marketplace"]],cleanupCommands:ws(j)?[["codex","plugin","remove","safety-net@cc-marketplace"]]:[],update:J}},uninstallCommands:[["codex","plugin","remove","cc-safety-net@cc-marketplace"],["codex","plugin","marketplace","remove","cc-marketplace"]],postInstallMessage:el},"copilot-cli":{installCommands:async()=>{let _=await mn(["copilot","plugin","list"]),N=[...pl(_)?[["copilot","plugin","uninstall","copilot-safety-net"]]:[],...fl(_)?[["copilot","plugin","uninstall",cl]]:[]];if(dl(_))return{commands:[["copilot","plugin","marketplace","update","cc-marketplace"],["copilot","plugin","update",Tn]],cleanupCommands:N,update:!0};return{commands:[ul(await mn(["copilot","plugin","marketplace","list"]))?["copilot","plugin","marketplace","update","cc-marketplace"]:["copilot","plugin","marketplace","add","kenryu42/cc-marketplace"],["copilot","plugin","install",Tn]],cleanupCommands:N}},uninstallCommands:[["copilot","plugin","uninstall","cc-safety-net@cc-marketplace"],["copilot","plugin","marketplace","remove","cc-marketplace"]]},"gemini-cli":{installCommands:(_)=>{let N=Ti(_);if(N.status==="configured")return{commands:[["gemini","extensions","update","gemini-safety-net"]],update:!0};if(N.status==="disabled")return{commands:[["gemini","extensions","update","gemini-safety-net"],["gemini","extensions","enable","gemini-safety-net"]],update:!0};return{commands:[["gemini","extensions","install","https://github.com/kenryu42/gemini-safety-net","--consent"]]}},uninstallCommands:[["gemini","extensions","uninstall","gemini-safety-net"]]},openclaw:{beforeInstall:Mi,installCommands:(_)=>{let N=!xo(Co(lr(_),Sn));return{commands:wc(),afterInstall:()=>kc(N)}},uninstallCommands:[["openclaw","plugins","uninstall",un,"--force"]],postInstallMessage:["Restart the OpenClaw Gateway to apply the change.","If plugins.allow is set in openclaw.json, it must also list cc-safety-net."].join(`
`)},opencode:{installCommands:Oc},pi:{installCommands:[["pi","install","npm:cc-safety-net"]],uninstallCommands:[["pi","uninstall","npm:cc-safety-net"]]},"deepseek-harness":{installCommands:(_)=>jd(_),uninstallCommands:(_)=>Hd(_)}};function lu(_,N=(j)=>j){try{let j=JSON.parse(N(iu(_,"utf-8")));if(!j||typeof j!=="object"||Array.isArray(j))throw Error(`Settings file ${_} must be a JSON object`);return j}catch(j){if(j instanceof SyntaxError)throw Error(`Failed to parse ${_}: ${j.message}`);throw j}}function Cv(_){let N=Co(tr(_),"settings.json");if(!xo(N))return;let j=lu(N,bn),J=j.enabledPlugins;if(!J||typeof J!=="object"||Array.isArray(J))return;if(J[Tn]!==!1)return;let Y=iu(N,"utf-8"),re=Y.replace(new RegExp(`("${Tn}"\\s*:\\s*)false`),"$1true");return J[Tn]=!0,ln(N,re!==Y?re:`${JSON.stringify(j,null,2)}
`),`Enabled ${Tn} plugin in ${N}`}function xv(_){let N=Yi(_);if(!xo(N))return;let j=lu(N);if(!Array.isArray(j.packages))return;let J=j.packages.find((Y)=>!!Y&&typeof Y==="object"&&!Array.isArray(Y)&&Zi(Y.source)&&("extensions"in Y));if(!J)return;return delete J.extensions,ln(N,`${JSON.stringify(j,null,2)}
`),`Enabled npm:cc-safety-net extensions in ${N}`}function tu(_,N){let j=gn({label:N,booleans:Object.fromEntries(In.map((re)=>[re.target,[re.flag]]))},_),J=j.errors[0];if(J)throw Error(J);let Y=In.filter((re)=>j.flags[re.target]).map((re)=>re.target);if(Y.length!==1)throw Error(`Choose exactly one ${N} target: ${In.map((re)=>re.flag).join(", ")}`);return Y[0]}async function cu(_,N=Lt){let[j,J,Y]=await Promise.all([N(["amp","plugins","list"],30000),N(["codex","plugin","list"],30000),N(["copilot","--binary-version"])]);return{codexPluginListOutput:J,hooks:Vt(_,process.cwd(),{ampPluginListOutput:j,codexPluginListOutput:J,copilotCliVersion:Y})}}async function Sv(_,N,j=Lt){let J=await cu(_,j);return J.hooks.filter((Y)=>N==="install"?Y.configured:Y.detected&&Y.method!==eo||Y.inspectionStatus==="not-inspected").filter((Y)=>Y.platform!=="codex"||!ws(J.codexPluginListOutput)||su(J.codexPluginListOutput)).map((Y)=>Y.platform)}function Pv(_,N,j,J){if(j.length>0)return{finish:async()=>[tu(j,N)]};if(!J.selectTargets&&!as(J.input,J.output))return{finish:async()=>[tu(j,N)]};let Y=J.detectConfiguredTargets??(()=>Sv(_,N,J.fetchVersion)),re=Promise.all([Ed(J.probeTargets).then((ie)=>Fd(ie,_)),Y()]);return{ready:re,finish:async()=>{let[ie,de]=await re,fe=_d(ie,{action:N,configuredTargets:de}),ke=J.selectTargets?await J.selectTargets(N,ou(N,fe)):await cd(N,ou(N,fe),{input:J.input,output:J.output});if(ke==="update")return ke;if(!ke||ke.length===0)return null;return fs(ke)}}}async function Rv(_,N,j=!1,J){let Y=au[_];Y.beforeInstall?.(N);let re=typeof Y.installCommands==="function"?await Y.installCommands(N,J):{commands:Y.installCommands};return await ui(re.commands),await vl(re.cleanupCommands??[]),await re.afterInstall?.(),[`${re.update||j?"Updated":"Installed"} ${cn(_)} integration`,re.message??Y.postInstallMessage].filter(Boolean).join(`
`)}async function Ev(_,N){let j=au[_];if(!j.uninstallCommands)throw Error(`${cn(_)} uninstall is not supported`);let J=typeof j.uninstallCommands==="function"?j.uninstallCommands(N):{commands:j.uninstallCommands};return await ui(J.commands),J.afterUninstall?.(),`Uninstalled ${cn(_)} integration`}function _v(_){let N=Lc(_);return N.alreadyInstalled?`Uninstalled OpenCode plugin from ${N.path}`:`OpenCode plugin not installed in ${N.path}`}var du={"antigravity-cli":{install:Sd,uninstall:Pd},cursor:{install:Sl,uninstall:Pl},devin:{install:Dl,uninstall:Ll},droid:{install:Bl,uninstall:ql},"grok-build":{install:Xl,uninstall:Ql},"kimi-code":{install:Xd,uninstall:Qd}};function Tv(_,N,j,J=!1){if(_==="install"&&!J)ko(j);let Y=du[N][_](j),re=cn(N),ie=_!=="install"?"Uninstalled":J?"Updated":"Installed";return _==="install"&&Y.alreadyInstalled?J?`${re} hook up to date in ${Y.path}`:`${re} hook already installed in ${Y.path}`:_==="uninstall"&&!Y.alreadyInstalled?`${re} hook not installed in ${Y.path}`:`${ie} ${re} hook ${_==="install"?"in":"from"} ${Y.path}`}var uu={amp:{install:vd,uninstall:bd,restartNote:'Amp personal plugins apply to every Amp session, including Orb threads. Restart Amp or run "plugins: reload" to apply the change.'},"hermes-agent":{install:ic,uninstall:sc,afterInstall:async(_)=>{let N=Hi(_);return await mn(["hermes","plugins","enable",Pn,"--no-allow-tool-override"]),!N},beforeUninstall:async(_)=>{ji(_);try{await mn(["hermes","plugins","disable",Pn])}catch(N){console.warn(`${N instanceof Error?N.message:String(N)}
Removing the plugin files anyway; ${Pn} may still be listed in the Hermes config.`)}},restartNote:"Restart Hermes to apply the change."}};async function Av(_,N,j,J=!1){let Y=uu[N];if(_==="uninstall")await Y.beforeUninstall?.(j);let re=_==="install"?await Y.install(j):await Y.uninstall(j),ie=_==="install"&&await Y.afterInstall?.(j),de=cn(N),fe=!ie&&(_==="install"&&re.alreadyInstalled||_==="uninstall"&&!re.alreadyInstalled);return[fe?_==="install"?`${de} plugin ${J?"up to date":"already installed"} at ${re.path}`:`${de} plugin not installed at ${re.path}`:`${_!=="install"?"Uninstalled":J?"Updated":"Installed"} ${de} plugin ${_==="install"?"at":"from"} ${re.path}`,fe?void 0:Y.restartNote].filter(Boolean).join(`
`)}var Ov={"copilot-cli":{afterInstall:Cv},cursor:{afterUninstall:wl},"hermes-agent":{beforeInstall:(_,N)=>{if(!N)ko(_)}},openclaw:{beforeUninstall:Mi},pi:{afterInstall:xv}};function Iv(_){return _ in du}function $v(_){return _ in uu}var ru=["Install CC Safety Net as a native Kimi Code plugin:","","  1. Start Kimi Code and run: /plugins install https://github.com/kenryu42/cc-safety-net/tree/plugin","     Confirm the trust prompt; it defaults to cancel.","  2. Run /reload, or start a new session.","","Note: Kimi Code hooks are fail-open. When the hook process cannot start, crashes, or times","out, Kimi Code allows the tool call."].join(`
`);function Dv(_){if(ar({environment:_,cwd:process.cwd()}).status!=="configured")return ru;return[ru,"",en.red(["CAUTION: the global Kimi Code hook is installed and will run alongside the plugin.","After the plugin is active, remove it with: cc-safety-net uninstall --kimi-code"].join(`
`))].join(`
`)}function ou(_,N){return N.map((j)=>_==="install"&&j.target==="kimi-code"&&j.unavailableReason==="already installed"?{...j,available:!0,unavailableReason:void 0,label:`${j.label} (global hook installed)`}:j)}function Lv(_,N){if(_.selectKimiInstallMethod)return _.selectKimiInstallMethod();if(!as(_.input,_.output))return Promise.resolve("global-hook");return ld({input:_.input,output:_.output,globalHookInstalled:ar({environment:N,cwd:process.cwd()}).status==="configured"})}async function pu(_,N,j,J=!1,Y){let re=Ov[N];if(_==="install")re?.beforeInstall?.(j,J);if(_==="uninstall")re?.beforeUninstall?.(j);if(Iv(N))return[Tv(_,N,j,J),_==="uninstall"?await re?.afterUninstall?.(j):void 0].filter(Boolean).join(`
`);if($v(N))return Av(_,N,j,J);if(_==="uninstall")return N==="opencode"?_v(j):Ev(N,j);return[await Rv(N,j,J,Y),await re?.afterInstall?.(j)].filter(Boolean).join(`
`)}function Nv(_){let N=gn({label:"update"},_).errors[0];if(N)throw Error(N)}async function jv(_,N=Lt){let j=await cu(_,N),J=Co(tr(_),"installed-plugins");return{targets:fs([...j.hooks.filter((re)=>re.platform!=="copilot-cli"&&re.detected&&re.method!==eo&&re.method!==hi).map((re)=>re.platform),...[Jr,ll,al].flatMap((re)=>xo(Co(J,...re))?["copilot-cli"]:[]),...Vr(_,bs)?["claude-code"]:[],...ws(j.codexPluginListOutput)?["codex"]:[]]),codexPluginListOutput:j.codexPluginListOutput}}async function Hv(_){let N=c(),j=_.output??process.stdout,J=(_.scriptPath??process.argv[1]??"").split(/[\\/]/),Y=J.find((Ne)=>/^bunx-\d+-/.test(Ne)),re=Y!==void 0||J.includes("_npx")?null:(_.checkLatestVersion??Gn)(),ie=async()=>{let Ne=re&&await re;if(Ne?.updateAvailable)j.write(`
Update available: cc-safety-net ${Ne.currentVersion} → ${Ne.latestVersion}. Update this CLI with your package manager, e.g. \`npm i -g cc-safety-net@latest\` for a global install.
`)},de=jv(N,_.fetchVersion??Lt).then(async(Ne)=>{let Oe=new Set(Ne.targets);return{targets:Ne.targets,codexPluginListOutput:Ne.codexPluginListOutput,available:new Map(await Promise.all(In.filter((Je)=>Oe.has(Je.target)&&eu.has(Je.target)).map(async(Je)=>[Je.target,await gr(Je.probeCommand)])))}}),fe=await Xt(_.showBanner??!0,()=>({ready:de,finish:()=>de}),()=>Zt({input:_.input??process.stdin,output:j}),{loadingMessage:"Checking installed integrations…",output:j}),ke=await Promise.resolve().then(()=>(Md(N.tmpdir,process.platform,Y),null)).catch((Ne)=>hr(Ne));if(fe.targets.length===0){if(j.write("No installed integrations found. Run `cc-safety-net install` to set one up.\n"),ke!==null)console.error(ke);return await ie(),ke===null?0:1}let Ce=fe.targets.some((Ne)=>nu.has(Ne))?await Promise.resolve().then(()=>(ko(N),null)).catch((Ne)=>hr(Ne)):null,Re=await Hr(Promise.all(fe.targets.map((Ne)=>{if(eu.has(Ne)&&!fe.available.get(Ne))return Promise.resolve({message:`${cn(Ne)} not found; skipped`,failed:!1});if(Ce!==null&&nu.has(Ne))return Promise.resolve({message:Ce,failed:!0});return pu("install",Ne,N,!0,fe.codexPluginListOutput).then((Oe)=>({message:Oe,failed:!1}),(Oe)=>({message:hr(Oe),failed:!0}))})),{loadingMessage:`Updating ${fe.targets.length} integration${fe.targets.length===1?"":"s"}…`,output:j}),Ee=ke===null?Re:[...Re,{message:ke,failed:!0}];return Ee.forEach((Ne)=>Ne.failed?console.error(Ne.message):j.write(`${Ne.message}
`)),await ie(),Ee.some((Ne)=>Ne.failed)?1:0}function ks(_,N={}){return Promise.resolve().then(()=>Nv(_)).then(()=>Hv(N)).catch((j)=>(console.error(hr(j)),1))}async function vr(_,N,j={}){try{let J=c(),Y=await Xt(!0,()=>Pv(J,_,N,j),()=>Zt({input:j.input??process.stdin,output:j.output??process.stdout}),{loadingMessage:_==="install"?"Checking available integrations…":"Checking installed integrations…",output:j.output??process.stdout});if(!Y)return(j.output??process.stdout).write(`Cancelled: nothing was ${_}ed.
`),0;if(Y==="update")return(j.runUpdate??(()=>ks([],{fetchVersion:j.fetchVersion,input:j.input,output:j.output,showBanner:!1})))();let re=j.output??process.stdout;return await Rd(Y,async(ie)=>{if(ie==="kimi-code"&&_==="install"){let fe=await Lv(j,J);if(fe===null){re.write(`Cancelled: Kimi Code integration was not installed.
`);return}if(fe==="plugin"){re.write(`${Dv(J)}
`);return}}let de=await Hr(pu(_,ie,J),{loadingMessage:`${_==="install"?"Installing":"Uninstalling"} ${cn(ie)} integration…`,output:re});re.write(`${de}
`)}),0}catch(J){return console.error(hr(J)),1}}function hr(_){let N=_ instanceof Error?_.message:String(_),j=typeof _==="object"&&_!==null&&"code"in _?_.code:null;if(j==="EACCES"||j==="EPERM")return`${N}
Check file permissions for the target config file and parent directory.`;if(j==="ENOENT")return`${N}
Check that the target config path and parent directory exist.`;if(j==="ENOTDIR")return`${N}
Check that every parent path component is a directory.`;return N}import{mkdirSync as qv}from"node:fs";import{dirname as Vv}from"node:path";import{createInterface as Kv}from"node:readline";import{existsSync as mu,readFileSync as Fv}from"node:fs";function At(_,N){let j=dt(_,N);return{policy:j.policy,errors:ce(ct(j.issues,ut,(J)=>J.kind==="custom")," "," ")}}function br(_,N){return At(_,N).errors}function fu(_,N){return{"safety.level":_.safety.level,...Cs("safety.overrides",_.safety.overrides),"workflow.worktree_mode":String(_.workflow.worktree_mode),"destructive_command_protection.enabled":String(_.destructive_command_protection.enabled),...Cs("destructive_command_protection.overrides",_.destructive_command_protection.overrides),"destructive_command_protection.allow_paths":xs(_.destructive_command_protection.allow_paths),"secret_protection.enabled":String(_.secret_protection.enabled),...Cs("secret_protection.overrides",_.secret_protection.overrides),"secret_protection.deny_paths":xs(_.secret_protection.deny_paths),"secret_protection.allow_paths":xs(_.secret_protection.allow_paths),...N?{"audit.retention_days":String(_.audit.retention_days)}:{}}}function So(_,N,j){let J=fu(_,j),Y=fu(N,j);return[...new Set([...Object.keys(J),...Object.keys(Y)])].flatMap((re)=>J[re]===Y[re]?[]:[{field:re,before:J[re],after:Y[re]}])}function wr(_,N){let j=u(_,N);if(!mu(j))return{baseline:k(globalThis.__CC_SAFETY_NET_EMBEDDED_POLICY__,_.home),diagnostics:[]};let J=Ot(j),Y=At(J.value,_.home);return{baseline:Y.policy,diagnostics:J.errors.length>0?J.errors:Y.errors}}function Ot(_){if(!mu(_))return{errors:[`${_}: file not found`]};try{return{value:JSON.parse(Fv(_,"utf-8")),errors:[]}}catch(N){let j=N instanceof Error?N.message:String(N);return{errors:[`${_}: ${N instanceof SyntaxError?`Invalid JSON: ${j}`:j}`]}}}function Po(_,N){let j=Mv(_)?_:{};return{version:N.version,...Object.fromEntries(["safety","workflow","destructive_command_protection","secret_protection"].filter((J)=>j[J]!==void 0).map((J)=>[J,j[J]]))}}function Cs(_,N){return Object.fromEntries(Object.entries(N).flatMap(([j,J])=>J===void 0?[]:[[`${_}.${j}`,String(J)]]))}function xs(_){return _.length===0?"(none)":_.join(", ")}function Mv(_){return!!_&&typeof _==="object"&&!Array.isArray(_)}import{chmodSync as Uv,existsSync as gu,mkdirSync as Gv,readFileSync as yu}from"node:fs";import{dirname as Bv}from"node:path";function hu(_,N={}){let j=u(_,N);if(!gu(j))return{path:j,exists:!1,raw:"",policy:F(),errors:[]};let J=yu(j,"utf-8");if(!J.trim())return{path:j,exists:!0,raw:J,policy:F(),errors:["Config file is empty"]};try{let Y=At(JSON.parse(J),_.home);return{path:j,exists:!0,raw:J,policy:Y.policy,errors:Y.errors}}catch(Y){return{path:j,exists:!0,raw:J,policy:F(),errors:[`Invalid JSON: ${Y instanceof Error?Y.message:String(Y)}`]}}}function Fn(_,N,j={}){let J=u(_,j),Y=At(N,_.home);if(Y.errors.length>0)return{path:J,policy:F(),errors:Y.errors};let re=Y.policy;return Gv(Bv(J),{recursive:!0,mode:448}),g(se(J),`${JSON.stringify(re,null,2)}
`,384),Uv(J,384),{path:J,policy:re,errors:[]}}function vu(_,N){let j=At(N,_.home);if(j.errors.length>0)return{errors:j.errors};return{preview:Ue(j.policy,_.env),errors:[]}}function bu(_,N={}){let j=u(_,N);if(!gu(j))return Fn(_,te,N);let J=yu(j,"utf-8");if(!J.trim())return Fn(_,te,N);try{return Fn(_,k(JSON.parse(J),_.home),N)}catch{return Fn(_,te,N)}}var wu=new Set(["check","apply"]),ku="(unset)";async function xu(_,N,j={}){let J=gn({label:"policy",booleans:{global:["-g","--global"]},positionals:"list"},N),Y=J.positionals[0],re=[...J.errors,...Y&&!wu.has(Y)?[`Unknown policy subcommand: ${Y}`]:[],...Y&&wu.has(Y)&&!J.positionals[1]?[`policy ${Y} requires a file`]:[],...J.positionals.slice(2).map((Je)=>`Unexpected policy argument: ${Je}`)];if(re.length>0){for(let Je of re)console.error(Je);return 1}let ie=J.positionals[1];if(!Y||!ie)return Kt(Er,console.error),1;let de=j.cwd??process.cwd(),fe=J.flags.global?u(_):h(de);if(!J.flags.global&&A(_,{cwd:de}))return console.error(`${fe} is the user policy, not a project policy; use --global for the user scope, or run from a project directory`),1;let ke=Ot(ie),Ce=[...ke.errors,...br(ke.value,_.home).map((Je)=>`${ie}: ${Je}`),...!J.flags.global&&zv(ke.value)&&ke.value.audit!==void 0?[`${ie}: audit settings are user scope only; remove the audit section from a project proposal`]:[]];if(Ce.length>0){for(let Je of Ce)console.error(Je);return 1}let Re=k(ke.value,_.home);if(console.log(`Scope: ${J.flags.global?"user":"project"} (${fe})`),console.log(`Proposal: ${ie}`),J.flags.global)Cu(k(Ot(fe).value,_.home),Re,!0);if(!J.flags.global){let Je=wr(_).baseline;console.log("Effective policy (user + project merged):"),Cu(ee(Je,ue(Ot(fe).value,_.home).policy).policy,ee(Je,ue(ke.value,_.home).policy).policy,!1)}if(Y==="check")return 0;let Ee=j.input??process.stdin,Ne=j.output??process.stdout;if(!Ee.isTTY||!Ne.isTTY)return console.error("policy apply confirms interactively; run this yourself in a terminal:"),console.error(`  cc-safety-net policy apply ${ie}${J.flags.global?" --global":""}`),1;if(!await Jv(`Apply this policy to ${fe}? [y/N] `,Ee,Ne))return console.log("Cancelled; nothing was written."),0;return Wv(_,fe,ke.value,Re,J.flags.global),console.log(`Policy applied: ${fe}`),0}function Jv(_,N,j){let J=Kv({input:N,output:j,terminal:!1});return new Promise((Y)=>{J.once("close",()=>Y(!1)),J.question(_,(re)=>{Y(/^y(es)?$/i.test(re.trim())),J.close()})})}function Wv(_,N,j,J,Y){if(Y){Fn(_,J);return}qv(Vv(N),{recursive:!0}),vn(N,Po(j,J))}function Cu(_,N,j){let J=So(_,N,j);if(J.length===0){console.log("No changes.");return}console.log(`Changes (${J.length}):`);for(let Y of J)console.log(`  ${Y.field}: ${Y.before??ku} -> ${Y.after??ku}`)}function zv(_){return!!_&&typeof _==="object"&&!Array.isArray(_)}import{join as pw}from"node:path";var Su="# Custom Rules Reference\n\nAgent reference for generating CC Safety Net rulebook configuration.\n\n## Config Locations\n\n| Scope | Config path | Rulebook path | Priority |\n|-------|-------------|---------------|----------|\n| User | `~/.cc-safety-net/rules/rule.json` | `~/.cc-safety-net/rules/<rulebook-name>/rulebook.json` | First |\n| Project | `.cc-safety-net/rules/rule.json` | `.cc-safety-net/rules/<rulebook-name>/rulebook.json` | Second |\n| GitHub source | Listed in a local `rule.json` | Vendored into the consumer's `<rulebook-name>/rulebook.json` by `rule add` | Source order |\n\nEvery rulebook is a live file: the runtime reads it on each tool call, so an edit applies to the next command with no publishing step.\n\nUser scope is evaluated before project scope; within a scope, sources apply in `rules` array order. A duplicate active rulebook name keeps the first claim and ignores the later rulebook with a warning, so a user-scoped name shadows a project-scoped one.\n\nUse `cc-safety-net rule init` to create an inert local config. Use `--global` for user scope. Use `cc-safety-net rule init --example` to also create an inactive example rulebook. `CC_SAFETY_NET_HOME` overrides the `~/.cc-safety-net` user root.\n\nLegacy inline `.safety-net.json` and `~/.cc-safety-net/config.json` files are not loaded at runtime. Convert them with `cc-safety-net rule migrate`.\n\n## rule.json Schema\n\n```json\n{\n  \"version\": 1,\n  \"rules\": [\"project-rules\", \"owner/repo#main/team-rules\"],\n  \"overrides\": {\n    \"project-rules/block-docker-system-prune\": {\n      \"reason\": \"Use targeted Docker cleanup commands.\"\n    },\n    \"team-rules/block-npm-global\": \"off\"\n  },\n  \"transparent_wrappers\": [\"rtk\"]\n}\n```\n\n- `version`: Required. Must be `1`.\n- `$schema`: Optional. `cc-safety-net rule verify` inserts it into a valid `rule.json` that lacks it.\n- `rules`: Optional array of rulebook source strings. Missing `rules` is treated as `[]`.\n- `overrides`: Optional object keyed by `<rulebook-name>/<rule-name>`.\n- `overrides` values are either `\"off\"` to disable a rule or an object with a required `reason` (replacement block reason) and an optional `intent` (one of `hard_stop`, `use_alternative`, `scope_down`, `manual_only`, `stop_and_explain`).\n- A project override cannot target a user-scoped rule: only that override is ignored, the user rule keeps its configured state, and `rule verify` reports the diagnostic as a failure.\n- `transparent_wrappers`: Optional array of command names that transparently execute a visible child command.\n- `caffeinate`, `exec`, `nice`, `nohup`, `setsid`, `stdbuf`, `time`, and `timeout` are built-in transparent wrappers and need no configuration. Configure only other wrappers you intentionally trust, such as `\"rtk\"`.\n- Use `cc-safety-net rule wrapper add rtk` to configure RTK without manually editing `rule.json`.\n- `command_tools`: Optional array of shell tools that a plugin adds to an agent and that CC Safety Net does not know. Each entry is a tool name such as `\"ops_bash\"`, or `{ \"name\": \"ops_run_background\", \"cwd\": \"cwd\" }` when the tool takes its working directory in a named argument (otherwise `workdir`, `cwd`, or `working_directory` is read). A call to a declared tool with a non-empty string `command` is analyzed like a built-in shell command. User and project lists merge; the user entry wins a name declared in both.\n- Built-in shell and file tools are already analyzed and cannot be declared; `rule verify` reports one declared by hand.\n- Use `cc-safety-net rule tool add ops_bash` to declare a tool in the user config, or add `--project` for the project config.\n\n## Rulebook Sources\n\n- Local sources are bare rulebook names such as `project-rules`; the rulebook file is `.cc-safety-net/rules/project-rules/rulebook.json`.\n- Run `cc-safety-net rule add owner/repo` to add every rulebook currently present on the repository's default branch.\n- Use `--only` to select one or more rulebooks while preserving their order: `cc-safety-net rule add owner/repo --only aws gcloud`.\n- Use `--ref` to select a branch, tag, or commit instead of the default branch: `cc-safety-net rule add owner/repo --ref v2 --only aws`.\n- GitHub sources are stored in canonical form as `owner/repo#ref/<rulebook-name>`. That form remains valid in `rule.json` and as direct CLI input.\n- GitHub refs may contain `/`-separated path segments, such as `feature/rulebook-v2`.\n- The GitHub source name, the repository directory name, and the rulebook `name` must match exactly.\n- Rulebook source strings must be unique in a config.\n\n## rulebook.json Schema\n\n```json\n{\n  \"rulebook_version\": 1,\n  \"name\": \"project-rules\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Project-specific CC Safety Net rules.\",\n  \"author\": \"project\",\n  \"allowed_commands\": [\"docker\"],\n  \"rules\": [\n    {\n      \"name\": \"block-docker-system-prune\",\n      \"command\": \"docker\",\n      \"subcommand\": \"system\",\n      \"block_args\": [\"prune\"],\n      \"reason\": \"Use targeted cleanup instead.\"\n    }\n  ],\n  \"tests\": [\n    {\n      \"command\": \"docker system prune\",\n      \"expect\": \"blocked\",\n      \"rule\": \"block-docker-system-prune\"\n    },\n    {\n      \"command\": \"docker ps\",\n      \"expect\": \"allowed\"\n    }\n  ]\n}\n```\n\n### Rulebook Fields\n\n| Field | Required | Constraints |\n|-------|----------|-------------|\n| `rulebook_version` | Yes | Must be `1` or `2` |\n| `name` | Yes | `^[a-zA-Z][a-zA-Z0-9_-]{0,63}$` |\n| `version` | Yes | Non-empty string |\n| `description` | No | Free text; not type-checked at runtime |\n| `author` | No | Free text; not type-checked at runtime |\n| `allowed_commands` | Yes | Unique command names matching `^[a-zA-Z][a-zA-Z0-9_-]*$` |\n| `rules` | Yes | Array of rule objects |\n| `tests` | No | Array of fixtures |\n\n### Rule Fields\n\n| Field | Required | Constraints |\n|-------|----------|-------------|\n| `name` | Yes | Unique within the rulebook (case-insensitive); same pattern as rulebook `name` |\n| `command` | Yes | Must be listed in `allowed_commands`; basename only, not path |\n| `subcommand` | No | Same pattern as `command`; omit to match any subcommand |\n| `intent` | No | One of `hard_stop`, `use_alternative`, `scope_down`, `manual_only`, `stop_and_explain` |\n| `block_args` | Yes | Non-empty array of non-empty strings |\n| `reason` | Yes | Non-empty string, max 256 chars |\n\n### Rule Fields (`rulebook_version` 2)\n\nVersion 2 replaces `subcommand` and `block_args` with an exact-token `match` object. Version 1 rulebooks keep their fields and their behavior; a client that does not support version 2 rejects the rulebook instead of applying broader version 1 semantics.\n\n```json\n{\n  \"name\": \"block-terraform-apply-destroy\",\n  \"command\": \"terraform\",\n  \"match\": {\n    \"command_path\": [\"apply\"],\n    \"any_args\": [\"-destroy\", \"--destroy\"]\n  },\n  \"reason\": \"Review a destroy plan first with 'terraform plan -destroy'.\",\n  \"intent\": \"use_alternative\"\n}\n```\n\n| Field | Required | Constraints |\n|-------|----------|-------------|\n| `name` | Yes | Same as version 1 |\n| `command` | Yes | Same as version 1 |\n| `match.command_path` | Yes | Non-empty array of non-empty command words |\n| `match.any_args` | No | Non-empty array of unique non-empty argument tokens |\n| `match.exclude_args` | No | Non-empty array of unique non-empty argument tokens |\n| `intent` | No | Same as version 1 |\n| `reason` | Yes | Same as version 1 |\n\n### Matching Behavior (`rulebook_version` 2)\n\n- **Command**: Normalized to lowercase basename, as in version 1.\n- **Command path**: After recognized global options and their values are skipped, the next command words must equal `command_path` exactly. AWS, gcloud, and Azure CLI value-taking global options are built in; Terraform's `-chdir=dir` is `=`-joined and is skipped with its own token.\n- **Unrecognized options**: A token starting with `-` that is not a recognized global option is skipped without consuming a value, so an unlisted value-taking option with a separate value (`--newflag value`) makes the rule miss. This fails open deliberately; document such gaps in the rulebook.\n- **`any_args`**: At least one listed token must appear literally among the arguments.\n- **`exclude_args`**: Any listed token appearing literally among the arguments prevents the match, which is how a safe preview such as `aws s3 rm --dryrun` stays allowed.\n- **No short-option expansion**: Arguments compare as exact tokens, so list every accepted spelling (`\"-destroy\"` and `\"--destroy\"`).\n- **Literal and case-sensitive**: No regex, glob, or substring matching. The first matching rule wins.\n- Release channels are separate rules: `gcloud beta compute instances delete` needs its own `command_path`.\n\n### Test Fixture Fields\n\n| Field | Required | Constraints |\n|-------|----------|-------------|\n| `command` | Yes | Non-empty shell command string |\n| `expect` | Yes | `\"blocked\"` or `\"allowed\"` |\n| `rule` | Required for blocked fixtures | Rule name expected to block the command |\n\nFixtures are optional documentation of intended behavior. Version 1 fixtures are shape-validated only. Version 2 fixtures are evaluated against the rulebook's own rules when a source is fetched by `rule add` or `rule update`, and by `rule verify`; a failing fixture rejects that source before it is written. Loading a rulebook does not re-evaluate fixtures. CC Safety Net never executes fixture commands; they are analyzer inputs only.\n\n## Matching Behavior\n\nThe subcommand, argument, and option rules below describe `rulebook_version` 1 rules; version 2 rules match as described in Matching Behavior (`rulebook_version` 2). Execution order and transparent wrappers apply to both.\n\n- **Command**: Normalized to lowercase basename with any trailing `.exe` removed (`/usr/bin/git` → `git`).\n- **Subcommand**: The first command token after recognized Git and Docker global options and their values; `--` ends option parsing. An unrecognized option without `=` may consume the following token as its value.\n- **Arguments**: Each `block_args` value is compared literally against every command token, including expanded short options. The command is blocked if **any** item matches.\n- **Short options**: Expanded (`-Ap` matches `-A`).\n- **Long options**: Exact match (`--all-files` does not match `--all`).\n- **Execution order**: Built-in rules first, then custom rulebooks. Custom rules only add restrictions.\n- **Transparent wrappers**: A configured wrapper such as `rtk` lets `rtk git commit` be analyzed as `git commit` only when `git` is protected by built-in analyzers or active custom rules. `rtk -- git commit` is also supported.\n\n## Workflow\n\n1. Run `cc-safety-net rule init` or create `rule.json` manually.\n2. Optionally run `cc-safety-net rule init --example` to create an inactive example rulebook.\n3. Use `cc-safety-net rule wrapper add rtk` for trusted transparent wrappers.\n4. Run `cc-safety-net rule add <source>` after creating or choosing a rulebook source; add `--only <rulebook...>` or `--ref <ref>` for repository selection. The command adds the selected sources and syncs them.\n5. Edit a local rulebook whenever you like: the edit is enforced on the next command, so there is nothing to run afterwards.\n6. Run `cc-safety-net rule update [source]` to re-fetch remote sources and rewrite the vendored copies; the command prints what changed. A source with an ordinary update failure keeps its vendored copy while the other selected sources still update. Resource-limit failures remain fatal for the whole update.\n7. Run `cc-safety-net rule verify` to validate config, local rulebooks, and shareable GitHub-source rulebook directories in the current repository (it does not fetch remote content).\n8. Run `cc-safety-net rule list` to inspect active rulebooks and transparent wrappers.\n\nA missing or invalid rulebook file makes that source inactive, and an unreadable or invalid `rule.json` makes every source in its scope inactive. Inactive sources stop applying their rules while other custom rules and all built-in protections stay active. Fix the file named in the diagnostic, or run `cc-safety-net rule update` when a remote source has not been vendored yet. Run `cc-safety-net status` to see degraded sources.\n";function Ro(_,N){if(!_.ok){Au(_);return}Eu(_,N)}function Ru(_,N,j){if(_.ok)console.log(j);if(!_.add){Ro(_,`Added rulebook source: ${N}`);return}if(!_.ok){Au(_);return}if(_.add.added.length>0)console.log(`Added ${_.add.added.length} ${_.add.added.length===1?"rulebook":"rulebooks"} from ${_.add.source} at ${_.add.ref}:`),_.add.added.forEach((J)=>{console.log(`  - ${J}`)});if(_.add.alreadyConfigured.length>0)console.log(`Rulebooks already configured from ${_.add.source} at ${_.add.ref}: ${_.add.alreadyConfigured.join(", ")}`);if(_.add.commits.length>0)console.log(`Vendored at ${_.add.commits.map((J)=>J.slice(0,7)).join(", ")}.`);Eu(_,"Rule config updated.")}function Eu(_,N){for(let j of _.changes??[])console.log(j);console.log(N),console.log(""),Yv(_.entries)}function Yv(_){if(_.length===0){console.log("Active rulebooks: (none)");return}console.log(`Active rulebooks (${_.length}):`);for(let N of _)console.log(`  - ${N.name} ${N.version} (${Zv(N.ruleCount)})`),console.log(`    Source: ${N.spec}`)}function Zv(_){return`${_} ${_===1?"rule":"rules"}`}function _u(_){Jn("Active sources",_.rulebooks,(N)=>[`[${N.source}] ${N.name} ${N.version}`,`  Source: ${N.spec}`]),Jn("Active rules",_.rules,(N)=>[`[${Qv(_,N.name)}] ${N.name}`,...Xv(N),`  Reason: ${N.reason}`]),Jn("Disabled rules",Pu(_,"off"),(N)=>[N.key]),Jn("Reason overrides",Pu(_,"reason"),(N)=>[N.key,`  Reason: ${N.value.reason}`]),Jn("Transparent wrappers",_.transparent_wrappers,(N)=>[N]),Jn("Issues",_.errors,(N)=>[N]),Jn("Warnings",_.warnings,(N)=>[N])}function Tu(_){Jn("Command tools",_,(N)=>typeof N.tool==="string"?[`[${N.scope}] ${N.tool}`]:[`[${N.scope}] ${N.tool.name}`,...N.tool.cwd===void 0?[]:[`  Cwd argument: ${N.tool.cwd}`]])}function Jn(_,N,j){if(N.length===0){console.log(`${_}: (none)`);return}console.log(`${_} (${N.length}):`);for(let J of N){let[Y,...re]=j(J);console.log(`  - ${Y}`);for(let ie of re)console.log(`    ${ie}`)}}function Xv(_){if(!_.match)return[`  Command: ${_.subcommand?`${_.command} ${_.subcommand}`:_.command}`,`  Block args: ${_.block_args.join(", ")}`];return[`  Command: ${[_.command,..._.match.command_path].join(" ")}`,..._.match.any_args?[`  Any args: ${_.match.any_args.join(", ")}`]:[],..._.match.exclude_args?[`  Exclude args: ${_.match.exclude_args.join(", ")}`]:[]]}function Qv(_,N){return _.rulebooks.find((j)=>j.rules.includes(N))?.source??"project"}function Pu(_,N){return Object.entries({..._.userConfig?.overrides,..._.projectConfig?.overrides}).filter((j)=>{if(N==="off")return j[1]==="off";return!!j[1]&&typeof j[1]==="object"}).map(([j,J])=>({key:j,value:J}))}function Au(_){for(let N of _.errors)console.error(N)}import{dirname as Qu,join as Do}from"node:path";import{join as Es,resolve as ub}from"node:path";function kr(_){let N=d(_);if(N.errors.length>0)return{ok:!1,result:{ok:!1,errors:N.errors,entries:[]}};return{ok:!0,config:N.config??Ct}}function Ou(_){vn(_,{version:1,rules:[],overrides:{},transparent_wrappers:[]})}function Iu(_){vn(_,{rulebook_version:1,name:"example-rules",version:"1.0.0",description:"Project-specific CC Safety Net rules.",author:"project",allowed_commands:["docker"],rules:[{name:"block-docker-system-prune",command:"docker",subcommand:"system",block_args:["prune"],reason:"Use targeted cleanup instead."}],tests:[{command:"docker system prune",expect:"blocked",rule:"block-docker-system-prune"}]})}import{dirname as Ao}from"node:path";var eb="custom.";function Eo(_){if(_.rulebook_version!==2)return[];let N=_.rules.map((j)=>({name:j.name,command:j.command,block_args:[],match:j.match,reason:j.reason,intent:j.intent}));return(_.tests??[]).flatMap((j,J)=>{let Y=Ss(y(j.command));if(Y.length===0)return[`tests[${J}]: could not parse fixture command: ${j.command}`];let re=Y.reduce((ie,de)=>ie??D(de,N)?.id.slice(eb.length),void 0);if(j.expect==="blocked"){if(re===j.rule)return[];let ie=re?`"${re}" matched first`:"no rule matched";return[`tests[${J}]: expected "${j.rule}" to block "${j.command}" but ${ie}`]}return re?[`tests[${J}]: expected "${j.command}" to be allowed but "${re}" matched`]:[]})}function Ss(_){return _.nodes.flatMap((N)=>{if(N.kind==="group"||N.kind==="function")return Ss(N.body);if(N.kind!=="command")return[];let j=Se(ne(N.dialect,N.words)).words.map(t);return[...j.length>0?[j]:[],...N.nested.flatMap((J)=>Ss(J))]})}var _o=Object.freeze({concurrency:4,maxRequests:131,maxResponseBytes:67108864});function To(_={}){return{requests:0,responseBytes:0,maxRequests:_.maxRequests??_o.maxRequests,maxResponseBytes:_.maxResponseBytes??_o.maxResponseBytes}}function Mn(_){return{controller:new AbortController,budget:To(),resolveUrl:_}}function $u(_){return _ instanceof Error&&_.message==="Rule synchronization exceeds CC Safety Net's safe resource limits."}function Du(_){if(_.requests>=_.maxRequests)throw Error("Rule synchronization exceeds CC Safety Net's safe resource limits.");_.requests++}function Lu(_,N){if(N>_.maxResponseBytes-_.responseBytes)throw _.responseBytes+=N,Error("Rule synchronization exceeds CC Safety Net's safe resource limits.");_.responseBytes+=N}var Hu=Object.freeze({timeoutMs:15000,metadataBytes:524288,commitBytes:262144,treeBytes:16777216,rawBytes:4194304});async function Nu(_,N,j=w(Ao(Ao(N)),"rules policy"),J=Mn()){if(C(_))return ob(_,J);return rb(_,N,j)}async function Fu(_,N,j,J,Y,re){if(!C(_))return Nu(_,N,j,J);let ie=Y?null:nb(_,N,j);if(ie)return ie;if(!Y&&!re)throw Error(`${_} is not vendored; run rule update ${_} to vendor it`);return Nu(_,N,j,J)}function nb(_,N,j=w(Ao(Ao(N)),"rules policy")){let J=L(_),Y=M(N,J.name),re=r(i(j,Y));if(re===null)return null;let ie=le(Ps(re,`Invalid rulebook ${Y}.`));if(ie.name!==J.name)throw Error(`rulebook name "${ie.name}" in ${Y} must match "${J.name}"`);return{spec:_,rulebook:ie,content:re}}async function Mu(_,N={}){if(!Z(_))throw Error(`Invalid GitHub repository source: ${_}`);let[j,J]=_.split("/");if(!j||!J)throw Error(`Invalid GitHub repository source: ${_}`);if(N.ref!==void 0&&!ae(N.ref))throw Error(`GitHub rulebook refs must use valid path segments: ${N.ref}`);let Y=N.operation??Mn(),re=N.ref??await tb(j,J,_,Y),ie=await Gu(j,J,re,_,Y),de=await Oo(`https://api.github.com/repos/${j}/${J}/git/trees/${ie}?recursive=1`,"tree",Y),fe=de.response;if(!fe.ok)throw Error(`Failed to inspect ${_}: GitHub tree returned ${fe.status}`);let ke=JSON.parse(de.content);if(!Array.isArray(ke?.tree))throw Error(`Failed to inspect ${_}: unexpected GitHub tree response`);let Ce=ke.tree,Re=[...new Set(Ce.flatMap((Ee)=>{if(!Ee||typeof Ee!=="object")return[];let Ne=Ee;if(Ne.type!=="blob"||typeof Ne.path!=="string")return[];let Oe=Ne.path.match(St);return Oe?.[1]?[Oe[1]]:[]}))].sort();if(Re.length===0)throw Error(`No rulebooks found in ${_} under ${he}/`);return{source:_,owner:j,repo:J,ref:re,commit:ie,names:Re}}async function tb(_,N,j,J){let Y=await Oo(`https://api.github.com/repos/${_}/${N}`,"metadata",J),re=Y.response;if(!re.ok)throw Error(`Failed to inspect ${j}: GitHub returned ${re.status}`);let de=JSON.parse(Y.content)?.default_branch;if(typeof de!=="string"||de==="")throw Error(`Failed to inspect ${j}: missing default branch`);if(!ae(de))throw Error(`GitHub returned an invalid default branch: ${de}`);return de}function rb(_,N,j){wt(_);let J=M(N,_),Y=r(i(j,J));if(Y===null)throw Error(`Rulebook source not found: ${_}`);let re=Uu(Ps(Y,"Invalid local rulebook source."));if(re.name!==_)throw Error(`rulebook name "${re.name}" must match local source "${_}"`);return{spec:_,rulebook:re,content:Y}}async function ob(_,N){let j=L(_),J=await Gu(j.owner,j.repo,j.ref,_,N),Y=await Oo(`https://raw.githubusercontent.com/${j.owner}/${j.repo}/${J}/${j.path}`,"raw",N),re=Y.response;if(!re.ok)throw Error(`Failed to fetch ${_}: GitHub raw returned ${re.status}`);let ie=Y.content,de=Uu(Ps(ie,"Invalid GitHub rulebook response."));if(de.name!==j.name)throw Error(`rulebook name "${de.name}" must match GitHub source "${j.name}"`);return{spec:_,rulebook:de,content:ie}}function Uu(_){let N=le(_),j=Eo(N);if(j.length>0)throw Error(j.join("; "));return N}function Ps(_,N){try{return JSON.parse(_)}catch{throw Error(N)}}async function Gu(_,N,j,J,Y){let re=await Oo(`https://api.github.com/repos/${_}/${N}/commits/${encodeURIComponent(j)}`,"commit",Y),ie=re.response;if(!ie.ok)throw Error(`Failed to resolve ${J}: GitHub returned ${ie.status}`);let de=JSON.parse(re.content);if(typeof de?.sha!=="string"||de.sha==="")throw Error(`Failed to resolve commit for ${J}`);return de.sha}async function ib(_,N,j={}){if(j.signal?.aborted)throw j.signal.reason;let J=j.budget??To(),Y=new AbortController,re=()=>Y.abort(j.signal?.reason);j.signal?.addEventListener("abort",re,{once:!0});let ie=!1,de=setTimeout(()=>{if(Y.signal.aborted)return;ie=!0,Y.abort()},j.timeoutMs??Hu.timeoutMs);try{if(j.signal?.aborted)throw j.signal.reason;Du(J);let fe=await fetch(_,{signal:Y.signal,redirect:"error"});if(!fe.ok)return Bu(fe),{response:fe,content:""};return{response:fe,content:await sb(fe,N,J,()=>Y.abort())}}catch(fe){if(ie)throw Error("GitHub request timed out",{cause:fe});if(j.signal?.aborted)throw j.signal.reason;throw fe}finally{clearTimeout(de),j.signal?.removeEventListener("abort",re)}}function Oo(_,N,j){return ib(j.resolveUrl?.(_)??_,N,{budget:j.budget,signal:j.controller.signal})}async function sb(_,N,j=To(),J){let Y=Hu[`${N}Bytes`],re=Number(_.headers.get("content-length"));if(Number.isFinite(re)&&re>Y)throw Bu(_),Error(`GitHub ${N} response exceeds ${Y} bytes`);if(!_.body)return"";let ie=_.body.getReader(),de=[],fe=0;while(!0){let ke=await ie.read();if(ke.done)break;try{Lu(j,ke.value.byteLength)}catch(Ce){throw J?.(),ju(ie),Ce}if(fe+=ke.value.byteLength,fe>Y)throw J?.(),ju(ie),Error(`GitHub ${N} response exceeds ${Y} bytes`);de.push(Buffer.from(ke.value))}return Buffer.concat(de,fe).toString("utf-8")}function Bu(_){if(!_.body)return;qu(()=>_.body?.cancel())}function ju(_){qu(()=>_.cancel())}function qu(_){try{Promise.resolve(_()).catch(()=>{})}catch{}}var ab=/^([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)#(.+)$/;function Vu(_,N){let j=Wu(_.rules,N);if(j.length>0)return{ok:!0,specs:j};return Ju(_.rules,N)}function Ku(_,N){let j=Wu(_,N);if(j.length>0)return{ok:!0,specs:j};let J=cb(_,N);if(J.length>0)return{ok:!0,specs:J};let Y=db(_,N);if(!Y.ok)return Y;if(Y.specs.length>0)return{ok:!0,specs:Y.specs};return Ju(_,N)}function Ju(_,N){let j=_.filter((J)=>Rs(J)?.name===N);if(j.length===1)return{ok:!0,specs:j};return lb(N,j)}function lb(_,N){return{ok:!1,result:{ok:!1,errors:N.length===0?[`No configured rulebook matches ${_}`]:[`Ambiguous rulebook match ${_}: ${N.join(", ")}`],entries:[]}}}function Wu(_,N){return _.filter((j)=>j===N)}function cb(_,N){let j=N.match(ab),J=j?.[1],Y=j?.[2],re=j?.[3];if(!J||!Y||!re||!ae(re))return[];return zu(_,(ie)=>ie.owner===J&&ie.repo===Y&&ie.ref===re)}function db(_,N){if(!Z(N))return{ok:!0,specs:[]};let[j,J]=N.split("/"),Y=zu(_,(ie)=>ie.owner===j&&ie.repo===J);if(new Set(Y.map((ie)=>Rs(ie)?.ref).filter((ie)=>!!ie)).size<2)return{ok:!0,specs:Y};return{ok:!1,result:{ok:!1,errors:[`Multiple refs are configured for ${N}. Use an explicit ref:`,`  cc-safety-net rule remove ${N}#<ref>`],entries:[]}}}function Rs(_){try{return L(_)}catch{return null}}function zu(_,N){return _.filter((j)=>{let J=Rs(j);return J?N(J):!1})}async function $o(_,N={}){let j=_s(N);return pb(_,j,await Io(_,j,Mn()))}function pb(_,N,j){if(!j.ok)return j;let J=hn(_,N),Y=[...new Set(B(J.configPath,J.filesystemScope))];if(Y.length===0)return j;return{ok:!1,errors:Y,entries:j.entries}}async function Io(_,N,j,J={},Y=new Set,re=new Set){try{let ie=hn(_,N),de=kr(ie.configTarget);if(!de.ok)return de.result;let fe=de.config,ke=N.only?Vu(fe,N.only):{ok:!0,specs:fe.rules};if(!ke.ok)return ke.result;let Ce=new Set([...N.refresh?ke.specs:[],...Y]),Re=(tn)=>Fu(tn,ie.configDir,ie.filesystemScope,j,Ce.has(tn),!N.refresh||Ce.has(tn)),Ee=await xb(fe.rules,N.refresh?(tn)=>Re(tn).then((fn)=>({ok:!0,item:fn})).catch((fn)=>{if($u(fn))throw fn;return{ok:!1,spec:tn,message:fn instanceof Error?fn.message:String(fn)}}):async(tn)=>({ok:!0,item:await Re(tn)}),j),Ne=Ee.filter((tn)=>!tn.ok),Oe=Ee.filter((tn)=>tn.ok).map((tn)=>tn.item),Je=Oe.flatMap((tn)=>fb(tn,fe.rules)),Ge=Oe.flatMap((tn)=>mb(tn,re,ie)),Ye=new Set([...Je,...Ge].map((tn)=>tn.spec)),rn=[...Ne,...Je,...Ge],on=[],sn=yb(on,()=>Oe.flatMap((tn)=>Ye.has(tn.spec)||rn.length>0&&re.has(tn.spec)?[]:gb(tn,ie,J,on)));return{ok:rn.length===0,errors:rn.map((tn)=>`Failed to update ${tn.spec}: ${tn.message}`),entries:Oe.map(vb),changes:sn}}catch(ie){return xr(ie)}}function fb(_,N){if(!C(_.spec))return[];let j=je(_.spec),J=N.filter((Y)=>Y!==_.spec&&je(Y).toLowerCase()===j.toLowerCase());if(J.length===0)return[];return[{ok:!1,spec:_.spec,message:`rulebook name "${j}" is also claimed by ${J.join(", ")}; rename one of them`}]}function mb(_,N,j){if(!N.has(_.spec)||!C(_.spec))return[];let J=M(j.configDir,_.rulebook.name),Y=r(i(j.filesystemScope,J));if(Y===null||Y===_.content)return[];return[{ok:!1,spec:_.spec,message:`${J} already exists and no configured source claims it; remove or rename the file, then re-run rule add`}]}function gb(_,N,j,J){if(!C(_.spec))return[];let Y=M(N.configDir,_.rulebook.name),re=i(N.filesystemScope,Y),ie=r(re);if(ie===_.content)return[];return J?.push({target:re,previous:ie}),g(re,_.content,void 0,j._testAfterPolicyRename),hb(_,ie)}function yb(_,N){try{return N()}catch(j){for(let J of[..._].reverse()){if(J.previous===null){H(J.target);continue}g(J.target,J.previous)}throw j}}function hb(_,N){if(N===null)return[`Vendored ${_.spec} (${_.rulebook.version})`];let j=ve(N),J="problem"in j?null:j.rulebook,Y=new Map(J?.rules.map((ie)=>[ie.name,JSON.stringify(ie)])??[]),re=new Set(_.rulebook.rules.map((ie)=>ie.name));return[`Updated ${_.spec} (${J?.version??"unreadable"} -> ${_.rulebook.version})`,...[...re].filter((ie)=>!Y.has(ie)).map((ie)=>`  + ${ie}`),...[...Y.keys()].filter((ie)=>!re.has(ie)).map((ie)=>`  - ${ie}`),..._.rulebook.rules.filter((ie)=>{let de=Y.get(ie.name);return de!==void 0&&de!==JSON.stringify(ie)}).map((ie)=>`  ~ ${ie.name}`)]}function vb(_){return{spec:_.spec,name:_.rulebook.name,version:_.rulebook.version,ruleCount:_.rulebook.rules.length}}async function Yu(_,N,j={}){return bb(_,N,Pb(j),Mn())}async function bb(_,N,j,J,Y={}){let re=null,ie=!1;try{let de=hn(_,j),fe=r(de.configTarget);re={target:de.configTarget,content:fe};let ke=kr(de.configTarget);if(!ke.ok)return ke.result;let Ce=ke.config,Re=Z(N);wb(N,j,Re);let Ee=Re?await Mu(N,{ref:j.ref,operation:J}):null,Ne=Ee?kb(Ee,j.rulebooks):[],Oe=Ee?Ne.map((on)=>Cb(Ce.rules,Ee,on)??`${N}#${Ee.ref}/${on}`):[N],Je=Oe.filter((on)=>!Ce.rules.includes(on)),Ge=[...Ce.rules,...Je];if(Ge.length>ye)return Sb();if(Ge.length!==Ce.rules.length)ie=!0,vn(de.configTarget,{...Ce,rules:Ge},void 0,Y._testAfterPolicyRename);let Ye=await Io(_,j,J,Y,new Set(Je),new Set(Je));if(!Ye.ok)Cr(de.configTarget,fe);if(!Ye.ok||!Ee)return Ye;let rn=Ne.filter((on,sn)=>Je.includes(Oe[sn]??""));return{...Ye,add:{source:N,ref:Ee.ref,selected:Ne,added:rn,alreadyConfigured:Ne.filter((on)=>!rn.includes(on)),commits:Je.length>0?[Ee.commit]:[]}}}catch(de){if(ie&&re)try{Cr(re.target,re.content)}catch(fe){return xr(fe)}return xr(de)}}function wb(_,N,j){if(!j&&N.rulebooks!==void 0)throw Error("--only can only select rulebooks from an owner/repo source");if(!j&&N.ref)throw Error(`--ref can only select a ref for an owner/repo source: ${_}`);if(N.rulebooks?.length===0)throw Error("--only requires at least one rulebook name");let J=N.rulebooks?.filter((Y)=>!p.test(Y))??[];if(J.length>0)throw Error(`Invalid rulebook names: ${J.join(", ")}`)}function kb(_,N){let j=N?[...new Set(N)]:_.names,J=j.filter((Y)=>!_.names.includes(Y));if(J.length>0)throw Error(`Rulebooks not found in ${_.source} at ${_.ref}: ${J.join(", ")}
Available rulebooks: ${_.names.join(", ")}`);return j}function Cb(_,N,j){let J=`${N.source}#${N.ref}/${j}`;if(_.includes(J))return J;let Y=`${N.source}#${N.commit}/${j}`;return _.find((re)=>re===Y)}async function xb(_,N,j=Mn()){if(_.length>ye)throw Error(be);let J=[],Y=0,re,ie=Array.from({length:Math.min(_.length,_o.concurrency)},async()=>{while(!re){let de=Y;if(de>=_.length)return;Y++;try{J[de]=await N(_[de],de,j.controller.signal)}catch(fe){if(!re)re={value:fe},Y=_.length,j.controller.abort(fe);return}}});if(await Promise.all(ie),re)throw re.value;return J}function Sb(){return{ok:!1,errors:[be],entries:[]}}function _s(_){return{cwd:_.cwd,userConfigDir:_.userConfigDir,userConfigPath:_.userConfigPath,projectConfigPath:_.projectConfigPath,global:_.global,only:_.only,refresh:_.refresh}}function Pb(_){return{..._s(_),ref:_.ref,rulebooks:_.rulebooks}}function Rb(_){return{..._s(_),deleteSource:_.deleteSource}}async function Zu(_,N,j={}){try{return await Eb(_,N,Rb(j),{})}catch(J){return xr(J)}}async function Eb(_,N,j,J){let Y=hn(_,j),re=d(Y.configTarget);if(re.errors.length>0)return{ok:!1,errors:re.errors,entries:[]};if(!re.config)return{ok:!1,errors:[`No config found at ${Y.configPath}`],entries:[]};let ie=Ku(re.config.rules,N);if(!ie.ok)return ie.result;let de=j.deleteSource?_b(Y.configDir,ie.specs,Y.filesystemScope):{ok:!0,dirs:[]};if(!de.ok)return de.result;let fe=r(Y.configTarget);if(fe===null)return xr(Error("Rules config is unavailable."));try{vn(Y.configTarget,{...re.config,rules:re.config.rules.filter((Re)=>!ie.specs.includes(Re))},void 0,J._testAfterPolicyRename)}catch(Re){throw Cr(Y.configTarget,fe),Re}let ke=await Io(_,j,Mn(),J);if(!ke.ok)return Cr(Y.configTarget,fe),ke;let Ce=Tb(de.dirs,J,Y.filesystemScope);if(!Ce.ok){Cr(Y.configTarget,fe);let Re=await Io(_,j,Mn(),J);if(!Re.ok)return{ok:!1,errors:[...Ce.result.errors,...Re.errors],entries:Re.entries};return Ce.result}return ke}function _b(_,N,j){let J=N.flatMap((de)=>p.test(de)?[]:["--delete-source can only delete local rulebook sources"]),Y=N.map((de)=>Es(_,de)),re=J.length>0?[]:Y.flatMap((de)=>Xu(de,j)),ie=[...J,...re];return ie.length>0?{ok:!1,result:{ok:!1,errors:ie,entries:[]}}:{ok:!0,dirs:Y}}function Xu(_,N){let j=ub(_),J=i(N,j),Y=me(J);if(!Y)return[`Local rulebook source directory not found: ${_}`];let re=Y.find((ie)=>ie.name==="rulebook.json");if(!re)return[`Local rulebook source directory is missing rulebook.json: ${_}`];if(re.kind!=="file")throw new o(N.label);if(r(i(N,Es(j,"rulebook.json"))),Y.length>1)return[`Local rulebook source directory contains extra files: ${_}. delete manually if you really want to remove the directory.`];return[]}function Tb(_,N,j){let J=_.flatMap((Y)=>{try{if(!me(i(j,Y)))return[];let re=Xu(Y,j);if(re.length>0)return re;return Ab(Y,N,j),[]}catch(re){return[`Failed to delete local rulebook source ${Y}: ${re instanceof Error?re.message:String(re)}`]}});return J.length>0?{ok:!1,result:{ok:!1,errors:J,entries:[]}}:{ok:!0}}function Ab(_,N,j){if(N._testDeleteLocalSourceDir){N._testDeleteLocalSourceDir(_);return}H(i(j,Es(_,ge))),vt(i(j,_))}function Cr(_,N){if(N===null){H(_);return}g(_,N)}function xr(_){return{ok:!1,errors:[_ instanceof Error?_.message:String(_)],entries:[]}}var Ob=".safety-net.json",Ib="~/.cc-safety-net/config.json";async function tp(_,N){let j=A(_,{cwd:N.cwd});if(j)console.log(`Skipped the project scope: ${I(N.cwd)} is the user rule config, not a project rule config`);return[j||await ep(_,{legacyPath:Fa({cwd:N.cwd}),configPath:I(N.cwd),defaultRulebookName:"project-rules",migratedFrom:Ob,cleanup:N.cleanup,syncOptions:{cwd:N.cwd}}),await ep(_,{legacyPath:Dt(_),configPath:W(_),defaultRulebookName:"user-rules",migratedFrom:Ib,cleanup:N.cleanup,syncOptions:{cwd:N.cwd,global:!0}})].every((Y)=>Y)?0:1}async function ep(_,N){let j=hn(_,N.syncOptions),J=i(j.filesystemScope,N.legacyPath),Y=r(J);if(Y===null)return console.log(`No legacy config found at ${N.legacyPath}`),!0;let re=Db(Y);if(!re.ok){for(let Ne of re.errors)console.error(Ne);return!1}let ie=d(j.configTarget);if(ie.errors.length>0){for(let Ne of ie.errors)console.error(Ne);return!1}let de=ie.config??{version:1,rules:[],overrides:{},transparent_wrappers:[]},fe=Lb(Qu(N.configPath),de.rules,N.defaultRulebookName,N.migratedFrom,j.filesystemScope),ke=Do(Qu(N.configPath),fe,"rulebook.json"),Ce=i(j.filesystemScope,ke),Re=[np(j.configTarget),np(Ce)],Ee=await $b(_,N,j.configTarget,Ce,fe,re.config.rules,{...de,rules:de.rules.includes(fe)?de.rules:[...de.rules,fe]});if(!Ee.ok){Hb(Re);for(let Ne of Ee.errors)console.error(Ne);return!1}if(!N.cleanup)return console.log(`Migrated legacy config at ${N.legacyPath}. Legacy file is no longer used.`),!0;if(!jb(j.configTarget,Ce,fe,N.migratedFrom,re.config.rules))return console.error(`Migration cleanup verification failed for ${N.legacyPath}`),!1;return H(J),console.log(`Deleted legacy config at ${N.legacyPath}`),!0}async function $b(_,N,j,J,Y,re,ie){try{return vn(j,ie),vn(J,Nb(Y,N.migratedFrom,re)),await $o(_,N.syncOptions)}catch(de){return{ok:!1,errors:[de instanceof Error?de.message:String(de)]}}}function Db(_){try{let N=JSON.parse(_),j=Vo(N);if(j.errors.length>0)return{ok:!1,errors:j.errors};return{ok:!0,config:{version:1,rules:N.rules??[]}}}catch{return{ok:!1,errors:["Invalid JSON"]}}}function Lb(_,N,j,J,Y){let re=N.find((ie)=>Fb(i(Y,Do(_,ie,"rulebook.json")))===J);if(re)return re;if(r(i(Y,Do(_,j,"rulebook.json")))===null)return j;for(let ie=2;;ie++){let de=`${j}-${ie}`;if(r(i(Y,Do(_,de,"rulebook.json")))===null)return de}}function Nb(_,N,j){return{rulebook_version:1,name:_,version:"1.0.0",description:"Migrated CC Safety Net rules.",author:"project",migrated_from:N,allowed_commands:[...new Set(j.map((J)=>J.command))],rules:j,tests:j.map((J)=>({command:[J.command,J.subcommand,J.block_args[0]].filter(Boolean).join(" "),expect:"blocked",rule:J.name}))}}function jb(_,N,j,J,Y){if(!d(_).config?.rules.includes(j))return!1;try{let ie=r(N);if(ie===null)return!1;let de=JSON.parse(ie);return de.migrated_from===J&&JSON.stringify(de.rules)===JSON.stringify(Y)}catch{return!1}}function np(_){return{target:_,content:r(_)}}function Hb(_){for(let N of _){if(N.content===null){H(N.target);continue}g(N.target,N.content)}}function Fb(_){let N=r(_);if(N===null)return null;try{let j=JSON.parse(N);return typeof j.migrated_from==="string"?j.migrated_from:null}catch{return null}}import{mkdir as Mb,readFile as Ub,writeFile as Gb}from"node:fs/promises";import{dirname as Bb,join as qb}from"node:path";var Vb=86400000,Kb=604800000;async function op(_,N=Date.now()){if(_.env.get("CC_SAFETY_NET_NO_UPDATE_CHECK"))return null;let j=Qe(_);if(!j)return null;let J=qb(j,".cc-safety-net","update-check.json"),Y=await Jb(J,N);if(!Y.lastCheck||N-Y.lastCheck>Vb){let de=await Gn();if(Y.lastCheck=N,de.latestVersion)Y.latestVersion=de.latestVersion;if(!await rp(J,Y))return null;if(de.error)return null}let re=Y.latestVersion,ie=pn();if(!re||!Zo(re,ie))return null;if(Y.notifiedVersion===re&&Y.notifiedAt!==void 0&&N-Y.notifiedAt<Kb)return null;if(Y.notifiedVersion=re,Y.notifiedAt=N,!await rp(J,Y))return null;return`UPDATE_AVAILABLE: cc-safety-net v${re} is available (running v${ie}). Ask the user once whether to run \`npx -y cc-safety-net@latest update\`; continue the current task either way and do not raise this again.`}async function Jb(_,N){let j=await Ub(_,"utf8").then((re)=>JSON.parse(re)).catch(()=>{return});if(!j||typeof j!=="object"||Array.isArray(j))return{};let J=j,Y=(re)=>typeof re==="number"&&Number.isFinite(re)&&re<=N?re:void 0;return{lastCheck:Y(J.lastCheck),latestVersion:typeof J.latestVersion==="string"?J.latestVersion:void 0,notifiedVersion:typeof J.notifiedVersion==="string"?J.notifiedVersion:void 0,notifiedAt:Y(J.notifiedAt)}}async function rp(_,N){return Mb(Bb(_),{recursive:!0,mode:448}).then(()=>Gb(_,JSON.stringify(N),{mode:384})).then(()=>!0).catch(()=>!1)}import{join as Xb,resolve as Os}from"node:path";var ip=new Map([["Bash","posix"],["PowerShell","powershell"],["Monitor","posix"]]);var sp=new Map([["Bash","auto"]]);var ap=new Map([["bash","auto"],["Bash","auto"],["powershell","powershell"],["PowerShell","powershell"]]);var lp=new Map([["Shell","auto"]]);var cp=new Map([["exec","auto"]]);var dp=new Map([["Execute","auto"]]);var up=new Map([["run_shell_command","auto"]]);var pp=new Map([["run_terminal_command","auto"],["monitor","auto"]]);var fp=new Map([["terminal","posix"]]);var mp=new Map([["Bash","posix"]]);var gp="exec";var Yb=[["antigravity-cli",[...za.keys()]],["claude-code",[...ip.keys()]],["codex",[...sp.keys()]],["copilot-cli",[...ap.keys()]],["cursor",[...lp.keys()]],["deepseek-harness",[...Xe.keys()]],["devin",[...cp.keys()]],["droid",[...dp.keys()]],["gemini-cli",[...up.keys()]],["grok-build",[...pp.keys()]],["hermes-agent",[...fp.keys()]],["kimi-code",[...mp.keys()]],["openclaw",[gp]],["opencode",[Ke,we]],["pi",[...Ze.keys()]]].flatMap(([_,N])=>N.map((j)=>({name:j,integration:cn(_)}))),yp="and is already analyzed. Built-in tools cannot be declared.";function Lo(_){let N=Te(_),j=[...new Set(Yb.filter((J)=>Te(J.name)===N).map((J)=>J.integration))].sort((J,Y)=>J.localeCompare(Y));if(j.length>0)return`"${_}" is a built-in shell tool of ${Zb(j)}, ${yp}`;if(x(_)!=="unknown")return`"${_}" is a built-in file tool, ${yp}`;return}function Zb(_){return _.length===1?_[0]??"":`${_.slice(0,-1).join(", ")} and ${_.at(-1)}`}var vp="CC Safety Net Config",Qb="═".repeat(vp.length),ew="https://raw.githubusercontent.com/kenryu42/cc-safety-net/main/assets/cc-safety-net.schema.json",nw=new Set(["rule.json","rule.lock","cache"]);function bp(_,N={}){try{return tw(_,N)}catch(j){if(j instanceof o)return console.error(j.message),1;throw j}}function tw(_,N){let j=N.cwd??process.cwd(),J=X(_,{cwd:j}),Y=Dt(_),re=Or(j),ie=Os(j,he),de=i(J.userScope,Y),fe=i(J.projectScope,re),ke=!1,Ce=!1,Re=[],Ee=[],Ne=rw(i(J.projectScope,ie));if(iw(),r(J.userConfigTarget)!==null){let Oe=Un(J.userConfigTarget);if(Oe.errors.push(...B(J.userConfigPath,J.userScope),...hp(J.userConfigTarget)),Re.push({scope:"User",path:J.userConfigPath,result:Oe,schema:"rules",target:J.userConfigTarget}),Oe.errors.length>0)ke=!0}if(r(de)!==null)if(Ce=!0,r(J.userConfigTarget)!==null)Ee.push(No("user","cleanup"));else{let Oe=Ko(de);if(Re.push({scope:"User",path:Y,result:Oe,schema:"legacy",inactive:!0,target:de}),Ee.push(No("user",Oe.errors.length>0?"fix-or-delete":"migrate")),Oe.errors.length>0)ke=!0}if(r(J.projectConfigTarget)!==null){let Oe=Un(J.projectConfigTarget);if(Oe.errors.push(...B(J.projectConfigPath,J.projectScope),...hp(J.projectConfigTarget)),Re.push({scope:"Project",path:Os(J.projectConfigPath),result:Oe,schema:"rules",target:J.projectConfigTarget}),Oe.errors.length>0)ke=!0;if(r(fe)!==null)Ce=!0,Ee.push(No("project","cleanup"))}else if(r(fe)!==null){Ce=!0,ke=!0;let Oe=Ko(fe);Re.push({scope:"Project",path:Os(re),result:Oe,schema:"legacy",inactive:!0,target:fe}),Ee.push(No("project",Oe.errors.length>0?"fix-or-delete":"migrate"))}if(Ne?.result.errors.length)ke=!0;if(Re.length===0&&!Ne)return console.log(`
No config files found. Using built-in rules only.`),0;for(let Oe of Re)if(Oe.inactive)aw(Oe.scope,Oe.path,Oe.result);else if(Oe.result.errors.length>0)lw(Oe.scope,Oe.path,Oe.result.errors);else{if(Oe.schema==="rules"&&uw(Oe.target))console.log(`
Added $schema to ${Oe.scope.toLowerCase()} config.`);sw(Oe.scope,Oe.path,Oe.result,Oe.schema)}for(let Oe of Ee)console.error(`
${en.red(Oe)}`);if(Ne)if(Ne.result.errors.length>0)dw(Ne.path,Ne.result.errors);else cw(Ne.path,Ne.result);if(ke)return console.error(`
Config validation failed.`),1;return console.log(Ce?`
Configs valid with warnings.`:`
All configs valid.`),0}function hp(_){return(d(_).config?.command_tools??[]).flatMap((N)=>Lo(typeof N==="string"?N:N.name)??[])}function No(_,N){let j=`legacy ${_} config`;if(N==="cleanup")return`Warning: Legacy ${_} config is no longer needed. Run \`npx -y cc-safety-net rule migrate --cleanup\` to clean it up safely.`;if(N==="migrate")return`Warning: Legacy ${_} config is ignored by CC Safety Net. Run \`npx -y cc-safety-net rule migrate\`.`;return`Warning: Legacy ${_} config is no longer supported. Fix or delete the ${j}, then run \`npx -y cc-safety-net rule migrate\`.`}function rw(_){if(me(_)===null)return null;let N=ow(_);if(N.ruleNames.size===0&&N.errors.length===0)return null;return{path:_.path,result:N}}function ow(_){let N=[],j=new Set,J=(me(_)??[]).filter((Y)=>!nw.has(Y.name)).sort((Y,re)=>Y.name.localeCompare(re.name));if(J.length===0)return{errors:N,ruleNames:j};for(let Y of J){if(!p.test(Y.name)){N.push(`rulebook directory names must match ${p}: ${Y.name}`);continue}if(Y.kind!=="directory"){N.push(`${Y.name} must be a rulebook directory`);continue}let re=i(_.scope,Xb(_.path,Y.name,"rulebook.json")),ie=r(re);if(ie===null){N.push(`${Y.name}/rulebook.json is required`);continue}try{let de;try{de=JSON.parse(ie)}catch{N.push(`${Y.name}/rulebook.json: invalid JSON`);continue}let fe=le(de);if(fe.name!==Y.name){N.push(`rulebook name "${fe.name}" must match folder "${Y.name}"`);continue}let ke=Eo(fe);if(ke.length>0){N.push(...ke.map((Ce)=>`${Y.name}/rulebook.json: ${Ce}`));continue}j.add(Y.name)}catch(de){N.push(de instanceof Error?`${Y.name}/rulebook.json: ${de.message}`:`${Y.name}/rulebook.json: ${String(de)}`)}}return{errors:N,ruleNames:j}}function iw(){console.log(vp),console.log(Qb)}function sw(_,N,j,J){if(console.log(`
✓ ${_} config: ${N}`),console.log(`  Schema: ${J==="rules"?"rulebook sources":"legacy inline rules"}`),j.ruleNames.size>0){console.log(`  ${J==="rules"?"Sources":"Rules"}:`);let Y=1;for(let re of j.ruleNames)console.log(`    ${Y}. ${re}`),Y++}else console.log(`  ${J==="rules"?"Sources":"Rules"}: (none)`)}function aw(_,N,j){if(console.error(`
✗ Legacy ${_.toLowerCase()} config: ${N}`),console.error("  Schema: legacy inline rules"),console.error("  Status: ignored by CC Safety Net"),j.errors.length>0){console.error("  Errors:");let J=1;for(let Y of j.errors)for(let re of Y.split("; "))console.error(`    ${J}. ${re}`),J++;return}if(j.ruleNames.size>0){console.error("  Rules:");let J=1;for(let Y of j.ruleNames)console.error(`    ${J}. ${Y}`),J++;return}console.error("  Rules: (none)")}function lw(_,N,j){wp(`${_} config`,N,j)}function cw(_,N){console.log(`
✓ GitHub source rules: ${_}`),console.log("  Rulebooks:");let j=1;for(let J of N.ruleNames)console.log(`    ${j}. ${J}`),j++}function dw(_,N){wp("GitHub source rules",_,N)}function wp(_,N,j){console.error(`
✗ ${_}: ${N}`),console.error("  Errors:");let J=1;for(let Y of j)for(let re of Y.split("; "))console.error(`    ${J}. ${re}`),J++}function uw(_){try{let N=r(_);if(N===null)return!1;let j=JSON.parse(N);if(j.$schema)return!1;return g(_,JSON.stringify({$schema:ew,...j},null,2)),!0}catch(N){if(N instanceof o)throw N;return!1}}var kp=new Set(["init","add","remove","update","sync","list","wrapper","tool","migrate","doc","verify"]),fw=new Set(["init","add","remove","update","sync","wrapper"]),xp=new Set(["add","remove","list"]),mw="cc-safety-net/rulebooks";async function Sp(_,N){try{return await gw(_,N)}catch(j){if(j instanceof o)return console.error(j.message),1;throw j}}async function gw(_,N){let j=hw(N),J=j.help?yw(j.positionals):null;if(J)return Kt(J),0;if(j.errors.length>0){for(let ke of j.errors)console.error(ke);return 1}let Y=j.positionals[0];if(!Y)return Kt($t,console.error),1;let re=j.positionals[1],ie={global:j.global},de=process.cwd();if((Y==="tool"?j.project:!j.global&&fw.has(Y)&&!(Y==="wrapper"&&re==="list"))&&A(_,{cwd:de}))return console.error(`${I(de)} is the user rule config, not a project rule config; ${Y==="tool"?"drop --project":"use --global"} for the user scope, or run from a project directory`),1;if(Y==="init"){let ke=hn(_,ie);ww(ke.configTarget);let Ce=pw(ke.configDir,"example-rules","rulebook.json"),Re=i(ke.filesystemScope,Ce);if(j.example&&r(Re)===null)Iu(Re);let Ee=B(ke.configPath,ke.filesystemScope);for(let Ne of Ee)console.error(Ne);if(Ee.length>0)return 1;return console.log("Rule config initialized."),0}if(Y==="add"){let ke=Pp(j);if(!ke)return console.error("rule add requires a source (pass --only <rulebook...> to select from cc-safety-net/rulebooks)"),1;let Ce=hn(_,ie),Re=await Yu(_,ke,{...ie,ref:j.ref,rulebooks:j.only.length>0?j.only:void 0});return Ru(Re,ke,`Scope: ${j.global?"user":"project"} (${Ce.configDir})`),Re.ok?0:1}if(Y==="remove"){if(!re)return console.error("rule remove requires a source"),1;let ke=await Zu(_,re,{...ie,deleteSource:j.deleteSource});return Ro(ke,`Removed rulebook source: ${re}`),ke.ok?0:1}if(Y==="update"){let ke=await $o(_,{...ie,only:re,refresh:!0});return Ro(ke,"Rule config updated."),ke.ok?0:1}if(Y==="sync")return Ga(_,{global:j.global});if(Y==="list"){let ke=Q(_,{cwd:de});return _u(ke),ke.errors.length>0?1:0}if(Y==="wrapper")return kw(_,j);if(Y==="tool")return xw(_,j,de);if(Y==="migrate")return tp(_,{cleanup:j.cleanup,cwd:de});if(Y==="doc"){console.log(Su);let ke=await op(_);if(ke)console.error(ke);return 0}if(Y==="verify")return bp(_);return 1}function yw(_){if(_.length===0)return $t;let N=$t.subcommands.filter((J)=>J.usage.split(" ")[0]===_[0]);if(N.length===0)return null;if(_.length===1&&N.length>1)return{name:`rule ${_[0]}`,description:`Subcommands of rule ${_[0]}`,usage:`rule ${_[0]} <subcommand>`,subcommands:N,options:[]};let j=_.length===1?N[0]:N.find((J)=>J.usage.split(" ")[1]===_[1]);if(!j)return null;return{name:`rule ${_[0]}`,description:j.description,usage:`rule ${j.usage}`,options:_[0]==="add"?Go:[],examples:_[0]==="add"?Bo:void 0}}function hw(_){let N=gn({label:"rule",booleans:{global:["-g","--global"],project:["--project"],cleanup:["--cleanup"],deleteSource:["--delete-source"],example:["--example"]},values:{ref:["--ref"],cwdArg:["--cwd-arg"]},lists:{only:["--only"]},positionals:"list"},_),j={...N.flags,ref:N.values.ref,cwdArg:N.values.cwdArg,only:N.lists.only??[],help:N.help,positionals:N.positionals,errors:N.errors};return vw(j),j}function vw(_){let[N]=_.positionals;if(N&&!kp.has(N))_.errors.push(`Unknown rule subcommand: ${N}`);if(_.deleteSource&&N!=="remove")if(N&&kp.has(N))_.errors.push(`Unknown option for rule ${N}: --delete-source`);else _.errors.push("--delete-source is only valid with 'rule remove'");if(_.cleanup&&N!=="migrate")_.errors.push(Wn(N,"--cleanup"));if(_.example&&N!=="init")_.errors.push(Wn(N,"--example"));if(_.ref&&N!=="add")_.errors.push(Wn(N,"--ref"));if(_.only.length>0&&N!=="add")_.errors.push(Wn(N,"--only"));let j=N==="tool"?_.positionals[1]:void 0,J=j&&xp.has(j)?`tool ${j}`:N;if(_.project&&j!=="add"&&j!=="remove")_.errors.push(Wn(J,"--project"));if(_.cwdArg!==void 0&&j!=="add")_.errors.push(Wn(J,"--cwd-arg"));if(N==="tool"&&_.global)_.errors.push(Wn(N,"--global"));if(N==="add")bw(_);if(N==="migrate"){if(_.global)_.errors.push(Wn(N,"--global"));if(_.positionals.length>1)_.errors.push(`Unexpected rule migrate argument: ${_.positionals[1]}`)}else if(N==="wrapper")Cp(_,"a command");else if(N==="tool")Cp(_,"a tool name");else if(_.positionals.length>2)_.errors.push(`Unexpected rule argument: ${_.positionals[2]}`);if(N==="list"&&_.global)_.errors.push("Unknown option for rule list: --global")}function Pp(_){if(_.positionals[1])return _.positionals[1];if(_.ref||_.only.length>0)return mw;return}function bw(_){let N=Pp(_);if(!N)return;if((_.ref||_.only.length>0)&&!Z(N)){if(_.ref)_.errors.push(`--ref can only select a ref for an owner/repo source: ${N}`);if(_.only.length>0)_.errors.push("--only can only select rulebooks from an owner/repo source");return}if(_.ref&&!ae(_.ref))_.errors.push(`--ref must use valid path segments: ${_.ref}`);let j=_.only.filter((J)=>!p.test(J));if(j.length>0)_.errors.push(`Invalid rulebook names: ${j.join(", ")}`)}function Wn(_,N){return _?`Unknown option for rule ${_}: ${N}`:`Unknown option for rule: ${N}`}function Cp(_,N){let j=_.positionals[0],J=_.positionals[1],Y=_.positionals[2];if(!J){_.errors.push(`rule ${j} requires add, remove, or list`);return}if(!xp.has(J)){_.errors.push(`Unknown rule ${j} action: ${J}`);return}if(J==="list"){if(Y)_.errors.push(`Unexpected rule ${j} argument: ${Y}`);return}if(!Y){_.errors.push(`rule ${j} ${J} requires ${N}`);return}if(_.positionals.length>3)_.errors.push(`Unexpected rule ${j} argument: ${_.positionals[3]}`)}function ww(_){if(r(_)===null){Ou(_);return}let N=d(_);if(!N.config)return;vn(_,N.config)}async function kw(_,N){let j=N.positionals[1],J=N.positionals[2],Y=hn(_,{global:N.global}).configTarget;if(j==="list"){let fe=d(Y);if(fe.errors.length>0){for(let ke of fe.errors)console.error(ke);return 1}return Cw(fe.config?.transparent_wrappers??[]),0}if(!J||!E.test(J))return console.error("transparent wrapper must match command pattern"),1;if(Le(J))return console.error(`reserved command "${J}" cannot be a wrapper`),1;let re=d(Y);if(re.errors.length>0){for(let fe of re.errors)console.error(fe);return 1}let ie=re.config??{version:1,rules:[],overrides:{},transparent_wrappers:[]},de=j==="add"?[...new Set([...ie.transparent_wrappers??[],J])]:(ie.transparent_wrappers??[]).filter((fe)=>fe!==J);return vn(Y,{...ie,transparent_wrappers:de}),console.log(j==="add"?`Added transparent wrapper: ${J}`:`Removed transparent wrapper: ${J}`),0}function Cw(_){if(_.length===0){console.log("Transparent wrappers: (none)");return}console.log(`Transparent wrappers (${_.length}):`);for(let N of _)console.log(`  - ${N}`)}function xw(_,N,j){let J=N.positionals[1],Y=N.positionals[2]??"";if(J==="list")return Sw(_,j);if(!Fe.test(Y))return Is(`"${Y}" is not a tool name: ${xe}.`);if(N.cwdArg!==void 0&&!Fe.test(N.cwdArg))return Is(`"${N.cwdArg}" is not an argument name: ${xe}.`);let re=J==="add"?Lo(Y):void 0;if(re)return Is(re);let ie=hn(_,{global:!N.project}),de=kr(ie.configTarget);if(!de.ok){for(let Ee of de.result.errors)console.error(Ee);return 1}let fe=de.config.command_tools??[],ke=N.cwdArg===void 0?Y:{name:Y,cwd:N.cwdArg},Ce=(Ee)=>(typeof Ee==="string"?Ee:Ee.name)===Y,Re=J==="remove"?fe.filter((Ee)=>!Ce(Ee)):fe.some(Ce)?fe.map((Ee)=>Ce(Ee)?ke:Ee):[...fe,ke];return vn(ie.configTarget,{...de.config,command_tools:Re}),console.log(J==="add"?`Added command tool: ${Y}${N.cwdArg===void 0?"":` (cwd argument: ${N.cwdArg})`}`:`Removed command tool: ${Y}`),console.log(`Scope: ${N.project?"project":"user"} (${ie.configPath})`),0}function Is(_){return console.error(en.red(`Error: ${_}`)),1}function Sw(_,N){let j=(A(_,{cwd:N})?["user"]:["user","project"]).map((Y)=>{let re=hn(_,{global:Y==="user"});return{scope:Y,path:re.configPath,...d(re.configTarget)}}),J=j.flatMap((Y)=>Y.errors.map((re)=>`${Y.path}: ${re}`));if(J.length>0){for(let Y of J)console.error(Y);return 1}return Tu(j.flatMap((Y)=>(Y.config?.command_tools??[]).map((re)=>({scope:Y.scope,tool:re})))),0}import{sep as Aw}from"node:path";import{existsSync as Pw,readFileSync as Rw}from"node:fs";import{join as Ew}from"node:path";async function _w(_){if(_.isTTY)return null;return(await ot(_).catch(()=>null))?.trim()||null}function Tw(_){let N=_.env.get("CLAUDE_SETTINGS_PATH");if(N)return N;return Ew(qr(_),"settings.json")}function $s(_){let N=Tw(_);if(!Pw(N))return!1;try{let j=Rw(N,"utf-8"),J=JSON.parse(j);if(!J.enabledPlugins)return!1;let Y="cc-safety-net@cc-marketplace";if(!(Y in J.enabledPlugins))return!1;return J.enabledPlugins[Y]===!0}catch(j){if(S(n.debug,_.env))console.error(`CC Safety Net debug: failed to read Claude settings: ${N}: ${j instanceof Error?j.message:String(j)}`);return!1}}async function Ds(_,N=process.stdin){let j=$s(_),J;if(!j)J="\uD83D\uDEE1️ CC Safety Net ❌";else{let re=R(_,{cwd:process.cwd()}),ie=re.policy,de=P(ie,_.env),fe=Object.values(V(ie,de.capabilities)).some((Re)=>Re.changesInherited),ke={standard:"✅",strict:"\uD83D\uDD12",paranoid:"\uD83D\uDC41️",custom:"\uD83D\uDD27"}[fe?"custom":de.effectiveLevel],Ce=re.policyScopes&&!re.policyScopes.weakeningsIgnored&&re.policyScopes.weakenings.length>0?"\uD83D\uDD3B":"";J=`\uD83D\uDEE1️ CC Safety Net ${ke}${de.worktreeMode?"\uD83C\uDF33":""}${Ce}${re.state==="degraded"?"⚠️":""}`}let Y=await _w(N);if(Y&&!Y.startsWith("{"))console.log(`${Y} | ${J}`);else console.log(J)}function Rp(_){let N=R(_,{cwd:process.cwd()}),j=N.policy,J=P(j,_.env),Y=!!process.env.NO_COLOR||!process.stdout.isTTY,re=Math.min(process.stdout.columns||80,100),ie=Y?"ok":"✔",de=Y?"OFF":"✘",fe=(Je,Ge)=>{let Ye=`  ${Je.padEnd(13)}${Ge}`;return(Ye.length>re?`${Ye.slice(0,re-1)}…`:Ye).replaceAll(de,en.red(de))},ke=Object.values(V(j,J.capabilities)).some((Je)=>Je.changesInherited),Ce=(Je)=>Je===_.home||Je.startsWith(`${_.home}${Aw}`)?`~${Je.slice(_.home.length)}`:Je,Re={ready:en.green,degraded:en.yellow}[N.state],Ee=N.policyScopes?.weakenings??[],Ne=[...$s(_)?[]:["plugin cc-safety-net@cc-marketplace is disabled in Claude Code; nothing is enforced in Claude Code until it is re-enabled. Other integrations are not affected."],...N.diagnostics],Oe=Y?"-":"·";console.log([`${Y?"":"\uD83D\uDEE1️  "}CC Safety Net — ${Re(N.state)}`,"",fe("Protection",`destructive ${j.destructiveCommandProtectionEnabled?ie:de}   secrets ${j.secretProtection.enabled?ie:de}`),fe("Level",ke?`${J.effectiveLevel} (customised)`:J.effectiveLevel),fe("Rules",j.rules.length===0?"none active":`${j.rules.length} active`),fe("Policy",Ce(u(_))),...N.policyScopes?[fe("Project",Ce(h(process.cwd())))]:[],...J.worktreeMode?[fe("Worktree","relaxations active")]:[],"",...Ee.length===0?[]:[N.policyScopes?.weakeningsIgnored?"  Project policy (ignored)":"  Project policy",...Ee.flatMap((Je)=>ur(Je,"      ",re-6).map((Ge,Ye)=>Ye===0?`    ${Ge}`:Ge)),""],...Ne.length===0?["  Everything configured is active."]:["  Not active",...Ne.flatMap((Je)=>ur(Je,"      ",re-6).map((Ge,Ye)=>Ye===0?`    ${Oe} ${Ge}`:Ge)),"","  Full report: cc-safety-net doctor"]].join(`
`))}import{spawn as jp}from"node:child_process";import{randomBytes as Mw}from"node:crypto";import{existsSync as Uw}from"node:fs";import{createServer as Gw}from"node:http";import{Writable as Bw}from"node:stream";var jo=500;function Ow(_){let N=_.filter((Y)=>Y.decision!=="allow"),j=_.filter((Y)=>Y.decision==="allow"),J=Math.min(N.length,Math.max(jo-j.length,Math.ceil(jo/2)));return[...N.slice(0,J),...j.slice(0,jo-J)]}function Ep(_,N,j=U(_)){if(j)K(_,j);let J=(Ge)=>new Date(Ge.getFullYear(),Ge.getMonth(),Ge.getDate()).getTime(),Y=J(new Date),re=new Date(Y);re.setDate(re.getDate()-(N-1));let ie=re.getTime(),de=[],fe={count:0};for(let Ge of j?zn(j,fe):[])for(let Ye of It(Ge,fe)){let rn=new Date(Ye.ts).getTime();if(!Number.isFinite(rn))continue;if(rn>=ie)de.push(Ye)}de.sort((Ge,Ye)=>new Date(Ye.ts).getTime()-new Date(Ge.ts).getTime());let ke=Array.from({length:N},()=>0),Ce=Array.from({length:N},()=>0),Re={},Ee={},Ne={},Oe=0,Je=0;for(let Ge of de){let Ye=Ge.agent||"unknown";Re[Ye]=(Re[Ye]??0)+1;let rn=Math.round((Y-J(new Date(Ge.ts)))/86400000),on=N-1-rn,sn=rn>=0&&rn<N;if(sn)Ce[on]=(Ce[on]??0)+1;if(Ge.decision!=="allow"){if(Oe++,Ge.ruleId)Ee[Ge.ruleId]=(Ee[Ge.ruleId]??0)+1;let tn=Mo(Ge.segment||Ge.command);if(tn)Ne[tn]=(Ne[tn]??0)+1;if(Ge.failureStage)Je++;if(sn)ke[on]=(ke[on]??0)+1}}return{days:N,logsDir:j,homeDir:_.home,totalInWindow:de.length,truncated:de.length>jo,unreadable:fe.count,counts:{blocked:Oe,allowed:de.length-Oe,agents:Re,blockedByDay:ke,analyzedByDay:Ce,rules:Ee,commands:Ne,errors:Je},entries:Ow(de).sort((Ge,Ye)=>new Date(Ye.ts).getTime()-new Date(Ge.ts).getTime())}}import{spawn as Iw}from"node:child_process";import{existsSync as $w,statSync as _p}from"node:fs";import{delimiter as Dw,join as Lw}from"node:path";var Nw=120000,Ho="Choose the project folder",jw=`try
  return POSIX path of (choose folder with prompt "${Ho}")
on error number -128
  return ""
end try`,Hw=`Add-Type -AssemblyName System.Windows.Forms
$dialog = New-Object System.Windows.Forms.FolderBrowserDialog
$dialog.Description = '${Ho}'
if ($dialog.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) { [Console]::Out.Write($dialog.SelectedPath) }`,Tp=[{binary:"zenity",args:["--file-selection","--directory",`--title=${Ho}`]},{binary:"kdialog",args:["--getexistingdirectory",".","--title",Ho]}],Ap=(_,N)=>(N.PATH??"").split(Dw).some((j)=>{if(j.length===0)return!1;try{let J=_p(Lw(j,_));return J.isFile()&&(J.mode&73)!==0}catch{return!1}});function Ls(_,N){if(_==="darwin"||_==="win32")return!0;if(_!=="linux")return!1;if(!N.DISPLAY&&!N.WAYLAND_DISPLAY)return!1;return Tp.some((j)=>Ap(j.binary,N))}function Fw(_,N){if(_==="darwin")return{cmd:"osascript",args:["-e",jw]};if(_==="win32")return{cmd:"powershell.exe",args:["-NoProfile","-STA","-Command",Hw]};let j=Tp.find((J)=>Ap(J.binary,N));return j?{cmd:j.binary,args:j.args}:null}function Ns(_=process.platform,N=process.env){let j=Fw(_,N);if(!j)return Promise.resolve({error:"No folder dialog is available on this system"});return new Promise((J)=>{let Y=Iw(j.cmd,j.args,{env:N,stdio:["ignore","pipe","pipe"]}),re="",ie=!1,de=(ke)=>{if(ie)return;ie=!0,clearTimeout(fe),J(ke)},fe=setTimeout(()=>{Y.kill(),de({error:"The folder dialog timed out"})},Nw);Y.stdout.on("data",(ke)=>{re+=ke.toString()}),Y.on("error",()=>de({error:`Could not open the folder dialog (${j.cmd})`})),Y.on("close",()=>{let ke=re.trim().replace(/\/+$/,"");if(!ke)return de({cancelled:!0});if(!$w(ke)||!_p(ke).isDirectory())return de({error:"That selection is not a folder on disk"});de({path:ke})})})}var Op=`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CC Safety Net</title>
  <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22512%22%20height%3D%22512%22%20viewBox%3D%220%200%20512%20512%22%3E%3Crect%20width%3D%22512%22%20height%3D%22512%22%20rx%3D%22112%22%20fill%3D%22%2317161b%22%2F%3E%3Csvg%20x%3D%2240%22%20y%3D%2240%22%20width%3D%22432%22%20height%3D%22432%22%20viewBox%3D%22-172.38%20-172.38%20824.77%20824.77%22%3E%3Cg%20transform%3D%22rotate(45%20240%20240)%22%3E%3Crect%20x%3D%22-30%22%20y%3D%2214%22%20width%3D%22195%22%20height%3D%2252%22%20rx%3D%229%22%20fill%3D%22%23f5f4f0%22%2F%3E%3Crect%20x%3D%22315%22%20y%3D%2214%22%20width%3D%22195%22%20height%3D%2252%22%20rx%3D%229%22%20fill%3D%22%23f5f4f0%22%2F%3E%3Crect%20x%3D%22-30%22%20y%3D%2294%22%20width%3D%22115%22%20height%3D%2252%22%20rx%3D%229%22%20fill%3D%22%23f5f4f0%22%2F%3E%3Crect%20x%3D%22235%22%20y%3D%2294%22%20width%3D%22170%22%20height%3D%2252%22%20rx%3D%229%22%20fill%3D%22%23f5f4f0%22%2F%3E%3Crect%20x%3D%22155%22%20y%3D%22174%22%20width%3D%22170%22%20height%3D%2252%22%20rx%3D%229%22%20fill%3D%22%23f5f4f0%22%2F%3E%3Crect%20x%3D%2275%22%20y%3D%22254%22%20width%3D%22170%22%20height%3D%2252%22%20rx%3D%229%22%20fill%3D%22%23f5f4f0%22%2F%3E%3Crect%20x%3D%22395%22%20y%3D%22254%22%20width%3D%22115%22%20height%3D%2252%22%20rx%3D%229%22%20fill%3D%22%23f5f4f0%22%2F%3E%3Crect%20x%3D%22-30%22%20y%3D%22334%22%20width%3D%22195%22%20height%3D%2252%22%20rx%3D%229%22%20fill%3D%22%23f5f4f0%22%2F%3E%3Crect%20x%3D%22315%22%20y%3D%22334%22%20width%3D%22195%22%20height%3D%2252%22%20rx%3D%229%22%20fill%3D%22%23f5f4f0%22%2F%3E%3Crect%20x%3D%22-30%22%20y%3D%22414%22%20width%3D%22115%22%20height%3D%2252%22%20rx%3D%229%22%20fill%3D%22%23f5f4f0%22%2F%3E%3Crect%20x%3D%22235%22%20y%3D%22414%22%20width%3D%22170%22%20height%3D%2252%22%20rx%3D%229%22%20fill%3D%22%23f5f4f0%22%2F%3E%3Crect%20x%3D%2214%22%20y%3D%22155%22%20width%3D%2252%22%20height%3D%22170%22%20rx%3D%229%22%20fill%3D%22%23e5602a%22%2F%3E%3Crect%20x%3D%2294%22%20y%3D%2275%22%20width%3D%2252%22%20height%3D%22170%22%20rx%3D%229%22%20fill%3D%22%23e5602a%22%2F%3E%3Crect%20x%3D%2294%22%20y%3D%22395%22%20width%3D%2252%22%20height%3D%22115%22%20rx%3D%229%22%20fill%3D%22%23e5602a%22%2F%3E%3Crect%20x%3D%22174%22%20y%3D%22-30%22%20width%3D%2252%22%20height%3D%22195%22%20rx%3D%229%22%20fill%3D%22%23e5602a%22%2F%3E%3Crect%20x%3D%22174%22%20y%3D%22315%22%20width%3D%2252%22%20height%3D%22195%22%20rx%3D%229%22%20fill%3D%22%23e5602a%22%2F%3E%3Crect%20x%3D%22254%22%20y%3D%22-30%22%20width%3D%2252%22%20height%3D%22115%22%20rx%3D%229%22%20fill%3D%22%23e5602a%22%2F%3E%3Crect%20x%3D%22254%22%20y%3D%22235%22%20width%3D%2252%22%20height%3D%22170%22%20rx%3D%229%22%20fill%3D%22%23e5602a%22%2F%3E%3Crect%20x%3D%22334%22%20y%3D%22155%22%20width%3D%2252%22%20height%3D%22170%22%20rx%3D%229%22%20fill%3D%22%23e5602a%22%2F%3E%3Crect%20x%3D%22414%22%20y%3D%2275%22%20width%3D%2252%22%20height%3D%22170%22%20rx%3D%229%22%20fill%3D%22%23e5602a%22%2F%3E%3Crect%20x%3D%22414%22%20y%3D%22395%22%20width%3D%2252%22%20height%3D%22115%22%20rx%3D%229%22%20fill%3D%22%23e5602a%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%3C%2Fsvg%3E%0A">
  <script>
    (() => {
      const stored = localStorage.getItem('cc-safety-net-theme');
      if (stored === 'light' || stored === 'dark') document.documentElement.style.colorScheme = stored;
    })();
  </script>
  <style>
:root {
  color-scheme: light dark;

  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  --bg: light-dark(#f2f2f3, #0f0f10);
  --surface: light-dark(#ffffff, #19191b);
  --sidebar: light-dark(#fafafa, #121213);
  --field-bg: light-dark(#ffffff, #141414);
  --fill: light-dark(rgb(0 0 0 / 4%), rgb(255 255 255 / 6%));
  --hover: light-dark(rgb(0 0 0 / 4.5%), rgb(255 255 255 / 5%));
  --selected: light-dark(rgb(0 0 0 / 7%), rgb(255 255 255 / 9%));
  --pill-on: light-dark(#ffffff, #444448);
  --line: light-dark(rgb(0 0 0 / 8%), rgb(255 255 255 / 8%));
  --line-strong: light-dark(rgb(0 0 0 / 14%), rgb(255 255 255 / 13%));
  --ring: light-dark(rgb(0 0 0 / 10%), rgb(255 255 255 / 10%));

  --ink: light-dark(#18181b, #f0f0f0);
  --muted: light-dark(#5c5f66, #b3b3b3);
  --faint: light-dark(#7c8088, #8c8c8c);
  --on-ink: light-dark(#ffffff, #141414);

  --switch-off: light-dark(#c4c7cc, #4a4a4a);
  --switch-on: light-dark(#16a34a, #22c55e);
  --focus-ring: light-dark(#2563eb, #6ea2ff);
  --accent: light-dark(#16a34a, #22c55e);
  --danger: light-dark(#b91c1c, #dc2626);
  --danger-hover: light-dark(#991b1b, #b91c1c);
  --star: light-dark(#b7791f, #f2c94c);

  --ok-fg: light-dark(#15803d, #4ade80);
  --ok-bg: light-dark(#effaf3, rgb(74 222 128 / 10%));
  --ok-border: light-dark(#bfe6cc, rgb(74 222 128 / 25%));
  --err-fg: light-dark(#b42318, #ff8a80);
  --err-bg: light-dark(#fef3f2, rgb(255 138 128 / 10%));
  --err-border: light-dark(#f4cdc8, rgb(255 138 128 / 25%));
  --warn-fg: light-dark(#a14a06, #fbbf24);
  --warn-bg: light-dark(#fffaeb, rgb(251 191 36 / 10%));
  --warn-border: light-dark(#f3dfb0, rgb(251 191 36 / 25%));
  --info-fg: light-dark(#1d4ed8, #93c5fd);
  --info-bg: light-dark(#eff5ff, rgb(147 197 253 / 10%));
  --info-border: light-dark(#c8d9f7, rgb(147 197 253 / 25%));
  --paranoid-fg: light-dark(#7e22ce, #d8b4fe);
  --paranoid-bg: light-dark(#faf5ff, rgb(216 180 254 / 10%));
  --paranoid-border: light-dark(#e6d1f5, rgb(216 180 254 / 25%));

  --radius-sm: 6px;
  --radius: 8px;
  --radius-lg: 12px;
  --control-h: 32px;
  --row-x: 12px;
  --card-x: 16px;
  --shadow-float: 0 0 0 1px var(--line-strong), 0 8px 24px rgb(0 0 0 / 16%);

  font-family: var(--font-sans);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-size: 14px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

[hidden] {
  display: none !important;
}

a {
  color: inherit;
}

p,
h1,
h2,
h3,
h4,
ul,
dl,
dd {
  margin: 0;
}

ul {
  padding: 0;
  list-style: none;
}

code,
.mono {
  font-family: var(--font-mono);
  font-size: 13px;
}

p code,
small code,
.empty code {
  padding: 1px 5px;
  border-radius: 4px;
  background: var(--fill);
  font-size: 12.5px;
}

strong {
  font-weight: 600;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.muted {
  color: var(--muted);
}

.count {
  color: var(--faint);
  font-size: 13px;
  font-weight: 400;
  font-variant-numeric: tabular-nums;
}

:where(a, button, summary, [tabindex], input[type='checkbox'], input[type='radio']):focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}

:where(input[type='search'], input[type='text'], input[type='number'], textarea, select):focus {
  border-color: var(--focus-ring);
  outline: none;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--focus-ring) 20%, transparent);
}

.app-shell {
  display: grid;
  grid-template-columns: 232px minmax(0, 1fr);
  min-height: 100vh;
}

.sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 18px 10px;
  border-right: 1px solid var(--line);
  background: var(--sidebar);
}

.brand {
  padding: 0 10px;
}

.brand-logo {
  display: flex;
  color: light-dark(#17161b, #f5f4f0);
}

.brand-home {
  display: flex;
}

.brand-logo svg {
  width: auto;
  height: 28px;
}

.sidenav {
  display: grid;
  gap: 1px;
}

.sidenav a {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 32px;
  padding: 0 10px;
  border-radius: var(--radius-sm);
  color: var(--muted);
  font-weight: 500;
  text-decoration: none;
}

.sidenav a:hover {
  background: var(--hover);
  color: var(--ink);
}

.sidenav a[aria-current='page'] {
  background: var(--selected);
  color: var(--ink);
}

.sidenav svg {
  width: 16px;
  height: 16px;
  flex: none;
}

.nav-dirty {
  margin-left: auto;
  padding: 0 7px;
  border-radius: 999px;
  background: var(--warn-bg);
  color: var(--warn-fg);
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
}

.sidebar-foot {
  margin-top: auto;
  display: grid;
  gap: 4px;
  padding: 0 10px;
  font-size: 13px;
}

.sidebar-foot a,
.app-foot a {
  color: var(--faint);
  text-decoration: none;
}

.sidebar-foot a:hover,
.app-foot a:hover {
  color: var(--ink);
}

.app-foot {
  display: none;
}

.content {
  min-width: 0;
}

main {
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 36px 40px 72px;
  display: grid;
  gap: 28px;
}

.view {
  display: grid;
  gap: 28px;
  min-width: 0;
}

.page-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px 20px;
}

.page-head:has(> .icon-button) {
  flex-wrap: nowrap;
  align-items: flex-start;
}

.page-head h2 {
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 30px;
}

.page-head p {
  margin-top: 2px;
  color: var(--muted);
}

.section {
  display: grid;
  gap: 10px;
  min-width: 0;
}

.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px 16px;
  min-height: 24px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.section-sub {
  margin-top: 2px;
  color: var(--muted);
  font-size: 13px;
}

.section-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card {
  min-width: 0;
  border-radius: var(--radius-lg);
  background: var(--surface);
  box-shadow: 0 0 0 1px var(--ring);
}

.card.pad {
  padding: var(--card-x);
}

.card.list {
  display: grid;
  padding: 4px;
}

.card.rows {
  padding: 0 var(--card-x);
}

.panel {
  display: grid;
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px 16px;
  padding: 14px var(--card-x) 14px 20px;
  border-bottom: 1px solid var(--line);
}

.panel-head > div:first-child {
  flex: 1 1 0;
  min-width: 0;
}

.panel-list {
  display: grid;
  padding: 4px;
}

.panel-rows {
  padding: 0 var(--card-x) 0 20px;
}

.list-row {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 40px;
  padding: 6px var(--row-x);
  border-radius: var(--radius);
  color: inherit;
  text-decoration: none;
}

a.list-row:hover,
button.list-row:hover:not(:disabled) {
  background: var(--hover);
}

.setting-row {
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 56px;
  padding: 12px 0;
}

.setting-row + .setting-row,
#safety-overrides + #workflow,
.path-list + .path-list {
  border-top: 1px solid var(--line);
}

#safety-overrides .setting-row:first-child {
  border-top: 0;
}

.setting-row.info {
  align-items: baseline;
  min-height: 48px;
}

.setting-text {
  display: grid;
  flex: 1;
  gap: 1px;
  min-width: 0;
}

label.setting-text {
  cursor: pointer;
}

.setting-text strong {
  font-weight: 500;
}

.setting-text small {
  color: var(--muted);
  font-size: 13px;
}

.setting-label {
  flex: none;
  width: 140px;
  color: var(--muted);
}

.setting-row.info code {
  flex: 1;
  min-width: 0;
}

.setting-row.info button {
  align-self: center;
}

.path-part {
  display: inline-block;
  max-width: 100%;
  overflow-wrap: anywhere;
}

.icon-button {
  width: var(--control-h);
  padding: 0;
}

.icon-button svg {
  width: 16px;
  height: 16px;
}

.banner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 16px;
  padding: 12px 16px;
  border: 1px solid var(--err-border);
  border-radius: var(--radius);
  background: var(--err-bg);
  color: var(--err-fg);
}

.banner p {
  flex: 1 1 100%;
}

.banner a {
  font-weight: 600;
}

button,
.star-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: var(--control-h);
  padding: 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--ink);
  font: inherit;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
}

button:hover:not(:disabled),
.star-cta:hover {
  background: var(--hover);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button svg {
  width: 15px;
  height: 15px;
  flex: none;
}

button.primary {
  border-color: var(--ink);
  background: var(--ink);
  color: var(--on-ink);
}

button.primary:hover:not(:disabled) {
  border-color: color-mix(in srgb, var(--ink) 85%, var(--bg));
  background: color-mix(in srgb, var(--ink) 85%, var(--bg));
}

button.danger {
  border-color: var(--danger);
  background: var(--danger);
  color: #fff;
}

button.danger:hover:not(:disabled) {
  border-color: var(--danger-hover);
  background: var(--danger-hover);
}

button.danger-quiet {
  color: var(--err-fg);
}

button.danger-quiet:hover:not(:disabled) {
  border-color: var(--err-border);
  background: var(--err-bg);
}

button.quiet {
  border-color: transparent;
  color: var(--muted);
}

button.quiet:hover:not(:disabled) {
  color: var(--ink);
}

button.small {
  height: 26px;
  padding: 0 8px;
  font-size: 13px;
}

button.icon-only {
  width: 28px;
  height: 28px;
  padding: 0;
}

.link-button,
.row-action {
  flex: none;
  color: var(--muted);
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
}

.link-button::after,
.row-action::after {
  content: ' →';
}

.link-button:hover,
.list-row:hover .row-action {
  color: var(--ink);
}

input[type='search'],
input[type='text'],
input[type='number'],
textarea,
select {
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--field-bg);
  color: var(--ink);
  font: inherit;
}

input[type='search'],
input[type='text'],
input[type='number'],
select {
  height: var(--control-h);
}

input[type='search'],
input[type='text'],
textarea {
  width: 100%;
  padding: 0 10px;
}

input.mono {
  font-family: var(--font-mono);
  font-size: 13px;
}

textarea {
  min-height: 96px;
  padding: 8px 10px;
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.55;
  resize: vertical;
}

select {
  padding: 0 8px;
  cursor: pointer;
}

input::placeholder,
textarea::placeholder {
  color: var(--faint);
}

input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

input[readonly] {
  color: var(--muted);
}

.input-row {
  display: flex;
  gap: 8px;
}

.input-row input {
  flex: 1 1 auto;
  min-width: 0;
}

.switch {
  appearance: none;
  position: relative;
  flex: none;
  width: 34px;
  height: 20px;
  margin: 0;
  border-radius: 999px;
  background: var(--switch-off);
  cursor: pointer;
}

.switch::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 25%);
}

.switch:checked {
  background: var(--switch-on);
}

.switch:checked::before {
  transform: translateX(14px);
}

.switch:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pills {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2px;
  padding: 3px;
  border-radius: var(--radius);
  background: var(--fill);
  box-shadow: inset 0 0 0 1px var(--line);
}

.pills button {
  height: 26px;
  padding: 0 10px;
  border: 0;
  border-radius: var(--radius-sm);
  color: var(--muted);
  font-size: 13px;
}

.pills button:hover:not(:disabled) {
  background: transparent;
  color: var(--ink);
}

.pills button[aria-pressed='true'],
.pills button[aria-pressed='true']:hover:not(:disabled) {
  background: var(--pill-on);
  color: var(--ink);
  box-shadow:
    0 0 0 1px var(--line-strong),
    0 1px 2px rgb(0 0 0 / 12%);
}

.pills button[aria-pressed='true'] .count {
  color: var(--muted);
}

.pills .count {
  margin-left: 2px;
  font-size: 12.5px;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.toolbar-spacer {
  flex: 1;
}

.toolbar-search {
  position: relative;
  flex: 0 1 300px;
  min-width: 200px;
}

.toolbar-search svg {
  position: absolute;
  top: 50%;
  left: 11px;
  width: 16px;
  height: 16px;
  color: var(--muted);
  pointer-events: none;
  transform: translateY(-50%);
}

.toolbar-search input[type='search'] {
  padding-left: 34px;
  border-color: var(--line-strong);
  background: var(--surface);
}

.toolbar-search input::placeholder {
  color: var(--muted);
}

.toolbar-search:focus-within svg {
  color: var(--ink);
}

.primary-search {
  flex: 1 1 420px;
  max-width: 560px;
}

.primary-search input[type='search'] {
  height: 36px;
  font-size: 14px;
}

.policy-toolbar .pills button {
  height: 30px;
}

.policy-toolbar {
  position: sticky;
  top: 0;
  z-index: 20;
  margin: -12px -8px;
  padding: 12px 8px;
  background: var(--bg);
}

.filter-line {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: -16px;
  color: var(--muted);
  font-size: 13px;
}

.notice {
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--fill);
  white-space: pre-wrap;
}

.notice.ok {
  border-color: var(--ok-border);
  background: var(--ok-bg);
  color: var(--ok-fg);
}

.notice.error {
  border-color: var(--err-border);
  background: var(--err-bg);
  color: var(--err-fg);
}

.notice.warn {
  border-color: var(--warn-border);
  background: var(--warn-bg);
  color: var(--warn-fg);
}

.notice a {
  font-weight: 500;
}

.notices {
  display: grid;
  gap: 8px;
}

.field-error {
  color: var(--err-fg);
  font-size: 13px;
  overflow-wrap: anywhere;
}

.empty {
  padding: 24px 16px;
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius-lg);
  color: var(--muted);
  text-align: center;
}

.card .empty {
  border: 0;
}

.footnote {
  margin-top: -16px;
  color: var(--faint);
  font-size: 13px;
}

.footnote:empty {
  display: none;
}

.status-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
}

.status-headline {
  font-size: 17px;
  font-weight: 600;
}

.status-facts {
  margin-top: 2px;
  color: var(--muted);
}

.attention-row {
  justify-content: space-between;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.tiles:empty {
  display: none;
}

.tile {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  border-radius: var(--radius-lg);
  background: var(--surface);
  box-shadow: 0 0 0 1px var(--ring);
}

.tile span {
  color: var(--muted);
  font-size: 13px;
}

.tile strong {
  display: block;
  margin-top: 4px;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.2;
  font-variant-numeric: tabular-nums;
}

.tile-spark {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  width: min(45%, 160px);
  height: 34px;
}

.spark-bar {
  flex: 1 1 0;
  border-radius: 2px;
  background: var(--accent);
}

.spark-bar.spark-zero {
  background: var(--line-strong);
}

.compact-row,
.rule-count-row {
  align-content: center;
  align-items: baseline;
}

.compact-row {
  display: grid;
  grid-template-columns: 80px 110px minmax(0, 3fr) minmax(0, 2fr);
}

.compact-row time {
  color: var(--faint);
  font-size: 13px;
  white-space: nowrap;
}

.rule-count-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 72px;
}

.rule-count-row .count {
  text-align: right;
}

.rule-label {
  font-weight: 500;
}

.feed-agent {
  overflow: hidden;
  color: var(--muted);
  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.feed-command {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.feed-rule {
  max-width: 30ch;
  overflow: hidden;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 12.5px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.day-heading {
  padding: 12px var(--row-x) 4px;
  color: var(--faint);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.day-heading:first-child {
  padding-top: 8px;
}

.feed-row {
  border-radius: var(--radius);
}

.feed-row:has(> [aria-expanded='true']) {
  background: var(--fill);
}

.feed-summary {
  display: grid;
  grid-template-columns: 16px 68px 76px 112px minmax(0, 3fr) minmax(0, 2fr);
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 40px;
  padding: 0 var(--row-x);
  border: 0;
  border-radius: var(--radius);
  font-weight: 400;
  text-align: left;
}

.feed-summary time {
  color: var(--faint);
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.decision {
  justify-self: start;
  padding: 0 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
}

.decision.deny {
  background: var(--err-bg);
  color: var(--err-fg);
}

.decision.allow {
  background: var(--ok-bg);
  color: var(--ok-fg);
}

.decision.error {
  background: var(--warn-bg);
  color: var(--warn-fg);
}

.feed-detail {
  display: grid;
  gap: 12px;
  padding: 4px var(--row-x) 14px;
}

code.block {
  display: block;
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  background: var(--surface);
  box-shadow: 0 0 0 1px var(--line);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.detail-rows {
  display: grid;
  gap: 4px;
}

.detail-rows div {
  display: grid;
  grid-template-columns: 96px minmax(0, 1fr);
  gap: 12px;
}

.detail-rows dt {
  color: var(--faint);
}

.detail-rows dd {
  overflow-wrap: anywhere;
}

.detail-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.detail-actions button:not(.primary) {
  background: var(--surface);
}

.rule-id {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 12.5px;
}

a.rule-id {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: var(--line-strong);
  text-underline-offset: 3px;
}

a.rule-id:hover {
  text-decoration-color: currentColor;
}

.project-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: -12px;
  padding: 12px 16px;
  border: 1px solid var(--info-border);
  border-radius: var(--radius);
  background: var(--info-bg);
}

.project-bar code {
  overflow-wrap: anywhere;
}

.project-bar p {
  margin-top: 2px;
  color: var(--muted);
  font-size: 13px;
}

.project-chip {
  flex: none;
  height: 22px;
  padding: 0 8px;
  border: 0;
  border-radius: 999px;
  background: var(--info-bg);
  color: var(--info-fg);
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
}

button.project-chip:hover:not(:disabled) {
  background: var(--info-bg);
  text-decoration: line-through;
}

.project-chip.inherited {
  background: var(--fill);
  color: var(--faint);
  font-weight: 400;
}

.project-chip-slot:empty {
  display: none;
}

.recovery {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  border: 1px solid var(--err-border);
  border-radius: var(--radius-lg);
  background: var(--surface);
}

.recovery p {
  margin-top: 4px;
}

.page-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.tester-dialog {
  width: min(600px, calc(100vw - 32px));
}

.prompt-field {
  display: flex;
  flex: 1;
  align-items: center;
  min-width: 0;
  height: var(--control-h);
  padding-left: 10px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--field-bg);
  cursor: text;
}

.prompt-field:focus-within {
  border-color: var(--focus-ring);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--focus-ring) 20%, transparent);
}

.prompt {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 13px;
}

.prompt-field input[type='text'] {
  height: 100%;
  padding: 0 10px 0 8px;
  border: 0;
  background: transparent;
}

.prompt-field input[type='text']:focus {
  box-shadow: none;
}

.tester-segment {
  margin-top: 6px;
}

.preset-status {
  margin-left: auto;
  color: var(--info-fg);
  font-size: 13px;
  font-weight: 500;
}

.preset-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.preset-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-content: start;
  gap: 2px 10px;
  padding: 14px 16px;
  border-radius: var(--radius-lg);
  background: var(--surface);
  box-shadow: 0 0 0 1px var(--ring);
  cursor: pointer;
}

.preset-card:hover {
  box-shadow: 0 0 0 1px var(--line-strong);
}

.preset-card input {
  margin: 4px 0 0;
  accent-color: var(--preset-fg);
}

.preset-name {
  font-weight: 600;
}

.preset-description {
  grid-column: 2;
  color: var(--muted);
  font-size: 13px;
}

.preset-standard {
  --preset-fg: var(--ok-fg);
  --preset-bg: var(--ok-bg);
  --preset-border: var(--ok-border);
}

.preset-strict {
  --preset-fg: var(--info-fg);
  --preset-bg: var(--info-bg);
  --preset-border: var(--info-border);
}

.preset-paranoid {
  --preset-fg: var(--paranoid-fg);
  --preset-bg: var(--paranoid-bg);
  --preset-border: var(--paranoid-border);
}

.preset-card:has(input:checked) {
  background: var(--preset-bg);
  box-shadow: 0 0 0 1px var(--preset-border);
}

.preset-card:has(input:checked) .preset-name {
  color: var(--preset-fg);
}

details > summary {
  display: flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  list-style: none;
  cursor: pointer;
}

details > summary::-webkit-details-marker {
  display: none;
}

details > summary::before,
.chevron::before {
  content: '';
  width: 6px;
  height: 6px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: translateX(-1px) rotate(-45deg);
}

details > summary::before {
  flex: none;
  margin: 0 4px;
}

details[open] > summary::before,
[aria-expanded='true'] > .chevron::before {
  transform: translateY(-1px) rotate(45deg);
}

.disclosure > summary {
  gap: 10px;
  width: auto;
  min-height: 48px;
  padding: 0 var(--card-x) 0 calc(var(--row-x) + 4px);
  border-radius: var(--radius-lg);
  font-weight: 600;
}

.disclosure > summary:hover {
  background: var(--hover);
}

.disclosure > summary::before {
  color: var(--faint);
}

.disclosure[open] > summary {
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.disclosure-sub {
  overflow: hidden;
  color: var(--faint);
  font-size: 13px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.disclosure-body {
  padding: 0 var(--card-x) 4px 38px;
  border-top: 1px solid var(--line);
}

#environment-overrides {
  font-size: 13px;
}

.master-switch {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.master-state::after {
  content: 'Off';
  color: var(--err-fg);
  font-size: 13px;
  font-weight: 500;
}

.master-switch:has(:checked) .master-state::after {
  content: 'On';
  color: var(--muted);
}

.is-off .section-sub {
  color: var(--err-fg);
}

.rule-group + .rule-group {
  margin-top: 2px;
}

.rule-group-head {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  padding: 0 var(--row-x);
  border-radius: var(--radius);
}

.rule-group-head:hover {
  background: var(--hover);
}

.group-toggle {
  flex: 1;
  align-self: stretch;
  justify-content: flex-start;
  gap: 8px;
  height: auto;
  padding: 0;
  border: 0;
  border-radius: 0;
  font-weight: 600;
  text-align: left;
}

.group-toggle:hover:not(:disabled) {
  background: transparent;
}

.group-counts {
  margin-left: auto;
  color: var(--faint);
  font-size: 13px;
  font-weight: 400;
}

.off-count {
  color: var(--warn-fg);
}

.chevron {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: var(--faint);
}

.rule-list {
  padding-bottom: 4px;
}

.rule-row {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px var(--row-x) 10px calc(var(--row-x) + 24px);
  border-radius: var(--radius);
}

.rule-row > .switch {
  margin-top: 1px;
}

.rule-row:hover {
  background: var(--hover);
}

.rule-row.row-disabled .rule-body {
  opacity: 0.5;
}

.rule-body {
  flex: 1;
  min-width: 0;
}

.rule-line {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px 10px;
  min-height: 22px;
}

.rule-line .quiet.small {
  height: 22px;
  margin-left: -4px;
  padding: 0 6px;
}

.rule-name {
  font-weight: 500;
}

.rule-description {
  margin-top: 2px;
  color: var(--muted);
  font-size: 13px;
}

.tier-badge {
  align-self: center;
  padding: 0 7px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
}

.tier-badge.strict {
  background: var(--info-bg);
  color: var(--info-fg);
}

.tier-badge.paranoid {
  background: var(--paranoid-bg);
  color: var(--paranoid-fg);
}

.rule-note {
  color: var(--faint);
  font-size: 13px;
}

.rule-note::before {
  content: '· ';
}

.rule-note.changed {
  color: var(--warn-fg);
}

.rule-note.strict {
  color: var(--info-fg);
}

.rule-note.paranoid {
  color: var(--paranoid-fg);
}

.rule-note:empty {
  display: none;
}

.lock {
  display: inline-flex;
  flex: none;
  justify-content: center;
  width: 34px;
  height: 22px;
  align-items: center;
  color: var(--faint);
}

.lock svg {
  width: 15px;
  height: 15px;
}

.info-button,
.info-spacer {
  flex: none;
  width: 26px;
  height: 26px;
}

.info-button {
  margin: -2px -4px 0 0;
  padding: 0;
  border: 0;
  border-radius: 50%;
  color: var(--faint);
}

.info-button:hover:not(:disabled) {
  background: var(--hover);
  color: var(--ink);
}

.info-button svg {
  width: 16px;
  height: 16px;
}

.path-list {
  display: grid;
  gap: 8px;
  padding: 16px 0;
}

.path-list-head {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.path-list-head strong {
  font-weight: 500;
}

.path-list-help {
  margin-top: -6px;
  color: var(--muted);
  font-size: 13px;
}

.paths {
  display: grid;
  gap: 4px;
}

.paths:empty {
  display: none;
}

.path-item {
  display: flex;
  align-items: center;
  gap: 8px;
  height: var(--control-h);
  padding: 0 2px 0 10px;
  border-radius: var(--radius-sm);
  background: var(--fill);
}

.path-item code {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.path-item.row-disabled code {
  opacity: 0.5;
}

.json-body {
  position: relative;
  display: grid;
  padding: var(--card-x);
}

.json-body button {
  position: absolute;
  top: calc(var(--card-x) + 6px);
  right: calc(var(--card-x) + 6px);
  height: 28px;
  padding: 0 8px;
}

#raw {
  min-height: 300px;
}

.savebar {
  position: sticky;
  bottom: 16px;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 10px 10px 18px;
  border-radius: var(--radius-lg);
  background: var(--surface);
  box-shadow: var(--shadow-float);
}

.savebar-text {
  display: grid;
  min-width: 0;
}

.savebar-text strong {
  font-weight: 500;
}

.savebar-text span {
  overflow: hidden;
  color: var(--muted);
  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.savebar-actions {
  display: flex;
  gap: 8px;
}

.rulebook {
  display: grid;
  gap: 8px;
}

.rulebook + .rulebook {
  margin-top: 16px;
}

.rulebook-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 4px 12px;
  color: var(--muted);
  font-size: 13px;
}

.rulebook-head strong {
  color: var(--ink);
  font-size: 14px;
}

.rulebook-rule {
  display: grid;
  gap: 4px;
}

.rulebook-rule.focused {
  margin: 0 calc(-1 * var(--card-x));
  padding-right: var(--card-x);
  padding-left: calc(var(--card-x) - 3px);
  border-left: 3px solid var(--focus-ring);
  background: var(--fill);
}

.rulebook-rule-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 12px;
}

.rulebook-rule .command {
  font-weight: 600;
}

.rulebook-rule p.muted {
  font-size: 13px;
}

.form-grid {
  display: grid;
  gap: 18px;
}

.field {
  display: grid;
  gap: 6px;
}

.field-label {
  font-weight: 500;
}

.field .pills {
  justify-self: start;
}

.field small {
  color: var(--muted);
  font-size: 13px;
}

#rules-composer-input {
  font-family: var(--font-sans);
  font-size: 14px;
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
}

.chip-row-label {
  color: var(--faint);
  font-size: 13px;
}

button.chip {
  height: 26px;
  padding: 0 10px;
  border: 0;
  border-radius: 999px;
  background: var(--fill);
  color: var(--muted);
  font-size: 13px;
}

button.chip:hover:not(:disabled) {
  background: var(--selected);
  color: var(--ink);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}

.agent-groups {
  display: grid;
  gap: 28px;
}

.agent-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 200px) 130px 96px;
  align-items: baseline;
  gap: 4px 16px;
}

.agent-name {
  font-weight: 500;
}

.agent-version {
  overflow: hidden;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 12.5px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.agent-status {
  color: var(--muted);
  font-size: 13px;
}

.agent-status.active {
  color: var(--ok-fg);
}

.agent-status.disabled {
  color: var(--warn-fg);
}

.agent-action {
  justify-self: end;
}

.agent-row .notice {
  grid-column: 1 / -1;
}

.missing-agents summary {
  color: var(--muted);
  font-size: 13px;
  font-weight: 500;
}

.missing-agents summary:hover {
  color: var(--ink);
}

.retention-input {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
}

.retention-input input {
  width: 72px;
  padding: 0 8px;
  text-align: right;
}

#project-policy-notice {
  font-size: 13px;
}

.toast {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 200;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  width: min(400px, calc(100vw - 32px));
  padding: 12px 8px 12px 14px;
  border-radius: var(--radius-lg);
  background: var(--surface);
  box-shadow: var(--shadow-float);
}

.toast::before {
  content: '';
  flex: none;
  width: 8px;
  height: 8px;
  margin-top: 6px;
  border-radius: 50%;
  background: var(--faint);
}

.toast.ok::before {
  background: var(--ok-fg);
}

.toast.error::before {
  background: var(--err-fg);
}

.toast-text {
  flex: 1;
  min-width: 0;
}

.toast-text strong {
  font-weight: 500;
}

.toast-text p {
  margin-top: 2px;
  color: var(--muted);
  font-size: 13px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.toast .icon-only {
  margin-top: -3px;
  border: 0;
  color: var(--faint);
}

.rule-example-popover,
.confirm-dialog {
  border: 0;
  border-radius: var(--radius-lg);
  background: var(--surface);
  color: var(--ink);
}

.rule-example-popover {
  position: fixed;
  inset: auto;
  width: min(380px, calc(100vw - 24px));
  margin: 0;
  padding: 14px;
  box-shadow: var(--shadow-float);
}

.rule-example-popover::backdrop {
  background: transparent;
}

.rule-example-popover > * {
  display: block;
}

.rule-example-label {
  color: var(--faint);
  font-size: 12px;
}

.rule-example-popover strong {
  margin-top: 2px;
  font-weight: 500;
}

.rule-example-popover p {
  margin: 2px 0 10px;
  color: var(--muted);
  font-size: 13px;
}

.rule-example-popover code {
  margin-top: 10px;
  padding: 8px 10px;
  border-radius: var(--radius-sm);
  background: var(--fill);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.rule-example-popover p + code {
  margin-top: 0;
}

.confirm-dialog {
  width: min(440px, calc(100vw - 32px));
  padding: 0;
  box-shadow:
    0 0 0 1px var(--line-strong),
    0 16px 48px rgb(0 0 0 / 24%);
}

.confirm-dialog::backdrop {
  background: rgb(0 0 0 / 45%);
}

.confirm-dialog form {
  display: grid;
  gap: 12px;
  padding: 20px;
}

.confirm-dialog h2 {
  font-size: 16px;
  font-weight: 600;
}

.confirm-dialog form > p {
  color: var(--muted);
}

.confirm-dialog:has(.dialog-rows:not([hidden])) {
  width: min(640px, calc(100vw - 32px));
}

.report-dialog {
  width: min(680px, calc(100vw - 32px));
}

.dialog-detail {
  padding: 8px 10px;
  border-radius: var(--radius-sm);
  background: var(--fill);
  overflow-wrap: anywhere;
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 4px;
}

.dialog-rows {
  display: grid;
  gap: 8px;
  max-height: 46vh;
  overflow: auto;
}

.diff-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  text-align: left;
}

.diff-table th {
  padding: 4px 8px;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font-weight: 500;
}

.diff-table td {
  padding: 6px 8px;
  border-bottom: 1px solid var(--line);
  overflow-wrap: anywhere;
  vertical-align: top;
}

.diff-before {
  color: var(--muted);
  text-decoration: line-through;
}

.diff-after {
  font-weight: 500;
}

.report-field {
  display: grid;
  gap: 6px;
  color: var(--muted);
  font-size: 13px;
}

.star-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 12px 12px 16px;
  border-radius: var(--radius-lg);
  box-shadow: 0 0 0 1px var(--line);
}

.star-pitch {
  flex: 1;
  min-width: 0;
  color: var(--muted);
  font-size: 13px;
}

.star-pitch strong {
  color: var(--ink);
}

.star-cta {
  gap: 8px;
  text-decoration: none;
}

.star-icon {
  display: inline-flex;
  color: var(--star);
}

.star-icon svg {
  width: 15px;
  height: 15px;
}

.star-count {
  padding-left: 8px;
  border-left: 1px solid var(--line-strong);
  color: var(--muted);
  font-size: 12.5px;
  font-variant-numeric: tabular-nums;
}

.star-cta.starred:disabled {
  opacity: 1;
  cursor: default;
}

@media (max-width: 860px) {
  .app-shell {
    grid-template-columns: minmax(0, 1fr);
  }

  .sidebar {
    z-index: 100;
    height: auto;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .brand {
    padding: 0;
  }

  .brand-logo svg {
    height: 22px;
  }

  .sidenav {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }

  .sidenav a {
    position: relative;
    padding: 0 8px;
  }

  .sr-only-collapse {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  .nav-dirty {
    position: absolute;
    top: 3px;
    right: 2px;
    width: 7px;
    height: 7px;
    padding: 0;
    overflow: hidden;
    border-radius: 50%;
    background: var(--warn-fg);
    color: transparent;
  }

  .sidebar-foot {
    display: none;
  }

  .app-foot {
    display: flex;
    justify-content: center;
    gap: 28px;
    padding: 16px;
    border-top: 1px solid var(--line);
    font-size: 13px;
  }

  .preset-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .feed-summary {
    grid-template-columns: 16px 64px 72px minmax(0, 1fr);
  }

  .feed-summary .feed-agent,
  .feed-summary .feed-rule,
  .compact-row .feed-agent,
  .compact-row .feed-rule {
    display: none;
  }

  .compact-row {
    grid-template-columns: 72px minmax(0, 1fr);
  }

  .rule-count-row {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .agent-row {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .agent-status:empty {
    display: none;
  }

  .agent-version {
    display: none;
  }
}

@media (max-width: 640px) {
  main {
    padding: 24px 16px 56px;
  }

  .tiles {
    grid-template-columns: minmax(0, 1fr);
  }

  .panel-head {
    flex-direction: column;
    align-items: stretch;
  }

  .panel-head .section-actions {
    justify-content: space-between;
  }

  .panel-head .section-actions > .quiet {
    margin-left: -13px;
  }

  .setting-row.info button {
    align-self: flex-start;
    margin-left: -9px;
  }

  .toolbar-search {
    flex: 1 1 100%;
  }

  .rule-row {
    padding-left: var(--row-x);
  }

  .status-card,
  .savebar,
  .project-bar,
  .recovery,
  .setting-row {
    flex-direction: column;
    align-items: stretch;
  }

  .setting-label {
    width: auto;
  }

  .detail-rows div {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
  }
}

  </style>
</head>
<body>
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand">
        <h1 class="brand-logo"><a class="brand-home" href="#overview" title="Overview"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 476.62 104" role="img" aria-label="CC Safety Net"><defs><style>@font-face{font-family:'Exo 2 Kit';font-style:italic;font-weight:700;src:url(data:font/woff2;base64,d09GMgABAAAAAAbUAA8AAAAADAQAAAZ7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGjYbgyQcVgZgP1NUQVRAAGwRCAqJMIdOCxgAATYCJAMsBCAFhDAHIBsHClEU84FMI2Xh/P0gqJpmz2glW7tm2AMGEwsNLDMfvC6JFAYQpPIEwhmU0xSaCF+QTsL/fr9W/1uXRBItlZA9tc/Z9Yv5Q0SSmDWGUAhNRJtlK9FLKKzDiVzMJj0vnDSdSSQEYLKYQBuCGLPALmhtxAISi2ZWHkV0ILcjDR6rs5GDaEcLyx1kdcyODZDVPebrJ2ugbWKILNkBQClYW9HvGxsiWjnNmOQ2JJovesQSRNmQRxoiskig7/FcAHZApkhZYgQ4vYi+qS95Gzs6m+iq/1ig/tdrUQqZrv4fjgwrgfpH/e7GW5n6Rzb9rL5X3/AAgsmcGyQaVq7JNiJbGiDQZxuRxpooiyzIdHCygPSC5IIkIFKwSFffp0/wUjYjKS5NoogLGOjtbnM8VaGhpYcTCWfSUjvZhhtRk4XySaxdpF961G+UqQ3YJJrZLFYS7HMtUh3GLHs+p7KqsoDrMJm1fKF2iC7aKbHDRFwSXCG+l/fnQdB25gYOKUdhafl0d8/Ev9X3TrQNCAYogYfEsePJ6XcDIkE+aQUGZDElS2BgChoenkQCb1eZHKGSOtroYoLZtB/wLvNdq75WT6sH1b3qBnWtukCdgz+U6igQShF/JUOyNCFZJfr1MiFZOyaLnIwFRmUW0AYPWrx061Lb+kxrvDXVyMy0tjTqLbHTwJjYnJjGp/YHQi8tc9z88su6/9Vng45g6C0jENnhfDGo+8Nhd0R+6HTjpbfquv/2rPrLr8/ST16b4dFbrrjDMAK3ZXovuy/TuPyG7Ib+QKjAcXM4rPsfvPHSjEsvu22Z87X3QmZQ3Fv3h13ul0IvGYFX7si+4vLbl7tefz+cf0NEFHQHQnb9D3+x/633mtcGb1txyzsfbFh3r8g+Gpy3czo9uns56BDzymeDRx1u9y2P/CLj4aXwT+UEQ48ZgUhkhfPGoK9H9QdeemmZQ/c/mtMY8MztbiPwRH5LJOJ0xLjd/Z4PFZ3Y2KYtKytYWYfM1o6jlwQ37O/v73Ps7++bmI0fbR0JDx8dmWNZVmJjm1AeGdoMne0IeN3GBh0HOR0H+47/9ql9Gn1m9n0WfSBpVlAV3nVM7PeauM3NbuRAaYXWwDZF2iOE1W3gy8gAWmccde8oddY6wmQ8F/50bf1ARjA/aBkrVUGtQ+mZVuBZ+mCJQ80mLVFUYBErNUGtRWlVmmNbxhaHh8ssJZYHzOfEQnHscF1eNIA2YKd06v4TI/YqqooRdgvH13JC60gb+dNZsyZgaeLjeTeYQgsIuaV6ZFg9EyySJdSi8LVsPNg1lNjs8IDyH5UCXAnVyeKiH6gIaBlPziUdcoFCeEFDY1VLvZSGhaPgkAJURRI/Etcax4TPRV3ADq+EqBCtdBkM8acG8n/WTmyMOum+94aU9/8kWIZ7JE1cEmziR2Lb9NVzFDEYBVzFT24KZagafAljfa6Nr4tkcvaRZg7DmKF1uBxVxJzJgMw2SeOKCqmtJbuMhakeWlnf0JhSETFCaifPzmNurIelamAwcovrEIBtbQEH3GHKZ1LEtMpIF1YNYgJVNa16jW9UBq5DCLa1PRzIPwZQuTI6s1ix6NIKmnp7RwtrwvDMtBSp1iS1Vk95QpnScY0vOaMZCCXYHVzJ/0V0Z4D0CrFjsjCpnT67jIWJMkZZz9CYUhExQmon72HF3qK6I/aC6qrHjZTrXjya2uRdsdfj2G8/WlVdm3VQeyi1af/KvcV1++0F1dUPfBzTGtEbvBoA6lkEIOU5eY+UL7TE7/0t2mL5EuCta2OSAD5Zdv4v/7v//0j7WSvBQguGTaGAOu3L1vj/3f/9qf1s+ZKzaorXNGQla2UJS+Vb5MgC4mUNGXIrGeJcdZG4FFMWsEz+oS7iw/pscwadRDFAVM3j1AUG/mu6Zh/brxcaWorkv2WoJI1PQy1s5V5RFi3mbBlqJYuJUBt5uArj2F4Xi9IvegbJKZJp8mhKaDVeephhBuikhAnaGKCXDtz46KWbHib2nScYYZzdbBj5hnWdjyG6RkVDTIDxdtE4PtYzzBjdFDCjVt/MOmzmahhjnF7zk0w2s56NbGKjCd5SzeVkczwA9lf2UEkVlRSwx9UIUAa4oSOESmYZI4wAOPjqFkwc9ODD9Cu/mrFxQx8+OoD8EJM8gfj645is5Ix30xt51CTtrKeDYQYD+g8zTDcD+NgsGmeDm+R1RP2rWpqtqT9BXclmNgA=) format('woff2')}</style></defs><svg x="0" y="0" width="96" height="96" viewBox="-172.38 -172.38 824.77 824.77"><g transform="rotate(45 240 240)"><rect x="-30" y="14" width="195" height="52" rx="9" fill="currentColor"/><rect x="315" y="14" width="195" height="52" rx="9" fill="currentColor"/><rect x="-30" y="94" width="115" height="52" rx="9" fill="currentColor"/><rect x="235" y="94" width="170" height="52" rx="9" fill="currentColor"/><rect x="155" y="174" width="170" height="52" rx="9" fill="currentColor"/><rect x="75" y="254" width="170" height="52" rx="9" fill="currentColor"/><rect x="395" y="254" width="115" height="52" rx="9" fill="currentColor"/><rect x="-30" y="334" width="195" height="52" rx="9" fill="currentColor"/><rect x="315" y="334" width="195" height="52" rx="9" fill="currentColor"/><rect x="-30" y="414" width="115" height="52" rx="9" fill="currentColor"/><rect x="235" y="414" width="170" height="52" rx="9" fill="currentColor"/><rect x="14" y="155" width="52" height="170" rx="9" fill="#e5602a"/><rect x="94" y="75" width="52" height="170" rx="9" fill="#e5602a"/><rect x="94" y="395" width="52" height="115" rx="9" fill="#e5602a"/><rect x="174" y="-30" width="52" height="195" rx="9" fill="#e5602a"/><rect x="174" y="315" width="52" height="195" rx="9" fill="#e5602a"/><rect x="254" y="-30" width="52" height="115" rx="9" fill="#e5602a"/><rect x="254" y="235" width="52" height="170" rx="9" fill="#e5602a"/><rect x="334" y="155" width="52" height="170" rx="9" fill="#e5602a"/><rect x="414" y="75" width="52" height="170" rx="9" fill="#e5602a"/><rect x="414" y="395" width="52" height="115" rx="9" fill="#e5602a"/></g></svg><text x="115.98" y="62.42" font-family="'Exo 2 Kit','Exo 2',sans-serif" font-style="italic" font-weight="700" font-size="56" letter-spacing="-0.56" fill="currentColor">CC Safety Net</text></svg>
</a></h1>
      </div>
      <nav class="sidenav" aria-label="Sections">
        <a href="#overview" data-nav="overview" title="Overview"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="9" rx="1.5"></rect><rect x="14" y="3" width="7" height="5" rx="1.5"></rect><rect x="14" y="12" width="7" height="9" rx="1.5"></rect><rect x="3" y="16" width="7" height="5" rx="1.5"></rect></svg><span class="sr-only-collapse">Overview</span></a>
        <a href="#activity" data-nav="activity" title="Activity"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12h4l3-8 4 16 3-8h4"></path></svg><span class="sr-only-collapse">Activity</span></a>
        <a href="#policy" data-nav="policy" title="Protections"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 5 6v5c0 4.4 3 8.4 7 10 4-1.6 7-5.6 7-10V6l-7-3Z"></path></svg><span class="sr-only-collapse">Protections</span><span class="nav-dirty" id="nav-dirty" hidden>Unsaved</span></a>
        <a href="#rules" data-nav="rules" title="Custom rules"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h9l4 4v14H6z"></path><path d="M15 3v4h4"></path><path d="M9 12h6M9 16h4"></path></svg><span class="sr-only-collapse">Custom rules</span></a>
        <a href="#integrations" data-nav="integrations" title="Agents"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v5"></path></svg><span class="sr-only-collapse">Agents</span></a>
        <a href="#settings" data-nav="settings" title="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h10M18 8h2M4 16h2M10 16h10"></path><circle cx="16" cy="8" r="2.2"></circle><circle cx="8" cy="16" r="2.2"></circle></svg><span class="sr-only-collapse">Settings</span></a>
      </nav>
      <div class="sidebar-foot">
        <a href="https://github.com/kenryu42/cc-safety-net" target="_blank" rel="noopener">GitHub</a>
        <a href="https://ccsafetynet.com/docs" target="_blank" rel="noopener">Documentation</a>
      </div>
    </aside>
    <div class="content">
      <main>
        <div class="banner" id="protection-banner" role="alert" hidden></div>

        <section class="view" data-view="overview">
          <header class="page-head">
            <div>
              <h2>Overview</h2>
              <p>What CC Safety Net has been doing on this machine.</p>
            </div>
          </header>
          <div class="card status-card" id="status-card" aria-live="polite"><p class="muted">Loading…</p></div>
          <section class="section" id="attention" hidden>
            <div class="section-head"><h3 class="section-title">Needs attention</h3></div>
            <ul class="card list" id="attention-list"></ul>
          </section>
          <div class="tiles" id="overview-tiles"></div>
          <section class="section">
            <div class="section-head">
              <h3 class="section-title">Recent blocks</h3>
              <a class="link-button" href="#activity">All activity</a>
            </div>
            <div id="recent-blocks"></div>
          </section>
          <section class="section">
            <div class="section-head">
              <h3 class="section-title" id="top-rules-title">Most-triggered rules</h3>
            </div>
            <div id="top-rules"></div>
          </section>
          <div class="star-row" id="star-row" hidden>
            <p class="star-pitch"><span id="star-pitch-text"></span></p>
            <span id="star-slot"></span>
          </div>
        </section>

        <section class="view" data-view="activity" hidden>
          <header class="page-head">
            <div>
              <h2>Activity</h2>
              <p>Commands your agents ran, newest first. Commands are secret-redacted when they are logged.</p>
            </div>
            <button type="button" class="quiet icon-button" id="activity-refresh" aria-label="Refresh activity" title="Refresh activity"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 1 0-2.3 5.7"></path><path d="M20 4v7h-7"></path></svg></button>
          </header>
          <div class="toolbar">
            <div class="pills" id="activity-decision" role="group" aria-label="Decision"></div>
            <span class="toolbar-spacer"></span>
            <label class="toolbar-search"><span class="sr-only">Search activity</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg><input type="search" id="activity-search" autocomplete="off" placeholder="Search commands or rule IDs"></label>
            <label class="toolbar-select"><span class="sr-only">Agent</span><select id="activity-agent"></select></label>
            <label class="toolbar-select"><span class="sr-only">Time window</span><select id="activity-days"></select></label>
          </div>
          <div class="filter-line" id="activity-command-filter" hidden></div>
          <div class="card list" id="activity-feed"><p class="empty">Loading activity…</p></div>
          <p class="footnote" id="activity-count"></p>
        </section>

        <section class="view" data-view="policy" hidden>
          <header class="page-head">
            <div>
              <h2>Protections</h2>
              <p>Choose what CC Safety Net blocks. Changes apply after you save.</p>
            </div>
            <div class="page-actions">
              <div class="pills" role="group" aria-label="Policy you are editing">
                <button type="button" id="scope-user" aria-pressed="true">My policy</button>
                <button type="button" id="project-draft-enter" aria-pressed="false">Project policy</button>
              </div>
              <button type="button" id="tester-open" aria-haspopup="dialog">Test a command</button>
            </div>
          </header>
          <div class="project-bar" id="project-draft-bar" hidden>
            <div>
              <strong>Editing the project policy</strong> <code id="project-draft-path"></code>
              <p>Only settings tagged <span class="project-chip">Project</span> are written. Everything else keeps following each person's own policy. Click a Project tag to stop setting that field.</p>
            </div>
            <button type="button" id="project-draft-change" hidden>Change folder…</button>
          </div>
          <p class="notice error" id="project-draft-diagnostics" hidden></p>
          <div class="recovery" id="recovery" hidden>
            <div>
              <strong>Your policy file needs repair</strong>
              <p>Repair keeps every valid setting and rewrites the file. If the JSON cannot be read at all, defaults are restored.</p>
              <p class="notice error" id="policy-errors"></p>
            </div>
            <button class="primary" id="repair" type="button">Repair</button>
          </div>

          <section class="section">
            <div class="section-head">
              <div>
                <h3 class="section-title">Safety preset</h3>
                <p class="section-sub">Each preset includes everything in the one before it.</p>
              </div>
              <span class="preset-status" id="safety-preset-status"></span>
              <span class="project-chip-slot" id="safety-level-chip"></span>
            </div>
            <div class="preset-grid" id="safety-level"></div>
            <p class="notice" id="environment-overrides" hidden></p>
            <details class="card disclosure">
              <summary><span class="disclosure-title">Advanced settings</span><span class="disclosure-sub">Preset checks and linked worktrees</span></summary>
              <div class="disclosure-body">
                <div id="safety-overrides"></div>
                <div id="workflow"></div>
              </div>
            </details>
          </section>

          <div class="toolbar policy-toolbar">
            <label class="toolbar-search primary-search"><span class="sr-only">Search protections</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg><input type="search" id="policy-search" autocomplete="off" aria-keyshortcuts="/" placeholder="Type / to search by name, path or rule ID"></label>
            <div class="pills" role="group" aria-label="Which protections to show">
              <button type="button" data-policy-show="all" aria-pressed="true">All</button>
              <button type="button" data-policy-show="changed" aria-pressed="false">Changed from default <span class="count" id="changed-count"></span></button>
            </div>
          </div>

          <section class="card panel" id="destructive-panel">
            <div class="panel-head">
              <div>
                <h3 class="section-title" id="destructive-label">Command protection</h3>
                <p class="section-sub" id="destructive-command-summary"></p>
              </div>
              <div class="section-actions">
                <button type="button" class="quiet" id="reset-rule-customizations">Reset all</button>
                <span class="project-chip-slot" id="destructive-enabled-chip"></span>
                <label class="master-switch"><span class="master-state"></span><input type="checkbox" class="switch" id="destructive-enabled" aria-labelledby="destructive-label"></label>
              </div>
            </div>
            <div class="panel-list" id="destructive-command-rules"></div>
          </section>

          <section class="card panel" id="secret-panel">
            <div class="panel-head">
              <div>
                <h3 class="section-title" id="secret-label">Secret protection</h3>
                <p class="section-sub" id="secret-summary"></p>
              </div>
              <div class="section-actions">
                <button type="button" class="quiet" id="reset-secret-customizations">Reset all</button>
                <span class="project-chip-slot" id="secret-enabled-chip"></span>
                <label class="master-switch"><span class="master-state"></span><input type="checkbox" class="switch" id="secret-enabled" aria-labelledby="secret-label"></label>
              </div>
            </div>
            <div class="panel-list" id="secret-patterns"></div>
          </section>

          <section class="card panel">
            <div class="panel-head">
              <div>
                <h3 class="section-title">Exceptions and extra paths</h3>
                <p class="section-sub">Paths can be absolute or start with <code>~/</code>. Paste several lines to add many at once. Paths that cover your home directory are rejected.</p>
              </div>
            </div>
            <div class="panel-rows">
              <div class="path-list">
                <div class="path-list-head"><strong id="allow-paths-label">Allow recursive deletes in</strong><span class="count" id="allow-paths-count"></span><span class="project-chip-slot" id="allow-paths-chip"></span></div>
                <p class="path-list-help">Recursive deletes inside these paths are not blocked, like a scratch folder under <code>/tmp</code>.</p>
                <div class="input-row"><input type="text" class="mono" id="allow-paths-input" data-path-input="allow-paths" autocomplete="off" spellcheck="false" placeholder="/absolute/path or ~/path" aria-labelledby="allow-paths-label"><button type="button" id="allow-paths-add-button" data-path-add="allow-paths">Add</button></div>
                <p class="field-error" id="allow-paths-hint" hidden></p>
                <ul class="paths" id="allow-paths-list"></ul>
              </div>
              <div class="path-list">
                <div class="path-list-head"><strong id="deny-paths-label">Always block access to</strong><span class="count" id="deny-paths-count"></span><span class="project-chip-slot" id="deny-paths-chip"></span></div>
                <p class="path-list-help">These paths and everything inside them are blocked while secret protection is on.</p>
                <div class="input-row"><input type="text" class="mono" id="deny-paths-input" data-path-input="deny-paths" autocomplete="off" spellcheck="false" placeholder="path/to/protect" aria-labelledby="deny-paths-label"><button type="button" id="deny-paths-add-button" data-path-add="deny-paths">Add</button></div>
                <p class="field-error" id="deny-paths-hint" hidden></p>
                <ul class="paths" id="deny-paths-list"></ul>
              </div>
              <div class="path-list">
                <div class="path-list-head"><strong id="secret-allow-paths-label">Exempt from secret patterns</strong><span class="count" id="secret-allow-paths-count"></span><span class="project-chip-slot" id="secret-allow-paths-chip"></span></div>
                <p class="path-list-help">Files, folders, or one file name under a folder such as <code>~/code/**/.env.local</code>. Deny paths and coding agent credentials still apply.</p>
                <div class="input-row"><input type="text" class="mono" id="secret-allow-paths-input" data-path-input="secret-allow-paths" autocomplete="off" spellcheck="false" placeholder="~/code/**/.env.local" aria-labelledby="secret-allow-paths-label"><button type="button" id="secret-allow-paths-add-button" data-path-add="secret-allow-paths">Add</button></div>
                <p class="field-error" id="secret-allow-paths-hint" hidden></p>
                <ul class="paths" id="secret-allow-paths-list"></ul>
              </div>
            </div>
          </section>

          <details class="card disclosure">
            <summary><span class="disclosure-title">Policy JSON</span><span class="disclosure-sub" id="raw-source">Read-only. Mirrors the settings above.</span></summary>
            <div class="disclosure-body json-body">
              <button type="button" class="quiet" id="raw-copy"></button>
              <textarea id="raw" aria-label="Policy JSON" aria-describedby="raw-source" readonly></textarea>
            </div>
          </details>

          <div class="savebar" id="policy-savebar" hidden>
            <div class="savebar-text">
              <strong id="savebar-title">Unsaved changes</strong>
              <span id="savebar-summary"></span>
            </div>
            <div class="savebar-actions">
              <button type="button" id="discard-changes">Discard</button>
              <button type="button" class="primary" id="save">Save</button>
            </div>
          </div>
        </section>

        <section class="view" data-view="rules" hidden>
          <header class="page-head">
            <div>
              <h2>Custom rules</h2>
              <p>Your own blocking rules from rulebooks, enforced on top of the built-in protections.</p>
            </div>
            <button type="button" class="quiet icon-button" id="rules-refresh" aria-label="Refresh custom rules" title="Refresh custom rules"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 1 0-2.3 5.7"></path><path d="M20 4v7h-7"></path></svg></button>
          </header>
          <section class="section" id="rules-diagnostics-panel" hidden>
            <div class="section-head">
              <div>
                <h3 class="section-title">Problems</h3>
                <p class="section-sub">An error means a rulebook was skipped and none of its rules are enforced.</p>
              </div>
            </div>
            <div class="notices" id="rules-diagnostics"></div>
          </section>
          <section class="section">
            <div class="section-head">
              <div>
                <h3 class="section-title">Rulebooks</h3>
                <p class="section-sub">Read-only. Rules are shown as they are enforced.</p>
              </div>
            </div>
            <div id="rules-list"><p class="empty">Loading rules…</p></div>
          </section>
          <section class="section" id="rules-composer-panel">
            <div class="section-head">
              <div>
                <h3 class="section-title">Create a rule</h3>
                <p class="section-sub">Describe the rule and copy a ready-made prompt for your coding agent. CC Safety Net does not write rulebooks itself.</p>
              </div>
            </div>
            <div class="card pad">
              <div class="form-grid">
                <div class="field">
                  <span class="field-label">Applies to</span>
                  <div class="pills" role="group" aria-label="Rule scope">
                    <button type="button" data-rules-scope="project" aria-pressed="true">This project</button>
                    <button type="button" data-rules-scope="user" aria-pressed="false">All projects</button>
                  </div>
                </div>
                <div class="field" id="rules-project-path-field">
                  <label class="field-label" id="rules-project-path-label" for="rules-project-path">Project folder</label>
                  <div class="input-row">
                    <input type="text" class="mono" id="rules-project-path" spellcheck="false" autocomplete="off" aria-describedby="rules-project-path-hint">
                    <button type="button" id="rules-choose-directory" hidden>Choose…</button>
                  </div>
                  <small id="rules-project-path-hint">Where the rulebook is written. Defaults to the folder this GUI was started from.</small>
                </div>
                <div class="field">
                  <label class="field-label" id="rules-composer-label" for="rules-composer-input">What should be blocked?</label>
                  <textarea id="rules-composer-input" spellcheck="false" placeholder="Block terraform destroy in this project" aria-describedby="rules-composer-hint"></textarea>
                  <small id="rules-composer-hint">Rules match a command, its subcommands, and exact arguments, not file paths or patterns.</small>
                  <div class="chip-row">
                    <span class="chip-row-label">Try:</span>
                    <button type="button" class="chip" data-rules-example="read my package.json and suggest blocking rules">Suggest rules</button>
                    <button type="button" class="chip" data-rules-example="set up rules to block all terraform destroy commands">Block a command</button>
                    <button type="button" class="chip" data-rules-example="verify my rules and fix any errors">Verify rules</button>
                  </div>
                </div>
              </div>
              <div class="form-actions">
                <button type="button" class="primary" id="rules-copy-prompt">Copy prompt</button>
              </div>
            </div>
          </section>
        </section>

        <section class="view" data-view="integrations" hidden>
          <header class="page-head">
            <div>
              <h2>Agents</h2>
              <p>Install or remove the CC Safety Net hook for each coding agent on this machine.</p>
            </div>
            <button type="button" class="quiet icon-button" id="integrations-refresh" aria-label="Refresh agents" title="Refresh agents"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 1 0-2.3 5.7"></path><path d="M20 4v7h-7"></path></svg></button>
          </header>
          <div class="agent-groups" id="integrations-list"><p class="empty">Checking agents…</p></div>
        </section>

        <section class="view" data-view="settings" hidden>
          <header class="page-head">
            <div>
              <h2>Settings</h2>
              <p>Appearance, log retention, file locations, and maintenance.</p>
            </div>
          </header>
          <section class="section">
            <div class="section-head"><h3 class="section-title">Appearance</h3></div>
            <div class="card rows">
              <div class="setting-row">
                <div class="setting-text"><strong>Theme</strong><small>Saved in this browser.</small></div>
                <div class="pills" id="settings-theme" role="group" aria-label="Theme">
                  <button type="button" data-theme-choice="auto" aria-pressed="true">Auto</button>
                  <button type="button" data-theme-choice="light" aria-pressed="false">Light</button>
                  <button type="button" data-theme-choice="dark" aria-pressed="false">Dark</button>
                </div>
              </div>
            </div>
          </section>
          <section class="section">
            <div class="section-head"><h3 class="section-title">Audit log</h3></div>
            <div class="card rows">
              <div class="setting-row">
                <div class="setting-text"><label for="retention-days"><strong>Keep logs for</strong></label><small id="retention-note">Every checked command is logged. Lowering this deletes older entries, and Activity can only look back this far.</small></div>
                <span class="retention-input"><input type="number" id="retention-days" min="1" max="365" step="1" inputmode="numeric" aria-describedby="retention-note"><span id="retention-unit">days</span></span>
              </div>
              <div class="setting-row info"><span class="setting-label">Log folder</span><code id="logs-path"></code><button type="button" class="quiet small" data-copy-path="logs-path" aria-label="Copy the log folder path"></button></div>
            </div>
          </section>
          <section class="section">
            <div class="section-head"><h3 class="section-title">Files</h3></div>
            <div class="card rows">
              <div class="setting-row info"><span class="setting-label">Policy file</span><code id="policy-path"></code><button type="button" class="quiet small" data-copy-path="policy-path" aria-label="Copy the policy file path"></button></div>
              <div class="setting-row info" id="project-policy-row" hidden><span class="setting-label">Project policy</span><code id="project-policy-path"></code><button type="button" class="quiet small" data-copy-path="project-policy-path" aria-label="Copy the project policy path"></button></div>
            </div>
            <p class="notice" id="project-policy-notice" hidden></p>
          </section>
          <section class="section">
            <div class="section-head"><h3 class="section-title">About</h3></div>
            <div class="card rows">
              <div class="setting-row info"><span class="setting-label">CC Safety Net</span><code id="app-version"></code></div>
              <div class="setting-row info"><span class="setting-label">Node.js</span><code id="integrations-node-version"></code></div>
              <div class="setting-row info"><span class="setting-label">Platform</span><code id="integrations-platform"></code></div>
            </div>
          </section>
          <section class="section">
            <div class="section-head"><h3 class="section-title">Danger zone</h3></div>
            <div class="card rows">
              <div class="setting-row">
                <div class="setting-text"><strong>Reset policy</strong><small>Replace your policy file with the defaults. This cannot be undone.</small></div>
                <button type="button" class="danger-quiet" id="reset">Reset policy</button>
              </div>
            </div>
          </section>
        </section>
      </main>
      <footer class="app-foot">
        <a href="https://github.com/kenryu42/cc-safety-net" target="_blank" rel="noopener">GitHub</a>
        <a href="https://ccsafetynet.com/docs" target="_blank" rel="noopener">Documentation</a>
      </footer>
    </div>
  </div>
  <div class="toast" id="toast" role="status" aria-live="polite" hidden>
    <div class="toast-text">
      <strong id="toast-title"></strong>
      <p id="toast-detail" hidden></p>
    </div>
    <button type="button" class="quiet icon-only" id="toast-close" aria-label="Dismiss message">✕</button>
  </div>
  <div class="rule-example-popover" id="rule-example-popover" popover="auto" role="dialog" aria-labelledby="rule-example-title" aria-describedby="rule-example-command">
    <span class="rule-example-label" id="rule-example-label"></span>
    <strong id="rule-example-title"></strong>
    <p id="rule-example-description"></p>
    <code id="rule-example-command"></code>
  </div>
  <dialog class="confirm-dialog" id="confirm-dialog" aria-labelledby="confirm-dialog-title" aria-describedby="confirm-dialog-body confirm-dialog-detail">
    <form method="dialog">
      <h2 id="confirm-dialog-title"></h2>
      <p id="confirm-dialog-body"></p>
      <div class="dialog-rows" id="confirm-dialog-rows" hidden></div>
      <p class="dialog-detail"><code id="confirm-dialog-detail"></code></p>
      <div class="dialog-actions">
        <button type="submit" id="confirm-dialog-cancel" value="cancel">Cancel</button>
        <button type="submit" class="danger" id="confirm-dialog-confirm" value="confirm"></button>
      </div>
    </form>
  </dialog>
  <dialog class="confirm-dialog tester-dialog" id="tester-dialog" aria-labelledby="tester-label" aria-describedby="tester-help">
    <form id="tester-form">
      <h2 id="tester-label">Test a command</h2>
      <p id="tester-help">Checks a command against the Protections settings, including unsaved changes and custom rules. Nothing is run.</p>
      <div class="input-row">
        <label class="prompt-field"><span class="prompt" aria-hidden="true">$</span><input type="text" id="tester-input" class="mono" autocomplete="off" spellcheck="false" placeholder="git push --force" aria-labelledby="tester-label"></label>
        <button type="submit" class="primary" id="tester-run">Test</button>
      </div>
      <div id="tester-result" class="notice" aria-live="polite" hidden></div>
      <div class="dialog-actions">
        <button type="button" id="tester-close">Close</button>
      </div>
    </form>
  </dialog>
  <dialog class="confirm-dialog report-dialog" id="report-dialog" aria-labelledby="report-dialog-title" aria-describedby="report-dialog-body">
    <form method="dialog">
      <h2 id="report-dialog-title">Report a false positive</h2>
      <p id="report-dialog-body">This opens a prefilled public GitHub issue form. Nothing is sent until you submit it there. Paths were replaced with <code>&lt;project&gt;</code> and <code>~</code>; edit anything else you would rather not publish.</p>
      <label class="report-field"><span>Why should it have been allowed? (optional)</span><textarea id="report-why" placeholder="What was the agent trying to do, and what makes the command safe there?"></textarea></label>
      <label class="report-field"><span>Title</span><input id="report-title" type="text" spellcheck="false"></label>
      <label class="report-field"><span>Blocked command</span><textarea id="report-command" spellcheck="false"></textarea></label>
      <label class="report-field"><span>Audit log entry</span><textarea id="report-entry" spellcheck="false"></textarea></label>
      <div class="dialog-actions">
        <button type="submit" id="report-dialog-cancel" value="cancel">Cancel</button>
        <button type="submit" class="primary" id="report-dialog-open" value="report">Open GitHub form</button>
      </div>
    </form>
  </dialog>
  <script id="ccsn-data" type="application/json"></script>
  <script>
// src/hosts/catalog.ts
var DEEPSEEK_HARNESS_NPM_PROBE = [
  "npx",
  "--offline",
  "--no-install",
  "@deepseek-ai/dsh",
  "--version"
];
var catalog = [
  {
    id: "antigravity-cli",
    displayName: "Antigravity CLI",
    doctorOrder: 3,
    runtime: {
      order: 1,
      flags: ["-ac", "--agy-cli"],
      description: "Run as Antigravity CLI PreToolUse hook",
      legacyTopLevelFlags: []
    },
    install: {
      order: 2,
      flag: "--agy-cli",
      artifactKind: "hook config",
      probeCommand: ["agy", "--version"]
    }
  },
  {
    id: "claude-code",
    displayName: "Claude Code",
    doctorOrder: 1,
    runtime: {
      order: 2,
      displayName: "Coding CLI",
      flags: ["-cc", "--coding-cli"],
      legacyFlags: ["--claude-code"],
      description: "Run as Coding CLI PreToolUse hook",
      legacyTopLevelFlags: ["-cc", "--claude-code"]
    },
    install: {
      order: 3,
      flag: "--claude-code",
      artifactKind: "plugin",
      probeCommand: ["claude", "--version"]
    }
  },
  {
    id: "codex",
    displayName: "Codex",
    doctorOrder: 4,
    runtime: {
      order: 3,
      flags: ["-cx", "--codex"],
      description: "Run as a Codex PreToolUse hook",
      legacyTopLevelFlags: []
    },
    install: {
      order: 4,
      flag: "--codex",
      artifactKind: "plugin",
      probeCommand: ["codex", "--version"]
    }
  },
  {
    id: "copilot-cli",
    displayName: "GitHub Copilot CLI",
    doctorOrder: 10,
    runtime: {
      order: 8,
      flags: ["-cp", "--copilot-cli"],
      description: "Run as GitHub Copilot CLI PreToolUse hook",
      legacyTopLevelFlags: ["-cp", "--copilot-cli"]
    },
    install: {
      order: 10,
      flag: "--copilot-cli",
      artifactKind: "plugin",
      probeCommand: ["copilot", "--binary-version"]
    }
  },
  {
    id: "gemini-cli",
    displayName: "Gemini CLI",
    doctorOrder: 9,
    runtime: {
      order: 7,
      flags: ["-gc", "--gemini-cli"],
      description: "Run as Gemini CLI BeforeTool hook",
      legacyTopLevelFlags: ["-gc", "--gemini-cli"]
    },
    install: {
      order: 9,
      flag: "--gemini-cli",
      artifactKind: "extension",
      probeCommand: ["gemini", "--version"]
    }
  },
  {
    id: "grok-build",
    displayName: "Grok Build",
    doctorOrder: 11,
    runtime: {
      order: 9,
      flags: ["-gb", "--grok-build"],
      description: "Run as Grok Build PreToolUse hook",
      legacyTopLevelFlags: []
    },
    install: {
      order: 11,
      flag: "--grok-build",
      artifactKind: "hook config",
      probeCommand: ["grok", "--version"]
    }
  },
  {
    id: "hermes-agent",
    displayName: "Hermes Agent",
    doctorOrder: 12,
    runtime: {
      order: 10,
      flags: ["-ha", "--hermes-agent"],
      description: "Run as Hermes Agent pre_tool_call hook",
      legacyTopLevelFlags: []
    },
    install: {
      order: 12,
      flag: "--hermes-agent",
      artifactKind: "plugin",
      probeCommand: ["hermes", "--version"]
    }
  },
  {
    id: "kimi-code",
    displayName: "Kimi Code",
    doctorOrder: 13,
    runtime: {
      order: 11,
      flags: ["-kc", "--kimi-code"],
      description: "Run as Kimi Code PreToolUse hook",
      legacyTopLevelFlags: []
    },
    install: {
      order: 13,
      flag: "--kimi-code",
      artifactKind: "hook config",
      probeCommand: ["kimi", "--version"]
    }
  },
  {
    id: "openclaw",
    displayName: "OpenClaw",
    doctorOrder: 14,
    install: {
      order: 14,
      flag: "--openclaw",
      artifactKind: "plugin",
      probeCommand: ["openclaw", "--version"]
    }
  },
  {
    id: "opencode",
    displayName: "OpenCode",
    doctorOrder: 15,
    install: {
      order: 15,
      flag: "--opencode",
      artifactKind: "plugin",
      probeCommand: ["opencode", "--version"]
    }
  },
  {
    id: "pi",
    displayName: "Pi",
    doctorOrder: 16,
    install: {
      order: 16,
      flag: "--pi",
      artifactKind: "package",
      probeCommand: ["pi", "--version"]
    }
  },
  {
    id: "cursor",
    displayName: "Cursor",
    doctorOrder: 5,
    runtime: {
      order: 4,
      flags: ["-cu", "--cursor"],
      description: "Run as Cursor preToolUse hook",
      legacyTopLevelFlags: []
    },
    install: {
      order: 5,
      flag: "--cursor",
      artifactKind: "hook config",
      probeCommand: ["cursor", "--version"]
    }
  },
  {
    id: "deepseek-harness",
    displayName: "DeepSeek Harness",
    doctorOrder: 6,
    install: {
      order: 6,
      flag: "--deepseek-harness",
      artifactKind: "package",
      probeCommand: DEEPSEEK_HARNESS_NPM_PROBE
    }
  },
  {
    id: "devin",
    displayName: "Devin CLI",
    doctorOrder: 7,
    runtime: {
      order: 5,
      flags: ["-dv", "--devin"],
      description: "Run as Devin CLI PreToolUse hook",
      legacyTopLevelFlags: []
    },
    install: {
      order: 7,
      flag: "--devin",
      artifactKind: "hook config",
      probeCommand: ["devin", "--version"]
    }
  },
  {
    id: "droid",
    displayName: "Factory Droid",
    doctorOrder: 8,
    runtime: {
      order: 6,
      flags: ["-fd", "--droid"],
      description: "Run as Factory Droid PreToolUse hook",
      legacyTopLevelFlags: []
    },
    install: {
      order: 8,
      flag: "--droid",
      artifactKind: "hook config",
      probeCommand: ["droid", "--version"]
    }
  },
  {
    id: "amp",
    displayName: "Amp Code",
    doctorOrder: 2,
    install: {
      order: 1,
      flag: "--amp",
      artifactKind: "plugin",
      probeCommand: ["amp", "--version"]
    }
  }
];
var doctorIntegrationOrder = catalog.slice().sort((a, b) => a.doctorOrder - b.doctorOrder).map((integration) => integration.id);
var runtimeHookIntegrationMetadata = catalog.filter((integration) => ("runtime" in integration)).slice().sort((a, b) => a.runtime.order - b.runtime.order).map((integration) => ({
  id: integration.id,
  displayName: "displayName" in integration.runtime ? integration.runtime.displayName : integration.displayName,
  flags: integration.runtime.flags,
  legacyFlags: "legacyFlags" in integration.runtime ? integration.runtime.legacyFlags : [],
  description: integration.runtime.description,
  legacyTopLevelFlags: integration.runtime.legacyTopLevelFlags
}));
var installIntegrationMetadata = catalog.slice().sort((a, b) => a.install.order - b.install.order).map((integration) => ({ id: integration.id, ...integration.install })).map(({ order: _, ...integration }) => integration);
var integrationDisplayNames = Object.fromEntries(catalog.map((integration) => [integration.id, integration.displayName]));

// src/gui/frontend/ui.ts
var agentLabels = integrationDisplayNames;
var shared = {
  policy: undefined,
  dirty: false,
  drafting: false
};
var emit = (name) => document.dispatchEvent(new Event(\`ccsn:\${name}\`));
var on = (name, listener) => document.addEventListener(\`ccsn:\${name}\`, listener);
var qs = (id) => document.getElementById(id);
var sessionToken = () => JSON.parse(qs("ccsn-data").textContent).token;
var requestJson = async (path, init = {}) => {
  const token = sessionToken();
  try {
    const response = await fetch(\`\${path}\${path.includes("?") ? "&" : "?"}token=\${encodeURIComponent(token)}\`, {
      ...init,
      headers: {
        "content-type": "application/json",
        "x-cc-safety-net-token": token,
        ...init.headers
      }
    });
    const text = await response.text();
    return {
      ok: response.ok,
      status: response.status,
      data: text ? JSON.parse(text) : {},
      error: undefined
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      data: undefined,
      error: error instanceof Error ? error.message : String(error)
    };
  }
};
var errorText = (result) => result.error ?? (Array.isArray(result.data?.errors) && result.data.errors.length ? result.data.errors.join(\`
\`) : null) ?? result.data?.error ?? \`Request failed (status \${result.status}).\`;
var isWriteSuccess = (result) => result.ok && !(Array.isArray(result.data?.errors) && result.data.errors.length > 0);
var escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[char] ?? char);
var notifyTimer;
var notify = (title, kind = "info", detail = "") => {
  clearTimeout(notifyTimer);
  qs("toast").hidden = title === "";
  qs("toast").className = \`toast \${kind}\`;
  qs("toast-title").textContent = title;
  qs("toast-detail").textContent = detail;
  qs("toast-detail").hidden = detail === "";
  if (kind === "ok")
    notifyTimer = setTimeout(() => notify(""), 4000);
};
var icons = {
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2"></path></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>',
  remove: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"></path></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 11v5M12 8h.01"></path></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>'
};
var showingCopied = new WeakSet;
var copyText = async (button, text) => {
  const copied = await navigator.clipboard.writeText(text).then(() => true, () => false);
  if (!copied) {
    notify("Copy failed", "error");
    return;
  }
  if (showingCopied.has(button))
    return;
  showingCopied.add(button);
  const label = button.innerHTML;
  button.innerHTML = \`\${icons.check}<span>Copied</span>\`;
  setTimeout(() => {
    button.innerHTML = label;
    showingCopied.delete(button);
  }, 1500);
};
var showPath = (id, path, suffix = "") => {
  const element = qs(id);
  element.dataset.path = path;
  element.innerHTML = path.split(/(?<=[\\\\/])/).map((part) => \`<span class="path-part">\${escapeHtml(part)}</span>\`).join("") + escapeHtml(suffix);
  document.querySelector(\`[data-copy-path="\${id}"]\`)?.toggleAttribute("hidden", path === "");
};
var runRefresh = async (button, reload) => {
  if (button.disabled)
    return;
  button.disabled = true;
  await reload();
  button.disabled = false;
};
var resolvePendingConfirm = null;
var initConfirmDialog = () => {
  const dialog = qs("confirm-dialog");
  dialog.addEventListener("close", () => {
    if (!resolvePendingConfirm)
      return;
    resolvePendingConfirm(dialog.returnValue === "confirm");
    resolvePendingConfirm = null;
  });
  dialog.addEventListener("cancel", () => {
    dialog.returnValue = "cancel";
  });
};
var confirmDialog = (options) => new Promise((resolve) => {
  if (resolvePendingConfirm) {
    resolve(false);
    return;
  }
  const dialog = qs("confirm-dialog");
  const confirm = qs("confirm-dialog-confirm");
  qs("confirm-dialog-title").textContent = options.title;
  qs("confirm-dialog-body").textContent = options.body;
  qs("confirm-dialog-detail").textContent = options.detail ?? "";
  qs("confirm-dialog-detail").parentElement.hidden = !options.detail;
  qs("confirm-dialog-rows").innerHTML = options.rowsHtml ?? "";
  qs("confirm-dialog-rows").hidden = !options.rowsHtml;
  confirm.textContent = options.confirmLabel;
  confirm.className = options.confirmClass ?? "danger";
  dialog.returnValue = "cancel";
  resolvePendingConfirm = resolve;
  dialog.showModal();
  qs("confirm-dialog-cancel").focus();
});

// src/audit/display.ts
var formatRelativeTime = (value) => {
  const diff = Date.now() - new Date(value).getTime();
  if (!Number.isFinite(diff))
    return "";
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0)
    return \`\${days}d ago\`;
  if (hours > 0)
    return \`\${hours}h ago\`;
  if (minutes > 0)
    return \`\${minutes}m ago\`;
  return "just now";
};
var commandSignature = (source) => {
  const tokens = (source ?? "").trim().split(/\\s+/).filter((token) => token && !/^[A-Za-z_][A-Za-z0-9_]*=/.test(token));
  const binary = tokens[0]?.split("/").pop();
  if (!binary)
    return null;
  const next = tokens[1];
  return next && /^[a-z][a-z0-9-]*$/.test(next) ? \`\${binary} \${next}\` : binary;
};
function findSuspectEntries(entries) {
  const signatureKey = (entry) => \`\${entry.sessionId}
\${commandSignature(entry.segment || entry.command)}\`;
  const denials = entries.filter((entry) => entry.decision !== "allow");
  const repeats = denials.filter((entry) => entry.sessionId).reduce((counts, entry) => counts.set(signatureKey(entry), (counts.get(signatureKey(entry)) ?? 0) + 1), new Map);
  return new Set(denials.filter((entry) => entry.failureStage || (repeats.get(signatureKey(entry)) ?? 0) >= 2));
}

// src/core/policy/audit-retention-days.ts
var DEFAULT_AUDIT_RETENTION_DAYS = 30;
var MIN_AUDIT_RETENTION_DAYS = 1;
var MAX_AUDIT_RETENTION_DAYS = 365;

// src/gui/frontend/format.ts
var repoUrl = "https://github.com/kenryu42/cc-safety-net";
var formatCount = (value) => value.toLocaleString("en-US");
var plural = (count, noun, pluralNoun = \`\${noun}s\`) => \`\${formatCount(count)} \${count === 1 ? noun : pluralNoun}\`;
var dayCount = (days) => plural(days, "day");
var viewHash = (view, fields) => {
  const params = new URLSearchParams(fields.filter(([, value, fallback]) => value !== fallback).map(([key, value]) => [key, value]));
  return params.size > 0 ? \`\${view}?\${params}\` : view;
};

// src/gui/frontend/activity-filter.ts
var initialActivityFilters = () => ({
  days: 7,
  decision: "deny",
  agent: "all",
  query: "",
  command: ""
});
var decisions = new Set(["all", "deny", "allow", "error", "suspect"]);
var activityFiltersFromParams = (params) => {
  const defaults = initialActivityFilters();
  const days = Number(params.get("days"));
  const decision = params.get("decision") ?? "";
  return {
    days: Number.isInteger(days) && days > 0 ? days : defaults.days,
    decision: decisions.has(decision) ? decision : defaults.decision,
    agent: params.get("agent") ?? defaults.agent,
    query: params.get("q") ?? defaults.query,
    command: params.get("command") ?? defaults.command
  };
};
var activityHash = (filters) => {
  const defaults = initialActivityFilters();
  return viewHash("activity", [
    ["days", String(filters.days), String(defaults.days)],
    ["decision", filters.decision, defaults.decision],
    ["agent", filters.agent, defaults.agent],
    ["q", filters.query, defaults.query],
    ["command", filters.command, defaults.command]
  ]);
};
var visibleEntries = (entries, filters, suspects) => entries.filter((entry) => {
  const decisionMatches = {
    all: true,
    deny: entry.decision !== "allow",
    allow: entry.decision === "allow",
    error: Boolean(entry.failureStage),
    suspect: suspects.has(entry)
  }[filters.decision];
  if (!decisionMatches)
    return false;
  if (filters.agent !== "all" && (entry.agent || "unknown") !== filters.agent)
    return false;
  if (filters.command)
    return commandSignature(entry.segment || entry.command) === filters.command;
  return [entry.ruleId, entry.segment || entry.command].filter(Boolean).join(" ").toLowerCase().includes(filters.query.trim().toLowerCase());
});

// src/gui/frontend/report.ts
var reportIssueUrl = "https://github.com/kenryu42/cc-safety-net/issues/new?template=false_positive.yml";
var reportUrlLimit = 8000;
var titleCommandLimit = 80;
var reportTitle = (ruleId, command) => {
  const firstLine = command.trim().split(\`
\`)[0] ?? "";
  const shown = firstLine.length > titleCommandLimit ? \`\${firstLine.slice(0, titleCommandLimit)}…\` : firstLine;
  return \`[False Positive]: \${ruleId ? \`\${ruleId} \` : ""}blocked \\\`\${shown}\\\`\`;
};
var endsAtPathBoundary = (following) => following === "" || /^[/\\\\\\s'"]/.test(following);
var scrubReportPaths = (text, cwd, home) => [
  [cwd, "<project>"],
  [home, "~"]
].reduce((scrubbed, [from, to]) => from ? scrubbed.split(from).reduce((joined, part) => joined + (endsAtPathBoundary(part) ? to : from) + part) : scrubbed, text);
var buildReportUrl = (fields) => {
  const url = new URL(reportIssueUrl);
  Object.entries(fields).filter(([, value]) => value).forEach(([field, value]) => {
    url.searchParams.set(field, value);
  });
  return url.toString();
};
var buildReportRequest = (fields, dropped = []) => {
  const url = buildReportUrl(fields);
  if (url.length <= reportUrlLimit)
    return { url, dropped };
  const largest = Object.entries(fields).filter(([, value]) => value).sort((left, right) => right[1].length - left[1].length)[0];
  if (!largest)
    return { url, dropped };
  return buildReportRequest({ ...fields, [largest[0]]: "" }, [...dropped, largest[0]]);
};

// src/core/policy/safety-level.ts
var SAFETY_LEVEL_CAPABILITIES = {
  standard: { fail_closed: false, paranoid_rm: false, paranoid_interpreters: false },
  strict: { fail_closed: true, paranoid_rm: false, paranoid_interpreters: false },
  paranoid: { fail_closed: true, paranoid_rm: true, paranoid_interpreters: true }
};

// src/gui/frontend/health.ts
var groupIntegrations = (rows) => ({
  installed: rows.filter((row) => row.status === "active"),
  available: rows.filter((row) => row.status !== "active" && row.version !== null),
  missing: rows.filter((row) => row.status !== "active" && row.version === null)
});
var attentionItems = (facts) => [
  ...(facts.targets ?? []).filter((row) => row.status === "disabled").map((row) => ({
    text: \`\${row.label} is detected but its hook is disabled.\`,
    href: "#integrations"
  })),
  facts.suspects > 0 ? {
    text: \`\${plural(facts.suspects, "block")} in the last \${dayCount(facts.days)} \${facts.suspects === 1 ? "looks" : "look"} like a false positive.\`,
    href: "#activity?decision=suspect"
  } : null,
  facts.errors > 0 ? {
    text: \`\${plural(facts.errors, "guard error")} in the last \${dayCount(facts.days)}: commands blocked because evaluation failed, not by policy.\`,
    href: "#activity?decision=error"
  } : null,
  facts.update?.updateAvailable ? { text: \`Version \${facts.update.latestVersion} is available.\`, href: \`\${repoUrl}/releases\` } : null
].filter((item) => item !== null);

// src/gui/frontend/views/integrations.ts
var targets = null;
var busy = new Set;
var integrationTargets = () => targets;
var statusText = (row) => ({
  active: "Hook installed",
  disabled: "Hook disabled",
  "not-installed": "",
  "not-inspected": "Status unknown: its settings file could not be read"
})[row.status];
var rowHtml = (row) => {
  const uninstall = row.status === "active";
  const action = row.version === null ? "" : \`<button type="button" data-integration-action="\${uninstall ? "uninstall" : "install"}" data-integration-target="\${escapeHtml(row.target)}"\${busy.has(row.target) ? " disabled" : ""}>\${busy.has(row.target) ? uninstall ? "Uninstalling…" : "Installing…" : uninstall ? "Uninstall" : row.status === "disabled" ? "Enable" : "Install"}</button>\`;
  return \`<li class="setting-row agent-row">
    <span class="agent-name">\${escapeHtml(row.label)}</span>
    <span class="agent-version"\${row.version === null ? "" : \` title="v\${escapeHtml(row.version)}"\`}>\${row.version === null ? "Not detected" : \`v\${escapeHtml(row.version)}\`}</span>
    <span class="agent-status \${row.status}">\${statusText(row)}</span>
    <span class="agent-action">\${action}</span>
    \${row.note ? \`<p class="notice \${row.note.kind}">\${escapeHtml(row.note.text)}</p>\` : ""}
  </li>\`;
};
var groupHtml = (title, rows, sub = "") => rows.length === 0 ? "" : \`<section class="section"><div class="section-head"><div><h3 class="section-title">\${title} <span class="count">\${rows.length}</span></h3>\${sub ? \`<p class="section-sub">\${sub}</p>\` : ""}</div></div><ul class="card rows">\${rows.map(rowHtml).join("")}</ul></section>\`;
var render = () => {
  if (!targets)
    return;
  const groups = groupIntegrations(targets);
  qs("integrations-list").innerHTML = groupHtml("Installed", groups.installed) + groupHtml("Detected on this machine", groups.available, groups.installed.length === 0 ? "No agent has the hook yet. Install it for each agent you use; until then its commands are not checked." : "") + (groups.missing.length === 0 ? "" : \`<details class="section missing-agents"><summary>Not detected on this machine <span class="count">\${groups.missing.length}</span></summary><ul class="card rows">\${groups.missing.map(rowHtml).join("")}</ul></details>\`);
};
var loadIntegrations = async () => {
  const result = await requestJson("/api/integrations");
  if (!result.ok || !Array.isArray(result.data?.targets)) {
    qs("integrations-list").innerHTML = \`<p class="empty">Could not check agents: \${escapeHtml(errorText(result))}</p>\`;
    return;
  }
  targets = result.data.targets;
  qs("integrations-node-version").textContent = result.data.system.nodeVersion ?? "unknown";
  qs("integrations-platform").textContent = result.data.system.platform;
  render();
  emit("integrations");
};
var runAction = async (button) => {
  const target = button.dataset.integrationTarget;
  const action = button.dataset.integrationAction;
  if (!target || busy.has(target))
    return;
  busy.add(target);
  render();
  const result = await requestJson(\`/api/\${action}\`, {
    method: "POST",
    body: JSON.stringify({ target })
  });
  busy.delete(target);
  const row = targets?.find((entry) => entry.target === target);
  if (!row)
    return;
  const ok = result.ok && result.data.ok === true;
  if (ok)
    row.status = action === "install" ? "active" : "not-installed";
  row.note = {
    kind: ok ? "ok" : "error",
    text: ok ? result.data.output : result.data?.output || errorText(result)
  };
  if (!ok)
    notify(action === "install" ? "Install failed" : "Uninstall failed", "error");
  render();
  emit("integrations");
};
var initIntegrations = () => {
  qs("integrations-refresh").addEventListener("click", (event) => {
    runRefresh(event.currentTarget, loadIntegrations);
  });
  qs("integrations-list").addEventListener("click", (event) => {
    const button = event.target.closest("[data-integration-action]");
    if (button)
      runAction(button);
  });
};

// src/gui/frontend/views/overview.ts
var OVERVIEW_DAYS = 7;
var feed = null;
var update = null;
var renderStatusCard = () => {
  const loaded = shared.policy;
  if (!loaded)
    return;
  const targets = integrationTargets();
  const active = (targets ?? []).filter((row) => row.status === "active");
  const policy = loaded.policy;
  const off = [
    policy.destructive_command_protection.enabled ? null : "Command protection is off",
    policy.secret_protection.enabled ? null : "Secret protection is off"
  ].filter((text) => text !== null);
  const headline = loaded.errors.length > 0 ? "Your policy file needs repair" : !targets ? "Checking your agents…" : active.length === 0 ? "Not checking any agent yet" : off.length > 0 ? "Partly protected" : "Protected";
  const customized = (loaded.preview?.counts.effectiveCustomizations ?? 0) > 0 || Object.entries(policy.safety.overrides).some(([key, value]) => value !== SAFETY_LEVEL_CAPABILITIES[policy.safety.level][key]);
  const level = policy.safety.level[0]?.toUpperCase() + policy.safety.level.slice(1);
  const facts = [
    \`\${level} preset\${customized ? ", customized" : ""}\`,
    ...off.length > 0 ? off : [
      loaded.preview ? \`\${loaded.preview.counts.enabled} command rules on\` : null,
      "Secret protection on"
    ],
    active.length > 0 ? \`Hook active in \${active.length <= 3 ? active.map((row) => row.label).join(", ") : plural(active.length, "agent")}\` : null
  ].filter((text) => text !== null);
  const [actionHref, actionLabel] = headline === "Not checking any agent yet" ? ["#integrations", "Install a hook"] : ["#policy", loaded.errors.length > 0 ? "Repair" : "Configure"];
  qs("status-card").innerHTML = \`<div>
      <p class="status-headline">\${escapeHtml(headline)}</p>
      <p class="status-facts">\${facts.map(escapeHtml).join(" · ")}</p>
    </div>
    <a class="link-button" href="\${actionHref}">\${actionLabel}</a>\`;
};
var renderAttention = () => {
  const items = attentionItems({
    targets: integrationTargets(),
    update,
    errors: feed?.counts.errors ?? 0,
    suspects: feed ? findSuspectEntries(feed.entries).size : 0,
    days: feed?.days ?? OVERVIEW_DAYS
  });
  qs("attention").hidden = items.length === 0;
  qs("attention-list").innerHTML = items.map((item) => \`<li><a class="list-row attention-row" href="\${escapeHtml(item.href)}"\${item.href.startsWith("#") ? "" : ' target="_blank" rel="noopener"'}><span>\${escapeHtml(item.text)}</span><span class="row-action">\${item.href.startsWith("#activity") ? "Review" : item.href.startsWith("#") ? "Fix" : "Release notes"}</span></a></li>\`).join("");
};
var sparkline = (byDay, noun) => {
  const max = Math.max(...byDay, 1);
  return \`<div class="tile-spark" role="img" aria-label="\${escapeHtml(\`\${noun} per day, oldest to newest: \${byDay.join(", ")}\`)}">\${byDay.map((count) => \`<span class="spark-bar\${count === 0 ? " spark-zero" : ""}" style="height:\${count === 0 ? 2 : Math.max(3, Math.round(count / max * 36))}px" title="\${formatCount(count)}"></span>\`).join("")}</div>\`;
};
var ruleHref = (ruleId) => ruleId.startsWith("custom.") ? \`#rules?focus=\${encodeURIComponent(ruleId)}\` : \`#activity?q=\${encodeURIComponent(ruleId)}\`;
var renderActivity = () => {
  if (!feed)
    return;
  const loaded = feed;
  qs("overview-tiles").innerHTML = [
    [loaded.counts.blocked, "Blocked", loaded.counts.blockedByDay],
    [loaded.totalInWindow, "Commands checked", loaded.counts.analyzedByDay]
  ].map(([value, label, byDay]) => \`<div class="tile"><div><strong>\${formatCount(value)}</strong><span>\${label} · last \${dayCount(loaded.days)}</span></div>\${sparkline(byDay, label)}</div>\`).join("");
  const blocks = loaded.entries.filter((entry) => entry.decision !== "allow").slice(0, 8);
  qs("recent-blocks").innerHTML = blocks.length === 0 ? \`<p class="empty">Nothing was blocked in the last \${dayCount(loaded.days)}.</p>\` : \`<ul class="card list">\${blocks.map((entry) => \`<li><a class="list-row compact-row" href="\${entry.ruleId ? ruleHref(entry.ruleId) : "#activity"}">
              <time datetime="\${escapeHtml(entry.ts)}">\${escapeHtml(formatRelativeTime(entry.ts))}</time>
              <span class="feed-agent">\${escapeHtml(entry.agent && entry.agent !== "unknown" ? agentLabels[entry.agent] ?? entry.agent : "")}</span>
              <code class="feed-command">\${escapeHtml(entry.segment || entry.command || "(no command recorded)")}</code>
              <span class="feed-rule">\${escapeHtml(entry.failureStage ? "guard error" : entry.ruleId ?? "")}</span>
            </a></li>\`).join("")}</ul>\`;
  const top = Object.entries(loaded.counts.rules).sort((a, b) => b[1] - a[1]).slice(0, 5);
  qs("top-rules-title").textContent = \`Most-triggered rules · last \${dayCount(loaded.days)}\`;
  qs("top-rules").innerHTML = top.length === 0 ? '<p class="empty">No rule has blocked anything yet.</p>' : \`<ul class="card list">\${top.map(([ruleId, count]) => \`<li><a class="list-row rule-count-row" href="\${ruleHref(ruleId)}">
              <code class="rule-label">\${escapeHtml(ruleId)}</code>
              <span class="count">\${plural(count, "block")}</span>
            </a></li>\`).join("")}</ul>\`;
};
var loadOverview = async () => {
  const result = await requestJson(\`/api/activity?days=\${Math.min(OVERVIEW_DAYS, retentionDays())}\`);
  if (!result.ok || !result.data) {
    qs("recent-blocks").innerHTML = \`<p class="empty">Could not load activity: \${escapeHtml(errorText(result))}</p>\`;
    return;
  }
  feed = result.data;
  renderActivity();
  renderAttention();
};
var loadHealth = async () => {
  const result = await requestJson("/api/health");
  update = result.ok ? result.data?.update ?? null : null;
  renderAttention();
};
var starIcons = {
  outline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"></path></svg>',
  filled: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"></path></svg>'
};
var starContext = { starCount: null, blockedTotal: 0 };
var starCountHtml = (count) => typeof count === "number" ? \`<span class="star-count">\${count >= 1000 ? \`\${(count / 1000).toFixed(1).replace(/\\.0$/, "")}k\` : count}</span>\` : "";
var renderStarPitch = (starred) => {
  const evidence = starContext.blockedTotal > 0 ? \`CC Safety Net has blocked <strong>\${formatCount(starContext.blockedTotal)}</strong> risky \${starContext.blockedTotal === 1 ? "command" : "commands"} on this machine in the last \${escapeHtml(dayCount(retentionDays()))}.\` : "";
  qs("star-pitch-text").innerHTML = starred ? evidence : evidence ? \`\${evidence} If it saved your work, star it on GitHub.\` : "If CC Safety Net is useful to you, star it on GitHub.";
};
var renderStarLink = (href) => {
  qs("star-slot").innerHTML = \`<a class="star-cta" href="\${escapeHtml(href)}" target="_blank" rel="noopener" aria-label="Star CC Safety Net on GitHub (opens github.com)"><span class="star-icon" aria-hidden="true">\${starIcons.outline}</span><span class="star-label">Star on GitHub</span>\${starCountHtml(starContext.starCount)}</a>\`;
  qs("star-row").hidden = false;
};
var loadStarContext = async () => {
  const result = await requestJson("/api/star/context");
  starContext = result.ok && result.data ? result.data : { starCount: null, blockedTotal: 0 };
  renderStarPitch(false);
  qs("star-slot").innerHTML = \`<button type="button" class="star-cta" aria-label="Star CC Safety Net on GitHub"><span class="star-icon" aria-hidden="true">\${starIcons.outline}</span><span class="star-label">Star on GitHub</span>\${starCountHtml(starContext.starCount)}</button>\`;
  qs("star-row").hidden = false;
};
var starRepo = async (button) => {
  button.disabled = true;
  const result = await requestJson("/api/star", { method: "POST" });
  if (!(result.ok && result.data?.ok === true)) {
    renderStarLink(result.data?.fallbackUrl ?? repoUrl);
    return;
  }
  button.querySelector(".star-icon").innerHTML = starIcons.filled;
  button.querySelector(".star-label").textContent = "Starred. Thank you.";
  button.setAttribute("aria-label", "CC Safety Net starred on GitHub");
  button.classList.add("starred");
  renderStarPitch(true);
};
var initOverview = () => {
  on("policy", renderStatusCard);
  on("integrations", () => {
    renderStatusCard();
    renderAttention();
  });
  qs("star-slot").addEventListener("click", (event) => {
    const button = event.target.closest(".star-cta");
    if (button instanceof HTMLButtonElement)
      starRepo(button);
  });
};

// src/gui/frontend/views/activity.ts
var filters = initialActivityFilters();
var activity = null;
var suspects = new Set;
var renderedEntries = [];
var queryTimer;
var syncHash = () => {
  if (document.body.dataset.view === "activity")
    history.replaceState(null, "", \`#\${activityHash(filters)}\`);
};
var retentionDays = () => shared.policy?.policy.audit.retention_days ?? DEFAULT_AUDIT_RETENTION_DAYS;
var knownRuleIds = () => new Set([
  ...shared.policy?.destructiveCommandRules ?? [],
  ...shared.policy?.secretPatterns ?? []
].map((rule) => rule.id));
var decisionLabel = (entry) => entry.failureStage ? "Error" : entry.decision === "allow" ? "Allowed" : "Blocked";
var timeLabel = (ts) => new Date(ts).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
var dayLabel = (ts) => {
  const date = new Date(ts).toDateString();
  if (date === new Date().toDateString())
    return "Today";
  if (date === new Date(Date.now() - 86400000).toDateString())
    return "Yesterday";
  return new Date(ts).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
};
var ruleLink = (ruleId) => ruleId.startsWith("custom.") ? \`<a class="rule-id" href="#rules?focus=\${encodeURIComponent(ruleId)}" title="Show this custom rule">\${escapeHtml(ruleId)}</a>\` : knownRuleIds().has(ruleId) ? \`<a class="rule-id" href="#policy?q=\${encodeURIComponent(ruleId)}" title="Show this protection">\${escapeHtml(ruleId)}</a>\` : \`<code class="rule-id">\${escapeHtml(ruleId)}</code>\`;
var entryCommand = (entry) => entry.segment || entry.command || "";
var feedRowHtml = (entry, index) => {
  const blocked = entry.decision !== "allow";
  const command = entryCommand(entry);
  const agent = entry.agent && entry.agent !== "unknown" ? agentLabels[entry.agent] ?? entry.agent : "";
  const detailRows = [
    entry.command && entry.command !== command ? ["Full command", \`<code class="block">\${escapeHtml(entry.command)}</code>\`] : null,
    entry.reason && entry.reason !== "allowed" ? ["Reason", escapeHtml(entry.reason)] : null,
    entry.ruleId ? ["Rule", ruleLink(entry.ruleId)] : null,
    entry.cwd ? ["Folder", \`<code>\${escapeHtml(entry.cwd)}</code>\`] : null,
    [
      "Time",
      \`\${escapeHtml(new Date(entry.ts).toLocaleString("en-US"))} (\${formatRelativeTime(entry.ts)})\`
    ]
  ].filter((row) => row !== null);
  return \`<li class="feed-row">
    <button type="button" class="feed-summary" aria-expanded="false" aria-controls="feed-detail-\${index}">
      <span class="chevron" aria-hidden="true"></span>
      <time datetime="\${escapeHtml(entry.ts)}">\${escapeHtml(timeLabel(entry.ts))}</time>
      <span class="decision \${entry.failureStage ? "error" : blocked ? "deny" : "allow"}">\${decisionLabel(entry)}</span>
      <span class="feed-agent">\${escapeHtml(agent)}</span>
      <code class="feed-command">\${escapeHtml(command || "(no command recorded)")}</code>
      <span class="feed-rule">\${escapeHtml(entry.ruleId ?? "")}</span>
    </button>
    <div class="feed-detail" id="feed-detail-\${index}" hidden>
      <code class="block detail-command">\${escapeHtml(command || "(no command recorded)")}</code>
      <div class="detail-actions">
        \${blocked ? \`<button type="button" class="primary" data-report-fp="\${index}">Report false positive</button>\` : \`<button type="button" class="primary" data-block-future="\${index}">Block this in future</button>\`}
        <button type="button" data-log-copy="\${index}">\${icons.copy}<span>Copy log entry</span></button>
      </div>
      <dl class="detail-rows">\${detailRows.map(([term, value]) => \`<div><dt>\${term}</dt><dd>\${value}</dd></div>\`).join("")}</dl>
    </div>
  </li>\`;
};
var renderControls = () => {
  if (!activity)
    return;
  const loaded = activity;
  const segment = (value, label, count) => \`<button type="button" data-activity-decision="\${value}" aria-pressed="\${filters.decision === value}">\${label} <span class="count">\${formatCount(count)}</span></button>\`;
  qs("activity-decision").innerHTML = [
    segment("deny", "Blocked", loaded.counts.blocked),
    segment("allow", "Allowed", loaded.counts.allowed),
    ...loaded.counts.errors > 0 ? [segment("error", "Errors", loaded.counts.errors)] : [],
    ...suspects.size > 0 ? [segment("suspect", "Likely false positive", suspects.size)] : [],
    segment("all", "All", loaded.totalInWindow)
  ].join("");
  const agentNames = Object.keys(loaded.counts.agents).filter((name) => name !== "unknown").sort();
  qs("activity-agent").innerHTML = [
    '<option value="all">All agents</option>',
    ...agentNames.map((name) => \`<option value="\${escapeHtml(name)}">\${escapeHtml(agentLabels[name] ?? name)} (\${formatCount(loaded.counts.agents[name] ?? 0)})</option>\`)
  ].join("");
  qs("activity-agent").value = filters.agent;
  qs("activity-agent").parentElement?.toggleAttribute("hidden", agentNames.length < 2);
  const retained = retentionDays();
  qs("activity-days").innerHTML = [
    ...new Set([...[7, 30, 90, 180, 365].filter((days) => days < retained), retained, loaded.days])
  ].sort((left, right) => left - right).map((days) => \`<option value="\${days}">Last \${dayCount(days)}</option>\`).join("");
  qs("activity-days").value = String(loaded.days);
  qs("activity-command-filter").hidden = !filters.command;
  qs("activity-command-filter").innerHTML = filters.command ? \`Showing blocks of <code>\${escapeHtml(filters.command)}</code> <button type="button" class="quiet" data-clear-command>Show all blocks</button>\` : "";
};
var emptyMessage = () => {
  if (filters.query || filters.command || filters.agent !== "all")
    return "Nothing matches these filters.";
  if (filters.decision === "deny")
    return \`Nothing was blocked in the last \${dayCount(activity?.days ?? filters.days)}. <button type="button" class="quiet" data-activity-decision="all">Show all activity</button>\`;
  return "No audit log entries match.";
};
var renderFeed = () => {
  if (!activity)
    return;
  const entries = visibleEntries(activity.entries, filters, suspects);
  renderedEntries = entries;
  qs("activity-feed").innerHTML = entries.length === 0 ? \`<p class="empty">\${emptyMessage()}</p>\` : entries.map((entry, index) => {
    const label = dayLabel(entry.ts);
    const previous = entries[index - 1];
    const heading = previous && dayLabel(previous.ts) === label ? "" : \`\${index === 0 ? "" : "</ul>"}<h4 class="day-heading">\${escapeHtml(label)}</h4><ul class="feed-list">\`;
    return heading + feedRowHtml(entry, index);
  }).join("") + "</ul>";
  qs("activity-count").textContent = [
    \`Showing \${formatCount(entries.length)} of \${plural(activity.totalInWindow, "entry", "entries")} from the last \${dayCount(activity.days)}.\`,
    activity.truncated ? "Only the newest 500 entries of each decision are loaded; narrow the time window to see older ones." : "",
    activity.unreadable > 0 ? \`\${plural(activity.unreadable, "log file")} could not be read, so this list is incomplete.\` : ""
  ].filter(Boolean).join(" ");
};
var loadActivity = async () => {
  const result = await requestJson(\`/api/activity?days=\${filters.days}\`);
  if (!result.ok || !result.data) {
    qs("activity-feed").innerHTML = \`<p class="empty">Could not load activity: \${escapeHtml(errorText(result))}</p>\`;
    qs("activity-count").textContent = "";
    return;
  }
  activity = result.data;
  suspects = findSuspectEntries(activity.entries);
  showPath("logs-path", activity.logsDir ?? "", activity.logsDir ? "" : "Not available");
  if (filters.agent !== "all" && !(filters.agent in activity.counts.agents))
    filters.agent = "all";
  if (filters.decision === "error" && activity.counts.errors === 0)
    filters.decision = "deny";
  if (filters.decision === "suspect" && suspects.size === 0)
    filters.decision = "deny";
  renderControls();
  renderFeed();
  syncHash();
};
var limitActivityDays = (days) => {
  filters.days = Math.min(filters.days, days);
};
var rerender = () => {
  renderControls();
  renderFeed();
  syncHash();
};
var showActivity = (params) => {
  const next = activityFiltersFromParams(params);
  if (shared.policy)
    next.days = Math.min(next.days, retentionDays());
  if (activityHash(next) === activityHash(filters))
    return;
  const reload = next.days !== filters.days;
  Object.assign(filters, next);
  qs("activity-search").value = filters.query;
  if (reload && activity) {
    loadActivity();
    return;
  }
  rerender();
};
var openReportDialog = (entry) => {
  const scrub = (text) => scrubReportPaths(text, entry.cwd, activity?.homeDir);
  qs("report-command").value = scrub(entry.command || entry.segment || "");
  qs("report-title").value = reportTitle(entry.ruleId, scrub(entry.segment || entry.command || ""));
  qs("report-why").value = "";
  qs("report-entry").value = JSON.stringify(entry, (_key, value) => typeof value === "string" ? scrub(value) : value, 2);
  qs("report-dialog").returnValue = "cancel";
  qs("report-dialog").showModal();
};
var openFalsePositiveForm = async () => {
  const fields = {
    title: qs("report-title").value,
    expected: qs("report-why").value.trim(),
    command: qs("report-command").value,
    entry: qs("report-entry").value
  };
  const request = buildReportRequest(fields);
  const copying = request.dropped.length ? navigator.clipboard.writeText(request.dropped.map((field) => \`### \${field}
\${fields[field]}\`).join(\`

\`)).then(() => true, () => false) : null;
  window.open(request.url, "_blank", "noopener");
  if (!copying)
    return;
  const names = request.dropped.join(" and ");
  notify("Report too long to prefill", "error", await copying ? \`The \${names} was copied to your clipboard. Paste it into the form on GitHub.\` : \`The \${names} was left out. Copy the log entry from Activity and paste it into the form on GitHub.\`);
};
var initActivity = () => {
  on("policy", () => {
    if (activity)
      rerender();
  });
  qs("activity-search").addEventListener("input", (event) => {
    filters.query = event.target.value;
    if (filters.command) {
      filters.command = "";
      renderControls();
    }
    clearTimeout(queryTimer);
    queryTimer = setTimeout(() => {
      renderFeed();
      syncHash();
    }, 120);
  });
  qs("activity-agent").addEventListener("change", (event) => {
    filters.agent = event.target.value;
    renderFeed();
    syncHash();
  });
  qs("activity-days").addEventListener("change", (event) => {
    filters.days = Number(event.target.value);
    loadActivity();
  });
  qs("activity-refresh").addEventListener("click", (event) => {
    runRefresh(event.currentTarget, () => Promise.all([loadOverview(), loadActivity()]));
  });
  qs("report-dialog").addEventListener("close", () => {
    if (qs("report-dialog").returnValue === "report")
      openFalsePositiveForm();
  });
  qs("activity-command-filter").addEventListener("click", (event) => {
    if (!event.target.closest("[data-clear-command]"))
      return;
    filters.command = "";
    rerender();
  });
  qs("activity-decision").addEventListener("click", (event) => {
    const button = event.target.closest("[data-activity-decision]");
    if (!button)
      return;
    filters.decision = button.dataset.activityDecision;
    filters.command = "";
    rerender();
  });
  qs("activity-feed").addEventListener("click", (event) => {
    const target = event.target;
    const showAll = target.closest("[data-activity-decision]");
    if (showAll) {
      filters.decision = showAll.dataset.activityDecision;
      rerender();
      return;
    }
    const summary = target.closest(".feed-summary");
    if (summary) {
      const expanded = summary.getAttribute("aria-expanded") !== "true";
      summary.setAttribute("aria-expanded", String(expanded));
      const detail = qs(summary.getAttribute("aria-controls") ?? "");
      const summaryCommand = summary.querySelector(".feed-command");
      detail.querySelector(".detail-command").hidden = !summaryCommand.textContent?.includes(\`
\`) && summaryCommand.scrollWidth <= summaryCommand.clientWidth;
      detail.hidden = !expanded;
      return;
    }
    const copy = target.closest("[data-log-copy]");
    const copyEntry = renderedEntries[Number(copy?.dataset.logCopy)];
    if (copy && copyEntry) {
      copyText(copy, JSON.stringify(copyEntry, null, 2));
      return;
    }
    const report = renderedEntries[Number(target.closest("[data-report-fp]")?.dataset.reportFp)];
    if (report) {
      openReportDialog(report);
      return;
    }
    const block = renderedEntries[Number(target.closest("[data-block-future]")?.dataset.blockFuture)];
    if (block)
      location.hash = \`rules?compose=\${encodeURIComponent(entryCommand(block))}\`;
  });
};

// src/gui/frontend/project-draft.ts
var clonePolicy = (policy) => JSON.parse(JSON.stringify(policy));
var markedOverrides = (marked, section, overrides) => Object.fromEntries(Object.entries(overrides).filter(([key, value]) => value !== undefined && marked.has(\`\${section}.overrides.\${key}\`)));
var withOverrides = (overrides) => Object.keys(overrides).length > 0 ? { overrides } : {};
var collectProjectProposal = (marked, policy) => {
  const sections = {
    safety: {
      ...marked.has("safety.level") ? { level: policy.safety.level } : {},
      ...withOverrides(markedOverrides(marked, "safety", policy.safety.overrides))
    },
    workflow: marked.has("workflow.worktree_mode") ? { worktree_mode: policy.workflow.worktree_mode } : {},
    destructive_command_protection: {
      ...marked.has("destructive_command_protection.enabled") ? { enabled: policy.destructive_command_protection.enabled } : {},
      ...withOverrides(markedOverrides(marked, "destructive_command_protection", policy.destructive_command_protection.overrides)),
      ...marked.has("destructive_command_protection.allow_paths") ? { allow_paths: policy.destructive_command_protection.allow_paths } : {}
    },
    secret_protection: {
      ...marked.has("secret_protection.enabled") ? { enabled: policy.secret_protection.enabled } : {},
      ...withOverrides(markedOverrides(marked, "secret_protection", policy.secret_protection.overrides)),
      ...marked.has("secret_protection.deny_paths") ? { deny_paths: policy.secret_protection.deny_paths } : {},
      ...marked.has("secret_protection.allow_paths") ? { allow_paths: policy.secret_protection.allow_paths } : {}
    }
  };
  return {
    version: 1,
    ...Object.fromEntries(Object.entries(sections).filter(([, fields]) => Object.keys(fields).length > 0))
  };
};
var projectMarkedFields = (projection) => {
  const destructive = projection.destructive_command_protection ?? {};
  const secret = projection.secret_protection ?? {};
  return [
    ...projection.safety?.level === undefined ? [] : ["safety.level"],
    ...Object.keys(projection.safety?.overrides ?? {}).map((key) => \`safety.overrides.\${key}\`),
    ...projection.workflow?.worktree_mode === undefined ? [] : ["workflow.worktree_mode"],
    ...destructive.enabled === undefined ? [] : ["destructive_command_protection.enabled"],
    ...Object.keys(destructive.overrides ?? {}).map((id) => \`destructive_command_protection.overrides.\${id}\`),
    ...destructive.allow_paths === undefined ? [] : ["destructive_command_protection.allow_paths"],
    ...secret.enabled === undefined ? [] : ["secret_protection.enabled"],
    ...Object.keys(secret.overrides ?? {}).map((id) => \`secret_protection.overrides.\${id}\`),
    ...secret.deny_paths === undefined ? [] : ["secret_protection.deny_paths"],
    ...secret.allow_paths === undefined ? [] : ["secret_protection.allow_paths"]
  ];
};
var overlayProjectProposal = (baseline, proposal) => {
  const displayed = clonePolicy(baseline);
  const destructive = proposal.destructive_command_protection ?? {};
  const secret = proposal.secret_protection ?? {};
  if (proposal.safety?.level)
    displayed.safety.level = proposal.safety.level;
  Object.assign(displayed.safety.overrides, proposal.safety?.overrides ?? {});
  if (proposal.workflow?.worktree_mode !== undefined)
    displayed.workflow.worktree_mode = proposal.workflow.worktree_mode;
  if (destructive.enabled !== undefined)
    displayed.destructive_command_protection.enabled = destructive.enabled;
  Object.assign(displayed.destructive_command_protection.overrides, destructive.overrides ?? {});
  if (destructive.allow_paths)
    displayed.destructive_command_protection.allow_paths = destructive.allow_paths;
  if (secret.enabled !== undefined)
    displayed.secret_protection.enabled = secret.enabled;
  Object.assign(displayed.secret_protection.overrides, secret.overrides ?? {});
  if (secret.deny_paths)
    displayed.secret_protection.deny_paths = secret.deny_paths;
  if (secret.allow_paths)
    displayed.secret_protection.allow_paths = secret.allow_paths;
  return displayed;
};
var seedProjectDraft = (data) => {
  if (!data.baseline)
    return null;
  if (!Array.isArray(data.userPolicyDiagnostics) || data.userPolicyDiagnostics.length > 0)
    return null;
  const marked = new Set(projectMarkedFields(data.projection ?? {}));
  const policy = overlayProjectProposal(data.baseline, data.projection ?? {});
  return {
    baseline: data.baseline,
    marked,
    policy,
    snapshot: JSON.stringify(collectProjectProposal(marked, policy))
  };
};

// src/gui/frontend/policy-summary.ts
var safetyLevels = {
  standard: [
    "Standard",
    "Blocks recognizable destructive commands and reading sensitive files. Recommended for normal coding."
  ],
  strict: [
    "Strict",
    "Also blocks commands it cannot fully parse and listing sensitive paths. Occasional false positives on advanced shell."
  ],
  paranoid: [
    "Paranoid",
    "Also blocks rm -rf inside your project and interpreter one-liners. Expect friction; for untrusted agents or high-stakes repos."
  ]
};
var capabilityNames = {
  fail_closed: ["Fail closed", "Block commands the parser cannot fully understand."],
  paranoid_rm: ["Paranoid rm -rf checks", "Block rm -rf inside the project, except temp paths."],
  paranoid_interpreters: [
    "Paranoid interpreters",
    "Block interpreter one-liners such as python -c."
  ]
};
var levelName = (level) => safetyLevels[level][0];
var tierForRule = (rule) => !rule.activationCapability ? "normal" : rule.activationCapability === "fail_closed" ? "strict" : "paranoid";
var commandRuleGroups = (rules) => {
  const alwaysOn = rules.filter((rule) => rule.catastrophic);
  const configurable = rules.filter((rule) => !rule.catastrophic);
  return [
    ...alwaysOn.length > 0 ? [{ key: "always-on", title: "Always on", rules: alwaysOn }] : [],
    ...[...new Set(configurable.map((rule) => rule.category))].map((category) => ({
      key: category,
      title: category,
      rules: configurable.filter((rule) => rule.category === category)
    }))
  ];
};
var policyFiltersFromParams = (params) => ({
  query: params.get("q") ?? "",
  changedOnly: params.get("show") === "changed"
});
var policyHash = (filters) => viewHash("policy", [
  ["q", filters.query, ""],
  ["show", filters.changedOnly ? "changed" : "all", "all"]
]);
var ruleNote = (rule, effective, capabilities) => {
  const capability = rule.activationCapability;
  if (effective.source === "rule_override")
    return "Changed by you";
  if (effective.source === "capability_override" && capability)
    return \`\${capabilityNames[capability][0]} forced \${effective.enabled ? "on" : "off"} in Advanced\`;
  if (effective.source === "environment") {
    const source = [...capability ? capabilities[capability]?.sources ?? [] : []].reverse().find((item) => item.startsWith("env "));
    return source ? \`Set by environment: \${source.slice(4)}\` : "Set by environment";
  }
  if (effective.enabled || effective.source === "master_disabled")
    return null;
  return \`Needs the \${tierForRule(rule) === "strict" ? "Strict" : "Paranoid"} preset\`;
};
var policyChanges = (saved, draft, labels) => {
  const onOff = (value) => value ? "on" : "off";
  const overrideChanges = (before, after) => [...new Set([...Object.keys(before), ...Object.keys(after)])].filter((id) => before[id] !== after[id]).map((id) => \`\${labels[id] ?? id}: \${after[id] ?? "default"}\`);
  const pathChanges = (name, before, after) => {
    const added = after.filter((path) => !before.includes(path)).length;
    const removed = before.filter((path) => !after.includes(path)).length;
    if (added === 0 && removed === 0)
      return null;
    return \`\${name}: \${[added ? \`\${added} added\` : "", removed ? \`\${removed} removed\` : ""].filter(Boolean).join(", ")}\`;
  };
  return [
    saved.safety.level === draft.safety.level ? null : \`Preset: \${levelName(saved.safety.level)} → \${levelName(draft.safety.level)}\`,
    ...Object.keys(capabilityNames).filter((key) => saved.safety.overrides[key] !== draft.safety.overrides[key]).map((key) => {
      const value = draft.safety.overrides[key];
      return \`\${capabilityNames[key][0]}: \${value === undefined ? "from preset" : value ? "forced on" : "forced off"}\`;
    }),
    saved.workflow.worktree_mode === draft.workflow.worktree_mode ? null : \`Discarding changes in linked worktrees: \${draft.workflow.worktree_mode ? "allowed" : "blocked"}\`,
    saved.destructive_command_protection.enabled === draft.destructive_command_protection.enabled ? null : \`Command protection: \${onOff(draft.destructive_command_protection.enabled)}\`,
    saved.secret_protection.enabled === draft.secret_protection.enabled ? null : \`Secret protection: \${onOff(draft.secret_protection.enabled)}\`,
    ...overrideChanges(saved.destructive_command_protection.overrides, draft.destructive_command_protection.overrides),
    ...overrideChanges(saved.secret_protection.overrides, draft.secret_protection.overrides),
    pathChanges("Allowed delete paths", saved.destructive_command_protection.allow_paths, draft.destructive_command_protection.allow_paths),
    pathChanges("Always-blocked paths", saved.secret_protection.deny_paths, draft.secret_protection.deny_paths),
    pathChanges("Secret pattern exemptions", saved.secret_protection.allow_paths, draft.secret_protection.allow_paths)
  ].filter((change) => change !== null);
};

// src/gui/frontend/shortcuts.ts
var textEntryTags = new Set(["INPUT", "TEXTAREA", "SELECT"]);
var isSearchShortcut = (event, target) => event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey && !textEntryTags.has(target.tagName) && !target.isContentEditable;

// src/gui/frontend/views/policy.ts
var secretCategoryNames = {
  Basename: "Sensitive file names",
  Pattern: "Sensitive file name patterns",
  "Home path": "Sensitive home folders",
  Variant: "Key file name variants",
  Extension: "Sensitive file extensions",
  "Extension pattern": "Sensitive extension patterns",
  "Coding CLI credential": "Coding agent credentials",
  "Coding CLI config": "Coding agent settings"
};
var state;
var draftPolicy;
var preview = null;
var previewRequestId = 0;
var testerRequestId = 0;
var projectDraft = null;
var markedFields = new Set;
var busy2 = false;
var showChangedOnly = false;
var groupExpanded = new Map;
var searchQuery = () => qs("policy-search").value.trim().toLowerCase();
var filtering = () => searchQuery() !== "" || showChangedOnly;
var currentFilters = () => ({
  query: qs("policy-search").value,
  changedOnly: showChangedOnly
});
var syncHash2 = () => {
  if (document.body.dataset.view === "policy")
    history.replaceState(null, "", \`#\${policyHash(currentFilters())}\`);
};
var setChangedOnly = (changedOnly) => {
  showChangedOnly = changedOnly;
  document.querySelectorAll("[data-policy-show]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.getAttribute("data-policy-show") === "changed" === changedOnly));
  });
};
var collectFormPolicy = () => ({
  version: 1,
  safety: {
    level: draftPolicy.safety.level,
    overrides: Object.fromEntries(Object.entries(draftPolicy.safety.overrides).filter(([, value]) => typeof value === "boolean"))
  },
  workflow: draftPolicy.workflow,
  destructive_command_protection: draftPolicy.destructive_command_protection,
  secret_protection: {
    enabled: draftPolicy.secret_protection.enabled,
    overrides: draftPolicy.secret_protection.overrides,
    deny_paths: draftPolicy.secret_protection.deny_paths,
    allow_paths: draftPolicy.secret_protection.allow_paths
  },
  audit: draftPolicy.audit
});
var effectivePreviewPolicy = (policy) => {
  const baseline = projectDraft?.baseline;
  if (!baseline)
    return policy;
  const union = (user, project) => [...new Set([...user, ...project])];
  return {
    ...policy,
    destructive_command_protection: {
      ...policy.destructive_command_protection,
      allow_paths: union(baseline.destructive_command_protection.allow_paths, policy.destructive_command_protection.allow_paths)
    },
    secret_protection: {
      ...policy.secret_protection,
      deny_paths: union(baseline.secret_protection.deny_paths, policy.secret_protection.deny_paths),
      allow_paths: union(baseline.secret_protection.allow_paths, policy.secret_protection.allow_paths)
    }
  };
};
var requestPolicyPreview = (policy) => requestJson("/api/policy/preview", { method: "POST", body: JSON.stringify(policy) });
var projectFieldChip = (field) => {
  if (!projectDraft)
    return "";
  if (!markedFields.has(field))
    return '<span class="project-chip inherited">Inherited</span>';
  return \`<button type="button" class="project-chip" data-unmark-field="\${escapeHtml(field)}" title="Set by this project. Click to stop setting it." aria-label="Set by project: \${escapeHtml(field)}. Activate to inherit again.">Project</button>\`;
};
var projectChipSlots = [
  ["destructive-enabled-chip", "destructive_command_protection.enabled"],
  ["secret-enabled-chip", "secret_protection.enabled"],
  ["allow-paths-chip", "destructive_command_protection.allow_paths"],
  ["deny-paths-chip", "secret_protection.deny_paths"],
  ["secret-allow-paths-chip", "secret_protection.allow_paths"],
  ["safety-level-chip", "safety.level"]
];
var syncProjectChips = () => {
  projectChipSlots.forEach(([id, field]) => {
    qs(id).innerHTML = projectFieldChip(field);
  });
};
var markProjectField = (field) => {
  if (!projectDraft || markedFields.has(field))
    return;
  markedFields.add(field);
  syncProjectChips();
};
var unmarkProjectField = (field) => {
  if (!projectDraft || !markedFields.has(field))
    return;
  markedFields.delete(field);
  draftPolicy = overlayProjectProposal(projectDraft.baseline, collectProjectProposal(markedFields, draftPolicy));
  renderPolicySections();
  refreshPolicyPreview();
};
var markProjectOverride = (section, ruleId) => {
  if (projectDraft)
    markedFields.add(\`\${section}.overrides.\${ruleId}\`);
};
var ruleLabels = () => Object.fromEntries([...state?.destructiveCommandRules ?? [], ...state?.secretPatterns ?? []].map((rule) => [
  rule.id,
  rule.label
]));
var setBanner = () => {
  const saved = state;
  const notices = [
    saved && !saved.policy.destructive_command_protection.enabled ? "Command protection is off: built-in destructive command rules are not enforced. Catastrophic and custom rules still apply." : null,
    saved && !saved.policy.secret_protection.enabled ? "Secret protection is off: sensitive files and deny paths are not blocked." : null,
    saved?.configState && saved.configState.state !== "ready" ? \`A fallback configuration is being enforced: \${saved.configState.reason}\` : null
  ].filter((notice) => notice !== null);
  qs("protection-banner").innerHTML = notices.map((notice) => \`<p>\${escapeHtml(notice)}</p>\`).concat(notices.length > 0 && !location.hash.startsWith("#policy") ? ['<a href="#policy">Open Protections</a>'] : []).join("");
  qs("protection-banner").hidden = notices.length === 0;
};
var savedComparisonPolicy = () => projectDraft ? overlayProjectProposal(projectDraft.baseline, JSON.parse(projectDraft.snapshot)) : state?.policy;
var renderSavebar = () => {
  qs("policy-savebar").hidden = !shared.dirty;
  qs("save").textContent = projectDraft ? "Review and apply" : "Save";
  if (!shared.dirty || !state)
    return;
  const changes = policyChanges(savedComparisonPolicy(), draftPolicy, ruleLabels());
  qs("savebar-title").textContent = changes.length === 0 ? "Unsaved changes" : plural(changes.length, "unsaved change");
  qs("savebar-summary").textContent = changes.slice(0, 3).join("; ") + (changes.length > 3 ? \`; and \${changes.length - 3} more\` : "");
};
var syncRawFromForm = () => {
  if (state?.errors.length)
    return;
  qs("raw").value = \`\${JSON.stringify(projectDraft ? collectProjectProposal(markedFields, draftPolicy) : collectFormPolicy(), null, 2)}
\`;
  qs("raw-source").textContent = projectDraft ? \`Only the fields set by this project. Written to \${projectDraft.path}.\` : "Read-only. Mirrors the settings above.";
};
var updateDirtyStatus = () => {
  if (!state || state.errors.length)
    return;
  const wasDirty = shared.dirty;
  if (projectDraft) {
    shared.dirty = JSON.stringify(collectProjectProposal(markedFields, draftPolicy)) !== projectDraft.snapshot;
  }
  if (!projectDraft) {
    const draftJson = JSON.stringify(collectFormPolicy());
    shared.dirty = draftJson !== JSON.stringify(state.policy);
    if (shared.dirty)
      sessionStorage.setItem("cc-safety-net-draft", draftJson);
    if (!shared.dirty)
      sessionStorage.removeItem("cc-safety-net-draft");
  }
  renderSavebar();
  updateActions();
  if (wasDirty !== shared.dirty)
    emit("dirty");
};
var afterEdit = (refreshPreview = true) => {
  syncRawFromForm();
  updateDirtyStatus();
  if (refreshPreview)
    refreshPolicyPreview();
};
var updateActions = () => {
  const hasErrors = (state?.errors.length ?? 0) > 0;
  qs("save").disabled = busy2 || !state || hasErrors;
  qs("repair").disabled = busy2 || !hasErrors;
  qs("reset").disabled = busy2;
  qs("retention-days").disabled = busy2;
};
var runExclusive = async (pendingText, fn) => {
  if (busy2)
    return;
  busy2 = true;
  updateActions();
  notify(pendingText);
  await fn().finally(() => {
    busy2 = false;
    updateActions();
  });
};
var groupRules = (rules) => [...new Set(rules.map((rule) => rule.category))].map((category) => ({
  category,
  rules: rules.filter((rule) => rule.category === category)
}));
var matches = (query, fields) => fields.join(" ").toLowerCase().includes(query);
var secretRuleIsActive = (rule, overrides) => overrides[rule.id] ? overrides[rule.id] === "on" : !rule.defaultOff;
var destructiveChanged = (rule) => draftPolicy.destructive_command_protection.overrides[rule.id] !== undefined || ["rule_override", "capability_override", "environment"].includes(preview?.rules[rule.id]?.source ?? "");
var secretChanged = (rule) => draftPolicy.secret_protection.overrides[rule.id] !== undefined;
var categoryHtml = (options) => {
  const expanded = groupExpanded.get(options.key) ?? filtering();
  const contentId = \`group-\${options.key.toLowerCase().replace(/[^a-z0-9]+/g, "-")}\`;
  return \`<section class="rule-group">
    <div class="rule-group-head">
      <button type="button" class="group-toggle" data-group-toggle="\${escapeHtml(options.key)}" aria-expanded="\${expanded}" aria-controls="\${contentId}">
        <span class="chevron" aria-hidden="true"></span>
        <span class="group-title">\${escapeHtml(options.title)}</span>
        <span class="group-counts">\${options.counts}</span>
      </button>
      \${options.bulkSwitch}
    </div>
    <ul class="rule-list" id="\${contentId}" \${expanded ? "" : "hidden"}>\${options.rowsHtml}</ul>
  </section>\`;
};
var ruleRowHtml = (row) => \`<li class="rule-row\${row.disabled ? " row-disabled" : ""}" data-rule-row="\${escapeHtml(row.id)}">
    \${row.control}
    <div class="rule-body">
      <div class="rule-line">\${row.heading}\${row.note ? \`<span class="rule-note \${row.noteTone}">\${escapeHtml(row.note)}</span>\` : ""}\${row.actions}</div>
      \${row.description ? \`<p class="rule-description">\${escapeHtml(row.description)}</p>\` : ""}
    </div>
    \${row.info}
  </li>\`;
var offCount = (off) => off > 0 ? \` · <span class="off-count">\${off} off</span>\` : "";
var renderDestructiveCommands = () => {
  if (!state || !preview)
    return;
  const effectiveState = preview;
  const query = searchQuery();
  const disabled = !draftPolicy.destructive_command_protection.enabled;
  const catastrophicCount = state.destructiveCommandRules.filter((rule) => rule.catastrophic).length;
  qs("destructive-command-summary").textContent = disabled ? "Off. Built-in rules are not enforced; catastrophic and custom rules still apply. Your rule settings are kept." : \`\${preview.counts.enabled} on · \${preview.counts.disabled} off · \${catastrophicCount} always on\`;
  qs("destructive-panel").classList.toggle("is-off", disabled);
  const visible = state.destructiveCommandRules.filter((rule) => matches(query, [rule.category, rule.label, rule.id, rule.description]) && (!showChangedOnly || destructiveChanged(rule)));
  const rowHtml = (rule) => {
    const info = \`<button type="button" class="info-button" data-rule-example="\${escapeHtml(rule.id)}" aria-label="\${escapeHtml(\`About \${rule.label}\`)}" aria-haspopup="dialog" aria-controls="rule-example-popover">\${icons.info}</button>\`;
    const heading = \`<span class="rule-name">\${escapeHtml(rule.label)}</span><code class="rule-id">\${escapeHtml(rule.id)}</code>\${tierForRule(rule) === "normal" ? "" : \`<span class="tier-badge \${tierForRule(rule)}">\${tierForRule(rule) === "strict" ? "Strict" : "Paranoid"}</span>\`}\`;
    if (rule.catastrophic)
      return ruleRowHtml({
        id: rule.id,
        control: \`<span class="lock" title="Always on">\${icons.lock}</span>\`,
        heading,
        note: null,
        noteTone: "",
        actions: "",
        description: rule.description,
        info,
        disabled: false
      });
    const effective = effectiveState.rules[rule.id];
    if (!effective)
      return "";
    const override = draftPolicy.destructive_command_protection.overrides[rule.id] !== undefined;
    return ruleRowHtml({
      id: rule.id,
      control: \`<input type="checkbox" class="switch" data-destructive-command-active="\${escapeHtml(rule.id)}" \${effective.enabled ? "checked" : ""} \${disabled ? "disabled" : ""} aria-label="\${escapeHtml(rule.label)}">\`,
      heading,
      note: ruleNote(rule, effective, effectiveState.capabilities),
      noteTone: effective.source === "rule_override" ? "changed" : effective.source === "capability_override" || effective.source === "environment" ? "" : tierForRule(rule),
      actions: \`\${override ? \`<button type="button" class="quiet small" data-use-inherited="\${escapeHtml(rule.id)}">Reset</button>\` : ""}\${projectFieldChip(\`destructive_command_protection.overrides.\${rule.id}\`)}\`,
      description: rule.description,
      info,
      disabled
    });
  };
  qs("destructive-command-rules").innerHTML = visible.length === 0 ? '<p class="empty">No command protections match.</p>' : commandRuleGroups(visible).map((group) => {
    const all = commandRuleGroups(state?.destructiveCommandRules ?? []).find((entry) => entry.key === group.key)?.rules ?? [];
    const off = all.filter((rule) => effectiveState.rules[rule.id]?.enabled === false).length;
    return categoryHtml({
      key: \`destructive:\${group.key}\`,
      title: group.title,
      counts: group.key === "always-on" ? \`\${plural(all.length, "rule")} · can't be turned off\` : \`\${plural(all.length, "rule")}\${offCount(off)}\`,
      bulkSwitch: "",
      rowsHtml: group.rules.map(rowHtml).join("")
    });
  }).join("");
};
var renderSecretPatterns = () => {
  if (!state)
    return;
  const loaded = state;
  const query = searchQuery();
  const overrides = draftPolicy.secret_protection.overrides;
  const disabled = !draftPolicy.secret_protection.enabled;
  const offTotal = loaded.secretPatterns.filter((rule) => !secretRuleIsActive(rule, overrides)).length;
  qs("secret-summary").textContent = disabled ? "Off. Sensitive files and deny paths are not blocked. Your rule settings and paths are kept." : \`\${loaded.secretPatterns.length - offTotal} on · \${offTotal} off\`;
  qs("secret-panel").classList.toggle("is-off", disabled);
  const visible = loaded.secretPatterns.filter((rule) => matches(query, [
    rule.category,
    secretCategoryNames[rule.category],
    rule.label,
    rule.id,
    rule.description,
    ...rule.paths ?? []
  ]) && (!showChangedOnly || secretChanged(rule)));
  const rowHtml = (rule) => {
    const active = secretRuleIsActive(rule, overrides);
    const override = overrides[rule.id] !== undefined;
    return ruleRowHtml({
      id: rule.id,
      control: \`<input type="checkbox" class="switch" data-secret-active="\${escapeHtml(rule.id)}" \${active ? "checked" : ""} \${disabled ? "disabled" : ""} aria-label="\${escapeHtml(rule.label)}">\`,
      heading: \`<span class="rule-name">\${escapeHtml(rule.label)}</span>\`,
      note: override ? "Changed by you" : rule.defaultOff ? "Off by default" : null,
      noteTone: override ? "changed" : "",
      actions: \`\${override ? \`<button type="button" class="quiet small" data-secret-reset="\${escapeHtml(rule.id)}">Reset</button>\` : ""}\${projectFieldChip(\`secret_protection.overrides.\${rule.id}\`)}\`,
      description: rule.description ?? (rule.paths ? plural(rule.paths.length, "path") : ""),
      info: rule.paths ? \`<button type="button" class="info-button" data-secret-paths="\${escapeHtml(rule.id)}" aria-label="\${escapeHtml(\`Protected paths for \${rule.label}\`)}" aria-haspopup="dialog" aria-controls="rule-example-popover">\${icons.info}</button>\` : '<span class="info-spacer"></span>',
      disabled
    });
  };
  qs("secret-patterns").innerHTML = visible.length === 0 ? '<p class="empty">No secret protections match.</p>' : groupRules(visible).map((group) => {
    const all = loaded.secretPatterns.filter((rule) => rule.category === group.category);
    const on = all.filter((rule) => secretRuleIsActive(rule, overrides)).length;
    const title = secretCategoryNames[group.category] ?? group.category;
    return categoryHtml({
      key: \`secret:\${group.category}\`,
      title,
      counts: \`\${plural(all.length, "rule")}\${offCount(on === 0 ? 0 : all.length - on)}\`,
      bulkSwitch: \`<input type="checkbox" class="switch" data-secret-group-active="\${escapeHtml(group.category)}" \${on > 0 ? "checked" : ""} \${disabled ? "disabled" : ""} aria-label="\${escapeHtml(\`Turn all \${title} on or off\`)}" title="Turn all on or off">\`,
      rowsHtml: group.rules.map(rowHtml).join("")
    });
  }).join("");
};
var renderChangedCount = () => {
  if (!state)
    return;
  const changed = state.destructiveCommandRules.filter((rule) => !rule.catastrophic && destructiveChanged(rule)).length + state.secretPatterns.filter(secretChanged).length;
  qs("changed-count").textContent = changed > 0 ? String(changed) : "";
};
var renderRules = () => {
  renderDestructiveCommands();
  renderSecretPatterns();
  renderChangedCount();
};
var renderSafety = () => {
  const environmentSources = preview ? [
    ...new Set(Object.values(preview.capabilities).filter((capability) => capability.source === "environment").flatMap((capability) => capability.sources.filter((source) => source.startsWith("env "))))
  ] : [];
  qs("environment-overrides").hidden = environmentSources.length === 0;
  qs("environment-overrides").textContent = environmentSources.length ? \`An environment variable raises protection beyond these settings: \${environmentSources.map((source) => source.slice(4)).join(", ")}\` : "";
  qs("safety-level").innerHTML = Object.entries(safetyLevels).map(([level, meta]) => \`<label class="preset-card preset-\${level}"><input type="radio" name="safety-level" value="\${level}" \${draftPolicy.safety.level === level ? "checked" : ""}><span class="preset-name">\${meta[0]}</span><span class="preset-description">\${meta[1]}</span></label>\`).join("");
  const inherited = SAFETY_LEVEL_CAPABILITIES[draftPolicy.safety.level];
  qs("safety-overrides").innerHTML = Object.entries(capabilityNames).map(([key, meta]) => {
    const value = draftPolicy.safety.overrides[key];
    return \`<div class="setting-row"><label class="setting-text" for="override-\${key}"><strong>\${meta[0]}</strong><small>\${meta[1]}</small></label>\${projectFieldChip(\`safety.overrides.\${key}\`)}<select id="override-\${key}" data-safety-override="\${key}">
      <option value="inherit" \${value === undefined ? "selected" : ""}>From preset (\${inherited[key] ? "on" : "off"})</option>
      <option value="true" \${value === true ? "selected" : ""}>Always on</option>
      <option value="false" \${value === false ? "selected" : ""}>Always off</option>
    </select></div>\`;
  }).join("");
  qs("workflow").innerHTML = \`<div class="setting-row"><label class="setting-text" for="workflow-worktree"><strong>Allow discarding local changes in linked git worktrees</strong><small>Only relaxes the discard checks inside linked worktrees.</small></label>\${projectFieldChip("workflow.worktree_mode")}<input type="checkbox" class="switch" id="workflow-worktree" data-workflow-worktree \${draftPolicy.workflow.worktree_mode ? "checked" : ""}></div>\`;
  const customized = (preview?.counts.effectiveCustomizations ?? 0) > 0 || Object.entries(draftPolicy.safety.overrides).some(([key, value]) => value !== SAFETY_LEVEL_CAPABILITIES[draftPolicy.safety.level][key]);
  qs("safety-preset-status").textContent = customized ? \`\${levelName(draftPolicy.safety.level)}, customized\` : "";
};
var showRulePopover = (button, options) => {
  const popover = qs("rule-example-popover");
  qs("rule-example-label").textContent = options.label;
  qs("rule-example-title").textContent = options.title;
  qs("rule-example-description").textContent = options.description;
  qs("rule-example-description").hidden = options.description === "";
  qs("rule-example-command").textContent = options.body;
  if (!popover.matches(":popover-open"))
    popover.showPopover();
  const buttonRect = button.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();
  const below = buttonRect.bottom + 8;
  popover.style.top = \`\${below + popoverRect.height <= window.innerHeight - 12 ? below : Math.max(12, buttonRect.top - 8 - popoverRect.height)}px\`;
  popover.style.left = \`\${Math.min(window.innerWidth - popoverRect.width - 12, Math.max(12, buttonRect.right - popoverRect.width))}px\`;
};
var validatePathAdditions = async (patch) => {
  const candidate = collectFormPolicy();
  patch(candidate);
  const result = await requestPolicyPreview(candidate);
  return result.ok && result.data?.preview ? null : errorText(result);
};
var createPathList = (prefix, config) => {
  const setHint = (text) => {
    qs(\`\${prefix}-hint\`).textContent = text;
    qs(\`\${prefix}-hint\`).hidden = !text;
  };
  const render = () => {
    const paths = config.getPaths();
    const disabled = config.isDisabled();
    qs(\`\${prefix}-count\`).textContent = paths.length > 0 ? String(paths.length) : "";
    qs(\`\${prefix}-input\`).disabled = disabled;
    qs(\`\${prefix}-add-button\`).disabled = disabled;
    qs(\`\${prefix}-list\`).innerHTML = paths.map((path, index) => \`<li class="path-item\${disabled ? " row-disabled" : ""}">
          <code>\${escapeHtml(path)}</code>
          <button type="button" class="quiet icon-only" data-path-list="\${prefix}" data-path-remove="\${index}" \${disabled ? "disabled" : ""} aria-label="Remove \${escapeHtml(path)}">\${icons.remove}</button>
        </li>\`).join("");
  };
  const claimForProject = () => {
    if (!projectDraft || markedFields.has(config.field))
      return;
    markedFields.add(config.field);
    config.setPaths([]);
    syncProjectChips();
  };
  let adding = false;
  const add = async (value) => {
    if (adding)
      return;
    const entries = [
      ...new Set(value.split(\`
\`).map((line) => line.trim()).filter(Boolean))
    ];
    if (entries.length === 0)
      return;
    const scope = projectDraft;
    const claimed = projectDraft !== null && !markedFields.has(config.field);
    const previousPaths = config.getPaths();
    claimForProject();
    const submitted = qs(\`\${prefix}-input\`).value;
    const additions = entries.filter((entry) => !config.getPaths().includes(entry));
    if (additions.length) {
      adding = true;
      const error = await validatePathAdditions((candidate) => config.patch(candidate, [...config.getPaths(), ...additions])).finally(() => {
        adding = false;
      });
      if (projectDraft !== scope)
        return;
      if (error) {
        setHint(\`Not added: \${additions.join(", ")}. \${error}\`);
        if (claimed) {
          markedFields.delete(config.field);
          config.setPaths(previousPaths);
          syncProjectChips();
        }
        return;
      }
    }
    const current = config.getPaths();
    const duplicates = entries.filter((entry) => current.includes(entry));
    config.setPaths([...current, ...additions.filter((entry) => !current.includes(entry))]);
    if (qs(\`\${prefix}-input\`).value === submitted)
      qs(\`\${prefix}-input\`).value = "";
    setHint(duplicates.length ? \`Already listed: \${duplicates.join(", ")}\` : "");
    render();
    afterEdit(false);
    qs(\`\${prefix}-input\`).focus();
  };
  const remove = (index) => {
    claimForProject();
    config.setPaths(config.getPaths().filter((_, position) => position !== index));
    setHint("");
    render();
    afterEdit(false);
  };
  return { render, add, remove };
};
var pathLists = {
  "allow-paths": createPathList("allow-paths", {
    field: "destructive_command_protection.allow_paths",
    getPaths: () => draftPolicy.destructive_command_protection.allow_paths,
    setPaths: (paths) => {
      draftPolicy.destructive_command_protection.allow_paths = paths;
    },
    isDisabled: () => !draftPolicy.destructive_command_protection.enabled,
    patch: (candidate, paths) => {
      candidate.destructive_command_protection = {
        ...candidate.destructive_command_protection,
        allow_paths: paths
      };
    }
  }),
  "deny-paths": createPathList("deny-paths", {
    field: "secret_protection.deny_paths",
    getPaths: () => draftPolicy.secret_protection.deny_paths,
    setPaths: (paths) => {
      draftPolicy.secret_protection.deny_paths = paths;
    },
    isDisabled: () => !draftPolicy.secret_protection.enabled,
    patch: (candidate, paths) => {
      candidate.secret_protection = { ...candidate.secret_protection, deny_paths: paths };
    }
  }),
  "secret-allow-paths": createPathList("secret-allow-paths", {
    field: "secret_protection.allow_paths",
    getPaths: () => draftPolicy.secret_protection.allow_paths,
    setPaths: (paths) => {
      draftPolicy.secret_protection.allow_paths = paths;
    },
    isDisabled: () => !draftPolicy.secret_protection.enabled,
    patch: (candidate, paths) => {
      candidate.secret_protection = { ...candidate.secret_protection, allow_paths: paths };
    }
  })
};
var pathListFor = (name) => name === "deny-paths" || name === "allow-paths" || name === "secret-allow-paths" ? pathLists[name] : null;
var renderPathLists = () => {
  Object.values(pathLists).forEach((list) => {
    list.render();
  });
};
var syncMasterSwitches = () => {
  qs("destructive-enabled").checked = draftPolicy.destructive_command_protection.enabled;
  qs("secret-enabled").checked = draftPolicy.secret_protection.enabled;
};
function renderPolicySections() {
  syncMasterSwitches();
  renderSafety();
  renderRules();
  renderPathLists();
  syncProjectChips();
  syncRawFromForm();
  updateDirtyStatus();
}
var refreshPolicyPreview = async () => {
  const requestId = ++previewRequestId;
  const result = await requestPolicyPreview(effectivePreviewPolicy(collectFormPolicy()));
  if (requestId !== previewRequestId)
    return;
  if (!result.ok || !result.data?.preview) {
    notify("Preview failed", "error", errorText(result));
    return;
  }
  preview = result.data.preview;
  renderSafety();
  renderRules();
  runCommandTest();
};
var runCommandTest = async () => {
  const command = qs("tester-input").value.trim();
  if (!command) {
    qs("tester-result").hidden = true;
    return;
  }
  const requestId = ++testerRequestId;
  const result = await requestJson("/api/policy/explain", {
    method: "POST",
    body: JSON.stringify({ command, policy: effectivePreviewPolicy(collectFormPolicy()) })
  });
  if (requestId !== testerRequestId)
    return;
  const el = qs("tester-result");
  el.hidden = false;
  if (!result.ok) {
    el.className = "notice error";
    el.textContent = \`Could not test this command: \${errorText(result)}\`;
    return;
  }
  if (result.data.result === "allowed") {
    el.className = "notice ok";
    el.innerHTML = \`<strong>Allowed.</strong> No rule blocks this command. <a href="#rules?compose=\${encodeURIComponent(command)}">Create a rule to block it</a>\`;
    return;
  }
  const ruleId = result.data.customRule?.id ?? result.data.ruleId;
  const ruleHtml = !ruleId ? "" : result.data.customRule ? \` by <a class="rule-id" href="#rules?focus=\${encodeURIComponent(ruleId)}">\${escapeHtml(ruleId)}</a>\` : \` by <a class="rule-id" href="#policy?q=\${encodeURIComponent(ruleId)}">\${escapeHtml(ruleId)}</a>\`;
  el.className = "notice error";
  el.innerHTML = \`<strong>Blocked</strong>\${ruleHtml}. \${escapeHtml(result.data.reason || "")}\${result.data.segment && result.data.segment !== command ? \`<div class="tester-segment">Blocked part: <code>\${escapeHtml(result.data.segment)}</code></div>\` : ""}\`;
};
var render2 = () => {
  if (!state)
    return;
  const loaded = state;
  draftPolicy = clonePolicy(loaded.policy);
  preview = loaded.preview;
  shared.dirty = false;
  qs("policy-savebar").hidden = true;
  showPath("policy-path", loaded.path, loaded.exists ? "" : " (not created yet)");
  const projectPolicy = loaded.projectPolicy;
  qs("project-policy-row").hidden = !projectPolicy;
  showPath("project-policy-path", projectPolicy?.path ?? "");
  qs("project-policy-notice").hidden = !projectPolicy || projectPolicy.weakenings.length === 0;
  qs("project-policy-notice").textContent = projectPolicy ? ["The project policy changes these settings:", ...projectPolicy.weakenings].join(\`
\`) : "";
  qs("app-version").textContent = loaded.version;
  qs("raw").value = loaded.errors.length ? loaded.raw : \`\${JSON.stringify(draftPolicy, null, 2)}
\`;
  qs("recovery").hidden = loaded.errors.length === 0;
  qs("policy-errors").textContent = loaded.errors.join(\`
\`);
  syncMasterSwitches();
  renderSafety();
  renderRules();
  renderPathLists();
  syncProjectChips();
  syncRawFromForm();
  if (loaded.errors.length)
    qs("raw-source").textContent = "The file as it is on disk.";
  updateActions();
  setBanner();
  emit("dirty");
  emit("policy");
  if (loaded.errors.length && !location.hash.startsWith("#policy"))
    location.hash = "policy";
};
var restoreDraft = () => {
  if (!state || state.errors.length)
    return;
  const stored = sessionStorage.getItem("cc-safety-net-draft");
  if (!stored)
    return;
  const parsed = (() => {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  })();
  const isRecordField = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
  const isOptionalPathList = (value) => value === undefined || Array.isArray(value) && value.every((item) => typeof item === "string");
  const isPolicyShape = isRecordField(parsed) && isRecordField(parsed.safety) && typeof parsed.safety.level === "string" && Object.hasOwn(safetyLevels, parsed.safety.level) && isRecordField(parsed.safety.overrides) && isRecordField(parsed.workflow) && isRecordField(parsed.destructive_command_protection) && isRecordField(parsed.destructive_command_protection.overrides) && isOptionalPathList(parsed.destructive_command_protection.allow_paths) && isRecordField(parsed.secret_protection) && isRecordField(parsed.secret_protection.overrides) && isOptionalPathList(parsed.secret_protection.deny_paths) && isOptionalPathList(parsed.secret_protection.allow_paths) && isRecordField(parsed.audit);
  if (!isPolicyShape || stored === JSON.stringify(state.policy)) {
    sessionStorage.removeItem("cc-safety-net-draft");
    return;
  }
  const draft = parsed;
  draft.destructive_command_protection.allow_paths ??= [];
  draft.secret_protection.deny_paths ??= [];
  draft.secret_protection.allow_paths ??= [];
  draftPolicy = draft;
  renderPolicySections();
  refreshPolicyPreview();
  notify("Restored your unsaved changes", "ok");
};
var loadPolicy = async () => {
  const result = await requestJson("/api/policy");
  if (!result.ok || !result.data) {
    notify("Could not load your policy", "error", errorText(result));
    return false;
  }
  state = result.data;
  shared.policy = state;
  render2();
  restoreDraft();
  if (state.errors.length)
    notify("Your policy file needs repair", "error");
  return true;
};
var writePolicy = async (path, body, failureTitle) => {
  const result = await requestJson(path, { method: "POST", body });
  if (isWriteSuccess(result))
    return result;
  notify(failureTitle, "error", errorText(result));
  return null;
};
var reloadAfterWrite = async () => {
  sessionStorage.removeItem("cc-safety-net-draft");
  return loadPolicy();
};
var renderProjectDraftBar = () => {
  shared.drafting = projectDraft !== null;
  qs("scope-user").setAttribute("aria-pressed", String(projectDraft === null));
  qs("project-draft-enter").setAttribute("aria-pressed", String(projectDraft !== null));
  qs("project-draft-bar").hidden = projectDraft === null;
  qs("save").textContent = projectDraft ? "Review and apply" : "Save";
  if (!projectDraft)
    return;
  qs("project-draft-path").textContent = projectDraft.path;
  qs("project-draft-change").hidden = !projectDraft.canPickDirectory;
};
var setProjectDraftDiagnostics = (messages) => {
  qs("project-draft-diagnostics").textContent = messages.join(\`
\`);
  qs("project-draft-diagnostics").hidden = messages.length === 0;
};
var exitProjectDraft = () => {
  projectDraft = null;
  markedFields = new Set;
  setProjectDraftDiagnostics([]);
  if (state)
    draftPolicy = clonePolicy(state.policy);
  renderProjectDraftBar();
  renderPolicySections();
};
var ingestProjectState = async (okStatus) => {
  const result = await requestJson("/api/policy/project");
  if (!result.ok || !result.data) {
    notify("Project policy unavailable", "error", errorText(result));
    return false;
  }
  const seeded = seedProjectDraft(result.data);
  if (!seeded) {
    exitProjectDraft();
    await loadPolicy();
    notify("Repair your policy first", "error", [
      "Your own policy file must be repaired before you can edit a project policy.",
      ...Array.isArray(result.data.userPolicyDiagnostics) ? result.data.userPolicyDiagnostics : []
    ].join(\`
\`));
    return false;
  }
  projectDraft = {
    path: result.data.path,
    revision: result.data.revision,
    canPickDirectory: result.data.canPickDirectory === true,
    baseline: seeded.baseline,
    snapshot: seeded.snapshot
  };
  markedFields = seeded.marked;
  draftPolicy = seeded.policy;
  setProjectDraftDiagnostics(Array.isArray(result.data.projectionDiagnostics) ? result.data.projectionDiagnostics : []);
  renderProjectDraftBar();
  renderPolicySections();
  refreshPolicyPreview();
  notify(okStatus, "ok");
  return true;
};
var enterProjectDraft = async () => {
  if (projectDraft)
    return;
  if (!state) {
    notify("Your policy has not loaded yet", "error", "Reload the page.");
    return;
  }
  if (state.errors.length) {
    notify("Repair your policy first", "error");
    return;
  }
  if (shared.dirty) {
    if (!await confirmDialog({
      title: "Discard unsaved changes?",
      body: "A project policy starts from your saved policy. Save your changes first, or discard them here.",
      confirmLabel: "Discard changes",
      confirmClass: ""
    }))
      return;
    sessionStorage.removeItem("cc-safety-net-draft");
    if (!await loadPolicy())
      return;
  }
  await ingestProjectState("Editing the project policy");
};
var confirmDiscardProjectDraft = async (body) => !shared.dirty || await confirmDialog({
  title: "Discard this project draft?",
  body,
  confirmLabel: "Discard draft",
  confirmClass: ""
});
var changeProjectDirectory = async () => {
  if (!await confirmDiscardProjectDraft("Switching folders discards this draft."))
    return;
  const result = await requestJson("/api/policy/project/choose-directory", { method: "POST" });
  if (!result.ok) {
    notify("Could not open the folder picker", "error", errorText(result));
    return;
  }
  if (result.data.error) {
    notify(result.data.error, "error");
    return;
  }
  if (result.data.cancelled)
    return;
  await ingestProjectState("Editing the project policy");
};
var leaveProjectDraft = async () => {
  if (!projectDraft)
    return;
  if (!await confirmDiscardProjectDraft("Your project changes have not been written anywhere yet."))
    return;
  exitProjectDraft();
  if (await loadPolicy())
    notify("Back to your own policy", "ok");
};
var discardProjectDraft = async (draft) => {
  if (!await confirmDialog({
    title: "Discard changes to this draft?",
    body: "The draft goes back to the settings this project already has.",
    confirmLabel: "Discard changes",
    confirmClass: ""
  }))
    return;
  const snapshot = JSON.parse(draft.snapshot);
  markedFields = new Set(projectMarkedFields(snapshot));
  draftPolicy = overlayProjectProposal(draft.baseline, snapshot);
  renderPolicySections();
  refreshPolicyPreview();
  notify("Changes discarded", "ok");
};
var handleStaleProjectDraft = async () => {
  if (!await ingestProjectState("Project draft reloaded"))
    return;
  notify("The project folder changed", "error", "The draft was reloaded for the new folder. Review it again before applying.");
};
var projectDiffHtml = (data) => {
  const rows = Array.isArray(data.rows) ? data.rows : [];
  const warnings = [
    ...data.existingFileDiagnostics?.length ? ["The existing project policy file is invalid and will be replaced."] : [],
    ...data.weakenings ?? []
  ];
  return (rows.length === 0 ? '<p class="empty">No change to the effective policy.</p>' : \`<table class="diff-table"><thead><tr><th>Setting</th><th>Now</th><th>After</th></tr></thead><tbody>\${rows.map((row) => \`<tr><td><code>\${escapeHtml(row.field)}</code></td><td class="diff-before">\${escapeHtml(row.before ?? "(unset)")}</td><td class="diff-after">\${escapeHtml(row.after ?? "(unset)")}</td></tr>\`).join("")}</tbody></table>\`) + warnings.map((text) => \`<p class="notice warn">\${escapeHtml(text)}</p>\`).join("");
};
var reviewProjectDraft = async (draft) => {
  const proposal = collectProjectProposal(markedFields, draftPolicy);
  const serialized = JSON.stringify(proposal);
  const body = JSON.stringify({ revision: draft.revision, proposal });
  const diff = await requestJson("/api/policy/project/diff", { method: "POST", body });
  if (projectDraft !== draft)
    return;
  if (diff.status === 409) {
    await handleStaleProjectDraft();
    return;
  }
  if (!diff.ok) {
    notify("Review failed", "error", errorText(diff));
    return;
  }
  if (JSON.stringify(collectProjectProposal(markedFields, draftPolicy)) !== serialized) {
    notify("Review again", "error", "The draft changed while the review was loading.");
    return;
  }
  if (!await confirmDialog({
    title: "Apply this project policy?",
    body: "Everyone who works in this project gets these settings on top of their own policy.",
    detail: draft.path,
    rowsHtml: projectDiffHtml(diff.data),
    confirmLabel: "Apply project policy",
    confirmClass: "primary"
  }))
    return;
  await runExclusive("Applying…", async () => {
    const applied = await requestJson("/api/policy/project/apply", { method: "POST", body });
    if (applied.status === 409) {
      await handleStaleProjectDraft();
      return;
    }
    if (!isWriteSuccess(applied)) {
      notify("Apply failed", "error", errorText(applied));
      return;
    }
    exitProjectDraft();
    if (await loadPolicy())
      notify("Project policy applied", "ok", applied.data.path);
  });
};
var save = () => {
  if (!state) {
    notify("Your policy has not loaded yet", "error", "Reload the page.");
    return;
  }
  if (state.errors.length) {
    notify("Repair your policy before saving", "error");
    return;
  }
  if (projectDraft) {
    reviewProjectDraft(projectDraft);
    return;
  }
  if (!shared.dirty)
    return;
  const policy = collectFormPolicy();
  runExclusive("Saving…", async () => {
    const result = await writePolicy("/api/policy", JSON.stringify(policy), "Save failed");
    if (result && await reloadAfterWrite())
      notify("Policy saved", "ok", result.data.path);
  });
};
var discard = async () => {
  if (projectDraft) {
    await discardProjectDraft(projectDraft);
    return;
  }
  if (!await confirmDialog({
    title: "Discard unsaved changes?",
    body: "Every change since your last save will be undone.",
    confirmLabel: "Discard changes",
    confirmClass: ""
  }))
    return;
  await runExclusive("Discarding…", async () => {
    sessionStorage.removeItem("cc-safety-net-draft");
    if (await loadPolicy())
      notify("Changes discarded", "ok");
  });
};
var repair = async () => {
  if (!state?.errors.length)
    return;
  if (!await confirmDialog({
    title: "Repair your policy file?",
    body: "Valid settings are kept and invalid ones are dropped. If the JSON cannot be read at all, defaults are restored.",
    detail: state.path,
    confirmLabel: "Repair",
    confirmClass: "primary"
  }))
    return;
  await runExclusive("Repairing…", async () => {
    const result = await writePolicy("/api/repair", "{}", "Repair failed");
    if (result && await reloadAfterWrite())
      notify("Policy repaired", "ok", result.data.path);
  });
};
var resetOverrides = async (section) => {
  if (Object.keys(draftPolicy[section].overrides).length === 0) {
    notify("Nothing to reset: every rule already uses its default", "ok");
    return;
  }
  if (!await confirmDialog({
    title: "Reset every rule to its default?",
    body: \`All \${section === "secret_protection" ? "secret" : "command"} rules go back to the setting their preset gives them. You can still discard before saving.\`,
    confirmLabel: "Reset rules"
  }))
    return;
  markedFields = new Set([...markedFields].filter((field) => !field.startsWith(\`\${section}.overrides.\`)));
  if (projectDraft) {
    draftPolicy = overlayProjectProposal(projectDraft.baseline, collectProjectProposal(markedFields, draftPolicy));
    renderPolicySections();
    refreshPolicyPreview();
    return;
  }
  draftPolicy[section].overrides = {};
  renderRules();
  afterEdit();
};
var setDestructiveOverride = (ruleId, active) => {
  if (!projectDraft && active === preview?.rules[ruleId]?.inheritedEnabled) {
    delete draftPolicy.destructive_command_protection.overrides[ruleId];
    return;
  }
  draftPolicy.destructive_command_protection.overrides[ruleId] = active ? "on" : "off";
  markProjectOverride("destructive_command_protection", ruleId);
};
var setSecretOverride = (rule, active) => {
  if (!projectDraft && active === !rule.defaultOff) {
    delete draftPolicy.secret_protection.overrides[rule.id];
    return;
  }
  draftPolicy.secret_protection.overrides[rule.id] = active ? "on" : "off";
  markProjectOverride("secret_protection", rule.id);
};
var toggleProtection = async (input) => {
  const secret = input.id === "secret-enabled";
  if (!input.checked && !await confirmDialog({
    title: secret ? "Turn off secret protection?" : "Turn off command protection?",
    body: secret ? "Sensitive files, coding agent credentials, and deny paths stop being blocked until you turn this back on." : "Built-in destructive git, filesystem, and execution rules stop blocking commands until you turn this back on.",
    detail: secret ? undefined : "Catastrophic and custom rules still apply.",
    confirmLabel: "Turn off"
  })) {
    input.checked = true;
    return;
  }
  if (secret)
    draftPolicy.secret_protection.enabled = input.checked;
  if (!secret)
    draftPolicy.destructive_command_protection.enabled = input.checked;
  markProjectField(secret ? "secret_protection.enabled" : "destructive_command_protection.enabled");
  renderRules();
  renderPathLists();
  afterEdit(!secret);
};
var handleChange = (control) => {
  if (control.name === "safety-level") {
    draftPolicy.safety.level = control.value;
    markProjectField("safety.level");
    renderSafety();
    afterEdit();
    return;
  }
  if (control.dataset.safetyOverride) {
    const capability = control.dataset.safetyOverride;
    if (control.value === "inherit" && !projectDraft)
      delete draftPolicy.safety.overrides[capability];
    if (control.value !== "inherit")
      draftPolicy.safety.overrides[capability] = control.value === "true";
    if (control.value === "inherit")
      unmarkProjectField(\`safety.overrides.\${capability}\`);
    if (control.value !== "inherit")
      markProjectField(\`safety.overrides.\${capability}\`);
    afterEdit();
    return;
  }
  if (!(control instanceof HTMLInputElement))
    return;
  if ("workflowWorktree" in control.dataset) {
    draftPolicy.workflow.worktree_mode = control.checked;
    markProjectField("workflow.worktree_mode");
    afterEdit(false);
    return;
  }
  if (control.id === "destructive-enabled" || control.id === "secret-enabled") {
    toggleProtection(control);
    return;
  }
  const destructiveId = control.dataset.destructiveCommandActive;
  if (destructiveId) {
    setDestructiveOverride(destructiveId, control.checked);
    afterEdit();
    return;
  }
  const secretGroup = control.dataset.secretGroupActive;
  if (secretGroup) {
    state?.secretPatterns.filter((rule) => rule.category === secretGroup).forEach((rule) => {
      setSecretOverride(rule, control.checked);
    });
    renderRules();
    afterEdit(false);
    return;
  }
  const secretRule = state?.secretPatterns.find((rule) => rule.id === control.dataset.secretActive);
  if (secretRule) {
    setSecretOverride(secretRule, control.checked);
    renderRules();
    afterEdit(false);
  }
};
var handleClick = (target) => {
  const unmark = target.closest("[data-unmark-field]");
  if (unmark) {
    unmarkProjectField(unmark.dataset.unmarkField ?? "");
    return;
  }
  const groupToggle = target.closest("[data-group-toggle]");
  if (groupToggle) {
    groupExpanded.set(groupToggle.dataset.groupToggle ?? "", groupToggle.getAttribute("aria-expanded") !== "true");
    renderRules();
    return;
  }
  const show = target.closest("[data-policy-show]");
  if (show) {
    setChangedOnly(show.dataset.policyShow === "changed");
    groupExpanded.clear();
    renderRules();
    syncHash2();
    return;
  }
  const example = state?.destructiveCommandRules.find((rule) => rule.id === target.closest("[data-rule-example]")?.dataset.ruleExample);
  if (example) {
    showRulePopover(target.closest("[data-rule-example]"), {
      label: example.catastrophic ? "Always on" : example.category,
      title: example.label,
      description: example.description,
      body: example.example
    });
    return;
  }
  const secretPaths = state?.secretPatterns.find((rule) => rule.id === target.closest("[data-secret-paths]")?.dataset.secretPaths);
  if (secretPaths?.paths) {
    showRulePopover(target.closest("[data-secret-paths]"), {
      label: "Protected paths",
      title: secretPaths.label,
      description: "",
      body: secretPaths.paths.join(\`
\`)
    });
    return;
  }
  const inherited = target.closest("[data-use-inherited]");
  if (inherited) {
    const ruleId = inherited.dataset.useInherited ?? "";
    if (projectDraft) {
      unmarkProjectField(\`destructive_command_protection.overrides.\${ruleId}\`);
      return;
    }
    delete draftPolicy.destructive_command_protection.overrides[ruleId];
    afterEdit();
    return;
  }
  const secretReset = target.closest("[data-secret-reset]");
  if (secretReset) {
    const ruleId = secretReset.dataset.secretReset ?? "";
    if (projectDraft) {
      unmarkProjectField(\`secret_protection.overrides.\${ruleId}\`);
      return;
    }
    delete draftPolicy.secret_protection.overrides[ruleId];
    renderRules();
    afterEdit(false);
    return;
  }
  const addButton = target.closest("[data-path-add]");
  if (addButton) {
    pathListFor(addButton.dataset.pathAdd)?.add(qs(\`\${addButton.dataset.pathAdd}-input\`).value);
    return;
  }
  const removeButton = target.closest("[data-path-remove]");
  if (removeButton)
    pathListFor(removeButton.dataset.pathList)?.remove(Number(removeButton.dataset.pathRemove));
};
var showPolicy = (params) => {
  const next = policyFiltersFromParams(params);
  if (policyHash(next) !== policyHash(currentFilters())) {
    qs("policy-search").value = next.query;
    setChangedOnly(next.changedOnly);
    groupExpanded.clear();
    renderRules();
  }
  if (!next.query)
    return;
  document.querySelector(\`[data-rule-row="\${CSS.escape(next.query)}"]\`)?.scrollIntoView({ block: "center" });
};
var setRawCopyLabel = () => {
  qs("raw-copy").innerHTML = \`\${icons.copy}<span>Copy</span>\`;
};
var initPolicy = () => {
  setRawCopyLabel();
  const view = qs("policy-search").closest("[data-view]");
  view.addEventListener("change", (event) => {
    const control = event.target;
    if (control instanceof HTMLInputElement || control instanceof HTMLSelectElement)
      handleChange(control);
  });
  view.addEventListener("click", (event) => {
    if (event.target instanceof Element)
      handleClick(event.target);
  });
  document.addEventListener("keydown", (event) => {
    if (view.hidden || document.querySelector("dialog[open]"))
      return;
    if (!(event.target instanceof HTMLElement) || !isSearchShortcut(event, event.target))
      return;
    event.preventDefault();
    qs("policy-search").focus();
  });
  qs("policy-search").addEventListener("input", () => {
    groupExpanded.clear();
    renderRules();
    syncHash2();
  });
  view.addEventListener("keydown", (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || event.key !== "Enter")
      return;
    const list = pathListFor(input.dataset.pathInput);
    if (!list)
      return;
    event.preventDefault();
    list.add(input.value);
  });
  view.addEventListener("paste", (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement))
      return;
    const list = pathListFor(input.dataset.pathInput);
    const text = event.clipboardData?.getData("text") ?? "";
    if (!list || !text.includes(\`
\`))
      return;
    event.preventDefault();
    list.add(\`\${input.value}
\${text}\`);
  });
  const testerDialog = qs("tester-dialog");
  qs("tester-open").addEventListener("click", () => {
    testerDialog.showModal();
    qs("tester-input").select();
    runCommandTest();
  });
  qs("tester-form").addEventListener("submit", (event) => {
    event.preventDefault();
    runCommandTest();
  });
  qs("tester-close").addEventListener("click", () => testerDialog.close());
  qs("tester-result").addEventListener("click", (event) => {
    if (event.target.closest("a"))
      testerDialog.close();
  });
  qs("scope-user").addEventListener("click", () => {
    leaveProjectDraft();
  });
  qs("project-draft-enter").addEventListener("click", () => {
    enterProjectDraft();
  });
  qs("project-draft-change").addEventListener("click", () => {
    changeProjectDirectory();
  });
  qs("reset-rule-customizations").addEventListener("click", () => {
    resetOverrides("destructive_command_protection");
  });
  qs("reset-secret-customizations").addEventListener("click", () => {
    resetOverrides("secret_protection");
  });
  qs("save").addEventListener("click", save);
  qs("discard-changes").addEventListener("click", () => {
    discard();
  });
  qs("repair").addEventListener("click", () => {
    repair();
  });
  qs("raw-copy").addEventListener("click", (event) => {
    copyText(event.currentTarget, qs("raw").value);
  });
  window.addEventListener("hashchange", setBanner);
  window.addEventListener("beforeunload", (event) => {
    if (!shared.dirty)
      return;
    event.preventDefault();
    event.returnValue = "";
  });
};

// src/gui/frontend/rule-prompt.ts
var rulePromptText = (prompt) => {
  const names = prompt.rulesData?.rulebooks.map((rulebook) => rulebook.name) ?? [];
  return [
    "Use the cc-safety-net skill for this request.",
    "If that skill is not available, run \`npx -y cc-safety-net rule doc\` first and treat its output as the source of truth for schema, paths, and validation.",
    "",
    prompt.rulesScope === "project" ? \`Scope: this project - \${prompt.projectPath.trim()}\` : "Scope: all projects (user scope)",
    \`Existing rulebooks (names must stay unique across both scopes): \${names.length > 0 ? names.join(", ") : "none"}\`,
    "",
    prompt.request.trim()
  ].join(\`
\`);
};

// src/gui/frontend/views/rules.ts
var rulesData = null;
var requested = false;
var scope = "project";
var pendingFocus = null;
var directoryPickerFailed = false;
var showPathEnd = () => {
  const input = qs("rules-project-path");
  input.title = input.value;
  if (document.activeElement !== input)
    input.scrollLeft = input.scrollWidth;
};
var render3 = () => {
  const loaded = rulesData;
  if (!loaded)
    return;
  const pathInput = qs("rules-project-path");
  if (!pathInput.value)
    pathInput.value = loaded.projectPath;
  const canPick = loaded.canPickDirectory && !directoryPickerFailed;
  pathInput.readOnly = canPick;
  qs("rules-choose-directory").hidden = !canPick;
  showPathEnd();
  qs("rules-list").innerHTML = loaded.rulebooks.length === 0 ? loaded.errors.length > 0 ? '<p class="empty">Every rulebook was skipped because of errors, so no custom rule is enforced. See Problems above.</p>' : '<p class="empty">No custom rules yet. Use <strong>Create a rule</strong> below, or run <code>npx -y cc-safety-net rule init</code>.</p>' : loaded.rulebooks.map((rulebook) => \`<section class="rulebook">
    <div class="rulebook-head">
      <strong>\${escapeHtml(rulebook.name)}</strong>
      <span class="count">v\${escapeHtml(rulebook.version)}</span>
      <span>\${rulebook.source === "user" ? "All projects" : "This project"}</span>
      <span>\${plural(rulebook.rules.length, "rule")}</span>
      \${rulebook.spec === rulebook.name ? "" : \`<code>\${escapeHtml(rulebook.spec)}</code>\`}
    </div>
    <ul class="card rows">\${rulebook.rules.map((rule) => \`<li class="setting-row rulebook-rule\${pendingFocus === rule.name ? " focused" : ""}">
      <div class="rulebook-rule-head"><code class="command">\${escapeHtml([rule.command, rule.subcommand].filter(Boolean).join(" "))}</code><code class="rule-id">custom.\${escapeHtml(rule.name)}</code></div>
      <p>\${escapeHtml(rule.reason)}</p>
      <p class="muted">Blocks when any of these arguments is present: \${rule.block_args.map((arg) => \`<code>\${escapeHtml(arg)}</code>\`).join(" ")}</p>
    </li>\`).join("")}</ul>
  </section>\`).join("");
  const diagnostics = [
    ...loaded.errors.map((text) => \`<p class="notice error">\${escapeHtml(text)}</p>\`),
    ...loaded.warnings.map((text) => \`<p class="notice warn">\${escapeHtml(text)}</p>\`)
  ];
  qs("rules-diagnostics").innerHTML = diagnostics.join("");
  qs("rules-diagnostics-panel").hidden = diagnostics.length === 0;
  if (!pendingFocus)
    return;
  const focused = qs("rules-list").querySelector(".focused");
  if (focused)
    focused.scrollIntoView({ block: "center" });
  if (!focused)
    notify(\`custom.\${pendingFocus} is not in any rulebook\`, "error");
  pendingFocus = null;
};
var loadRules = async () => {
  requested = true;
  const result = await requestJson("/api/rules");
  if (!result.ok || !Array.isArray(result.data?.rulebooks)) {
    qs("rules-list").innerHTML = \`<p class="empty">Could not load rules: \${escapeHtml(errorText(result))}</p>\`;
    rulesData = null;
    requested = false;
    qs("rules-diagnostics-panel").hidden = true;
    return;
  }
  rulesData = result.data;
  render3();
};
var showRules = (params) => {
  const focus = params.get("focus");
  const compose = params.get("compose");
  if (focus)
    pendingFocus = focus.replace(/^custom\\./, "");
  if (compose) {
    qs("rules-composer-input").value = compose;
    qs("rules-composer-panel").scrollIntoView({ block: "start" });
    qs("rules-composer-input").focus();
  }
  showPathEnd();
  if (!requested) {
    loadRules();
    return;
  }
  if (focus)
    render3();
};
var setScope = (next) => {
  scope = next;
  document.querySelectorAll("[data-rules-scope]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.rulesScope === next));
  });
  qs("rules-project-path-field").hidden = next !== "project";
  showPathEnd();
};
var chooseProjectDirectory = async (button) => {
  if (button.disabled)
    return;
  button.disabled = true;
  const result = await requestJson("/api/rules/choose-directory", { method: "POST" });
  button.disabled = false;
  if (result.ok && result.data.path) {
    qs("rules-project-path").value = result.data.path;
    showPathEnd();
    return;
  }
  if (result.ok && result.data.cancelled)
    return;
  directoryPickerFailed = true;
  qs("rules-project-path").readOnly = false;
  button.hidden = true;
  notify("The folder picker is not available", "error", \`\${result.ok ? result.data.error : errorText(result)}. Type the project folder instead.\`);
};
var copyRulePrompt = async (button) => {
  const request = qs("rules-composer-input").value;
  const projectPath = qs("rules-project-path").value;
  if (!rulesData) {
    notify("Rules have not loaded yet", "error", "Click Refresh and try again.");
    return;
  }
  if (!request.trim()) {
    notify("Describe what should be blocked first", "error");
    return;
  }
  if (scope === "project" && !projectPath.trim()) {
    notify("Enter the project folder the rule belongs to", "error");
    return;
  }
  button.disabled = true;
  const copied = await navigator.clipboard.writeText(rulePromptText({ rulesData, rulesScope: scope, projectPath, request })).then(() => true, () => false);
  button.disabled = false;
  if (!copied) {
    notify("Copy failed", "error");
    return;
  }
  qs("rules-composer-input").value = "";
  notify("Prompt copied", "ok", "Paste it into your coding agent.");
};
var initRules = () => {
  qs("rules-refresh").addEventListener("click", (event) => {
    runRefresh(event.currentTarget, loadRules);
  });
  qs("rules-project-path").addEventListener("blur", showPathEnd);
  qs("rules-choose-directory").addEventListener("click", (event) => {
    chooseProjectDirectory(event.currentTarget);
  });
  qs("rules-copy-prompt").addEventListener("click", (event) => {
    copyRulePrompt(event.currentTarget);
  });
  qs("rules-composer-panel").addEventListener("click", (event) => {
    const target = event.target;
    const scopeButton = target.closest("[data-rules-scope]");
    if (scopeButton) {
      setScope(scopeButton.dataset.rulesScope ?? "project");
      return;
    }
    const example = target.closest("[data-rules-example]");
    if (example)
      qs("rules-composer-input").value = example.dataset.rulesExample ?? "";
  });
};

// src/gui/frontend/views/settings.ts
var themes = ["auto", "light", "dark"];
var applyTheme = (theme) => {
  document.documentElement.style.colorScheme = theme === "auto" ? "light dark" : theme;
  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.themeChoice === theme));
  });
};
var renderRetention = () => {
  const days = shared.policy?.policy.audit.retention_days;
  if (days === undefined)
    return;
  qs("retention-days").value = String(days);
  qs("retention-unit").textContent = days === 1 ? "day" : "days";
};
var blockedBy = () => (shared.policy?.errors.length ?? 0) > 0 ? "Repair your policy file in Protections first." : shared.drafting ? "Apply or leave your project policy draft first." : shared.dirty ? "Save or discard your unsaved Protections changes first." : null;
var saveRetentionDays = async (days) => {
  const saved = shared.policy;
  if (!saved)
    return;
  const current = saved.policy.audit.retention_days;
  const problem = !Number.isInteger(days) || days < MIN_AUDIT_RETENTION_DAYS || days > MAX_AUDIT_RETENTION_DAYS ? \`Enter a whole number of days from \${MIN_AUDIT_RETENTION_DAYS} to \${MAX_AUDIT_RETENTION_DAYS}.\` : blockedBy();
  if (problem) {
    renderRetention();
    notify("Retention unchanged", "error", problem);
    return;
  }
  if (days === current)
    return;
  if (days < current && !await confirmDialog({
    title: \`Keep logs for only \${dayCount(days)}?\`,
    body: \`Log entries older than \${dayCount(days)} are deleted on the next cleanup and cannot be recovered.\`,
    detail: qs("logs-path").textContent ?? "",
    confirmLabel: "Shorten retention"
  })) {
    renderRetention();
    return;
  }
  await runExclusive("Saving…", async () => {
    const policy = clonePolicy(saved.policy);
    policy.audit.retention_days = days;
    const result = await requestJson("/api/policy", {
      method: "POST",
      body: JSON.stringify(policy)
    });
    if (!isWriteSuccess(result)) {
      renderRetention();
      notify("Save failed", "error", errorText(result));
      return;
    }
    if (!await loadPolicy())
      return;
    limitActivityDays(days);
    await Promise.all([loadOverview(), loadActivity()]);
    notify(\`Logs are now kept for \${dayCount(days)}\`, "ok");
  });
};
var resetPolicy = async () => {
  const saved = shared.policy;
  if (!saved)
    return;
  if (shared.drafting) {
    notify("Reset unavailable", "error", "Apply or leave your project policy draft first.");
    return;
  }
  if (!await confirmDialog({
    title: "Reset your policy?",
    body: "Your policy file is replaced with the defaults. Every customization is lost.",
    detail: saved.path,
    confirmLabel: "Reset policy"
  }))
    return;
  await runExclusive("Resetting…", async () => {
    const result = await requestJson("/api/reset", { method: "POST", body: "{}" });
    if (!isWriteSuccess(result)) {
      notify("Reset failed", "error", errorText(result));
      return;
    }
    sessionStorage.removeItem("cc-safety-net-draft");
    if (await loadPolicy())
      notify("Policy reset to the defaults", "ok", result.data.path);
  });
};
var initSettings = () => {
  document.querySelectorAll("[data-copy-path]").forEach((button) => {
    button.innerHTML = \`\${icons.copy}<span>Copy</span>\`;
    button.addEventListener("click", () => {
      copyText(button, qs(button.dataset.copyPath ?? "").dataset.path ?? "");
    });
  });
  const stored = localStorage.getItem("cc-safety-net-theme");
  applyTheme(themes.includes(stored) ? stored : "auto");
  qs("settings-theme").addEventListener("click", (event) => {
    const theme = event.target.closest("[data-theme-choice]")?.dataset.themeChoice;
    if (!theme)
      return;
    if (theme === "auto")
      localStorage.removeItem("cc-safety-net-theme");
    if (theme !== "auto")
      localStorage.setItem("cc-safety-net-theme", theme);
    applyTheme(theme);
  });
  qs("retention-days").addEventListener("change", (event) => {
    saveRetentionDays(Number(event.target.value));
  });
  qs("reset").addEventListener("click", () => {
    resetPolicy();
  });
  on("policy", renderRetention);
};

// src/gui/frontend/main.ts
var views = {
  overview: ["Overview", () => {
    return;
  }],
  activity: ["Activity", showActivity],
  policy: ["Protections", showPolicy],
  rules: ["Custom rules", showRules],
  integrations: ["Agents", () => {
    return;
  }],
  settings: ["Settings", () => {
    return;
  }]
};
var applyView = () => {
  const [hashName = "", query = ""] = location.hash.slice(1).split("?");
  const view = hashName in views ? hashName : "overview";
  document.body.dataset.view = view;
  document.title = \`\${views[view][0]} · CC Safety Net\`;
  document.querySelectorAll("[data-view]").forEach((section) => {
    section.hidden = section.dataset.view !== view;
  });
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.removeAttribute("aria-current");
    if (link.dataset.nav === view)
      link.setAttribute("aria-current", "page");
  });
  window.scrollTo({ top: 0 });
  views[view][1](new URLSearchParams(query));
};
initConfirmDialog();
initOverview();
initActivity();
initPolicy();
initRules();
initIntegrations();
initSettings();
qs("toast-close").addEventListener("click", () => notify(""));
on("dirty", () => {
  qs("nav-dirty").hidden = !shared.dirty;
});
window.addEventListener("hashchange", applyView);
applyView();
Promise.all([loadIntegrations(), loadHealth()]);
loadPolicy().then((loaded) => {
  if (location.hash.startsWith("#policy?"))
    applyView();
  if (loaded)
    loadStarContext();
  limitActivityDays(retentionDays());
  loadOverview();
  loadActivity();
});

  </script>
</body>
</html>
`;var Ip='<script id="ccsn-data" type="application/json">';function $p(_,N=Op){return N.replace(Ip,()=>Ip+JSON.stringify({token:_}).replaceAll("<","\\u003c"))}var Hs="kenryu42/cc-safety-net",qw=`https://github.com/${Hs}`,Hp=1e4,Vw=7,Kw="The project draft directory changed; reload the draft before applying.",Jw="audit settings are user scope only; remove the audit section from a project proposal";async function Fp(_,N={}){let j=gn({label:"gui",booleans:{noOpen:["--no-open"]}},_),J=N.log??console.log,Y=N.error??console.error;if(j.errors.length>0){for(let ie of j.errors)Y(ie);return Y("Usage: cc-safety-net gui [--no-open]"),1}let re=await Ww(c,N);if(J(`CC Safety Net policy GUI: ${re.url}`),!j.flags.noOpen)try{await(N.openBrowser??ik)(re.url)}catch(ie){Y(`Failed to open browser: ${ie instanceof Error?ie.message:String(ie)}`),Y(`Open this URL manually: ${re.url}`)}if(N.keepAlive===!1)return await re.close(),0;return await ok(re),0}async function Ww(_,N={}){let j=Mw(24).toString("base64url"),J={dir:null,revision:0},Y=Gw((de,fe)=>{zw(_,de,fe,j,N,J)});await new Promise((de,fe)=>{Y.once("error",fe),Y.listen(0,"127.0.0.1",()=>{Y.off("error",fe),de()})});let ie=`http://127.0.0.1:${Y.address().port}`;return{origin:ie,token:j,url:`${ie}/?token=${encodeURIComponent(j)}`,close:()=>rk(Y)}}async function zw(_,N,j,J,Y,re){let ie=_(),de=new URL(N.url??"/","http://127.0.0.1");if(N.method==="GET"&&de.pathname==="/favicon.ico"){j.writeHead(204,{"cache-control":"no-store"}),j.end();return}if(!ek(N,de,J)){an(j,403,{error:"Forbidden"});return}if(N.method==="GET"&&de.pathname==="/"){await Promise.resolve(Y.buildDocument?.()).then((fe)=>tk(j,$p(J,fe)),(fe)=>an(j,500,{error:fe instanceof Error?fe.message:String(fe)}));return}if(N.method==="GET"&&de.pathname==="/api/policy"){let fe=hu(ie,Y),ke=R(ie,js(Y));an(j,200,{...fe,configState:Be(ke),...ke.policyScopes?{projectPolicy:{path:h(Y.cwd??process.cwd()),weakenings:ke.policyScopes.weakeningsIgnored?[]:ke.policyScopes.weakenings}}:{},destructiveCommandRules:z,secretPatterns:lt,version:pn(),preview:fe.errors.length>0?null:Ue(fe.policy,ie.env)});return}if(N.method==="POST"&&de.pathname==="/api/policy/preview"){let fe=await Sr(N);if(!fe.ok){an(j,fe.status,{errors:[fe.error]});return}let ke=vu(ie,fe.value);an(j,ke.errors.length>0?400:200,ke);return}if(N.method==="POST"&&de.pathname==="/api/policy/explain"){let fe=await Sr(N);if(!fe.ok){an(j,fe.status,{errors:[fe.error]});return}let ke=fe.value;if(ke===null||typeof ke.command!=="string"){an(j,400,{errors:["command must be a string"]});return}let Ce=br(ke.policy,ie.home);if(Ce.length>0){an(j,400,{errors:Ce});return}an(j,200,Xw(ie,ke.command,ke.policy,Y));return}if(N.method==="POST"&&de.pathname==="/api/policy"){let fe=await Sr(N);if(!fe.ok){an(j,fe.status,{errors:[fe.error]});return}let ke=Fn(ie,fe.value,Y);an(j,ke.errors.length>0?400:200,ke);return}if(N.method==="POST"&&de.pathname==="/api/reset"){an(j,200,Fn(ie,te,Y));return}if(N.method==="POST"&&de.pathname==="/api/repair"){an(j,200,bu(ie,Y));return}if(N.method==="POST"&&de.pathname==="/api/policy/project/choose-directory"){let fe=await(Y.chooseDirectory??Ns)();if("path"in fe)re.dir=fe.path,re.revision+=1;an(j,200,{cancelled:"cancelled"in fe,..."error"in fe?{error:fe.error}:{}});return}if(N.method==="GET"&&de.pathname==="/api/policy/project"){let fe=Mp(re,Y),ke=Up(ie,fe,Y),Ce=ke?{projection:{},diagnostics:[ke]}:Dp(fe,ie.home),Re=wr(ie,Y);an(j,200,{path:h(fe),revision:re.revision,baseline:Re.baseline,userPolicyDiagnostics:Re.diagnostics,projection:Ce.projection,projectionDiagnostics:Ce.diagnostics,canPickDirectory:Ls(process.platform,process.env)});return}if(N.method==="POST"&&de.pathname==="/api/policy/project/diff"){let fe=await Lp(ie,N,j,re,Y);if(!fe)return;let ke=Dp(fe.dir,ie.home),Ce=wr(ie,Y).baseline,Re=ee(Ce,ue(fe.proposal,ie.home).policy);an(j,200,{rows:So(ee(Ce,ke.projection).policy,Re.policy,!1),weakenings:Re.weakenings,existingFileDiagnostics:ke.diagnostics});return}if(N.method==="POST"&&de.pathname==="/api/policy/project/apply"){let fe=await Lp(ie,N,j,re,Y);if(!fe)return;let ke=Zw(fe.dir,fe.proposal,ie.home);an(j,ke.errors.length>0?500:200,ke);return}if(N.method==="GET"&&de.pathname==="/api/activity"){let fe=oe(ie,Y),ke=Qw(de.searchParams.get("days"),fe);if(ke===null){an(j,400,{error:`days must be an integer between 1 and ${fe}`});return}an(j,200,Ep(ie,ke,Y.activityLogsDir));return}if(N.method==="POST"&&de.pathname==="/api/rules/choose-directory"){an(j,200,await Ns());return}if(N.method==="GET"&&de.pathname==="/api/rules"){let fe=Q(ie,js(Y)),ke=new Map(fe.rules.map((Ce)=>[Ce.name,Ce]));an(j,200,{projectPath:Y.cwd??process.cwd(),canPickDirectory:Ls(process.platform,process.env),rulebooks:fe.rulebooks.map((Ce)=>({source:Ce.source,spec:Ce.spec,name:Ce.name,version:Ce.version,rules:Ce.rules.flatMap((Re)=>{let Ee=ke.get(Re);if(!Ee)return[];return[{name:Ee.name,command:Ee.command,subcommand:Ee.subcommand,block_args:Ee.block_args,reason:Ee.reason}]})})),errors:fe.errors,warnings:fe.warnings});return}if(N.method==="GET"&&de.pathname==="/api/star/context"){an(j,200,await(Y.fetchStarContext??(()=>uk(ie,{logsDir:Y.activityLogsDir})))());return}if(N.method==="POST"&&de.pathname==="/api/star"){let fe=await(Y.starRepo??sk)();an(j,200,fe.ok?{ok:!0}:{ok:!1,fallbackUrl:qw});return}if(N.method==="GET"&&de.pathname==="/api/integrations"){an(j,200,await(Y.fetchIntegrations??(()=>ak(ie)))());return}if(N.method==="GET"&&de.pathname==="/api/health"){an(j,200,await(Y.fetchHealth??ck)());return}if(N.method==="POST"&&(de.pathname==="/api/install"||de.pathname==="/api/uninstall")){let fe=await Sr(N);if(!fe.ok){an(j,fe.status,{errors:[fe.error]});return}let ke=fe.value?.target;if(typeof ke!=="string"||!In.some((Re)=>Re.target===ke)){an(j,400,{error:"unknown target"});return}let Ce=de.pathname==="/api/install"?"install":"uninstall";an(j,200,await(Y.runIntegration??dk)(Ce,ke));return}an(j,404,{error:"Not found"})}function js(_){return{..._,cwd:_.cwd??process.cwd()}}function Mp(_,N){return _.dir??N.cwd??process.cwd()}function Up(_,N,j){if(!A(_,{...j,cwd:N}))return null;return`${h(N)} is the user policy, not a project policy; choose a project directory, or run the GUI from one`}function Dp(_,N){let j=h(_),J=Uw(j)?Ot(j):{value:void 0,errors:[]},Y=ue(J.value,N);return{projection:Y.policy,diagnostics:[...J.errors,...Y.diagnostics]}}async function Lp(_,N,j,J,Y){let re=Mp(J,Y),ie=J.revision,de=await Sr(N);if(!de.ok)return an(j,de.status,{errors:[de.error]}),null;let fe=de.value;if(typeof fe?.revision!=="number")return an(j,400,{errors:["revision must be a number"]}),null;if(fe.revision!==ie)return an(j,409,{errors:[Kw]}),null;let ke=Up(_,re,Y);if(ke)return an(j,400,{errors:[ke]}),null;let Ce=Yw(fe.proposal,_.home);if(Ce.length>0)return an(j,400,{errors:Ce}),null;return{dir:re,proposal:fe.proposal}}function Yw(_,N){let j=br(_,N);if(j.length>0)return j;return _?.audit===void 0?[]:[Jw]}function Zw(_,N,j){let J=h(_),Y=Po(N,k(N,j));try{return g(i(w(_,"project policy"),J),`${JSON.stringify(Y,null,2)}
`),{path:J,errors:[]}}catch(re){return{path:J,errors:[re instanceof Error?re.message:String(re)]}}}function Xw(_,N,j,J){let Y=k(j,_.home),re=R(_,js(J)),ie=Ae({rules:re.policy.rules,transparentWrappers:re.policy.transparentWrappers,commandTools:re.policy.commandTools,safety:We(Y.safety),worktreeMode:Y.workflow.worktree_mode,destructiveCommandProtectionEnabled:Y.destructive_command_protection.enabled,destructiveCommandRuleOverrides:Y.destructive_command_protection.overrides,destructiveCommandAllowPaths:Y.destructive_command_protection.allow_paths,secretProtection:{enabled:Y.secret_protection.enabled,disabledRules:He(Y.secret_protection.overrides),denyPaths:Y.secret_protection.deny_paths,allowPaths:Y.secret_protection.allow_paths}});return pr(N,{policySnapshot:ie,cwd:J.cwd,userConfigDir:J.userConfigDir},_)}function Qw(_,N){if(_===null)return Math.min(Vw,N);let j=Number(_);if(!Number.isInteger(j)||j<1||j>N)return null;return j}function ek(_,N,j){if(N.searchParams.get("token")!==j)return!1;if(_.method!=="POST")return!0;return _.headers["x-cc-safety-net-token"]===j}var nk=1048576;async function Sr(_){let N=[],j=0;for await(let J of _){let Y=J;if(j+=Y.byteLength,j>nk)return{ok:!1,status:413,error:"Request body is too large"};N.push(Y)}try{return{ok:!0,value:JSON.parse(Buffer.concat(N).toString("utf-8")||"{}")}}catch(J){return{ok:!1,status:400,error:`Invalid JSON: ${J instanceof Error?J.message:String(J)}`}}}function tk(_,N){_.writeHead(200,{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}),_.end(N)}function an(_,N,j){_.writeHead(N,{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}),_.end(JSON.stringify(j))}function rk(_){return new Promise((N,j)=>{_.close((J)=>J?j(J):N())})}function ok(_){return new Promise((N)=>{let j=()=>{process.off("SIGINT",J),process.off("SIGTERM",J)},J=()=>{j(),_.close().then(N)};process.once("SIGINT",J),process.once("SIGTERM",J)})}function ik(_){let N=process.platform==="darwin"?"open":process.platform==="win32"?"cmd":"xdg-open",j=process.platform==="win32"?["/c","start","",_]:[_];return new Promise((J,Y)=>{let re=jp(N,j,{detached:!0,stdio:"ignore"}),ie=(fe)=>{re.off("spawn",de),Y(fe)},de=()=>{re.off("error",ie),re.unref(),J()};re.once("error",ie),re.once("spawn",de)})}async function sk(_="gh",N=Hp){return{ok:await pk(_,["api","-X","PUT",`/user/starred/${Hs}`],N)===0}}async function ak(_,N={}){let j=await Lr((Y)=>qt({environment:_,cwd:process.cwd(),openCodeVersion:Y}).status!=="n/a",N.fetcher),J=lk(_,j);return{targets:Rn.map((Y)=>{let re=J.find((ie)=>ie.platform===Y.id);return{target:Y.id,label:cn(Y.id),version:j.versions[Y.id]??null,status:re?.configured?"active":re?.detected?"disabled":re?.inspectionStatus==="not-inspected"?"not-inspected":"not-installed"}}),system:{version:j.version,nodeVersion:j.nodeVersion,platform:j.platform}}}function lk(_,N){return Vt(_,process.cwd(),{ampPluginListOutput:N.ampPluginListOutput,codexPluginListOutput:N.codexPluginListOutput,copilotCliVersion:N.versions["copilot-cli"],openCodeVersion:N.versions.opencode,openCodePluginListOutput:N.openCodePluginListOutput})}async function ck(_={}){let N=await(_.checkUpdates??Gn)();return{update:{latestVersion:N.latestVersion??null,updateAvailable:N.updateAvailable}}}var Np=Promise.resolve();function dk(_,N,j={}){let J=async()=>{let re=[],{log:ie,error:de}=console;console.log=(...fe)=>re.push(fe.map(String).join(" ")),console.error=console.log;try{return{ok:await vr(_,[],{selectTargets:async()=>[N],output:new Bw({write(ke,Ce,Re){re.push(String(ke).replace(/\n$/,"")),Re()}}),...j})===0,output:re.join(`
`)}}finally{console.log=ie,console.error=de}},Y=Np.then(J);return Np=Y.then(()=>{return},()=>{return}),Y}async function uk(_,N={}){let[j,J]=await Promise.all([fk(N.fetchRepo),Promise.resolve(Ar(_,oe(_),N.logsDir).totalBlocked)]);return{starCount:j,blockedTotal:J}}function pk(_,N,j){return new Promise((J)=>{let Y=jp(_,N,{stdio:"ignore",windowsHide:!0}),re=!1,ie=setTimeout(()=>{Y.kill(),de(null)},j),de=(fe)=>{if(re)return;re=!0,clearTimeout(ie),J(fe)};Y.once("error",()=>de(null)),Y.once("close",de)})}async function fk(_=fetch){try{let N=await _(`https://api.github.com/repos/${Hs}`,{headers:{accept:"application/vnd.github+json"},signal:AbortSignal.timeout(Hp)});if(!N.ok)return null;let j=await N.json();return typeof j.stargazers_count==="number"?j.stargazers_count:null}catch{return null}}function mk(_){if(_[0]!=="help")return!1;let N=_[1];if(!N)ss(),process.exit(0);if(fr(N))process.exit(0);console.error(`Unknown command: ${N}`),console.error("Run 'cc-safety-net --help' for available commands."),process.exit(1)}var gk={hook:async()=>{console.error("hook requires exactly one integration flag. Try: cc-safety-net hook --kimi-code"),fr("hook",console.error),process.exit(1)},install:async(_)=>{process.exit(await vr("install",_))},update:async(_)=>{process.exit(await ks(_))},uninstall:async(_)=>{process.exit(await vr("uninstall",_))},rule:async(_)=>{process.exit(await Sp(c(),_))},policy:async(_)=>{process.exit(await xu(c(),_))},status:async(_)=>{if(Dn(gn({label:"status"},_).errors))process.exit(1);Rp(c())},statusline:async(_)=>{let N=gn({label:"statusline",booleans:{claudeCode:["-cc","--claude-code"]}},_);if(N.errors.length===0&&N.flags.claudeCode){await Ds(c());return}if(Dn(N.errors),!N.flags.claudeCode)console.error("statusline requires --claude-code (-cc)");fr("statusline",console.error),process.exit(1)},doctor:async(_)=>{let N=Xi(_);if(!N)process.exit(1);let j=await Fc(c(),{json:N.json,skipUpdateCheck:N.skipUpdateCheck});process.exit(j)},logs:async(_)=>{process.exit(await Ks(c(),_))},gui:async(_)=>{process.exit(await Fp(_))},explain:async(_)=>{process.exit(await Yc(c(),_))}};async function yk(_){let N=gn({label:"cc-safety-net",booleans:{version:["-V","--version"]},positionals:"list"},_);if(mk(_))return;let j=_[0],J=j?Tr(j):void 0;if(N.help&&J&&J.name!=="rule")fr(J.name),process.exit(0);if(!j||N.help&&!J)ss(),process.exit(0);if(N.flags.version)Qc(),process.exit(0);if(J){await gk[J.name](_.slice(1));return}if(j==="--statusline"){await Ds(c());return}console.error(j.startsWith("-")?`Unknown option: ${j}`:`Unknown command: ${j}`),console.error("Run 'cc-safety-net --help' for usage."),process.exit(1)}export{yk as runCli};
