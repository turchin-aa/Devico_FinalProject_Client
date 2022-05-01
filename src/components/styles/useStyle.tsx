import {makeStyles} from '@mui/styles'
import { Theme} from '@mui/material'

const useStyles = makeStyles((theme:Theme)=>({
  active:{
    backgroundColor:'#77629e',
    position:'relative',
    boxShadow:'inset 10px 0 0 0 #f9e506',
  },
//gradle for navbar and pages  
  appContainer:{
    display:'flex'
  },
  mainText:{
    fontSize:"2.5em",
    fontWeight:'700'
  },
  additional:{
    marginTop:'-20px',
    fontSize:"1.3rem"
  },
  buttons:{
    height:50,
    width:200,
    elevetion:'0',
    fontSize:"1.3rem",
  },
  buttonPurple:{
    color:"#fff",
    backgroundColor:theme.palette.primary.main,
    marginRight:'200px'
  },
  buttonWhite:{
    backgroundColor:'#fff'
  },
//sidebar drawer
  container:{
    width:'22%',
    position:'sticky',
    top:0,
    zIndex:2    
  },
//ovverides drawer style 
  drawerPaper:{
    "&&": {
      backgroundColor:theme.palette.primary.main,
      color: '#fff',
      fontSize:10
    }
  },
  flexCenter:{
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
//delete???? - was used to style footer part of menu, but now it's a single list
  footerMenu:{
    position:'relative',
    bottom:'-12%'
  },
  homePageContainer:{
    position:'relative',
    display:'flex',
    flexDirection:'column',
    marginTop:60,
    zIndex:0
  },
//sidebar - inactive button
  inactive:{
    boxShadow:'inset 0 0 0 0 #f9e506',
    paddingLeft:0
  } ,
//sidebar - list item
  item:{
    height:50,
    cursor: 'pointer',
    marginBottom: theme.spacing(2),
    transition: theme.transitions.create("background-color", {
      duration: '0.2s',
    }),
    
    "@media screen and {max-width:960px}": {
         marginBottom:theme.spacing(0),
      } ,
    
    "&:hover":{
      backgroundColor:theme.palette.primary.light,
    }
  },
  logoBlock:{
    position:'relative',
    left:'20%',
    height:50,
    width:150,
    marginTop:'8%',
    marginBottom:'15%'
  },
  navbar:{
    '&&':{
      backgroundColor:'transparent',
      height:60,
      zIndex:1
    }
  },
  text:{
    fontSize:9,
    "@media screen and {max-width:960px}":{
         display: 'none'
       }
  },
  userBar:{
    backgroundColor:'#000',
    position:'fixed',
    top:0,
    right:0,

    height:60,
    fontSize:12,
  },
  userBarButton:{
    cursor:'pointer'
  },
  userBarComponentW:{
    '&&':{
      color:'#fff'
    }
  },
  userBarDivider:{
    '&&':{
      backgroundColor:'#fff'
    }
  },
  userBarInner:{
    width:60,
    height:'100%'
  },
  userBarText:{
    marginLeft:12,
    '& > div':{
      marginTop:-5
    }
  }
 

}))

export default useStyles