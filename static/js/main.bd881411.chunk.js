(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){e.exports=a(342)},147:function(e,t,a){},171:function(e,t){},173:function(e,t){},208:function(e,t){},209:function(e,t){},255:function(e,t,a){},337:function(e,t,a){},340:function(e,t,a){},342:function(e,t,a){"use strict";a.r(t);a(140),a(142);var n=a(0),r=a.n(n),s=a(129),l=a.n(s),c=(a(147),a(346)),i=a(345),o=a(344),u=a(138),m=Object(u.a)(),d=a(13),p=a(14),h=a(16),f=a(15),v=a(17),g=function(){return null!==localStorage.getItem("isUserAuth")},b=function(){localStorage.setItem("isUserAuth","yes"),m.push("/tasks")},E=function(){localStorage.removeItem("isUserAuth"),m.push("/login")},N=function(e){return r.a.createElement("form",{onSubmit:e.submit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"medium-5 columns left"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",name:"userName",placeholder:"userName",onChange:e.changeUsername,value:e.userName}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:e.changePassword,value:e.password}),r.a.createElement("button",{className:"btn btn-lg btn-success"},"Login"))))},k=function(e){var t=e.userName,a=e.password;return"admin"===t&&"123"===a},x=function(){return alert("\u041f\u0448\u0435\u043b \u0432\u043e\u043d!")},w=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={userName:"",password:""},a.changeUsername=function(e){return a.setState({userName:e.currentTarget.value})},a.changePassword=function(e){return a.setState({password:e.currentTarget.value})},a.submit=function(e){e.preventDefault(),k(a.state)?b():x()},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.userName,a=e.password;return r.a.createElement(N,{userName:t,password:a,changeUsername:this.changeUsername,changePassword:this.changePassword,submit:this.submit})}}]),t}(r.a.Component),P=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row small-up-2 medium-up-3 large-up-4",id:"Body"},r.a.createElement("div",{className:"medium-12 columns"},r.a.createElement("h2",null,"404 Page")))}}]),t}(n.Component),C=a(28),y=a(37),S=a(22),B=a.n(S),j=a(36),O=a(45),A=a.n(O),T=a(130),F=a.n(T),U=a(9),V=a.n(U),D=function(){var e=Object(j.a)(B.a.mark(function e(){var t;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://uxcandy.com/~shapoval/test-task-backend/?developer='Georgiy'",e.next=3,A.a.get("https://uxcandy.com/~shapoval/test-task-backend/?developer='Georgiy'");case 3:return t=e.sent,e.abrupt("return",t.data.message.tasks);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(j.a)(B.a.mark(function e(){var t,a,n,r,s,l;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=V()("#fileUpload")[0].files.length,a=V()("#fileUpload")[0].value,n=a.substring(a.lastIndexOf(".")+1).toLowerCase(),(r=V()("#image-holder")).empty(),"gif"===n||"png"===n||"jpg"===n||"jpeg"===n)if(V()("#save").prop("disabled",!1),"undefined"!=typeof FileReader)for(s=0;s<t;s++)(l=new FileReader).onload=function(e){V()("<img />",{src:e.target.result,class:"thumb-image",height:320,width:240}).appendTo(r)},r.show(),l.readAsDataURL(V()("#fileUpload")[0].files[s]);else alert("This browser does not support FileReader.");else a.length>0?(alert("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0444\u0430\u0439\u043b \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\u043c jpeg/pmg/gif!"+a),V()("#save").prop("disabled",!0)):V()("#save").prop("disabled",!1);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(j.a)(B.a.mark(function e(t){var a,n,r,s,l;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,n=t.email,r=t.text,(s=new FormData).append("username",a),s.append("email",n),s.append("text",r),s.append("image",V()("#fileUpload")[0].files[0]),"https://uxcandy.com/~shapoval/test-task-backend/create?developer='Georgiy'",e.next=9,A.a.post("https://uxcandy.com/~shapoval/test-task-backend/create?developer='Georgiy'",s);case 9:return l=e.sent,e.abrupt("return",l.data.message);case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(j.a)(B.a.mark(function e(t){var a,n,r,s,l,c,i,o,u,m,d,p,h;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,n=t.status,r=t.text,s=void 0===r?"":r,l=encodeURIComponent("beejee"),c=function(e){return F.a.createHash("md5").update(e).digest("hex")},i="",n&&(i+="status=".concat(encodeURIComponent(n),"&")),s&&(i+="text=".concat(encodeURIComponent(s),"&")),o=c("".concat(i,"token=").concat(l)),u="https://uxcandy.com/~shapoval/test-task-backend/edit/".concat(a,"?developer='Georgiy'"),m=new FormData,n&&m.append("status",n),s&&m.append("text",s),m.append("signature",o),m.append("token",l),d={headers:{"Content-Type":"multipart/form-data"}},e.next=16,A.a.post(u,m,d);case 16:return p=e.sent,h=p.data,e.abrupt("return",!!h.status);case 19:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),q=(a(255),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={isModalShow:a.props.isModalShow},a.closeModal=function(){a.setState({isModalShow:!1})},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentWillReceiveProps",value:function(){this.setState({isModalShow:!0})}},{key:"render",value:function(){var e=this.state.isModalShow,t=r.a.createElement("div",{className:"modalDialog"},r.a.createElement("div",null,r.a.createElement("button",{className:"close",onClick:this.closeModal},"X"),r.a.createElement("h2",null,this.props.children[0]),r.a.createElement("p",null,this.props.children[2]),r.a.createElement("p",null,this.props.children[3]),r.a.createElement("p",null,this.props.children[4]),r.a.createElement("button",{className:"btn btn-success",onClick:this.closeModal},this.props.children[1])));return r.a.createElement("div",null,e?t:"")}}]),t}(n.PureComponent)),G=a(131),L=a(133),z=a.n(L),J=a(134),$=a.n(J),H=a(136),W=a.n(H),X=a(10),Z=a.n(X),_=a(135),K=a.n(_),Q=a(76),Y=a.n(Q),ee=function(e){function t(e){var a;Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).sortNumbers=function(e,t){var n=a.buff.sortDir,r=a.buff.sortField;return n?(""+t[r]).localeCompare(e[r]):(""+e[r]).localeCompare(t[r])},a.sortStrings=function(e,t){var n=a.buff.sortDir,r=a.buff.sortField;return n?t[r]-e[r]:e[r]-t[r]},a.fetchProducts=function(){var e=a.buff.sortField,t=a.props.products;return"text"===a.buff.fields[e]?t.sort(a.sortStrings):t.sort(a.sortNumbers),t},a.handleThClick=function(e){var t=a.buff.sortField,n=a.buff.sortDir;e.currentTarget.dataset.field===t?n=!n:(t=e.currentTarget.dataset.field,n=!n),a.buff.sortField=t,a.buff.sortDir=n;var r=a.fetchProducts();a.setState(Object(G.a)({},a.state,{products:r}))},a.checkText=function(e){var t=e.target.value.trim();!t||t.length>30?a.setState({isValidText:!1}):t&&t.length<30&&a.setState({isValidText:!0})},a.showError=function(e){return e.target.style.border="3px solid red"},a.saveChanges=function(e,t){var n=e.target,r=n.value,s=n.name;a.state.productValue!==r&&R(Object(C.a)({id:t},s,r))},a.onFocus=function(e){a.setState({productValue:e.target.value})},a.renderItem=function(e){return r.a.createElement(Y.a,{key:e.id},r.a.createElement(Z.a,{numeric:!0},e.username),r.a.createElement(Z.a,{numeric:!0},e.email),g()?r.a.createElement(Z.a,{numeric:!0},r.a.createElement("textarea",{name:"text",className:"form-control",rows:"3",defaultValue:e.text,onChange:function(e){a.checkText(e)},onBlur:function(t){return a.saveChanges(t,e.id)},onFocus:a.onFocus})):r.a.createElement(Z.a,{numeric:!0},e.text),r.a.createElement(Z.a,{numeric:!0},r.a.createElement("img",{src:e.image_path,alt:"",width:"100px"})),g()?r.a.createElement(Z.a,{numeric:!0},r.a.createElement("select",{defaultValue:e.status,name:"status",id:"status",onChange:function(t){return a.saveChanges(t,e.id)},onFocus:a.onFocus},r.a.createElement("option",{value:0},"\u041d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"),r.a.createElement("option",{value:10},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"))):r.a.createElement(Z.a,{numeric:!0},0===e.status?"\u041d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e":"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"),g()&&r.a.createElement(Z.a,{numeric:!0},10===e.status?"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e":"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f","(\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u043e \u0430\u0434\u043c\u0438\u043d\u043e\u043c)"))},a.buff={sortDir:0,sortField:"id",fields:{id:"num",username:"string",email:"string",text:"string",status:"string"}};var n=a.fetchProducts();return a.state={products:n||[],productValue:"",isValidText:!1,isValidStatus:!1},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t={id:null,username:null,email:null,text:null,status:null};return t[this.buff.sortField]=this.buff.sortDir?"DESC":"ASC",r.a.createElement("div",{className:"tasks"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"\u0417\u0430\u0434\u0430\u0447\u043d\u0438\u043a")),r.a.createElement("div",{className:"row"},r.a.createElement(z.a,null,r.a.createElement($.a,null,r.a.createElement(K.a,null,r.a.createElement(Y.a,null,r.a.createElement(Z.a,{"data-field":"text",numeric:!0,onClick:this.handleThClick},"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ",t.username),r.a.createElement(Z.a,{numeric:!0},"E-mail ",t.email),r.a.createElement(Z.a,{"data-field":"text",numeric:!0,onClick:this.handleThClick},"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438 ",t.text),r.a.createElement(Z.a,{numeric:!0},"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"),r.a.createElement(Z.a,{"data-field":"text",numeric:!0},"\u0421\u0442\u0430\u0442\u0443\u0441 ",t.status),g()&&r.a.createElement(Z.a,{numeric:!0},"C\u043c\u0441 \u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0430\u0434\u043c\u0438\u043d\u043e\u043c"))),r.a.createElement(W.a,null,this.props.products.map(function(t){return e.renderItem(t)}))))))}}]),t}(n.Component),te=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={products:[]},a.setProducts=function(e){return a.setState({products:e})},a.filterProducts=function(e){if(""===(e=e.trim()))return a.setProducts(a.props.products);var t=a.props.products.filter(function(t){return-1!==t.username.indexOf(e)||-1!==t.email.indexOf(e)||-1!==t.text.indexOf(e)});a.setProducts(t)},a.onEnter=function(e){var t=e.keyCode,n=e.currentTarget.value;return 13===t&&a.filterProducts(n)},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ee,{products:this.props.products}))}}]),t}(r.a.Component),ae=(a(337),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={tasks:a.props.tasks,currentPage:1,todosPerPage:2,upperPageBound:3,lowerPageBound:0,isPrevBtnActive:"disabled",isNextBtnActive:"",pageBound:3},a.handleClick=function(e){var t=Number(e.target.id);a.setState({currentPage:t}),V()("ul li.active").removeClass("active"),V()("ul li#"+t).addClass("active"),a.setPrevAndNextBtnClass(t)},a.btnIncrementClick=function(){a.setState({upperPageBound:a.state.upperPageBound+a.state.pageBound}),a.setState({lowerPageBound:a.state.lowerPageBound+a.state.pageBound});var e=a.state.upperPageBound+1;a.setState({currentPage:e}),a.setPrevAndNextBtnClass(e)},a.btnDecrementClick=function(){a.setState({upperPageBound:a.state.upperPageBound-a.state.pageBound}),a.setState({lowerPageBound:a.state.lowerPageBound-a.state.pageBound});var e=a.state.upperPageBound-a.state.pageBound;a.setState({currentPage:e}),a.setPrevAndNextBtnClass(e)},a.btnPrevClick=function(){(a.state.currentPage-1)%a.state.pageBound===0&&(a.setState({upperPageBound:a.state.upperPageBound-a.state.pageBound}),a.setState({lowerPageBound:a.state.lowerPageBound-a.state.pageBound}));var e=a.state.currentPage-1;a.setState({currentPage:e}),a.setPrevAndNextBtnClass(e)},a.btnNextClick=function(){a.state.currentPage+1>a.state.upperPageBound&&(a.setState({upperPageBound:a.state.upperPageBound+a.state.pageBound}),a.setState({lowerPageBound:a.state.lowerPageBound+a.state.pageBound}));var e=a.state.currentPage+1;a.setState({currentPage:e}),a.setPrevAndNextBtnClass(e)},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){V()("ul li.active").removeClass("active"),V()("ul li#"+this.state.currentPage).addClass("active")}},{key:"setPrevAndNextBtnClass",value:function(e){var t=Math.ceil(this.state.tasks.length/this.state.todosPerPage);this.setState({isNextBtnActive:"disabled"}),this.setState({isPrevBtnActive:"disabled"}),t===e&&t>1?this.setState({isPrevBtnActive:""}):1===e&&t>1?this.setState({isNextBtnActive:""}):t>1&&(this.setState({isNextBtnActive:""}),this.setState({isPrevBtnActive:""}))}},{key:"render",value:function(){for(var e=this,t=this.state,a=t.currentPage,n=t.todosPerPage,s=t.upperPageBound,l=t.lowerPageBound,c=t.isPrevBtnActive,i=t.isNextBtnActive,o=this.props.tasks,u=a*n,m=u-n,d=o.slice(m,u),p=[],h=1;h<=Math.ceil(o.length/n);h++)p.push(h);var f=p.map(function(t){return 1===t&&1===a?r.a.createElement("li",{key:t,className:"active",id:t},r.a.createElement("button",{id:t,onClick:e.handleClick}," ",t)):t<s+1&&t>l?r.a.createElement("li",{key:t,id:t},r.a.createElement("button",{id:t,onClick:e.handleClick},t)):null}),v=null;p.length>s&&(v=r.a.createElement("li",{className:""},r.a.createElement("button",{onClick:this.btnIncrementClick}," \u2026 ")));var g=null;l>=1&&(g=r.a.createElement("li",{className:""},r.a.createElement("button",{onClick:this.btnDecrementClick}," \u2026 ")));var b=null;b="disabled"===c?r.a.createElement("li",{className:c},r.a.createElement("span",{id:"btnPrev"}," Prev ")):r.a.createElement("li",{className:c},r.a.createElement("button",{id:"btnPrev",onClick:this.btnPrevClick}," ","Prev"," "));var E=null;return E="disabled"===i?r.a.createElement("li",{className:i},r.a.createElement("span",{id:"btnNext"}," Next ")):r.a.createElement("li",{className:i},r.a.createElement("button",{id:"btnNext",onClick:this.btnNextClick}," ","Next"," ")),r.a.createElement("div",null,r.a.createElement(te,{products:d}),r.a.createElement("ul",{className:"pagination"},b,g,f,v,E))}}]),t}(n.Component)),ne=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],username:"",email:"",text:"",isModalShow:!1,isValidName:!1,isValidEmail:!1},a.checkUserName=function(e){var t=new RegExp(/^[a-z]+$/i).test(e);!e||!t||e.length>30?a.setState({isValidName:!1}):a.setState({isValidName:!0})},a.checkEmail=function(e){e&&/^\w+@\w+\.\w{2,4}$/i.test(e)?a.setState({isValidEmail:!0}):a.setState({isValidEmail:!1})},a.checkText=function(e){e.length>100?a.setState({isValidText:!1}):a.setState({isValidText:!0})},a.changeField=function(e){var t;e.preventDefault();var n=e.target.name,r=e.target.value;"username"===n&&a.checkUserName(r),"email"===n&&a.checkEmail(r),"text"===n&&a.checkText(r),a.setState((t={},Object(C.a)(t,e.target.name,e.target.value),Object(C.a)(t,"isModalShow",!1),t))},a.fileUpload=function(){M()},a.addTask=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.email,s=t.text;I({username:n,email:r,text:s}).then(function(e){var t=a.state.products.concat(e);a.setState({products:t})})},a.viewAddedTask=function(){a.setState({isModalShow:!0})},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;D().then(function(t){var a=e.state.products.concat(t);e.setState({products:a})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.email,s=t.text,l=t.products,c=t.isModalShow,i=t.isValidName,o=t.isValidEmail,u=t.isValidText,m=[];return m.push("\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430:","\u041e\u041a",a,n,s.substr(0,35)),r.a.createElement("div",null,r.a.createElement("div",null,g()?r.a.createElement("button",{onClick:E,className:"btn btn-lg btn-success"},"Logout"):r.a.createElement("a",{href:"/login",className:"button"},"Login")),r.a.createElement(ae,{tasks:l}),c?r.a.createElement(q,{isModalShow:c},m):"",r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,"\u0424\u043e\u0440\u043c\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0442\u0430\u0441\u043a\u0430.")),r.a.createElement("div",{id:"preview-data",className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"}),r.a.createElement("div",{className:"panel-body"}),r.a.createElement("div",{id:"image-holder"})),r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-body"},r.a.createElement("form",{onSubmit:this.addTask,id:"feedback",className:"form-horizontal",encType:"multipart/form-data",method:"post"},r.a.createElement("div",{className:"form-group has-feedback"},r.a.createElement("label",{htmlFor:"username",className:"control-label col-xs-3"},"\u0418\u043c\u044f:"),r.a.createElement("div",{className:"col-xs-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"glyphicon glyphicon-user"})),r.a.createElement("input",{id:"username",type:"text",className:"form-control",name:"username",defaultValue:a,required:"required",pattern:"[A-Za-z]{6,}",onChange:function(t){y("#username","required:\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e!"),y("#username","alpha:\u0422\u043e\u043b\u044c\u043a\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b"),y("#username","max:16: \u0418\u043c\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 16 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),e.changeField(t)}})),r.a.createElement("span",{className:"glyphicon form-control-feedback"}))),r.a.createElement("div",{className:"form-group has-feedback"},r.a.createElement("label",{htmlFor:"email",className:"control-label col-xs-3"},"Email:"),r.a.createElement("div",{className:"col-xs-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"glyphicon glyphicon-envelope"})),r.a.createElement("input",{id:"email",type:"email",className:"form-control",name:"email",defaultValue:n,required:"required",onChange:function(t){y("#email","email:\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 email!"),e.changeField(t)}})),r.a.createElement("span",{className:"glyphicon form-control-feedback"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"\u0422\u0435\u043a\u0441\u0442"),r.a.createElement("textarea",{id:"text",name:"text",className:"form-control",rows:"3",defaultValue:s,onChange:function(t){y("#text","max:100: \u0422\u0435\u043a\u0441\u0442 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 100 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432!"),e.changeField(t)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{id:"fileUpload",type:"file",className:"form-control",name:"fupload",multiple:"multiple",onChange:this.fileUpload})),r.a.createElement("div",{className:"panel-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-1"},r.a.createElement("a",{href:"/"},"\u041e\u0442\u043c\u0435\u043d\u0430")),r.a.createElement("div",{className:"col-md-1"},r.a.createElement("button",{onClick:this.viewAddedTask,type:"button",className:"btn btn-lg btn-success","data-toggle":"modal","data-target":"#myModal"},"\u041f\u0440\u0435\u0432\u044c\u044e"))))),r.a.createElement("button",{id:"save",onClick:this.addTask,type:"button",className:"btn btn-lg btn-success",disabled:!i||!o||!u},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0430\u0441\u043a"),r.a.createElement("div",{className:"alert alert-success hidden",id:"success-alert"},r.a.createElement("h2",null,"\u0423\u0441\u043f\u0435\u0445"),r.a.createElement("div",null,"\u0412\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u044b\u043b\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b.")))))}}]),t}(r.a.Component),re=function(){return r.a.createElement(c.a,{history:m},r.a.createElement(i.a,null,r.a.createElement(o.a,{exact:!0,path:"/",component:ne}),r.a.createElement(o.a,{path:"/login",component:w}),r.a.createElement(o.a,{exact:!0,path:"/tasks",component:ne}),r.a.createElement(o.a,{component:P})))},se=function(){return r.a.createElement("main",null,r.a.createElement(re,null))},le=(a(340),function(){return r.a.createElement("div",{className:"off-canvas-wrapper"},r.a.createElement(se,null),r.a.createElement("hr",null))});a.d(t,"authContext",function(){return ce});var ce=r.a.createContext(localStorage.getItem("isUserAuth"));l.a.render(r.a.createElement(le,null),document.getElementById("root"))}},[[139,2,1]]]);
//# sourceMappingURL=main.bd881411.chunk.js.map