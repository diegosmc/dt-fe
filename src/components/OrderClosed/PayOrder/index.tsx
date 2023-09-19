import { useCart } from '../../../hooks/useCart';

import { currencyFormats } from '../../../helpers/currencyFormats';

import { Container } from '../style';

import { useState } from 'react';

export function PayOrder() {
  const { cart } = useCart();
  
  const totalAmount = cart.reduce((acc, item) => (acc += Number(item.subtotal)), 0);

  return (
    <Container>
      <button type='submit'>Finalizar Pedido</button>
      <span>
        Pedido Concluido <strong>{currencyFormats(totalAmount)}</strong>
        
      </span>
    </Container>
  );
}