webpackJsonp([0],{0:function(e,t){},"CPF/":function(e,t){},DAkq:function(e,t){},"DP+P":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("h1",[this._v(this._s(this.title))])])},staticRenderFns:[]};var o=n("VU/8")({name:"Header",data:function(){return{title:"Third Vue CLI Project By Shenke"}},props:{},components:{},methods:{},computed:{},watch:{}},s,!1,function(e){n("DP+P")},"data-v-0bae2fe5",null).exports,a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("p",[this._v(this._s(this.copyright))])])},staticRenderFns:[]};var i=n("VU/8")({name:"Footer",data:function(){return{copyright:"Copyright 2019 shenke"}},props:{},components:{},methods:{},computed:{},watch:{}},a,!1,function(e){n("Nn/T")},"data-v-350ab056",null).exports,u={name:"Users",data:function(){return{}},props:{users:{type:Array}},components:{},methods:{toHello:function(e,t){this.$router.push({path:"/helloworld",query:{index:e,username:t}})}},computed:{},watch:{}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"users"},[n("ul",e._l(e.users,function(t,r){return n("li",{key:r,on:{click:function(n){return e.toHello(r,t.name)}}},[n("h2",[e._v(e._s(t.name))]),e._v(" "),n("h2",[e._v(e._s(t.email))])])}),0)])},staticRenderFns:[]};var l={name:"Home",data:function(){return{users:[]}},props:{},components:{Header:o,Users:n("VU/8")(u,c,!1,function(e){n("PFt9")},"data-v-4472a064",null).exports,Footer:i},methods:{},computed:{},watch:{},created:function(){var e=this;this.$http.get("http://jsonplaceholder.typicode.com/users").then(function(t){console.log(t),200==t.status?e.users=t.data:alert("错误")})}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home"},[t("Header"),this._v(" "),t("Users",{attrs:{users:this.users}}),this._v(" "),t("Footer")],1)},staticRenderFns:[]};var d=n("VU/8")(l,h,!1,function(e){n("DAkq")},"data-v-28d05ca6",null).exports,p={name:"App",components:{Home:d},comments:{}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:"Home"}},[t("router-view")],1)],1)},staticRenderFns:[]};var f=n("VU/8")(p,m,!1,function(e){n("UETR")},null,null).exports,v=n("/ocq"),_={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"hello"}},[this._v("\n  helloworld, 第"+this._s(this.index+1)+"位用户："+this._s(this.username)+"\n")])},staticRenderFns:[]};var F=n("VU/8")({name:"HelloWorld",data:function(){return{index:-1,username:""}},mounted:function(){this.index=this.$route.query.index,this.username=this.$route.query.username}},_,!1,function(e){n("CPF/")},"data-v-dc63366e",null).exports;r.a.use(v.a);var w=new v.a({routes:[{path:"/",component:d},{path:"/helloworld",name:"helloworld",component:F}]}),y=n("8+8L");r.a.config.productionTip=!1,r.a.use(y.a),new r.a({el:"#app",router:w,components:{App:f},template:"<App/>"})},"Nn/T":function(e,t){},PFt9:function(e,t){},UETR:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6500df8b1564b4f44d7a.js.map