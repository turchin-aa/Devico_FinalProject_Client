import React from 'react';
import {makeStyles} from '@mui/styles'


const useStyles = makeStyles(theme=>({
  container:{
    display:'flex',
    flexDirection:'column'
  }
}))

const FAQ: React.FC = () =>{
  const classes = useStyles()

  return (
    <div className={classes.container}>

    faq
    </div>
  )
}


export default FAQ;
