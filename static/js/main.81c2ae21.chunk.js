(this["webpackJsonpkabzda-1"]=this["webpackJsonpkabzda-1"]||[]).push([[0],{125:function(e,t,a){e.exports={appWrapper:"App_appWrapper__1nlbt"}},126:function(e,t,a){e.exports={mainProfile:"Profile_mainProfile__1CZHM"}},127:function(e,t,a){e.exports={myPosts:"MyPost_myPosts__2OVvj"}},129:function(e,t,a){e.exports={statbar:"Statbar_statbar__JbcRN"}},130:function(e,t,a){e.exports={ava:"Ava_ava__3WjLq"}},131:function(e,t,a){e.exports=a.p+"static/media/loading.665712cd.gif"},132:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__29buS"}},133:function(e,t,a){e.exports={mikufan:"Music_mikufan__1xEEJ"}},134:function(e,t,a){e.exports={mikufan:"News_mikufan__3bfiR"}},135:function(e,t,a){e.exports={mikufan:"Settings_mikufan__zMyh4"}},14:function(e,t,a){e.exports={mainmenu:"Sidebar_mainmenu__3FHr6",item:"Sidebar_item__36yEJ",active:"Sidebar_active__2sGR6"}},162:function(e,t,a){e.exports=a(287)},167:function(e,t,a){},18:function(e,t,a){e.exports={captchaOn:"Forms_captchaOn__2Phc3",captchaOff:"Forms_captchaOff__1gG6O",inlineCheckbox:"Forms_inlineCheckbox__2Mj6-",formError:"Forms_formError__2BGw3",error:"Forms_error__2F1ME",message:"Forms_message__379JR"}},20:function(e,t,a){e.exports={global:"Users_global__3AG3k",location:"Users_location__2VR-3",wrapper:"Users_wrapper__3Ofln",ava:"Users_ava__Hu3ZI",butt:"Users_butt__3AQ1d",avatar:"Users_avatar__3YJop",user:"Users_user__3LAlg",status:"Users_status__iYY0A",pages:"Users_pages__3r6Bq",currentPage:"Users_currentPage__2I_eB"}},22:function(e,t,a){e.exports={myHeader:"Header_myHeader__3JU4t",authUserInfo:"Header_authUserInfo__396Ki",showAdditionalUserData:"Header_showAdditionalUserData__2WNOk",hideAdditionalUserData:"Header_hideAdditionalUserData__1W5Mw",divider:"Header_divider__GHUhZ",currentUser:"Header_currentUser__3ml5G",quitButton:"Header_quitButton__1Hhow"}},287:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(58),c=a.n(s),i=(a(167),a(9)),o=a(6),l=a(81),u=a.n(l),m=a(123),d=a(30),f=a(124).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"3bc58a84-40c8-4e3a-b535-daa4561c95d1"}}),p=function(e,t){return f.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},E=function(e){return f.post("follow/".concat(e),{}).then((function(e){return e.data}))},g=function(e){return f.delete("follow/".concat(e)).then((function(e){return e.data}))},h=function(){return f.get("auth/me").then((function(e){return e.data}))},b=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;return f.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n}).then((function(e){return e.data}))},_=function(){return f.delete("auth/login").then((function(e){return e.data}))},v=function(){return f.get("security/get-captcha-url").then((function(e){return e.data}))},O=function(e){return f.get("profile/".concat(e)).then((function(e){return e.data}))},S=function(e){return f.get("profile/status/".concat(e)).then((function(e){return e.data}))},P=function(e){return f.put("profile/status",{status:e}).then((function(e){return e.data}))},j={users:[],pages:[],usersCount:0,pageSize:20,stepAside:4,currentPage:1,isFetch:!1,followUnfollowProgress:[]},U=function(e){return{type:"CHANGE_PAGE",currentPage:e}},N=function(e,t){return{type:"FOLLOW_UNFOLLOW_PROGRESS",progress:e,id:t}},w=function(e){return{type:"IS_FETCH_STATUS",isFetch:e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW_UNFOLLOW_PROGRESS":return Object(o.a)(Object(o.a)({},e),{},{followUnfollowProgress:t.progress?[].concat(Object(d.a)(e.followUnfollowProgress),[t.id]):Object(d.a)(e.followUnfollowProgress.filter((function(e){return e!==t.id})))});case"FOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case"SET_USERS_COUNT":return Object(o.a)(Object(o.a)({},e),{},{usersCount:t.usersCount});case"IS_FETCH_STATUS":return Object(o.a)(Object(o.a)({},e),{},{isFetch:t.isFetch});case"CHANGE_PAGE":var a=Object(o.a)({},e),n=Math.ceil(a.usersCount/a.pageSize);if(a.currentPage=t.currentPage,a.pages=Object(d.a)(e.pages),a.pages.length=0,a.currentPage>=1&&a.currentPage<=5)for(var r=1;r<10;r++)a.pages.push(r);else if(a.currentPage>=6&&a.currentPage<=n-a.stepAside)for(var s=a.currentPage-a.stepAside,c=a.currentPage+a.stepAside,i=s;i<=c;i++)a.pages.push(i);else if(a.currentPage>n-a.stepAside&&a.currentPage<=n)for(var l=n-2*a.stepAside;l<=n;l++)a.pages.push(l);else a.currentPage<=0||a.currentPage>n?alert("\u0422\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b."):alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0414\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e. \u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c");return a;default:return e}},y=a(27),C={id:null,email:null,authLogin:null,isAuthUser:!1,captcha:""},k=function(e,t,a,n){return{type:"SET_CURRENT_USER",authUserData:{id:e,email:t,authLogin:a,isAuthUser:n}}},F=function(){return function(e){return e(w(!0)),h().then((function(t){if(0===t.resultCode){var a=t.data,n=a.id,r=a.email,s=a.login;e(k(n,r,s,!0))}e(w(!1))}))}},x=function(){return function(e){v().then((function(t){e(function(e){return{type:"CAPTCHA",captcha:e}}(t.url))}))}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(o.a)(Object(o.a)({},e),t.authUserData);case"CAPTCHA":return Object(o.a)(Object(o.a)({},e),{},{captcha:t.captcha});default:return e}},L=a(40),D=a(22),M=a.n(D),I=a(11),R=function(e){var t=Object(n.useState)(M.a.hideAdditionalUserData),a=Object(L.a)(t,2),s=a[0],c=a[1];return r.a.createElement("header",{className:M.a.myHeader},r.a.createElement("div",{className:M.a.divider},r.a.createElement("img",{src:"https://say-hi.me/wp-content/uploads/2018/07/mozilla-logos-1.png",alt:"none"}),r.a.createElement("div",{className:M.a.currentUser},e.isAuthUser?r.a.createElement("div",{className:M.a.authUserInfo},r.a.createElement("div",{onMouseOver:function(){c(M.a.showAdditionalUserData)},onMouseOut:function(){c(M.a.hideAdditionalUserData)}},e.authLogin),r.a.createElement("span",{className:s,onMouseOver:function(){c(M.a.showAdditionalUserData)},onMouseOut:function(){c(M.a.hideAdditionalUserData)}},e.email),r.a.createElement("div",null,r.a.createElement("span",{className:M.a.quitButton,onClick:e.logout},"\u0432\u044b\u0445\u043e\u0434"))):r.a.createElement(I.c,{to:"/authentification"},"\u043b\u043e\u0433\u0438\u043d"))))},H=function(e){return e.auth.isAuthUser},W=Object(i.b)((function(e){return{authLogin:e.auth.authLogin,email:e.auth.email,isAuthUser:H(e)}}),{logoutFromSite:function(){return function(e){_().then((function(t){0===t.resultCode&&e(k(null,null,null,!1))}))}}})((function(e){var t=e.logoutFromSite,a=e.email,n=e.authLogin,s=e.isAuthUser;return r.a.createElement(R,{logout:t,email:a,authLogin:n,isAuthUser:s})})),G=a(125),z=a.n(G),J=a(14),B=a.n(J),Y=function(){return r.a.createElement("nav",{className:B.a.mainmenu},r.a.createElement("div",{className:B.a.item},r.a.createElement(I.c,{to:"/profile",activeClassName:B.a.active},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),r.a.createElement("div",{className:B.a.item},r.a.createElement(I.c,{to:"/dialogs",activeClassName:B.a.active},"\u0414\u0438\u0430\u043b\u043e\u0433\u0438")),r.a.createElement("div",{className:B.a.item},r.a.createElement(I.c,{to:"/news",activeClassName:B.a.active},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")),r.a.createElement("div",{className:B.a.item},r.a.createElement(I.c,{to:"/\u30df\u30af",activeClassName:B.a.active},"\u041c\u0443\u0437\u044b\u043a\u0430")),r.a.createElement("div",{className:B.a.item},r.a.createElement(I.c,{to:"/users",activeClassName:B.a.active},"\u041b\u0430\u043f\u043e\u0447\u043a\u0438 \u042e\u0437\u0435\u0440\u044b")),r.a.createElement("div",{className:B.a.item},r.a.createElement(I.c,{to:"/settings",activeClassName:B.a.active},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")))},q=a(34),V=a(126),K=a.n(V),Z=a(127),Q=a.n(Z),$=a(119),X=a(120),ee=a(4),te=a(18),ae=a.n(te),ne=function(e){var t=e.input,a=e.meta,n=Object(q.a)(e,["input","meta"]),s=a.touched&&a.error;return r.a.createElement("div",{className:s?ae.a.error:""},r.a.createElement("div",{className:ae.a.message},r.a.createElement("textarea",Object.assign({},t,n,{onKeyPress:function(e){"Enter"===e.key&&(n.addPost(),e.preventDefault())}}))),r.a.createElement("div",null,s&&r.a.createElement("span",{className:ae.a.error},a.error)))},re=function(e){var t=e.input,a=e.meta,n=Object(q.a)(e,["input","meta"]),s=a.touched&&a.error;return r.a.createElement("div",{className:s?ae.a.error:""},r.a.createElement("div",{className:ae.a.message},r.a.createElement("input",Object.assign({},t,n))),r.a.createElement("div",null,s&&r.a.createElement("span",{className:ae.a.error},a.error)))},se=function(e){if(!e)return"\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"},ce=function(e){if(!e)return"\u041f\u043e\u043b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},ie=function(e){if(!e)return"\u0421\u0442\u0430\u0442\u0443\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},oe=function(e){return function(t){if(t.length>e)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}},le=oe(300),ue=Object(ee.d)(Object(X.a)({form:"Posts"}))((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement($.a,{name:"postMessage",component:ne,validate:[ce,le]})),r.a.createElement("div",null,r.a.createElement("button",null,"\u0412\u043f\u0438\u0448\u0438 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u044e")))})),me=Object(ee.d)(Object(i.b)(null,{}))((function(e){return r.a.createElement("div",{className:Q.a.myPosts},r.a.createElement("div",null,e.posts.map((function(e){return r.a.createElement("div",null,r.a.createElement("div",null,e.text),r.a.createElement("span",null,"likes: ",e.likes))}))),r.a.createElement(ue,{onSubmit:function(t){e.addPost(t.postMessage)}}))})),de=a(129),fe=a.n(de),pe=function(){return r.a.createElement("div",{className:fe.a.statbar},r.a.createElement("img",{src:"https://benosey.com/wp-content/uploads/Header-sidebar/1000x200-3.png",alt:"nano"}))},Ee=a(62),ge=a.n(Ee),he=a(130),be=a.n(he),_e=Object(ee.d)(Object(i.b)((function(e){return{initialValues:{status:e.profilePage.status}}}),{}),Object(X.a)({form:"Status"}))((function(e){var t=e.handleSubmit,a=e.setEditorMode;return r.a.createElement("form",{onSubmit:t},r.a.createElement($.a,{name:"status",autoFocus:!0,component:re,validate:[ie]}),r.a.createElement("br",null),r.a.createElement("button",{type:"button",onClick:function(){a(!1)}},"\u041e\u0442\u043c\u0435\u043d\u0430"),r.a.createElement("button",null,"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"))})),ve=function(e){var t=e.setNewStatus,a=e.status,s=e.abilityToChangeProfile,c=Object(n.useState)(!1),i=Object(L.a)(c,2),o=i[0],l=i[1];return r.a.createElement("div",null,o?r.a.createElement(_e,{setEditorMode:l,onSubmit:function(e){t(e.status),l(!1)}}):r.a.createElement("span",{onDoubleClick:function(){l(!!s)}},a||"C\u0442\u0430\u0442\u0443\u0441 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d"))},Oe=function(e){var t=e.setNewStatus,a=e.status,n=e.photo,s=e.abilityToChangeProfile;return r.a.createElement("div",{className:be.a.ava},r.a.createElement("img",{src:null===n?ge.a:n,alt:"nani"}),r.a.createElement(ve,{setNewStatus:t,status:a,abilityToChangeProfile:s}))},Se=a(86),Pe=a.n(Se),je=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.info.lookingForAJob?Pe.a.seeker:Pe.a.pinkglass},r.a.createElement("div",null,"\u041e \u0441\u0435\u0431\u0435: ",null!==e.info.aboutMe?e.info.aboutMe:""),r.a.createElement("div",null,"\u041f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u044c \u0432 \u0440\u0430\u0431\u043e\u0442\u0435: ",e.info.lookingForAJob?"\u0414\u0430":"\u041d\u0435\u0442"),e.info.lookingForAJob?r.a.createElement("div",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0436\u0435\u043b\u0430\u0435\u043c\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b: ",e.info.lookingForAJobDescription):null))},Ue=a(131),Ne=a.n(Ue),we=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:Ne.a,alt:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}))},Ae=function(e){var t=e.profilePage,a=e.setNewStatus,n=e.addPost,s=e.abilityToChangeProfile;return r.a.createElement("div",{className:K.a.mainProfile},r.a.createElement(pe,null),null===t.profileInfo?r.a.createElement(we,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe,{setNewStatus:a,status:t.status,photo:t.profileInfo.photos.large,abilityToChangeProfile:s}),r.a.createElement(je,{info:t.profileInfo,abilityToChangeProfile:s}),r.a.createElement(me,{posts:t.posts,addPost:n})))},ye=a(10),Ce=function(e){return{isAuthUser:H(e)}},ke={posts:[{id:1,text:"\u521d\u97f3\u30df\u30af",likes:39},{id:2,text:"azazazazaaza",likes:10},{id:3,text:"nyao",likes:1024}],profileInfo:null,status:""},Fe=function(e){return{type:"SET_STATUS",status:e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:e.posts.length+1,text:t.postText,likes:0},n=Object(o.a)({},e);return n.posts=[].concat(Object(d.a)(e.posts),[a]),n;case"PROFILE_CHANGE":var r=Object(o.a)({},e);return r.profileInfo=t.info,r;case"SET_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});default:return e}},Te=Object(ee.d)(Object(i.b)((function(e){return{profilePage:e.profilePage,isFetch:e.usersPage.isFetch,userId:e.auth.id,status:e.profilePage.status}}),{setUserData:function(e){return function(t){t(w(!0)),O(e).then((function(e){t({type:"PROFILE_CHANGE",info:e}),t(w(!1))}))}},getUserStatus:function(e){return function(t){S(e).then((function(e){t(Fe(e))}))}},setNewStatus:function(e){return function(t){P(e).then((function(a){0===a.resultCode&&t(Fe(e))}))}},addPost:function(e){return{type:"ADD-POST",postText:e}}}),ye.f)((function(e){var t=e.match,a=e.getUserStatus,s=e.setUserData,c=e.userId,i=e.history,o=e.isFetch,l=Object(q.a)(e,["match","getUserStatus","setUserData","userId","history","isFetch"]),u=Object(n.useState)(!1),m=Object(L.a)(u,2),d=m[0],f=m[1];Object(n.useEffect)((function(){p(t.params.userId),t.params.userId&&t.params.userId!==c?(p(t.params.userId),f(!1)):(c||i.push("/authentification"),p(c),f(!0))}),[t.params.userId,c,i]);var p=function(e){a(e),s(e)};return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(we,null):r.a.createElement(Ae,Object.assign({},l,{abilityToChangeProfile:d}))," ")})),Le=a(132),De=a.n(Le),Me=a(87),Ie=a.n(Me),Re=function(e){var t=e.dialogsPage.map((function(e){return"01"===e.id||"0139"===e.id?r.a.createElement("div",{key:e.id,className:Ie.a.vocaloid},r.a.createElement(I.c,{to:"/dialogs/"+e.id},e.name)):r.a.createElement("div",{key:e.id,className:Ie.a.dialog},r.a.createElement(I.c,{to:"/dialogs/"+e.id},e.name))}));return r.a.createElement("div",null,t)},He=Object(i.b)((function(e){return{dialogsPage:e.dialogsPage.users}}))(Re),We=a(88),Ge=a.n(We),ze=oe(300),Je=Object(ee.d)(Object(X.a)({form:"Messages"}))((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement($.a,{name:"message",component:ne,validate:[ce,ze]}),r.a.createElement("div",null,r.a.createElement("button",null,"\u0411\u0430\u0442\u043e\u043d\u0447\u0438\u043a")))})),Be=function(e){var t=e.messages.map((function(e){return 1===e.id||4===e.id?r.a.createElement("div",{className:Ge.a.vocaloid},e.message):r.a.createElement("div",{className:Ge.a.message},e.message)}));return r.a.createElement("div",null,r.a.createElement("div",null,t),r.a.createElement(Je,{onSubmit:function(t){e.addMessage(t.message)}}))},Ye={users:[{id:"01",name:"Miku",group:"vocaloid"},{id:"0139",name:"Saya"},{id:"010",name:"Elli"},{id:"02",name:"Rin"},{id:"10",name:"AnonCos"}],messages:[{id:1,message:"Hey"},{id:2,message:"Yo"},{id:3,message:"Owww"},{id:4,message:"Sumimasen"},{id:5,message:"Hi"}]},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":var a={id:e.messages.length+1,message:t.message},n=Object(o.a)({},e);return n.messages=[].concat(Object(d.a)(e.messages),[a]),n;default:return e}},Ve=Object(i.b)((function(e){return{messages:e.dialogsPage.messages}}),{addMessage:function(e){return{type:"ADD_MESSAGE",message:e}}})(Be),Ke=function(e){return r.a.createElement("div",{className:De.a.dialogs},r.a.createElement(He,null),r.a.createElement(Ve,null))},Ze=a(133),Qe=a.n(Ze),$e=function(){return r.a.createElement("div",{className:Qe.a.mikufan},"Miku")},Xe=a(134),et=a.n(Xe),tt=function(){return r.a.createElement("div",{className:et.a.mikufan},"News39")},at=a(135),nt=a.n(at),rt=function(){return r.a.createElement("div",{className:nt.a.mikufan},"Setuper")},st=a(20),ct=a.n(st),it=function(e){return r.a.createElement("div",{className:ct.a.global},r.a.createElement("div",null,e.usersPage.pages.map((function(t){return t===e.usersPage.currentPage?r.a.createElement("span",{key:t,className:ct.a.currentPage},t):r.a.createElement("span",{className:ct.a.pages,onClick:function(){e.setUsersData(t)}},t)}))),r.a.createElement("div",null,e.usersPage.users.map((function(t){return r.a.createElement("div",{key:t.id,className:ct.a.wrapper},r.a.createElement("div",{className:ct.a.avatar},r.a.createElement("div",{className:ct.a.ava},r.a.createElement(I.c,{to:"profile/"+t.id},r.a.createElement("img",{src:null===t.photos.small?ge.a:t.photos.small,alt:"\u0410\u0432\u0443 \u0441\u044a\u0435\u043b \u043f\u043b\u043e\u0445\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442"}))),r.a.createElement("div",{className:ct.a.butt},t.followed?r.a.createElement("button",{disabled:e.usersPage.followUnfollowProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"):r.a.createElement("button",{disabled:e.usersPage.followUnfollowProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"))),r.a.createElement("div",{className:ct.a.user},r.a.createElement("div",{className:ct.a.userName},"fullNameShort(user.name, user.lastName)",t.name),r.a.createElement("div",{className:ct.a.status},t.status),r.a.createElement("div",{className:ct.a.location},r.a.createElement("p",null,"user.dislocation.country"),r.a.createElement("p",null,"user.dislocation.city"))))}))))},ot=Object(ee.d)(Object(i.b)((function(e){return{usersPage:e.usersPage}}),{setUsersData:function(e,t){return function(){var a=Object(m.a)(u.a.mark((function a(n){var r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(w(!0)),n(U(e)),a.next=4,p(e,t);case 4:r=a.sent,n({type:"SET_USERS",users:r.items}),n({type:"SET_USERS_COUNT",usersCount:r.totalCount}),n(w(!1));case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},setFollow:function(e){return function(t){t(N(!0,e)),E(e).then((function(a){0===a.resultCode?(t(function(e){return{type:"FOLLOW",id:e}}(e)),alert("\u0412\u044b \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c \u043d\u0430 "+e)):alert("\u041e\u0448\u0438\u0431\u043a\u0430"+a.messages),t(N(!1,e))}))}},setUnfollow:function(e){return function(t){t(N(!0,e)),g(e).then((function(a){0===a.resultCode?(t(function(e){return{type:"UNFOLLOW",id:e}}(e)),alert("\u0412\u044b \u043e\u0442\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c \u043e\u0442 "+e)):alert("\u041e\u0448\u0438\u0431\u043a\u0430"+a.messages),t(N(!1,e))}))}}}),(function(e){return Object(i.b)(Ce)((function(t){var a=t.isAuthUser,n=Object(q.a)(t,["isAuthUser"]);return a?r.a.createElement(e,n):r.a.createElement(ye.a,{to:"/authentification"})}))}))((function(e){var t=e.usersPage,a=e.setUsersData,s=e.setFollow,c=e.setUnfollow;return Object(n.useEffect)((function(){a(t.currentPage,t.pageSize)}),[t.currentPage,t.pageSize]),r.a.createElement(r.a.Fragment,null,t.isFetch?r.a.createElement(we,null):r.a.createElement(it,{usersPage:t,follow:s,unfollow:c,setUsersData:a}))})),lt=Object(ee.d)(Object(X.a)({form:"Login"}))((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement($.a,{name:"email",placeholder:"E-Mail",component:re,type:"email",validate:[se]})),r.a.createElement("div",null,r.a.createElement($.a,{name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",component:re,type:"password",validate:[se]})),r.a.createElement("div",null,r.a.createElement($.a,{name:"rememberMe",component:"input",type:"checkbox"}),r.a.createElement("span",null,"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f")),r.a.createElement("div",{className:""===e.captcha?ae.a.captchaOff:ae.a.captchaOn},r.a.createElement("div",null,r.a.createElement("img",{src:e.captcha,alt:"\u041a\u0430\u043f\u0447\u0430 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b\u0430\u0441\u044c. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"})),r.a.createElement("div",null,r.a.createElement($.a,{name:"checkCaptcha",component:re}))),r.a.createElement("div",{className:e.error?ae.a.formError:null},r.a.createElement("span",{className:ae.a.error},e.error)),r.a.createElement("div",null,r.a.createElement("button",null,"\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u043c\u0435\u043d\u044f ;)")))})),ut=Object(ee.d)(Object(i.b)((function(e){return{isAuthUser:e.auth.isAuthUser,captcha:e.auth.captcha}}),{loginOnSite:function(e,t,a,n){return function(r){b(e,t,a,n).then((function(e){if(0===e.resultCode)r(F());else if(1===e.resultCode)r(Object(y.a)("Login",{_error:e.messages}));else{if(10!==e.resultCode)return e.messages;r(Object(y.a)("Login",{_error:e.messages})),r(x())}}))}}}))((function(e){return e.isAuthUser?r.a.createElement(ye.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement(lt,{captcha:e.captcha,onSubmit:function(t){e.loginOnSite(t.email,t.password,t.rememberMe,t.checkCaptcha)}}))})),mt={readiness:!1},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"READY_FOR_ACTIONS":return Object(o.a)(Object(o.a)({},e),{},{readiness:t.readiness});default:return e}},ft=Object(ee.d)(ye.f,Object(i.b)((function(e){return{readiness:e.core.readiness}}),{changeReadiness:function(){return function(e){var t=e(F());Promise.all([t]).then((function(){e({type:"READY_FOR_ACTIONS",readiness:!0})}))}}}))((function(e){var t=e.readiness,a=e.changeReadiness;return Object(n.useEffect)((function(){a()}),[t,a]),t?r.a.createElement(I.b,null,r.a.createElement("div",{className:z.a.appWrapper},r.a.createElement(W,null),r.a.createElement(Y,null),r.a.createElement(ye.b,{exaxt:!0,path:"/"}),r.a.createElement(ye.b,{exact:!0,path:"/profile/:userId?",render:function(){return r.a.createElement(Te,null)}}),r.a.createElement(ye.b,{path:"/dialogs",render:function(){return r.a.createElement(Ke,null)}}),r.a.createElement(ye.b,{path:"/news",render:function(){return r.a.createElement(tt,null)}}),r.a.createElement(ye.b,{path:"/\u30df\u30af",render:function(){return r.a.createElement($e,null)}}),r.a.createElement(ye.b,{path:"/users",render:function(){return r.a.createElement(ot,null)}}),r.a.createElement(ye.b,{path:"/settings",render:function(){return r.a.createElement(rt,null)}}),r.a.createElement(ye.b,{path:"/authentification",render:function(){return r.a.createElement(ut,null)}}))):r.a.createElement(we,null)})),pt={},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt;return e},gt=a(136),ht=a(121),bt=Object(ee.c)({profilePage:xe,dialogsPage:qe,usersPage:A,sidebar:Et,auth:T,core:dt,form:ht.a}),_t=Object(ee.e)(bt,Object(ee.a)(gt.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:_t},r.a.createElement(I.a,null,r.a.createElement(ft,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t,a){e.exports=a.p+"static/media/out_of_photo.8425fb1e.jpg"},86:function(e,t,a){e.exports={seeker:"ProfileInfo_seeker__jtWtL",pinkglass:"ProfileInfo_pinkglass__18wwl"}},87:function(e,t,a){e.exports={dialog:"Users_dialog__3_cE5",vocaloid:"Users_vocaloid__1vkhO",pulsate:"Users_pulsate__2mSv1"}},88:function(e,t,a){e.exports={message:"Saya_message__3fCqW",vocaloid:"Saya_vocaloid__2Vzci",pulsate:"Saya_pulsate__3Wt-_"}}},[[162,1,2]]]);
//# sourceMappingURL=main.81c2ae21.chunk.js.map