(self.webpackChunkmonitor_admin=self.webpackChunkmonitor_admin||[]).push([[6717],{6717:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>g});var a=n(5722),o=n(6473),r=n(7128),i=n(2791),c=n(3414),l=n(6998),s=n.n(l),d=n(3552),p=n(1087),f=n(3329);const g=()=>{const[t]=(0,p.lr)(),[e,n]=(0,i.useState)("");(0,i.useEffect)((()=>{(async()=>{const e=t.get("appId");if(e){const t=await(0,d.BN)(e);t&&200===t.code&&n(t.data.aid)}})()}),[]);return(0,f.jsx)(o.Z,{children:(0,f.jsxs)("div",{className:"sdk-container",children:[(0,f.jsxs)("div",{className:"sdk-config",children:[(0,f.jsx)("h5",{children:"1.SDK\u914d\u7f6e"}),(0,f.jsxs)("div",{style:{marginTop:"8px"},children:[(0,f.jsx)("span",{style:{color:"#86909c"},children:"AppID:"}),"\xa0\xa0",e," ",(0,f.jsx)(c.Z,{style:{marginLeft:"8px"},onClick:t=>{return n=e,s()(n),void a.ZP.success("\u5df2\u590d\u5236");var n}})]})]}),(0,f.jsx)(r.Z,{type:"vertical",style:{height:"100px"}}),(0,f.jsx)("div",{className:"code-copy",children:(0,f.jsx)("h5",{children:"2.\u590d\u5236\u63a2\u9488"})})]})})}},3414:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var a=n(7462),o=n(2791);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};var i=n(4291),c=function(t,e){return o.createElement(i.Z,(0,a.Z)({},t,{ref:e,icon:r}))};const l=o.forwardRef(c)},7128:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var a=n(2791),o=n(1418),r=n.n(o),i=n(1929),c=n(5586),l=n(7521),s=n(6562),d=n(9922);const p=t=>{const{componentCls:e,sizePaddingEdgeHorizontal:n,colorSplit:a,lineWidth:o,textPaddingInline:r,orientationMargin:i,verticalMarginInline:s}=t;return{[e]:Object.assign(Object.assign({},(0,l.Wf)(t)),{borderBlockStart:"".concat((0,c.bf)(o)," solid ").concat(a),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:s,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat((0,c.bf)(o)," solid ").concat(a)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat((0,c.bf)(t.dividerHorizontalGutterMargin)," 0")},["&-horizontal".concat(e,"-with-text")]:{display:"flex",alignItems:"center",margin:"".concat((0,c.bf)(t.dividerHorizontalWithTextGutterMargin)," 0"),color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(a),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat((0,c.bf)(o)," solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},["&-horizontal".concat(e,"-with-text-left")]:{"&::before":{width:"calc(".concat(i," * 100%)")},"&::after":{width:"calc(100% - ".concat(i," * 100%)")}},["&-horizontal".concat(e,"-with-text-right")]:{"&::before":{width:"calc(100% - ".concat(i," * 100%)")},"&::after":{width:"calc(".concat(i," * 100%)")}},["".concat(e,"-inner-text")]:{display:"inline-block",paddingBlock:0,paddingInline:r},"&-dashed":{background:"none",borderColor:a,borderStyle:"dashed",borderWidth:"".concat((0,c.bf)(o)," 0 0")},["&-horizontal".concat(e,"-with-text").concat(e,"-dashed")]:{"&::before, &::after":{borderStyle:"dashed none none"}},["&-vertical".concat(e,"-dashed")]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},["&-plain".concat(e,"-with-text")]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},["&-horizontal".concat(e,"-with-text-left").concat(e,"-no-default-orientation-margin-left")]:{"&::before":{width:0},"&::after":{width:"100%"},["".concat(e,"-inner-text")]:{paddingInlineStart:n}},["&-horizontal".concat(e,"-with-text-right").concat(e,"-no-default-orientation-margin-right")]:{"&::before":{width:"100%"},"&::after":{width:0},["".concat(e,"-inner-text")]:{paddingInlineEnd:n}}})}},f=(0,s.I$)("Divider",(t=>{const e=(0,d.TS)(t,{dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG,sizePaddingEdgeHorizontal:0});return[p(e)]}),(t=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:t.marginXS})),{unitless:{orientationMargin:!0}});var g=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]])}return n};const u=t=>{const{getPrefixCls:e,direction:n,divider:o}=a.useContext(i.E_),{prefixCls:c,type:l="horizontal",orientation:s="center",orientationMargin:d,className:p,rootClassName:u,children:h,dashed:m,plain:b,style:y}=t,v=g(t,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),x=e("divider",c),[w,C,S]=f(x),z=s.length>0?"-".concat(s):s,k=!!h,E="left"===s&&null!=d,j="right"===s&&null!=d,D=r()(x,null===o||void 0===o?void 0:o.className,C,S,"".concat(x,"-").concat(l),{["".concat(x,"-with-text")]:k,["".concat(x,"-with-text").concat(z)]:k,["".concat(x,"-dashed")]:!!m,["".concat(x,"-plain")]:!!b,["".concat(x,"-rtl")]:"rtl"===n,["".concat(x,"-no-default-orientation-margin-left")]:E,["".concat(x,"-no-default-orientation-margin-right")]:j},p,u),I=a.useMemo((()=>"number"===typeof d?d:/^\d+$/.test(d)?Number(d):d),[d]),M=Object.assign(Object.assign({},E&&{marginLeft:I}),j&&{marginRight:I});return w(a.createElement("div",Object.assign({className:D,style:Object.assign(Object.assign({},null===o||void 0===o?void 0:o.style),y)},v,{role:"separator"}),h&&"vertical"!==l&&a.createElement("span",{className:"".concat(x,"-inner-text"),style:M},h)))}},6998:(t,e,n)=>{"use strict";var a=n(2458),o={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(t,e){var n,r,i,c,l,s,d=!1;e||(e={}),n=e.debug||!1;try{if(i=a(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=t,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(a){if(a.stopPropagation(),e.format)if(a.preventDefault(),"undefined"===typeof a.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[e.format]||o.default;window.clipboardData.setData(r,t)}else a.clipboardData.clearData(),a.clipboardData.setData(e.format,t);e.onCopy&&(a.preventDefault(),e.onCopy(a.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),d=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),r=function(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}("message"in e?e.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,t)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),i()}return d}},2458:t=>{t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],a=0;a<t.rangeCount;a++)n.push(t.getRangeAt(a));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||n.forEach((function(e){t.addRange(e)})),e&&e.focus()}}}}]);
//# sourceMappingURL=6717.0a857028.chunk.js.map