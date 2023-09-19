import styled, {css} from "styled-components";

interface ContainerProps {
  isMenuOpen: boolean
}

export const Container = styled.section<ContainerProps>`
  position: relative;
  display: grid;

  .nav {
    display: grid;
    grid-template-areas: 'clientAwaitTime clientLogo clientStatus';
    grid-template-columns: 1fr 100px 1fr;
    grid-template-rows: 25px;
  }

  .bgImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .clientAwaitTime,
  .clientStatus{
    color: hsl(0, 0%, 74%);
    overflow: hidden;
    padding: 0 10px;
    display: flex;
    align-items: center;

    p {
      line-height: 100%;
      font-size: 12px;
    }
  }

  .clientAwaitTime,
  .clientLogo,
  .clientStatus {
    position: relative;
    z-index: 1;
    background: #363636;
    width: 100%;
    height: 100%;
  }

  .clientAwaitTime {
    grid-area: clientAwaitTime;
    align-self: left;
  }
  
  .clientLogo {
    z-index: 1;
    position: relative;
    img {
      position: absolute;
      top: -85px;
      border-radius: 50%;
      box-shadow: 0 2px 6px 0;
      hsla(0, 0%, 0%, 0.2);
    }
  }
  
  .clientStatus {
    grid-area: clientStatus;
    justify-content: end;
  }
  
  #clientCategory {
    display: none;
    position: relative;
    z-index: 1;
    background-color: yellow;
  }
`;
