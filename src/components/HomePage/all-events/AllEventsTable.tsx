import { useCallback, useState, ChangeEvent, memo } from 'react'
import { Table, TableContainer, Paper, Pagination } from '@mui/material'
import useStyles from '../../../theme/useStyle'
import EventsHeaders from './TableEventsHeaders'
import TableContent from './TableContent'
import { Column, Data } from './TableTypes'
import { useAppSelector } from '../../../hooks/redux.hook'
import { EventData } from '../../../types/globalTypes'
import moment from 'moment'

const height = 21

const columns: Column[] = [
  {
    id: 'start',
    label: 'Start',
    height: height,
    minWidth: 5,
    maxWidth: 20,
    align: 'center',
  },
  {
    id: 'discipline',
    label: 'Discipline',
    height: height,
    minWidth: 10,
    maxWidth: 50,
  },
  {
    id: 'status',
    label: 'Status',
    height: height,
    minWidth: 10,
  },
  {
    id: 'event',
    label: 'Event',
    height: height,
    minWidth: 5,
    width: '20%',
    maxWidth: 30,
  },
  {
    id: 'location',
    label: 'Location',
    height: height,
    minWidth: 5,
    width: '20%',
    maxWidth: 28,
  },
]

const createData = (start, discipline, status, event, location): Data => {
  return { start, discipline, status, event, location }
}

const rowsEmpty = rows => {
  const pageCount = Math.floor(rows.length / 6)
  const empty = 6 * (pageCount + 1) - rows.length
  if (rows.length > 6 * pageCount && rows.length < 6 * (pageCount + 1)) {
    for (let i = 0; i < empty; i++) {
      rows.push(createData('', ' ', '  ', '  ', '  '))
    }
  }

  return rows
}

const AllEventsTable: React.FC = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(6)
  const classes = useStyles()

  const events = useAppSelector<EventData>(state => state.event.events)

  const rows = rowsEmpty(
    events.map(event =>
      createData(
        moment(event.date).format('DD.MM').toString(),
        event.discipline,
        event.series,
        event.title,
        event.place,
      ),
    ),
  )

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
  }, [rows])

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer
        sx={{
          maxHeight: 500,
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

export default memo(AllEventsTable)
