import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const FullAppCalendar = () => {
  return (
    <FullCalendar
      dayMaxEvents={true}
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={false}
      headerToolbar={{
        left: 'title',
        center: '',
        right: 'prev,next',
      }}
      eventBackgroundColor="#9470CE"
      eventColor="#fff"
      events={[
        { title: 'event 1', date: '2022-05-04' },
        { title: 'event 2', date: '2022-05-04' },
        { title: 'event 3', date: '2022-05-04' },
        { title: 'event 1', date: '2022-05-04' },
        { title: 'event 2', date: '2022-05-04' },
        { title: 'event 3', date: '2022-05-04' },
        { title: 'event 2', date: '2022-05-02' },
      ]}
    />
  )
}

export { FullAppCalendar }
