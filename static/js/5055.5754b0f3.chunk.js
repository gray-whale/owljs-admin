"use strict";(self.webpackChunkmonitor_admin=self.webpackChunkmonitor_admin||[]).push([[5055],{1583:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(9286),r=a(4217),i=a(2339),o=a(3218),u=a(3403),d=a(7309),s=a(7892),l=a.n(s),c=a(3329),p=r.Z.RangePicker,f=function(e){e.data;var t=[{label:"\u6700\u8fd130\u5206\u949f",value:[l()().add(-30,"minute"),l()()]},{label:"\u6700\u8fd11\u5c0f\u65f6",value:[l()().add(-1,"h"),l()()]},{label:"\u6700\u8fd13\u5c0f\u65f6",value:[l()().add(-7,"h"),l()()]},{label:"\u6700\u8fd11\u5929",value:[l()().add(-1,"d"),l()()]},{label:"\u6700\u8fd13\u5929",value:[l()().add(-3,"d"),l()()]},{label:"\u6700\u8fd17\u5929",value:[l()().add(-7,"d"),l()()]},{label:"\u6700\u8fd11\u4e2a\u6708",value:[l()().add(-1,"M"),l()()]}],a=(0,c.jsx)("div",{style:{maxWidth:"400px"},children:["pid","\u6d4f\u89c8\u5668","\u6d4f\u89c8\u5668\u7248\u672c","\u7cfb\u7edf","\u7cfb\u7edf\u7248\u672c","\u56fd\u5bb6/\u5730\u533a","\u7701\u4efd","\u57ce\u5e02","IP","\u54c1\u724c","\u673a\u578b","\u9875\u9762url","session_id","view_id","env","release","use_agent","\u8bf7\u6c42\u53c2\u6570","\u7f51\u7edc\u7c7b\u578b","use_id","device_id"].map((function(e){return(0,c.jsx)(i.Z,{color:"blue",className:"filter-header-tag",children:e},e)}))});return(0,c.jsxs)(o.Z,{children:[(0,c.jsx)(p,{showTime:!0,presets:t,onChange:function(e,t){e?(console.log("From: ",e[0],", to: ",e[1]),console.log("From: ",t[0],", to: ",t[1])):console.log("Clear")},defaultValue:[l()().add(-1,"d"),l()()]}),(0,c.jsx)(u.Z,{placement:"bottomLeft",trigger:"click",content:a,arrow:!1,children:(0,c.jsx)(d.ZP,{icon:(0,c.jsx)(n.Z,{}),style:{marginLeft:"8px"},children:"\u7b5b\u9009\u6761\u4ef6"})})]})}},5055:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(4165),r=a(5861),i=a(9439),o=a(2584),u=a(1583),d=a(7027),s=a(3218),l=a(3920),c=a(2791),p=a(1087),f=a(3329),h=function(){var e=(0,c.useState)(1),t=(0,i.Z)(e,2),a=t[0],h=t[1],g=(0,c.useState)(10),v=(0,i.Z)(g,2),Z=v[0],x=v[1],m=(0,c.useState)(0),b=(0,i.Z)(m,2),w=b[0],j=b[1],k=(0,c.useState)([]),S=(0,i.Z)(k,2),y=S[0],C=S[1],I=(0,c.useState)([]),_=(0,i.Z)(I,2),P=_[0],E=_[1],T=(0,p.lr)(),z=(0,i.Z)(T,1)[0],F=d.ZP.useMessage(),L=(0,i.Z)(F,2),M=L[0],N=L[1],R={selectedRowKeys:P,onChange:function(e){E(e)}},D=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,r,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=z.get("appId")){e.next=4;break}return M.open({type:"error",content:"appId\u4e0d\u80fd\u4e3a\u7a7a!"}),e.abrupt("return");case 4:return e.next=6,n={pageNum:a,pageSize:Z,appId:t},o.Z.get("mp/pageview",n);case 6:(r=e.sent).data&&(j(r.data.total),i=[],r.data.data.forEach((function(e){i.push({key:e.pageId,pid:e.pid,source:e.source})})),C(i));case 8:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){D()}),[]),(0,c.useEffect)((function(){D()}),[a,Z]);var K={showSizeChanger:!0,onChange:function(e,t){h(e),x(t)},defaultCurrent:a,total:w};return(0,f.jsxs)("div",{children:[(0,f.jsx)(u.Z,{}),(0,f.jsxs)(s.Z,{style:{marginTop:"16px"},title:"\u9875\u9762\u5217\u8868",children:[N,(0,f.jsx)(l.Z,{style:{marginTop:"12px"},rowSelection:R,pagination:K,columns:[{title:"PID",dataIndex:"pid",width:100},{title:"source",dataIndex:"source",width:200}],dataSource:y})]})]})}}}]);
//# sourceMappingURL=5055.5754b0f3.chunk.js.map