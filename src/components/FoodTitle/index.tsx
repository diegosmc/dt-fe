import { ReactNode } from 'react'
import { Title } from './styles'

interface TitleProps {
  children: ReactNode
}

export function FoodTitle({ children }: TitleProps) {
  return <Title>{children}</Title>
}