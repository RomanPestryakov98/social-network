"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[844],{5141:function(t,s,e){e.r(s),e.d(s,{default:function(){return N}});var a=e(1413),n=e(5987),r=e(6070),i=e(8687),u=e(2791),o=e.p+"static/media/avatar.ff96f4143020bb9b54cc.jpg",l=e(184);var c=function(t){return(0,l.jsxs)("li",{className:"post",children:[(0,l.jsx)("img",{src:o,className:"post__avatar",alt:"avatar"}),(0,l.jsx)("p",{className:"post__message",children:t.message})]})},f=e(3545);var d=function(t){var s=t.profilePage,e=t.onSubmit;return(0,l.jsxs)("div",{className:"my-posts",children:[(0,l.jsx)("h2",{className:"my-posts__title",children:"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"}),(0,l.jsx)(f.Z,{type:"post",onSubmit:e}),(0,l.jsx)("ul",{className:"my-posts__list",children:s.posts.map((function(t,s){return(0,l.jsx)(c,{avatar:t.avatar,message:t.message},s)}))})]})};var p=(0,i.$j)((function(t){return{profilePage:t.profilePage}}),{actionAddPostCreator:r.Uf})((function(t){return(0,l.jsx)(d,(0,a.Z)((0,a.Z)({},t),{},{onSubmit:function(s){t.actionAddPostCreator(s.post)}}))})),v=e(5953),m=e(9439);var h=function(t){var s=(0,u.useState)(t.status),e=(0,m.Z)(s,2),a=e[0],n=e[1],r=(0,u.useState)(!1),i=(0,m.Z)(r,2),o=i[0],c=i[1];return(0,u.useEffect)((function(){n(t.status)}),[t.status]),(0,l.jsx)("div",{children:o?(0,l.jsx)("input",{autoFocus:!0,onBlur:function(){t.onUpdateStatus(a),c(!1)},onChange:function(t){n(t.target.value)},value:a}):(0,l.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status?t.status:"\u041d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"})})},j=e(7689);var x=function(t){var s,e,n,r,i,u=(0,j.UO)();return(0,l.jsxs)("div",{className:"main__profile profile",children:["12412412412",(0,l.jsxs)("div",{className:"profile__data",children:[(0,l.jsx)("h2",{className:"profile__name",children:null===t||void 0===t||null===(s=t.profile)||void 0===s?void 0:s.fullName}),(0,l.jsx)("div",{className:"profile__img",children:(0,l.jsx)("img",{src:null!==t&&void 0!==t&&null!==(e=t.profile)&&void 0!==e&&null!==(n=e.photos)&&void 0!==n&&n.small?null===t||void 0===t||null===(r=t.profile)||void 0===r||null===(i=r.photos)||void 0===i?void 0:i.small:v,alt:"avatar"})}),(0,l.jsx)(h,(0,a.Z)({},t))]}),!u.userId&&(0,l.jsx)(p,{})]})},g=e(1548),b=e(7781);function _(t){return t.profilePage.profile}function S(t){return t.profilePage.status}var U=["setUserProfile","setUserStatus","updateUserStatusThunk"];var N=(0,b.qC)((0,i.$j)((function(t){return{profile:_(t),status:S(t)}}),{setUserProfile:r.et,setUserStatus:r.Tq,updateUserStatusThunk:r.Gk}),g.D)((function(t){var s=t.setUserProfile,e=t.setUserStatus,r=t.updateUserStatusThunk,i=(0,n.Z)(t,U),o=(0,j.UO)();return(0,u.useEffect)((function(){i.auth.isAuth&&!o.userId?(s(i.auth.id),e(i.auth.id)):(s(o.userId),e(o.userId))}),[]),(0,l.jsx)(x,(0,a.Z)((0,a.Z)({},i),{},{onUpdateStatus:function(t){r(t)}}))}))},3545:function(t,s,e){e.d(s,{Z:function(){return u}});var a=e(1413),n=(e(2791),e(1134)),r=e(184);var i=function(t){var s=t.btnText,e=t.isValid;return(0,r.jsx)("button",{className:"".concat("btn-form"," ").concat(e?"":"btn-form_disabled"),children:s})};var u=function(t){var s=t.type,e=t.onSubmit,u=(0,n.cI)({mode:"onChange"}),o=u.register,l=u.handleSubmit,c=u.reset,f=u.formState.isValid,d="dialogs"===s?"dialogs":"post"===s&&"post";return(0,r.jsxs)("form",{onSubmit:l((function(t){e(t),c()})),children:[(0,r.jsx)("div",{children:(0,r.jsx)("textarea",(0,a.Z)({},o(d,{required:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"})))}),(0,r.jsx)(i,{isValid:f,btnText:"post"===d?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442":"dialogs"===d&&"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})]})}},1548:function(t,s,e){e.d(s,{D:function(){return o}});var a=e(1413),n=(e(2791),e(8687)),r=e(7689),i=e(184),u=function(t){return{auth:t.auth}},o=function(t){return(0,n.$j)(u)((function(s){return s.auth.isAuth?(0,i.jsx)(t,(0,a.Z)({},s)):(0,i.jsx)(r.Fg,{to:"/login"})}))}},5953:function(t,s,e){t.exports=e.p+"static/media/user.23a6fea9bd13118beec9.jpg"}}]);
//# sourceMappingURL=844.a6b59631.chunk.js.map