(this["webpackJsonprg-portfolio"]=this["webpackJsonprg-portfolio"]||[]).push([[0],{48:function(e,t,a){},49:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(22),s=a.n(c),r=(a(48),a(8)),l=a(11),o=a(10),j=a(9),b=a(60),d=a(64),h=a(66),u=a(30),m=a(6),f=(a(49),a(61)),x=a(40),g=a(2);var O=function(e){return Object(g.jsx)(b.a,{fluid:!0,children:Object(g.jsx)(f.a,{className:"justify-content-center",children:Object(g.jsx)(x.a,{md:8,children:e.children})})})},p=a(62);var y=function(e){return Object(g.jsx)(p.a,{className:"bg-transparent jumbotron-fluid",children:Object(g.jsx)(b.a,{fluid:!0,children:Object(g.jsx)(f.a,{className:"justify-content-center",children:Object(g.jsxs)(x.a,{md:8,sm:12,children:[e.title&&Object(g.jsx)("h1",{className:"display-4 font-weight-bolder",children:e.title}),e.subTitle&&Object(g.jsx)("h3",{className:"display-4 font-weight-light",children:e.subTitle}),e.text&&Object(g.jsx)("h3",{className:"lead font-weight-light",children:e.text})]})})})})};var k=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)(y,{classname:"font-normal text-white",title:e.title}),Object(g.jsxs)(O,{children:[Object(g.jsx)("p",{children:"I'm an Electrical and Computer Engineering graduate from Rutgers University - New Brunswick class of 2017."}),Object(g.jsx)("p",{children:"Previously, I was an Electrical Engineer at Arup, an architectural engineering firm, for 3 years. Alongside electrical design, I spent time coding our design processes and realized my passion for code."}),Object(g.jsx)("p",{children:"Now I'm looking for my first full-time role as a Software Engineer."})]}),Object(g.jsx)("button",{className:"dl-button",children:Object(g.jsx)("a",{href:"/RyanAnthonyGatchalian-Resume.pdf",className:"dl-a",download:"RyanAnthonyGatchalian-Resume.pdf",children:"Download Resume"})})]})},v=a(19),w=a(65),N=a(63),T=(i.a.Component,a(20)),C=a(38);var A=function(e){var t=Object(C.b)({opacity:1,from:{opacity:0}});return Object(g.jsxs)(C.a.div,{className:"rg-card-info",style:t,children:[Object(g.jsx)("p",{className:"rg-card-title",children:e.title}),Object(g.jsx)("p",{className:"rg-card-sub-title",children:e.subTitle}),Object(g.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View"})]})};var G=function(e){return Object(g.jsxs)("div",{className:"d-inline-block rg-card",onClick:function(t){return e.click(e.item)},children:[Object(g.jsx)("img",{className:"rg-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(g.jsx)(A,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},I=a.p+"static/media/gohort.459f980c.png",R=a.p+"static/media/headshot.37ca2eff.png",S=a.p+"static/media/twitch.e5dfc4ad.png",E=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(T.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return Object(g.jsx)(G,{item:e,click:function(t){return n.handleCardClick(e.id,t)}},e.id)}))},n.state={items:[{id:0,title:"Gohort",subTitle:"Trip planning made easy.",imgSrc:I,link:"https://www.gohort.com",selected:!1},{id:1,title:"Ryan Gatchalian",subTitle:"More about me!",imgSrc:R,link:"/about",selected:!1},{id:2,title:"TwitchBreakoutGames",subTitle:'An API to see the "breakout games" of Twitch.',imgSrc:S,link:"https://github.com/ryangatchalian/TwitchBreakoutGames",selected:!1}]},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)(b.a,{fluid:!0,children:Object(g.jsx)(f.a,{className:"justify-content-around",children:this.makeItems(this.state.items)})})}}]),a}(i.a.Component);var B=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)(y,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(g.jsx)(E,{})]})},F=a(37),P=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={title:"Ryan Anthony Gatchalin",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Github",path:"https://github.com/ryangatchalian"}],home:{subTitle:"Thanks for stopping by! ",text:"Check out some of my projects below:"},about:{title:"More about me..."}},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(g.jsx)(u.a,{children:Object(g.jsxs)(b.a,{className:"p-0",fluid:!0,children:[Object(g.jsxs)(d.a,{className:"border-bottom",bg:"transparent",expand:"lg",children:[Object(g.jsxs)("h1",{className:"navbar-brand",children:[Object(g.jsx)("span",{style:{color:"#235789"},children:"Ryan Anthony"})," Gatchalian"]}),Object(g.jsx)("a",{className:"inline-block ml-1 text-3xl",href:"https://github.com/ryangatchalian/",children:Object(g.jsx)(F.a,{})}),Object(g.jsx)("a",{className:"inline-block ml-2 text-3xl",href:"https://www.linkedin.com/in/ryan-anthony-gatchalian/",children:Object(g.jsx)(F.b,{})}),Object(g.jsx)(d.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(g.jsx)(d.a.Collapse,{id:"navbar-toggle",children:Object(g.jsxs)(h.a,{className:"ml-auto",children:[Object(g.jsx)(u.b,{className:"nav-link",to:"/",children:"Home"}),Object(g.jsx)(u.b,{className:"nav-link",to:"/about",children:"About"})]})})]}),Object(g.jsx)(m.a,{path:"/",exact:!0,render:function(){return Object(g.jsx)(B,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(g.jsx)(m.a,{path:"/about",render:function(){return Object(g.jsx)(k,{title:e.state.about.title})}})]})})}}]),a}(i.a.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};a(57);s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(P,{})}),document.getElementById("root")),L()}},[[58,1,2]]]);
//# sourceMappingURL=main.b1c64921.chunk.js.map