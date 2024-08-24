"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[9257],{6930:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var t=s(4848),r=s(8453);const d={},a="backup data",l={id:"technique/mysql/backup_data",title:"backup data",description:"mysqldump",source:"@site/docs/technique/mysql/backup_data.md",sourceDirName:"technique/mysql",slug:"/technique/mysql/backup_data",permalink:"/docs/technique/mysql/backup_data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"MySQL",permalink:"/docs/technique/mysql/"},next:{title:"Node.Js",permalink:"/docs/technique/nodejs/"}},o={},c=[{value:"mysqldump",id:"mysqldump",level:2},{value:"import",id:"import",level:2},{value:"crontab backup",id:"crontab-backup",level:2},{value:"mysqldump parameters",id:"mysqldump-parameters",level:2},{value:"Export CSV",id:"export-csv",level:2},{value:"using seq",id:"using-seq",level:3},{value:"using sql",id:"using-sql",level:3}];function i(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"backup-data",children:"backup data"}),"\n",(0,t.jsx)(e.h2,{id:"mysqldump",children:"mysqldump"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysqldump -u root -p'PASSWORD' DataName > /backup/backup.sql\n"})}),"\n",(0,t.jsx)(e.h2,{id:"import",children:"import"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql -u root -p'PASSWORD' DataName < /backup/backup.sql\n"})}),"\n",(0,t.jsx)(e.h2,{id:"crontab-backup",children:"crontab backup"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'0 0 * * * /usr/bin/mysqldump -uUser -pPawor -hHost db | gzip -9 -c > /home/ubuntu/backup/db_`date "+\\%Y\\%m\\%d_\\%H\\%M\\%S"`.sql.gz\n'})}),"\n",(0,t.jsx)(e.h2,{id:"mysqldump-parameters",children:"mysqldump parameters"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'mysqldump\u652f\u63f4\u4e0b\u5217\u9078\u9805\uff1a\n\n--add-locks\n\u5728\u6bcf\u500b\u8868\u50be\u5012\u4e4b\u524d\u589e\u52a0LOCK TABLES\u4e26\u4e14\u4e4b\u5f8cUNLOCK TABLE\u3002(\u70ba\u4e86\u4f7f\u5f97\u66f4\u5feb\u5730\u63d2\u5165\u5230MySQL)\u3002\n\n--add-drop-table\n\u5728\u6bcf\u500bcreate\u8a9e\u53e5\u4e4b\u524d\u589e\u52a0\u4e00\u500bdrop table\u3002\n\n--allow-keywords\n\u5141\u8a31\u5275\u5efa\u662f\u95dc\u9375\u5b57\u7684\u5217\u540d\u5b57\u3002\u9019\u7531\u8868\u540d\u9996\u78bc\u65bc\u6bcf\u500b\u5217\u540d\u505a\u5230\u3002\n\n-c, --complete-insert\n\u4f7f\u7528\u5b8c\u6574\u7684insert\u8a9e\u53e5(\u7528\u5217\u540d\u5b57)\u3002\n\n-C, --compress\n\u5982\u679c\u5ba2\u6236\u548c\u4f3a\u670d\u5668\u5747\u652f\u63f4\u58d3\u7e2e\uff0c\u58d3\u7e2e\u5169\u8005\u9593\u6240\u6709\u7684\u8cc7\u8a0a\u3002\n\n--delayed\n\u7528INSERT DELAYED\u547d\u4ee4\u63d2\u5165\u884c\u3002\n\n-e, --extended-insert\n\u4f7f\u7528\u5168\u65b0\u591a\u884cINSERT\u8a9e\u6cd5\u3002\uff08\u7d66\u51fa\u66f4\u7dca\u7e2e\u4e26\u4e14\u66f4\u5feb\u7684\u63d2\u5165\u8a9e\u53e5\uff09\n\n-#, --debug[=option_string]\n\u8ddf\u8e64\u7a0b\u5f0f\u7684\u4f7f\u7528(\u70ba\u4e86\u8abf\u8a66)\u3002\n\n--help\n\u986f\u793a\u4e00\u689d\u5e6b\u52a9\u6d88\u606f\u4e26\u4e14\u9000\u51fa\u3002\n\n--fields-terminated-by=...\n\n--fields-enclosed-by=...\n\n--fields-optionally-enclosed-by=...\n\n--fields-escaped-by=...\n\n--fields-terminated-by=...\n\n\u9019\u4e9b\u9078\u64c7\u8207-T\u9078\u64c7\u4e00\u8d77\u4f7f\u7528\uff0c\u4e26\u4e14\u6709\u76f8\u61c9\u7684LOAD DATA INFILE\u5b50\u53e5\u76f8\u540c\u7684\u542b\u7fa9\u3002\u898b7.16 LOAD DATA INFILE\u8a9e\u6cd5\u3002\n\n-F, --flush-logs\n\u5728\u958b\u59cb\u50be\u5012\u524d\uff0c\u6d17\u6389\u5728MySQL\u4f3a\u670d\u5668\u4e2d\u7684\u65e5\u8a8c\u6a94\u3002\n\n-f, --force,\n\u5373\u4f7f\u6211\u5011\u5728\u4e00\u500b\u8868\u50be\u5012\u671f\u9593\u5f97\u5230\u4e00\u500bSQL\u932f\u8aa4\uff0c\u7e7c\u7e8c\u3002\n\n-h, --host=..\n\u5f9e\u547d\u540d\u7684\u4e3b\u6a5f\u4e0a\u7684MySQL\u4f3a\u670d\u5668\u50be\u5012\u8cc7\u6599\u3002\u7f3a\u7701\u4e3b\u6a5f\u662flocalhost\u3002\n\n-l, --lock-tables.\n\u70ba\u958b\u59cb\u50be\u5012\u9396\u5b9a\u6240\u6709\u8868\u3002\n\n-t, --no-create-info\n\u4e0d\u5beb\u5165\u8868\u5275\u5efa\u8cc7\u8a0a(CREATE TABLE\u8a9e\u53e5\uff09\n\n-d, --no-data\n\u4e0d\u5beb\u5165\u8868\u7684\u4efb\u4f55\u884c\u8cc7\u8a0a\u3002\u5982\u679c\u4f60\u53ea\u60f3\u5f97\u5230\u4e00\u500b\u8868\u7684\u7d50\u69cb\u7684\u50be\u5012\uff0c\u9019\u662f\u5f88\u6709\u7528\u7684\uff01\n\n--opt\n\u540c--quick --add-drop-table --add-locks --extended-insert --lock-tables\u3002\u61c9\u8a72\u7d66\u4f60\u70ba\u8b80\u5165\u4e00\u500bMySQL\u4f3a\u670d\u5668\u7684\u76e1\u53ef\u80fd\u6700\u5feb\u7684\u50be\u5012\u3002\n\n-pyour_pass, --password[=your_pass]\n\u8207\u4f3a\u670d\u5668\u9023\u63a5\u6642\u4f7f\u7528\u7684\u53e3\u4ee4\u3002\u5982\u679c\u4f60\u4e0d\u6307\u5b9a\u201c=your_pass\u201d\u90e8\u5206\uff0cmysqldump\u9700\u8981\u4f86\u81ea\u7d42\u7aef\u7684\u53e3\u4ee4\u3002\n\n-P port_num, --port=port_num\n\u8207\u4e00\u53f0\u4e3b\u6a5f\u9023\u63a5\u6642\u4f7f\u7528\u7684TCP/IP\u57e0\u865f\u3002\uff08\u9019\u7528\u65bc\u9023\u63a5\u5230localhost\u4ee5\u5916\u7684\u4e3b\u6a5f\uff0c\u56e0\u70ba\u5b83\u4f7f\u7528 Unix\u5957\u63a5\u5b57\u3002\uff09\n\n-q, --quick\n\u4e0d\u7de9\u885d\u67e5\u8a62\uff0c\u76f4\u63a5\u50be\u5012\u81f3stdout\uff1b\u4f7f\u7528mysql_use_result()\u505a\u5b83\u3002\n\n-S /path/to/socket, --socket=/path/to/socket\n\u8207localhost\u9023\u63a5\u6642\uff08\u5b83\u662f\u7f3a\u7701\u4e3b\u6a5f)\u4f7f\u7528\u7684\u5957\u63a5\u5b57\u6a94\u3002\n\n-T, --tab=path-to-some-directory\n\u5c0d\u65bc\u6bcf\u500b\u7d66\u5b9a\u7684\u8868\uff0c\u5275\u5efa\u4e00\u500btable_name.sql\u6a94\uff0c\u5b83\u5305\u542bSQL CREATE \u547d\u4ee4\uff0c\u548c\u4e00\u500btable_name.txt\u6a94\uff0c\u5b83\u5305\u542b\u8cc7\u6599\u3002 \u6ce8\u610f\uff1a\u9019\u53ea\u6709\u5728mysqldump\u904b\u884c\u5728mysqld\u5b88\u8b77\u9032\u7a0b\u904b\u884c\u7684\u540c\u4e00\u53f0\u6a5f\u5668\u4e0a\u7684\u6642\u5019\u624d\u5de5\u4f5c\u3002.txt\u6a94\u7684\u683c\u5f0f\u6839\u64da--fields-xxx\u548c --lines--xxx\u9078\u9805\u4f86\u5b9a\u3002\n\n-u user_name, --user=user_name\n\u8207\u4f3a\u670d\u5668\u9023\u63a5\u6642\uff0cMySQL\u4f7f\u7528\u7684\u7528\u6236\u540d\u3002\u7f3a\u7701\u503c\u662f\u4f60\u7684Unix\u767b\u9304\u540d\u3002\n\n-O var=option, --set-variable var=option\n\u8a2d\u7f6e\u4e00\u500b\u8b8a\u6578\u7684\u503c\u3002\u53ef\u80fd\u7684\u8b8a\u6578\u88ab\u5217\u5728\u4e0b\u9762\u3002\n\n-v, --verbose\n\u5197\u9577\u6a21\u5f0f\u3002\u5217\u5370\u51fa\u7a0b\u5f0f\u6240\u505a\u7684\u66f4\u591a\u7684\u8cc7\u8a0a\u3002\n\n-V, --version\n\u5217\u5370\u7248\u672c\u8cc7\u8a0a\u4e26\u4e14\u9000\u51fa\u3002\n\n-w, --where=\'where-condition\'\n\u53ea\u50be\u5012\u88ab\u9078\u64c7\u4e86\u7684\u8a18\u9304\uff1b\u6ce8\u610f\u5f15\u865f\u662f\u5f37\u5236\u7684\uff01\n"--where=user=\'jimf\'" "-wuserid>1" "-wuserid<1 br="">\n\u6700\u5e38\u898b\u7684mysqldump\u4f7f\u7528\u53ef\u80fd\u88fd\u4f5c\u6574\u500b\u8cc7\u6599\u5eab\u7684\u4e00\u500b\u5099\u4efd\uff1a\n\nmysqldump --opt database > backup-file.sql\n\n\u4f46\u662f\u5b83\u5c0d\u7528\u4f86\u81ea\u65bc\u4e00\u500b\u8cc7\u6599\u5eab\u7684\u8cc7\u8a0a\u5145\u5be6\u53e6\u5916\u4e00\u500bMySQL\u8cc7\u6599\u5eab\u4e5f\u662f\u6709\u7528\u7684\uff1a\n\nmysqldump --opt database | mysql --host=remote-host -C database\n\n\u6307\u5b9adump\u51fa\u4f86\u7684\u8a9e\u7cfb\nmysqldump --default-character-set=big5\n\nor\n\nmysqldump --default-character-set=latin1\n'})}),"\n",(0,t.jsx)(e.h2,{id:"export-csv",children:"Export CSV"}),"\n",(0,t.jsx)(e.h3,{id:"using-seq",children:"using seq"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql -uxxxxx -pwwwwww -h 184.106.139.250 -P 43306 database < sql.sql | sed 's/\\t/,/g' > out.csv\n"})}),"\n",(0,t.jsx)(e.h3,{id:"using-sql",children:"using sql"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"SELECT order_id,product_name,qty\nFROM orders\nINTO OUTFILE '/tmp/orders.csv'\nFIELDS TERMINATED BY ','\nENCLOSED BY '\"'\nLINES TERMINATED BY '\\n';\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>l});var t=s(6540);const r={},d=t.createContext(r);function a(n){const e=t.useContext(d);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);