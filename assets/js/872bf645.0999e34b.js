"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[3113],{6070:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>r});var s=i(4848),o=i(8453);const t={},a="Basic",d={id:"technique/vuejs/basic",title:"Basic",description:"vue.js version 2",source:"@site/docs/technique/vuejs/basic.md",sourceDirName:"technique/vuejs",slug:"/technique/vuejs/basic",permalink:"/docs/technique/vuejs/basic",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"Vue.js",permalink:"/docs/technique/vuejs/"},next:{title:"weather data system",permalink:"/docs/technique/weather_data_system/"}},l={},r=[{value:"Declarative Rendering",id:"declarative-rendering",level:2},{value:"browser Console Update Value",id:"browser-console-update-value",level:2},{value:"Conditionals and Loops",id:"conditionals-and-loops",level:2},{value:"Handling User Input",id:"handling-user-input",level:2},{value:"Composing with Components",id:"composing-with-components",level:2}];function c(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"basic",children:"Basic"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"vue.js version 2"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"declarative-rendering",children:"Declarative Rendering"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'# html:\n\n<div id="app_declarative_rendering">\n  {{ message }}\n  <span v-bind:title="span_title">\n    edit span title\n  </span>\n</div>\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"# js:\n\nvar app_declarative_rendering = new Vue({\n  el: '#app_declarative_rendering',\n  data: {\n    message: 'Hello Vue!',\n    span_title: 'Hello Xing.'\n  }\n});\n"})}),"\n",(0,s.jsx)(e.h2,{id:"browser-console-update-value",children:"browser Console Update Value"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"app_declarative_rendering.span_title = 'Hello Xing312101';\n"})}),"\n",(0,s.jsx)(e.h2,{id:"conditionals-and-loops",children:"Conditionals and Loops"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'# html:\n\n<div id="app_conditionals_and_loops">\n  <span v-if="seen">Do you really see the man which named xing312101 ?</span>\n  <div>\n    <ol>\n      <li v-for="person in people">\n        {{ person.say }}\n      </li>\n    </ol>\n  </div>\n</div>\n'})}),"\n",(0,s.jsx)(e.h1,{id:"js",children:"js:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"var app_conditionals_and_loops = new Vue({\n  el: '#app_conditionals_and_loops',\n  data: {\n    seen: true,\n    people: [\n      {say: 'No, I didnt'},\n      {say: 'No, I didnt'},\n      {say: 'No, I didnt'},\n      {say: 'No, I didnt'},\n      {say: 'No, I didnt'},\n      {say: 'No, I didnt'},\n      {say: 'Uh, I did..........'}\n    ]\n  }\n});\n"})}),"\n",(0,s.jsx)(e.h2,{id:"handling-user-input",children:"Handling User Input"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'# html:\n\n<div id="app_handle_user_input">\n  <p>{{ message }}</p>\n  <button v-on:click="reverseMessage">See ?</button>\n  <p>{{ answer }}</p>\n  <input v-model="answer">\n</div>\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"js:\n\nvar app_handle_user_input = new Vue({\n  el: '#app_handle_user_input',\n  data: {\n    message: 'You are not be here!!!!!!',\n    answer: 'I am human'\n  },\n  methods: {\n    reverseMessage: function () {\n      app_conditionals_and_loops.seen = app_conditionals_and_loops.seen ? false : true;\n      this.message = this.message.split('').reverse().join('');\n      this.answer = 'I am ghost';\n    }\n  }\n});\n"})}),"\n",(0,s.jsx)(e.h2,{id:"composing-with-components",children:"Composing with Components"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'# html:\n\n<div id="app_composing_with_componets">\n  <div>\n      <ol>\n        <which-you-go\n          v-for="location in locations"\n          v-bind:place="location"\n          v-bind:key="location.id"\n        ></which-you-go>\n      </ol>\n  </div>\n</div>\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"# js:\n\nVue.component('which-you-go', {\n  props: ['place'],\n  template: '<li>{{place.name}}</li>'\n});\n\nvar app_composing_with_components = new Vue({\n  el: '#app_composing_with_componets',\n  data:{\n    locations: [\n      {name: 'heaven'},\n      {name: 'hell'}\n    ]\n  }\n});\n"})})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>d});var s=i(6540);const o={},t=s.createContext(o);function a(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);