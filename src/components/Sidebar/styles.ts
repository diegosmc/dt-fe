import styled, { css } from "styled-components";

interface ContainerProps {
  isMenuOpen: boolean;
}

export const Container = styled.aside<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ isMenuOpen }) => (isMenuOpen ? "16.3rem" : "7.75rem")};
  padding: 2rem 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.3s;

  // button {
  //   background: none;
  //   width: 100%;
  //   border: none;
  // }

  nav {
    width: 100%;
    padding: 10px 0;
    ul {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      
      li {
        &:last-child {
          margin-bottom: 0;
        }

        a {
          display: grid;
          grid-template-areas: 'icon' 'text';
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          grid-gap: 5px;
          justify-items: center;

          svg {
            fill: ${({ theme }) => theme.colors.black};
            width: 4rem;
            height: 4rem;
            transition: fill 0.3s;                
          }

          span {
            font-size: 1rem;
            font-weight: 500;
            transition: color 0.3s;
          }

          &.active {
            position: relative;

            &::after {
              content: '';
              position: absolute;
              left: 0;
              top: 50%;
              bottom: 0;
              transform: translateY(-50%);

              background-color: ${({ theme }) => theme.colors.red};
              width: 5px;
              height: calc(100% + 10px);

              border-radius: 0 5px 5px 0;
            }

            svg {
              fill: ${({ theme }) => theme.colors.red};
            }

            span {
              color: ${({ theme }) => theme.colors.red};
            }
          }
        }
      }
    }
  }
}

// @media (max-width: 720px) {
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: 999;

//   width: 100%;
//   height: 5rem;
//   overflow-y: auto;
//   padding: 0 0;

//   button {
//     display: none;
//   }

//   nav {
//     height: 100%;

//     ul {
//       flex-direction: row;
//       align-items: center;
//     }

//     li {
//       a {
//         flex-direction: column;
//         padding: 0rem;

//         svg {
//           width: 3.25rem;
//           height: 3.25rem;
//         }

//         span {
//           display: none;
//         }

//         &.active {
//           &::after {
//             display: none;
//           }
//         }
//       }
//     }
`;
