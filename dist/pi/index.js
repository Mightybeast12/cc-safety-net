import"../chunks/index-szahvnh8.js";import{ft}from"../chunks/index-ba8pkj4y.js";import{re}from"../chunks/index-5ht7pdm3.js";import"../chunks/index-ezd6m8rs.js";import"../chunks/index-nkbb32a2.js";var o="cc-safety-net",r="Operate CC Safety Net: explain blocks, rules, integrations, diagnostics",s="Help me with CC Safety Net.";function t(e){e.registerCommand(o,{description:r,handler:async(n,i)=>{e.sendUserMessage(a(n),i.isIdle()?void 0:{deliverAs:"followUp"})}})}function a(e){return`${re.slice(re.indexOf("# CC Safety Net")).trimEnd()}

## User request

${e.trim()||s}`}function m(e){ft(e),t(e)}export{m as default};
