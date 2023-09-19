import { useCart } from '../../../hooks/useCart'

import { currencyFormats } from '../../../helpers/currencyFormats'

import { Container } from '../style'

export function ConfirmOrder() {
  const { cart, confirmOrder } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += Number(item.subtotal)), 0)

  return (
    <Container>
      <span>
        Total sem entrega:
      </span>
      <span>
        <strong>{currencyFormats(totalAmount)}</strong>
      </span>

      <button type='button' onClick={confirmOrder}>Continuar</button>
    </Container>
  )
}