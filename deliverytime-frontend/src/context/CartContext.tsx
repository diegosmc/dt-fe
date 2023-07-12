import { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FoodData } from '../interfaces/FoodData'

interface Food extends FoodData {
  quantity: number
  subtotal: number
}

interface CartContextProps {
  cart: Food[]
  addFoodIntoCart: (food: FoodData) => void
  delFoodFromCart: (food: Food) => void
  foodCartIncrement: (food: Food) => void
  foodCartDecrement: (food: Food) => void
  confirmOrder: () => void
  payOrder: () => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const navigate = useNavigate()
  const [cart, setCart] = useState<Food[]>([])

  function addFoodIntoCart(food: FoodData): void {
    const foodExistentInCart = cart.find(
      (item) => item.food === food.food && item.id === food.id,
    )

    if (foodExistentInCart) {
      const newCart = cart.map((item) => {
        if (item.id === food.id) {
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return { ...item, quantity, subtotal }
        }

        return item
      })

      console.log(`Item ${food.food} ${food.name} adicionado aos pedidos!`)
      setCart(newCart)

      return
    }

    const newFood = { ...food, quantity: 1, subtotal: food.price }
    const newCart = [...cart, newFood]

    console.log(`Item ${food.food} ${food.name} adicionado aos pedidos!`)
    setCart(newCart)
  }

  function delFoodFromCart(food: Food) {
    const newCart = cart.filter((item) => !(item.id === food.id && item.food === food.food))

    setCart(newCart)
  }

  function updateFoodQuantity(food: Food, newQuantity: number) {
    if (newQuantity <= 0) return

    const foodExistsInCart = cart.find(
      (item) => item.id === food.id && item.food === food.food,
    )

    if (!foodExistsInCart) return

    const newCart = cart.map((item) => {
      if (item.id === foodExistsInCart.id && item.food === foodExistsInCart.food) {
        return {...item, quantity: newQuantity, subtotal: item.price * newQuantity }
      }

      return item
    })

    setCart(newCart)
  }

  function foodCartIncrement(food: Food) {
    updateFoodQuantity(food, food.quantity + 1)
  }

  function foodCartDecrement(food: Food) {
    updateFoodQuantity(food, food.quantity - 1)
  }

  function confirmOrder() {
    navigate('/payment')
  }

  function payOrder() {
    return
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addFoodIntoCart,
        delFoodFromCart,
        foodCartIncrement,
        foodCartDecrement,
        confirmOrder,
        payOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}