import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-height: 100vh;
  height: 100%;
  display: grid;
  grid-template-areas: 'header' 'content' 'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 120px 1fr 50px;
  grid-gap: 0px;
  // @media (min-width: 1025px) {
  //   grid-template-areas: 'aside section';
  //   grid-template-columns: 150px 1fr;
  //   grid-template-rows: 1fr;
  // }

  & > section#navbarHeader,
  & > section#navbarFooter {
    max-width: 100vw;
    width: 100%;
    height: 100%;
    overflow: hidden;
    align-items: end;
  }

  & > section#navbarHeader {
    grid-area: header;
  }

  & > section#navbarFooter {
    grid-area: footer;
  }

  // & > aside {
  //   grid-area: aside;
  //   width: 100%;
  //   height: 100%;
  //   overflow: hidden;
  //   padding: 10px 0;
  // }

  & > section#main {
    width: 100%;
    max-width: 100vw;
    height: 100%;
    grid-area: content;
    width: 100%;
    padding: 2rem 1rem 5rem;
    
    img.logo {
      max-width: 70px;
      max-height: 70px;
      width: 100%;
      height: 100%;
    }
  }
`