import { Outlet } from 'react-router-dom'

import { MyOrder } from '../../components/MyOrder'
import { Sidebar } from '../../components/Sidebar'

import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <Sidebar />   
      <section>
        <Outlet />
      </section>  
      <MyOrder />
    </Container>
  )
}