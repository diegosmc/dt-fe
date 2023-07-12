import { useCart } from '../../../hooks/useCart'

import { currencyFormats } from '../../../helpers/currencyFormats'

import { Container } from '../style'

export function ConfirmOrder() {
  const { cart, confirmOrder } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += Number(item.subtotal)), 0)

  return (
    <Container>
      <button type='button' onClick={confirmOrder}>Finalizar Pedido</button>
      <span>
        <strong>{currencyFormats(totalAmount)}</strong>
      </span>
    
    </Container>
  )
}