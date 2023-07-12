import { ReactNode, createContext, useEffect, useState } from 'react'

import { FoodData } from '../interfaces/FoodData'

import { getBebidas, getPizzas } from '../services/api'

interface FoodContextProps {
  pizzas: FoodData[]
  bebidas: FoodData[]
}

interface FoodProviderProps {
  children: ReactNode;
}

export const FoodContext = createContext({} as FoodContextProps)

export function FoodProvider({ children }: FoodProviderProps ) {
  const [pizzas, setPizzas] = useState<FoodData[]>([])
  const [bebidas, setBebidas] = useState<FoodData[]>([])


    useEffect(() =>{
    ;(async () => {
      try {
      const pizzaRequest = await getPizzas()
      const bebidaRequest = await getBebidas()

      const req = [pizzaRequest, bebidaRequest]

      const [
        { data: pizzaResponse },
        { data: bebidaResponse },
      ] = await Promise.all(req)

      setPizzas(pizzaResponse)
      setBebidas(bebidaResponse)
    } catch (error) {
      console.error(error)
    }
    })()    
  },[])

  return (
    <FoodContext.Provider value={{ pizzas, bebidas }}>
      {children}
    </FoodContext.Provider>
  )
}

