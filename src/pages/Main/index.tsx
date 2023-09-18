import { Outlet } from 'react-router-dom'

import { MyOrder } from '../../components/MyOrder'
import { Sidebar } from '../../components/Sidebar'

import { Container } from './styles'

import logo from '../../assets/logo.svg'
import { NavbarFooter } from '../../components/NavbarFooter'
import { NavbarHeader } from '../../components/NavbarHeader'

export default function Main() {
  return (
    <Container>
      {/* <NavbarHeader /> */}
      <Sidebar />
      <section id='main'>
        <img className='logo' src={logo} alt="Logotipo" />
        <Outlet />
      </section>
      <MyOrder />
      {/* <NavbarFooter /> */}
    </Container>
  )
}