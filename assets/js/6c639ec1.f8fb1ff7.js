"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[5349],{7011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(4848),r=n(8453);const i={},s="sqflite",l={id:"technique/flutter/sqflite",title:"sqflite",description:"https://pub.dev/packages/sqflite",source:"@site/docs/technique/flutter/sqflite.md",sourceDirName:"technique/flutter",slug:"/technique/flutter/sqflite",permalink:"/docs/technique/flutter/sqflite",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"Router",permalink:"/docs/technique/flutter/router"},next:{title:"Start Coding",permalink:"/docs/technique/flutter/start_coding"}},c={},d=[{value:"\u81ea\u5efa\u7c21\u55aehelper\u7bc4\u672c",id:"\u81ea\u5efa\u7c21\u55aehelper\u7bc4\u672c",level:4},{value:"sqlite query",id:"sqlite-query",level:2},{value:"query table exist",id:"query-table-exist",level:4},{value:"query create table or drop with exist",id:"query-create-table-or-drop-with-exist",level:4}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"sqflite",children:"sqflite"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://pub.dev/packages/sqflite",children:"https://pub.dev/packages/sqflite"})}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"\u81ea\u5efa\u7c21\u55aehelper\u7bc4\u672c",children:"\u81ea\u5efa\u7c21\u55aehelper\u7bc4\u672c"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"class DbHelper {\n  String dbFileName = 'dbFileName.db';\n\n  Database? _db;\n\n  static DbHelper _instance = DbHelper._internal();\n\n  factory DbHelper() {\n    return _instance;\n  }\n  DbHelper._internal();\n\n  Future<Database> get db async {\n    if (null != _db) {\n      return _db!;\n    }\n\n    String databasesPath = await getDatabasesPath();\n    String path = join(databasesPath, this.dbFileName);\n\n    _db = await openDatabase(path);\n    return _db!;\n  }\n\n  Future<void> delDb() async {\n    String databasesPath = await getDatabasesPath();\n    String path = join(databasesPath, this.dbFileName);\n\n    if (await databaseExists(path)) {\n      await deleteDatabase(path);\n      _db = null;\n    }\n  }\n}\n\n"})}),"\n",(0,a.jsx)(t.h2,{id:"sqlite-query",children:"sqlite query"}),"\n",(0,a.jsx)(t.h4,{id:"query-table-exist",children:"query table exist"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"# SELECT name FROM sqlite_master WHERE type='table' AND name='{table_name}';\n\nawait db.query('sqlite_master', where: 'type = ? AND name = ?', whereArgs: ['table', tableName]);\n\n"})}),"\n",(0,a.jsx)(t.h4,{id:"query-create-table-or-drop-with-exist",children:"query create table or drop with exist"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'# create table if not exists TableName (col1 typ1, ..., colN typN);\nexecute("create table if not exists $tableName (columnName1 VARCHAR(255), columnName2 VARCHAR(255));");\n\n# drop table if exists TableName;\nexecute("drop table if exists $tableName;");\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(6540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);