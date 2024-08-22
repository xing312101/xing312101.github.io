"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[7868],{7032:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var t=r(4848),o=r(8453);const c={},l="url encode",s={id:"technique/ruby_on_rails/rails_url_encode",title:"url encode",description:"",source:"@site/docs/technique/ruby_on_rails/rails_url_encode.md",sourceDirName:"technique/ruby_on_rails",slug:"/technique/ruby_on_rails/rails_url_encode",permalink:"/docs/technique/ruby_on_rails/rails_url_encode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"Rails odbc",permalink:"/docs/technique/ruby_on_rails/rails_odbc"},next:{title:"ransack",permalink:"/docs/technique/ruby_on_rails/ransack"}},i={},u=[];function a(e){const n={code:"code",h1:"h1",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"url-encode",children:"url encode"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'require \'uri\'\n\nURI.encode("Hello there world")\n#=> "Hello%20there%20world"\nURI.encode("hello there: world, how are you")\n#=> "hello%20there:%20world,%20how%20are%20you"\n\nURI.decode("Hello%20there%20world")\n#=> "Hello there world"\n\nURI.escape(s_target_url)\nCGI::escape(s_target_url)\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var t=r(6540);const o={},c=t.createContext(o);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);