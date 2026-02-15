import{m as e,n as o,s as r,b as t,j as i,u as a,L as n,R as s,k as l,l as d,o as c,q as m}from"./index-B-TTUnO0.js";import{b as p}from"./vendor-Cfst412r.js";import{c as h,d as x}from"./icons-D63U5Bdi.js";const g=t.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  padding: 0 2.5rem;
  background: ${({theme:e})=>e.colors.botton};
  border-bottom: 1px solid ${({theme:e})=>e.colors.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  flex-shrink: 0;

  @media (max-width: 992px) {
    height: 3rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 430px) {
    height: auto;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
  }
`,b=t.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  a {
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    color: ${({theme:e})=>e.colors.text};
    position: relative;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.primaryHover});
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
      color: ${({theme:e})=>e.colors.primary};

      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    gap: 1.5rem;

    a {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 430px) {
    gap: 1rem;

    a {
      font-size: 0.8rem;
    }
  }
`,f=t.div`
  padding-left: 20px;
  display: flex;
  gap: 1rem;
  align-items: center;
  border-left: 1px solid ${({theme:e})=>e.colors.botton};

  a {
    color: ${({theme:e})=>e.colors.text};
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: bold;
    border-radius: 5px;

    &:hover {
      color: ${({theme:e})=>e.colors.primary};
      background-color: ${({theme:e})=>e.colors.background};
    }
  }

  @media (max-width: 430px) {
    padding-left: 0;
    border-left: none;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`,u=t.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  button {
    background: transparent;
    border: none;
    color: ${({theme:e})=>e.colors.text};
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({theme:e})=>e.colors.background};
      color: ${({theme:e})=>e.colors.primary};
    }
  }

  span {
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.5;
  }

  @media (max-width: 430px) {
    gap: 0.25rem;

    button {
      font-size: 0.7rem;
      padding: 0.2rem 0.35rem;
    }
  }
`,y=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`,w=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 56px;
  height: 28px;
  padding: 4px;
  border-radius: 14px;
  position: relative;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  background: ${({theme:e,isDark:o})=>o?e.colors.primary:"#E0E0E0"};
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({theme:e})=>e.colors.botton};

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease;
    background: #FFFFFF;
    left: ${({isDark:e})=>e?"calc(100% - 28px)":"4px"};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .icon {
    position: absolute;
    font-size: 0.9rem;
    transition: color 0.3s ease;
    
    &:first-child {
      left: 8px;
      color: ${({isDark:e})=>e?"transparent":"#FFB800"};
    }
    
    &:last-child {
      right: 8px;
      color: ${({isDark:e})=>e?"#58B6FF":"transparent"};
    }
  }

  &:hover {
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(107, 76, 240, 0.2);
  }
`,k=({isDark:e,onToggle:o})=>i.jsx(y,{onClick:o,children:i.jsxs(w,{isDark:e,children:[i.jsx(h,{className:"icon"}),i.jsx(x,{className:"icon"})]})}),v=()=>{const{theme:t,toggleTheme:l}=(()=>{const t=e(e=>e.theme.theme),i=o(),a=p.useCallback(()=>{i(r("light"===t?"dark":"light"))},[t,i]);return{theme:t,toggleTheme:a,setTheme:e=>i(r(e))}})(),{t:d,currentLanguage:c,setLanguage:m}=a();return i.jsxs(g,{children:[i.jsxs(b,{children:[i.jsx(n,{to:s.HOME,children:d.header.home}),i.jsx(n,{to:s.ABOUT,children:d.header.about}),i.jsx(n,{to:s.CONTACT,children:d.header.contact})]}),i.jsxs(f,{children:[i.jsxs(u,{children:[i.jsx("button",{onClick:()=>m("pt-BR"),style:{opacity:"pt-BR"===c?1:.5,fontWeight:"pt-BR"===c?"bold":"normal"},children:"PT"}),i.jsx("span",{children:"/"}),i.jsx("button",{onClick:()=>m("en-US"),style:{opacity:"en-US"===c?1:.5,fontWeight:"en-US"===c?"bold":"normal"},children:"EN"}),i.jsx("span",{children:"/"}),i.jsx("button",{onClick:()=>m("zh-CN"),style:{opacity:"zh-CN"===c?1:.5,fontWeight:"zh-CN"===c?"bold":"normal"},children:"ZH"})]}),i.jsx(k,{isDark:"light"===t,onToggle:l})]})]})},$=t.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  background: ${({theme:e})=>e.colors.botton};
  border-top: 1px solid ${({theme:e})=>e.colors.background};
  text-align: center;
  position: relative;
  z-index: 3;
  flex-shrink: 0;

  p {
    font-size: 0.9rem;
    color: ${({theme:e})=>e.colors.text};
    margin: 0.5rem 0;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 2rem;

    p {
      font-size: 0.85rem;
    }
  }
`,j=t.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 1rem;
  flex-wrap: wrap;

  a {
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    color: ${({theme:e})=>e.colors.text};
    transition: all 0.3s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({theme:e})=>e.colors.primary};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${({theme:e})=>e.colors.primary};

      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;

    a {
      font-size: 0.8rem;
    }
  }
`,z=()=>{const{t:e}=a();return i.jsx($,{children:i.jsxs("div",{children:[i.jsxs("p",{children:["© ",(new Date).getFullYear()," ",e.footer.copyright]}),i.jsxs(j,{children:[i.jsx("a",{href:l.GITHUB,target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),i.jsx("a",{href:l.LINKEDIN,target:"_blank",rel:"noopener noreferrer",children:"Linkedin"}),i.jsx("a",{href:l.INSTAGRAM,target:"_blank",rel:"noopener noreferrer",children:"Instagram"})]})]})})},F=t.img`
  width: ${({width:e,size:o})=>e||o||"150px"};
  height: ${({height:e,size:o})=>e||o||"150px"};
  border-radius: 0;
  object-fit: cover;
  margin-top: 0.5rem;
  border: 3px solid ${({theme:e})=>e.colors.primary};
  z-index: 5;
  align-self: flex-start;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.16);
  }

  @media (max-width: 992px) {
    width: 120px;
    height: 120px;
    margin-top: 1.5rem;
  }
`,N=({src:e,alt:o,size:r,width:t,height:a,style:n,className:s})=>i.jsx(F,{src:e,alt:o,size:r,width:t,height:a,style:n,className:s}),C=d`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,A=d`
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,R=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${({isOpen:e})=>e?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
  animation: ${({isOpen:e})=>e?C:"fadeOut"} 0.3s ease-in-out;
`,T=t.div`
  width: 90%;
  max-width: 900px;
  height: 80vh;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${A} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
`,D=t.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  background: ${({theme:e})=>e.colors.botton};
  border-bottom: 1px solid ${({theme:e})=>e.colors.botton};
  gap: 8px;
`,H=t.div`
  display: flex;
  gap: 8px;
`,B=t.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`,_=t.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
  padding: 4px 12px;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 6px;
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text};
  opacity: 0.7;
`,O=t.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  background: ${({theme:e})=>e.colors.background};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.botton};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.primary};
    border-radius: 10px;

    &:hover {
      background: ${({theme:e})=>e.colors.primaryHover};
    }
  }
`,S=t.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.primaryHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.8;
  }
`,Y=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,E=t.div`
  padding: 1.5rem;
  background: ${({theme:e})=>e.colors.botton};
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.botton};

  .label {
    font-size: 0.85rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.6;
    margin-bottom: 0.5rem;
  }

  .value {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.primary};
  }
`,L=t.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  button {
    flex: 1;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .btn-primary {
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.primaryHover});
    color: white;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(107, 76, 240, 0.3);
    }
  }

  .btn-secondary {
    background: ${({theme:e})=>e.colors.botton};
    color: ${({theme:e})=>e.colors.text};
    border: 1px solid ${({theme:e})=>e.colors.botton};

    &:hover {
      background: ${({theme:e})=>e.colors.primary};
      color: white;
    }
  }
`,I=t.div`
  margin: 2rem 0;

  .features-title {
    font-size: 1rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 1rem;
    opacity: 0.8;
  }

  .features-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .feature-tag {
    padding: 0.5rem 1rem;
    background: ${({theme:e})=>e.colors.botton};
    border: 1px solid ${({theme:e})=>e.colors.primary};
    border-radius: 20px;
    font-size: 0.85rem;
    color: ${({theme:e})=>e.colors.primary};
    font-weight: 500;
  }
`,U=t.div`
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.botton};
  background: ${({theme:e})=>e.colors.botton};

  .preview-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    padding: 1rem;
    border-bottom: 1px solid ${({theme:e})=>e.colors.botton};
    opacity: 0.7;
  }

  iframe {
    width: 100%;
    height: 400px;
    border: none;
    background: ${({theme:e})=>e.colors.background};
  }

  .preview-message {
    padding: 2rem;
    text-align: center;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.6;
    font-size: 0.9rem;
  }
`,K=t.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`,M=t.a`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.botton} !important;
  border: 1px solid ${({theme:e})=>e.colors.primary}33;
  box-shadow: ${({theme:e})=>e.config.box_shadow_card||e.config.box_shadow};
  backdrop-filter: saturate(120%) blur(2px);
  text-decoration: none;
  color: ${({theme:e})=>e.colors.text};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  min-height: 220px;
  position: relative;
  z-index: 1;

  h4 {
    font-size: 1.15rem;
    font-weight: 700;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: ${({theme:e})=>e.colors.primary};
    transition: color 0.3s ease;
    font-family: 'Roboto', Arial, sans-serif;
    line-height: 1.4;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 1rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.85;
    flex-grow: 1;
    font-family: 'Roboto', Arial, sans-serif;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({theme:e})=>e.config.box_shadow_card||e.config.box_shadow};
    border-color: ${({theme:e})=>e.colors.primary};
    z-index: 2;

    h4 {
      color: ${({theme:e})=>e.colors.primaryHover};
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: auto;

    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`,G=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  flex: 1;
  background-color: ${({theme:e})=>e.colors.background};
  
  @media (max-width: 1100px) {
    position: relative;
  }
`,W=t.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  overflow: visible;
  position: relative;
  flex: 1;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
    margin: 2rem auto;
    padding: 0 1rem;
  }
`,P=t.div`
  flex: 1;
  display: flex;
  max-height: 80vh;
  flex-direction: column;
  justify-content: center;
  color: ${({theme:e})=>e.colors.text};
  padding-right: 2rem;

  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.primaryHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.30rem;
    line-height: 1.9;
    margin-bottom: 1.5rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.9;
  }

  @media (max-width: 992px) {
    padding-right: 0;

    h2 {
      font-size: 1.6rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.7;
      margin-bottom: 1rem;
    }
  }
`,q=t.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 80vh;
  padding-left: 2rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  position: relative;
  scroll-behavior: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  
  scrollbar-width: none;

  @media (max-width: 992px) {
    gap: 1.5rem;
    max-height: none;
    padding-left: 0;
    padding-right: 0;
  }
`,Z="/assets/avatar-MkSbgvI3.webp",J=d`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Q=d`
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,V=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
  animation: ${J} 0.3s ease-in-out;
`,X=t.div`
  width: 90%;
  max-width: 900px;
  max-height: 85vh;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${Q} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  @media (max-width: 768px) {
    width: 95%;
    max-height: 90vh;
  }
`,ee=t.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  background: ${({theme:e})=>e.colors.botton};
  border-bottom: 1px solid ${({theme:e})=>e.colors.botton};
  gap: 8px;
  flex-shrink: 0;
`,oe=t.div`
  display: flex;
  gap: 8px;
`,re=t.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`,te=t.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
  padding: 4px 12px;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 6px;
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text};
  opacity: 0.7;
`,ie=t.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  background: ${({theme:e})=>e.colors.background};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.background};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.botton};
    border-radius: 4px;

    &:hover {
      background: ${({theme:e})=>e.colors.primary};
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,ae=t.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.text};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0;
  margin-left: auto;
  line-height: 1;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`,ne=t.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border||e.colors.botton};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`,se=t.div`
  position: relative;
  flex-shrink: 0;
  
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid ${({theme:e})=>e.colors.primary};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
`,le=t.div`
  position: absolute;
  bottom: -5px;
  right: -5px;
  background: ${({theme:e})=>e.colors.primary};
  color: white;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  border: 2px solid ${({theme:e})=>e.colors.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`,de=t.div`
  flex: 1;

  h2 {
    margin: 0 0 6px 0;
    color: ${({theme:e})=>e.colors.primary};
    font-size: 28px;
    font-weight: 700;
    font-family: 'Roboto', Arial, sans-serif;
  }

  h3 {
    margin: 0 0 8px 0;
    color: ${({theme:e})=>e.colors.text};
    font-size: 16px;
    font-weight: normal;
    opacity: 0.8;
  }

  .class {
    display: inline-block;
    padding: 4px 12px;
    background: ${({theme:e})=>e.colors.card||e.colors.background};
    border: 1px solid ${({theme:e})=>e.colors.border||e.colors.botton};
    border-radius: 6px;
    font-size: 13px;
    margin-top: 4px;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.9;
  }
`,ce=t.p`
  color: ${({theme:e})=>e.colors.text};
  line-height: 1.7;
  margin-bottom: 30px;
  font-size: 15px;
  opacity: 0.85;
  font-family: 'Roboto', Arial, sans-serif;
`,me=t.div`
  h3 {
    color: ${({theme:e})=>e.colors.primary};
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Roboto', Arial, sans-serif;

    &:before {
      content: '⚔️';
      font-size: 22px;
    }
  }

  > p {
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.7;
    margin-bottom: 25px;
    font-size: 14px;
    font-family: 'Roboto', Arial, sans-serif;
  }
`,pe=t.div`
  display: grid;
  gap: 24px;
`,he=t.div`
  h4 {
    color: ${({theme:e})=>e.colors.text};
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Roboto', Arial, sans-serif;
    opacity: 0.9;
  }
`,xe=t.div`
  margin-bottom: 16px;
`,ge=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;

  span {
    color: ${({theme:e})=>e.colors.text};
    font-size: 14px;
    font-weight: 500;
    font-family: 'Roboto', Arial, sans-serif;
  }

  .level {
    color: ${({theme:e})=>e.colors.primary};
    font-weight: 600;
    font-size: 14px;
  }
`,be=t.div`
  width: 100%;
  height: 8px;
  background: ${({theme:e})=>e.colors.card||e.colors.background};
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border||e.colors.botton};
`,fe=t.div`
  height: 100%;
  width: ${({progress:e})=>e}%;
  background: ${({theme:e})=>e.colors.primary};
  border-radius: 4px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
`,ue=({isOpen:e,onClose:o})=>{const{t:r}=a();if(!e)return null;const t=c()||m,n=e=>({devops:"🚀",backend:"⚙️",tools:"🛠️","soft-skills":"🧠"}[e]||"💻"),s=((null==t?void 0:t.stats)||[]).reduce((e,o)=>(e[o.category]||(e[o.category]=[]),e[o.category].push(o),e),{}),l={devops:r.modal.categoryNames.devops,backend:r.modal.categoryNames.backend,tools:r.modal.categoryNames.tools,"soft-skills":r.modal.categoryNames.softSkills};return i.jsx(V,{onClick:e=>{e.target===e.currentTarget&&o()},children:i.jsxs(X,{children:[i.jsxs(ee,{children:[i.jsxs(oe,{children:[i.jsx(re,{color:"#FF5F56",onClick:o}),i.jsx(re,{color:"#FFBD2E"}),i.jsx(re,{color:"#27C93F"})]}),i.jsxs(te,{children:[i.jsx("span",{children:"🔒"}),i.jsx("span",{children:r.modal.profileUrl})]}),i.jsx(ae,{onClick:o,children:"×"})]}),i.jsxs(ie,{children:[i.jsxs(ne,{children:[i.jsxs(se,{children:[i.jsx("img",{src:Z,alt:r.profile.name}),i.jsxs(le,{children:["Lv ",t.level]})]}),i.jsxs(de,{children:[i.jsx("h2",{children:r.profile.name}),i.jsx("h3",{children:r.profile.title}),i.jsxs("span",{className:"class",children:["⚔️ ",r.profile.class]})]})]}),i.jsx(ce,{children:r.profile.bio}),i.jsxs(me,{children:[i.jsx("h3",{children:r.modal.characterStats}),i.jsx("p",{children:r.modal.skillsDescription}),i.jsx(pe,{children:Object.entries(s).map(([e,o])=>i.jsxs(he,{children:[i.jsxs("h4",{children:[n(e)," ",l[e]]}),o.map(e=>{var o;return i.jsxs(xe,{children:[i.jsxs(ge,{children:[i.jsx("span",{children:(null==(o=r.stats)?void 0:o[e.nameKey])||e.nameKey}),i.jsxs("span",{className:"level",children:[e.level,"/",e.maxLevel]})]}),i.jsx(be,{children:i.jsx(fe,{progress:e.experience})})]},e.nameKey)})]},e))})]})]})]})})};export{N as A,T as B,K as C,q as D,z as F,G as H,R as M,S as P,E as S,B as T,D as a,H as b,_ as c,O as d,Y as e,I as f,U as g,L as h,M as i,v as j,W as k,P as l,Z as m,ue as n};
