import {makeStyles} from '@mui/styles'
import { Theme} from '@mui/material'

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
  event:{    
    minWidth:'75%',
    height:500,
    scrollSnapAlign:'start',
    transform: 'scale(1)',
    filter:'grayscale(100%)',
    transition: theme.transitions.create("all", {
      duration: '0.2s',
    }),
    '&:hover':{
      filter:'grayscale(0%)',
      transform: 'scale(1.02)'
    },
    '& > div':{
      backgroundColor:'#fff',
      height:496,
      width:800,
      '& > #img':{
        border:'solid 3px #fff',
        '& > img':{
          height:'100%', 
          width:'100%',
          filter: "blur(2px)",
        }
      },
      '& > div#event-container':{
        position:'relative',
        left:'1%',
        marginTop:-485,
        backgroundColor:'rgba(250, 250, 250, 0.5)',
        borderRadius:'5px',
        
        width:'98%',
        height:'95%',
        fontSize:18,
        '& > div#event-wrapper':{
          width:'98%',
          height:'95%',
          fontSize:18,
          '& > div, & > p, & > a':{
            marginLeft:30,
            // marginLeft:47,
          },
          '& > p#event-name':{
            fontSize:36,
            marginTop:-10,
            // filter:'grayscale(0%)',
          },
          '& > p#event-date':{
            fontSize:24,
            fontWeight:600,
            marginTop:-27,
            '& > span#event-place':{
              fontWeight:150,
              fontSize:18,
            },
          },
          '& > div#event-info':{
            marginTop:150,
            '& > p':{
              marginTop:-20
            }
          },
          '& > div#event-div':{
            width:'90%'
          },
          '& > div#event-footer':{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            marginTop:10,
            '& > a':{
              fontSize:14,
              color:'#000',
              marginLeft:-45,
              textDecoration:'none',
              '&:hover':{
                textDecoration:'underline',
              }
            },
            '& > #event-button':{
              marginLeft:340,
              width:162,
              height:48,
            }
          },
          
          '& > p#event-title':{
            marginTop:20,
            textAlign:'center',
            width:148,
            backgroundColor:theme.palette.primary.light,
            color:'#000',
          }
        }
      }
    }
  },
  eventContainer:{
    width:1100,
    height:550,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    overflow:'auto',
    scrollSnapType:'none',
    scrollBehavior: 'smooth'
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
    zIndex:0,
    scrollBehavior:'smooth'
  },
  homeBlocks:{
    position:'relative',
    right:15,
    marginTop:100,
    '& > #upcoming-title, & >  #events-for-last-years':{
      display:'flex',
      alignItems: 'center',
      // marginTop:20
    }
  },
//sidebar - inactive button
  inactive:{
    boxShadow:'inset 0 0 0 0 #f9e506',
    paddingLeft:0
  } ,
//sidebar - list item
  item:{
    flexDirection:'column',
    height:62,
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
      backgroundColor:'rgba(255,255,255,0.8)',
      boxShadow:'1px 1px 1px 1px rgba(0, 0, 0, 0.1)',
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
      marginTop:10,
      textAlign:'end',
      width:'100%',
      height:'100%',
      fontSize:14,
      color:theme.palette.primary.main,
      '&:hover':{
        textDecoration:'underline',
        cursor:'pointer'

      }
    }
  },
  text:{
    fontSize:9,
    marginTop:2,
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
    position:'absolute',
    right:0,
    top:'8%',
    backgroundColor:'#000',
    width:500,
    height:285,
    color:'#fff',
    fontSize:20,
    '& > div, & > p, & > a':{
      marginLeft:47,
    },
    '& > p#event-name':{
      fontSize:35,
      marginTop:-20
    },
    '& > p#event-date':{
      fontSize:24,
      fontWeight:600,
      marginTop:-15
    },
    '& > p#event-place, & > div a':{
      fontSize:18,
      marginTop:-30
    },
    '& > a':{
      color:'#fff'
    },
    '& > div p':{
      textAlign:'center',
      marginTop:38,
      width:148,
      backgroundColor:'#fff',
      color:'#000',
    }
  }
 

}))

export default useStyles