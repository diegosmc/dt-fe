import { FiPlus } from 'react-icons/fi';

import { currencyFormats } from '../../helpers/currencyFormats';

import { FoodData } from '../../interfaces/FoodData';
import { useCart } from '../../hooks/useCart';
import { SkeletonFood } from './SkeletonFood';

import { Container } from './styles';

interface FoodsProps {
  foods: FoodData[]
}

export function Foods({ foods }: FoodsProps) {
  const { cart, addFoodIntoCart } = useCart()

  return (
    <Container>
      {!foods.length
        ? [1, 2, 3, 4].map((n) => <SkeletonFood key={n} />)
        : foods.map((food) => {
            const foodExistent = cart.find(
              (item) => item.food === food.food && item.id === food.id,
            )

            return (
              <div key={food.id} className='food'>
                {foodExistent && <span>{foodExistent.quantity}</span>}
                <h2>{food.name}</h2>
                <img src={food.image} alt={food.name} />
                <p>{food.description}</p>
                <div>
                  <strong>{currencyFormats(food.price)}</strong>
                  <button type='button' onClick={() => addFoodIntoCart(food)}>
                    <FiPlus />
                  </button>
                </div>
              </div>
            )
          })}
    </Container>
  )
}