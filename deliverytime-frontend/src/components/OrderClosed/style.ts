import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.footer`
  padding-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: ${({ theme }) => theme.colors.red};
    width: 100%;
    max-width: 16.5rem;
    min-height: 4rem;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1.25rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.1, '#AA2424')};
    }
  }

  span {
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    position: relative;

    strong {
      margin-left: 8.75rem;
      font-weight: 800;
      font-size: 3.25rem;
      color: ${({ theme }) => theme.colors.red};
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