import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'
import { FoodProvider } from './context/FoodContext'
import { CartProvider } from './context/CartContext'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
          <ToastContainer autoClose={3000}/>
          <GlobalStyle />
          <Normalize />
          </CartProvider>
        </FoodProvider>
      </Theme>
    </BrowserRouter>
  )
}
