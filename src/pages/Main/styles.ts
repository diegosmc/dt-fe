import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'aside section';
  grid-template-columns: 150px 1fr;
  grid-template-rows: 1fr;
  grid-gap: 50px;
  @media (max-width: 720px) {
    grid-template-areas: 'aside' 'section';
    grid-template-columns: 1fr;
    grid-template-rows: 150px 1fr;
  }

  & > aside {
    grid-area: aside;
    width: 100%;
    height: 100%;
  }

  & > section {
    width: 100%;
    height: 100%;
    grid-area: section;
    width: 100%;
    padding: 0 2rem;
    
    img.logo {
      max-width: 70px;
      max-height: 70px;
      width: 100%;
      height: 100%;
    }

    @media (max-width: 720px) {
      text-align: center;
    }
  }
`