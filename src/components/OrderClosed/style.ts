import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.footer`
  padding: 1.5rem 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: #f3f5f7;

  border-top: 1px solid hsl(220, 12%, 95%);

  button {
    background: ${({ theme }) => theme.colors.teal};
    background: #097bc3;
    width: 100%;
    padding: 0.75rem 1.5rem;
    border: 0 none !important;
    border-radius: 8px;
    // font-weight: 600;
    letter-spacing: 0.05rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.white};
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.1, '#097bc3')};
    }
  }

  span {
    font-weight: 300;
    position: relative;
    display: inline-block;
    width: 50%;
    margin-bottom: 1rem;

    strong {
      display: block;
      text-align: right;
      font-weight: 800;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.red};

      color: ${({ theme }) => theme.colors.gray800};
      font-size: 1rem;
      font-weight: 500;
    }

    .fade-in {
      font-size: 2.25rem;
      opacity: 0;
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      animation: fadeIn 1s forwards;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`