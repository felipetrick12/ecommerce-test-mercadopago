(this.webpackJsonpeccomerce=this.webpackJsonpeccomerce||[]).push([[0],{44:function(e,a,c){},65:function(e,a,c){},66:function(e,a,c){},67:function(e,a,c){},68:function(e,a,c){"use strict";c.r(a);var t=c(1),i=c.n(t),r=c(29),n=c.n(r),o=c(11),s=c(3),l=[{id:"1",name_product:"Celular Samsung Galaxy",description:"Dispositivo movil tienda e-commerce",url:"https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/7/7/7707222708150_1.jpg",cantidad:"1",precio:"400.000",numero_orden:"duvanli@hotmail.es"},{id:"2",name_product:"Celular XIAMO REDMI NOTE 8",description:"Dispositivo movil tienda e-commerce",url:"https://exitocol.vtexassets.com/arquivos/ids/5554413/Celular-Xiaomi-Redmi-Note-8-Pro-64Gb-Azul-1687857_a.jpg?v=637463332257270000",cantidad:"1",precio:"180.000",numero_orden:"duvanli@hotmail.es"},{id:"3",name_product:"Celular MOTOROLA One Fusion 128GB Verde - Dark Esmerald",description:"Dispositivo movil tienda e-commerce",url:"https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/8/4/840023208546_001_1.jpg",cantidad:"1",precio:"280.000",numero_orden:"duvanli@hotmail.es"},{id:"4",name_product:"iPhone 12 mini 64 GB Negro",description:"Dispositivo movil tienda e-commerce",url:"https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/1/9/194252013069_001.jpg",cantidad:"1",precio:"3.600.000",numero_orden:"duvanli@hotmail.es"},{id:"5",name_product:"Celular vivo Y50 - 128GB Negro - Starry Black",description:"Dispositivo movil tienda e-commerce",url:"https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/_/0/_0004_6935117823485_1.jpg",cantidad:"1",precio:"508.000",numero_orden:"duvanli@hotmail.es"},{id:"6",name_product:"Celular vivo Y11S 32GB Negro",description:"Dispositivo movil tienda e-commerce",url:"https://i.blogs.es/96aaad/1620-vivo-y11s-3-32gb-phantom-black-libre-mejor-precio/original.jpeg",cantidad:"1",precio:"420.800",numero_orden:"duvanli@hotmail.es"},{id:"7",name_product:"Celular SAMSUNG Galaxy A12 64GB Azul",description:"Dispositivo movil tienda e-commerce",url:"https://falabella.scene7.com/is/image/FalabellaCO/12042823_2?wid=800&hei=800&qlt=70",cantidad:"1",precio:"422.000",numero_orden:"duvanli@hotmail.es"},{id:"8",name_product:"Celular SAMSUNG Galaxy A02S 64GB Azul",description:"Dispositivo movil tienda e-commerce",url:"https://falabella.scene7.com/is/image/FalabellaCO/12786047_1?wid=800&hei=800&qlt=70",cantidad:"1",precio:"360.000",numero_orden:"duvanli@hotmail.es"}],d=c(0),m=function(e){var a=e.phone,c=a.id,t=a.name_product,i=a.description,r=a.url,n=a.cantidad,s=a.precio;return Object(d.jsxs)("div",{className:"card mt-2",style:{width:"18rem"},children:[Object(d.jsx)("img",{src:r,className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:t}),Object(d.jsx)("p",{className:"card-text",children:i})]}),Object(d.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(d.jsxs)("li",{className:"list-group-item",children:["Cantidad: ",n]}),Object(d.jsxs)("li",{className:"list-group-item",children:["Precio: ",s]})]}),Object(d.jsx)("div",{className:"card-body"}),Object(d.jsx)(o.b,{className:"btn btn-block btn-primary text-white mb-2",to:"/detail/".concat(c),children:"Comprar"})]})},p=(c(44),function(){var e=l;return Object(d.jsx)("div",{className:"row mt-4 mb-2",children:e.map((function(e){return Object(d.jsx)(m,{phone:e},e.id)}))})}),h=c(31),u=c(34),j=c(18),b=c.n(j),x=c(32),g=c(33),v=c.n(g).a.create({baseURL:"https://felipetrick12-ecommerce-mp.herokuapp.com"}),f=c(10),O=c.n(f),_=(c(65),function(){var e=Object(x.a)(b.a.mark((function e(a,c){var t,i,r,n,o,s,l,d,m,p;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.id,i=a.name_product,r=a.description,n=a.url,o=a.cantidad,s=a.precio,l=s.split(".",3),d=l.join(""),e.prev=3,e.next=6,v.post("/api/products",{id:t,name_product:i,description:r,url:n,cantidad:parseInt(o),precio:parseInt(d)});case 6:if(m=e.sent,p=m.data.producto.body.init_point,!m){e.next=12;break}window.location.href=p,e.next=13;break;case 12:return e.abrupt("return",null);case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0),O.a.fire("Error","El producto no se agrego","error");case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(a,c){return e.apply(this,arguments)}}()),y=(c(66),function(e){var a=e.history,c=Object(s.g)();Object(t.useEffect)((function(){var e=new URLSearchParams(c.search).get("collection_status");void 0===e?console.log("no hay pagos"):"approved"===e?(console.log("pago aprovado"),O.a.fire({title:"Exitoso",icon:"success",cancelButtonText:!1,confirmButtonText:"Aceptar",html:"\n          <h4> Tipo de pago: ".concat(new URLSearchParams(c.search).get("payment_type")," </h4>\n          <h4> Email dev: ").concat(new URLSearchParams(c.search).get("external_reference")," </h4>\n          <h4> ID_Pago: ").concat(new URLSearchParams(c.search).get("payment_id")," </h4>\n        ")})):"pending"===e||"in_process"===e?O.a.fire({title:"Pago Pendiente",icon:"info",cancelButtonText:!1,confirmButtonText:"Aceptar",html:"\n          <h4> Tipo de pago: ".concat(new URLSearchParams(c.search).get("payment_type")," </h4>\n          <h4> Email dev: ").concat(new URLSearchParams(c.search).get("external_reference")," </h4>\n          <h4> ID_Pago: ").concat(new URLSearchParams(c.search).get("payment_id")," </h4>\n        ")}):"failure"===e&&O.a.fire({title:"Hubo un fallo en el pago, Reintentelo",icon:"error",cancelButtonText:!1,confirmButtonText:"Aceptar",html:"\n          <h4> Tipo de pago: ".concat(new URLSearchParams(c.search).get("payment_type")," </h4>\n          <h4> Email dev: ").concat(new URLSearchParams(c.search).get("external_reference")," </h4>\n          <h4> ID_Pago: ").concat(new URLSearchParams(c.search).get("payment_id")," </h4>\n        ")})}),[c.state,c.search]);var i=function(e){return l.find((function(a){return a.id===e}))}(Object(s.h)().id),r=i.name_product,n=i.description,o=i.url,m=i.cantidad,p=i.precio;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container ",children:[Object(d.jsxs)("div",{className:"icon",children:[Object(d.jsx)("h1",{className:"my-4",style:{fontFamily:"georgia"},children:"Producto Seleccionado"}),Object(d.jsx)(h.a,{className:"my-4",icon:u.a,onClick:function(){a.goBack()},style:{fontSize:35}})]}),Object(d.jsx)("div",{className:"card mb-3",children:Object(d.jsxs)("div",{className:"row g-0",children:[Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("img",{src:o,className:"card-img m-2  animate__animated animate__fadeInLeft",alt:r})}),Object(d.jsx)("div",{className:"col-md-8 col-sm-12",children:Object(d.jsxs)("div",{className:"card-body ",style:{fontFamily:"georgia"},children:[Object(d.jsx)("h5",{className:"card-title mx-5",style:{fontSize:50},children:r}),Object(d.jsxs)("p",{className:"card-text mx-5 my-3",style:{fontSize:25},children:[Object(d.jsx)("strong",{children:"Descripcion:"})," ",n]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("p",{className:"card-text mx-5 my-3",style:{fontSize:25},children:[Object(d.jsx)("strong",{children:" Cantidad: "})," ",m]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("p",{className:"card-text mx-5 my-3",style:{fontSize:25},children:["Precio: ",p]}),Object(d.jsx)("hr",{}),Object(d.jsx)("button",{onClick:function(){_(i,a)},className:"btn btn-primary btn-lg mx-5 my-1",children:"Pagar"})]})})]})})]})})}),N=(c(67),c.p+"static/media/music-audio-alp-201709.a920421b.bin"),w=function(){return Object(d.jsx)("div",{className:"pd-billboard pd-category-header",children:Object(d.jsxs)("div",{className:"pd-l-plate-scale",children:[Object(d.jsx)("div",{className:"pd-billboard-background",children:Object(d.jsx)("img",{src:N,alt:"",width:"1440",height:"200",className:"pd-billboard-hero ir"})}),Object(d.jsx)("div",{className:"pd-billboard-info",children:Object(d.jsx)("h1",{className:"pd-billboard-header pd-util-compact-small-18",children:"Tienda e-commerce"})})]})})};function S(){return Object(d.jsx)(o.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(w,{}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{exact:!0,path:"/detail/:id",component:y}),Object(d.jsx)(s.b,{exact:!0,path:"/",component:p}),Object(d.jsx)(s.a,{to:"/"})]})]})})}var P=function(){return Object(d.jsx)(S,{})};n.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.ac8c384c.chunk.js.map