"use strict";(self.webpackChunkmonitor_admin=self.webpackChunkmonitor_admin||[]).push([[481],{1243:function(e,t,n){n.d(t,{j:function(){return o}});var r=n(2584),o=function(e){return r.Z.get("web/jserror",e)}},1583:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(9286),o=n(5882),a=n(2339),i=n(3218),s=n(3403),u=n(7309),l=n(7892),d=n.n(l),c=n(3329),f=o.Z.RangePicker,x=function(e){e.data;var t=[{label:"\u6700\u8fd130\u5206\u949f",value:[d()().add(-30,"minute"),d()()]},{label:"\u6700\u8fd11\u5c0f\u65f6",value:[d()().add(-1,"h"),d()()]},{label:"\u6700\u8fd13\u5c0f\u65f6",value:[d()().add(-7,"h"),d()()]},{label:"\u6700\u8fd11\u5929",value:[d()().add(-1,"d"),d()()]},{label:"\u6700\u8fd13\u5929",value:[d()().add(-3,"d"),d()()]},{label:"\u6700\u8fd17\u5929",value:[d()().add(-7,"d"),d()()]},{label:"\u6700\u8fd11\u4e2a\u6708",value:[d()().add(-1,"M"),d()()]}],n=(0,c.jsx)("div",{style:{maxWidth:"400px"},children:["pid","\u6d4f\u89c8\u5668","\u6d4f\u89c8\u5668\u7248\u672c","\u7cfb\u7edf","\u7cfb\u7edf\u7248\u672c","\u56fd\u5bb6/\u5730\u533a","\u7701\u4efd","\u57ce\u5e02","IP","\u54c1\u724c","\u673a\u578b","\u9875\u9762url","session_id","view_id","env","release","use_agent","\u8bf7\u6c42\u53c2\u6570","\u7f51\u7edc\u7c7b\u578b","use_id","device_id"].map((function(e){return(0,c.jsx)(a.Z,{color:"blue",className:"filter-header-tag",children:e},e)}))});return(0,c.jsxs)(i.Z,{children:[(0,c.jsx)(f,{showTime:!0,presets:t,onChange:function(e,t){e?(console.log("From: ",e[0],", to: ",e[1]),console.log("From: ",t[0],", to: ",t[1])):console.log("Clear")},defaultValue:[d()().add(-1,"d"),d()()]}),(0,c.jsx)(s.Z,{placement:"bottomLeft",trigger:"click",content:n,arrow:!1,children:(0,c.jsx)(u.ZP,{icon:(0,c.jsx)(r.Z,{}),style:{marginLeft:"8px"},children:"\u7b5b\u9009\u6761\u4ef6"})})]})}},9481:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(9439),o=n(1583),a=n(3218),i=n(4424),s=n(7828),u=n(1046),l=n(2791),d=n(4165),c=n(5861),f=n(1243),x=n(3920),h=n(3329),p=function(e){var t=(0,l.useState)(1),n=(0,r.Z)(t,2),o=n[0],a=n[1],i=(0,l.useState)(10),s=(0,r.Z)(i,2),u=s[0],p=s[1],g=(0,l.useState)(0),Z=(0,r.Z)(g,2),j=Z[0],v=Z[1],m=(0,l.useState)([]),C=(0,r.Z)(m,2),S=C[0],w=C[1],k=(0,l.useState)([]),I=(0,r.Z)(k,2),y=I[0],L=I[1],b=[{title:"\u9519\u8bef\u5185\u5bb9",dataIndex:"content",width:200,render:function(t){return(0,h.jsx)("div",{children:(0,h.jsx)("span",{onClick:e.onClick,style:{width:"200px",wordBreak:"break-all"},children:t})})}},{title:"\u8d77\u6b62\u65f6\u95f4",dataIndex:"time",width:200},{title:"\u9519\u8bef\u6570",dataIndex:"errorCount",width:50},{title:"\u5f71\u54cd\u7528\u6237\u6570",dataIndex:"userCount",width:50}],E={selectedRowKeys:y,onChange:function(e){L(e)}},P=function(){var e=(0,c.Z)((0,d.Z)().mark((function e(){var t,n;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.j)({pageNum:o,pageSize:u});case 2:(t=e.sent).data&&(v(t.data.total),n=[],t.data.data.forEach((function(e){n.push({key:e.errorId,content:e.stack,time:"2020/12/09",errorCount:5,userCount:6})})),w(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){P()}),[]),(0,l.useEffect)((function(){P()}),[o,u]);var J={showSizeChanger:!0,onChange:function(e,t){a(e),p(t)},defaultCurrent:o,total:j};return(0,h.jsx)(x.Z,{style:{marginTop:"12px"},rowSelection:E,pagination:J,columns:b,dataSource:S})},g=function(e){for(var t=(0,l.useState)([]),n=(0,r.Z)(t,2),o=n[0],a=n[1],i=[],s=0;s<10;s++)i.push({key:s,pid:"script error",errorCount:5,userCount:6});var u={selectedRowKeys:o,onChange:function(e){console.log("selectedRowKeys changed: ",e),a(e)}};return(0,h.jsx)(x.Z,{style:{marginTop:"12px"},rowSelection:u,pagination:!1,columns:[{title:"PID",dataIndex:"pid"},{title:"\u9519\u8bef\u6570",dataIndex:"errorCount"},{title:"\u5f71\u54cd\u7528\u6237\u6570",dataIndex:"userCount"}],dataSource:i})},Z=function(e){for(var t=(0,l.useState)([]),n=(0,r.Z)(t,2),o=n[0],a=n[1],i=[],s=0;s<10;s++)i.push({key:s,content:"script error",errorCount:5,userCount:6});var u={selectedRowKeys:o,onChange:function(e){a(e)}};return(0,h.jsx)(x.Z,{style:{marginTop:"12px"},rowSelection:u,pagination:!1,columns:[{title:"\u9519\u8bef\u5185\u5bb9",dataIndex:"content"},{title:"\u9519\u8bef\u6570",dataIndex:"errorCount"},{title:"\u5f71\u54cd\u7528\u6237\u6570",dataIndex:"userCount"}],dataSource:i})},j=n(732),v=function(e){return e[e.JSErrorList=0]="JSErrorList",e[e.PageList=1]="PageList",e[e.ErrorInfoList=2]="ErrorInfoList",e}(v||{}),m=function(){var e=(0,l.useState)(v.JSErrorList),t=(0,r.Z)(e,2),n=t[0],d=t[1],c=(0,l.useState)(!1),f=(0,r.Z)(c,2),x=f[0],m=f[1],C=function(){m(!1)};return(0,h.jsxs)("div",{children:[(0,h.jsx)(o.Z,{}),(0,h.jsxs)(a.Z,{title:"\u9519\u8bef\u53ca\u9875\u9762\u5217\u8868",style:{marginTop:"16px"},children:[(0,h.jsxs)(i.ZP.Group,{defaultValue:v.JSErrorList,buttonStyle:"solid",onChange:function(e){d(e.target.value)},children:[(0,h.jsx)(i.ZP.Button,{value:v.JSErrorList,children:"JS\u9519\u8bef\u5217\u8868"}),(0,h.jsx)(i.ZP.Button,{value:v.PageList,children:"\u9875\u9762\u5217\u8868"}),(0,h.jsx)(i.ZP.Button,{value:v.ErrorInfoList,children:"\u9519\u8bef\u4fe1\u606f\u5217\u8868"})]}),n===v.JSErrorList&&(0,h.jsx)(p,{onClick:function(){m(!0)}}),n===v.PageList&&(0,h.jsx)(g,{}),n===v.ErrorInfoList&&(0,h.jsx)(Z,{})]}),(0,h.jsxs)(s.Z,{title:"\u9519\u8bef\u4fe1\u606f\u6807\u9898",placement:"right",closable:!1,width:"80%",onClose:C,open:x,extra:(0,h.jsx)(u.Z,{children:(0,h.jsx)(j.Z,{onClick:C})}),children:[(0,h.jsx)("p",{children:"Some contents..."}),(0,h.jsx)("p",{children:"Some contents..."}),(0,h.jsx)("p",{children:"Some contents..."})]})]})}}}]);
//# sourceMappingURL=481.bbd64e60.chunk.js.map