"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[4928],{30:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var l=t(4848),i=t(8453);const a={},r="intl",o={id:"technique/flutter/intl",title:"intl",description:"https://pub.dev/packages/intl",source:"@site/docs/technique/flutter/intl.md",sourceDirName:"technique/flutter",slug:"/technique/flutter/intl",permalink:"/docs/technique/flutter/intl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"Input",permalink:"/docs/technique/flutter/input"},next:{title:"Issues",permalink:"/docs/technique/flutter/issues"}},s={},c=[{value:"DateTime Format",id:"datetime-format",level:2},{value:"pubspec.yaml",id:"pubspecyaml",level:2},{value:"l10n.yaml",id:"l10nyaml",level:2},{value:"FLUTTER_PROJECT/lib/l10n/app_en.arb",id:"flutter_projectlibl10napp_enarb",level:2},{value:"file of MaterialApp",id:"file-of-materialapp",level:2},{value:"Android Studio",id:"android-studio",level:2},{value:"Flutter Intl",id:"flutter-intl",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"intl",children:"intl"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://pub.dev/packages/intl",children:"https://pub.dev/packages/intl"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"datetime-format",children:"DateTime Format"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"import 'package:intl/intl.dart';\n\nDateFormat('yyyy/MM/dd HH:MM').format(DateTime.now());\n"})}),"\n",(0,l.jsx)(n.h1,{id:"i18n",children:"i18n"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://flutter.dev/docs/development/accessibility-and-localization/internationalization",children:"https://flutter.dev/docs/development/accessibility-and-localization/internationalization"})}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://pub.dev/packages/intl_utils",children:"https://pub.dev/packages/intl_utils"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"pubspecyaml",children:"pubspec.yaml"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"dependencies:\n  flutter:\n    sdk: flutter\n  flutter_localizations:\n    sdk: flutter\n  intl: ^0.17.0\n\nflutter:\n  generate: true\n"})}),"\n",(0,l.jsx)(n.h2,{id:"l10nyaml",children:"l10n.yaml"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"arb-dir: lib/l10n\ntemplate-arb-file: app_en.arb\noutput-localization-file: app_localizations.dart\n"})}),"\n",(0,l.jsx)(n.h2,{id:"flutter_projectlibl10napp_enarb",children:"FLUTTER_PROJECT/lib/l10n/app_en.arb"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n    "hello": "world",\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"file-of-materialapp",children:"file of MaterialApp"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"import 'package:flutter_localizations/flutter_localizations.dart';\n\nconst MaterialApp(\n  title: '...',\n  localizationsDelegates: [\n    S.delegate,\n    GlobalMaterialLocalizations.delegate,\n    GlobalWidgetsLocalizations.delegate,\n    GlobalCupertinoLocalizations.delegate,\n  ],\n  supportedLocales: [\n    Locale('en', ''), // English, no country code\n    Locale('es', ''), // Spanish, no country code\n  ],\n  // supportedLocales: S.delegate.supportedLocales,  // Or only this line\n  home: ...,\n);\n\n"})}),"\n",(0,l.jsx)(n.h2,{id:"android-studio",children:"Android Studio"}),"\n",(0,l.jsx)(n.h3,{id:"flutter-intl",children:"Flutter Intl"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"#### pubspec.yaml\n\nflutter_intl:\n  enabled: true\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var l=t(6540);const i={},a=l.createContext(i);function r(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);