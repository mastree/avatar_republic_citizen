(this.webpackJsonpavatar_republic_citizen=this.webpackJsonpavatar_republic_citizen||[]).push([[0],{102:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),i=(a(102),a(49)),s=a.n(i),c=a(66),p=a(34),u=a(35),d=a(42),m=a(40),h=a(48),g=a(10),f=a(82),v=a(158),b=a(161),E=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={title:""},e.onSubmit=function(t){t.preventDefault(),e.props.giveId(e.state.title)},e.onChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.onSubmit,style:y},r.a.createElement(v.a,{id:"inputField",name:"title",label:"Masukkan id citizen..",fullWidth:!0,variant:"outlined",value:this.state.title,onChange:this.onChange}),r.a.createElement(b.a,{variant:"contained",color:"primary",type:"submit"},"Search")))}}]),a}(n.Component),y={padding:"10px"},k=E;var x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"Aplikasi untuk menampilkan ilustrasi graf dari hubungan pertemanan.",r.a.createElement("br",null)," Informasi mengenai hubungan pertemanan diambil melalui API."))};var w={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},O={color:"#fff",textDecoration:"none"},I=function(){return r.a.createElement("header",{style:w},r.a.createElement("h1",null,"Welcome to Avatar Star Citizen!"),r.a.createElement(h.b,{style:O,to:"/"},"Home")," | ",r.a.createElement(h.b,{style:O,to:"/about"},"About"))},j=a(4),C=a(160),N=a(157),S=a(83),A=a(154),D=a(156),F=a(163),M=a(162),W=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hoverOn:null},e.onClickNode=function(e){this.props.giveId(e)},e.onMouseOverNode=function(e){for(var t=this.props.person.payload.friends.length,a=null,n=0;n<t;n++)this.props.person.payload.friends[n].id==e&&(a=this.props.person.payload.friends[n]);null===a&&(a={id:this.props.person.payload.id,name:this.props.person.payload.name,element:this.props.person.payload.element}),this.setState({hoverOn:a})},e}return Object(u.a)(a,[{key:"renderIdentity",value:function(e){var t=this.props.classes;return r.a.createElement(A.a,{className:t.paper},r.a.createElement(D.a,{container:!0,wrap:"nowrap",spacing:2},r.a.createElement(D.a,{item:!0},r.a.createElement(F.a,null)),r.a.createElement(D.a,{item:!0,xs:!0},r.a.createElement(N.a,null,"ID: ",e.id,r.a.createElement("br",null),"NAME: ",e.name,r.a.createElement("br",null),"ELEMENT: ",e.element,r.a.createElement("br",null)))))}},{key:"allFriend",value:function(){var e=this;return this.props.person.payload.friends.map((function(t,a){return r.a.createElement("li",{key:a},e.renderIdentity(t))}))}},{key:"getColor",value:function(e){return"fire"==e?"red":"water"==e?"blue":"air"==e?"#b2f2ec":"yellow"}},{key:"hoveredNode",value:function(){return null===this.state.hoverOn?r.a.createElement("div",null):r.a.createElement(r.a.Fragment,null,this.renderIdentity(this.state.hoverOn))}},{key:"render",value:function(){if(this.props.person){var e={nodes:[],links:[]};e.nodes.push({id:this.props.person.payload.id,color:this.getColor(this.props.person.payload.element)});for(var t=this.props.person.payload.friends.length,a=0;a<t;a++)e.nodes.push({id:this.props.person.payload.friends[a].id,color:this.getColor(this.props.person.payload.friends[a].element)}),e.links.push({source:this.props.person.payload.id,target:this.props.person.payload.friends[a].id});var n={id:this.props.person.payload.id,name:this.props.person.payload.name,element:this.props.person.payload.element};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(C.a,{display:"flex",flexDirection:"row",p:1,m:1,bgcolor:"background.paper"},r.a.createElement(C.a,{p:1},r.a.createElement(C.a,{display:"flex",flexDirection:"column",p:1,m:1,bgcolor:"background.paper"},r.a.createElement(C.a,{p:1,bgcolor:"grey.100"},r.a.createElement(S.Graph,{id:"graph-id",data:e,config:{nodeHighlightBehavior:!0,highlightDegree:1,linkHighlightBehavior:!1,automaticRearrangeAfterDropNode:!0,node:{size:300,highlightStrokeColor:"black",highlightStrokeWidth:2},link:{color:"black",highlightColor:"lightblue"},minZoom:1,maxZoom:1,width:600,height:400,transision:100},onClickNode:this.onClickNode.bind(this),onMouseOverNode:this.onMouseOverNode.bind(this)})),r.a.createElement(C.a,{p:1},this.hoveredNode()))),r.a.createElement(C.a,{p:1},r.a.createElement(C.a,{display:"flex",flexDirection:"column",p:1,m:1,bgcolor:"grey.300"},r.a.createElement(C.a,{p:1},this.renderIdentity(n),r.a.createElement(N.a,{variant:"h5"},"Friend List")),r.a.createElement(C.a,{p:1,bgcolor:"grey.700"},r.a.createElement(M.a,{style:{maxHeight:600,overflow:"auto"}},r.a.createElement("ul",{style:{listStyleType:"none"}},this.allFriend()))))))))}return console.log("masukelse"),r.a.createElement("div",null)}}]),a}(n.Component),z=Object(j.a)((function(e){return{paper:{margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(2)}}}))(W),B=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={id:null,person:null},e.GetPersonWithID=Object(c.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://avatar.labpro.dev/friends/"+e.state.id,{method:"GET"});case 2:return a=t.sent,t.next=5,a.json();case 5:200===(n=t.sent).status&&e.setState({person:n});case 7:case"end":return t.stop()}}),t)}))),e.giveId=function(){var t=Object(c.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("masuk input: ",a),""!==a){t.next=3;break}return t.abrupt("return");case 3:if(n=parseInt(a),a!=n){t.next=10;break}return console.log("masuk",n),t.next=8,e.setState({id:n});case 8:t.next=10;break;case 10:console.log("accepted request: ",e.state.id),e.GetPersonWithID();case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement(I,null),r.a.createElement(g.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{giveId:e.giveId}),r.a.createElement(z,{id:e.state.id,person:e.state.person,giveId:e.giveId}))}}),r.a.createElement(g.a,{path:"/about",component:x}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,a){e.exports=a(120)}},[[97,1,2]]]);
//# sourceMappingURL=main.83645e41.chunk.js.map