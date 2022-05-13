import styled from '@emotion/styled'

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
`

export const CalendarCell = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 20px;
  min-height: ${(props: { isWeekEnd?; isHeader?; isSelectedMoth? }) =>
    props.isHeader ? 24 : 80}px;
  border: 1px solid #b19cd8;
  background-color: ${(props: { isWeekEnd?; isHeader?; isSelectedMoth? }) =>
    props.isWeekEnd ? '#f5f2fc' : ''};
  color: ${(props: { isWeekEnd?; isHeader?; isSelectedMoth? }) =>
    props.isSelectedMoth ? '#000' : 'rgba(0,0,0,0.5)'};
`
export const Day = styled.div`
  height: 31px;
  width: 31px;
  display: flex;
  justify-content: 'center';
  alignitems: 'center';
  alignitems: 'center';
  margin: 2px;
  background-color: ${(props: { current? }) => (props.current ? '#9771de' : '')};
  color: ${(props: { current? }) => (props.current ? '#fff' : '')};
  border-radius: ${(props: { current? }) => (props.current ? '50%' : '')};
`

export const CalendarEvent = styled.div`
  margin: 0 1px 1px 1px;
  display: flex;
  align-items: center;
  width: 96%;
  height: 22px;
  border-radius: 5px;
  text-align: start;
  background-color: #9771de;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const CalendarWrapper = styled.div`
  position: relative;
  width: 100%;
`
export const WeekDay = styled.div`
  text-align: start;
  width: 100%;
  margin-left: 10px;
  color: #000;
`

export const Header = styled.div`
  border-left: 1px solid #b19cd8;
  margin: 10px 0px 10px 0px;
`
export const EventsNumber = styled.div`
  width: 20px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-color: #6e52a3;
  margin: 0 2px 1px 1px;
`
export const CalendarList = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  background-color: #6e52a3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 2px 5px 2px;
  margin-left: -2px;
`
