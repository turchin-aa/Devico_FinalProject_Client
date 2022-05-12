import { useCallback, useState, ChangeEvent } from 'react'
import { Table, TableContainer, Paper, Pagination } from '@mui/material'
import useStyles from '../../styles/useStyle'
import EventsHeaders from './TableEventsHeaders'
import TableContent from './TableContent'
import { Column, Data } from './TableTypes'

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
    maxWidth: 30,
  },
]

const createData = (start, discipline, status, event, location): Data => {
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

const AllEventsTable: React.FC = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(6)
  const classes = useStyles()

  const handleChangePage = useCallback(
    (event: ChangeEvent<unknown>, newPage: number) => {
      setPage(newPage - 1)
    },
    [page],
  )

  const pageCount = useCallback(() => {
    if (rows.length % rowsPerPage != 0) {
      return Math.floor(1 + rows.length / 6)
    }
    return Math.floor(rows.length / 6)
  }, [])

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer
        sx={{
          maxHeight: 440,
          tableLayout: 'auto',
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <EventsHeaders columns={columns} />
          <TableContent columns={columns} rows={rows} page={page} rowsPerPage={rowsPerPage} />
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
