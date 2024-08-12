"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[5958],{847:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=t(4848),a=t(8453);const l={},r="OfflineApp",s={id:"technique/flutter/offlineapp",title:"OfflineApp",description:"plugin",source:"@site/docs/technique/flutter/offlineapp.md",sourceDirName:"technique/flutter",slug:"/technique/flutter/offlineapp",permalink:"/docs/technique/flutter/offlineapp",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"layout",permalink:"/docs/technique/flutter/layout"},next:{title:"Package",permalink:"/docs/technique/flutter/package"}},c={},p=[{value:"plugin",id:"plugin",level:2},{value:"SQLite",id:"sqlite",level:2},{value:"\u81ea\u5df1\u5beb\u7684\u57fa\u672chelper",id:"\u81ea\u5df1\u5beb\u7684\u57fa\u672chelper",level:3},{value:"NoSQL",id:"nosql",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"offlineapp",children:"OfflineApp"}),"\n",(0,i.jsx)(n.h2,{id:"plugin",children:"plugin"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sqflite: https://pub.dev/packages/sqflite\n\npath_provider: https://pub.dev/packages/path_provider\n\npath: https://pub.dev/packages/path\n"})}),"\n",(0,i.jsx)(n.h2,{id:"sqlite",children:"SQLite"}),"\n",(0,i.jsx)(n.h3,{id:"\u81ea\u5df1\u5beb\u7684\u57fa\u672chelper",children:"\u81ea\u5df1\u5beb\u7684\u57fa\u672chelper"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"import 'package:path/path.dart';\nimport 'package:sqflite/sqflite.dart';\n\nclass DbHelper {\n  late Database _db;\n\n  Database get db => this._db;\n\n  static DbHelper _instance = DbHelper._internal();\n  factory DbHelper() {\n    return _instance;\n  }\n  DbHelper._internal();\n\n  open() async {\n    String databasesPath = await getDatabasesPath();\n    String path = join(databasesPath, 'inspection.db');\n\n    _db = await openDatabase(path);\n  }\n\n  // migrate_db() {\n  // TODO: migrate db by config file\n  // }\n\n  void checkDbSchema() {}\n}\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"nosql",children:"NoSQL"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://pub.dev/packages/couchbase_lite",children:"https://pub.dev/packages/couchbase_lite"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"todo\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(6540);const a={},l=i.createContext(a);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);