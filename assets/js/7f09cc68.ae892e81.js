"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[4853],{6706:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>u,metadata:()=>r,toc:()=>d});var i=t(4848),o=t(8453);const u={},s="mount disk",r={id:"technique/linux/mount_disk",title:"mount disk",description:"",source:"@site/docs/technique/linux/mount_disk.md",sourceDirName:"technique/linux",slug:"/technique/linux/mount_disk",permalink:"/docs/technique/linux/mount_disk",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"log rotated",permalink:"/docs/technique/linux/log_rotated"},next:{title:"network",permalink:"/docs/technique/linux/network"}},c={},d=[];function m(n){const e={code:"code",h1:"h1",pre:"pre",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"mount-disk",children:"mount disk"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mkfs.ext4 /dev/xvdXXXXX\nmkdir /diskname\nchown -R ubuntu:ubuntu /diskname\nmount /dev/xvdXXXXX /diskname\nvim /etc/mtab #\u62ff mount \u6307\u4ee4\nvim /etc/fstab #\u958b\u6a5f\u81ea\u52d5mount\uff0c\u5c07\u4e0a\u4e00\u884c\u53d6\u7684\u6307\u4ee4\u653e\u9032\u4f86\n"})})]})}function a(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>r});var i=t(6540);const o={},u=i.createContext(o);function s(n){const e=i.useContext(u);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(u.Provider,{value:e},n.children)}}}]);