(this["webpackJsonpnote-front-end"]=this["webpackJsonpnote-front-end"]||[]).push([[0],{120:function(e,t,a){e.exports=a(322)},125:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},315:function(e,t,a){},316:function(e,t,a){},317:function(e,t,a){},318:function(e,t,a){},319:function(e,t,a){},320:function(e,t,a){},321:function(e,t,a){},322:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(117),l=a.n(r),c=(a(125),a(9)),s=a.n(c),i=a(16),u=a(25),m=a(4),d=(a(127),a(128),a(8));var h=function(){return o.a.createElement("nav",{className:"navbar__header"},o.a.createElement("ul",{className:"nav justify-content-end"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(d.b,{className:"nav-link",to:"/allnotes"},"All Notes")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(d.b,{className:"nav-link",to:"/app"},"Dashboard")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(d.b,{className:"nav-link",to:"/alluser"},"All User")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(d.b,{className:"nav-link",to:"/Logout"},"Logout"))))},p=(a(133),a(17)),b=a(18),f=a(5),g=a(20),v=a(19),E=(a(134),a(3)),N=a.n(E),C=a(49),y=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleChangeComplete=function(e){console.log("color value",e.hex),console.log("color type",typeof e.hex),n.setState({noteColor:e.hex})},n.onTitleChange=n.onTitleChange.bind(Object(f.a)(n)),n.onBodyChange=n.onBodyChange.bind(Object(f.a)(n)),n.onFileChange=n.onFileChange.bind(Object(f.a)(n)),n.onNoteColorChange=n.onNoteColorChange.bind(Object(f.a)(n)),n.onSubmit=n.onSubmit.bind(Object(f.a)(n)),n.state={id:"",title:"",body:"",image:"",noteColor:"",creator:""},n}return Object(b.a)(a,[{key:"onTitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"onBodyChange",value:function(e){this.setState({body:e.target.value})}},{key:"onFileChange",value:function(e){this.setState({image:e.target.files[0]}),console.log(e.target.files[0])}},{key:"onNoteColorChange",value:function(e){this.setState({noteColor:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=new FormData;a.set("image",this.state.image);var n=localStorage.getItem("user_token"),o={method:"get",url:"http://15.207.8.251:10051/notes/User",headers:{"auth-token":"".concat(n)}};N()(o).then((function(e){t.setState({creator:e.data.createrId}),N.a.post("http://15.207.8.251:10051/notes",{title:t.state.title,body:t.state.body,noteColor:t.state.noteColor,creator:t.state.creator},{headers:{"auth-token":n}}).then((function(e){console.log("last inserted id:-",e),N.a.post("http://15.207.8.251:10051/notes/image-upload/".concat(e.data.lastid),a,{headers:{"auth-token":n}}).then((function(e){console.log(e),window.location.href="http://15.207.8.251:10051/app"}))}))}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"AddNote"},o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("div",{className:"addnote__form-group"},o.a.createElement("label",null,"Title"),o.a.createElement("input",{type:"text",name:"title",onChange:this.onTitleChange})),o.a.createElement("div",{className:"addnote__form-group"},o.a.createElement("label",null,"Body"),o.a.createElement("textarea",{name:"addNote",className:"text-body",onChange:this.onBodyChange})),o.a.createElement("div",{className:"addnote__form-group"},o.a.createElement("label",null,"Image"),o.a.createElement("input",{type:"file",onChange:this.onFileChange})),o.a.createElement("div",{className:"addnote__form-group"},o.a.createElement("label",null,"Note Color"),o.a.createElement("input",{type:"text",className:"addnote__noteColor",name:"noteColor",value:this.state.noteColor,onChange:this.onNoteColorChange}),o.a.createElement(C.SketchPicker,{className:"colorbox",color:this.state.background,onChangeComplete:this.handleChangeComplete})),o.a.createElement("button",{className:"btnSubmit"},"Save")))}}]),a}(n.Component),k=a(31),_=a(71);a(315);var O=function(e){var t=Object(n.useState)({_id:"",title:"",body:"",image:"",noteColor:"",creator:""}),a=Object(u.a)(t,2),r=a[0],l=a[1],c=(Object(m.f)(),"http://15.207.8.251:10051/notes/"+e.match.params.id),d=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("user_token"),e.next=3,N()(c,{headers:{"auth-token":t}});case 3:a=e.sent,n=a.data,console.log(n),n.image=a.data.image.split("/uploads/")[1],l(n),r.imageBeh=n.image;case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){d()}),[]);var h=function(e){e.persist(),l(Object(_.a)(Object(_.a)({},r),{},Object(k.a)({},e.target.name,e.target.value)))};return o.a.createElement("div",{className:"editNote"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;t.set("image",r.image);var a=localStorage.getItem("user_token");console.log("FORM DATA",t.get("image")),N.a.put("http://15.207.8.251:10051/notes/"+r._id,{title:r.title,body:r.body,noteColor:r.noteColor},{headers:{"auth-token":a}}).then((function(e){N.a.post("http://15.207.8.251:10051/notes/image-upload/".concat(r._id),t,{headers:{"auth-token":a}}).then((function(e){console.log(e),window.location.href="http://15.207.8.251:10051/app"}))}))}},o.a.createElement("div",{className:"edit__form-group"},o.a.createElement("label",null,"Title"),o.a.createElement("input",{type:"text",name:"title",onChange:h,value:r.title})),o.a.createElement("div",{className:"edit__form-group"},o.a.createElement("label",null,"Image"),o.a.createElement("input",{type:"file",onChange:function(e){r.image=e.target.files[0]}}),o.a.createElement("p",null,"Old Image Path: ",r.image)),o.a.createElement("div",{className:"edit__form-group"},o.a.createElement("label",null,"Body"),o.a.createElement("textarea",{className:"text-body",name:"noteBody",onChange:h,value:r.body})),o.a.createElement("div",{className:"edit__form-group"},o.a.createElement("label",null,"Note Color"),o.a.createElement(C.SketchPicker,{className:"colorbox",color:r.noteColor,onChange:function(e,t){console.log(t.target),console.log(e),r.noteColor=e.hex},onChangeComplete:function(e){console.log("color value",e.hex),console.log("color type",typeof e.hex)}})),o.a.createElement("button",{className:"btnUpdate"},"update")))};var j=function(e){var t=Object(m.f)();return o.a.createElement("div",{className:"noteAction"},o.a.createElement(d.b,{to:"/app/addnote"},"Add Note"),o.a.createElement("div",null,o.a.createElement(m.c,null,o.a.createElement(m.a,{path:"/app/addnote",component:y}),o.a.createElement(m.a,{path:"/app/editnote/:id",component:O}))),o.a.createElement("div",{className:"main__note"},e.notes.map((function(e,a){return o.a.createElement("div",{className:"notes",style:{backgroundColor:e.noteColor},key:a},o.a.createElement("div",{className:"notes__info"},o.a.createElement("div",{className:"notes__title"},o.a.createElement("h2",null,e.title)),o.a.createElement("div",{className:"notes__description"},o.a.createElement("p",null,e.body)),o.a.createElement("img",{src:e.image,alt:e.title}),o.a.createElement("button",{className:"btnEdit",onClick:function(){var a;a=e._id,console.log(a),t.push("/app/editnote/"+a),window.location.reload()}},"Edit"),o.a.createElement("button",{className:"btnDelete",onClick:function(){!function(e){var t=localStorage.getItem("user_token");console.log("deleted id",e),N.a.delete("http://15.207.8.251:10051/notes/"+e,{headers:{"auth-token":t}}).then((function(e){window.location.reload()}))}(e._id)}},"X")))}))))};var S=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(m.f)(),c=localStorage.getItem("user_token");c||l.push("/");var d={method:"get",url:"http://15.207.8.251:10051/notesUser",headers:{"auth-token":"".concat(c)}},p=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()(d);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p().then((function(e){var t=e.data;r(t)}))}),[]),o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(j,{notes:a}))},w=(a(316),function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={userName:"",password:""},n.UserNameChange=n.UserNameChange.bind(Object(f.a)(n)),n.PasswordChange=n.PasswordChange.bind(Object(f.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n}return Object(b.a)(a,[{key:"UserNameChange",value:function(e){this.setState({userName:e.target.value})}},{key:"PasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.fetchdata().then((function(e){localStorage.setItem("user_token",e),t.props.history.push("/app")}))}},{key:"fetchdata",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("http://15.207.8.251:10051/users/".concat(this.state.userName,"/").concat(this.state.password));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:"global-container"},o.a.createElement("div",{className:"card login-form"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h3",{className:"card-title text-center"},"Log in to Codepen"),o.a.createElement("div",{className:"card-text"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Email address"),o.a.createElement("input",{type:"email",className:"form-control form-control-sm",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:this.state.userName,onChange:this.UserNameChange})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Password"),o.a.createElement("input",{type:"password",className:"form-control form-control-sm",id:"exampleInputPassword1",value:this.state.password,onChange:this.PasswordChange})),o.a.createElement("div",{className:"container__button"},o.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Sign in"),o.a.createElement("a",{href:"#",style:{float:"right",fontSize:"12px"}},"Forgot password?")),o.a.createElement("div",{className:"sign-up"},"Don't have an account? ",o.a.createElement(d.b,{to:"/SignUp"},"Create One")))))))}}]),a}(n.Component)),x=(a(317),function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),n=t.call(this,e),console.log("mapping value",n.props.user),n.state={id:n.props.user.usr._id,firstName:n.props.user.usr.firstName,lastName:n.props.user.usr.lastName,email:n.props.user.usr.email,mobileNumber:n.props.user.usr.mobileNumber},n}return Object(b.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"user"},o.a.createElement(d.b,{to:"/usernote/".concat(this.state.id)},o.a.createElement("span",{className:"user__name"},"User Name")," ",o.a.createElement("h2",null,this.state.firstName+" "+this.state.lastName),o.a.createElement("p",{className:"user__email"},"Email: ",this.state.email),o.a.createElement("p",{className:"user__phone"},"Phone: ",this.state.mobileNumber)))}}]),a}(n.Component)),I=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={users:[]},n}return Object(b.a)(a,[{key:"fetchdata",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("user_token"),e.next=3,N.a.get("http://15.207.8.251:10051/users",{headers:{"auth-token":t}});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this,t=[];this.fetchdata().then((function(a){t.push(a),e.setState({users:t}),console.log("user value",e.state.users)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"allusers"},o.a.createElement(h,null),this.state.users.map((function(e,t){return e.map((function(e){return o.a.createElement("div",{key:t},o.a.createElement(x,{user:{usr:e},key:t}),o.a.createElement("hr",null))}))})))}}]),a}(n.Component),D=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),n=t.call(this,e),localStorage.removeItem("user_token"),n.props.history.push("/"),n}return Object(b.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},"Logout")}}]),a}(n.Component);a(318);var P=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],l=a[1],c="http://15.207.8.251:10051/notes/user/"+e.match.params.id,m=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("user_token"),e.next=3,N()(c,{headers:{"auth-token":t}});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){m().then((function(e){console.log("compile data",e),l(e.data)}))}),[]),o.a.createElement("div",{className:"user__note"},o.a.createElement(h,null),o.a.createElement("h1",{className:"user_note_heading"},"user note"),o.a.createElement("hr",null),r.map((function(e){return o.a.createElement("div",{className:"user_note__info",key:e._id},o.a.createElement("h2",null,e.title),o.a.createElement("div",{className:"user_note__body"},o.a.createElement("p",null,e.body)),o.a.createElement("div",{className:"user_note__image"},o.a.createElement("img",{src:e.image,alt:e.title})),o.a.createElement("div",{className:"user_note__notecolor"},o.a.createElement("div",{className:"user_note__notecolor__box",style:{backgroundColor:e.noteColor}})),o.a.createElement("hr",null))})))},U=(a(319),a(119));a(320);var B=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=o.a.useState(t),n=Object(u.a)(a,2),r=n[0],l=n[1],c=o.a.useMemo((function(){var t=Object(U.a)(e);return null!==r&&t.sort((function(e,t){return e[r.key]<t[r.key]?"ascending"===r.direction?-1:1:e[r.key]>t[r.key]?"ascending"===r.direction?1:-1:0})),t}),[e,r]),s=function(e){var t="ascending";r&&r.key===e&&"ascending"===r.direction&&(t="descending"),l({key:e,direction:t})};return{items:c,requestSort:s,sortConfig:r}}(e.products),a=t.items,n=t.requestSort,r=t.sortConfig,l=function(e){if(r)return r.key===e?r.direction:void 0};return o.a.createElement("div",{className:"productnotes"},o.a.createElement("table",null,o.a.createElement("caption",null,"Products"),o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement("button",{type:"button",onClick:function(){return n("title")},className:l("title")},"Title")),o.a.createElement("th",null,o.a.createElement("button",{type:"button",onClick:function(){return n("body")},className:l("body")},"Body")),o.a.createElement("th",null,o.a.createElement("button",{type:"button",onClick:function(){return n("creator.email")},className:l("creator.email")},"User Email")),o.a.createElement("th",null,o.a.createElement("button",{type:"button",onClick:function(){return n("stock")},className:l("stock")},"Created Date")))),o.a.createElement("tbody",null,a.map((function(e,t){var a,n;return o.a.createElement("tr",Object(k.a)({key:e.id},"key",t),o.a.createElement("td",null,e.title),o.a.createElement("td",null,e.body),o.a.createElement("td",null,null===(a=e.creator)||void 0===a?void 0:a.email),o.a.createElement("td",null,null===(n=e.creator)||void 0===n?void 0:n.createdDate))})))))};var A=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],l=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("user_token"),e.next=3,N()("http://15.207.8.251:10051/noteusermarge",{headers:{"auth-token":t}});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l().then((function(e){console.log("compile data",e),r(e)}))}),[]),o.a.createElement("div",{className:"usernotes"},o.a.createElement(h,null),o.a.createElement("div",{className:"All_Notesuser"},o.a.createElement(B,{products:a})))},F=(a(321),function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={firstName:"",lastName:"",email:"",mobileNumber:"",password:""},n.onfirstNameChange=n.onfirstNameChange.bind(Object(f.a)(n)),n.onlastNameChange=n.onlastNameChange.bind(Object(f.a)(n)),n.onemailChange=n.onemailChange.bind(Object(f.a)(n)),n.onmobileNumberChange=n.onmobileNumberChange.bind(Object(f.a)(n)),n.onpasswordChange=n.onpasswordChange.bind(Object(f.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n}return Object(b.a)(a,[{key:"onfirstNameChange",value:function(e){this.setState({firstName:e.target.value})}},{key:"onlastNameChange",value:function(e){this.setState({lastName:e.target.value})}},{key:"onemailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onmobileNumberChange",value:function(e){this.setState({mobileNumber:e.target.value})}},{key:"onpasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this,a=localStorage.getItem("user_token");console.log("state value",this.state),e.preventDefault(),N.a.post("http://15.207.8.251:10051/users",{firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,mobileNumber:this.state.mobileNumber,password:this.state.password},{headers:{"auth-token":a}}).then((function(e){console.log("insert successfully done!!!"),t.props.history.push("/")}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"Signup"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"firstName"),o.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"exampleInputEmail1",onChange:this.onfirstNameChange})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"lastName"),o.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"exampleInputlastname",onChange:this.onlastNameChange})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"email"),o.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"exampleInputemail",onChange:this.onemailChange})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"mobileNumber"),o.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"exampleInputmobileNumber",onChange:this.onmobileNumberChange})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Password"),o.a.createElement("input",{type:"password",className:"form-control form-control-sm",id:"exampleInputpassword",onChange:this.onpasswordChange})),o.a.createElement("div",{className:"container__button"},o.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Sign up"))))}}]),a}(n.Component));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d.a,null,o.a.createElement(m.c,null,o.a.createElement(m.a,{path:"/",component:w,exact:!0}),o.a.createElement(m.a,{path:"/app",component:S}),o.a.createElement(m.a,{path:"/SignUp",component:F}),o.a.createElement(m.a,{path:"/logout",component:D}),o.a.createElement(m.a,{path:"/alluser",component:I}),o.a.createElement(m.a,{path:"/allnotes",component:A}),o.a.createElement(m.a,{path:"/usernote/:id",component:P})))),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.3ecd3e1d.chunk.js.map