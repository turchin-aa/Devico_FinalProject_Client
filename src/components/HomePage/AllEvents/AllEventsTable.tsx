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
  maxWidth?: number
  width?: string | number
  align?: 'center' | 'right'
  format?: (value: number) => string
}

const columns: Column[] = [
  {
    id: 'start',
    label: 'Start',
    minWidth: 5,
    maxWidth: 20,
    align: 'center',
  },
  {
    id: 'discipline',
    label: 'Discipline',
    minWidth: 10,
    maxWidth: 50,
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 10,
  },
  {
    id: 'event',
    label: 'Event',
    minWidth: 5,
    width: '40%',
    maxWidth: 30,
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 5,
    // width: 'calc(5px+0.8vw)',
    maxWidth: 30,
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
  location: string,
): Data => {
  return { start, discipline, status, event, location }
}

const rows = [
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
  ),
  createData(
    '07.12',
    'Digital motorsport',
    'National Seria',
    'Drive Contact Race, a virtual stage of the national seria',
    'Kharkiv. Maidan constitution',
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
    [page],
  )

  const pageCount = () => {
    if (rows.length % rowsPerPage != 0) {
      return Math.floor(1 + rows.length / 6)
    }
    return Math.floor(rows.length / 6)
  }

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer
        sx={{
          maxHeight: 440,
          tableLayout: 'auto',
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align={column.align}
                  style={{
                    backgroundColor: '#9470CE',
                    color: '#fff',
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
        </Table>
      </TableContainer>
      <Pagination
        className={classes.tableStyle}
        variant="outlined"
        shape="rounded"
        page={page + 1}
        count={pageCount()}
        onChange={handleChangePage}
      />
    </Paper>
  )
}

export default AllEventsTable
