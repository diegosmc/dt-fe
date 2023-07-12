import axios from 'axios'
import { FoodData } from '../interfaces/FoodData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getPizzas = () => api.get<FoodData[]>('/foods?food=pizza')
export const getBebidas = () => api.get<FoodData[]>('/foods?food=bebida')

export default api
