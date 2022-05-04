import { useCallback, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from '@mui/material'
import useStyles from '../../styles/useStyle'

interface Column {
  id: 'start' | 'discipline' | 'status' | 'event' | 'location'
  label: string
  minWidth?: number
  align?: 'center' | 'right'
  format?: (value: number) => string
}

const columns: Column[] = [
  { id: 'start', label: 'Start', minWidth: 50, align: 'center' },
  { id: 'discipline', label: 'Discipline', minWidth: 150 },
  {
    id: 'status',
    label: 'Status',
    minWidth: 100,
  },
  {
    id: 'event',
    label: 'Event',
    minWidth: 170,
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 170,
  },
]

interface Data {
  start: string
  discipline: string
  status: string
  event: string
  location: string
}

const createData = (
  start: string,
  discipline: string,
  status: string,
  event: string,
  location: string
): Data => {
  return { start, discipline, status, event, location }
}

const rows = [
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution'
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution'
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution'
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution'
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution'
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution'
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution'
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution'
  ),
]

const AllEventsTable = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(6)
  const classes = useStyles()

  const handleChangePage = useCallback(
    (event: unknown, newPage: number) => {
      setPage(newPage - 1)
    },
    [page]
  )

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" className={classes.table}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    backgroundColor: '#9470CE',
                    color: '#fff',
                    minWidth: column.minWidth,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={0} key={row.event}>
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        className={classes.tableStyle}
        variant="outlined"
        shape="rounded"
        page={page + 1}
        count={rows.length}
        onChange={handleChangePage}
      />
    </Paper>
  )
}

export default AllEventsTable
