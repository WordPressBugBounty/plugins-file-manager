import{r as I,j as e,a as g,_ as t}from"./main.6.7.js";import{r as w}from"./react-vendor-0bea0611.js";import{u as R,a as v}from"./@tanstack/react-query-cb8e8166.js";import{S as y,m as i,B as S,i as F,o as b,c as r,p as f,n as x}from"./antd-b03f4406.js";import"./@emotion/react-f59bf8e1.js";import"./react-router-dom-551725bc.js";import"./@tanstack/react-query-devtools-28f31d30.js";function O(){var h,n,_,m;const{data:l,isLoading:o,isFetching:s}=R({queryKey:["fetch_settings"],queryFn:async()=>I({action:"settings/get",method:"GET"})});return{isLoading:o,isFetching:s,settings:(h=l==null?void 0:l.data)==null?void 0:h.settings,languages:(n=l==null?void 0:l.data)==null?void 0:n.languages,themes:(_=l==null?void 0:l.data)==null?void 0:_.themes,defaults:(m=l==null?void 0:l.data)==null?void 0:m.defaults}}function U(){const{mutateAsync:l,isLoading:o}=v(async s=>I({action:"settings/update",data:s}));return{updateSettings:s=>l(s),isSettingsUpdating:o}}function z(){const{useForm:l}=i,{settings:o,themes:s,languages:h,defaults:n}=O(),{updateSettings:_,isSettingsUpdating:m}=U(),[d]=l();return w.useEffect(()=>{d.setFieldsValue(o)},[o,d]),e(i,{form:d,initialValues:n,colon:!1,onFinish:a=>{_(a).then(c=>{if(c.code==="SUCCESS"){x.success({message:c.message});const u=d.getFieldsError().map(p=>(p.errors&&(p.errors=[]),p));d.setFields(u)}else{const u=[];Object.keys(c.data).forEach(p=>{u.push({name:p.split("."),errors:c.data[p]})}),d.setFields(u)}})},onValuesChange:a=>{const c=a?Object.keys(a)[0]:null;if(c&&d.getFieldError(c).length){const u={name:c,errors:[]};d.setFields([u])}},disabled:m,scrollToFirstError:!0,children:g(y,{direction:"vertical",size:"middle",style:{display:"flex"},className:"px-2",children:[e(y,{style:{display:"flex",justifyContent:"right",paddingBlock:"8px"},children:e(i.Item,{style:{marginBottom:0},children:e(S,{type:"primary",htmlType:"submit",loading:m,children:"Update"})})}),g(F,{title:t("URL and Path"),children:[e(i.Item,{label:"Root Path",name:"root_folder_path",tooltip:`${t("Root folder path must be correct. Default: ")}${n==null?void 0:n.root_folder_path}`,rules:[{required:!0,message:t("Root folder is required")}],children:e(b,{})}),e(i.Item,{label:"Root URL",name:"root_folder_url",tooltip:`${t("Root folder URL must be correct. Default: ")}${n==null?void 0:n.root_folder_url}`,rules:[{pattern:new RegExp(`^${n==null?void 0:n.root_folder_url}(?:/[^/]+)*/?`),message:t("The root URL must be within this site")}],children:e(b,{})}),e(i.Item,{label:t("Root Folder Name"),name:"root_folder_name",rules:[{pattern:/^[a-z A-Z 0-9 -]*$/,message:t("The root drive can contain letters, numbers and -")}],children:e(b,{})})]}),g(F,{title:t("File Manager Settings"),children:[e(i.Item,{label:t("Select Language"),name:"language",children:e(r,{value:o==null?void 0:o.language,children:h==null?void 0:h.map(a=>e(r.Option,{value:a.code,children:a.name},a.code))})}),e(i.Item,{label:t("Select Theme"),name:"theme",children:e(r,{children:s==null?void 0:s.map(a=>e(r.Option,{value:a.key,children:a.title},a.key))})}),g(F,{title:t("Size"),children:[e(i.Item,{label:"Width",name:["size","width"],tooltip:"File Manager window width (in px)",rules:[{pattern:/^(auto|[0-9]+)$/,message:t("Width can be integer or auto")}],children:e(b,{})}),e(i.Item,{label:"Height",name:["size","height"],tooltip:"File Manager window height (in px)",rules:[{pattern:/^(auto|[0-9]+)$/,message:t("Height can be integer or auto")}],children:e(b,{})})]}),e(i.Item,{label:t("Show Hidden Files"),name:"show_hidden_files",children:e(f,{})}),e(i.Item,{label:t("Allow Create/Upload Hidden Files/Folders"),name:"create_hidden_files_folders",children:e(f,{})}),e(i.Item,{label:t("Allow Trash"),name:"create_trash_files_folders",children:e(f,{})}),e(i.Item,{label:t("Display UI options"),name:"display_ui_options",children:g(r,{mode:"multiple",children:[e(r.Option,{value:"toolbar",children:"Toolbar"}),e(r.Option,{value:"places",children:"Places"}),e(r.Option,{value:"tree",children:"Tree"}),e(r.Option,{value:"path",children:"Path"}),e(r.Option,{value:"stat",children:"Stat"})]})}),e(i.Item,{label:t("Remember Last Directory"),name:"remember_last_dir",tooltip:t("Remember last opened dir to open it after reload."),children:e(f,{})}),e(i.Item,{label:t("Clear History On Reload"),name:"clear_history_on_reload",tooltip:t("Clear history's(elFinder) on reload(not browser)"),children:e(f,{})}),e(i.Item,{label:t("Default View Type"),name:"default_view_type",children:g(r,{children:[e(r.Option,{value:"icons",children:"Icons"}),e(r.Option,{value:"list",children:"List"})]})}),e(i.Item,{label:"Show Link and Path",name:"show_url_path",tooltip:t("If this is enabled then, Link and path will be shown in file, folder info."),children:e(f,{})})]}),e(y,{style:{display:"flex",justifyContent:"center"},children:e(i.Item,{children:e(S,{type:"primary",htmlType:"submit",loading:m,children:"Update"})})})]})})}export{z as default};
