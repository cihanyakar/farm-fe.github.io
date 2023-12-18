"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[2436],{3284:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var i=r(1527),s=r(5696);const t={},l="3. \u4f7f\u7528 Farm \u6784\u5efa\u751f\u4ea7\u9879\u76ee",c={id:"tutorials/build",title:"3. \u4f7f\u7528 Farm \u6784\u5efa\u751f\u4ea7\u9879\u76ee",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u5df2\u7ecf\u4e3a\u751f\u4ea7\u6784\u5efa\u5f00\u542f\u4e86\u4ee5\u4e0b\u529f\u80fd\u7684\u652f\u6301\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorials/3-build.md",sourceDirName:"tutorials",slug:"/tutorials/build",permalink:"/zh/docs/tutorials/build",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/tutorials/3-build.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2. \u4f7f\u7528 Farm \u5f00\u53d1\u9879\u76ee",permalink:"/zh/docs/tutorials/start"},next:{title:"Html",permalink:"/zh/docs/features/html"}},a={},o=[{value:"\u6dfb\u52a0 build script",id:"\u6dfb\u52a0-build-script",level:2},{value:"\u914d\u7f6e Tree Shake \u548c\u538b\u7f29",id:"\u914d\u7f6e-tree-shake-\u548c\u538b\u7f29",level:2},{value:"Configure Tree Shake and compression",id:"configure-tree-shake-and-compression",level:2},{value:"\u914d\u7f6e\u5c40\u90e8\u6253\u5305\u7b56\u7565",id:"\u914d\u7f6e\u5c40\u90e8\u6253\u5305\u7b56\u7565",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"3-\u4f7f\u7528-farm-\u6784\u5efa\u751f\u4ea7\u9879\u76ee",children:"3. \u4f7f\u7528 Farm \u6784\u5efa\u751f\u4ea7\u9879\u76ee"}),"\n",(0,i.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u5df2\u7ecf\u4e3a\u751f\u4ea7\u6784\u5efa\u5f00\u542f\u4e86\u4ee5\u4e0b\u529f\u80fd\u7684\u652f\u6301\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Tree Shake"})}),"\uff1a\u88c1\u526a\u548c\u8fc7\u6ee4\u65e0\u5173\u6a21\u5757\u548c\u4ee3\u7801"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"\u538b\u7f29"})}),"\uff1a\u5bf9\u4ea7\u7269\u8fdb\u884c\u538b\u7f29\u548c\u6df7\u6dc6\uff0c\u51cf\u5c11\u4ea7\u7269\u4f53\u79ef"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"\u81ea\u52a8\u6ce8\u5165 Polyfill"})}),"\uff1aFarm \u9ed8\u8ba4\u5bf9\u9879\u76ee\u964d\u7ea7\u5230 ES5\uff0c\u8fd9\u610f\u5473\u7740 Farm \u6784\u5efa\u7684\u4ea7\u7269\u51e0\u4e4e\u53ef\u4ee5\u5728\u6240\u6709\u6d4f\u89c8\u5668\u4e0a\u8fd0\u884c"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"\u81ea\u52a8\u8fdb\u884c\u5c40\u90e8\u6253\u5305"})}),": \u4f9d\u636e\u4f9d\u8d56\u5173\u7cfb\u4ee5\u53ca\u5927\u5c0f\uff0c\u5c06\u9879\u76ee\u8fdb\u884c\u5c40\u90e8\u6253\u5305\uff0c\u5bf9\u4e8e\u6bcf\u6b21\u8d44\u6e90\u8bf7\u6c42\uff0c\u751f\u6210 25 \u4e2a\u5de6\u53f3\u7684\u8d44\u6e90\uff0c\u5728\u4fdd\u8bc1\u5e76\u884c\u52a0\u8f7d\u6027\u80fd\u7684\u540c\u65f6\uff0c\u5c3d\u53ef\u80fd\u63d0\u5347\u7f13\u5b58\u547d\u4e2d\u7387"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6dfb\u52a0-build-script",children:"\u6dfb\u52a0 build script"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"package.json"})," \u4e2d\u6dfb\u52a0 build script:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="package.json" {7}',children:'{\n  "name": "1-create-a-project",\n  "version": "1.0.0",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "start": "farm start",\n    "build": "farm build"\n  },\n  // ... ignore other fields \n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u7136\u540e\u6267\u884c ",(0,i.jsx)(n.code,{children:"npm run build"})," \u5373\u53ef\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u914d\u7f6e-tree-shake-\u548c\u538b\u7f29",children:"\u914d\u7f6e Tree Shake \u548c\u538b\u7f29"}),"\n",(0,i.jsx)(n.h2,{id:"configure-tree-shake-and-compression",children:"Configure Tree Shake and compression"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/features/tree-shake",children:"Tree Shake"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/features/minification",children:"Minification"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u914d\u7f6e\u5c40\u90e8\u6253\u5305\u7b56\u7565",children:"\u914d\u7f6e\u5c40\u90e8\u6253\u5305\u7b56\u7565"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/features/partial-bundling",children:"Partial Bundling"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5696:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var i=r(959);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);