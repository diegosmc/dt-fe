import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'
import { FoodProvider } from './context/FoodContext'
import { CartProvider } from './context/CartContext'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'


export default function App() {
  

  return (
    <BrowserRouter>
      <Theme>
        <FoodProvider>
          <CartProvider>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
          </CartProvider>
        </FoodProvider>
      </Theme>
    </BrowserRouter>
  )
}
