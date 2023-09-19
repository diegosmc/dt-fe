import styled from 'styled-components'

export const Container = styled.main`
  background: ${({ theme }) => theme.colors.white};
  // border-radius: 8px;
  overflow: hidden;

  & > p {
    text-align: center;
    padding: 2rem 0;
  }

  ol {
    padding: 1rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      // box-shadow: 0 2px 6px 0;
      // border-radius: 8px;
      overflow: hidden;

      display: grid;
      grid-template-areas: 'productBox';
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      align-items: center;
      gap: 1rem;

      .productBox {
        grid-area: productBox;
        display: grid;
        grid-template-columns: 55px 1fr 1fr;
        grid-template-rows: 1fr;
        align-items: top;
        justify-items: start;
        padding: 0.5rem;
        gap: .5rem;

        & > img {
          width: 55px;
          height: 55px;
          border-radius: 6px;
          box-shadow: 0 8px 6px -8px;
        }

        h4 {
          font-size: 1rem;
          font-weight: 300;
          margin-bottom: 0.5rem;
          color: ${({ theme }) => theme.colors.gray800};
        }

        span.price {
          color: ${({ theme }) => theme.colors.gray800};
          font-size: 1rem;
          font-weight: 500;
        }

        .cartActions {
          // background: ${({ theme }) => theme.colors.gray200};
          justify-self: end;
          align-self: end;
          display: flex;
          gap: 5px;

          button {
            border: none;
            background: none;
          }

          img {
            width: 18px;
            height: 18px;
          }
          
          span {
            font-size: 1rem;
          }
        }
      }

      .productCartInfo {
        grid-area: productCartInfo;
        background: blue;
      }

      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  table {
    max-width: 100vw;
    width: 100%;
    border-spacing: 0 0;
    border-collapse: collapse;

    th {
      padding: 0 1rem 0.5rem 0rem;

      font-weight: 500;
      font-size: 1.125rem;
      text-transform: uppercase;
      text-align-last: distribute;

      &:nth-child(2) {
        padding-left: 4rem;
      }
    }

    td {
      padding: 1.5rem 1rem 1.5rem 1rem;
      padding-top: 1.5rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};

      h4 {
        margin-bottom: 0.5rem;
        font-weight: 400;
        font-size: 1.125rem;
      }

      > span {
        font-weight: 700;
        font-size: 1.5rem;
      }

      /* quantidade */

      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        button {
          background: none;
          flex: 0;
          border: none;

          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 1.25rem;
          }
        }
      }

      h5 {
        font-weight: 700;
        font-size: 1.5rem;
      }

      &:first-child {
        width: 7.5rem;
        padding-left: 0;
        padding-right: 0;

        img {
          object-fit: cover;
          width: 7.5rem;
          height: 7.5rem;
          border-radius: 8px;
        }
      }

      &:nth-child(2) {
        padding-left: 2rem;
      }

      &:nth-child(3),
      &:nth-child(4) {
        width: 11rem;
      }

      &:last-child {
        width: 1.5rem;
        padding-right: 0;

        /* ação / deletar */
      }
    }
  }
`