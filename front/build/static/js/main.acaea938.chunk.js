(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{10:function(e,a,t){e.exports=t.p+"static/media/unirse.be6809a1.png"},11:function(e,a,t){e.exports=t.p+"static/media/crear.62aedac8.png"},20:function(e,a,t){e.exports=t.p+"static/media/logo.5f58e95e.png"},23:function(e,a,t){},28:function(e,a,t){},31:function(e,a,t){e.exports=t.p+"static/media/logo2.d5049a15.png"},37:function(e,a,t){e.exports=t(79)},42:function(e,a,t){},44:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),l=t.n(c),o=(t(42),t(2)),s=t.n(o),i=t(4),m=t(1),u=(t(23),t(6),t(20)),d=t.n(u),p=(t(44),t(7));var g=function(e){var a=Object(p.e)();function t(e){e.preventDefault(),a.push("/")}return e.cookies.cookies.wheelsUser&&e.cookies.cookies.wheelsToken?r.a.createElement("nav",{className:"navbar navbar-light navbar-custom"},r.a.createElement("a",{onClick:function(e){e.preventDefault(),a.push("/ppalLog")},className:"navbar-brand"},r.a.createElement("img",{alt:"logo",id:"logo-brand",src:d.a})),r.a.createElement("form",{className:"form-inline",onSubmit:function(a){a.preventDefault();var n=JSON.parse(e.cookies.cookies.wheelsUser);e.wsConnection?(e.wsConnection.send("END:"+n.uid),e.signout(a),t(a)):(e.signout(a),t(a))}},r.a.createElement("button",{onClick:function(e){e.preventDefault(),a.push("/misCarros")},className:"btn my-2 my-sm-0 yellow"},"Mis Carros"),r.a.createElement("button",{type:"submit",className:"btn my-2 my-sm-0 yellow"},"Cerrar sesi\xf3n"))):r.a.createElement("nav",{className:"navbar navbar-light navbar-custom"},r.a.createElement("a",{onClick:t,className:"navbar-brand"},r.a.createElement("img",{alt:"logo",id:"logo-brand",src:d.a})),r.a.createElement("form",{className:"form-inline"},r.a.createElement("button",{onClick:function(e){e.preventDefault(),a.push("/register")},className:"btn my-2 my-sm-0 yellow"},"Reg\xedstrate"),r.a.createElement("button",{onClick:function(e){e.preventDefault(),a.push("/login")},className:"btn my-2 my-sm-0 yellow"},"Inicia sesi\xf3n")))};t(52);var E=function(e){var a=Object(p.e)(),t=Object(n.useState)(""),c=Object(m.a)(t,2),l=c[0],o=c[1],u=Object(n.useState)(""),d=Object(m.a)(u,2),g=d[0],E=d[1],h=Object(n.useState)(!1),f=Object(m.a)(h,2),b=f[0],v=f[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container heading"},r.a.createElement("h2",null,"Inicio sesi\xf3n"),r.a.createElement("div",{className:"heading"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-2 col-md-2 col-lg-3"}),r.a.createElement("div",{className:"col-sm-8 col-md-8 col-lg-6"},r.a.createElement("form",{className:"form",onSubmit:function(t){Object(i.a)(s.a.mark((function n(){var r,c,o;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),r={uid:l,password:g},n.next=4,fetch("".concat("http://localhost:3001","/auth/signin"),{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});case 4:return c=n.sent,n.next=7,c.json();case 7:o=n.sent,e.funcionCookie(o.token,l),""===e.cookies.cookies.wheelsToken||"undefined"===e.cookies.cookies.wheelsToken?(v(!0),e.signout(t)):(a.push("/ppalLog"),e.wsConn());case 10:case"end":return n.stop()}}),n)})))()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"user"},"Usuario"),r.a.createElement("input",{required:!0,type:"text",className:"form-control",id:"user",onChange:function(e){return o(e.target.value)},placeholder:"Ingresa tu usuario"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pw"},"Contrase\xf1a"),r.a.createElement("input",{required:!0,type:"password",className:"form-control",id:"pw",onChange:function(e){return E(e.target.value)},placeholder:"Contrase\xf1a"})),b?r.a.createElement("div",{className:"text-danger"},"Tus credenciales no son v\xe1lidas"):r.a.createElement("div",null),r.a.createElement("button",{type:"submit",className:"btn yellow-black"},"Inicia sesi\xf3n"))),r.a.createElement("div",{className:"col-sm-2 col-md-2 col-lg-3"})))))},h=t(31),f=t.n(h);t(53);var b=function(e){var a=Object(p.e)(),t=Object(n.useState)(""),c=Object(m.a)(t,2),l=c[0],o=c[1],u=Object(n.useState)(""),d=Object(m.a)(u,2),g=d[0],E=d[1],h=Object(n.useState)(""),f=Object(m.a)(h,2),b=f[0],v=f[1],N=Object(n.useState)(!1),k=Object(m.a)(N,2),O=k[0],j=k[1],w=Object(n.useState)(!1),y=Object(m.a)(w,2),C=y[0],S=y[1],x=function(t){Object(i.a)(s.a.mark((function n(){var r,c,o;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),j(!1),S(!1),r={uid:l,password:g},n.next=6,fetch("".concat("http://localhost:3001","/auth/signup"),{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});case 6:return c=n.sent,n.next=9,c.json();case 9:o=n.sent,e.funcionCookie(o.token,l),""===e.cookies.cookies.wheelsToken||"undefined"===e.cookies.cookies.wheelsToken?(S(!0),e.signout(t)):(a.push("/ppalLog"),e.wsConn());case 12:case"end":return n.stop()}}),n)})))()};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container heading"},r.a.createElement("h2",null,"Registro"),r.a.createElement("div",{className:"heading"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-2 col-md-2 col-lg-3"}),r.a.createElement("div",{className:"col-sm-8 col-md-8 col-lg-6"},r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),g!=b?j(!0):x(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"user"},"Usuario"),r.a.createElement("input",{required:!0,type:"text",className:"form-control",id:"user",onChange:function(e){return o(e.target.value)},placeholder:"Ingresa tu usuario"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pw"},"Contrase\xf1a"),r.a.createElement("input",{required:!0,type:"password",className:"form-control",id:"pw",onChange:function(e){return E(e.target.value)},placeholder:"Contrase\xf1a"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pw-confirm"},"Confimaci\xf3n contrase\xf1a"),r.a.createElement("input",{required:!0,type:"password",className:"form-control",id:"pw-confirm",onChange:function(e){return v(e.target.value)},placeholder:"Confirma tu contrase\xf1a"})),C?r.a.createElement("div",{className:"text-danger"},"Este usuario ya existe"):r.a.createElement("div",null),O?r.a.createElement("div",{className:"text-danger"},"Las contrase\xf1as ingresadas no coinciden"):r.a.createElement("div",null),r.a.createElement("button",{type:"submit",className:"btn yellow-black"},"Reg\xedstrate"))),r.a.createElement("div",{className:"col-sm-2 col-md-2 col-lg-3"})))))};var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Wheels Uniandes"),r.a.createElement("img",{alt:"logo",id:"logo",src:f.a}),r.a.createElement("div",{className:"heading"},r.a.createElement("i",null,r.a.createElement("h4",null,"\xdanete y haz que tu experiencia de movilidad  ",r.a.createElement("br",null),"hacia la U sea mucho m\xe1s agradable"))),r.a.createElement("div",{className:"heading"},r.a.createElement("p",null,"\xa1",r.a.createElement("a",{href:"/register"},"Reg\xedstrate"),", Crea rutas de Wheels o \xdanete a otra rutas!")))))},N=t(9),k=(t(54),t(10)),O=t.n(k),j=t(11),w=t.n(j);var y=function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)(""),s=Object(m.a)(o,2),i=s[0],u=s[1],d=Object(n.useState)(""),g=Object(m.a)(d,2),E=g[0],h=g[1],f=Object(p.e)();return e.cookies.cookies.wheelsToken?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container heading"},r.a.createElement("h1",null,"Bienvenido ",e.allCookies.wheelsUser.uid," "),r.a.createElement("div",{className:"row heading"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{onClick:function(){f.push("/crearRuta")},className:"btn yellow-black"},"Crear ruta de Wheels"),r.a.createElement("img",{className:"wheels",src:w.a})),r.a.createElement("div",{className:"col"},c?r.a.createElement("form",{className:"form",onSubmit:function(){console.log(E,i),f.push("/rutasDisponibles")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"origen"},"\xbfDe d\xf3nde sales?"),r.a.createElement("input",{required:!0,type:"text",className:"form-control",id:"origen",onChange:function(e){return h(e.target.value)},placeholder:"Ingresa el origen"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"destino"},"\xbfA d\xf3nde te diriges?"),r.a.createElement("input",{required:!0,type:"text",className:"form-control",id:"destino",onChange:function(e){return u(e.target.value)},placeholder:"Ingresa tu destino"})),r.a.createElement("button",{type:"submit",className:"btn yellow-black"},"Buscar")):r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){l(!0)},className:"btn yellow-black"},"Unirse a ruta de Wheels"),r.a.createElement("img",{className:"wheels",src:O.a})))))):r.a.createElement("div",{className:"App heading"},r.a.createElement("h2",null,"Redir\xedgete a ",r.a.createElement("a",{href:"/"}," la p\xe1gina principal"),". ",r.a.createElement("br",null)," Debes iniciar sesi\xf3n para usar el contenido de Wheels Uniandes"))},C=(t(55),t(32)),S=t(33),x=t(35),T=t(34),A=t(36),U=t(17),D={width:"100%",height:"16rem"};t(26).config();var I=function(e){function a(e){var t;return Object(C.a)(this,a),(t=Object(x.a)(this,Object(T.a)(a).call(this,e))).state={activeMarker:{},selectedPlace:{}},t.onMarkerClick=function(e,a,n){return t.setState({selectedPlace:e,activeMarker:a})},t}return Object(A.a)(a,e),Object(S.a)(a,[{key:"render",value:function(){return r.a.createElement(U.Map,{google:this.props.google,zoom:18,style:D,initialCenter:{lat:this.props.lat,lng:this.props.lng}},r.a.createElement(U.Marker,{onClick:this.onMarkerClick}))}}]),a}(n.Component),F=Object(U.GoogleApiWrapper)({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_GOOGLE_MAPS_API_KEY})(I);t(72);var q=function(e){var a=Object(n.useState)(""),c=Object(m.a)(a,2),l=(c[0],c[1],Object(n.useState)("")),o=Object(m.a)(l,2),u=(o[0],o[1],Object(n.useState)(0)),d=Object(m.a)(u,2),g=(d[0],d[1],Object(n.useState)("")),E=Object(m.a)(g,2),h=E[0],f=E[1],b=Object(n.useState)(""),v=Object(m.a)(b,2),N=v[0],k=v[1],O=Object(n.useState)(""),j=Object(m.a)(O,2),w=j[0],y=j[1],C=Object(n.useState)(0),S=Object(m.a)(C,2),x=S[0],T=S[1],A=Object(n.useState)(0),U=Object(m.a)(A,2),D=U[0],I=U[1],q=Object(n.useState)(0),R=Object(m.a)(q,2),J=R[0],P=R[1],W=Object(n.useState)(0),M=Object(m.a)(W,2),B=M[0],L=M[1],z=Object(n.useState)(!1),_=Object(m.a)(z,2),G=_[0],K=_[1];function V(){alert("Vuelve a ingresar los datos para obtener mayor precisi\xf3n")}Object(p.e)(),t(26).config();var Y="http://localhost:3001";function H(){alert("wujuu"),$()}Z=new Date,"".concat(Z.getFullYear(),"-").concat(Z.getMonth()+1,"-").concat(Z.getDate());var Z,$=function(){Object(i.a)(s.a.mark((function a(){var t,n,r,c;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.cookies.get("wheelsUser"),n=JSON.stringify({usuarios:[],waypoints:[],initial:{lat:x,lng:D},destination:{lat:J,lng:B},comenzado:!1,terminado:!1,departureTime:null}),a.next=4,fetch("".concat(Y,"/services/crearServicio"),{method:"POST",body:n,headers:{Authorization:"Bearer ".concat(e.cookies.get("wheelsToken")),user:JSON.stringify(t),"Content-Type":"application/json"}});case 4:return r=a.sent,a.next=7,r.json();case 7:c=a.sent,console.log(c);case 9:case"end":return a.stop()}}),a)})))()},Q=function(){Object(i.a)(s.a.mark((function a(){var t,n,r,c,l,o;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.cookies.get("wheelsUser"),n=JSON.stringify({direccionInicio:h,direccionFin:N}),a.next=4,fetch("".concat(Y,"/services/confirmarServicio"),{method:"POST",body:n,headers:{Authorization:"Bearer ".concat(e.cookies.get("wheelsToken")),user:JSON.stringify(t),"Content-Type":"application/json"}});case 4:return r=a.sent,a.next=7,r.json();case 7:c=a.sent,console.log(c),l=c.resultadoInicio.results[0].geometry.location,o=c.resultadoFin.results[0].geometry.location,console.log(l,o),T(l.lat),I(l.lng),P(o.lat),L(o.lng),console.log("origen",x,D),console.log("destino",J,B),K(!0);case 19:case"end":return a.stop()}}),a)})))()};return e.cookies.cookies.wheelsToken?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container heading"},r.a.createElement("h1",null,"Crea una nueva ruta, ",e.allCookies.wheelsUser.uid," "),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-2 col-md-2 col-lg-3"}),r.a.createElement("div",{className:"col-sm-8 col-md-8 col-lg-6"},r.a.createElement("form",{className:"form heading",onSubmit:function(e){e.preventDefault(),K(!1),console.log(h,N,w),Q()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"origen"},"Origen de tu ruta"),r.a.createElement("input",{required:!0,type:"text",className:"form-control",id:"origen",onChange:function(e){return f(e.target.value)},placeholder:"Ingresa desde d\xf3nde sales"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"destino"},"Destino de tu ruta"),r.a.createElement("input",{required:!0,type:"text",className:"form-control",id:"destino",onChange:function(e){return k(e.target.value)},placeholder:"Ingresa cu\xe1l es tu destino"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"hora"},"Hora de salida"),r.a.createElement("input",{required:!0,type:"text",pattern:"([01]?[0-9]|2[0-3]):[0-5][0-9]",className:"form-control",id:"hora",onChange:function(e){return y(e.target.value)},placeholder:"Ingresa a qu\xe9 hora sales Ej. 14:00"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"carro"},"Elige el carro de esta ruta"),r.a.createElement("select",{required:!0,className:"form-control",id:"carro",placeholder:"Elige el carro"},r.a.createElement("option",null,"Elige uno de tus carros"),e.carros&&e.carros.length>0?e.carros.map((function(e){return r.a.createElement("option",{value:e.placas},e.marca," ",e.linea," de placas ",e.placas)})):r.a.createElement("div",null))),r.a.createElement("button",{type:"submit",className:"btn yellow-black"},"Crear ruta")),G?r.a.createElement("div",{className:"row maps heading"},r.a.createElement("div",{className:"col-6 origen"},"\xbfEs correcto el ",r.a.createElement("i",null,"origen"),"?",r.a.createElement("br",null),r.a.createElement("button",{onClick:H,className:"btn yellow"},"S\xed"),r.a.createElement("button",{onClick:V,className:"btn yellow"},"No"),r.a.createElement(F,{lat:x,lng:D})),r.a.createElement("div",{className:"col-6 destino"},"\xbfEs correcto el ",r.a.createElement("i",null,"destino"),"?",r.a.createElement("br",null),r.a.createElement("button",{onClick:H,className:"btn yellow"},"S\xed"),r.a.createElement("button",{onClick:V,className:"btn yellow"},"No"),r.a.createElement(F,{lat:J,lng:B}))):r.a.createElement("div",null)),r.a.createElement("div",{className:"col-sm-2 col-md-2 col-lg-3"})),"        ")):r.a.createElement("div",{className:"App heading"},r.a.createElement("h2",null,"Redir\xedgete a ",r.a.createElement("a",{href:"/"}," la p\xe1gina principal"),". ",r.a.createElement("br",null)," Debes iniciar sesi\xf3n para usar el contenido de Wheels Uniandes"))},R=t(16);t(28);var J=function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)(""),u=Object(m.a)(o,2),d=u[0],p=u[1],g=Object(n.useState)(""),E=Object(m.a)(g,2),h=E[0],f=E[1],b=Object(n.useState)(""),v=Object(m.a)(b,2),N=v[0],k=v[1],O=Object(n.useState)(0),j=Object(m.a)(O,2),w=j[0],y=j[1],C={uid:JSON.parse(e.cookies.cookies.wheelsUser).uid,carro:{marca:c,linea:d,placas:h,color:N,cupos:w}},S=function(){Object(i.a)(s.a.mark((function a(){var t,n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.cookies.get("wheelsUser"),a.next=3,fetch("".concat("http://localhost:3001","/cars/agregarcarro"),{method:"POST",body:JSON.stringify(C),headers:{Authorization:"Bearer ".concat(e.cookies.get("wheelsToken")),user:JSON.stringify(t),"Content-Type":"application/json"}});case 3:return n=a.sent,a.next=6,n.json();case 6:a.sent;case 7:case"end":return a.stop()}}),a)})))()};return e.cookies.cookies.wheelsToken?r.a.createElement("form",{className:"form ",onSubmit:function(e){e.preventDefault(),S()}},r.a.createElement("h1",null,"A\xf1adir nuevo carro "),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"marca"},"Marca de tu carro"),r.a.createElement("input",{required:!0,type:"text",className:"form-control",id:"marca",onChange:function(e){return l(e.target.value)},placeholder:"Ingresa la marca Ej. Mazda"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"linea"},"Linea de tu carro"),r.a.createElement("input",{required:!0,type:"text",className:"form-control",id:"linea",onChange:function(e){return p(e.target.value)},placeholder:"Ingresa la l\xednea Ej. 3 Touring"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"placas"},"Placas de tu carro"),r.a.createElement("input",{required:!0,type:"text",pattern:"[A-Z]{3}[-][0-9]{3}",className:"form-control",id:"placas",onChange:function(e){return f(e.target.value)},placeholder:"Ingresa las placas Ej. AAA-123"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"color"},"Color de tu carro"),r.a.createElement("input",{required:!0,type:"text",className:"form-control",id:"color",onChange:function(e){return k(e.target.value)},placeholder:"Ingresa el color"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"cupos"},"Cupos"),r.a.createElement("input",{required:!0,type:"number",min:"2",max:"9",className:"form-control",id:"cupos",onChange:function(e){return y(e.target.value)},placeholder:"Ingresa cantidad de pasajeros"})),r.a.createElement("button",{type:"submit",className:"btn yellow-black"},"Agregar carro")):r.a.createElement("div",{className:"App heading"},r.a.createElement("h2",null,"Redir\xedgete a ",r.a.createElement("a",{href:"/"}," la p\xe1gina principal"),". ",r.a.createElement("br",null)," Debes iniciar sesi\xf3n para usar el contenido de Wheels Uniandes"))};var P=function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),c=t[0],l=t[1];return e.cookies.cookies.wheelsToken?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container heading"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-5 col-lg-5"},r.a.createElement("h1",null,"Tus carros, ",e.allCookies.wheelsUser.uid," "),e.carros.length>0?e.carros.map((function(e){return r.a.createElement("p",{key:e.placas},e.marca," ",e.linea," de placas ",r.a.createElement("strong",null,e.placas))})):r.a.createElement("p",null,"A\xfan no tienes carros :(")),r.a.createElement("div",{className:" col-md-2 col-lg-2"}),r.a.createElement("div",{className:"col-sm-12 col-md-5 col-lg-5 "},c?r.a.createElement(J,e):r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){l(!0)},className:"btn yellow-black"},"Agregar carro")),r.a.createElement("div",{className:"App"},r.a.createElement("img",{className:"wheels-2",src:O.a}))))))):r.a.createElement("div",{className:"App heading"},r.a.createElement("h2",null,"Redir\xedgete a ",r.a.createElement("a",{href:"/"}," la p\xe1gina principal"),". ",r.a.createElement("br",null)," Debes iniciar sesi\xf3n para usar el contenido de Wheels Uniandes"))};t(78);var W=function(e){return e.cookies.cookies.wheelsToken?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container heading"},r.a.createElement("h1",null,"Rutas disponibles para t\xed, ",e.allCookies.wheelsUser.uid," "),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-2 col-md-2 col-lg-3"}),r.a.createElement("div",{className:"col-sm-8 col-md-8 col-lg-6 heading"},r.a.createElement("p",null,"Ruta #1"),r.a.createElement("p",null,"Ruta #2"),r.a.createElement("p",null,"Ruta #3"),r.a.createElement("p",null,"Ruta #4")),r.a.createElement("div",{className:"col-sm-2 col-md-2 col-lg-3"})),"        ")):r.a.createElement("div",{className:"App heading"},r.a.createElement("h2",null,"Redir\xedgete a ",r.a.createElement("a",{href:"/"}," la p\xe1gina principal"),". ",r.a.createElement("br",null)," Debes iniciar sesi\xf3n para usar el contenido de Wheels Uniandes"))};var M=Object(R.b)((function(e){var a=Object(n.useState)(null),t=Object(m.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)([]),u=Object(m.a)(o,2),d=u[0],h=u[1],f=function(a,t){e.cookies.set("wheelsToken",a,{path:"/"}),e.cookies.set("wheelsUser",{uid:t})},k=function(a){a.preventDefault(),e.cookies.set("wheelsUser",""),e.cookies.set("wheelsToken","")},O=function(){var a=JSON.parse(e.cookies.cookies.wheelsUser),t=new WebSocket("ws://localhost:3001/");t.onopen=function(){t.send(a.uid)},t.onmessage=function(e){if(e.data.includes("cars#")){var a=e.data.split("#")[1],t=JSON.parse(a);h(t)}},t.onclose=function(){console.log("se fue pap\xe1")},l(t),function(e,a){Object(i.a)(s.a.mark((function t(){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("http://localhost:3001","/cars/").concat(e.uid),{method:"GET",headers:{Authorization:"Bearer ".concat(a),user:JSON.stringify(e),"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,console.log(r),h(r);case 8:case"end":return t.stop()}}),t)})))()}(JSON.parse(e.cookies.cookies.wheelsUser),e.cookies.cookies.wheelsToken)};return r.a.createElement(N.a,null,r.a.createElement(p.a,{path:"/",render:function(){return r.a.createElement(g,Object.assign({},e,{signout:k,wsConnection:c}))}}),r.a.createElement(p.a,{path:"/",component:v,exact:!0}),r.a.createElement(p.a,{path:"/register",render:function(){return r.a.createElement(b,Object.assign({},e,{funcionCookie:f,signout:k,wsConn:O}))}}),r.a.createElement(p.a,{path:"/login",render:function(){return r.a.createElement(E,Object.assign({},e,{funcionCookie:f,wsConn:O}))}}),r.a.createElement(p.a,{path:"/ppalLog",render:function(){return r.a.createElement(y,e)}}),r.a.createElement(p.a,{path:"/crearRuta",render:function(){return r.a.createElement(q,Object.assign({},e,{carros:d}))}}),r.a.createElement(p.a,{path:"/misCarros",render:function(){return r.a.createElement(P,Object.assign({},e,{carros:d}))}}),r.a.createElement(p.a,{path:"/rutasDisponibles",render:function(){return r.a.createElement(W,Object.assign({},e,{carros:d}))}}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(R.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.acaea938.chunk.js.map