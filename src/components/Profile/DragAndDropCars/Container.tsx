import update from 'immutability-helper'
import { FC, useEffect } from 'react'
import { useCallback, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook'
import { sagaActions } from '../../../store/saga-actions'
import { ICar } from '../../../store/user-slice'
import { Car } from './Car'

export interface ContainerState {
  cars: ICar[]
}

export const Container: FC = () => {
  const car: ICar[] = useAppSelector(state => state.user.cars)
  const dispatch = useAppDispatch()

  const [cars, setCars] = useState([...car])

  useEffect(() => {
    setCars([...car])
  }, [car])

  useEffect(() => {
    dispatch({ type: sagaActions.USER_GET_CARS_SAGA })
  }, [dispatch])

  const moveCar = useCallback((dragIndex: number, hoverIndex: number) => {
    setCars((prevCars: ICar[]) =>
      update(prevCars, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCars[dragIndex] as ICar],
        ],
      }),
    )
  }, [])

  const renderCar = useCallback((card: ICar, index: number) => {
    return (
      <Car
        key={card.id}
        index={index}
        id={card.id}
        year={card.year}
        capacityEngine={card.capacityEngine}
        regVehNumber={card.regVehNumber}
        techPassNumber={card.techPassNumber}
        vinNumber={card.vinNumber}
        model={card.model}
        moveCar={moveCar}
      />
    )
  }, [])
  return (
    <>
      <div>{cars.map((card, i) => renderCar(card, i))}</div>
    </>
  )
}

export default Container
