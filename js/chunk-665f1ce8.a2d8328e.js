(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-665f1ce8"],{"686f":function(t,e,s){"use strict";var a=s("edd7"),r=s.n(a);r.a},a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center login",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[s("form",{staticClass:"form-signin"},[s("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("登入")]),s("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),s("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._m(0),s("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Sign in")]),s("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2017-2018")])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"checkbox mb-3"},[s("label",[s("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" Remember me\n      ")])])}],n={name:"HelloWorld",data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t="".concat("https://vue-course-api.herokuapp.com","/admin/signin"),e=this;this.$http.post(t,e.user).then(function(t){console.log(t.data),t.data.success&&e.$router.push("/admin/products")})}}},o=n,i=(s("686f"),s("2877")),u=Object(i["a"])(o,a,r,!1,null,"2345b878",null);e["default"]=u.exports},edd7:function(t,e,s){}}]);
//# sourceMappingURL=chunk-665f1ce8.a2d8328e.js.map