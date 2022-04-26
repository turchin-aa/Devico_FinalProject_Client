import React from 'react'
import {makeStyles} from '@mui/styles'
import Link from 'react-router-dom'
import {Container, Button} from '@mui/material'

const useStyles = makeStyles(theme=>({
  mainText:{
    fontSize:"2.5em",
    fontWeight:'700'
  },
  additional:{
    marginTop:'-20px',
    fontSize:"1.3rem"
  },
  buttonPurple:{
    height:'50px',
    width:'200px',
    color:"#fff",
    elevetion:'0',
    fontSize:"1.3rem",
    backgroundColor:'#9470CE',
    marginRight:'200px'
  },
  buttonWhite:{
    height:'50px',
    width:'200px',
    elevetion:'0',
    fontSize:"1.3rem",
    backgroundColor:'#fff'
  }
}))


const Welcome: React.FC = () =>{
  const classes = useStyles()
  return(
    <div id="">
      <div>
        <p className={classes.mainText}>Welcome to Kharkiv Racing</p>
        <p className={classes.additional}>We hare exited to see you here. Let's rock</p>
        <Button variant='contained'className={classes.buttonPurple} href=''>Sign in</Button>
        <Button variant='outlined'className={classes.buttonWhite} href=''>Sign up</Button>
        {/* <Link to=''>Forgot the password?</Link> */}
      </div>
      <div>

      </div>
      
    </div>
  )
}

export default Welcome