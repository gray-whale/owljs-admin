"use strict";(self.webpackChunkmonitor_admin=self.webpackChunkmonitor_admin||[]).push([[3114],{2502:(e,t,a)=>{a.d(t,{X:()=>s});var n=a(4689);const s=e=>n.Z.get("event",e)},3114:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(2502),s=a(5722),o=a(6473),i=a(4106),r=a(2791),d=a(1087),c=a(3329);const u=()=>{const[e,t]=(0,r.useState)(1),[a,u]=(0,r.useState)(10),[p,l]=(0,r.useState)(0),[g,h]=(0,r.useState)([]),[m,f]=(0,r.useState)([]),[w]=(0,d.lr)(),[S,I]=s.ZP.useMessage(),x={selectedRowKeys:m,onChange:e=>{f(e)}},C=async()=>{const t=w.get("appId");if(!t)return void S.open({type:"error",content:"appId\u4e0d\u80fd\u4e3a\u7a7a!"});const s=await(0,n.X)({pageNum:e,pageSize:a,appId:t});if(s.data){l(s.data.total);const e=[];s.data.data.forEach((t=>{e.push({key:t.eventId,name:t.name,metrics:t.metrics,categories:t.categories})})),h(e)}};(0,r.useEffect)((()=>{C()}),[]),(0,r.useEffect)((()=>{C()}),[e,a]);const k={showSizeChanger:!0,onChange:(e,a)=>{t(e),u(a)},defaultCurrent:e,total:p};return(0,c.jsxs)(o.Z,{title:"\u4e8b\u4ef6\u5217\u8868",children:[I,(0,c.jsx)(i.Z,{style:{marginTop:"12px"},rowSelection:x,pagination:k,columns:[{title:"\u4e8b\u4ef6\u540d",dataIndex:"name",width:100},{title:"\u81ea\u5b9a\u4e49\u6570\u503c",dataIndex:"metrics",width:200},{title:"\u4e8b\u4ef6\u672c\u8eab\u7684\u7ef4\u5ea6",dataIndex:"categories",width:200}],dataSource:g})]})}}}]);
//# sourceMappingURL=3114.74c76a65.chunk.js.map