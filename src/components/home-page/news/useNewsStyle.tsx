import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useNewsStyles = makeStyles((theme: Theme) => ({
  newsButtonsWrapper: {
    position: 'absolute',
    top: 5,
    right: 0,
  },
  newsButtons: {
    width: 30,
    display: 'inline-block',
    marginRight: 5,
    transform: 'scale(1)',

    '&:hover': {
      cursor: 'pointer',
    },
    '&:active': {
      transform: 'scale(1.1)',
    },
    '& > *': {
      marginLeft: 5,
    },
  },
  newsWrapper: {
    height: 400,
    margin: 0,
    '& > #post': {
      margin: 5,
      position: 'relative',
      height: '100%',
      width: '97%',
      borderRadius: 5,
      border: `1px solid #fff`,
      backgroundColor: '#fff',
      fontSize: 18,
      '& > #content': {
        textAlign: 'start',
        '& > #title': {
          fontSize: 24,
          fontWeight: 700,
        },
        '& > p a': {
          color: '#000',
        },
      },
      '& > #media': {
        '& > div#img': {
          width: '100%',
          hight: 200,
          '& > img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
        },
        position: 'relative',
      },
    },
  },
}))
export default useNewsStyles
