"use strict";const t=t=>{const e=((t="")=>t.replace(/\/$/u,""))(t);return/^(https?:)?\/\//.test(e)?e:`https://${e}`},e=t=>{"AbortError"!==t.name&&console.error(t.message)};exports.commentCount=({serverURL:r,path:n=window.location.pathname,selector:o=".waline-comment-count",lang:a="zh-CN"})=>{const s=new AbortController,c=document.querySelectorAll(o);return c.length&&(({serverURL:t,lang:e,paths:r,signal:n})=>fetch(`${t}/comment?type=count&url=${encodeURIComponent(r.join(","))}&lang=${e}`,{signal:n}).then((t=>t.json())).then((t=>Array.isArray(t)?t:[t])))({serverURL:t(r),paths:Array.from(c).map((t=>(t=>{try{t=decodeURI(t)}catch(t){}return t})(t.dataset.path||t.getAttribute("id")||n))),lang:a,signal:s.signal}).then((t=>{c.forEach(((e,r)=>{e.innerText=t[r].toString()}))})).catch(e),s.abort.bind(s)},exports.version="2.14.1";
//# sourceMappingURL=comment.cjs.map
