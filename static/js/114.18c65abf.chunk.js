"use strict";(self.webpackChunkmonitor_admin=self.webpackChunkmonitor_admin||[]).push([[114],{2502:function(e,t,n){n.d(t,{X:function(){return r}});var a=n(2584),r=function(e){return a.Z.get("event",e)}},3114:function(e,t,n){n.r(t);var a=n(4165),r=n(5861),u=n(9439),i=n(2502),o=n(7027),s=n(3218),c=n(3920),d=n(2791),f=n(1087),p=n(3329);t.default=function(){var e=(0,d.useState)(1),t=(0,u.Z)(e,2),n=t[0],l=t[1],h=(0,d.useState)(10),m=(0,u.Z)(h,2),Z=m[0],g=m[1],w=(0,d.useState)(0),v=(0,u.Z)(w,2),x=v[0],S=v[1],k=(0,d.useState)([]),I=(0,u.Z)(k,2),C=I[0],y=I[1],b=(0,d.useState)([]),E=(0,u.Z)(b,2),j=E[0],z=E[1],X=(0,f.lr)(),_=(0,u.Z)(X,1)[0],K=o.ZP.useMessage(),M=(0,u.Z)(K,2),N=M[0],P=M[1],R={selectedRowKeys:j,onChange:function(e){z(e)}},T=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t,r,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=_.get("appId")){e.next=4;break}return N.open({type:"error",content:"appId\u4e0d\u80fd\u4e3a\u7a7a!"}),e.abrupt("return");case 4:return e.next=6,(0,i.X)({pageNum:n,pageSize:Z,appId:t});case 6:(r=e.sent).data&&(S(r.data.total),u=[],r.data.data.forEach((function(e){u.push({key:e.eventId,name:e.name,metrics:e.metrics,categories:e.categories})})),y(u));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){T()}),[]),(0,d.useEffect)((function(){T()}),[n,Z]);var q={showSizeChanger:!0,onChange:function(e,t){l(e),g(t)},defaultCurrent:n,total:x};return(0,p.jsxs)(s.Z,{title:"\u4e8b\u4ef6\u5217\u8868",children:[P,(0,p.jsx)(c.Z,{style:{marginTop:"12px"},rowSelection:R,pagination:q,columns:[{title:"\u4e8b\u4ef6\u540d",dataIndex:"name",width:100},{title:"\u81ea\u5b9a\u4e49\u6570\u503c",dataIndex:"metrics",width:200},{title:"\u4e8b\u4ef6\u672c\u8eab\u7684\u7ef4\u5ea6",dataIndex:"categories",width:200}],dataSource:C})]})}}}]);
//# sourceMappingURL=114.18c65abf.chunk.js.map