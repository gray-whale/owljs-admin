"use strict";(self.webpackChunkmonitor_admin=self.webpackChunkmonitor_admin||[]).push([[630],{1583:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(9286),r=a(4217),d=a(2339),i=a(3218),u=a(3403),o=a(7309),s=a(7892),l=a.n(s),c=a(3329),p=r.Z.RangePicker,f=function(e){e.data;var t=[{label:"\u6700\u8fd130\u5206\u949f",value:[l()().add(-30,"minute"),l()()]},{label:"\u6700\u8fd11\u5c0f\u65f6",value:[l()().add(-1,"h"),l()()]},{label:"\u6700\u8fd13\u5c0f\u65f6",value:[l()().add(-7,"h"),l()()]},{label:"\u6700\u8fd11\u5929",value:[l()().add(-1,"d"),l()()]},{label:"\u6700\u8fd13\u5929",value:[l()().add(-3,"d"),l()()]},{label:"\u6700\u8fd17\u5929",value:[l()().add(-7,"d"),l()()]},{label:"\u6700\u8fd11\u4e2a\u6708",value:[l()().add(-1,"M"),l()()]}],a=(0,c.jsx)("div",{style:{maxWidth:"400px"},children:["pid","\u6d4f\u89c8\u5668","\u6d4f\u89c8\u5668\u7248\u672c","\u7cfb\u7edf","\u7cfb\u7edf\u7248\u672c","\u56fd\u5bb6/\u5730\u533a","\u7701\u4efd","\u57ce\u5e02","IP","\u54c1\u724c","\u673a\u578b","\u9875\u9762url","session_id","view_id","env","release","use_agent","\u8bf7\u6c42\u53c2\u6570","\u7f51\u7edc\u7c7b\u578b","use_id","device_id"].map((function(e){return(0,c.jsx)(d.Z,{color:"blue",className:"filter-header-tag",children:e},e)}))});return(0,c.jsxs)(i.Z,{children:[(0,c.jsx)(p,{showTime:!0,presets:t,onChange:function(e,t){e?(console.log("From: ",e[0],", to: ",e[1]),console.log("From: ",t[0],", to: ",t[1])):console.log("Clear")},defaultValue:[l()().add(-1,"d"),l()()]}),(0,c.jsx)(u.Z,{placement:"bottomLeft",trigger:"click",content:a,arrow:!1,children:(0,c.jsx)(o.ZP,{icon:(0,c.jsx)(n.Z,{}),style:{marginLeft:"8px"},children:"\u7b5b\u9009\u6761\u4ef6"})})]})}},4630:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(4165),r=a(5861),d=a(9439),i=a(2584),u=a(1583),o=a(7027),s=a(3218),l=a(3920),c=a(2791),p=a(1087),f=a(3329),h=function(){var e=(0,c.useState)(1),t=(0,d.Z)(e,2),a=t[0],h=t[1],x=(0,c.useState)(10),Z=(0,d.Z)(x,2),g=Z[0],v=Z[1],m=(0,c.useState)(0),w=(0,d.Z)(m,2),b=w[0],j=w[1],k=(0,c.useState)([]),I=(0,d.Z)(k,2),S=I[0],q=I[1],y=(0,c.useState)([]),C=(0,d.Z)(y,2),_=C[0],M=C[1],P=(0,p.lr)(),U=(0,d.Z)(P,1)[0],E=o.ZP.useMessage(),L=(0,d.Z)(E,2),R=L[0],T=L[1],z={selectedRowKeys:_,onChange:function(e){M(e)}},F=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,r,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=U.get("appId")){e.next=4;break}return R.open({type:"error",content:"appId\u4e0d\u80fd\u4e3a\u7a7a!"}),e.abrupt("return");case 4:return e.next=6,n={pageNum:a,pageSize:g,appId:t},i.Z.get("mp/request",n);case 6:(r=e.sent).data&&(j(r.data.total),d=[],r.data.data.forEach((function(e){d.push({key:e.requestId,api:e.api,requestMethod:e.requestMethod,requestUrl:e.requestUrl,duration:e.duration})})),q(d));case 8:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){F()}),[]),(0,c.useEffect)((function(){F()}),[a,g]);var N={showSizeChanger:!0,onChange:function(e,t){h(e),v(t)},defaultCurrent:a,total:b};return(0,f.jsxs)("div",{children:[(0,f.jsx)(u.Z,{}),(0,f.jsxs)(s.Z,{style:{marginTop:"16px"},title:"\u8bf7\u6c42\u5217\u8868",children:[T,(0,f.jsx)(l.Z,{style:{marginTop:"12px"},rowSelection:z,pagination:N,columns:[{title:"api",dataIndex:"api",width:100},{title:"\u8bf7\u6c42\u65b9\u6cd5",dataIndex:"requestMethod",width:200},{title:"\u8bf7\u6c42URL",dataIndex:"requestUrl",width:200},{title:"\u8bf7\u6c42\u65f6\u95f4",dataIndex:"duration",width:200}],dataSource:S})]})]})}}}]);
//# sourceMappingURL=630.5d567a5f.chunk.js.map