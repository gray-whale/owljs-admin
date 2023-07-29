"use strict";(self.webpackChunkmonitor_admin=self.webpackChunkmonitor_admin||[]).push([[9576],{1583:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(9286),r=a(4217),i=a(2339),s=a(3218),d=a(3403),l=a(7309),o=a(7892),c=a.n(o),u=a(3329),p=r.Z.RangePicker,h=function(e){e.data;var t=[{label:"\u6700\u8fd130\u5206\u949f",value:[c()().add(-30,"minute"),c()()]},{label:"\u6700\u8fd11\u5c0f\u65f6",value:[c()().add(-1,"h"),c()()]},{label:"\u6700\u8fd13\u5c0f\u65f6",value:[c()().add(-7,"h"),c()()]},{label:"\u6700\u8fd11\u5929",value:[c()().add(-1,"d"),c()()]},{label:"\u6700\u8fd13\u5929",value:[c()().add(-3,"d"),c()()]},{label:"\u6700\u8fd17\u5929",value:[c()().add(-7,"d"),c()()]},{label:"\u6700\u8fd11\u4e2a\u6708",value:[c()().add(-1,"M"),c()()]}],a=(0,u.jsx)("div",{style:{maxWidth:"400px"},children:["pid","\u6d4f\u89c8\u5668","\u6d4f\u89c8\u5668\u7248\u672c","\u7cfb\u7edf","\u7cfb\u7edf\u7248\u672c","\u56fd\u5bb6/\u5730\u533a","\u7701\u4efd","\u57ce\u5e02","IP","\u54c1\u724c","\u673a\u578b","\u9875\u9762url","session_id","view_id","env","release","use_agent","\u8bf7\u6c42\u53c2\u6570","\u7f51\u7edc\u7c7b\u578b","use_id","device_id"].map((function(e){return(0,u.jsx)(i.Z,{color:"blue",className:"filter-header-tag",children:e},e)}))});return(0,u.jsxs)(s.Z,{children:[(0,u.jsx)(p,{showTime:!0,presets:t,onChange:function(e,t){e?(console.log("From: ",e[0],", to: ",e[1]),console.log("From: ",t[0],", to: ",t[1])):console.log("Clear")},defaultValue:[c()().add(-1,"d"),c()()]}),(0,u.jsx)(d.Z,{placement:"bottomLeft",trigger:"click",content:a,arrow:!1,children:(0,u.jsx)(l.ZP,{icon:(0,u.jsx)(n.Z,{}),style:{marginLeft:"8px"},children:"\u7b5b\u9009\u6761\u4ef6"})})]})}},9576:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var n=a(4165),r=a(5861),i=a(9439),s=a(1583),d=a(3218),l=a(7828),o=a(1046),c=a(7838),u=a(7128),p=a(4352),h=a(2791),x=a(2584),f=function(e){return x.Z.get("miniapp/jserror/".concat(e))},m=a(7027),Z=a(3920),v=a(1087),g=a(3329),j=function(e){var t=(0,h.useState)(1),a=(0,i.Z)(t,2),s=a[0],d=a[1],l=(0,h.useState)(10),o=(0,i.Z)(l,2),c=o[0],u=o[1],p=(0,h.useState)(0),f=(0,i.Z)(p,2),j=f[0],w=f[1],k=(0,h.useState)([]),b=(0,i.Z)(k,2),y=b[0],S=b[1],C=(0,h.useState)([]),I=(0,i.Z)(C,2),_=I[0],z=I[1],A=(0,v.lr)(),E=(0,i.Z)(A,1)[0],P=m.ZP.useMessage(),T=(0,i.Z)(P,2),B=T[0],L=T[1],N=[{title:"\u9519\u8bef\u540d",dataIndex:"name",width:50},{title:"\u9519\u8bef\u4fe1\u606f",dataIndex:"msg",width:100},{title:"\u9519\u8bef\u5185\u5bb9",dataIndex:"stack",width:200,render:function(t,a){return(0,g.jsx)("div",{children:(0,g.jsx)("span",{onClick:function(t){return e.onClick(a.key)},style:{wordBreak:"break-all",overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:"3",WebkitBoxOrient:"vertical"},children:t})})}},{title:"\u4e0a\u62a5\u65f6\u95f4",dataIndex:"createdAt",width:100}],W={selectedRowKeys:_,onChange:function(e){z(e)}},F=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,a,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=E.get("appId")){e.next=4;break}return B.open({type:"error",content:"appId\u4e0d\u80fd\u4e3a\u7a7a!"}),e.abrupt("return");case 4:return e.next=6,n={pageNum:s,pageSize:c,appId:t},x.Z.get("miniapp/jserror",n);case 6:(a=e.sent).data&&(w(a.data.total),r=[],a.data.data.forEach((function(e){r.push({key:e.errorId,name:e.name,msg:e.msg,stack:e.stack,createdAt:e.createdAt})})),S(r));case 8:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();(0,h.useEffect)((function(){F()}),[]),(0,h.useEffect)((function(){F()}),[s,c]);var K={showSizeChanger:!0,onChange:function(e,t){d(e),u(t)},defaultCurrent:s,total:j};return(0,g.jsxs)("div",{children:[L,(0,g.jsx)(Z.Z,{style:{marginTop:"12px"},rowSelection:W,pagination:K,columns:N,dataSource:y})]})},w=a(732),k=a(50),b=a(2499),y=a(4561),S=function(){var e=(0,h.useState)(),t=(0,i.Z)(e,2),a=t[0],m=t[1],v=(0,h.useState)(!1),S=(0,i.Z)(v,2),C=S[0],I=S[1],_=(0,h.useState)(1),z=(0,i.Z)(_,2),A=z[0],E=z[1],P=(0,h.useState)(10),T=(0,i.Z)(P,2),B=T[0],L=T[1],N=(0,h.useState)(0),W=(0,i.Z)(N,2),F=W[0],K=W[1],M=(0,h.useState)([]),O=(0,i.Z)(M,2),R=O[0],J=O[1],V=[{title:"\u7c7b\u578b",dataIndex:"type",width:50},{title:"\u7b56\u7565",dataIndex:"category",width:100},{title:"\u4fe1\u606f",dataIndex:"message",width:200,render:function(e,t){return(0,g.jsx)("div",{children:(0,g.jsx)("span",{style:{width:"200px",wordBreak:"break-all"},children:e})})}},{title:"\u9644\u52a0\u4fe1\u606f",dataIndex:"data",width:100},{title:"\u4e0a\u62a5\u65f6\u95f4",dataIndex:"timestamp",width:100}],q=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var a,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n={pageNum:A,pageSize:B,errorId:t},x.Z.get("mp/breadcrumb",n);case 2:(a=e.sent).data&&(K(a.data.total),r=[],a.data.data.forEach((function(e){r.push({type:e.type,category:e.category,message:e.message,data:e.data,timestamp:e.timestamp})})),J(r));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){I(!1)},G=[{key:"1",label:"\u5806\u6808\u660e\u7ec6",children:(0,g.jsx)("p",{children:a&&a.stack})}],H=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:(a=e.sent).data&&m(a.data),q(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q={showSizeChanger:!0,onChange:function(e,t){E(e),L(t)},defaultCurrent:A,total:F};return(0,g.jsxs)("div",{children:[(0,g.jsx)(s.Z,{}),(0,g.jsx)(d.Z,{title:"\u9519\u8bef\u5217\u8868",style:{marginTop:"16px"},children:(0,g.jsx)(j,{onClick:function(e){H(e),I(!0)}})}),(0,g.jsx)(l.Z,{title:"\u9519\u8bef\u8be6\u60c5",placement:"right",closable:!1,width:"80%",onClose:D,open:C,extra:(0,g.jsx)(o.Z,{children:(0,g.jsx)(w.Z,{onClick:D})}),children:(0,g.jsxs)("div",{children:[(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(b.Z,{level:4,children:null===a||void 0===a?void 0:a.name}),(0,g.jsx)(y.Z,{children:null===a||void 0===a?void 0:a.msg}),(0,g.jsxs)(y.Z,{children:[(0,g.jsx)(k.Z,{}),"\xa0\xa0",null===a||void 0===a?void 0:a.createdAt]})]}),(0,g.jsx)(u.Z,{}),(0,g.jsxs)("div",{style:{width:"60%"},children:[(0,g.jsx)(Z.Z,{style:{marginTop:"12px"},size:"small",pagination:Q,columns:V,dataSource:R}),(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(b.Z,{level:5,children:"Js\u9519\u8bef\u5806\u6808"}),(0,g.jsx)(y.Z,{children:null===a||void 0===a?void 0:a.msg})]}),(0,g.jsx)(p.Z,{bordered:!1,items:G,defaultActiveKey:["1"]})]})]})})]})}}}]);
//# sourceMappingURL=9576.9e80a288.chunk.js.map