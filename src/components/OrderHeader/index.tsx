import { useCart } from '../../hooks/useCart'

import { Container } from './styles'

import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'

import logo from '../../assets/logo.svg'

export function OrderHeader() {
  const { cart } = useCart()

  return (
    <Container>
      <div>
      <img src={logo} alt="Logotipo" />
        <div>
          <h3>Meus pedidos</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, '0')}</strong> itens
          </span>
        </div>
        <CartIcon />
      </div>
    </Container>
  )
}
