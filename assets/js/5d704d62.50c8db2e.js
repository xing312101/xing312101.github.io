"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[2245],{8832:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>i,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=o(4848),a=o(8453);const s={},n="ORA-ERROR",l={id:"technique/oracle/ora-error",title:"ORA-ERROR",description:"ORA-04031: unable to allocate nn bytes of shared memory",source:"@site/docs/technique/oracle/ora-error.md",sourceDirName:"technique/oracle",slug:"/technique/oracle/ora-error",permalink:"/docs/technique/oracle/ora-error",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"Oracle",permalink:"/docs/technique/oracle/"},next:{title:"Oracle Client",permalink:"/docs/technique/oracle/oracle_client"}},i={},c=[{value:"ORA-04031: unable to allocate nn bytes of shared memory",id:"ora-04031-unable-to-allocate-nn-bytes-of-shared-memory",level:2},{value:"Increasing the value of the INIT.ORA parameters \u201cshared_pool_reserved_size\u201d, \u201cshared_pool_size\u201d and \u201clarge_pool_size\u201d.",id:"increasing-the-value-of-the-initora-parameters-shared_pool_reserved_size-shared_pool_size-and-large_pool_size",level:4},{value:"If it not set then increase the SGA_TARGET or MEMORY_TARGET parameter as you set which will allocate more space to the Shared POOL size.",id:"if-it-not-set-then-increase-the-sga_target-or-memory_target-parameter-as-you-set-which-will-allocate-more-space-to-the-shared-pool-size",level:4}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"ora-error",children:"ORA-ERROR"}),"\n",(0,t.jsx)(r.h2,{id:"ora-04031-unable-to-allocate-nn-bytes-of-shared-memory",children:"ORA-04031: unable to allocate nn bytes of shared memory"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"path: /opt/oracle/product/12.1.0.2/dbhome_1/dbs/init.ora\n"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["ref: ",(0,t.jsx)(r.a,{href:"https://smarttechways.com/2020/03/16/ora-04301-unable-to-allocate-xxx-bytes-of-shared-memory/",children:"https://smarttechways.com/2020/03/16/ora-04301-unable-to-allocate-xxx-bytes-of-shared-memory/"})]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"SQL> show parameter pool\nSQL> show parameter sga_target\nSQL> show parameter memory_target\n\n=> SELECT name, value FROM v$parameter WHERE name IN ('shared_pool_size', 'large_pool_size', 'shared_pool_reserved_size', 'sga_target', 'memory_target');\n"})}),"\n",(0,t.jsx)(r.h4,{id:"increasing-the-value-of-the-initora-parameters-shared_pool_reserved_size-shared_pool_size-and-large_pool_size",children:"Increasing the value of the INIT.ORA parameters \u201cshared_pool_reserved_size\u201d, \u201cshared_pool_size\u201d and \u201clarge_pool_size\u201d."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"ALTER SYSTEM SET shared_pool_size = 1g scope=both;\nALTER SYSTEM SET large_pool_size=100M scope=both;\nALTER SYSTEM SET shared_pool_reserved_size=512M scope=spfile;\n"})}),"\n",(0,t.jsx)(r.h4,{id:"if-it-not-set-then-increase-the-sga_target-or-memory_target-parameter-as-you-set-which-will-allocate-more-space-to-the-shared-pool-size",children:"If it not set then increase the SGA_TARGET or MEMORY_TARGET parameter as you set which will allocate more space to the Shared POOL size."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"ALTER SYSTEM SET SGA_TARGET=3G scope=spfile;\nOR\nALTER SYSTEM SET MEMORY_TARGET=3G scope=spfile;\n"})})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,r,o)=>{o.d(r,{R:()=>n,x:()=>l});var t=o(6540);const a={},s=t.createContext(a);function n(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);