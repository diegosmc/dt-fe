import { Container } from "./styles"

import { ReactComponent as IconCart } from "../../assets/cart-large-svgrepo-com.svg"
import { ReactComponent as IconHome } from "../../assets/home-svgrepo-com.svg"
import { ReactComponent as IconUser } from "../../assets/user-circle-svgrepo-com.svg"
import { NavLink } from "react-router-dom"

export function NavbarFooter() {
  return (
    <Container id='navbarFooter'>
      <ol>
        <li>
          <NavLink to="/">
            <IconHome />
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <IconCart />
          </NavLink>
        </li>
        <li>
          <a href="#">
            <IconUser />
          </a>
        </li>
      </ol>
    </Container>
  )
}