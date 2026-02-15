import{b as e,u as t,j as o}from"./index-B-TTUnO0.js";import"./vendor-Cfst412r.js";const n=e.body`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: ${({theme:e})=>e.colors.background};
  color: white;
  font-family: Arial, sans-serif;

  @media (max-width: 992px) {
    display: flex;
    justify-content: start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 70%;
  }
`,i=e.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: left;
  padding-bottom: 0%;
  background-color: ${({theme:e})=>e.colors.background};

  h1 {
    align-items: center;
  }
`,r=e.p`
  padding-left: 30%;
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text};
`,l=e.h1`
  margin: 0;
  padding: 0;
  font-size: 30rem;
  align-self: center;
  font-family: 'Ditoit';
  color: ${({theme:e})=>e.colors.text};
`,c=e.p`
  font-size: 1rem;
  padding-left: 65%;
  color: ${({theme:e})=>e.colors.text};
`,d=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${({theme:e})=>e.colors.background};
`,s=()=>{const{t:e}=t();return o.jsx(d,{children:o.jsxs(i,{children:[o.jsx(r,{children:e.notFound.error}),o.jsx(l,{children:e.notFound.code}),o.jsx(c,{children:e.notFound.message})]})})};export{l as ErrorCode,d as HomeStyled,i as NotFoundContainerStyled,s as NotFoundPage,n as NoteFoundStyledBory,r as SmallText,c as SmallTextFooter};
