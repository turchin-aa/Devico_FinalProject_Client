import styled from '@emotion/styled'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
`

const CalendarCell = styled.div`
  min-width: 20px;
  min-height: ${(props: { isWeekEnd?; isHeader?; isSelectedMoth? }) =>
    props.isHeader ? 24 : 80}px;
  border: 1px solid #b19cd8;
  background-color: ${(props: { isWeekEnd?; isHeader?; isSelectedMoth? }) =>
    props.isWeekEnd ? '#f5f2fc' : ''};
  color: ${(props: { isWeekEnd?; isHeader?; isSelectedMoth? }) =>
    props.isSelectedMoth ? '#000' : 'rgba(0,0,0,0.5)'};
`
const Day = styled.div`
  height:31px;
  width:31px;
  display:flex;
  justify-content:'center';
  alignItems:'center';
  alignItems:'center'margin:2px;
  background-color: ${(props: { current? }) => (props.current ? '#9771de' : '')};
  color: ${(props: { current? }) => (props.current ? '#fff' : '')};
  border-radius: ${(props: { current? }) => (props.current ? '50%' : '')};
`

export { CalendarCell, Day, GridWrapper }
