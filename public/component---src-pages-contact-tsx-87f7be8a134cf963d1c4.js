(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0Aie":function(e,t,a){"use strict";a.r(t);var l=a("aykU"),n=a("kD0k"),r=a.n(n),i=(a("ls82"),a("/S4K")),c=a("+qZG"),m=a("q1tI"),s=a.n(m),u=a("jsCw"),o=a("ucHa");function M(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var l=0;return function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}var g=a("iEWF");var N=function(e){var t=e.schema,a=e.onChange,l=e.onSubmit,n=e.showConfirmation,r=e.headline,i=s.a.useState(0),c=i[0],m=i[1],d=s.a.useState({}),N=d[0],I=d[1],y=s.a.useState({}),x=y[0],p=y[1];s.a.useEffect((function(){if(t&&t.length){for(var e,l={},n=M(t);!(e=n()).done;)for(var r,i=M(e.value.fields);!(r=i()).done;){var c,m,s=r.value;if(s.items&&s.items.length)l=Object.assign({},l,((c={})[s.name]=s.multiSelect?[s.items[0].value]:s.items[0].value,c));else l=Object.assign({},l,((m={})[s.name]=s.defaultValue||"",m))}I(Object.assign({},l)),a&&a(Object.assign({},l))}}),[]);var D=function(e){t&&(function(e,t){for(var a,l={},n=M(t);!(a=n()).done;){var r=a.value,i=e[r.name];switch(r.validation){case"required":(!i||i.length<=0||""===i)&&(l[r.name]="This field is required!");break;case"email":(!i||i.length<=0||""===i)&&(l[r.name]="This field is required!");/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(i.toLowerCase())||(l[r.name]="Please provide correct Email-ID!");break;case"length":(!i||""===i||i.length<(r.minLength||0))&&(l[r.name]="Invalid value! (minlength "+r.minLength+" chars)")}}p(Object.assign({},l));var c=Object.keys(l);if(c.length){var m=document.getElementById("FORM_FIELD_"+c[0]),s=m?m.offsetTop-200:0;window.scrollTo({behavior:"smooth",top:s})}return!c.length}(N,t[c].fields)&&(c>=t.length-1?v(N):(window.scrollTo({behavior:"smooth",top:0}),m(c+1),a&&a(N))))},v=function(e){l&&l(e)},f=function(e){return function(t){var l,n=Object.assign({},N,((l={})[e]=t,l));I(n),a&&a(n)}};return s.a.createElement(s.a.Fragment,null,t&&t.length?s.a.createElement("div",{className:"px-8 bg-white   md:mx-0 mx-4  rounded-lg"},s.a.createElement("div",{className:"mb-8"},s.a.createElement("h3",{className:"text-2xl text-blue-800 font-bold text-center md:text-left"},r)),s.a.createElement("div",{className:"block md:hidden mb-4"},s.a.createElement("h3",{className:"font-bold text-2xl"},t[c].title)),t&&c<t.length?s.a.createElement("div",{className:"flex w-full mb-8"},null==t?void 0:t.map((function(e,t){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex-1 px-1"},s.a.createElement("div",{className:"mb-4 hidden md:block"},s.a.createElement("h3",{className:"font-bold text-2xl "+(t<c?"text-green-300 opacity-25":t===c?"text-black":"text-gray-300")},e.title)),s.a.createElement("div",{className:"w-full h-2  "+(t<c?"bg-green-300 opacity-25":t<=c?"bg-blue-700":"bg-gray-400")})))}))):"",s.a.createElement("div",{className:" overflow-hidden",style:{height:c<(null==t?void 0:t.length)?"auto":"0px"}},null==t?void 0:t.map((function(e,t){return s.a.createElement("div",{className:g.item+" flex flex-wrap w-full "+(t===c?g.itemActive:" h-0 opacity-0 overflow-hidden pointer-events-none")},e.fields.map((function(e,t){return"hidden"!==e.type?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"FORM_FIELD_"+e.name,className:" mb-8 w-full md:w-1/2 md:px-2 "+e.wrapperClass},s.a.createElement("h3",{className:"text-lg font-bold block text-left"},e.label),s.a.createElement("div",{className:"my-4 text-center relative",onKeyDown:function(e){"Enter"===e.key&&D()}},"input"===e.type?s.a.createElement(u.a,{onChange:f(e.name),type:e.subType||"text",label:e.placeholder||e.label,prefix:e.prefix,focus:t===c,value:N[e.name]}):"select"===e.type?s.a.createElement(o.a,{spread:e.spread,onChange:f(e.name),list:e.items,value:N[e.name],multiSelect:e.multiSelect}):"",s.a.createElement("div",{className:" "},x[e.name]&&x[e.name].length?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{top:"5px",right:"10px"},className:"bg-blue-400 absolute  text-white text-left px-2 pt-1 inline-block rounded my-2"},"!"),s.a.createElement("div",{className:"flex justify-start"},s.a.createElement("div",{className:"bg-blue-400  text-white text-left px-2 pt-1 inline-block rounded my-2"},x[e.name]))):"")))):s.a.createElement(s.a.Fragment,null)})))})),s.a.createElement("div",{className:"clear-left"})),n&&c===t.length-1?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement("div",{className:""},s.a.createElement("h4",{className:"text-2xl font-bold"},"Preview")),s.a.createElement("hr",{className:"my-4"}),s.a.createElement("div",{className:"flex flex-wrap flex-col md:flex-row mx-auto"},t.map((function(e){return e.fields.map((function(e){return s.a.createElement("div",{className:"w-full md:w-1/2 flex py-2"},s.a.createElement("div",{className:"font-bold text-lg mr-2"},e.title," :"," "),s.a.createElement("div",null,N[e.name]||s.a.createElement("i",{className:"text-gray-500"},"N/A")))}))}))))):"",s.a.createElement("div",{className:"bg-white bottom-0 left-0 right-0 md:static mt-4 flex justify-evenly md:justify-end items-center"},s.a.createElement("div",{className:"mr-4 "+(c>0?"":"hidden")},s.a.createElement("div",{onClick:function(e){window.scrollTo({behavior:"smooth",top:0}),m(c-1)},className:"bg-gray-200 px-8 md:px-24 py-4 rounded text-center  hover:bg-gray-100 cursor-pointer"},"Back")),s.a.createElement("div",{className:" flex-1 md:flex-none "},s.a.createElement("div",{onClick:D,className:"bg-blue-700 md:px-24 py-4 rounded text-center text-white hover:bg-blue-500 cursor-pointer"},c>=t.length-1?"SUBMIT":"Next")))):"")},I=a("yUXX"),y=a("8DBO");var x=function(e){Object(c.a)(e);var t=s.a.useState({}),a=(t[0],t[1]),l=s.a.useState(!1),n=l[0],m=l[1],u=s.a.useState(!1),o=u[0],M=u[1],d=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,a=t.email,e.next=5,y.a.post("eusers/register",{email:a,entity:t});case 5:l=e.sent,"OK"===l.data&&M(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:return e.prev=13,m(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement("div",null,s.a.createElement("div",{className:"relative",style:{width:"100%",height:"300px"}},s.a.createElement("div",{className:"absolute w-full ",style:{zIndex:-1}},s.a.createElement("iframe",{scrolling:"no",style:{width:"100%",height:"300px"},src:"https://www.openstreetmap.org/export/embed.html?bbox=-120.37925720214845%2C50.65185499369506%2C-120.3329086303711%2C50.676092540077136&layer=mapnik"}))),s.a.createElement("div",{className:"max-w-1366 mx-auto"},s.a.createElement("div",{className:"md:w-3/4 rounded-lg mx-auto p-4 bg-white shadow-xl",style:{marginTop:"-50px"}},s.a.createElement("div",{className:"text-center mt-4"},s.a.createElement("h3",{className:"text-2xl"},"Get Quote!")),s.a.createElement("div",{className:"mb-16 relative"},o?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"text-center my-16"},s.a.createElement("h1",{className:"font-bold text-2xl text-green-700 mb-4"},"SUCCESS!"),s.a.createElement("h1",{className:"font-bold "},"Your query has been received at our end! One of our experts will get in touch with you soon!"))):s.a.createElement(s.a.Fragment,null,n?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"absolute w-full h-full z-10 flex items-center justify-center",style:{backgroundColor:"rgba(255,255,255,0.7)"}},s.a.createElement("h1",{className:"font-bold text-2xl"},"Sending query..."))):"",s.a.createElement(N,{onSubmit:d,onChange:function(e){e&&a(e)},schema:[{title:"Services",fields:[{label:"Please Choose...",name:"services",type:"select",spread:!0,validation:"required",items:[{value:"LEAD GENERATION"},{value:"SEO"},{value:"PAID MARKETING"},{value:"SOCIAL MEDIA MARKETING"},{value:"LOGO DESIGN"},{value:"BRANDING"},{value:"WEBSITE DESIGN"},{value:"WEB APP DEVELOPMENT"},{value:"ANDROID/IOS APP"}],multiSelect:!0,wrapperClass:"md:w-full"}],type:"input"},{title:"Contact Info",fields:[{label:"Name*",name:"name",type:"input",placeholder:"Full Name",validation:"required"},{label:"Email*",name:"email",type:"input",placeholder:"Quote will be dispatched to this email!",validation:"required"},{label:"Website",name:"website",type:"input",placeholder:"https://"},{label:"Phone No.",name:"phone",type:"input",placeholder:" "},{label:"Message",name:"message",type:"input",subType:"textarea",placeholder:"Please type your query here!",wrapperClass:"md:w-full"}],type:"input"}]}))))),s.a.createElement("div",null,s.a.createElement(I.a,null)))};t.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{pageTitle:"Contact Us"},s.a.createElement(x,null)))}},CocU:function(e,t,a){e.exports=a.p+"static/home-contact-us-bg-257aa599714420ebf71a38bb2c14dd22.png"},JCeH:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjIiIGhlaWdodD0iNjIiIHZpZXdCb3g9IjAgMCA2MiA2MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzEuMDk2OCIgY3k9IjMwLjczNCIgcj0iMzAuNDAzOSIgZmlsbD0iIzI4OThGRiIvPgo8cGF0aCBkPSJNNDAuODc5OCAyMy4wNTUySDIxLjMxMzhDMjAuMjA5MiAyMy4wNTUyIDE5LjMxMzggMjMuOTUwNiAxOS4zMTM4IDI1LjA1NTJWMzYuNDEzQzE5LjMxMzggMzcuNTE3NSAyMC4yMDkyIDM4LjQxMyAyMS4zMTM4IDM4LjQxM0g0MC44Nzk4QzQxLjk4NDQgMzguNDEzIDQyLjg3OTggMzcuNTE3NSA0Mi44Nzk4IDM2LjQxM1YyNS4wNTUyQzQyLjg3OTggMjMuOTUwNiA0MS45ODQ0IDIzLjA1NTIgNDAuODc5OCAyMy4wNTUyWiIgc3Ryb2tlPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDAuODc5OCAyMy4wNTUySDIxLjMxMzhDMjAuMjA5MiAyMy4wNTUyIDE5LjMxMzggMjMuOTUwNiAxOS4zMTM4IDI1LjA1NTJWMjUuNDI4OUMxOS4zMTM4IDI2LjE0NjMgMTkuNjk4IDI2LjgwODcgMjAuMzIwNyAyNy4xNjQ5TDMwLjEwMzcgMzIuNzYxMkMzMC43MTkgMzMuMTEzMiAzMS40NzQ2IDMzLjExMzIgMzIuMDg5OSAzMi43NjEyTDQxLjg3MjkgMjcuMTY0OUM0Mi40OTU2IDI2LjgwODcgNDIuODc5OCAyNi4xNDYzIDQyLjg3OTggMjUuNDI4OVYyNS4wNTUyQzQyLjg3OTggMjMuOTUwNiA0MS45ODQ0IDIzLjA1NTIgNDAuODc5OCAyMy4wNTUyWiIgZmlsbD0id2hpdGUiIHN0cm9rZT0id2hpdGUiLz4KPC9zdmc+Cg=="},MP6s:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjIiIGhlaWdodD0iNjIiIHZpZXdCb3g9IjAgMCA2MiA2MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAuODgzMyIgY3k9IjMwLjczNCIgcj0iMzAuNDAzOSIgZmlsbD0iIzI4OThGRiIvPgo8cGF0aCBkPSJNNDIuODgzMyAxOC43MzM5TDM1LjY1OTQgNDIuNzMzOUwzMS45ODYgMjkuNjMxMkwxOC44ODMzIDI1Ljk1NzdMNDIuODgzMyAxOC43MzM5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},iEWF:function(e,t,a){e.exports={item:"index-module--item--2paoX",itemActive:"index-module--itemActive--3t_95"}},"n/Xq":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjIiIGhlaWdodD0iNjIiIHZpZXdCb3g9IjAgMCA2MiA2MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzEuMzkxNiIgY3k9IjMwLjczNCIgcj0iMzAuNDAzOSIgZmlsbD0iIzI4OThGRiIvPgo8cGF0aCBkPSJNMzEuMzgzMyAyMC40NDA2QzMyLjY5OTcgMjIuNzIwNyAzMS45MTg1IDI1LjYzNiAyOS42Mzg3IDI2Ljk1MjJDMjkuNjM4NyAyNi45NTIyIDI5LjM4MzQgMjguMTMgMzAuOTU2MyAzMC44NTQ1QzMyLjUyOTMgMzMuNTc4OSAzMy43OTAzIDM0LjE0MzEgMzMuNzkwMyAzNC4xNDMxQzM2LjA3MDEgMzIuODI2OCAzOC45ODU0IDMzLjYwNzkgNDAuMzAxNiAzNS44ODc3QzQxLjYxOCAzOC4xNjc3IDQwLjgzNjkgNDEuMDgzIDM4LjU1NyA0Mi4zOTkzQzM2LjI3NzEgNDMuNzE1NiAzMy4zNjE5IDQyLjkzNDQgMzIuMDQ1NSA0MC42NTQ0QzMyLjA0NTUgNDAuNjU0NCAyOS4zMTA2IDM3LjQwODYgMjYuODg0IDMzLjIwNTZDMjQuNDU3NCAyOS4wMDI3IDIzLjAxMzkgMjUuMDExMyAyMy4wMTM5IDI1LjAxMTNMMjMuMDE4NSAyNS4wMDg2QzIxLjg1NzIgMjIuNzYwOSAyMi42NTc3IDE5Ljk3NDMgMjQuODcxOSAxOC42OTZDMjcuMTUxOCAxNy4zNzk3IDMwLjA2NzEgMTguMTYwOSAzMS4zODMzIDIwLjQ0MDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},yUXX:function(e,t,a){"use strict";var l=a("+qZG"),n=a("q1tI"),r=a.n(n);t.a=function(e){Object(l.a)(e);var t=[{imageURL:a("MP6s"),title:"US : 925 Rose Ln Hatfield, Pennsylvania(PA), 19440"},{imageURL:a("JCeH"),title:"help@ebiz-solutions.com"},{imageURL:a("n/Xq"),title:"+1-123-456-7890"}];return r.a.createElement("div",null,r.a.createElement("div",{className:"py-24 bg-cover bg-no-repeat bg-center",style:{backgroundImage:"url("+a("CocU")+")"}},r.a.createElement("div",{className:"max-w-1366 mx-auto flex justify-center items-center text-white"},r.a.createElement("div",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"text-2xl font-bold"},"How to reach us out?"),r.a.createElement("h5",{className:"py-2"},"Not too close, not too far!")),r.a.createElement("div",{className:"py-4"},r.a.createElement("div",{className:"flex flex-col md:flex-row px-8"},t.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"p-4 flex flex-col items-center text-center w-full md:w-1/3"},r.a.createElement("img",{src:e.imageURL}),r.a.createElement("span",{className:"py-8"},e.title)))}))))))))}}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-87f7be8a134cf963d1c4.js.map