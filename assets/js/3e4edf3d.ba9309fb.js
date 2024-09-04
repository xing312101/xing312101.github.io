"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[9953],{8223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var s=t(4848),r=t(8453);const c={},i="SSL",o={id:"technique/web_server/ssl",title:"SSL",description:"openssl",source:"@site/docs/technique/web_server/ssl.md",sourceDirName:"technique/web_server",slug:"/technique/web_server/ssl",permalink:"/docs/technique/web_server/ssl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"Nginx",permalink:"/docs/technique/web_server/nginx"},next:{title:"Windows",permalink:"/docs/technique/windows/"}},l={},d=[{value:"openssl",id:"openssl",level:2},{value:"\u5c55\u671f crt bundle crt chained",id:"\u5c55\u671f-crt-bundle-crt-chained",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ssl",children:"SSL"}),"\n",(0,s.jsx)(n.h2,{id:"openssl",children:"openssl"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.crt\n\nreq\uff1a\u4f7f\u7528 X.509 Certificate Signing Request\uff08CSR\uff09 Management \u7522\u751f\u6191\u8b49\u3002\n-x509\uff1a\u5efa\u7acb\u81ea\u884c\u7c3d\u7f72\u7684\u6191\u8b49\u3002\n-nodes\uff1a\u4e0d\u8981\u4f7f\u7528\u5bc6\u78bc\u4fdd\u8b77\uff0c\u56e0\u70ba\u9019\u500b\u6191\u8b49\u662f NGINX \u4f3a\u670d\u5668\u8981\u4f7f\u7528\u7684\uff0c\u5982\u679c\u8a2d\u5b9a\u5bc6\u78bc\u7684\u8a71\uff0c\u6703\u8b93\u4f3a\u670d\u5668\u6bcf\u6b21\u5728\u555f\u52d5\u6642\u66f8\u9700\u8981\u8f38\u5165\u5bc6\u78bc\u3002\n-days 365\uff1a\u8a2d\u5b9a\u6191\u8b49\u7684\u4f7f\u7528\u671f\u9650\uff0c\u55ae\u4f4d\u662f\u5929\uff0c\u5982\u679c\u4e0d\u60f3\u6642\u5e38\u91cd\u65b0\u7522\u751f\u6191\u8b49\uff0c\u53ef\u4ee5\u8a2d\u9577\u4e00\u9ede\u3002\n-newkey rsa:2048\uff1a\u540c\u6642\u7522\u751f\u65b0\u7684 RSA 2048 \u4f4d\u5143\u7684\u91d1\u9470\u3002\n-keyout\uff1a\u8a2d\u5b9a\u91d1\u9470\u5132\u5b58\u7684\u4f4d\u7f6e\u3002\n-out\uff1a\u8a2d\u5b9a\u6191\u8b49\u5132\u5b58\u7684\u4f4d\u7f6e\u3002\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5c55\u671f-crt-bundle-crt-chained",children:"\u5c55\u671f crt bundle crt chained"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://www.godaddy.com/help/nginx-install-a-certificate-6722?v=1\nhttp://nginx.org/en/docs/http/configuring_https_servers.html#chains\n\n$ cat www.example.com.crt bundle.crt > www.example.com.chained.crt\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(6540);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);