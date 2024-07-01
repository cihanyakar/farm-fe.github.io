"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[3535],{1989:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(1527),o=n(5696);const s={},t="DevServer and HMR",a={id:"features/dev-server",title:"DevServer and HMR",description:"Farm provides DevServer and enabled HMR in development by default.",source:"@site/docs/features/dev-server.md",sourceDirName:"features",slug:"/features/dev-server",permalink:"/docs/features/dev-server",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/features/dev-server.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Build For Production",permalink:"/docs/tutorials/build"},next:{title:"Html",permalink:"/docs/features/html"}},d={},l=[{value:"Configuring Dev Server",id:"configuring-dev-server",level:2},{value:"Dev Server Middlewares",id:"dev-server-middlewares",level:2},{value:"Hot Module Replacement(HMR)",id:"hot-module-replacementhmr",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"devserver-and-hmr",children:"DevServer and HMR"}),"\n",(0,i.jsxs)(r.p,{children:["Farm provides ",(0,i.jsx)(r.code,{children:"DevServer"})," and enabled ",(0,i.jsx)(r.code,{children:"HMR"})," in ",(0,i.jsx)(r.code,{children:"development"})," by default."]}),"\n",(0,i.jsx)(r.h2,{id:"configuring-dev-server",children:"Configuring Dev Server"}),"\n",(0,i.jsxs)(r.p,{children:["Farm provides a lot of useful options to configure dev server. All dev server options are configured by ",(0,i.jsx)(r.a,{href:"/docs/config/dev-server",children:(0,i.jsx)(r.code,{children:"server"})}),"."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  server: {\n    port: 9801,\n    cors: true,\n    proxy: {\n      // ...\n    },\n    open: true,\n  }\n})\n"})}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsxs)(r.p,{children:["If you are built tools on top of farm, refer to ",(0,i.jsx)(r.a,{href:"/docs/api/javascript-api",children:"Javascript API"})," for creating a Dev Server programmatically."]})}),"\n",(0,i.jsx)(r.h2,{id:"dev-server-middlewares",children:"Dev Server Middlewares"}),"\n",(0,i.jsxs)(r.p,{children:["You can use ",(0,i.jsx)(r.a,{href:"/docs/config/dev-server#middlewares",children:(0,i.jsx)(r.code,{children:"middlewares"})})," to handle dev server requests. For example:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import { Middleware } from 'koa';\nimport { Server, defineConfig } from '@farmfe/core';\n\nexport function headers(devSeverContext: Server): Middleware {\n  const { config } = devSeverContext;\n  if (!config.headers) return;\n\n  return async (ctx, next) => {\n    if (config.headers) {\n      for (const name in config.headers) {\n        ctx.set(name, config.headers[name] as string | string[]);\n      }\n    }\n    await next();\n  };\n}\n\nexport default defineConfig({\n  server: {\n    middlewares: [\n      headers\n    ]\n  }\n})\n"})}),"\n",(0,i.jsxs)(r.p,{children:["In above example, a Farm middleware is a function that expose ",(0,i.jsx)(r.code,{children:"Koa Middleware"}),". Common Koa middlewares can be used directly, for example:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",metastring:"{2,7}",children:"import { defineConfig } from \"@farmfe/core\";\nimport compression from 'koa-compress';\n\nexport default defineConfig({\n  server: {\n    middlewares: [\n      compression\n    ]\n  },\n});\n"})}),"\n",(0,i.jsx)(r.h2,{id:"hot-module-replacementhmr",children:"Hot Module Replacement(HMR)"}),"\n",(0,i.jsxs)(r.p,{children:["Farm provides a ",(0,i.jsx)(r.a,{href:"/docs/api/hmr-api",children:"Vite-compatible HMR API"}),". If you are framework authors, leverage the API to update your Application instance, precise without reloading the page."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["For React, ",(0,i.jsx)(r.strong,{children:"React Refresh"})," are enabled automatically by official plugins ",(0,i.jsx)(r.a,{href:"/docs/plugins/official-plugins/react",children:"@farmfe/plugin-react"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["For Vue, Solid and other frameworks, it's HMR are supported by there plugins like ",(0,i.jsx)(r.code,{children:"@vitejs/plugin-vue"}),", ",(0,i.jsx)(r.code,{children:"vite-plugin-solid"})," and so on."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Farm provides official templates that set all these capabilities up already, create an app via ",(0,i.jsx)(r.a,{href:"/docs/quick-start",children:"create-farm"})," then all HMR abilities are ready."]}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Usually HMR is supported out of box for app users, refer to ",(0,i.jsx)(r.a,{href:"/docs/api/hmr-api",children:"Vite-compatible HMR API"})," if you are framework author."]}),"\n",(0,i.jsxs)(r.li,{children:["Refer to ",(0,i.jsx)(r.a,{href:"/docs/config/dev-server#hmr",children:"HMR Options"})," for how to configuring HMR."]}),"\n"]})})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5696:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>t});var i=n(959);const o={},s=i.createContext(o);function t(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);