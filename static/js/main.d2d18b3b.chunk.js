(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{116:function(e,t,c){"use strict";c.r(t);var r=c(0),s=c(1),n=c.n(s),a=c(38),i=c.n(a),l=(c(13),c(12)),o=c(3);function d(){return Object(r.jsx)("main",{children:Object(r.jsx)("div",{className:"home-background",children:Object(r.jsxs)("section",{className:"relative flex min-h-screen pt-12 lg:pt-24 px-12",children:[Object(r.jsxs)("h1",{className:"opacity-100 justify-center text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name",children:["Welcome to The Coding",Object(r.jsx)("br",{}),"Netowork's official website"]}),Object(r.jsxs)("h2",{children:["Hello ..... ",Object(r.jsx)("br",{})," hello"]})]})})})}function j(){return Object(r.jsx)("main",{className:"relative about-background",children:Object(r.jsx)("div",{className:"p-10 lg:pt-34 container mx-auto relative",children:Object(r.jsxs)("section",{className:"opacity-75 bg-gree-500 rounded-lg shadow-2x1 lg:flex p-20",children:[Object(r.jsx)("div",{className:"text-lg flex flex-col justify-center",children:Object(r.jsx)("iframe",{id:"849959313078485052",src:"https://discord.com/widget?id=849959313078485052&theme=dark",width:"350",height:"400",allowtransparency:"true",frameborder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("iframe",{width:"400",src:"https://github-readme-stats.vercel.app/api?username=User5029&count_private=true&show_icons=true&theme=radical"}),Object(r.jsx)("iframe",{width:"400",src:"https://github-readme-stats.vercel.app/api?username=MaxT-uk&count_private=true&show_icons=true&theme=radical"})]})]})})})}var x=c(41),h=c(39),b=c.n(h)()({projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/The-Coding-Network",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).projectId,dataset:"production"});function p(){var e=Object(s.useState)(null),t=Object(x.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){b.fetch('*[_type == "project"]{\n          title,\n          date,\n          place,\n          description,\n          projectType,\n          link,\n          tags\n      }').then((function(e){return n(e)})).catch(console.error)}),[]),Object(r.jsx)("main",{className:"project-background min-h-screen p-12",children:Object(r.jsxs)("section",{className:"container mx-auto",children:[Object(r.jsx)("h1",{className:"text-5xl flex justify-center cursive",children:"My Projects"}),Object(r.jsx)("h2",{className:"text-lg text-gray-600 flex justify-center mb-12",children:"Welcome to my projects page!"}),Object(r.jsx)("section",{className:"grid grid-cols-2 gap-8",children:c&&c.map((function(e,t){return Object(r.jsxs)("article",{className:"relative rounded-lg shadow-xl bg-white p-16",children:[Object(r.jsx)("h3",{className:"text-gray-800 text-3xl font-bold mb-2 hover:text-red-700",children:Object(r.jsx)("a",{href:e.link,alt:e.title,target:"_blank",rel:"noopener noreferrer",children:e.title})}),Object(r.jsxs)("div",{className:"text-gray-500 text-xs space-x-4",children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{className:"font-bold",children:"Finished on"}),":"," ",new Date(e.date).toLocaleDateString()]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{className:"font-bold",children:"Company"}),":"," ",e.place]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{className:"font-bold",children:"Type"}),":"," ",e.projectType]}),Object(r.jsx)("p",{className:"my-6 text-lg text-gray-700 leading-relaxed",children:e.description}),Object(r.jsxs)("a",{href:e.link,rel:"noopener noreferrer",target:"_blank",className:"text-red-500 font-bold hover:underline hover:text-red-400 text-xl",children:["View The Project"," ",Object(r.jsx)("span",{role:"img","aria-label":"right pointer",children:"\ud83d\udc49"})]})]})]})}))})]})})}var m=c(22);function g(){return Object(r.jsx)("header",{className:"navbar-bg",children:Object(r.jsxs)("div",{className:"container mx-auto flex justify-between",children:[Object(r.jsxs)("nav",{className:"flex",children:[Object(r.jsx)(l.b,{to:"/",exact:!0,activeClassName:"text-white",className:"inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest",children:"Home"}),Object(r.jsx)(l.b,{to:"/project",className:"inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800",activeClassName:"text-red-100 bg-red-700",children:"Projects"}),Object(r.jsx)(l.b,{to:"/information",className:"inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800",activeClassName:"text-red-100 bg-red-700",children:"Information"})]}),Object(r.jsxs)("div",{className:"inline-flex py-3 px-3 my-6",children:[Object(r.jsx)(m.SocialIcon,{url:"https://github.com/The-Coding-Network",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}}),Object(r.jsx)(m.SocialIcon,{url:"https://discord.gg/EgZqFdXz",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}})]})]})})}var u=function(){return Object(r.jsxs)(l.a,{children:[Object(r.jsx)(g,{}),Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{component:d,path:"/",exact:!0}),Object(r.jsx)(o.a,{component:j,path:"/information"}),Object(r.jsx)(o.a,{component:p,path:"/project"})]})]})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root"))},13:function(e,t,c){}},[[116,1,2]]]);
//# sourceMappingURL=main.d2d18b3b.chunk.js.map