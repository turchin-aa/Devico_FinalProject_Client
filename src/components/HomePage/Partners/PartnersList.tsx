import useStyles from '../../styles/useStyle'
import usePartnersStyles from './usePartnersStyle'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import clsx from 'clsx'

const settings = {
  infinite: true,
  centerMode: true,
  speed: 500,
  slidesToShow: 6,
  rows: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerPadding: '100px',
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        centerPadding: '70px',
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: '100px',
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerRow: 1,
      },
    },
  ],
}

const PartnersList = () => {
  const partners_list = [
    {
      id: 1,
      name: 'coca-cola',
      logo: 'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id: 2,
      name: 'coca-cola',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Motorola_new_logo.svg/1280px-Motorola_new_logo.svg.png',
    },
    {
      id: 3,
      name: 'coca-cola',
      logo: 'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id: 4,
      name: 'coca-cola',
      logo: 'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id: 5,
      name: 'coca-cola',
      logo: 'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id: 6,
      name: 'coca-cola',
      logo: 'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id: 7,
      name: 'coca-cola',
      logo: 'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id: 8,
      name: 'coca-cola',
      logo: 'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id: 9,
      name: 'coca-cola',
      logo: 'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id: 10,
      name: 'coca-cola',
      logo: 'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id: 11,
      name: 'coca-cola',
      logo: 'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
    {
      id: 12,
      name: 'coca-cola',
      logo: 'https://ua.coca-colahellenic.com/ua/about-us/relationship-with-tccc/_jcr_content/root/container_1407045275/teaser.coreimg.jpeg/1598474362750/coca-cola-logo.jpeg',
    },
  ]

  const classes = useStyles()
  const classesPartners = usePartnersStyles()
  return (
    <div>
      <Slider style={{ maxWidth: '86vw', width: '100%', overflow: 'hidden' }} {...settings}>
        {partners_list.map(item => {
          return (
            <div
              key={item.id}
              id="partner-logo"
              className={clsx(classes.filterGreyScale, classesPartners.partnersContainer)}
            >
              <img src={item.logo} alt={item.name} />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default PartnersList
