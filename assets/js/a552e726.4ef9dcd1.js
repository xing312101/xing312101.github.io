"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[9440],{6114:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var l=i(4848),d=i(8453);const r={},s="Command Skill",t={id:"technique/linux/command_skill",title:"Command Skill",description:"pushed popd",source:"@site/docs/technique/linux/command_skill.md",sourceDirName:"technique/linux",slug:"/technique/linux/command_skill",permalink:"/docs/technique/linux/command_skill",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"Add deploy user and new disk",permalink:"/docs/technique/linux/add_deploy_user_and_new_disk"},next:{title:"CPU",permalink:"/docs/technique/linux/cpu"}},c={},o=[{value:"pushed popd",id:"pushed-popd",level:2},{value:"rsync",id:"rsync",level:2},{value:"\u6a94\u540d\u52a0\u6642\u9593",id:"\u6a94\u540d\u52a0\u6642\u9593",level:2},{value:"awk and xargs",id:"awk-and-xargs",level:2},{value:"grep \u6b63\u5247",id:"grep-\u6b63\u5247",level:2},{value:"curl",id:"curl",level:2},{value:"date with timezone",id:"date-with-timezone",level:2},{value:"sudo without password",id:"sudo-without-password",level:2},{value:"resize partition",id:"resize-partition",level:2},{value:"killall",id:"killall",level:2},{value:"scp multiple file",id:"scp-multiple-file",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"command-skill",children:"Command Skill"}),"\n",(0,l.jsx)(n.h2,{id:"pushed-popd",children:"pushed popd"}),"\n",(0,l.jsx)(n.p,{children:"\u5207\u63dbdir"}),"\n",(0,l.jsx)(n.h2,{id:"rsync",children:"rsync"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"rsync -av --delete /cygdrive/d/from_dir/ /cygdrive/d/to_dir/ --exclude=.svn --exclude=tmp --exclude=log\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6a94\u540d\u52a0\u6642\u9593",children:"\u6a94\u540d\u52a0\u6642\u9593"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"myfile_`date '+%F_%T'`.txt\n"})}),"\n",(0,l.jsx)(n.h2,{id:"awk-and-xargs",children:"awk and xargs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"ps -ef | grep '/usr/bin/ssh' | awk '{print $2}' | xargs kill -9;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"grep-\u6b63\u5247",children:"grep \u6b63\u5247"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'\u6b63\u5247\ngrep "^\\[2015\\/11\\/07" development.log > tmp.log\n'})}),"\n",(0,l.jsx)(n.h2,{id:"curl",children:"curl"}),"\n",(0,l.jsx)(n.h2,{id:"date-with-timezone",children:"date with timezone"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"TZ=America/New_York date\n"})}),"\n",(0,l.jsx)(n.h2,{id:"sudo-without-password",children:"sudo without password"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"sudo echo 'Xing312101 ALL=(ALL) NOPASSWD:ALL' > /etc/sudoers.d/90-cloud-init-users\n"})}),"\n",(0,l.jsx)(n.h2,{id:"resize-partition",children:"resize partition"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"resize /block_name\nfuser -k /block_name\numount /block_name\nresize2fs -f /dev/storage_block_name\nmount /block_name\nmount -o remount,rw /block_name\n"})}),"\n",(0,l.jsx)(n.h2,{id:"killall",children:"killall"}),"\n",(0,l.jsx)(n.h2,{id:"scp-multiple-file",children:"scp multiple file"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'scp -T user@hostname:"one.filePath two.filePath" copyToPath\n'})})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>t});var l=i(6540);const d={},r=l.createContext(d);function s(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);