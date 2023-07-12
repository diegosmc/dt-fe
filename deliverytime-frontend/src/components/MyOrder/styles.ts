import { darken } from 'polished'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
  position: absolute;
  right: 1.5rem;
  bottom: 0.5rem;

  background: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;

  transition: background 0.3s;

  &:hover {
    background: ${darken(0.4, '#FFFFFF')};
  }

  span:first-child {
    margin-right: 0.25rem;
    font-weight: 500;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.red};
  }

  svg {
    fill: ${({ theme }) => theme.colors.red};
    width: 2rem;
    height: 2rem;
  }

  span:last-child {
    margin-left: 0.75rem;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: 720px) {
    top: 0.5rem;
    bottom: initial;

    span:first-child {
      display: none;
    }
  }
`
