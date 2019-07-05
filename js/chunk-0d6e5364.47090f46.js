(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d6e5364"],{"20ce":function(t,e,a){},"2e94":function(t,e,a){},4848:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("Navber"),a("Alert"),a("div",{staticClass:"container content mt-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8"},[a("h2",{staticClass:"text-center"},[t._v("購物車內容")]),t._l(t.cart.carts,function(e){return a("ul",{key:e.id,staticClass:"cartList mt-4"},[a("li",[a("img",{staticClass:"cartList-img img-fluid",attrs:{src:e.product.imageUrl,alt:""}}),a("router-link",{attrs:{to:"/detailed/${item.id}"}},[t._v(t._s(e.product.title))]),a("p",{staticClass:"m-0"},[t._v(t._s(e.qty)+" "+t._s(e.product.unit)+" "+t._s(t._f("currency")(e.final_total)))]),a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button",disabled:t.isLoading},on:{click:function(a){return t.removeCartItem(e.id)}}},[a("i",{staticClass:"far fa-trash-alt"})])],1)])})],2),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"my-5 row justify-content-center"},[a("form",{staticClass:"px-4 w-100",on:{submit:function(e){return e.preventDefault(),t.createOrder(t.form)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useremail"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t.errors.has("email")?a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t.errors.has("name")?a("span",{staticClass:"text-danger"},[t._v("姓名必須輸入")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("tel")},attrs:{type:"tel",name:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t.errors.has("tel")?a("span",{staticClass:"text-danger"},[t._v("電話欄位不得留空")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("address")},attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t.errors.has("address")?a("span",{staticClass:"text-danger"},[t._v("地址欄位不得留空")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comment"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",staticStyle:{height:"67px"},attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),a("div",{staticClass:"input-group mb-3 input-group-sm"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return t.addCouponCode(t.coupon_code)}}},[t._v("\n                  套用優惠碼\n                ")])])]),a("div",{staticClass:"d-flex justify-content-between border mb-3 p-2"},[a("p",{staticClass:"m-0"},[t._v("小計")]),a("p",{staticClass:"m-0"},[t._v(t._s(t._f("currency")(t.cart.total)))])]),t.cart.final_total!==t.cart.total?a("div",{staticClass:"d-flex justify-content-between border border-success mb-3 p-2 text-success"},[a("p",{staticClass:"m-0"},[t._v("折扣價")]),a("p",{staticClass:"m-0"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])]):t._e(),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-danger",attrs:{disabled:t.isLoading}},[t._v("送出訂單")])])])])])])]),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("p",{staticClass:"text-center m-0"},[t._v("資料、圖片來源皆來自網路，僅用來做為學習用途。")])])}],o=a("cebc"),i=a("90b0"),n=a("56a6"),l=a("2f62"),c={name:"home",components:{Navber:i["a"],Alert:n["a"]},data:function(){return{coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:Object(o["a"])({createOrder:function(t){var e=this;this.$validator.validate().then(function(a){a?e.$store.dispatch("cartModules/createOrder",t):e.$store.dispatch("alertModules/updateMessage",{message:"欄位不完整",status:"danger"})})},addCouponCode:function(t){this.$store.dispatch("cartModules/addCouponCode",t),this.coupon_code=""},removeCartItem:function(t){this.$store.dispatch("cartModules/removeCartItem",t)}},Object(l["b"])("cartModules",["getCart"])),created:function(){this.getCart()},computed:Object(o["a"])({},Object(l["c"])(["isLoading"]),Object(l["c"])("cartModules",["cart"]))},d=c,u=(a("6f7c"),a("2877")),m=Object(u["a"])(d,s,r,!1,null,"45b3b105",null);e["default"]=m.exports},"6f7c":function(t,e,a){"use strict";var s=a("2e94"),r=a.n(s);r.a},"7f30":function(t,e,a){"use strict";var s=a("20ce"),r=a.n(s);r.a},"90b0":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top"},[a("div",{staticClass:"container"},[t._m(0),t._m(1),a("router-link",{staticClass:"px-2 d-s-none d-block order-lg-1 position-relative",attrs:{to:"/customer"}},[a("i",{staticClass:"fas fa-shopping-cart"}),a("span",{staticClass:"badge badge-pill badge-danger"},[t._v("\n          "+t._s(t.cart.carts.length)+"\n        ")])]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto align-items-center"},[a("li",{staticClass:"nav-item px-3"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/index"}},[t._v("首頁")])],1),a("li",{staticClass:"nav-item px-3"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/shopping"}},[t._v("商品列表")])],1),a("li",{staticClass:"nav-item mr-auto mb-0 d-none d-s-block"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/customer"}},[a("i",{staticClass:"fas fa-shopping-cart"})])],1)])])],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler p-0 border-0",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"logo mb-0 mx-auto"},[a("a",{staticClass:"text-hide",attrs:{href:"#/index"}},[t._v("logo")])])}],o=a("cebc"),i=a("2f62"),n={name:"Navbar",methods:Object(o["a"])({signout:function(){var t=this,e="".concat("https://vue-course-api.herokuapp.com","/logout");this.$http.post(e).then(function(e){console.log(e.data),e.data.success&&t.$router.push("/signin")})}},Object(i["b"])("cartModules",["getCart"])),computed:Object(o["a"])({},Object(i["c"])("cartModules",["cart"])),created:function(){this.getCart()}},l=n,c=(a("7f30"),a("2877")),d=Object(c["a"])(l,s,r,!1,null,"490d6753",null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-0d6e5364.47090f46.js.map