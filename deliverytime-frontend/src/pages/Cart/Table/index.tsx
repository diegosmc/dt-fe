import { useCart } from '../../../hooks/useCart'

import { ConfirmOrder } from '../../../components/OrderClosed/ConfirmOrder'

import { currencyFormats } from '../../../helpers/currencyFormats'

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
              <td>{item.quantity}</td>
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