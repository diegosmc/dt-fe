import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({theme}) => theme.colors.white};
  height: 50px !important;
  position: fixed;
  bottom: 0;
  box-shadow: 0 2px 6px 0;
  z-index: 1;

  ol {
    display: flex;
    flow: row;
    gap: 10px;
    height: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    
    li {
      a {
        display: block;
        padding: 5px 45px;

        svg {
          width: 36px;
          height: 36px;
        }
      }
    }
  }
`;