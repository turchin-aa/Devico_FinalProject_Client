import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

export const useAuthStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
  wrapperMulti: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '60px',
  },
  wrapperCar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  wrapper_dnd: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
  },
  model: {
    display: 'flex',
    marginLeft: '10px',
    fontSize: '16px',
    fontWeight: 600,
  },
  year: {
    display: 'flex',
    marginLeft: '10px',
    fontSize: '16px',
    fontWeight: 600,
  },
  params: {
    display: 'flex',
    fontSize: '14px',
    fontWeight: 400,
    color: 'grey',
  },
  regNumber: {
    display: 'flex',
    fontSize: '14px',
    fontWeight: 400,
    color: 'grey',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: '20px',
    cursor: 'pointer',
  },
  mode: {
    marginRight: '8px',
  },
  main: {
    background: '#F8F8F8',
    borderRadius: '5px',
    height: '80px',
    width: '900px',
    marginBottom: '10px',
    boxShadow: '0 0 5px 3px rgba(221, 221, 221, 1)',
    '&:first-child': {
      marginTop: '25px',
    },
    '&:last-child': {
      marginBottom: '25px',
    },
  },
}))
