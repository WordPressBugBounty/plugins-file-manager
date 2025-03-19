import{j as t,a as s,L as e,c as u}from"./main.6.7.js";import{r as g}from"./react-vendor-0bea0611.js";import{t as f,h as p,S as b,F as c,i as d,j as y,k as v,R as w,T as x}from"./antd-b03f4406.js";import"./@emotion/react-f59bf8e1.js";import"./react-router-dom-551725bc.js";import"./@tanstack/react-query-devtools-28f31d30.js";import"./@tanstack/react-query-cb8e8166.js";const{Meta:S}=d,i={supportEmail:"support@bitapps.pro",supportLink:"https://bitapps.pro/contact",bitAppsLogo:"https://bitapps.pro/wp-content/uploads/2023/03/bit-apps.svg",pluginsList:[{name:"Bit Flows",icon:"https://ps.w.org/bit-pi/assets/icon-256x256.png?rev=3228494",description:"Communicate with your customers using different messaging apps.",doc:"https://bit-flows.com/users-guide/",url:"https://wordpress.org/plugin/bit-pi"},{name:"Bit Form",icon:"https://ps.w.org/bit-form/assets/icon-128x128.gif?rev=2947008",description:"A drag and drop form builder that allows you to create complex form in a minute.",doc:"https://bitapps.pro/docs/bit-form",url:"https://wordpress.org/plugin/bit-form"},{name:"Bit Integrations",icon:"https://ps.w.org/bit-integrations/assets/icon-128x128.gif?rev=2974059",description:"Best Automation Plugin for WordPress. Automate 200+ (highest in WordPress) Individual Platforms.",doc:"https://bitapps.pro/docs/bit-integrations",url:"https://wordpress.org/plugin/bit-integrations"},{name:"Bit Assist",icon:"https://ps.w.org/bit-assist/assets/icon-128x128.gif?rev=3008729",description:"Communicate with your customers using different messaging apps.",doc:"https://bitapps.pro/docs/bit-assist",url:"https://wordpress.org/plugin/bit-assist"},{name:"Bit Social",icon:"https://ps.w.org/bit-social/assets/icon-128x128.gif?rev=3176768",description:"The easiest WordPress plugin for automatic social media posting which allows you to automatically share your WordPress posts on social media platforms..",doc:"https://bitapps.pro/docs/bit-social",url:"https://wordpress.org/plugin/bit-social"}]},{Title:l,Paragraph:T,Link:a,Text:n}=x;var k={name:"cdmyym",styles:"&:focus{box-shadow:none;}"},P={name:"1mrzrn1",styles:"&:focus{box-shadow:none;}&:hover{text-decoration:underline !important;}"};function z(){const[m]=g.useState(!1),{token:r}=f.useToken();return t("div",{className:"p-6",children:s(w,{children:[t(p,{md:13,sm:24,children:s("div",{className:"mb-5",children:[t(l,{level:5,children:"Support"}),t(T,{style:{color:r.colorTextSecondary},children:"In Bit Apps, we provide all kind product support for any types of customer, it dose not matter FREE or PRO user. We actively provide support through Email and Live Chat."}),s(b,{direction:"vertical",children:[t(n,{children:s(c,{gap:10,children:[t(e,{name:"Mail",size:18}),t(a,{href:`mailto:${i.supportEmail}`,strong:!0,underline:!0,style:{color:r.colorText},children:i.supportEmail})]})}),t(n,{children:s(c,{gap:10,children:[t(e,{name:"MessageCircle",size:18}),s(a,{href:i.supportLink,strong:!0,children:["Chat here"," ",t(e,{name:"MoveUpRight",size:12,style:{transform:"translateY(-4px)"}})]})]})})]})]})}),t(p,{md:{span:9,offset:2},sm:{span:24},children:s("div",{className:"mb-5",children:[t(l,{level:5,children:"More Plugins by Bit Apps"}),i.pluginsList.filter(o=>o.name!==u.PRODUCT_NAME).map((o,h)=>t(d,{style:{marginTop:16,borderColor:r.colorBorder},bodyStyle:{padding:"16px 20px",color:"red !important"},children:t(y,{loading:m,avatar:!0,active:!0,children:t(S,{avatar:t(a,{target:"_blank",href:o.url,css:k,children:t(v,{style:{height:70,width:70},shape:"square",src:o.icon})}),title:s(a,{target:"_blank",href:o.url,style:{color:r.colorTextSecondary,fontSize:"1rem"},css:P,children:[o.name," ",t(e,{name:"MoveUpRight",size:12,style:{transform:"translateY(-4px)"}})]}),description:t(n,{style:{color:r.colorTextSecondary},children:o.description})})})},`${h*2}`))]})})]})})}export{z as default};
