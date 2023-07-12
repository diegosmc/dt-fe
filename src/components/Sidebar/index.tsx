import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from "./styles"

import { ReactComponent as PizzaIcon } from "../../assets/pizza.svg"
import { ReactComponent as DrinkIcon } from "../../assets/drink.svg"

import menuImg from '../../assets/menu.svg'

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
  <Container isMenuOpen={menuOpen}>
    <button type = 'button' onClick={handleToggleMenu}>
      <img src={menuImg} alt='Abrir / Fechar o menu' />
    </button>
    <nav>
      <ul>
        <li>
        <NavLink to="/">
        <PizzaIcon />
          <span>Pizzas</span>
       </NavLink>
    </li>
    <li>
      <NavLink to="bebidas">
        <DrinkIcon />
          <span>Bebidas</span>
       </NavLink>
    </li>
  </ul>
</nav>

</Container>
)}