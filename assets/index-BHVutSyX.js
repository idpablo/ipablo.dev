import{S as e,b as t,f as i,d as r,e as a,l as o,A as n,u as s,j as l,P as d,g as c}from"./index-B-TTUnO0.js";import{b as m}from"./vendor-Cfst412r.js";import{j as p,A as g,C as x,F as h,n as b}from"./ProfileModal-CfkaM9tX.js";import{T as u}from"./TrafficLight-ByBJIWjM.js";import"./icons-D63U5Bdi.js";const f="/assets/hitohito-yaq7Jgxc.webp",w=o`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`,y=o`
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.08);
  }
`,k=o`
  0%, 100% {
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.6), inset -2px -2px 0px rgba(0, 0, 0, 0.3), inset 2px 2px 0px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 50px rgba(255, 215, 0, 0.9), 0 0 70px rgba(255, 215, 0, 0.5), inset -2px -2px 0px rgba(0, 0, 0, 0.4), inset 2px 2px 0px rgba(255, 255, 255, 0.3);
  }
`,$=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  padding: 2rem 1rem;
  gap: 4rem;
  overflow-y: auto;
  background: ${({theme:e})=>e.colors.background};
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.primary};
    border-radius: 4px;
    
    &:hover {
      background: ${({theme:e})=>e.colors.primaryHover};
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    gap: 2rem;
  }
`,j=e,v=t(n)`

  .fisherman-avatar {
    bottom: -65px;
}
`,z=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  animation: ${i} 0.8s ease;
  padding: 0 1rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.primaryHover});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.05rem;
    font-family: 'Courier New', monospace;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.85;
    text-align: center;
    max-width: 600px;
    line-height: 1.6;
    letter-spacing: 0.3px;
    min-height: 1.4em;

    .typed-text {
      display: inline;
    }

    .terminal-cursor {
      display: inline-block;
      width: 0.55em;
      height: 1em;
      background: ${({theme:e})=>e.colors.primary};
      animation: ${w} 1s steps(1) infinite;
      border-radius: 2px;
      margin-left: 6px;
      vertical-align: middle;
    }
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    
    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`,B=t.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  gap: 1.2rem;
  width: 100%;
  max-width: 960px;
  padding: 0 1rem;

  & > div:nth-child(1) {
    animation-delay: 0s, 0s;
  }
  & > div:nth-child(2) {
    animation-delay: 0.3s, 0.4s;
  }
  & > div:nth-child(3) {
    animation-delay: 0.6s, 0.8s;
  }
  & > div:nth-child(4) {
    animation-delay: 0.4s, 0.5s;
  }
  & > div:nth-child(5) {
    animation-delay: 0.7s, 0.9s;
  }
  & > div:nth-child(6) {
    animation-delay: 0.5s, 0.6s;
  }
  & > div:nth-child(7) {
    animation-delay: 0.8s, 1s;
  }
  & > div:nth-child(8) {
    animation-delay: 0.2s, 0.3s;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding: 0 0.5rem;
  }
`,C=t.div`
  background-color: ${e=>e.bgColor};
  background-image: ${({theme:e})=>"#0B0620"===e.colors.backgroundBlackHole?"linear-gradient(155deg, rgba(10, 10, 16, 0.9), rgba(22, 20, 28, 0.92) 55%, rgba(6, 6, 10, 0.95)),\n         radial-gradient(circle at 15% 10%, rgba(255, 255, 255, 0.06), transparent 55%),\n         repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0, rgba(255, 255, 255, 0.04) 1px, transparent 1px, transparent 7px)":"linear-gradient(160deg, rgba(246, 250, 255, 0.98), rgba(210, 226, 255, 0.75) 60%),\n        radial-gradient(circle at 80% 0%, rgba(255, 255, 255, 0.5), transparent 55%),\n        repeating-linear-gradient(45deg, rgba(122, 158, 210, 0.04) 0, rgba(122, 158, 210, 0.04) 1px, transparent 1px, transparent 10px)"};
  background-blend-mode: overlay;
  border: 1px solid
    ${({theme:e})=>"#0B0620"===e.colors.backgroundBlackHole?"rgba(210, 200, 255, 0.18)":"rgba(132, 166, 220, 0.45)"};
  border-radius: 6px;
  padding: 1.2rem;
  cursor: ${e=>e.$isDragging?"grabbing":"grab"};
  transition: all 0.3s ease;
  animation: ${i} 0.6s ease;
  position: relative;
  overflow: hidden;
  box-shadow:
    inset 0 0 0 1px
      ${({theme:e})=>"#0B0620"===e.colors.backgroundBlackHole?"rgba(255, 255, 255, 0.12)":"rgba(255, 255, 255, 0.65)"},
    inset 0 0 28px
      ${({theme:e})=>"#0B0620"===e.colors.backgroundBlackHole?"rgba(0, 0, 0, 0.55)":"rgba(150, 180, 230, 0.28)"},
    0 10px 22px rgba(0, 0, 0, 0.32);
  opacity: ${e=>e.$isDragging?.5:1};
  transform: ${e=>e.$isDragging?"scale(0.95)":"scale(1)"};
  animation: ${y} 4s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 4px;
    border: 1px solid
      ${({theme:e})=>"#0B0620"===e.colors.backgroundBlackHole?"rgba(255, 255, 255, 0.12)":"rgba(150, 185, 225, 0.35)"};
    pointer-events: none;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px;
    pointer-events: none;
    background: ${({theme:e})=>"#0B0620"===e.colors.backgroundBlackHole?"radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08), transparent 45%),\n           linear-gradient(180deg, rgba(0, 0, 0, 0.4), transparent 35%, rgba(0, 0, 0, 0.5) 100%)":"radial-gradient(circle at 20% 15%, rgba(255, 255, 255, 0.55), transparent 55%),\n          linear-gradient(180deg, rgba(255, 255, 255, 0.25), transparent 40%, rgba(160, 190, 230, 0.18) 100%)"};
    mix-blend-mode: screen;
    opacity: ${({theme:e})=>"#0B0620"===e.colors.backgroundBlackHole?.5:.7};
  }

  &:hover {
    transform: ${e=>e.$isDragging?"scale(0.95)":"translateY(-8px)"};
    animation: ${r} 0.3s ease forwards, ${y} 2.8s ease-in-out infinite;
    box-shadow:
      inset 0 0 0 1px
        ${({theme:e})=>"#0B0620"===e.colors.backgroundBlackHole?"rgba(255, 255, 255, 0.16)":"rgba(255, 255, 255, 0.65)"},
      inset 0 0 32px
        ${({theme:e})=>"#0B0620"===e.colors.backgroundBlackHole?"rgba(0, 0, 0, 0.6)":"rgba(160, 190, 230, 0.3)"},
      0 14px 28px rgba(0, 0, 0, 0.35);
  }

  &:active {
    transform: ${e=>e.$isDragging?"scale(0.95)":"translateY(-4px)"};
    cursor: grabbing;
  }

  @media (max-width: 768px) {
    padding: 0.9rem;
  }

  &.treasure-block {
    background-size: 150% !important;
    background-position: center !important;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(255, 215, 0, 0.5), rgba(0, 0, 0, 0.8));
      pointer-events: none;
      z-index: 1;
      animation: ${k} 2s ease-in-out infinite;
    }

    &::before {
      display: none;
    }
  }
`,S=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  font-family: 'Georgia', 'Times New Roman', serif;

  .icon {
    font-size: 2.1rem;
    display: block;
    animation: ${r} 0.4s ease;
    filter: ${({theme:e})=>"#0B0620"===e.colors.backgroundBlackHole?"drop-shadow(0 3px 6px rgba(0, 0, 0, 0.5))":"drop-shadow(0 2px 6px rgba(160, 190, 230, 0.45))"};
  }

  h3 {
    font-size: 0.8rem;
    font-weight: 700;
    color: ${({theme:e})=>"#0B0620"===e.colors.backgroundBlackHole?"#E7E0FF":"#2A1B44"};
    text-shadow: ${({theme:e})=>"#0B0620"===e.colors.backgroundBlackHole?"0 2px 4px rgba(0, 0, 0, 0.6)":"0 1px 2px rgba(120, 150, 210, 0.45)"};
    margin: 0.5rem 0;
    letter-spacing: 0.1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    padding: 0 0.25rem;
  }

  p {
    font-size: 0.78rem;
    color: ${({theme:e})=>"#0B0620"===e.colors.backgroundBlackHole?"rgba(226, 220, 255, 0.88)":"rgba(50, 38, 82, 0.82)"};
    text-shadow: ${({theme:e})=>"#0B0620"===e.colors.backgroundBlackHole?"0 1px 2px rgba(0, 0, 0, 0.45)":"0 1px 2px rgba(160, 190, 230, 0.35)"};
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .icon {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.7rem;
    }
  }
`,_=t.div`
  width: 100%;
  max-width: 960px;
  padding: 2rem;
  background: ${({theme:e})=>e.colors.botton};
  border-radius: 12px;
  border-left: 4px solid ${({theme:e})=>e.colors.primary};
  animation: ${i} 0.8s ease 0.2s backwards;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: ${({theme:e})=>e.colors.primary};
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 1rem;
    opacity: 0.85;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`,H=t.div`
  width: 100%;
  max-width: 1200px;
  padding: 3rem 1rem;
  animation: ${i} 0.8s ease 0.4s backwards;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 3rem;
    text-align: center;
    color: ${({theme:e})=>e.colors.primary};
  }

  @media (max-width: 768px) {
    padding: 2rem 0.5rem;

    h2 {
      font-size: 1.4rem;
    }
  }
`,N=o`
  0% {
    box-shadow: 0 0 0px rgba(0, 0, 0, 0), inset 0 0 40px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 0 30px ${({theme:e})=>e.colors.primary}, inset 0 0 40px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 60px ${({theme:e})=>e.colors.primary}, inset 0 0 40px rgba(0, 0, 0, 0.3);
  }
`,F=o`
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
`,D=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.primaryHover});
    transform: translateX(-50%);
    animation: ${F} 1.5s ease;
    box-shadow: 0 0 20px ${({theme:e})=>e.colors.primary};
  }

  @media (max-width: 768px) {
    gap: 3rem;
    padding: 1rem 0;

    &::before {
      left: 30px;
      width: 3px;
    }
  }
`,U=t.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2rem;
  position: relative;
  animation: ${i} 0.8s ease;
  justify-content: ${e=>e.$isLeft?"flex-start":"flex-end"};
  padding: 0 3rem;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    height: 2px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;
    ${e=>e.$isLeft?`\n        left: 50%;\n        width: calc(50% - 150px);\n        background: linear-gradient(90deg, ${e.theme.colors.primary}, transparent);\n        box-shadow: 0 0 15px ${e.theme.colors.primary}, \n                    0 0 30px ${e.theme.colors.primary}40;\n      `:`\n        right: 50%;\n        width: calc(50% - 150px);\n        background: linear-gradient(270deg, ${e.theme.colors.primary}, transparent);\n        box-shadow: 0 0 15px ${e.theme.colors.primary}, \n                    0 0 30px ${e.theme.colors.primary}40;\n      `}
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 0 0 0 100px;

    &::before {
      display: none;
    }
  }
`,M=t.div`
  flex: 0 1 300px;
  padding: 1.5rem;
  background: ${({theme:e})=>e.colors.botton};
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease;
  border: 2px solid transparent;

  background: ${({theme:e})=>"#1a1a2e"===e.colors.background||"#0f0f1e"===e.colors.background?`radial-gradient(circle at 30% 30%, rgba(102, 51, 153, 0.15), ${e.colors.botton})`:`radial-gradient(circle at 30% 30%, rgba(147, 112, 219, 0.1), ${e.colors.botton})`};

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    transform: scale(1.08);
    animation: ${N} 0.8s ease infinite;
    box-shadow: 0 0 50px ${({theme:e})=>e.colors.primary}40;

    .timeline-icon {
      transform: scale(1.3) rotateZ(360deg);
    }

    .timeline-date {
      color: ${({theme:e})=>e.colors.primaryHover};
    }
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${({theme:e})=>e.colors.primary};
  }

  p {
    font-size: 0.9rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.85;
    line-height: 1.5;
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    flex: 1;
    padding: 1.2rem;

    h3 {
      font-size: 0.95rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`,I=t.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary};
  margin-top: 0.5rem;
  transition: color 0.3s ease;
`,P=t.div`
  width: 80px;
  height: 80px;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.primary};
  border-radius: 50%;
  position: relative;
  z-index: 10;
  font-size: 2rem;
  box-shadow: 0 0 30px ${({theme:e})=>e.colors.primary}60;
  transition: all 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    inset: -4px;
    background: linear-gradient(45deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.primaryHover});
    border-radius: 50%;
    z-index: -1;
    opacity: 0.6;
    animation: ${o`
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    `} 3s linear infinite;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    min-width: 60px;
    font-size: 1.5rem;
  }
`,T=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 40px;
  background: linear-gradient(180deg, transparent, ${({theme:e})=>e.colors.primary});
  z-index: 5;

  @media (max-width: 768px) {
    display: none;
  }
`,A=t.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem;
  animation: ${i} 0.8s ease 0.6s backwards;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    color: ${({theme:e})=>e.colors.primary};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h2 {
      font-size: 1.4rem;
    }
  }
`,E=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: ${({theme:e})=>e.colors.botton};
  border-radius: 12px;
  flex: 1;
  min-width: 200px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  animation: ${i} 0.6s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  .passion-icon {
    font-size: 3rem;
    animation: ${r} 0.4s ease;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.primary};
  }

  p {
    font-size: 0.95rem;
    color: ${({theme:e})=>e.colors.text};
    opacity: 0.85;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-width: auto;

    .passion-icon {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`,Y=t.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  animation: ${a} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
`,L=t.div`
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.primaryHover});
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: white;
  min-width: 300px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 800;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    min-width: 250px;
    padding: 1.5rem;

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`,W=t.div`
  animation: ${i} 0.8s ease 0.2s backwards;
`,O=t.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  width: 90%;
  max-width: 900px;
  flex: 1;
  margin: 0 auto;
  border-radius: 5px;
  padding: 3rem;
  color: ${({theme:e})=>e.colors.text};
  opacity: ${({theme:e})=>e.config.opacityPrimary};
  box-shadow: ${({theme:e})=>e.config.box_shadow};
  transform-origin: center;

  @media (max-width: 992px) {
    display: flex; 
    justify-content: center;
    width: 95%;
    padding: 1rem;
    z-index: 1;
  }
`,R=o`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`,G=t.div`
  width: 100%;
  height: 60%;
  animation: ${R} 20s linear infinite;
  text-align: center;
  font-size: 1.5rem; 
  line-height: 2;
`,X=t.div`
  background: ${({theme:e})=>e.colors.background};
  border-radius: 12px;
  padding: 2rem;
  min-width: 400px;
  max-width: 500px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  
  @media (max-width: 768px) {
    min-width: 90vw;
    max-width: 90vw;
    padding: 1.5rem;
  }
`,q=()=>{const{t:e}=s(),[t,i]=m.useState(!1),[r,a]=m.useState(null),[o,n]=m.useState(0),[w,y]=m.useState(null),[k,N]=m.useState(0),[F]=m.useState(()=>Math.floor(10*Math.random())+15),[T,O]=m.useState(!1),[R,G]=m.useState(!1),[q,J]=m.useState(""),[Q,Z]=m.useState(!1);m.useEffect(()=>{const t=e.about.welcome;let i=0;if(J(""),Z(!1),!t)return;Z(!0);const r=window.setInterval(()=>{i+=1,J(t.slice(0,i)),i>=t.length&&(window.clearInterval(r),Z(!1))},110);return()=>window.clearInterval(r)},[e.about.welcome]);const K=[{id:1,bgColor:"#8B4513",icon:"🏗️",title:e.about.blocks.constructor.title,description:e.about.blocks.constructor.description,isSpecial:!0},{id:2,bgColor:"#1f4788",icon:"💻",title:e.about.blocks.digital_explorer.title,description:e.about.blocks.digital_explorer.description},{id:3,bgColor:"#2d5a2d",icon:"⚙️",title:e.about.blocks.automation_maestro.title,description:e.about.blocks.automation_maestro.description},{id:4,bgColor:"#4a3728",icon:"📊",title:e.about.blocks.scalability_guardian.title,description:e.about.blocks.scalability_guardian.description},{id:6,bgColor:"#FF6B6B",icon:"⚽",title:e.about.blocks.soccer_passion.title,description:e.about.blocks.soccer_passion.description},{id:7,bgColor:"#4ECDC4",icon:"🎣",title:e.about.blocks.calm_fisherman.title,description:e.about.blocks.calm_fisherman.description},{id:8,bgColor:"#95E1D3",icon:"🌟",title:e.about.blocks.dream_creator.title,description:e.about.blocks.dream_creator.description}],[V,ee]=m.useState(K),te=[{date:"07/11/1997",year:1997,icon:"👶",title:e.about.timeline.origin.title,description:e.about.timeline.origin.description},{date:"2021",year:2021,icon:"🛡️",title:e.about.timeline.infrastructure_guardian.title,description:e.about.timeline.infrastructure_guardian.description},{date:"2022",year:2022,icon:"🌐",title:e.about.timeline.infrastructure_analyst.title,description:e.about.timeline.infrastructure_analyst.description},{date:"2023",year:2023,icon:"☕",title:e.about.timeline.java_junior.title,description:e.about.timeline.java_junior.description},{date:"2024",year:2024,icon:"🐳",title:e.about.timeline.devops_era.title,description:e.about.timeline.devops_era.description},{date:"2025",year:2025,icon:"⚡",title:e.about.timeline.eternal_learner.title,description:e.about.timeline.eternal_learner.description},{date:"2026",year:2026,icon:"🌟",title:e.about.timeline.odyssey_continues.title,description:e.about.timeline.odyssey_continues.description}],ie=e=>{a(e),setTimeout(()=>a(null),3e3)},re=()=>{const e=o+1;n(e),7===e&&(ie("secret"),n(0))},ae=()=>{y(null);const e=k+1;N(e),e>=F&&!T&&(O(!0),ie("unlocked"))};return l.jsxs(l.Fragment,{children:[l.jsxs(d,{children:[l.jsx(p,{}),l.jsxs($,{children:[l.jsxs(z,{children:[l.jsxs(v,{onClick:()=>i(!0),style:c.cursorPointer,children:[l.jsx(j,{}),l.jsx(g,{src:"/assets/ta_na_mao-C2on-aSQ.webp",alt:"Pablo Bento Soares",width:"120px",height:"90px",className:"fisherman-avatar",style:{...c.borderNone,...c.boxShadowNone}})]}),l.jsxs(W,{children:[l.jsx("h1",{children:e.about.timeline.title}),l.jsxs("p",{children:[l.jsx("span",{className:"typed-text",children:q}),Q&&l.jsx("span",{className:"terminal-cursor","aria-hidden":"true"})]})]})]}),l.jsxs(B,{children:[V.map((e,t)=>l.jsx(C,{bgColor:e.bgColor,draggable:!0,onDragStart:()=>(e=>{y(e)})(t),onDragOver:e=>((e,t)=>{if(e.preventDefault(),null===w||w===t)return;const i=[...V],r=i[w];i.splice(w,1),i.splice(t,0,r),ee(i),y(t)})(e,t),onDragEnd:ae,onClick:1===e.id?re:void 0,$isDragging:w===t,children:l.jsxs(S,{children:[l.jsx("span",{className:"icon",children:e.icon}),l.jsx("h3",{children:e.title}),l.jsx("p",{children:e.description})]})},e.id)),T&&l.jsx(C,{bgColor:"#FFD700",onClick:()=>{T&&G(!0)},className:"treasure-block",style:{animation:"fadeInUp 0.8s ease, treasureGlow 2s ease-in-out infinite",boxShadow:"0 0 30px rgba(255, 215, 0, 0.6), inset -2px -2px 0px rgba(0, 0, 0, 0.3), inset 2px 2px 0px rgba(255, 255, 255, 0.2)",backgroundImage:`url(${f})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:l.jsxs(S,{style:{position:"relative",zIndex:2},children:[l.jsx("img",{src:f,alt:"Hito Hito no Mi",style:{width:"60px",height:"60px",objectFit:"cover",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.4)",animation:"treasureSpinFloat 3s ease-in-out infinite"},className:"treasure-icon"}),l.jsx("h3",{children:e.about.treasureUnlocked.title}),l.jsx("p",{children:e.about.treasureCount.replace("{count}",k.toString())})]})})]}),l.jsxs(_,{children:[l.jsxs("h2",{children:["📖 ",e.about.story.title]}),l.jsx("p",{children:e.about.story.paragraph1}),l.jsx("p",{children:e.about.story.paragraph2})]}),l.jsxs(H,{children:[l.jsx("h2",{children:e.about.timeline.title}),l.jsx(D,{children:te.map((e,t)=>l.jsxs(U,{$isLeft:t%2==0,children:[l.jsx(P,{className:"timeline-icon",children:e.icon}),l.jsxs(M,{children:[l.jsx("h3",{children:e.title}),l.jsx("p",{children:e.description}),l.jsx(I,{className:"timeline-date",children:e.date})]})]},t))})]}),l.jsxs(A,{children:[l.jsxs("h2",{children:["🎪 ",e.about.skills.title]}),l.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center"},children:[l.jsxs(E,{children:[l.jsx("span",{className:"passion-icon",children:"💻"}),l.jsx("h3",{children:e.about.skills.code.title}),l.jsx("p",{children:e.about.skills.code.description})]}),l.jsxs(E,{children:[l.jsx("span",{className:"passion-icon",children:"⚽"}),l.jsx("h3",{children:e.about.skills.soccer.title}),l.jsx("p",{children:e.about.skills.soccer.description})]}),l.jsxs(E,{children:[l.jsx("span",{className:"passion-icon",children:"🎣"}),l.jsx("h3",{children:e.about.skills.fishing.title}),l.jsx("p",{children:e.about.skills.fishing.description})]})]})]}),r&&"unlocked"!==r&&l.jsx(Y,{children:l.jsxs(L,{children:["treasure"===r&&l.jsxs(l.Fragment,{children:[l.jsxs("h2",{children:["✨ ",e.about.treasureUnlocked.title," ✨"]}),l.jsx("p",{children:e.about.treasureUnlocked.message}),l.jsx("p",{children:e.about.treasureUnlocked.blockCount.replace("{count}",k.toString())})]}),"secret"===r&&l.jsxs(l.Fragment,{children:[l.jsxs("h2",{children:["🔓 ",e.about.secretUnlocked.title," 🔓"]}),l.jsx("p",{children:e.about.secretUnlocked.message}),l.jsx("p",{children:e.about.secretUnlocked.extraMessage})]})]})}),R&&l.jsx(Y,{onClick:()=>G(!1),children:l.jsxs(X,{onClick:e=>e.stopPropagation(),children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.75rem 1rem",borderBottom:"1px solid rgba(255, 255, 255, 0.05)",marginBottom:"2rem"},children:[l.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:l.jsx(u,{})}),l.jsx("div",{style:{flex:1,textAlign:"center",fontSize:"0.85rem",opacity:.6,marginLeft:"-60px"},children:"one-piece://found"}),l.jsx(x,{onClick:()=>G(!1),children:"×"})]}),l.jsxs("div",{style:{textAlign:"center",padding:"2rem 0"},children:[l.jsx("img",{src:f,alt:"Hito Hito no Mi",style:{width:"180px",height:"auto",marginBottom:"1.5rem",animation:"popup 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",filter:"drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))"}}),l.jsx("h2",{style:{fontSize:"1.8rem",marginBottom:"1.2rem",fontWeight:700,background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:e.about.treasureUnlocked.title}),l.jsx("p",{style:{fontSize:"1.1rem",opacity:.85,lineHeight:1.8,marginBottom:"1rem"},children:e.about.treasureUnlocked.message}),l.jsx("p",{style:{fontSize:"0.9rem",opacity:.7},children:e.about.treasureUnlocked.blockCount.replace("{count}",k.toString())})]}),l.jsx("button",{onClick:()=>G(!1),style:{width:"100%",padding:"0.75rem",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",borderRadius:"8px",color:"white",fontSize:"1rem",fontWeight:600,cursor:"pointer",transition:"all 0.3s ease"},onMouseOver:e=>e.currentTarget.style.transform="scale(1.05)",onMouseOut:e=>e.currentTarget.style.transform="scale(1)",children:"Fechar"})]})})]}),l.jsx(h,{})]}),l.jsx(b,{isOpen:t,onClose:()=>i(!1)})]})};export{$ as AboutContainer,q as AboutPage,O as AboutStyled,H as AdventureTimeline,W as AnimatedText,v as AvatarContainer,C as Block,S as BlockContent,B as BlocksGrid,L as EasterEggContent,Y as EasterEggModal,G as EndCreditsText,z as HeroSection,d as HomeStyled,E as Passion,j as SeaPixel,A as SkillsShowcase,_ as StorySection,T as TimelineConnector,M as TimelineContent,I as TimelineDate,P as TimelineIcon,U as TimelineItem,D as TimelineWrapper,X as TreasureModalContent};
