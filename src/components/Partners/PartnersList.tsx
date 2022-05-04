import useStyles from '../../styles/useStyle'
import {CardMedia} from '@mui/material'
import clsx from 'clsx'

const PartnersList = () =>{
  const partners_list =[
    {
      id:1,
      name:'coca-cola',
      logo:'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id:2,
      name:'coca-cola',
      logo:'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id:3,
      name:'coca-cola',
      logo:'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id:4,
      name:'coca-cola',
      logo:'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id:5,
      name:'coca-cola',
      logo:'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id:6,
      name:'coca-cola',
      logo:'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id:7,
      name:'coca-cola',
      logo:'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id:8,
      name:'coca-cola',
      logo:'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id:9,
      name:'coca-cola',
      logo:'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id:10,
      name:'coca-cola',
      logo:'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id:11,
      name:'coca-cola',
      logo:'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id:12,
      name:'coca-cola',
      logo:'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
  ]

  const classes = useStyles()
  return(
      <div className={classes.partnersContainer}>
        {
          partners_list.map((item,index)=>{
            return(
              <div key={index} id='partner-logo' className={classes.filterGreyScale}>
                <CardMedia sx={{height:'100%', width:'100%'}} id='img'>
                  <img src={item.logo} alt={item.name} />
                </CardMedia> 
              </div>
            )
          })
        }
        
      </div>
  )
}

export default PartnersList