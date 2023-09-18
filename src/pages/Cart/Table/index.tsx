import { useCart } from '../../../hooks/useCart'

import { ConfirmOrder } from '../../../components/OrderClosed/ConfirmOrder'

import { currencyFormats } from '../../../helpers/currencyFormats'

import plusImg from '../../../assets/circle-plus.svg'
import minusImg from '../../../assets/circle-minus.svg'

import { Container } from './styles'

export function Table() {

  const { cart } = useCart()
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanche</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.food}-${item.id}`}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormats(item.price)}</span>
              </td>
              <td>
                <div>
                  <button 
                  type='button'
                  onClick={() => console.log(`decrementar pedido`, item)}
                  >
                    <img src={minusImg} alt='Reduzir quantidade'/>
                  </button>
                <span>{`${item.quantity}`.padStart(2, '0')}</span>
                <button 
                  type='button'
                  onClick={() => console.log(`incrementar pedido`, item)}
                  >
                    <img src={plusImg} alt='Aumentar quantidade' />
                  </button>
                </div>
                </td>
              <td>
                <h5>{currencyFormats(item.subtotal)}</h5>
              </td>
              <td>Deletar</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmOrder />
    </Container>
  )
}