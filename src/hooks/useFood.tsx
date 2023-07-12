import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

export function useFood() {
  return useContext(FoodContext)
}