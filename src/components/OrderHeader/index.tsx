import { useCart } from '../../hooks/useCart'

import { Container } from './styles'

export function OrderHeader() {
  const { cart } = useCart()

  return (
    <Container>
      <div>
        <div>
          <h3>Meu carrinho</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, '0')}</strong> itens
          </span>
        </div>
      </div>
    </Container>
  )
}
