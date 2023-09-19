import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from "./styles"

// import logo from '../../assets/logo.svg'

const logo = 'https://picsum.photos/100/100'
const background = 'https://picsum.photos/1024/120'

export function NavbarHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container id='navbarHeader' isMenuOpen={menuOpen}>
      <div className='bgImg'>
        <img src={background} alt="Imagem de fundo para dar contraste com o logo da loja" />
      </div>

      <div className="nav">
        <div className="clientAwaitTime">
          <p>50 a 60 min</p>
        </div>
        
        
        <div className='clientLogo'>
          <img className='logo' src={logo} alt="logo tipo da loja" />
        </div>

        <div className="clientStatus">
          <p>Aberto</p>
        </div>
      </div>

      <section id="clientCategory">
        <p>Sessão com as categorias dos produtos aqui (?)</p>
        <p>Talvez tenha que ser um componente separado para funcionar na estrutura</p>
      </section>
    </Container>
  )
}