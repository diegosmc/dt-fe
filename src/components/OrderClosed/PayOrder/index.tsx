import { useCart } from '../../../hooks/useCart';

import { currencyFormats } from '../../../helpers/currencyFormats';

import { Container } from '../style';

export function PayOrder() {
  const { cart } = useCart();
  
  const totalAmount = cart.reduce((acc, item) => (acc += Number(item.subtotal)), 0);

  return (
    <Container>
      <button type='submit'>Finalizar Pedido</button>
      <span>
      Total <strong>{currencyFormats(totalAmount)}</strong>
        
      </span>
    </Container>
  );
}