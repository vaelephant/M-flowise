import{P as g,u as X,a as r,S as he,H,j as e,D as K,b as Q,a8 as J,c as Z,B as E,T as L,d as ee,q as V,k as ae,l as te,s as se,m as xe,t as G,n as ie,o as pe,p as ue,M as je,X as me,v as be,w as ge,x as fe,y as ye,z as ve,C as De,A as O,a3 as we,a4 as Ve}from"./index-BgTNlE3K.js";import{b as I,O as P,D as Ce,a as re,B as f,u as Se,S as W}from"./useApi-H2a3O-a6.js";import{u as le,C as ne,a as Te,S as o,I as q}from"./useNotifier-C3gm9LlJ.js";import{D as ke}from"./Dropdown-CBMARjVX.js";import{C as U}from"./CodeEditor-BMRRi0Ll.js";import{E as Ae,V as Ee}from"./ErrorBoundary-DJvKZGfQ.js";import"./TextField-dkTUQuhn.js";import"./FormControl-D-oBzX_C.js";const Be=()=>I.get("/variables"),Ie=i=>I.post("/variables",i),Ne=(i,l)=>I.put(`/variables/${i}`,l),Re=i=>I.delete(`/variables/${i}`),B={getAllVariables:Be,createVariable:Ie,updateVariable:Ne,deleteVariable:Re},Me="/assets/variables_empty-BRQPFrO4.svg",$e=[{label:"Static",name:"static",description:"Variable value will be read from the value entered below"},{label:"Runtime",name:"runtime",description:"Variable value will be read from .env file"}],oe=({show:i,dialogProps:l,onCancel:x,onConfirm:u,setError:C})=>{const T=document.getElementById("portal"),p=X();le();const j=(...s)=>p(ae(...s)),m=(...s)=>p(te(...s)),[y,h]=r.useState(""),[v,b]=r.useState(""),[d,D]=r.useState("static"),[N,w]=r.useState("ADD"),[R,n]=r.useState({});r.useEffect(()=>(l.type==="EDIT"&&l.data?(h(l.data.name),b(l.data.value),D(l.data.type),w("EDIT"),n(l.data)):l.type==="ADD"&&(h(""),b(""),D("static"),w("ADD"),n({})),()=>{h(""),b(""),D("static"),w("ADD"),n({})}),[l]),r.useEffect(()=>(p(i?{type:he}:{type:H}),()=>p({type:H})),[i,p]);const M=async()=>{try{const s={name:y,value:v,type:d},c=await B.createVariable(s);c.data&&(j({message:"New Variable added",options:{key:new Date().getTime()+Math.random(),variant:"success",action:S=>e.jsx(f,{style:{color:"white"},onClick:()=>m(S),children:e.jsx(V,{})})}}),u(c.data.id))}catch(s){C(s),j({message:`Failed to add new Variable: ${typeof error.response.data=="object"?error.response.data.message:error.response.data}`,options:{key:new Date().getTime()+Math.random(),variant:"error",persist:!0,action:c=>e.jsx(f,{style:{color:"white"},onClick:()=>m(c),children:e.jsx(V,{})})}}),x()}},$=async()=>{try{const s={name:y,value:v,type:d},c=await B.updateVariable(R.id,s);c.data&&(j({message:"Variable saved",options:{key:new Date().getTime()+Math.random(),variant:"success",action:S=>e.jsx(f,{style:{color:"white"},onClick:()=>m(S),children:e.jsx(V,{})})}}),u(c.data.id))}catch(s){C(err),j({message:`Failed to save Variable: ${typeof s.response.data=="object"?s.response.data.message:s.response.data}`,options:{key:new Date().getTime()+Math.random(),variant:"error",persist:!0,action:c=>e.jsx(f,{style:{color:"white"},onClick:()=>m(c),children:e.jsx(V,{})})}}),x()}},_=i?e.jsxs(K,{fullWidth:!0,maxWidth:"sm",open:i,onClose:x,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(Q,{sx:{fontSize:"1rem"},id:"alert-dialog-title",children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[e.jsx("div",{style:{width:50,height:50,marginRight:10,borderRadius:"50%",backgroundColor:"white"},children:e.jsx(J,{style:{width:"100%",height:"100%",padding:7,borderRadius:"50%",objectFit:"contain"}})}),l.type==="ADD"?"Add Variable":"Edit Variable"]})}),e.jsxs(Z,{children:[e.jsxs(E,{sx:{p:2},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsxs(L,{children:["Variable Name",e.jsx("span",{style:{color:"red"},children:" *"})]}),e.jsx("div",{style:{flexGrow:1}})]}),e.jsx(P,{size:"small",sx:{mt:1},type:"string",fullWidth:!0,onChange:s=>h(s.target.value),value:y??"",id:"txtInput_variableName"},"variableName")]}),e.jsxs(E,{sx:{p:2},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsxs(L,{children:["Type",e.jsx("span",{style:{color:"red"},children:" *"})]}),e.jsx("div",{style:{flexGrow:1}})]}),e.jsx(ke,{name:"variableType",options:$e,onSelect:s=>D(s),value:d??"choose an option",id:"dropdown_variableType"},d)]}),d==="static"&&e.jsxs(E,{sx:{p:2},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsxs(L,{children:["Value",e.jsx("span",{style:{color:"red"},children:" *"})]}),e.jsx("div",{style:{flexGrow:1}})]}),e.jsx(P,{size:"small",sx:{mt:1},type:"string",fullWidth:!0,onChange:s=>b(s.target.value),value:v??"",id:"txtInput_variableValue"},"variableValue")]})]}),e.jsx(Ce,{children:e.jsx(re,{disabled:!y||!d||d==="static"&&!v,variant:"contained",onClick:()=>N==="ADD"?M():$(),id:"btn_confirmAddingNewVariable",children:l.confirmButtonName})}),e.jsx(ne,{})]}):null;return ee.createPortal(_,T)};oe.propTypes={show:g.bool,dialogProps:g.object,onCancel:g.func,onConfirm:g.func,setError:g.func};const _e=`{
    overrideConfig: {
        vars: {
            var1: 'abc'
        }
    }
}`,ce=({show:i,onCancel:l})=>{const x=document.getElementById("portal"),u=i?e.jsxs(K,{onClose:l,open:i,fullWidth:!0,maxWidth:"sm","aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(Q,{sx:{fontSize:"1rem"},id:"alert-dialog-title",children:"How To Use Variables"}),e.jsxs(Z,{children:[e.jsx("p",{style:{marginBottom:"10px"},children:"Variables can be used in Custom Tool Function with the $ prefix."}),e.jsx(U,{disabled:!0,value:"$vars.<variable-name>",height:"50px",theme:"dark",lang:"js",basicSetup:{highlightActiveLine:!1,highlightActiveLineGutter:!1}}),e.jsx("p",{style:{marginBottom:"10px"},children:"If variable type is Static, the value will be retrieved as it is. If variable type is Runtime, the value will be retrieved from .env file."}),e.jsxs("p",{style:{marginBottom:"10px"},children:["You can also override variable values in API overrideConfig using ",e.jsx("b",{children:"vars"}),":"]}),e.jsx(U,{disabled:!0,value:_e,height:"170px",theme:"dark",lang:"js",basicSetup:{highlightActiveLine:!1,highlightActiveLineGutter:!1}}),e.jsxs("p",{children:["Read more from"," ",e.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://docs.flowiseai.com/using-flowise/variables",children:"docs"})]})]})]}):null;return ee.createPortal(u,x)};ce.propTypes={show:g.bool,onCancel:g.func};const a=se(xe)(({theme:i})=>({borderColor:i.palette.grey[900]+25,[`&.${G.head}`]:{color:i.palette.grey[900]},[`&.${G.body}`]:{fontSize:14,height:64}})),Y=se(ie)(()=>({"&:last-child td, &:last-child th":{border:0}})),qe=()=>{const i=pe(),l=ue(t=>t.customization),x=X();le();const u=(...t)=>x(ae(...t)),C=(...t)=>x(te(...t)),[T,p]=r.useState(!0),[j,m]=r.useState(null),[y,h]=r.useState(!1),[v,b]=r.useState({}),[d,D]=r.useState([]),[N,w]=r.useState(!1),{confirm:R}=Te(),n=Se(B.getAllVariables),[M,$]=r.useState(""),_=t=>{$(t.target.value)};function s(t){return t.name.toLowerCase().indexOf(M.toLowerCase())>-1}const c=()=>{b({type:"ADD",cancelButtonName:"Cancel",confirmButtonName:"Add",customBtnId:"btn_confirmAddingVariable",data:{}}),h(!0)},S=t=>{b({type:"EDIT",cancelButtonName:"Cancel",confirmButtonName:"Save",data:t}),h(!0)},de=async t=>{const k={title:"Delete",description:`Delete variable ${t.name}?`,confirmButtonName:"Delete",cancelButtonName:"Cancel"};if(await R(k))try{(await B.deleteVariable(t.id)).data&&(u({message:"Variable deleted",options:{key:new Date().getTime()+Math.random(),variant:"success",action:F=>e.jsx(f,{style:{color:"white"},onClick:()=>C(F),children:e.jsx(V,{})})}}),z())}catch(A){u({message:`Failed to delete Variable: ${typeof A.response.data=="object"?A.response.data.message:A.response.data}`,options:{key:new Date().getTime()+Math.random(),variant:"error",persist:!0,action:F=>e.jsx(f,{style:{color:"white"},onClick:()=>C(F),children:e.jsx(V,{})})}})}},z=()=>{h(!1),n.request()};return r.useEffect(()=>{n.request()},[]),r.useEffect(()=>{p(n.loading)},[n.loading]),r.useEffect(()=>{n.error&&m(n.error)},[n.error]),r.useEffect(()=>{n.data&&D(n.data)},[n.data]),e.jsxs(e.Fragment,{children:[e.jsx(je,{children:j?e.jsx(Ae,{error:j}):e.jsxs(W,{flexDirection:"column",sx:{gap:3},children:[e.jsxs(Ee,{onSearchChange:_,search:!0,searchPlaceholder:"Search Variables",title:"Variables",children:[e.jsx(f,{variant:"outlined",sx:{borderRadius:2,height:"100%"},onClick:()=>w(!0),children:"How To Use"}),e.jsx(re,{variant:"contained",sx:{borderRadius:2,height:"100%"},onClick:c,startIcon:e.jsx(me,{}),id:"btn_createVariable",children:"Add Variable"})]}),!T&&d.length===0?e.jsxs(W,{sx:{alignItems:"center",justifyContent:"center"},flexDirection:"column",children:[e.jsx(E,{sx:{p:2,height:"auto"},children:e.jsx("img",{style:{objectFit:"cover",height:"16vh",width:"auto"},src:Me,alt:"VariablesEmptySVG"})}),e.jsx("div",{children:"No Variables Yet"})]}):e.jsx(be,{sx:{border:1,borderColor:i.palette.grey[900]+25,borderRadius:2},component:ge,children:e.jsxs(fe,{sx:{minWidth:650},"aria-label":"simple table",children:[e.jsx(ye,{sx:{backgroundColor:l.isDarkMode?i.palette.common.black:i.palette.grey[100],height:56},children:e.jsxs(ie,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Value"}),e.jsx(a,{children:"Type"}),e.jsx(a,{children:"Last Updated"}),e.jsx(a,{children:"Created"}),e.jsx(a,{children:" "}),e.jsx(a,{children:" "})]})}),e.jsx(ve,{children:T?e.jsxs(e.Fragment,{children:[e.jsxs(Y,{children:[e.jsx(a,{children:e.jsx(o,{variant:"text"})}),e.jsx(a,{children:e.jsx(o,{variant:"text"})}),e.jsx(a,{children:e.jsx(o,{variant:"text"})}),e.jsx(a,{children:e.jsx(o,{variant:"text"})}),e.jsx(a,{children:e.jsx(o,{variant:"text"})}),e.jsx(a,{children:e.jsx(o,{variant:"text"})}),e.jsx(a,{children:e.jsx(o,{variant:"text"})})]}),e.jsxs(Y,{children:[e.jsx(a,{children:e.jsx(o,{variant:"text"})}),e.jsx(a,{children:e.jsx(o,{variant:"text"})}),e.jsx(a,{children:e.jsx(o,{variant:"text"})}),e.jsx(a,{children:e.jsx(o,{variant:"text"})}),e.jsx(a,{children:e.jsx(o,{variant:"text"})}),e.jsx(a,{children:e.jsx(o,{variant:"text"})}),e.jsx(a,{children:e.jsx(o,{variant:"text"})})]})]}):e.jsx(e.Fragment,{children:d.filter(s).map((t,k)=>e.jsxs(Y,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(a,{component:"th",scope:"row",children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[e.jsx("div",{style:{width:25,height:25,marginRight:10,borderRadius:"50%"},children:e.jsx(J,{style:{width:"100%",height:"100%",borderRadius:"50%",objectFit:"contain"}})}),t.name]})}),e.jsx(a,{children:t.value}),e.jsx(a,{children:e.jsx(De,{color:t.type==="static"?"info":"secondary",size:"small",label:t.type})}),e.jsx(a,{children:O(t.updatedDate).format("MMMM Do, YYYY")}),e.jsx(a,{children:O(t.createdDate).format("MMMM Do, YYYY")}),e.jsx(a,{children:e.jsx(q,{title:"Edit",color:"primary",onClick:()=>S(t),children:e.jsx(we,{})})}),e.jsx(a,{children:e.jsx(q,{title:"Delete",color:"error",onClick:()=>de(t),children:e.jsx(Ve,{})})})]},k))})})]})})]})}),e.jsx(oe,{show:y,dialogProps:v,onCancel:()=>h(!1),onConfirm:z,setError:m}),e.jsx(ce,{show:N,onCancel:()=>w(!1)}),e.jsx(ne,{})]})};export{qe as default};