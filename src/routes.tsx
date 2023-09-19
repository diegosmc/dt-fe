import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import PizzasPage from './pages/Main/Pizzas'
import DrinksPage from './pages/Main/Bebidas'

import Cart from './pages/Cart'
import Payment from './pages/Payment'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<PizzasPage />} />
        <Route path='bebidas' element={<DrinksPage />} />
        <Route path='cart' element={<Cart />} />
        <Route path='payment' element={<Payment />} />
      </Route>
    </Routes>
  )
}
