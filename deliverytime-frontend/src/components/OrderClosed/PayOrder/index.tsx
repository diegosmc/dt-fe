import { useCart } from '../../../hooks/useCart';
import { currencyFormats } from '../../../helpers/currencyFormats';
import { Container } from '../style';
import { useState } from 'react';

export function PayOrder() {
  const { cart } = useCart();
  const totalAmount = cart.reduce((acc, item) => (acc += Number(item.subtotal)), 0);
  const [payOrder, setPayOrder] = useState(false);

  const showAlert = () => {
    setPayOrder(true);

    /* Resetar o estado após um determinado tempo (opcional)
    setTimeout(() => {
      setPayOrder(false);
    });*/
  };

  return (
    <Container>
      <button type='button' onClick={showAlert}>
        Finalizar Pedido
      </button>
      <span>
        {payOrder ? (
          <strong className="fade-in">Pedido Concluído</strong>
        ) : (
          <strong>{currencyFormats(totalAmount)}</strong>
        )}
      </span>
    </Container>
  );
}