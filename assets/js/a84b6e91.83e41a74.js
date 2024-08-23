"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[1091],{6918:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(4848),a=t(8453);const r={},l="tab",c={id:"technique/flutter/tab",title:"tab",description:"DefaultTabController include app scaffold",source:"@site/docs/technique/flutter/tab.md",sourceDirName:"technique/flutter",slug:"/technique/flutter/tab",permalink:"/docs/technique/flutter/tab",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"state builder",permalink:"/docs/technique/flutter/state_builder"},next:{title:"test code",permalink:"/docs/technique/flutter/test_code"}},i={},d=[{value:"DefaultTabController include app scaffold",id:"defaulttabcontroller-include-app-scaffold",level:2},{value:"DefaultTabController in app scaffold body",id:"defaulttabcontroller-in-app-scaffold-body",level:2},{value:"bottom tab",id:"bottom-tab",level:2}];function s(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,a.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"tab",children:"tab"}),"\n",(0,o.jsx)(e.h2,{id:"defaulttabcontroller-include-app-scaffold",children:"DefaultTabController include app scaffold"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"DefaultTabController(\n      length: 2,\n      child: Scaffold(\n        drawer: MainDrawer(),\n        appBar: AppBar(\n          actions: [\n            _actionButtons()\n          ],\n          bottom: TabBar(\n            tabs: [\n              Tab(text: 'tab1'),\n              Tab(text: 'tab2')\n            ],\n          ),\n          title: Center(child: Text('hello world')),\n        ),\n        body: TabBarView(\n          children: [\n            Icon(Icons.directions_car),\n            Icon(Icons.directions_transit),\n          ],\n        )\n      )\n    );\n"})}),"\n",(0,o.jsx)(e.h2,{id:"defaulttabcontroller-in-app-scaffold-body",children:"DefaultTabController in app scaffold body"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"Scaffold(\n        drawer: MainDrawer(),\n        appBar: AppBar(\n          actions: [\n            _actionButtons()\n          ],\n          title: Center(child: Text('title')),\n        ),\n        body: DefaultTabController(\n            length: 2,\n            child: Column(\n              children: [\n                TabBar(\n                  labelColor: Colors.black,\n                  tabs: [\n                    Tab(text: 'tab1'),\n                    Tab(text: 'tab2')\n                  ],\n                ),\n                Expanded(\n                  child: TabBarView(\n                    children: [\n                      CmRecord(),\n                      CmHistory(),\n                    ],\n                  ),\n                )\n              ],\n            )\n        )\n    );\n"})}),"\n",(0,o.jsx)(e.h2,{id:"bottom-tab",children:"bottom tab"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"int _currentIndex = 0;\n  final pages = [\n    Form1(),\n    Form2(),\n  ];\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        backgroundColor: Colors.\n        title:\n        actions: [\n        ]\n      ),\n      body: pages[_currentIndex],\n      bottomNavigationBar: BottomNavigationBar(\n        fixedColor: Colors,\n        selectedLabelStyle: TextStyle(),\n        selectedFontSize: 18,\n        unselectedFontSize: 14,\n        showSelectedLabels: true,\n        showUnselectedLabels: true,\n        iconSize: 0,\n        items: [\n          BottomNavigationBarItem(\n              backgroundColor: Colors.,\n              icon: Icon(Icons.add),\n              label: 'form one'\n          ),\n          BottomNavigationBarItem(\n              backgroundColor: Colors.,\n              icon: Icon(Icons.add),\n              label: 'form 2'\n          ),\n        ],\n        currentIndex: _currentIndex,\n        onTap: _onButtomNavigationBarClick\n      ),\n    );\n\n  }\n"})})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(s,{...n})}):s(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var o=t(6540);const a={},r=o.createContext(a);function l(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);