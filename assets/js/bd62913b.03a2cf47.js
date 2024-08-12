"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[6852],{2641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=t(4848),o=t(8453);const c={},s="Database SQL",i={id:"technique/database_sql/README",title:"Database SQL",description:"sql select \u4e32\u63a5 concat",source:"@site/docs/technique/database_sql/README.md",sourceDirName:"technique/database_sql",slug:"/technique/database_sql/",permalink:"/docs/technique/database_sql/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"CSS",permalink:"/docs/technique/css/"},next:{title:"development tools",permalink:"/docs/technique/development_tools/"}},d={},l=[{value:"sql select \u4e32\u63a5 concat",id:"sql-select-\u4e32\u63a5-concat",level:2},{value:"group rownumber",id:"group-rownumber",level:2},{value:"group concat in db2",id:"group-concat-in-db2",level:2},{value:"Next id value in db2",id:"next-id-value-in-db2",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"database-sql",children:"Database SQL"}),"\n",(0,r.jsx)(n.h2,{id:"sql-select-\u4e32\u63a5-concat",children:"sql select \u4e32\u63a5 concat"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"MySQL: CONCAT( )\nOracle: CONCAT( ), ||\nSQL Server: +\n"})}),"\n",(0,r.jsx)(n.h2,{id:"group-rownumber",children:"group rownumber"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"WITH\nUSER_SCOPE AS (\n\tSELECT ROW_NUMBER() OVER (PARTITION BY NAME ORDER BY AGE DESC) AS RANK_NO, *\n\tFROM USERS\n),\nYANGEST_USERS AS (\n\tSELECT * FROM USER_SCOPE WHERE RANK_NO = 1\n),\n"})}),"\n",(0,r.jsx)(n.h2,{id:"group-concat-in-db2",children:"group concat in db2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SELECT\n\t\tITEM.ITEMNUM,\n\t\tLISTAGG(DISTINCT BAND_ITEMS.VENDOR,',')  WITHIN GROUP(ORDER BY VENDOR ASC)  AS BRAND_NAMES\n\tFROM\n\t\tITEM\n\tINNER JOIN BAND_ITEMS ON\n\t\tITEM.ITEMNUM = BAND_ITEMS.ITEMNUM\n\tGROUP BY\n\t\tITEM.ITEMNUM;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"next-id-value-in-db2",children:"Next id value in db2"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.ibm.com/docs/en/db2/11.5?topic=expressions-sequence-reference",children:"https://www.ibm.com/docs/en/db2/11.5?topic=expressions-sequence-reference"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"QQ: does not work.\n   INSERT INTO order(orderno, custno)\n     VALUES (NEXT VALUE FOR order_seq, 123456);\nor\n   UPDATE order\n     SET orderno = NEXT VALUE FOR order_seq\n     WHERE custno = 123456;\nor\n   VALUES NEXT VALUE FOR order_seq INTO :hv_seq;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"-- it can work\nINSERT INTO table(TABLE_ID, value)\n     VALUES (TABLE_IDSEQ.nextval, 'HelloWorld');\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const o={},c=r.createContext(o);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);