const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./langs-CitAlBbK.js","./index-CQrn7TS7.js","./index-CL4U9Wyu.css"])))=>i.map(i=>d[i]);
import{r as o,j as c,_ as b}from"./index-CQrn7TS7.js";import{F as x,J as _}from"./owner-cs5WkvQO.js";import{u as k}from"./use-is-dark-DMmkBWbe.js";import{s as h}from"./dom-BowoBODo.js";import{c as w}from"./helper-BGko9IlV.js";import{a as j}from"./Shiki-pJrAkXhx.js";const d={},a={};function p(e){return new Promise((t,n)=>{const r=d[e];if(r==="loaded")return t(null);if(r==="loading"){a[e]=a[e]?[...a[e],[t,n]]:[[t,n]];return}const s=document.createElement("script");s.src=e,s.crossOrigin="anonymous",d[e]="loading",s.onload=function(){d[e]="loaded",t(null),a[e]&&(a[e].forEach(([i])=>{i(null)}),delete a[e])},s.onerror=function(i){this.onerror=this.onload=null,delete d[e],a[e].forEach(([,y])=>{y(i)}),delete a[e],n(i)},document.head.append(s)})}const l=new Map;function g(e){if(l.has(e)){const n=l.get(e);return{$link:n,remove:()=>{n.parentNode&&n.parentNode.removeChild(n),l.delete(e)}}}const t=document.createElement("link");return t.href=e,t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",l.set(e,t),t.onerror=()=>{t.onerror=null,l.delete(e)},document.head.append(t),{remove:()=>{t.parentNode&&t.parentNode.removeChild(t),l.delete(e)},$link:t}}const m={"code-wrap":"_code-wrap_1uhyk_1","copy-tip":"_copy-tip_1uhyk_11","language-tip":"_language-tip_1uhyk_49"},E=e=>{const{lang:t,content:n,startLineNumber:r=1}=e,s=o.useCallback(()=>{navigator.clipboard.writeText(n),x.success("已复制到剪贴板")},[n]),i=o.useRef(null);return f(i),c.jsxs("div",{className:m["code-wrap"],onCopy:h,children:[c.jsx("span",{className:m["language-tip"],"aria-hidden":!0,children:t?.toUpperCase()}),c.jsx("pre",{className:"line-numbers !bg-transparent","data-start":r,children:c.jsx("code",{className:`language-${t??"markup"} !bg-transparent`,ref:i,children:n})}),c.jsx("div",{className:m["copy-tip"],onClick:s,"aria-hidden":!0,children:"Copy"})]})},M=({content:e,lang:t,className:n,style:r})=>{const s=o.useRef(null);return f(s),o.useEffect(()=>{window.Prism?.highlightElement(s.current)},[e,t]),c.jsx("pre",{onCopy:h,className:w("!bg-transparent",n),style:r,"data-start":"1",children:c.jsx("code",{className:`language-${t??"markup"} !bg-transparent`,ref:s,children:e})})},f=e=>{const t=o.useRef(),n=_(),r=k();o.useInsertionEffect(()=>{const s=g(`https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism-themes/1.9.0/prism-one-${n?"light":r?"dark":"light"}.css`);if(t.current){const i=t.current;s.$link.onload=()=>{i.remove()}}t.current=s},[r,n]),o.useInsertionEffect(()=>{g("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/plugins/line-numbers/prism-line-numbers.min.css"),p("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/components/prism-core.min.js").then(()=>Promise.all([p("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js"),p("https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/plugins/line-numbers/prism-line-numbers.min.js")])).then(()=>{e.current?requestAnimationFrame(()=>{window.Prism?.highlightElement(e.current),requestAnimationFrame(()=>{window.Prism?.highlightElement(e.current)})}):requestAnimationFrame(()=>{requestAnimationFrame(()=>{window.Prism?.highlightAll()})})})},[])};let u=null;const P=e=>{const{lang:t}=e,n=o.use(o.useMemo(async()=>{if(!t)return!1;if(!u){const{bundledLanguages:r}=await b(async()=>{const{bundledLanguages:s}=await import("./langs-CitAlBbK.js");return{bundledLanguages:s}},__vite__mapDeps([0,1,2]),import.meta.url);u=new Set(Object.keys(r))}return u.has(t)},[t]));return c.jsx(j,{...e,lang:n?e.lang:"text"})},A=Object.freeze(Object.defineProperty({__proto__:null,BaseCodeHighlighter:M,HighLighterPrismCdn:E,ShikiFallback:P},Symbol.toStringTag,{value:"Module"}));export{M as B,E as H,A as i,p as l};
