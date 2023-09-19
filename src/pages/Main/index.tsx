import { Outlet } from 'react-router-dom'

import { MyOrder } from '../../components/MyOrder'
import { Sidebar } from '../../components/Sidebar'

import { Container } from './styles'

import { NavbarFooter } from '../../components/NavbarFooter'
import { NavbarHeader } from '../../components/NavbarHeader'

export default function Main() {
  return (
    <Container>
      <NavbarHeader />
      {/* <Sidebar /> */}
      <section id='main'>
        <Outlet />
      </section>
      {/* <MyOrder /> */}
      <NavbarFooter />
    </Container>
  )
}