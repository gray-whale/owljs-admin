"use strict";(self.webpackChunkmonitor_admin=self.webpackChunkmonitor_admin||[]).push([[9576],{1583:(e,t,a)=>{a.d(t,{Z:()=>x});var d=a(9286),s=a(8712),l=a(952),i=a(6473),n=a(3403),r=a(2641),o=a(7892),c=a.n(o),h=a(3329);const{RangePicker:u}=s.default,x=e=>{let{data:t}=e;const a=[{label:"\u6700\u8fd130\u5206\u949f",value:[c()().add(-30,"minute"),c()()]},{label:"\u6700\u8fd11\u5c0f\u65f6",value:[c()().add(-1,"h"),c()()]},{label:"\u6700\u8fd13\u5c0f\u65f6",value:[c()().add(-7,"h"),c()()]},{label:"\u6700\u8fd11\u5929",value:[c()().add(-1,"d"),c()()]},{label:"\u6700\u8fd13\u5929",value:[c()().add(-3,"d"),c()()]},{label:"\u6700\u8fd17\u5929",value:[c()().add(-7,"d"),c()()]},{label:"\u6700\u8fd11\u4e2a\u6708",value:[c()().add(-1,"M"),c()()]}],s=(0,h.jsx)("div",{style:{maxWidth:"400px"},children:["pid","\u6d4f\u89c8\u5668","\u6d4f\u89c8\u5668\u7248\u672c","\u7cfb\u7edf","\u7cfb\u7edf\u7248\u672c","\u56fd\u5bb6/\u5730\u533a","\u7701\u4efd","\u57ce\u5e02","IP","\u54c1\u724c","\u673a\u578b","\u9875\u9762url","session_id","view_id","env","release","use_agent","\u8bf7\u6c42\u53c2\u6570","\u7f51\u7edc\u7c7b\u578b","use_id","device_id"].map((e=>(0,h.jsx)(l.Z,{color:"blue",className:"filter-header-tag",children:e},e)))});return(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(u,{showTime:!0,presets:a,onChange:(e,t)=>{e?(console.log("From: ",e[0],", to: ",e[1]),console.log("From: ",t[0],", to: ",t[1])):console.log("Clear")},defaultValue:[c()().add(-1,"d"),c()()]}),(0,h.jsx)(n.Z,{placement:"bottomLeft",trigger:"click",content:s,arrow:!1,children:(0,h.jsx)(r.ZP,{icon:(0,h.jsx)(d.Z,{}),style:{marginLeft:"8px"},children:"\u7b5b\u9009\u6761\u4ef6"})})]})}},9576:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var d=a(1583),s=a(6473),l=a(7828),i=a(1773),n=a(5636),r=a(7128),o=a(4352),c=a(2791),h=a(4689);var u=a(5722),x=a(2954),p=a(9884),m=a(1087),g=a(3329);const v=e=>{const[t,a]=(0,c.useState)(1),[d,s]=(0,c.useState)(10),[l,i]=(0,c.useState)(0),[n,r]=(0,c.useState)([]),[o,v]=(0,c.useState)([]),[j]=(0,m.lr)(),[w,k]=u.ZP.useMessage(),Z=[{title:"\u9519\u8bef\u540d",dataIndex:"name",width:50,render:(t,a)=>(0,g.jsx)("div",{children:(0,g.jsx)(p.Z,{onClick:t=>e.onClick(a.key),children:t})})},{title:"\u9519\u8bef\u4fe1\u606f",dataIndex:"msg",width:100},{title:"\u9519\u8bef\u5185\u5bb9",dataIndex:"stack",width:200,render:(t,a)=>(0,g.jsx)("div",{children:(0,g.jsx)("span",{onClick:t=>e.onClick(a.key),style:{wordBreak:"break-all",overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:"3",WebkitBoxOrient:"vertical"},children:t})})},{title:"\u4e0a\u62a5\u65f6\u95f4",dataIndex:"createdAt",width:100}],y={selectedRowKeys:o,onChange:e=>{v(e)}},f=async()=>{const e=j.get("appId");if(!e)return void w.open({type:"error",content:"appId\u4e0d\u80fd\u4e3a\u7a7a!"});const a=await(s={pageNum:t,pageSize:d,appId:e},h.Z.get("miniapp/jserror",s));var s;if(a.data){i(a.data.total);const e=[];a.data.data.forEach((t=>{e.push({key:t.errorId,name:t.name,msg:t.msg,stack:t.stack,createdAt:t.createdAt})})),r(e)}};(0,c.useEffect)((()=>{f()}),[]),(0,c.useEffect)((()=>{f()}),[t,d]);const b={showSizeChanger:!0,onChange:(e,t)=>{a(e),s(t)},defaultCurrent:t,total:l};return(0,g.jsxs)("div",{children:[k,(0,g.jsx)(x.Z,{style:{marginTop:"12px"},rowSelection:y,pagination:b,columns:Z,dataSource:n})]})};var j=a(732),w=a(50),k=a(2499),Z=a(4561);const y=()=>{const[e,t]=(0,c.useState)(),[a,u]=(0,c.useState)(!1),[p,m]=(0,c.useState)(1),[y,f]=(0,c.useState)(10),[b,C]=(0,c.useState)(0),[S,I]=(0,c.useState)([]),_=[{title:"\u7c7b\u578b",dataIndex:"type",width:50},{title:"\u7b56\u7565",dataIndex:"category",width:100},{title:"\u4fe1\u606f",dataIndex:"message",width:200,render:(e,t)=>(0,g.jsx)("div",{children:(0,g.jsx)("span",{style:{width:"200px",wordBreak:"break-all"},children:e})})},{title:"\u9644\u52a0\u4fe1\u606f",dataIndex:"data",width:100},{title:"\u4e0a\u62a5\u65f6\u95f4",dataIndex:"timestamp",width:100}],z=async e=>{const t=await(a={pageNum:p,pageSize:y,errorId:e},h.Z.get("mp/breadcrumb",a));var a;if(t.data){C(t.data.total);const e=[];t.data.data.forEach((t=>{e.push({type:t.type,category:t.category,message:t.message,data:t.data,timestamp:t.timestamp})})),I(e)}},A=()=>{u(!1)},E=[{key:"1",label:"\u5806\u6808\u660e\u7ec6",children:(0,g.jsx)("p",{children:e&&e.stack})}],P=async e=>{const a=await(e=>h.Z.get("miniapp/jserror/".concat(e)))(e);a.data&&t(a.data),z(e)},T={showSizeChanger:!0,onChange:(e,t)=>{m(e),f(t)},defaultCurrent:p,total:b};return(0,g.jsxs)("div",{children:[(0,g.jsx)(d.Z,{}),(0,g.jsx)(s.Z,{title:"\u9519\u8bef\u5217\u8868",style:{marginTop:"16px"},children:(0,g.jsx)(v,{onClick:e=>{P(e),u(!0)}})}),(0,g.jsx)(l.Z,{title:"\u9519\u8bef\u8be6\u60c5",placement:"right",closable:!1,width:"80%",onClose:A,open:a,extra:(0,g.jsx)(i.Z,{children:(0,g.jsx)(j.Z,{onClick:A})}),children:(0,g.jsxs)("div",{children:[(0,g.jsxs)(n.default,{children:[(0,g.jsx)(k.Z,{level:4,children:null===e||void 0===e?void 0:e.name}),(0,g.jsx)(Z.Z,{children:null===e||void 0===e?void 0:e.msg}),(0,g.jsxs)(Z.Z,{children:[(0,g.jsx)(w.Z,{}),"\xa0\xa0",null===e||void 0===e?void 0:e.createdAt]})]}),(0,g.jsx)(r.Z,{}),(0,g.jsxs)("div",{style:{width:"60%"},children:[(0,g.jsx)(x.Z,{style:{marginTop:"12px"},size:"small",pagination:T,columns:_,dataSource:S}),(0,g.jsxs)(n.default,{children:[(0,g.jsx)(k.Z,{level:5,children:"Js\u9519\u8bef\u5806\u6808"}),(0,g.jsx)(Z.Z,{children:null===e||void 0===e?void 0:e.msg})]}),(0,g.jsx)(o.Z,{bordered:!1,items:E,defaultActiveKey:["1"]})]})]})})]})}}}]);
//# sourceMappingURL=9576.6e2c1773.chunk.js.map