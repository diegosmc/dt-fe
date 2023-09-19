import { useCart } from '../../../hooks/useCart'

import { ConfirmOrder } from '../../../components/OrderClosed/ConfirmOrder'

import { currencyFormats } from '../../../helpers/currencyFormats'

import plusImg from '../../../assets/add.svg'
import minusImg from '../../../assets/minus.svg'
import deleteIcon from '../../../assets/trash.svg'

import { Container } from './styles'

export function Table() {

  const { cart, delFoodFromCart, foodCartDecrement, foodCartIncrement } = useCart()

  if (cart.length === 0) {
    return (
      <Container>
        <p>Nenhum item adicionado ao carrinho</p>
        <ConfirmOrder />
      </Container>
    )
  }
  return (
    <Container>
      <ol>
        {cart.map((item) => (
          <li key={`${item.food}-${item.id}`}>
            <div className="productBox">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <span className='price'>{currencyFormats(item.subtotal)}</span>
              </div>

              <div className='cartActions'>
                {item.quantity === 1 && (
                  <button
                    type='button'
                    onClick={() => delFoodFromCart(item)}
                  >
                    <img src={deleteIcon} alt='Reduzir quantidade' />
                  </button>
                )}

                {item.quantity > 1 && (
                  <button
                    type='button'
                    onClick={() => foodCartDecrement(item)}
                  >
                    <img src={minusImg} alt='Reduzir quantidade' />
                  </button>
                )}

                <span>{`${item.quantity}`.padStart(2, '0')}</span>

                <button
                  type='button'
                  onClick={() => foodCartIncrement(item)}
                >
                  <img src={plusImg} alt='Aumentar quantidade' />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <ConfirmOrder />
    </Container>
  )
}