import { useFood } from '../../../hooks/useFood'

import { Head } from '../../../components/Head'
import { FoodTitle } from '../../../components/FoodTitle'

import { Foods } from '../../../components/Foods'

export default function Pizzas () {
  const { pizzas } = useFood()
  
  return (
    <>
      <Head title='Pizzas' description='Itttttttts Pizza Time'/>
      <FoodTitle> Pizzas </FoodTitle>
      <Foods foods={pizzas}></Foods>
    </>
  )
}