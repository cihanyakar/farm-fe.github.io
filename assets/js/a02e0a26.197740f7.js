"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[8557],{4042:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>l,contentTitle:()=>u,default:()=>g,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=e(1527),r=e(5696);const t={},u="Overview",o={id:"plugins/writing-plugins/overview",title:"Overview",description:"To use a Rust plugin, configuring plugins in farm.config.ts.",source:"@site/docs/plugins/writing-plugins/overview.md",sourceDirName:"plugins/writing-plugins",slug:"/plugins/writing-plugins/overview",permalink:"/docs/plugins/writing-plugins/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/writing-plugins/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"Community Plugins",permalink:"/docs/plugins/community-plugins"},next:{title:"Rust Plugins",permalink:"/docs/plugins/writing-plugins/rust-plugin"}},l={},c=[];function p(n){const i={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(i.p,{children:["To use a Rust plugin, configuring ",(0,s.jsx)(i.code,{children:"plugins"})," in ",(0,s.jsx)(i.code,{children:"farm.config.ts"}),"."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",children:"import { defineFarmConfig } from '@farmfe/core/dist/config';\n\ndefineFarmConfig({\n  // ...\n  plugins: [\n    { /*..*/ }, // Js plugin, a object with hook defined\n    '@farmfe/plugin-react', // rust plugin package name\n  ]\n})\n\n"})}),"\n",(0,s.jsx)(i.p,{children:"Farm support both rust plugins and js plugins:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/plugins/rust-plugin",children:"Rust Plugin"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/plugins/js-plugin",children:"Js plugin"})}),"\n"]})]})}function g(n={}){const{wrapper:i}={...(0,r.a)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},5696:(n,i,e)=>{e.d(i,{Z:()=>o,a:()=>u});var s=e(959);const r={},t=s.createContext(r);function u(n){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function o(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:u(n.components),s.createElement(t.Provider,{value:i},n.children)}}}]);