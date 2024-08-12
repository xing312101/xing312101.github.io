"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[8117],{1753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(4848),s=n(8453);const o={},i="Nginx",a={id:"technique/web_server/nginx",title:"Nginx",description:"https ssl",source:"@site/docs/technique/web_server/nginx.md",sourceDirName:"technique/web_server",slug:"/technique/web_server/nginx",permalink:"/docs/technique/web_server/nginx",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"let's Encrypt",permalink:"/docs/technique/web_server/lets_encrypt"},next:{title:"SSL",permalink:"/docs/technique/web_server/ssl"}},c={},d=[{value:"https ssl",id:"https-ssl",level:2},{value:"proxy",id:"proxy",level:2},{value:"sockjs-node proxy",id:"sockjs-node-proxy",level:2},{value:"\u53cd\u5411\u4ee3\u7406",id:"\u53cd\u5411\u4ee3\u7406",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"nginx",children:"Nginx"}),"\n",(0,r.jsx)(t.h2,{id:"https-ssl",children:"https ssl"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"http://nginx.org/en/docs/http/configuring_https_servers.html#chains\n"})}),"\n",(0,r.jsx)(t.h2,{id:"proxy",children:"proxy"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'upstream streamName {\n# server unix:RailsPath/tmp/sockets/unicorn.sock;\n\nserver ip:port; // 127.0.0.1:8080\n}\n\n\nserver {\n\tlisten 80;\n\tserver_name serverDomain; # www.google.com www.yahoo.com.tw \u7528\u7a7a\u683c\u5340\u9694\n\trewrite ^(.*) https://$host$1 permanent; # \u7528rewrite\u7684\u65b9\u5f0f\u8f49\u6210https\n}\n\n\nserver {\n\tlisten 443;\n\tserver_name serverDomain;\n\n\tindex index.html;\n\tssl on;\n\n\terror_log /var/log/nginx/serverDomain-error.log;\n\taccess_log /var/log/nginx/serverDomain-access.log;\n\troot RailsPath/public;\n\tssl_protocols TLSv1.2 TLSv1.1 TLSv1;\n\tssl_certificate /etc/nginx/ssl/serverDomain/gd_bundle.crt; #\u8def\u5f91\u96a8\u610f\n\tssl_certificate_key /etc/nginx/ssl/serverDomain/ssl.key; #\u8def\u5f91\u96a8\u610f\n\n\ttry_files $uri/index.html $uri.html $uri;\n\n\tlocation / {\n\t\tproxy_set_header X-Real-IP $remote_addr;\n\t\tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\t\tproxy_set_header X-FORWARDED_PROTO https;\n\t\tproxy_set_header Host $http_host;\n\t\tproxy_redirect off;\n\t\tproxy_read_timeout 180;\n\n\t\tif ($request_uri ~* "\\.(ico|css|js|gif|jpe?g|png)$") {\n\t\t\texpires max;\n\t\t\tbreak;\n\t\t}\n\t\tif ($request_uri ~* "\\.(ico|css|js|gif|jpe?g|png)\\?[0-9]+$") {\n\t\t\texpires max;\n\t\tbreak;\n\t\t}\n\t\tif (-f $request_filename) {\n\t\t\tbreak;\n\t\t}\n\t\tif (-f $request_filename/index.html) {\n\t\t\trewrite (.*) $1/index.html break;\n\t\t}\n\t\tif (-f $request_filename.html) {\n\t\t\trewrite (.*) $1.html break;\n\t\t}\n\n\t\tproxy_pass http://streamName;\n\t}\n\n\terror_page 500 502 503 504 /50x.html;\n\n\tlocation = /50x.html {\n\t\troot html;\n\t}\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"sockjs-node-proxy",children:"sockjs-node proxy"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["reference: ",(0,r.jsx)(t.a,{href:"https://stackoverflow.com/questions/40516288/webpack-dev-server-with-nginx-proxy-pass",children:"https://stackoverflow.com/questions/40516288/webpack-dev-server-with-nginx-proxy-pass"})]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'location /sockjs-node {\n    proxy_set_header X-Real-IP  $remote_addr;\n    proxy_set_header X-Forwarded-For $remote_addr;\n    proxy_set_header Host $host;\n\n    proxy_pass http://node:8080;\n\n    proxy_redirect off;\n\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection "upgrade";\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u53cd\u5411\u4ee3\u7406",children:"\u53cd\u5411\u4ee3\u7406"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"# \u53cd\u5411\u4ee3\u7406\u5230\u540c\u4e00\u53f0\u4e3b\u6a5f\u7684 3000 Port\n# TODO: $host$request_uri\nproxy_pass http://localhost:3000;\n\n\n# \u628a IP\u3001Protocol \u7b49 header \u90fd\u4e00\u8d77\u9001\u7d66\u53cd\u5411\u4ee3\u7406\u7684 server\nproxy_set_header X-Real-IP $remote_addr;\nproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\nproxy_set_header X-Forwarded-Proto $http_x_forwarded_proto;\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(6540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);