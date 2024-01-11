"use strict";(self.webpackChunkmonitor_admin=self.webpackChunkmonitor_admin||[]).push([[9728],{1583:(e,t,a)=>{a.d(t,{Z:()=>x});var d=a(9286),s=a(8712),l=a(952),n=a(6473),i=a(3403),r=a(2641),o=a(7892),c=a.n(o),h=a(3329);const{RangePicker:u}=s.default,x=e=>{let{data:t}=e;const a=[{label:"\u6700\u8fd130\u5206\u949f",value:[c()().add(-30,"minute"),c()()]},{label:"\u6700\u8fd11\u5c0f\u65f6",value:[c()().add(-1,"h"),c()()]},{label:"\u6700\u8fd13\u5c0f\u65f6",value:[c()().add(-7,"h"),c()()]},{label:"\u6700\u8fd11\u5929",value:[c()().add(-1,"d"),c()()]},{label:"\u6700\u8fd13\u5929",value:[c()().add(-3,"d"),c()()]},{label:"\u6700\u8fd17\u5929",value:[c()().add(-7,"d"),c()()]},{label:"\u6700\u8fd11\u4e2a\u6708",value:[c()().add(-1,"M"),c()()]}],s=(0,h.jsx)("div",{style:{maxWidth:"400px"},children:["pid","\u6d4f\u89c8\u5668","\u6d4f\u89c8\u5668\u7248\u672c","\u7cfb\u7edf","\u7cfb\u7edf\u7248\u672c","\u56fd\u5bb6/\u5730\u533a","\u7701\u4efd","\u57ce\u5e02","IP","\u54c1\u724c","\u673a\u578b","\u9875\u9762url","session_id","view_id","env","release","use_agent","\u8bf7\u6c42\u53c2\u6570","\u7f51\u7edc\u7c7b\u578b","use_id","device_id"].map((e=>(0,h.jsx)(l.Z,{color:"blue",className:"filter-header-tag",children:e},e)))});return(0,h.jsxs)(n.Z,{children:[(0,h.jsx)(u,{showTime:!0,presets:a,onChange:(e,t)=>{e?(console.log("From: ",e[0],", to: ",e[1]),console.log("From: ",t[0],", to: ",t[1])):console.log("Clear")},defaultValue:[c()().add(-1,"d"),c()()]}),(0,h.jsx)(i.Z,{placement:"bottomLeft",trigger:"click",content:s,arrow:!1,children:(0,h.jsx)(r.ZP,{icon:(0,h.jsx)(d.Z,{}),style:{marginLeft:"8px"},children:"\u7b5b\u9009\u6761\u4ef6"})})]})}},9728:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var d=a(1583),s=a(6473),l=a(7828),n=a(1773),i=a(4900),r=a(7128),o=a(4352),c=a(2791),h=a(4689);var u=a(5722),x=a(4106),p=a(1087),m=a(3329);const g=e=>{const[t,a]=(0,c.useState)(1),[d,s]=(0,c.useState)(10),[l,n]=(0,c.useState)(0),[i,r]=(0,c.useState)([]),[o,g]=(0,c.useState)([]),[j]=(0,p.lr)(),[v,w]=u.ZP.useMessage(),Z=[{title:"\u9519\u8bef\u540d",dataIndex:"name",width:50},{title:"\u9519\u8bef\u4fe1\u606f",dataIndex:"msg",width:100},{title:"\u9519\u8bef\u5185\u5bb9",dataIndex:"stack",width:200,render:(t,a)=>(0,m.jsxs)("div",{onClick:t=>e.onClick(a.key),children:[(0,m.jsx)("span",{style:{display:"inline",color:"#3370ff",fontSize:"16px"},children:a.name}),"\xa0\xa0\xa0",(0,m.jsx)("span",{style:{width:"200px",wordBreak:"break-all"},children:t})]})},{title:"\u4e0a\u62a5\u65f6\u95f4",dataIndex:"createdAt",width:100}],f={selectedRowKeys:o,onChange:e=>{g(e)}},y=async()=>{const e=j.get("appId");if(!e)return void v.open({type:"error",content:"appId\u4e0d\u80fd\u4e3a\u7a7a!"});const a=await(s={pageNum:t,pageSize:d,appId:e},h.Z.get("web/jserror",s));var s;if(a.data){n(a.data.total);const e=[];a.data.data.forEach((t=>{e.push({key:t.errorId,name:t.name,msg:t.msg,stack:t.stack,createdAt:t.createdAt})})),r(e)}};(0,c.useEffect)((()=>{y()}),[]),(0,c.useEffect)((()=>{y()}),[t,d]);const b={showSizeChanger:!0,onChange:(e,t)=>{a(e),s(t)},defaultCurrent:t,total:l};return(0,m.jsxs)("div",{children:[w,(0,m.jsx)(x.Z,{style:{marginTop:"12px"},rowSelection:f,pagination:b,columns:Z,dataSource:i})]})};var j=a(732),v=a(50),w=a(4561),Z=a(2499);const f=()=>{const[e,t]=(0,c.useState)(),[a,u]=(0,c.useState)(1),[p,f]=(0,c.useState)(10),[y,b]=(0,c.useState)(0),[k,S]=(0,c.useState)(!1),[C,I]=(0,c.useState)([]),_=[{key:"1",label:"\u5806\u6808\u660e\u7ec6",children:(0,m.jsx)("p",{children:e&&e.stack})}],z=[{title:"\u7c7b\u578b",dataIndex:"type",width:50},{title:"\u7b56\u7565",dataIndex:"category",width:100},{title:"\u4fe1\u606f",dataIndex:"message",width:200,render:(e,t)=>(0,m.jsx)("div",{children:(0,m.jsx)("span",{style:{width:"200px",wordBreak:"break-all"},children:e})})},{title:"\u9644\u52a0\u4fe1\u606f",dataIndex:"data",width:100},{title:"\u4e0a\u62a5\u65f6\u95f4",dataIndex:"timestamp",width:100}],A=async e=>{const t=await(d={pageNum:a,pageSize:p,errorId:e},h.Z.get("web/breadcrumb",d));var d;if(t.data){b(t.data.total);const e=[];t.data.data.forEach((t=>{e.push({key:t.breadcrumbId,type:t.type,category:t.category,message:t.message,data:t.data,timestamp:t.timestamp})})),I(e)}},E=()=>{S(!1)},P=async e=>{const a=await(e=>h.Z.get("web/jserror/".concat(e)))(e);a.data&&t(a.data),A(e)},T={showSizeChanger:!0,onChange:(e,t)=>{u(e),f(t)},defaultCurrent:a,total:y};return(0,m.jsxs)("div",{children:[(0,m.jsx)(d.Z,{}),(0,m.jsx)(s.Z,{title:"\u9519\u8bef\u5217\u8868",style:{marginTop:"16px"},children:(0,m.jsx)(g,{onClick:e=>{P(e),S(!0)}})}),(0,m.jsx)(l.Z,{title:"\u9519\u8bef\u8be6\u60c5",placement:"right",closable:!1,width:"80%",onClose:E,open:k,extra:(0,m.jsx)(n.Z,{children:(0,m.jsx)(j.Z,{onClick:E})}),children:(0,m.jsxs)("div",{children:[(0,m.jsxs)(i.default,{children:[(0,m.jsx)(Z.Z,{level:4,children:null===e||void 0===e?void 0:e.name}),(0,m.jsx)(w.Z,{children:null===e||void 0===e?void 0:e.msg}),(0,m.jsxs)(w.Z,{children:[(0,m.jsx)(v.Z,{}),"\xa0\xa0",null===e||void 0===e?void 0:e.createdAt]})]}),(0,m.jsx)(r.Z,{}),(0,m.jsxs)(i.default,{children:[(0,m.jsx)(Z.Z,{level:4,children:"UserAgent"}),(0,m.jsx)(w.Z,{children:null===e||void 0===e?void 0:e.env.ua})]}),(0,m.jsx)(r.Z,{}),(0,m.jsxs)("div",{style:{width:"60%"},children:[(0,m.jsx)(x.Z,{style:{marginTop:"12px"},size:"small",pagination:T,columns:z,dataSource:C}),(0,m.jsxs)(i.default,{children:[(0,m.jsx)(Z.Z,{level:5,children:"Js\u9519\u8bef\u5806\u6808"}),(0,m.jsx)(w.Z,{children:null===e||void 0===e?void 0:e.msg})]}),(0,m.jsx)(o.Z,{bordered:!1,items:_,defaultActiveKey:["1"]})]})]})})]})}}}]);
//# sourceMappingURL=9728.ff24edec.chunk.js.map