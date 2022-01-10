import{W as V,s as a,m as g,r as s,j as p,a as t,b,u as w,F as I,N as B,R as F,c as O,H as j,d as N,A as H,e as D,f as $}from"./vendor.09e27c46.js";const M=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};M();var K=V`
  @font-face {
      font-family: 'Pokemon Solid';
      font-style: normal;
      font-weight: 400;
      src: local('Pokemon Solid'), url('https://fonts.cdnfonts.com/s/17890/Pokemon Solid.woff') format('woff');
  }

  * {
    font-family: Arial;
    font-weight: 100;
    color: rgb(52, 53, 57)
  }

  html {
    background: rgb(226, 227, 234);
  }

  input {
    border: none;
    background: none;
    outline: none;
  }
  
  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  body {
    overflow: hidden;
    overflow-y: scroll;

  }

  #root {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
`,G=a(g.form)`
    background: white;
    max-width: 350px;
    max-height: 400px;
    min-height: 320px;
    width: 90%;
    height: 60%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 1px 1px rgba(0,0,0,0.02), 
                0 2px 2px rgba(0,0,0,0.02), 
                0 4px 4px rgba(0,0,0,0.02), 
                0 8px 8px rgba(0,0,0,0.02),
                0 16px 16px rgba(0,0,0,0.02);
    > * {
        margin-top: 11%;
    }
    position: relative;
`;const T=a.input`
    width: 70%;
    height: 40px;
    font-size: 17px;
    border-bottom: 1px solid grey;
    color: black;
    &::placeholder {
        color: grey;
    }
    &:focus {
        outline: none;
        border-bottom: 1px solid rgb(52, 53, 57);
        &::placeholder {
            color: black;
        }
    }
`,W=a(g.button)`
    background: none;
    border: 1px solid ${e=>e.color};
    border-radius: 5px;
    width: ${e=>e.width};
    height: 40px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`,q=a.div`
    color: white;
    font-size: 15px;
    mix-blend-mode: difference;
    position: absolute;
`,Y=a(g.div)`
    background: ${e=>e.color};
    width: 100%;
    height: 40px;
    position: absolute;
    ${e=>e.error&&"display: none"};
`,J=a.div`
    display: flex;
    width: 70%;
    position: absolute;
    bottom: 40px;
    & > button:nth-child(1) {
        margin-right: 21px;
    }
`,Q=a.div`
    ${e=>e.error?"color: red":"color: rgb(0, 208, 0)"};
    width: 70%;
`,X={hover:{staggerChildren:.5},initial:{staggerChildren:.5}},Z={initial:{left:"-100%"},hover:{left:0}};var S=e=>{const[r,n]=s.exports.useState("hover"),[c,o]=s.exports.useState("black");return p(W,{onTap:()=>{n("initial"),e.onClick()},onHoverEnd:()=>{e.disabled||n("hover")},color:e.color,type:"button",variants:X,whileHover:r,initial:"initial",width:e.width||"50%",children:[t(Y,{variants:Z,transition:{duration:.2,type:"tween"},color:e.color,error:e.error}),t(q,{textColour:c,children:e.text})]})},C=s.exports.createContext(),_=e=>{const{username:r,password:n,setRegisterColour:c,setError:o,setMessage:i}=e,l={username:r,password:n,pokemon:"pikachu"};b.post("http://ypokefav.herokuapp.com/api/users/",l).then(d=>{c("rgb(0, 208, 0)"),o(!1),i("Account has been created! You may now login.")}).catch(d=>{c("rgb(255,0,0)"),o(!0),i(d.response.data.detail)})},z=e=>{const{username:r,password:n,setUser:c,setLoginColour:o,setError:i,setMessage:l,navigate:d}=e;b.get(`http://ypokefav.herokuapp.com/api/users/${r}`).then(h=>{h.data.password==n?(c(h.data),localStorage.setItem("user",r),d("/profile")):(o("rgb(255,0,0)"),i(!0),l("Username and/or password is incorrect."))}).catch(h=>{o("rgb(255,0,0)"),i(!0),l("Username and/or password is incorrect.")})};const ee={enter:{opacity:1,transition:{type:"tween",duration:.15,delay:.2}},exit:{opacity:0,transition:{type:"tween",duration:.15}}};var te=()=>{const[e,r]=s.exports.useState(""),[n,c]=s.exports.useState(""),[o,i]=s.exports.useState("rgb(52, 53, 57)"),[l,d]=s.exports.useState("rgb(52, 53, 57)"),[h,f]=s.exports.useState(!0),[P,k]=s.exports.useState(""),[E,x]=s.exports.useContext(C),v=w(),m=u=>{u.key=="Enter"&&z({username:e,password:n,setUser:x,setLoginColour:d,setError:f,setMessage:k,navigate:v})};return p(I,{children:[localStorage.getItem("user")&&t(B,{to:"/profile",replace:!0}),p(G,{variants:ee,initial:"exit",animate:"enter",exit:"exit",children:[t(T,{placeholder:"Username",onKeyPress:m,onChange:u=>r(u.target.value)}),t(T,{placeholder:"Password",onKeyPress:m,type:"password",onChange:u=>c(u.target.value)}),p(J,{children:[t(S,{text:"LOGIN",onClick:()=>z({username:e,password:n,setUser:x,setLoginColour:d,setError:f,setMessage:k,navigate:v}),color:l,setButtonColour:d}),t(S,{text:"REGISTER",onClick:()=>_({username:e,password:n,setRegisterColour:i,setError:f,setMessage:k}),color:o,setButtonColour:i})]}),t(Q,{error:h,children:P})]})]})},oe=a(g.div)`
    background: white;
    max-width: 350px;
    width: 90%;
    height: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 1px 1px rgba(0,0,0,0.02), 
                0 2px 2px rgba(0,0,0,0.02), 
                0 4px 4px rgba(0,0,0,0.02), 
                0 8px 8px rgba(0,0,0,0.02),
                0 16px 16px rgba(0,0,0,0.02);
    position: relative;
    margin-bottom: 20px;
`;const L=a.div`
    position: absolute;
    left: 20px;
    top: 20px;
    font-weight: bold;
    text-transform: capitalize;
`,re=a(L)`
    right: 20px;
    font-weight: 200;
    text-align: right;
`,ne=a.div`
    width: 80%;
    height: 382px;
    display: flex;
    flex-direction: column;
    align-items: center;
`,ae=a.div`
    width: 100%;
    height: 100%;
    background: rgb(249, 248, 255);
    margin-top: 50px;
    margin-bottom: 15px;
    border-radius: 10px;
    &::after {
        width: 100%;
        height: 100%;
        display: block;
        content: "";
        background: url(${e=>e.image});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
`;var U=e=>{const{user:r,setImage:n}=e;b.get(`https://pokeapi.co/api/v2/pokemon/${r&&r.pokemon||"charizard"}`).then(c=>{n(`https://projectpokemon.org/images/normal-sprite/${localStorage.getItem("pokemon")||r&&r.pokemon||"charizard"}.gif`)})},ie=e=>{const{user:r,setImage:n}=e;s.exports.useEffect(()=>{U({user:r,setImage:n})})};const se={enter:{opacity:1,transition:{type:"tween",duration:.15,delay:.2}},exit:{opacity:0,transition:{type:"tween",duration:.15}}};var ce=()=>{const[e,r,n,c]=s.exports.useContext(C),o=w();return ie({user:e,setImage:c}),s.exports.useEffect(()=>{const i=localStorage.getItem("pokemon")||e&&e.pokemon||"charizard";localStorage.setItem("pokemon",i)},[localStorage]),p(oe,{initial:"exit",animate:"enter",exit:"exit",variants:se,children:[t(L,{children:localStorage.getItem("user")||"Username"}),t(re,{children:localStorage.getItem("pokemon")||e&&e.pokemon||"charizard"}),p(ne,{children:[t(ae,{image:`${n}`}),t(S,{text:"CHANGE FAVOURITE POKEMON",color:"rgb(52, 53, 57)",width:"110%",onClick:()=>o("/pokemon")})]})]})},le=a(g.div)`
    font-family: "Pokemon Solid";
    color: rgb(52, 53, 57);
    margin-top: 100px;
    margin-bottom: 50px;
`,pe="/assets/loading.aea802f1.svg",de=a(g.div)`
    width: 80%;
    height: 100%;
    min-height: 377px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
`;const ge=a(g.div)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,ue=a.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    position: relative;
`,he=a.input`
    width: 100%;
    height: 40px;
    padding: 15px;
    border-radius: 20px;
    font-size: 30px;
    background: white;
    box-shadow: 0 1px 1px rgba(0,0,0,0.02), 
                0 2px 2px rgba(0,0,0,0.02), 
                0 4px 4px rgba(0,0,0,0.02), 
                0 8px 8px rgba(0,0,0,0.02),
                0 16px 16px rgba(0,0,0,0.02);
`;a(g.button)`
    background: url(${e=>e.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    height: 40px;
    aspect-ratio: 1;
    right: 10px;
`;const xe=a.div`
    background: white;
    height: 500px;
    width: 300px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.02), 
                0 2px 2px rgba(0,0,0,0.02), 
                0 4px 4px rgba(0,0,0,0.02), 
                0 8px 8px rgba(0,0,0,0.02),
                0 16px 16px rgba(0,0,0,0.02);
    border-radius: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`,me=a.div`
    background: url(${e=>e.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding: 100px;
    margin-top: 10px;
`,be=a.div`
    text-transform: capitalize;
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
`,fe=a.div`
    background-color: none;
    background: url(${pe});
    background-size: contain;
    background-repeat: no-repeat;
    padding: 200px;
`,ke=a.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`,ve={water:"rgb(126, 157, 255)",steel:"rgb(124, 164, 175)",grass:"rgb(111, 193, 82)",fire:"rgb(246, 97, 66)",ground:"rgb(215, 168, 93)",fighting:"rgb(220, 86, 81)",psychic:"rgb(239, 84, 128)",electric:"rgb(249,	195, 14)",dragon:"rgb(72, 78, 153)",flying:"rgb(111, 119, 187)",normal:"rgb(161, 132, 91)",poison:"rgb(165, 83, 145)",rock:"rgb(153, 144, 81)",bug:"rgb(133, 157, 47)",ghost:"rgb(110, 90, 127)",water:"rgb(68, 189, 208)",ice:"rgb(96, 213, 200)",dark:"rgb(72, 62, 62)",fairy:"rgb(238, 94, 150)"},ye=a.div`
    text-transform: capitalize;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    background: ${e=>e.type&&ve[e.type]};
    &:after {
        content: '${e=>e.type}';
        -webkit-text-stroke: 0.5px black;
        color: white;
    }
`,we=a.div`
    position: absolute;
    bottom: 20px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`;var Se="/assets/Left.0b4beede.svg";const Ce=a(g.button)`
    background: url(${Se});
    background-size: contain;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    position: fixed;
    top: 20px;
    left: 20px;
`,Ie={clicked:{scale:.8},hover:{scale:1.2}};var $e=()=>{const e=w();return t(Ce,{onClick:()=>console.log(e("/profile")),whileTap:"clicked",whileHover:"hover",variants:Ie})},Pe=e=>{const{setFound:r,setData:n,defaultData:c,name:o}=e;s.exports.useEffect(()=>{r(!1);const i=setTimeout(()=>{b.get(`https://pokeapi.co/api/v2/pokemon/${o}`).then(l=>{r(!0),n(l)}).catch(l=>{r(!1),n(c)})},700);return()=>clearTimeout(i)},[o])},Ee=e=>{const{name:r,callback:n}=e;localStorage.setItem("pokemon",r),b.put(`http://ypokefav.herokuapp.com/api/users/${localStorage.getItem("user")}/?pokemon=${r}`).then(n)},Te=e=>{const{username:r,setUser:n}=e;b.get(`https://ypokefav.herokuapp.com/api/users/${localStorage.getItem("user")}`).then(c=>{n(c.data)})};const ze={focused:{y:-50},initial:{y:100}},Le={enter:{opacity:1,transition:{type:"tween",duration:.15,delay:.2}},exit:{opacity:0,transition:{type:"tween",duration:.15}}},A={data:{types:[]}};var Ue=()=>{const[e,r]=s.exports.useState(!1),[n,c]=s.exports.useState(),[o,i]=s.exports.useState(!1),[l,d]=s.exports.useState(A),[h,f,P,k]=s.exports.useContext(C),[E,x]=s.exports.useState("rgb(52, 53, 57)"),[v,m]=s.exports.useState("SET AS FAVOURITE");return Pe({setFound:i,setData:d,defaultData:A,name:n}),p(ge,{variants:Le,initial:"exit",animate:"enter",exit:"exit",children:[t($e,{}),p(de,{variants:ze,animate:e?"focused":"initial",children:[t(ue,{children:t(he,{placeholder:"Search for a pokemon!",onChange:u=>{const y=u.target.value.toLowerCase();r(y.length>0),n!==y&&(c(y),y!=localStorage.getItem("pokemon")?(m("SET AS FAVOURITE"),x("rgb(52, 53, 57)")):(m("FAVOURITED"),x("rgb(0, 211, 0)")))}})}),e&&o&&p(xe,{children:[t(be,{children:l.data.name}),t(ke,{children:l.data.types!==void 0&&l.data.types.map(u=>t(ye,{type:u.type.name}))}),t(me,{image:`https://projectpokemon.org/images/normal-sprite/${n}.gif`}),t(we,{children:t(S,{text:v,color:E,width:"80%",onClick:()=>{m("FAVOURITED"),x("rgb(0, 211, 0)"),Ee({name:n,callback:()=>{U({user:h,setImage:k}),Te({username:h.username,setUser:f})}})},error:v=="FAVOURITED"})})]}),e&&!o&&t(fe,{})]})]})},Ae="/assets/logout.346e924a.svg";const Re=a(g.button)`
    background: url(${Ae});
    background-size: contain;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 20px;
    left: 20px;
`,Ve={clicked:{scale:.8},hover:{scale:1.2}};var R=()=>{const e=w();return t(Re,{onClick:()=>{localStorage.clear(),e("/login")},whileTap:"clicked",whileHover:"hover",variants:Ve})};const Be={login:{fontSize:80},profile:{fontSize:40}},Fe=()=>{const[e,r]=s.exports.useState(),[n,c]=s.exports.useState(""),o=N();return t(C.Provider,{value:[e,r,n,c],children:t(H,{children:p(D,{location:o,children:[t($,{path:"/",element:t(te,{})}),t($,{path:"/profile",element:p(I,{children:[t(ce,{}),t(R,{})]})}),t($,{path:"/pokemon",element:p(I,{children:[t(Ue,{}),t(R,{})]})})]},o.key)})})};F.render(p(O.StrictMode,{children:[t(K,{}),t(le,{variants:Be,initial:"login",children:"PokeFAV"}),t(j,{children:t(Fe,{})})]}),document.getElementById("root"));
