"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[2557],{525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var l=n(4848),i=n(8453);const r={},o="Input",d={id:"technique/flutter/input",title:"Input",description:"https://api.flutter.dev/flutter/material/DropdownButton-class.html",source:"@site/docs/technique/flutter/input.md",sourceDirName:"technique/flutter",slug:"/technique/flutter/input",permalink:"/docs/technique/flutter/input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"Http api methods",permalink:"/docs/technique/flutter/http_api_methods"},next:{title:"intl",permalink:"/docs/technique/flutter/intl"}},s={},a=[{value:"TextFormField",id:"textformfield",level:2},{value:"multiple line",id:"multiple-line",level:4},{value:"password field",id:"password-field",level:4},{value:"button",id:"button",level:2},{value:"radio buttons",id:"radio-buttons",level:2},{value:"Radio",id:"radio",level:4},{value:"RadioListTile",id:"radiolisttile",level:4},{value:"Checkbox",id:"checkbox",level:2}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"input",children:"Input"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"https://api.flutter.dev/flutter/material/DropdownButton-class.html",children:"https://api.flutter.dev/flutter/material/DropdownButton-class.html"}),"\n",(0,l.jsx)(t.a,{href:"https://pub.dev/packages/smart_select",children:"https://pub.dev/packages/smart_select"})]}),"\n",(0,l.jsx)(t.h2,{id:"textformfield",children:"TextFormField"}),"\n",(0,l.jsx)(t.h4,{id:"multiple-line",children:"multiple line"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"TextField(\n    decoration: InputDecoration(\n      border: new OutlineInputBorder(\n        borderRadius: BorderRadius.circular(6.0)\n      )\n    ),\n    keyboardType: TextInputType.multiline,\n    maxLines: null,\n),\n"})}),"\n",(0,l.jsx)(t.h4,{id:"password-field",children:"password field"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"TextFormField(\n  decoration: InputDecoration(\n    focusedBorder: OutlineInputBorder(\n      borderSide: BorderSide(color: Colors.red, width: 2.0),\n    ),\n    enabledBorder: OutlineInputBorder(\n      borderSide: BorderSide(color: Colors.black, width: 2.0),\n    ),\n    hintText: 'Password',\n  ),\n  obscureText: true,\n  enableSuggestions: false,\n  autocorrect: false,\n)\n"})}),"\n",(0,l.jsx)(t.h2,{id:"button",children:"button"}),"\n",(0,l.jsx)(t.h2,{id:"radio-buttons",children:"radio buttons"}),"\n",(0,l.jsx)(t.h4,{id:"radio",children:"Radio"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"ListTile(\n    title: const Text('Apple'),\n    leading: Radio(\n      value: 1,\n      groupValue: _foodType,\n      onChanged: (value) {\n        setState(() {\n          _foodType = value;\n        });\n      },\n    ),\n),\n"})}),"\n",(0,l.jsx)(t.h4,{id:"radiolisttile",children:"RadioListTile"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:'RadioListTile(\n  value: 1,\n  groupValue: selectedRadioTile,\n  title: Text("Apple"),\n  subtitle: Text("Apple Subtitle"),\n  onChanged: (value) {\n    setState(() {\n      _foodType = value;\n    });\n  },\n  activeColor: Colors.red,\n  secondary: OutlineButton(\n    child: Text("Hello"),\n    onPressed: () {\n      print("Hello");\n    },\n  ),\n  selected: true,\n)\n'})}),"\n",(0,l.jsx)(t.h2,{id:"checkbox",children:"Checkbox"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://api.flutter.dev/flutter/material/Checkbox-class.html",children:"https://api.flutter.dev/flutter/material/Checkbox-class.html"})}),"\n"]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://api.flutter.dev/flutter/material/CheckboxListTile-class.html",children:"https://api.flutter.dev/flutter/material/CheckboxListTile-class.html"})}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"Checkbox(\n    value: widget.values[index].selected,\n    onChanged: (value) {\n      setState(() {\n        widget.values[index].selected = !widget.values[index].selected;\n      });\n    }),\n)\n\n"})})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var l=n(6540);const i={},r=l.createContext(i);function o(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);