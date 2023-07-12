import { useFood } from '../../../hooks/useFood'

import { Head } from '../../../components/Head'
import { Foods } from '../../../components/Foods'
import { FoodTitle } from '../../../components/FoodTitle'

export default function Bebidas () {
    const {  bebidas } = useFood()
    
    return (
        <>
        <Head title='Bebidas'/>
        <FoodTitle>Bebidas</FoodTitle>
        <Foods foods={bebidas}></Foods>
        </>
        )
}