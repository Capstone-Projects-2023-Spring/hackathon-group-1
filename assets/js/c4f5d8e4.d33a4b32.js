"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[4195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8140:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(7294),a=n(6010),o=n(9960),i=n(2263),s=n(782),l=n(7462),c=n(3905);const p={toc:[{value:"Keywords",id:"keywords",level:2},{value:"Project Abstract",id:"project-abstract",level:2},{value:"High Level Requirement",id:"high-level-requirement",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Background",id:"background",level:2},{value:"Required Resources",id:"required-resources",level:2},{value:"Collaborators",id:"collaborators",level:2}]};function u(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://classroom.github.com/open-in-codespaces?assignment_repo_id=9890122"},(0,c.kt)("img",{parentName:"a",src:"https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg",alt:"Open in Codespaces"}))),(0,c.kt)("div",{align:"center"},(0,c.kt)("h1",{id:"project-name"},"Project Name"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues"},(0,c.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software",alt:"Report Issue on Jira"})),"\n",(0,c.kt)("a",{parentName:"p",href:"https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml"},(0,c.kt)("img",{parentName:"a",src:"https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg",alt:"Deploy Docs"})),"\n",(0,c.kt)("a",{parentName:"p",href:"https://applebaumian.github.io/tu-cis-4398-docs-template/"},(0,c.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Documentation%20Website-brightgreen",alt:"Documentation Website Link"})))),(0,c.kt)("h2",{id:"keywords"},"Keywords"),(0,c.kt)("p",null,"Section 704, Group 1, python, dates, syllabus"),(0,c.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,c.kt)("p",null,"Our group created a python file that prints out the dates of assignments that are completed and upcoming. The idea was to create a simple project within the time constraint. It also was easy to run and straight to the point. Everyone in the group thought it would be easier to have a list of assignments instead of a complicated project."),(0,c.kt)("h2",{id:"high-level-requirement"},"High Level Requirement"),(0,c.kt)("p",null,"Describe the requirements \u2013 i.e., what the product does and how it does it from a user point of view \u2013 at a high level.\nWhen the user puts ",(0,c.kt)("inlineCode",{parentName:"p"},"python dates.py")," into the terminal, the following picture of what the terminal would look like is pictured below"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/58699300/214953218-33252bea-22b9-4788-9660-8ca89657b817.png",alt:"{95F6536D-0BD5-44F0-B1A0-42EA54CB9457}"})),(0,c.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,c.kt)("p",null,"The program is run on one python file, and the output is the user's terminal "),(0,c.kt)("h2",{id:"background"},"Background"),(0,c.kt)("p",null,"The program starts by setting up an HTTPS connection with the specified website. Then, it sets up the payload and headers for the GET request. After that it creates the GET request to the API endpoint \"/api/syllabus/1\". It then gets the response from the API, reads the data from the response, decodes the JSON data, and finally stores it in a variable. After it finsihes this process, it then gets the list of events from the data and initializes an empty list to store the event dates & names. The python file finally ends with a for loop that goes through each event in the list of events, gets today's date and if today's date is less than the assignment's due date, print that it is upcoming, if it is not this, the termianl prints that it is completed."),(0,c.kt)("h2",{id:"required-resources"},"Required Resources"),(0,c.kt)("p",null,"IDE, python"),(0,c.kt)("h2",{id:"collaborators"},"Collaborators"),(0,c.kt)("p",null,"Tyler Weiss, Kat Tejada, Aaron Thomas, Ben Baldino, Steven Altemose"))}function h(){return r.createElement("div",{className:"container",style:{marginTop:"50px",marginBottom:"100px"}},r.createElement(u,null))}u.isMDXComponent=!0;const m="heroBanner_qdFl",d="buttons_AeoN";function f(){const{siteConfig:e}=(0,i.Z)();return r.createElement("header",{className:(0,a.Z)("hero hero--primary",m)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},e.title),r.createElement("p",{className:"hero__subtitle"},e.tagline),r.createElement("div",{className:d},r.createElement(o.Z,{className:"button button--secondary button--lg",to:"/tutorial/intro"},"Docusaurus Tutorial - 5min \u23f1\ufe0f"))))}function g(){const{siteConfig:e}=(0,i.Z)();return r.createElement(s.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},r.createElement(f,null),r.createElement("main",null,r.createElement(h,null)))}}}]);