"use strict";(self.webpackChunkxing_life_3=self.webpackChunkxing_life_3||[]).push([[6188],{9818:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var t=i(4848),l=i(8453);const r={},a="File IO",s={id:"technique/java/file_io",title:"File IO",description:"read",source:"@site/docs/technique/java/file_io.md",sourceDirName:"technique/java",slug:"/technique/java/file_io",permalink:"/docs/technique/java/file_io",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techniqueSidebar",previous:{title:"Eclipse",permalink:"/docs/technique/java/eclipse"},next:{title:"json",permalink:"/docs/technique/java/json"}},c={},o=[{value:"read",id:"read",level:3},{value:"write",id:"write",level:3},{value:"List File",id:"list-file",level:2},{value:"File.list()",id:"filelist",level:3},{value:"FilenameFilter",id:"filenamefilter",level:3},{value:"File.listFiles()",id:"filelistfiles",level:3},{value:"Files.walk()",id:"fileswalk",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"file-io",children:"File IO"}),"\n",(0,t.jsx)(n.h3,{id:"read",children:"read"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'FileReader fr = new FileReader("FilePath/filename.txt"); BufferedReader br = new BufferedReader(fr);\nwhile (br.ready()) { System.out.println(br.readLine()); }\nfr.close();\n'})}),"\n",(0,t.jsx)(n.h3,{id:"write",children:"write"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'FileWriter fw = new FileWriter("filePath/filename.txt"); fw.write("this is test sentence ");\nfw.flush();\nfw.close();\n'})}),"\n",(0,t.jsx)(n.h2,{id:"list-file",children:"List File"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://stackabuse.com/java-list-files-in-a-directory",children:"https://stackabuse.com/java-list-files-in-a-directory"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"filelist",children:"File.list()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'public class Pathnames {\n\n    public static void main(String[] args) {\n        // Creates an array in which we will store the names of files and directories\n        String[] pathnames;\n\n        // Creates a new File instance by converting the given pathname string\n        // into an abstract pathname\n        File f = new File("D:/Programming");\n\n        // Populates the array with names of files and directories\n        pathnames = f.list();\n\n        // For each pathname in the pathnames array\n        for (String pathname : pathnames) {\n            // Print the names of files and directories\n            System.out.println(pathname);\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"filenamefilter",children:"FilenameFilter"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'File f = new File("D:/Programming");\n\n// This filter will only include files ending with .py\nFilenameFilter filter = new FilenameFilter() {\n        @Override\n        public boolean accept(File f, String name) {\n            return name.endsWith(".py");\n        }\n    };\n\n// This is how to apply the filter\npathnames = f.list(filter);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"filelistfiles",children:"File.listFiles()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'public class Pathnames {\n    public static void main(String args[]) {\n\n        // try-catch block to handle exceptions\n        try {\n            File f = new File("D:/Programming");\n\n            FilenameFilter filter = new FilenameFilter() {\n                @Override\n                public boolean accept(File f, String name) {\n                    // We want to find only .c files\n                    return name.endsWith(".c");\n                }\n            };\n\n            // Note that this time we are using a File class as an array,\n            // instead of String\n            File[] files = f.listFiles(filter);\n\n            // Get the names of the files by using the .getName() method\n            for (int i = 0; i < files.length; i++) {\n                System.out.println(files[i].getName());\n            }\n        } catch (Exception e) {\n            System.err.println(e.getMessage());\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"fileswalk",children:"Files.walk()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'public class FilesWalk {\n    public static void main(String[] args) {\n        try (Stream<Path> walk = Files.walk(Paths.get("D:/Programming"))) {\n            // We want to find only regular files\n            List<String> result = walk.filter(Files::isRegularFile)\n                    .map(x -> x.toString()).collect(Collectors.toList());\n\n            result.forEach(System.out::println);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(6540);const l={},r=t.createContext(l);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);