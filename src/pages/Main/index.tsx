import { Outlet } from 'react-router-dom'

import { MyOrder } from '../../components/MyOrder'
import { Sidebar } from '../../components/Sidebar'

import { Container } from './styles'

import logo from '../../assets/logo.svg'

export default function Main() {
  return (
    <Container>
      <Sidebar />   
      <section>
        <img className='logo' src={logo} alt="Logotipo" />
        <Outlet />
      </section>  
      <MyOrder />
    </Container>
  )
}