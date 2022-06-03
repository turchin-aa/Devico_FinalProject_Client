import type { Identifier, XYCoord } from 'dnd-core'
import { FC, useCallback } from 'react'
import { useRef } from 'react'
import { DragIndicator } from '@mui/icons-material'
import { useDrag, useDrop } from 'react-dnd'
import { useAuthStyles } from './CarsStyles'
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { useAppDispatch } from '../../../hooks/redux.hook'
import { sagaActions } from '../../../store/saga-actions'

export const ItemTypes = {
  CAR: 'car',
}

export interface CarProps {
  id: any
  model: string
  index: number
  capacityEngine: string
  year: string
  regVehNumber: string
  techPassNumber: string
  vinNumber: string
  moveCar: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem {
  index: number
  id: string
  type: string
}

export const Car: FC<CarProps> = ({
  id,
  model,
  index,
  capacityEngine,
  year,
  regVehNumber,
  techPassNumber,
  vinNumber,
  moveCar,
}) => {
  const dispatch = useAppDispatch()
  const classes = useAuthStyles()
  const ref = useRef<HTMLDivElement>(null)
  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: ItemTypes.CAR,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveCar(dragIndex, hoverIndex)

      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CAR,
    item: () => {
      return { id, index }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const deleteCar = useCallback(() => {
    dispatch({ type: sagaActions.USER_DELETE_CAR_SAGA, payload: { id } })
  }, [dispatch, id])

  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  return (
    <div ref={ref} className={classes.main} style={{ opacity }} data-handler-id={handlerId}>
      <div className={classes.container}>
        <div className={classes.wrapper_dnd}>
          <DragIndicator sx={{ cursor: 'pointer' }} />
        </div>
        <div className={classes.wrapperCar}>
          <div className={classes.model}>{model}</div>
          <div className={classes.year}>{year}</div>
        </div>
        <div className={classes.wrapperMulti}>
          <div className={classes.params}>{'Capacity Engine: ' + capacityEngine}</div>
          <div className={classes.regNumber}>{'Reg. Venchle Number: ' + regVehNumber}</div>
        </div>
        <div className={classes.wrapperMulti}>
          <div className={classes.params}>{'Technical passport number: ' + techPassNumber}</div>
          <div className={classes.regNumber}>{'Vin number: ' + vinNumber}</div>
        </div>
        <div className={classes.buttons}>
          <ModeEditIcon className={classes.mode} />
          <DeleteIcon onClick={deleteCar} />
        </div>
      </div>
    </div>
  )
}
