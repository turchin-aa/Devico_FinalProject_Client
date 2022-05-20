import { TableCell, TableHead, TableRow } from '@mui/material'
import { memo } from 'react'
import { Column } from './TableTypes'

interface Props {
  columns: Column[]
}

const EventsHeaders: React.FC<Props> = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column, index) => (
          <TableCell
            key={index}
            align={column.align}
            style={{
              backgroundColor: '#9470CE',
              color: '#fff',
              height: column.height,
              minWidth: column.minWidth,
              maxWidth: column.maxWidth,
              width: column.width,
              fontSize: 'calc(4px + 0.8vw)',
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default memo(EventsHeaders)
