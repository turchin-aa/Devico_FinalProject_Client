import { useEffect, useRef, useCallback, MouseEvent } from 'react'
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material'
import DynamicIcon from '../../DynamicIcon'
import useStyles from '../../styles/useStyle'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const NewsComponent = () => {
  const classes = useStyles()
  const slideRef = useRef<typeof Slider>(null)

  const posts = [
    {
      img: 'https://images.unsplash.com/photo-1578549651688-904046d4c9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80',
      title: 'The second stage of the national series "X-TEAM Time Attack 2021" took place',
      date: 'February 3, 2020',
      preview:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqu...',
      path: '/#',
    },
    {
      img: 'https://blog.ktm.com/wp-content/uploads/2017/08/195543_KTM_success_MXGP_2017_R14_RA_9262-800x533.jpg',
      title: 'The second stage of the national series "X-TEAM Time Attack 2021" took place',
      date: 'February 3, 2020',
      preview:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqu...',
      path: '/#',
    },
    {
      img: 'https://vodafoneziggo.nl/media/images/Copyright-ProShots-11728616.width-1920.jpg',
      title: 'The second stage of the national series "X-TEAM Time Attack 2021" took place',
      date: 'February 3, 2020',
      preview:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqu...',
      path: '/#',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReppYHpi3FVY_IOBxDD0lwqnCAhBA3R3IH8w&usqp=CAU',
      title: 'The second stage of the national series "X-TEAM Time Attack 2021" took place',
      date: 'February 3, 2020',
      preview:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqu...',
      path: '/#',
    },
    {
      img: 'https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/2018-dakar-rally-video-recap-results-2.jpg',
      title: 'The second stage of the national series "X-TEAM Time Attack 2021" took place',
      date: 'February 3, 2020',
      preview:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqu...',
      path: '/#',
    },
  ]

  useEffect(() => {
    slideRef.current.slickPlay()
  }, [slideRef])

  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const target = e.target as SVGSVGElement
      if (target.id === 'prev') slideRef.current.slickPrev()
      if (target.id === 'next') slideRef.current.slickNext()
    },
    [slideRef],
  )

  return (
    <div>
      <div className={classes.newsButtonsWrapper}>
        <div className={classes.newsButtons} onClick={handleClick}>
          <ArrowBackIos id="prev" />
        </div>
        <div className={classes.newsButtons} onClick={handleClick}>
          <ArrowForwardIos id="next" />
        </div>
      </div>

      <Slider
        ref={slideRef}
        style={{ maxWidth: '86vw', width: '100%', overflow: 'hidden' }}
        {...settings}
      >
        {posts.map((item, index) => {
          return (
            <div key={index} className={classes.newsWrapper}>
              <div id="post">
                <div id="media">
                  <div id="img">
                    <img src={item.img} alt="news img" />
                  </div>
                </div>
                <div id="content">
                  <p id="title">{item.title}</p>
                  <p>{item.date}</p>
                  <p>{item.preview}</p>
                  <p>
                    <a href={item.path}>Read more</a>
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default NewsComponent
