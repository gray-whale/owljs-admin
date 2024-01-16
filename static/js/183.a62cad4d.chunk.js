"use strict";(self.webpackChunkmonitor_admin=self.webpackChunkmonitor_admin||[]).push([[183],{183:(t,e,a)=>{a.d(e,{Z:()=>_});var n=a(1418),c=a.n(n),o=a(2791),s=a(1929),i=a(1818);const l=t=>{const{prefixCls:e,className:a,style:n,size:s,shape:i}=t,l=c()({["".concat(e,"-lg")]:"large"===s,["".concat(e,"-sm")]:"small"===s}),r=c()({["".concat(e,"-circle")]:"circle"===i,["".concat(e,"-square")]:"square"===i,["".concat(e,"-round")]:"round"===i}),g=o.useMemo((()=>"number"===typeof s?{width:s,height:s,lineHeight:"".concat(s,"px")}:{}),[s]);return o.createElement("span",{className:c()(e,l,r,a),style:Object.assign(Object.assign({},g),n)})};var r=a(5586),g=a(6562),d=a(9922);const u=new r.E4("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),m=t=>({height:t,lineHeight:(0,r.bf)(t)}),b=t=>Object.assign({width:t},m(t)),h=t=>({background:t.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:u,animationDuration:t.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),p=(t,e)=>Object.assign({width:e(t).mul(5).equal(),minWidth:e(t).mul(5).equal()},m(t)),C=t=>{const{skeletonAvatarCls:e,gradientFromColor:a,controlHeight:n,controlHeightLG:c,controlHeightSM:o}=t;return{["".concat(e)]:Object.assign({display:"inline-block",verticalAlign:"top",background:a},b(n)),["".concat(e).concat(e,"-circle")]:{borderRadius:"50%"},["".concat(e).concat(e,"-lg")]:Object.assign({},b(c)),["".concat(e).concat(e,"-sm")]:Object.assign({},b(o))}},k=t=>{const{controlHeight:e,borderRadiusSM:a,skeletonInputCls:n,controlHeightLG:c,controlHeightSM:o,gradientFromColor:s,calc:i}=t;return{["".concat(n)]:Object.assign({display:"inline-block",verticalAlign:"top",background:s,borderRadius:a},p(e,i)),["".concat(n,"-lg")]:Object.assign({},p(c,i)),["".concat(n,"-sm")]:Object.assign({},p(o,i))}},v=t=>Object.assign({width:t},m(t)),f=t=>{const{skeletonImageCls:e,imageSizeBase:a,gradientFromColor:n,borderRadiusSM:c,calc:o}=t;return{["".concat(e)]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:n,borderRadius:c},v(o(a).mul(2).equal())),{["".concat(e,"-path")]:{fill:"#bfbfbf"},["".concat(e,"-svg")]:Object.assign(Object.assign({},v(a)),{maxWidth:o(a).mul(4).equal(),maxHeight:o(a).mul(4).equal()}),["".concat(e,"-svg").concat(e,"-svg-circle")]:{borderRadius:"50%"}}),["".concat(e).concat(e,"-circle")]:{borderRadius:"50%"}}},j=(t,e,a)=>{const{skeletonButtonCls:n}=t;return{["".concat(a).concat(n,"-circle")]:{width:e,minWidth:e,borderRadius:"50%"},["".concat(a).concat(n,"-round")]:{borderRadius:e}}},O=(t,e)=>Object.assign({width:e(t).mul(2).equal(),minWidth:e(t).mul(2).equal()},m(t)),w=t=>{const{borderRadiusSM:e,skeletonButtonCls:a,controlHeight:n,controlHeightLG:c,controlHeightSM:o,gradientFromColor:s,calc:i}=t;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({["".concat(a)]:Object.assign({display:"inline-block",verticalAlign:"top",background:s,borderRadius:e,width:i(n).mul(2).equal(),minWidth:i(n).mul(2).equal()},O(n,i))},j(t,n,a)),{["".concat(a,"-lg")]:Object.assign({},O(c,i))}),j(t,c,"".concat(a,"-lg"))),{["".concat(a,"-sm")]:Object.assign({},O(o,i))}),j(t,o,"".concat(a,"-sm")))},x=t=>{const{componentCls:e,skeletonAvatarCls:a,skeletonTitleCls:n,skeletonParagraphCls:c,skeletonButtonCls:o,skeletonInputCls:s,skeletonImageCls:i,controlHeight:l,controlHeightLG:r,controlHeightSM:g,gradientFromColor:d,padding:u,marginSM:m,borderRadius:p,titleHeight:v,blockRadius:j,paragraphLiHeight:O,controlHeightXS:x,paragraphMarginTop:E}=t;return{["".concat(e)]:{display:"table",width:"100%",["".concat(e,"-header")]:{display:"table-cell",paddingInlineEnd:u,verticalAlign:"top",["".concat(a)]:Object.assign({display:"inline-block",verticalAlign:"top",background:d},b(l)),["".concat(a,"-circle")]:{borderRadius:"50%"},["".concat(a,"-lg")]:Object.assign({},b(r)),["".concat(a,"-sm")]:Object.assign({},b(g))},["".concat(e,"-content")]:{display:"table-cell",width:"100%",verticalAlign:"top",["".concat(n)]:{width:"100%",height:v,background:d,borderRadius:j,["+ ".concat(c)]:{marginBlockStart:g}},["".concat(c)]:{padding:0,"> li":{width:"100%",height:O,listStyle:"none",background:d,borderRadius:j,"+ li":{marginBlockStart:x}}},["".concat(c,"> li:last-child:not(:first-child):not(:nth-child(2))")]:{width:"61%"}},["&-round ".concat(e,"-content")]:{["".concat(n,", ").concat(c," > li")]:{borderRadius:p}}},["".concat(e,"-with-avatar ").concat(e,"-content")]:{["".concat(n)]:{marginBlockStart:m,["+ ".concat(c)]:{marginBlockStart:E}}},["".concat(e).concat(e,"-element")]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},w(t)),C(t)),k(t)),f(t)),["".concat(e).concat(e,"-block")]:{width:"100%",["".concat(o)]:{width:"100%"},["".concat(s)]:{width:"100%"}},["".concat(e).concat(e,"-active")]:{["\n        ".concat(n,",\n        ").concat(c," > li,\n        ").concat(a,",\n        ").concat(o,",\n        ").concat(s,",\n        ").concat(i,"\n      ")]:Object.assign({},h(t))}}},E=(0,g.I$)("Skeleton",(t=>{const{componentCls:e,calc:a}=t,n=(0,d.TS)(t,{skeletonAvatarCls:"".concat(e,"-avatar"),skeletonTitleCls:"".concat(e,"-title"),skeletonParagraphCls:"".concat(e,"-paragraph"),skeletonButtonCls:"".concat(e,"-button"),skeletonInputCls:"".concat(e,"-input"),skeletonImageCls:"".concat(e,"-image"),imageSizeBase:a(t.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:"linear-gradient(90deg, ".concat(t.gradientFromColor," 25%, ").concat(t.gradientToColor," 37%, ").concat(t.gradientFromColor," 63%)"),skeletonLoadingMotionDuration:"1.4s"});return[x(n)]}),(t=>{const{colorFillContent:e,colorFill:a}=t;return{color:e,colorGradientEnd:a,gradientFromColor:e,gradientToColor:a,titleHeight:t.controlHeight/2,blockRadius:t.borderRadiusSM,paragraphMarginTop:t.marginLG+t.marginXXS,paragraphLiHeight:t.controlHeight/2}}),{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),N=t=>{const{prefixCls:e,className:a,rootClassName:n,active:r,shape:g="circle",size:d="default"}=t,{getPrefixCls:u}=o.useContext(s.E_),m=u("skeleton",e),[b,h,p]=E(m),C=(0,i.Z)(t,["prefixCls","className"]),k=c()(m,"".concat(m,"-element"),{["".concat(m,"-active")]:r},a,n,h,p);return b(o.createElement("div",{className:k},o.createElement(l,Object.assign({prefixCls:"".concat(m,"-avatar"),shape:g,size:d},C))))},y=t=>{const{prefixCls:e,className:a,rootClassName:n,active:r,block:g=!1,size:d="default"}=t,{getPrefixCls:u}=o.useContext(s.E_),m=u("skeleton",e),[b,h,p]=E(m),C=(0,i.Z)(t,["prefixCls"]),k=c()(m,"".concat(m,"-element"),{["".concat(m,"-active")]:r,["".concat(m,"-block")]:g},a,n,h,p);return b(o.createElement("div",{className:k},o.createElement(l,Object.assign({prefixCls:"".concat(m,"-button"),size:d},C))))},H=t=>{const{prefixCls:e,className:a,rootClassName:n,style:i,active:l}=t,{getPrefixCls:r}=o.useContext(s.E_),g=r("skeleton",e),[d,u,m]=E(g),b=c()(g,"".concat(g,"-element"),{["".concat(g,"-active")]:l},a,n,u,m);return d(o.createElement("div",{className:b},o.createElement("div",{className:c()("".concat(g,"-image"),a),style:i},o.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(g,"-image-svg")},o.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(g,"-image-path")})))))},q=t=>{const{prefixCls:e,className:a,rootClassName:n,active:r,block:g,size:d="default"}=t,{getPrefixCls:u}=o.useContext(s.E_),m=u("skeleton",e),[b,h,p]=E(m),C=(0,i.Z)(t,["prefixCls"]),k=c()(m,"".concat(m,"-element"),{["".concat(m,"-active")]:r,["".concat(m,"-block")]:g},a,n,h,p);return b(o.createElement("div",{className:k},o.createElement(l,Object.assign({prefixCls:"".concat(m,"-input"),size:d},C))))};var z=a(7462);const R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"};var S=a(4291),M=function(t,e){return o.createElement(S.Z,(0,z.Z)({},t,{ref:e,icon:R}))};const B=o.forwardRef(M),A=t=>{const{prefixCls:e,className:a,rootClassName:n,style:i,active:l,children:r}=t,{getPrefixCls:g}=o.useContext(s.E_),d=g("skeleton",e),[u,m,b]=E(d),h=c()(d,"".concat(d,"-element"),{["".concat(d,"-active")]:l},m,a,n,b),p=null!==r&&void 0!==r?r:o.createElement(B,null);return u(o.createElement("div",{className:h},o.createElement("div",{className:c()("".concat(d,"-image"),a),style:i},p)))};var F=a(3433);const I=t=>{const e=e=>{const{width:a,rows:n=2}=t;return Array.isArray(a)?a[e]:n-1===e?a:void 0},{prefixCls:a,className:n,style:s,rows:i}=t,l=(0,F.Z)(Array(i)).map(((t,a)=>o.createElement("li",{key:a,style:{width:e(a)}})));return o.createElement("ul",{className:c()(a,n),style:s},l)},L=t=>{let{prefixCls:e,className:a,width:n,style:s}=t;return o.createElement("h3",{className:c()(e,a),style:Object.assign({width:n},s)})};function P(t){return t&&"object"===typeof t?t:{}}const T=t=>{const{prefixCls:e,loading:a,className:n,rootClassName:i,style:r,children:g,avatar:d=!1,title:u=!0,paragraph:m=!0,active:b,round:h}=t,{getPrefixCls:p,direction:C,skeleton:k}=o.useContext(s.E_),v=p("skeleton",e),[f,j,O]=E(v);if(a||!("loading"in t)){const t=!!d,e=!!u,a=!!m;let s,g;if(t){const t=Object.assign(Object.assign({prefixCls:"".concat(v,"-avatar")},function(t,e){return t&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(e,a)),P(d));s=o.createElement("div",{className:"".concat(v,"-header")},o.createElement(l,Object.assign({},t)))}if(e||a){let n,c;if(e){const e=Object.assign(Object.assign({prefixCls:"".concat(v,"-title")},function(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}(t,a)),P(u));n=o.createElement(L,Object.assign({},e))}if(a){const a=Object.assign(Object.assign({prefixCls:"".concat(v,"-paragraph")},function(t,e){const a={};return t&&e||(a.width="61%"),a.rows=!t&&e?3:2,a}(t,e)),P(m));c=o.createElement(I,Object.assign({},a))}g=o.createElement("div",{className:"".concat(v,"-content")},n,c)}const p=c()(v,{["".concat(v,"-with-avatar")]:t,["".concat(v,"-active")]:b,["".concat(v,"-rtl")]:"rtl"===C,["".concat(v,"-round")]:h},null===k||void 0===k?void 0:k.className,n,i,j,O);return f(o.createElement("div",{className:p,style:Object.assign(Object.assign({},null===k||void 0===k?void 0:k.style),r)},s,g))}return"undefined"!==typeof g?g:null};T.Button=y,T.Avatar=N,T.Input=q,T.Image=H,T.Node=A;const _=T}}]);
//# sourceMappingURL=183.a62cad4d.chunk.js.map