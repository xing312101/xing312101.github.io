"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[7437],{902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=t(4848),i=t(8453);const c={},s="Camera",a={id:"technique/flutter/camera",title:"Camera",description:"https://pub.dev/packages/camera",source:"@site/docs/technique/flutter/camera.md",sourceDirName:"technique/flutter",slug:"/technique/flutter/camera",permalink:"/docs/technique/flutter/camera",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"barcode scanner",permalink:"/docs/technique/flutter/barcode_scanner"},next:{title:"connectivity",permalink:"/docs/technique/flutter/connectivity"}},o={},l=[{value:"ISO",id:"iso",level:2},{value:"Privacy",id:"privacy",level:3},{value:"ios/Runner/Info.plist",id:"iosrunnerinfoplist",level:4},{value:"flutter",id:"flutter",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"camera",children:"Camera"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://pub.dev/packages/camera",children:"https://pub.dev/packages/camera"}),"\n",(0,r.jsx)(n.a,{href:"https://flutter.dev/docs/cookbook/plugins/picture-using-camera",children:"https://flutter.dev/docs/cookbook/plugins/picture-using-camera"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"camera: ^0.9.4+2\n"})}),"\n",(0,r.jsx)(n.h2,{id:"iso",children:"ISO"}),"\n",(0,r.jsx)(n.h3,{id:"privacy",children:"Privacy"}),"\n",(0,r.jsx)(n.p,{children:"Privacy - Camera Usage Description"}),"\n",(0,r.jsx)(n.p,{children:"Privacy - Microphone Usage Description"}),"\n",(0,r.jsx)(n.h4,{id:"iosrunnerinfoplist",children:"ios/Runner/Info.plist"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"<key>NSCameraUsageDescription</key>\n<string>Can I use the camera please?</string>\n<key>NSMicrophoneUsageDescription</key>\n<string>Can I use the mic please?</string>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"flutter",children:"flutter"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"## before runApp\ntry {\n    WidgetsFlutterBinding.ensureInitialized();\n    cameras = await availableCameras();\n} on CameraException catch (e) {\n    logError(e.code, e.description);\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const i={},c=r.createContext(i);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);