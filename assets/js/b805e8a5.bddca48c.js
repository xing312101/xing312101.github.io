"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[97],{161:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var i=e(4848),r=e(8453);const c={},s="Init Script",o={id:"technique/linux/init_script",title:"Init Script",description:"create file",source:"@site/docs/technique/linux/init_script.md",sourceDirName:"technique/linux",slug:"/technique/linux/init_script",permalink:"/docs/technique/linux/init_script",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"image-magick",permalink:"/docs/technique/linux/image-magick"},next:{title:"input device",permalink:"/docs/technique/linux/input_device"}},a={},d=[{value:"create file",id:"create-file",level:2},{value:"update rc",id:"update-rc",level:2},{value:"usage",id:"usage",level:2}];function u(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"init-script",children:"Init Script"}),"\n",(0,i.jsx)(t.h2,{id:"create-file",children:"create file"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$ sudo vi /etc/init.d/appname\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'*\n** sample content ***\n#!/bin/sh\n\n\n### BEGIN INIT INFO\n\n# Provides: unicorn\n# Required-Start: $all\n# Required-Stop: $all\n# Default-Start: 2 3 4 5\n# Default-Stop: 0 1 6\n# Short-Description: starts the unicorn app server\n# Description: starts unicorn using start-stop-daemon\n\n### END INIT INFO\n\nset -e\n\nUSAGE="Usage: $0 <start|stop|restart|upgrade|rotate|force-stop>"\n\n# app settings\n\nUSER="deploy"\nAPP_NAME="appname"\nAPP_ROOT="/home/$USER/$APP_NAME"\nENV="production"\n\n\n\n# environment settings\nPATH="/home/$USER/.rbenv/shims:/home/$USER/.rbenv/bin:$PATH"\nCMD="cd $APP_ROOT && bundle exec unicorn -c config/unicorn.rb -E $ENV -D"\nPID="$APP_ROOT/shared/pids/unicorn.pid"\nOLD_PID="$PID.oldbin"\n\n# make sure the app exists\ncd $APP_ROOT || exit 1\n\nsig () {\n\ttest -s "$PID" && kill -$1 `cat $PID`\n}\n\noldsig () {\n\ttest -s $OLD_PID && kill -$1 `cat $OLD_PID`\n}\n\ncase $1 in\n\tstart)\n\t\tsig 0 && echo >&2 "Already running" && exit 0\n\t\techo "Starting $APP_NAME"\n\t\tsu - $USER -c "$CMD"\n\t\t;;\n\n\tstop)\n\t\techo "Stopping $APP_NAME"\n\t\tsig QUIT && exit 0\n\t\techo >&2 "Not running"\n\t\t;;\n\n\tforce-stop)\n\t\techo "Force stopping $APP_NAME"\n\t\tsig TERM && exit 0\n\t\techo >&2 "Not running"\n\t\t;;\n\n\trestart|reload|upgrade)\n\t\tsig USR2 && echo "reloaded $APP_NAME" && exit 0\n\t\techo >&2 "Couldn\'t reload, starting \'$CMD\' instead"\n\t\t$CMD\n\t\t;;\n\n\trotate)\n\t\tsig USR1 && echo rotated logs OK && exit 0\n\t\techo >&2 "Couldn\'t rotate logs" && exit 1\n\t\t;;\n\n\t*)\n\n\techo >&2 $USAGE\n\texit 1\n\t;;\n\nesac\n'})}),"\n",(0,i.jsx)(t.h2,{id:"update-rc",children:"update rc"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$ sudo chmod 755 /etc/init.d/appname\n$ sudo update-rc.d appname defaults\n"})}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"sudo service appname start\n"})})]})}function l(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>s,x:()=>o});var i=e(6540);const r={},c=i.createContext(r);function s(n){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(c.Provider,{value:t},n.children)}}}]);