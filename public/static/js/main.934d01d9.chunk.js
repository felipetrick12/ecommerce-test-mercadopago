(this.webpackJsonpeccomerce=this.webpackJsonpeccomerce||[]).push([[0],{44:function(e,a,c){},65:function(e,a,c){},66:function(e,a,c){},67:function(e,a,c){},68:function(e,a,c){"use strict";c.r(a);var i=c(1),t=c.n(i),r=c(28),o=c.n(r),s=c(12),n=c(3),d=[{id:"1",name_product:"Celular Samsung Galaxy",description:"Dispositivo movil tienda e-commerce",url:"https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/7/7/7707222708150_1.jpg",cantidad:"1",precio:"400.000",numero_orden:"duvanli@hotmail.es"},{id:"2",name_product:"Celular XIAMO REDMI NOTE 8",description:"Dispositivo movil tienda e-commerce",url:"https://exitocol.vtexassets.com/arquivos/ids/5554413/Celular-Xiaomi-Redmi-Note-8-Pro-64Gb-Azul-1687857_a.jpg?v=637463332257270000",cantidad:"1",precio:"180.000",numero_orden:"duvanli@hotmail.es"},{id:"3",name_product:"Celular MOTOROLA One Fusion 128GB Verde - Dark Esmerald",description:"Dispositivo movil tienda e-commerce",url:"https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/8/4/840023208546_001_1.jpg",cantidad:"1",precio:"280.000",numero_orden:"duvanli@hotmail.es"},{id:"4",name_product:"iPhone 12 mini 64 GB Negro",description:"Dispositivo movil tienda e-commerce",url:"https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/1/9/194252013069_001.jpg",cantidad:"1",precio:"3.600.000",numero_orden:"duvanli@hotmail.es"},{id:"5",name_product:"Celular vivo Y50 - 128GB Negro - Starry Black",description:"Dispositivo movil tienda e-commerce",url:"https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/_/0/_0004_6935117823485_1.jpg",cantidad:"1",precio:"508.000",numero_orden:"duvanli@hotmail.es"},{id:"6",name_product:"Celular vivo Y11S 32GB Negro",description:"Dispositivo movil tienda e-commerce",url:"https://i.blogs.es/96aaad/1620-vivo-y11s-3-32gb-phantom-black-libre-mejor-precio/original.jpeg",cantidad:"1",precio:"420.800",numero_orden:"duvanli@hotmail.es"},{id:"7",name_product:"Celular SAMSUNG Galaxy A12 64GB Azul",description:"Dispositivo movil tienda e-commerce",url:"https://falabella.scene7.com/is/image/FalabellaCO/12042823_2?wid=800&hei=800&qlt=70",cantidad:"1",precio:"422.000",numero_orden:"duvanli@hotmail.es"},{id:"8",name_product:"Celular SAMSUNG Galaxy A02S 64GB Azul",description:"Dispositivo movil tienda e-commerce",url:"https://falabella.scene7.com/is/image/FalabellaCO/12786047_1?wid=800&hei=800&qlt=70",cantidad:"1",precio:"360.000",numero_orden:"duvanli@hotmail.es"}],l=c(0),m=function(e){var a=e.phone,c=a.id,i=a.name_product,t=a.description,r=a.url,o=a.cantidad,n=a.precio;return Object(l.jsxs)("div",{className:"card mt-2",style:{width:"18rem"},children:[Object(l.jsx)("img",{src:r,className:"card-img-top",alt:"..."}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:i}),Object(l.jsx)("p",{className:"card-text",children:t})]}),Object(l.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(l.jsxs)("li",{className:"list-group-item",children:["Cantidad: ",o]}),Object(l.jsxs)("li",{className:"list-group-item",children:["Precio: ",n]})]}),Object(l.jsx)("div",{className:"card-body"}),Object(l.jsx)(s.b,{className:"btn btn-block btn-primary text-white mb-2",to:"/detail/".concat(c),children:"Comprar"})]})},p=(c(44),function(){var e=d;return Object(l.jsx)("div",{className:"row mt-4 mb-2",children:e.map((function(e){return Object(l.jsx)(m,{phone:e},e.id)}))})}),u=c(30),j=c(34),b=c(17),h=c.n(b),x=c(31),v=c(32),O=c.n(v).a.create({baseURL:"https://felipetrick12-ecommerce-mp.herokuapp.com"}),g=c(33),f=c.n(g),N=(c(65),function(){var e=Object(x.a)(h.a.mark((function e(a,c){var i,t,r,o,s,n,d,l,m,p;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.id,t=a.name_product,r=a.description,o=a.url,s=a.cantidad,n=a.precio,d=n.split(".",3),l=d.join(""),e.prev=3,e.next=6,O.post("/api/products",{id:i,name_product:t,description:r,url:o,cantidad:parseInt(s),precio:parseInt(l)});case 6:if(m=e.sent,p=m.data.producto.body.init_point,!m){e.next=12;break}window.location.href=p,e.next=13;break;case 12:return e.abrupt("return",null);case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0),f.a.fire("Error","El producto no se agrego","error");case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(a,c){return e.apply(this,arguments)}}()),_=(c(66),function(e){var a=e.history,c=function(e){return d.find((function(a){return a.id===e}))}(Object(n.g)().id),i=c.name_product,t=c.description,r=c.url,o=c.cantidad,s=c.precio;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container ",children:[Object(l.jsxs)("div",{className:"icon",children:[Object(l.jsx)("h1",{className:"my-4",style:{fontFamily:"georgia"},children:"Producto Seleccionado"}),Object(l.jsx)(u.a,{className:"my-4",icon:j.a,onClick:function(){a.goBack()},style:{fontSize:35}})]}),Object(l.jsx)("div",{className:"card mb-3",children:Object(l.jsxs)("div",{className:"row g-0",children:[Object(l.jsx)("div",{className:"col-md-4",children:Object(l.jsx)("img",{src:r,className:"card-img m-2  animate__animated animate__fadeInLeft",alt:i})}),Object(l.jsx)("div",{className:"col-md-8 col-sm-12",children:Object(l.jsxs)("div",{className:"card-body ",style:{fontFamily:"georgia"},children:[Object(l.jsx)("h5",{className:"card-title mx-5",style:{fontSize:50},children:i}),Object(l.jsxs)("p",{className:"card-text mx-5 my-3",style:{fontSize:25},children:[Object(l.jsx)("strong",{children:"Descripcion:"})," ",t]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("p",{className:"card-text mx-5 my-3",style:{fontSize:25},children:[Object(l.jsx)("strong",{children:" Cantidad: "})," ",o]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("p",{className:"card-text mx-5 my-3",style:{fontSize:25},children:["Precio: ",s]}),Object(l.jsx)("hr",{}),Object(l.jsx)("button",{onClick:function(){N(c,a)},className:"btn btn-primary btn-lg mx-5 my-1",children:"Pagar"})]})})]})})]})})}),y=(c(67),c.p+"static/media/music-audio-alp-201709.a920421b.bin"),k=function(){return Object(l.jsx)("div",{className:"pd-billboard pd-category-header",children:Object(l.jsxs)("div",{className:"pd-l-plate-scale",children:[Object(l.jsx)("div",{className:"pd-billboard-background",children:Object(l.jsx)("img",{src:y,alt:"",width:"1440",height:"200",className:"pd-billboard-hero ir"})}),Object(l.jsx)("div",{className:"pd-billboard-info",children:Object(l.jsx)("h1",{className:"pd-billboard-header pd-util-compact-small-18",children:"Tienda e-commerce"})})]})})};function w(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(k,{}),Object(l.jsxs)(n.d,{children:[Object(l.jsx)(n.b,{exact:!0,path:"/detail/:id",component:_}),Object(l.jsx)(n.b,{exact:!0,path:"/",component:p}),Object(l.jsx)(n.a,{to:"/"})]})]})})}var C=function(){return Object(l.jsx)(w,{})};o.a.render(Object(l.jsx)(t.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.934d01d9.chunk.js.map