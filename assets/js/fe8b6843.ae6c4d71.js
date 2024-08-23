"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[5091],{3805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var i=n(4848),o=n(8453);const d={},r="PHP",c={id:"technique/php/README",title:"PHP",description:"\u5224\u65b7\u4e2d\u6587 two byte word",source:"@site/docs/technique/php/README.md",sourceDirName:"technique/php",slug:"/technique/php/",permalink:"/docs/technique/php/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"Query Index",permalink:"/docs/technique/oracle/query-index"},next:{title:"Power BI",permalink:"/docs/technique/power_bi/"}},s={},a=[{value:"\u5224\u65b7\u4e2d\u6587 two byte word",id:"\u5224\u65b7\u4e2d\u6587-two-byte-word",level:2},{value:"Time calculate",id:"time-calculate",level:2},{value:"Time functions",id:"time-functions",level:2},{value:"diff time",id:"diff-time",level:3}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"php",children:"PHP"}),"\n",(0,i.jsx)(t.h2,{id:"\u5224\u65b7\u4e2d\u6587-two-byte-word",children:"\u5224\u65b7\u4e2d\u6587 two byte word"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"if (mb_strlen($string, mb_detect_encoding($string)) == strlen($string))\n"})}),"\n",(0,i.jsx)(t.h2,{id:"time-calculate",children:"Time calculate"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$base = strtotime('11:30:29');\necho date('H:i:s', strtotime('+30 min', $base));\n"})}),"\n",(0,i.jsx)(t.h2,{id:"time-functions",children:"Time functions"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'<?php\n$today = \'2013-04-19\';\n//\u5e74\necho date("Y-m-d", strtotime($today."+3 year"));\n//\u6708\necho date("Y-m-d", strtotime($today."-1 month"));\n//\u9031\necho date("Y-m-d", strtotime($today."+10 week"));\n//\u65e5\necho date("Y-m-d", strtotime($today."+10 day"));\n//\u6642\necho date("Y-m-d", strtotime($today."+2 hour"));\n//\u5206\necho date("Y-m-d", strtotime($today."+20 minute"));\n//\u79d2\necho date("Y-m-d", strtotime($today."+5 seconds"));\n?>\n\n//\u52a01\u59295\u79d2\necho date("Y-m-d", strtotime($today."+1 day 5 seconds"));\n//\u52a01\u9031\u6e1b2\u5929\necho date("Y-m-d", strtotime($today."+1 week -2 day"));\n'})}),"\n",(0,i.jsx)(t.h3,{id:"diff-time",children:"diff time"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"date_default_timezone_set('Asia/Tokyo'); // you are required to set a timezone\n$date1 = new DateTime('2009-08-12');\n$date2 = new DateTime('2003-04-14');\n$diff = $date1->diff($date2);\necho (($diff->format('%y') * 12) + $diff->format('%m')) . \" full months difference\";\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(6540);const o={},d=i.createContext(o);function r(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);