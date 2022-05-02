import {makeStyles} from '@mui/styles'
import { Theme} from '@mui/material'
import { lineHeight } from '@mui/system'

const minorFont:number = 12
const margin_tw:number = 12

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
    fontSize:50,
    fontWeight:'700',
    '& > span':{
      
    }
  },
  additional:{
    marginTop:-30,
    fontSize:"1.3rem",
    color:'#5C5C5C'
  },
  buttons:{
    position:'relative',
    left:-30,
    display:'flex',
    justifyContent:'space-evenly',
    fontSize:12,
    '& > *':{
      height:50,
      width:200,
    }
  },

//sidebar drawer
  container:{
    width:'12%',
    position:'sticky',
    top:0,
    zIndex:2    
  },
//ovverides drawer style 
  drawerPaper:{
    "&&": {
      width:110,
      backgroundColor:theme.palette.primary.main,
      color: '#fff',
      fontSize:11
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
    bottom:`-${margin_tw}%`
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
    flexDirection:'column',
    height:60,
    cursor: 'pointer',
    
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
    left:5,
    height:15,
    width:100,
    marginTop:'8%',
    marginBottom:'30%'
  },
  navbar:{
    '&&':{
      backgroundColor:'transparent',
      height:60,
      zIndex:1
    }
  },
  notifContent:{
    flexDirection: 'column',
    textAlign:'center',
    height:'94%', 
    fontSize:14
  },
  notifContentH:{
    fontSize:24,
    marginBottom:-10
  },
  notifContentIcon:{
    backgroundColor:'#E5E5E5',
    width:80,
    height:80,
    borderRadius:4  
  },
  notifHeader:{
    display:'flex',
    alignItems: 'center',
    },
  notifHText:{ 
    position:'relative',
    width:'100%',
    height:'100%',
    margin:`0px 10px 10px  10px`,
    '& > span':{
      display:'block',
      textAlign:'end',
      width:'100%',
      height:'100%',
      fontSize:14,
      color:'#3581F7',
      '&:hover':{
        textDecoration:'underline',
        cursor:'pointer'

      }
    }
    // fontWeight:800
  },
  text:{
    fontSize:9,
    textAlign:'center',
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
    fontSize:minorFont,
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
  userBarDropdown:{
    width:224,
    marginTop:6,
    marginLeft:margin_tw,
  },
  userBarNotifDropdown:{
    width:500,
    height:400,
    // overflowY:'scroll'

  },
  userBarNotif:{
    marginTop:margin_tw,
    marginLeft:-150,
  },
  userBarNotifArrow:{
    position:'absolute',
    top:40,
    right:237
  },
  userBarDropdownButtons:{
    width:224,
    height:48,
    color:'#8F8F8F',
    '&:hover':{
      cursor:'pointer',
      backgroundColor:'#dbd3de',
      color:'#000'
    }
  },
  userBarInner:{
    width:60,
    height:'100%'
  },
  userBarText:{
    marginLeft:margin_tw,
    '& > div':{
      marginTop:-5
    }
  },
  welcomeBlock:{
    width:'100%',
    lineHeight:1,
    '& > div':{
      color:'#000',
      marginTop:margin_tw
    }
  },
  welcomeEventContainer:{
    backgroundColor:'#000000',
    width:487,
    height:308
  }
 

}))

export default useStyles