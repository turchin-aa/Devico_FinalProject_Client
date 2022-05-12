import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const usePartnersStyles = makeStyles((theme: Theme) => ({
  partnersContainer: {
    width: 150,
    height: 75,
    marginRight: 10,
    marginBottom: 25,
    '& > img': {
      width: '80%',
      height: '80%',
      objectFit: 'scale-down',
    },
  },
}))
export default usePartnersStyles
