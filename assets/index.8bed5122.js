import{W as F,s as a,m as g,r as s,j as p,a as t,b,u as w,R as O,c as j,H,d as N,A as D,e as M,f as S,F as $}from"./vendor.72e6f229.js";const K=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};K();var G=F`
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
`,W=a(g.form)`
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
`;const z=a.input`
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
`,q=a(g.button)`
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
`,Y=a.div`
    color: white;
    font-size: 15px;
    mix-blend-mode: difference;
    position: absolute;
`,J=a(g.div)`
    background: ${e=>e.color};
    width: 100%;
    height: 40px;
    position: absolute;
    ${e=>e.error&&"display: none"};
`,Q=a.div`
    display: flex;
    width: 70%;
    position: absolute;
    bottom: 40px;
    & > button:nth-child(1) {
        margin-right: 21px;
    }
`,X=a.div`
    ${e=>e.error?"color: red":"color: rgb(0, 208, 0)"};
    width: 70%;
`,Z={hover:{staggerChildren:.5},initial:{staggerChildren:.5}},_={initial:{left:"-100%"},hover:{left:0}};var C=e=>{const[r,n]=s.exports.useState("hover"),[c,o]=s.exports.useState("black");return p(q,{onTap:()=>{n("initial"),e.onClick()},onHoverEnd:()=>{e.disabled||n("hover")},color:e.color,type:"button",variants:Z,whileHover:r,initial:"initial",width:e.width||"50%",children:[t(J,{variants:_,transition:{duration:.2,type:"tween"},color:e.color,error:e.error}),t(Y,{textColour:c,children:e.text})]})},I=s.exports.createContext(),ee=e=>{const{username:r,password:n,setRegisterColour:c,setError:o,setMessage:i}=e,l={username:r,password:n,pokemon:"pikachu"};b.post("https://yayapokefav.herokuapp.com/api/users/",l).then(d=>{c("rgb(0, 208, 0)"),o(!1),i("Account has been created! You may now login.")}).catch(d=>{c("rgb(255,0,0)"),o(!0),i(d.response.data.detail)})},L=e=>{const{username:r,password:n,setUser:c,setLoginColour:o,setError:i,setMessage:l,navigate:d}=e;b.get(`https://yayapokefav.herokuapp.com/api/users/${r}`).then(h=>{h.data.password==n?(c(h.data),localStorage.setItem("user",r),d("/profile")):(o("rgb(255,0,0)"),i(!0),l("Username and/or password is incorrect."))}).catch(h=>{o("rgb(255,0,0)"),i(!0),l("Username and/or password is incorrect.")})};const te={enter:{opacity:1,transition:{type:"tween",duration:.15,delay:.2}},exit:{opacity:0,transition:{type:"tween",duration:.15}}};var U=()=>{const[e,r]=s.exports.useState(""),[n,c]=s.exports.useState(""),[o,i]=s.exports.useState("rgb(52, 53, 57)"),[l,d]=s.exports.useState("rgb(52, 53, 57)"),[h,f]=s.exports.useState(!0),[E,k]=s.exports.useState(""),[T,x]=s.exports.useContext(I),v=w(),m=u=>{u.key=="Enter"&&L({username:e,password:n,setUser:x,setLoginColour:d,setError:f,setMessage:k,navigate:v})};return p(W,{variants:te,initial:"exit",animate:"enter",exit:"exit",children:[t(z,{placeholder:"Username",onKeyPress:m,onChange:u=>r(u.target.value)}),t(z,{placeholder:"Password",onKeyPress:m,type:"password",onChange:u=>c(u.target.value)}),p(Q,{children:[t(C,{text:"LOGIN",onClick:()=>L({username:e,password:n,setUser:x,setLoginColour:d,setError:f,setMessage:k,navigate:v}),color:l,setButtonColour:d}),t(C,{text:"REGISTER",onClick:()=>ee({username:e,password:n,setRegisterColour:i,setError:f,setMessage:k}),color:o,setButtonColour:i})]}),t(X,{error:h,children:E})]})},oe=a(g.div)`
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
`;const A=a.div`
    position: absolute;
    left: 20px;
    top: 20px;
    font-weight: bold;
    text-transform: capitalize;
`,re=a(A)`
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
`;var R=e=>{const{user:r,setImage:n}=e;b.get(`https://pokeapi.co/api/v2/pokemon/${r&&r.pokemon||"charizard"}`).then(c=>{n(`https://projectpokemon.org/images/normal-sprite/${localStorage.getItem("pokemon")||r&&r.pokemon||"charizard"}.gif`)})},ie=e=>{const{user:r,setImage:n}=e;s.exports.useEffect(()=>{R({user:r,setImage:n})})};const se={enter:{opacity:1,transition:{type:"tween",duration:.15,delay:.2}},exit:{opacity:0,transition:{type:"tween",duration:.15}}};var V=()=>{const[e,r,n,c]=s.exports.useContext(I),o=w();return ie({user:e,setImage:c}),s.exports.useEffect(()=>{const i=localStorage.getItem("pokemon")||e&&e.pokemon||"charizard";localStorage.setItem("pokemon",i)},[localStorage]),p(oe,{initial:"exit",animate:"enter",exit:"exit",variants:se,children:[t(A,{children:localStorage.getItem("user")||"Username"}),t(re,{children:localStorage.getItem("pokemon")||e&&e.pokemon||"charizard"}),p(ne,{children:[t(ae,{image:`${n}`}),t(C,{text:"CHANGE FAVOURITE POKEMON",color:"rgb(52, 53, 57)",width:"110%",onClick:()=>o("/pokemon")})]})]})},ce=a(g.div)`
    font-family: "Pokemon Solid";
    color: rgb(52, 53, 57);
    margin-top: 100px;
    margin-bottom: 50px;
`,le="/assets/loading.aea802f1.svg",pe=a(g.div)`
    width: 80%;
    height: 100%;
    min-height: 377px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
`;const de=a(g.div)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,ge=a.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    position: relative;
`,ue=a.input`
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
`;const he=a.div`
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
`,xe=a.div`
    background: url(${e=>e.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding: 100px;
    margin-top: 10px;
`,me=a.div`
    text-transform: capitalize;
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
`,be=a.div`
    background-color: none;
    background: url(${le});
    background-size: contain;
    background-repeat: no-repeat;
    padding: 200px;
`,fe=a.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`,ke={water:"rgb(126, 157, 255)",steel:"rgb(124, 164, 175)",grass:"rgb(111, 193, 82)",fire:"rgb(246, 97, 66)",ground:"rgb(215, 168, 93)",fighting:"rgb(220, 86, 81)",psychic:"rgb(239, 84, 128)",electric:"rgb(249,	195, 14)",dragon:"rgb(72, 78, 153)",flying:"rgb(111, 119, 187)",normal:"rgb(161, 132, 91)",poison:"rgb(165, 83, 145)",rock:"rgb(153, 144, 81)",bug:"rgb(133, 157, 47)",ghost:"rgb(110, 90, 127)",water:"rgb(68, 189, 208)",ice:"rgb(96, 213, 200)",dark:"rgb(72, 62, 62)",fairy:"rgb(238, 94, 150)"},ve=a.div`
    text-transform: capitalize;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    background: ${e=>e.type&&ke[e.type]};
    &:after {
        content: '${e=>e.type}';
        -webkit-text-stroke: 0.5px black;
        color: white;
    }
`,ye=a.div`
    position: absolute;
    bottom: 20px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`;var we="/assets/Left.0b4beede.svg";const Se=a(g.button)`
    background: url(${we});
    background-size: contain;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    position: fixed;
    top: 20px;
    left: 20px;
`,Ce={clicked:{scale:.8},hover:{scale:1.2}};var Ie=()=>{const e=w();return t(Se,{onClick:()=>console.log(e("/profile")),whileTap:"clicked",whileHover:"hover",variants:Ce})},$e=e=>{const{setFound:r,setData:n,defaultData:c,name:o}=e;s.exports.useEffect(()=>{r(!1);const i=setTimeout(()=>{b.get(`https://pokeapi.co/api/v2/pokemon/${o}`).then(l=>{r(!0),n(l)}).catch(l=>{r(!1),n(c)})},700);return()=>clearTimeout(i)},[o])},Pe=e=>{const{name:r,callback:n}=e;localStorage.setItem("pokemon",r),b.put(`https://yayapokefav.herokuapp.com/api/users/${localStorage.getItem("user")}/?pokemon=${r}`).then(n)},Ee=e=>{const{username:r,setUser:n}=e;b.get(`https://yayapokefav.herokuapp.com/api/users/${localStorage.getItem("user")}`).then(c=>{n(c.data)})};const Te={focused:{y:-50},initial:{y:100}},ze={enter:{opacity:1,transition:{type:"tween",duration:.15,delay:.2}},exit:{opacity:0,transition:{type:"tween",duration:.15}}},B={data:{types:[]}};var Le=()=>{const[e,r]=s.exports.useState(!1),[n,c]=s.exports.useState(),[o,i]=s.exports.useState(!1),[l,d]=s.exports.useState(B),[h,f,E,k]=s.exports.useContext(I),[T,x]=s.exports.useState("rgb(52, 53, 57)"),[v,m]=s.exports.useState("SET AS FAVOURITE");return $e({setFound:i,setData:d,defaultData:B,name:n}),p(de,{variants:ze,initial:"exit",animate:"enter",exit:"exit",children:[t(Ie,{}),p(pe,{variants:Te,animate:e?"focused":"initial",children:[t(ge,{children:t(ue,{placeholder:"Search for a pokemon!",onChange:u=>{const y=u.target.value.toLowerCase();r(y.length>0),n!==y&&(c(y),y!=localStorage.getItem("pokemon")?(m("SET AS FAVOURITE"),x("rgb(52, 53, 57)")):(m("FAVOURITED"),x("rgb(0, 211, 0)")))}})}),e&&o&&p(he,{children:[t(me,{children:l.data.name}),t(fe,{children:l.data.types!==void 0&&l.data.types.map(u=>t(ve,{type:u.type.name}))}),t(xe,{image:`https://projectpokemon.org/images/normal-sprite/${n}.gif`}),t(ye,{children:t(C,{text:v,color:T,width:"80%",onClick:()=>{m("FAVOURITED"),x("rgb(0, 211, 0)"),Pe({name:n,callback:()=>{R({user:h,setImage:k}),Ee({username:h.username,setUser:f})}})},error:v=="FAVOURITED"})})]}),e&&!o&&t(be,{})]})]})},Ue="/assets/logout.346e924a.svg";const Ae=a(g.button)`
    background: url(${Ue});
    background-size: contain;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 20px;
    left: 20px;
`,Re={clicked:{scale:.8},hover:{scale:1.2}};var P=()=>{const e=w();return t(Ae,{onClick:()=>{localStorage.clear(),e("/login")},whileTap:"clicked",whileHover:"hover",variants:Re})};const Ve={login:{fontSize:80},profile:{fontSize:40}},Be=()=>{const[e,r]=s.exports.useState(),[n,c]=s.exports.useState(""),o=N();return t(I.Provider,{value:[e,r,n,c],children:t(D,{children:t(M,{location:o,children:p(S,{path:"/",element:localStorage.getItem("user")?p($,{children:[t(V,{}),t(P,{})]}):t(U,{}),children:[t(S,{path:"/login",element:t(U,{})}),t(S,{path:"/profile",element:p($,{children:[t(V,{}),t(P,{})]})}),t(S,{path:"/pokemon",element:p($,{children:[t(Le,{}),t(P,{})]})})]})},o.key)})})};O.render(p(j.StrictMode,{children:[t(G,{}),t(ce,{variants:Ve,initial:"login",children:"PokeFAV"}),t(H,{children:t(Be,{})})]}),document.getElementById("root"));
