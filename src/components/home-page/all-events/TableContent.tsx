import { TableBody, TableCell, TableRow } from '@mui/material'
import { Column, Data } from './TableTypes'
interface Props {
  columns: Column[]
  rows: Data[]
  page: number
  rowsPerPage: number
}

const TableContent: React.FC<Props> = ({ columns, rows, page, rowsPerPage }) => {
  return (
    <TableBody>
      {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
        return (
          <TableRow hover role="checkbox" tabIndex={0} key={row.event}>
            {columns.map(column => {
              const value = row[column.id]
              return (
                <TableCell
                  style={{
                    fontSize: 'calc(4px + 0.8vw)',
                  }}
                  key={column.id}
                  align={column.align}
                >
                  {column.format && typeof value === 'number' ? column.format(value) : value}
                </TableCell>
              )
            })}
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default TableContent
