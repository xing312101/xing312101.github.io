"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[9407],{9517:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=e(4848),r=e(8453);const s={},a="Ramdisk",c={id:"technique/mac/ramdisk",title:"Ramdisk",description:"xing.ramdisk.plist",source:"@site/docs/technique/mac/ramdisk.md",sourceDirName:"technique/mac",slug:"/technique/mac/ramdisk",permalink:"/docs/technique/mac/ramdisk",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"Mac",permalink:"/docs/technique/mac/"},next:{title:"Visual Studio Code",permalink:"/docs/technique/mac/vscode"}},d={},o=[{value:"xing.ramdisk.plist",id:"xingramdiskplist",level:2},{value:"script",id:"script",level:2}];function l(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"ramdisk",children:"Ramdisk"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$ cd ~/Library/LaunchAgents\n$ mv xing.ramdisk.plist LaunchAgents\n$ launchctl load xing.ramdisk.plist\n\n"})}),"\n",(0,i.jsx)(t.h2,{id:"xingramdiskplist",children:"xing.ramdisk.plist"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n\t<key>EnvironmentVariables</key>\n\t<dict>\n\t<key>PATH</key>\n\t\t<string>/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin</string>\n\t</dict>\n\t<key>Label</key>\n\t\t<string>xing.ramdisk</string>\n\t<key>ProgramArguments</key>\n\t<array>\n\t\t<string>/bin/zsh</string>\n\t\t<string>/Users/xing/scripts/ramdisk.sh</string>\n\t</array>\n\t<key>RunAtLoad</key>\n\t\t<true/>\n\t<key>StandardErrorPath</key>\n\t\t<string>/tmp/ramdisk.err</string>\n\t<key>StandardOutPath</key>\n\t<string>/tmp/ramdisk.out</string>\n</dict>\n</plist>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"script",children:"script"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'#!/bin/zsh\n\ndName="RamDisk"\ncPath="/Users/$USER/Library/Caches"\n\nfolder=(\nGoogle\nBraveSoftware\nFirefox\n)\n\ndiskutil partitionDisk $(hdiutil attach -nomount ram://16384000) GPT APFS ${dName} 0\n\nfor fName in ${folder}; do\n        rm -rf "${cPath}/${fName}"\n        ln -sf "/Volumes/${dName}/${fName}" "${cPath}/${fName}"\n        mkdir "/Volumes/${dName}/${fName}"\ndone\n\n\n'})})]})}function m(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>a,x:()=>c});var i=e(6540);const r={},s=i.createContext(r);function a(n){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(s.Provider,{value:t},n.children)}}}]);