"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[7786],{2415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var r=t(4848),o=t(8453);const s={},d="flutter_sound",u={id:"technique/flutter/flutter_sound",title:"flutter_sound",description:"ref//pub.dev/packages/flutter_sound",source:"@site/docs/technique/flutter/flutter_sound.md",sourceDirName:"technique/flutter",slug:"/technique/flutter/flutter_sound",permalink:"/docs/technique/flutter/flutter_sound",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"flutter_slidable",permalink:"/docs/technique/flutter/flutter_slidable"},next:{title:"FlutterFire (Flutter + Firebase)",permalink:"/docs/technique/flutter/flutterfire"}},i={},l=[{value:"Play Audio",id:"play-audio",level:2},{value:"Record Audio",id:"record-audio",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"flutter_sound",children:"flutter_sound"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["ref: ",(0,r.jsx)(n.a,{href:"https://pub.dev/packages/flutter_sound",children:"https://pub.dev/packages/flutter_sound"})]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["ref: ",(0,r.jsx)(n.a,{href:"https://pub.dev/packages/tau_sound",children:"https://pub.dev/packages/tau_sound"})]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["ref: ",(0,r.jsx)(n.a,{href:"https://flutter-sound.canardoux.xyz/guides_codec.html",children:"https://flutter-sound.canardoux.xyz/guides_codec.html"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"play-audio",children:"Play Audio"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\nFlutterSoundPlayer? _soundPlayer = FlutterSoundPlayer();\n\nvoid initState() {\n    _soundPlayer!.openAudioSession().then((value) {\n      setState(() {\n        _playerIsInitialed = true;\n      });\n    });\n}\n\nvoid dispose() {\n    _soundPlayer!.closeAudioSession();\n    _soundPlayer = null;\n}\n\nvoid startPlayer() {\n    _soundPlayer!\n        .startPlayer(\n            fromURI: filePath,\n            whenFinished: () {\n                setState(() {});\n            })\n        .then((value) {\n      setState(() {});\n    });\n}\n\n\nvoid stopPlayer() {\n    _soundPlayer!.stopPlayer().then((value) {\n        setState(() {});\n    });\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"record-audio",children:"Record Audio"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"bool _recorderIsInitialed = false;\nFlutterSoundRecorder? _soundRecorder = FlutterSoundRecorder();\n\nvoid initState() {\n    _openTheRecorder().then((value) {\n        setState(() {});\n    });\n}\n\nFuture<void> _openTheRecorder() async {\n    final status = await Permission.microphone.request();\n    if (status != PermissionStatus.granted) {\n      throw RecordingPermissionException('Microphone permission not granted');\n    }\n\n    await _soundRecorder!.openAudioSession();\n    if (await _soundRecorder!.isEncoderSupported(_codec)) {\n      _recorderIsInitialed = true;\n    }\n}\n\nvoid dispose() {\n    _soundRecorder!.closeAudioSession();\n    _soundRecorder = null;\n}\n\n\nvoid _record() async {\n    _soundRecorder!.startRecorder(\n      toFile: \"hello.mp4\",\n      codec: Codec.aacMP4,\n    ).then((value) {\n      setState(() {});\n    });\n}\n\nvoid _stopRecorder() async {\n    await _soundRecorder!.stopRecorder().then((filePath) {\n      String fileName = basename(filePath);\n    });\n}\n\n\n\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>u});var r=t(6540);const o={},s=r.createContext(o);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);