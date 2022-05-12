import { MouseEventHandler, useCallback, useRef } from 'react'
import { Divider, Button } from '@mui/material'
import useStyles from '../../styles/useStyle'
import useScrollableStyles from './useScrollableStyles'
import clsx from 'clsx'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  infinite: true,
  speed: 500,

  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
}

const ScrollableItems = () => {
  const classes = useStyles()
  const classesScrollable = useScrollableStyles()
  const sRef = useRef<typeof Slider>(null)

  const next_event = [
    {
      title: 'next event',
      name: 'AUTO.RIA Race',
      date: '12.12.2021',
      place: 'Kharkiv. Maidan constitution',
      img: 'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png',
      discipline: 'Digital motorsport',
      status: 'National Seria',
      series: 'National Digital Time Attack Series (NS-CTA) 2021',
    },
    {
      title: 'next event',
      name: 'AUTO.RIA Race',
      date: '12.12.2021',
      place: 'Kharkiv. Maidan constitution',
      img: 'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png',
      discipline: 'Digital motorsport',
      status: 'National Seria',
      series: 'National Digital Time Attack Series (NS-CTA) 2021',
    },
    {
      title: 'next event',
      name: 'AUTO.RIA Race',
      date: '12.12.2021',
      place: 'Kharkiv. Maidan constitution',
      img: 'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png',
      discipline: 'Digital motorsport',
      status: 'National Seria',
      series: 'National Digital Time Attack Series (NS-CTA) 2021',
    },
    {
      title: 'next event',
      name: 'AUTO.RIA Race',
      date: '12.12.2021',
      place: 'Kharkiv. Maidan constitution',
      img: 'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png',
      discipline: 'Digital motorsport',
      status: 'National Seria',
      series: 'National Digital Time Attack Series (NS-CTA) 2021',
    },
    {
      title: 'next event',
      name: 'AUTO.RIA Race',
      date: '12.12.2021',
      place: 'Kharkiv. Maidan constitution',
      img: 'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png',
      discipline: 'Digital motorsport',
      status: 'National Seria',
      series: 'National Digital Time Attack Series (NS-CTA) 2021',
    },
  ]

  return (
    <div>
      <Slider
        ref={sRef}
        dots={true}
        style={{ maxWidth: '86vw', width: '100%', overflow: 'hidden' }}
        {...settings}
      >
        {next_event.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(classes.filterGreyScale, classesScrollable.event, classes.flexCenter)}
            >
              <div>
                <div id="img">
                  <img src={item.img} alt="event img" />
                  <div className={classesScrollable.eventContent}>
                    <p id="event-title">{item.title.toUpperCase()}</p>
                    <p id="event-name">{item.name}</p>
                    <p id="event-date">
                      {item.date} <span id="event-place">{item.place}</span>
                    </p>
                    <div id="event-info">
                      <p id="event-discipline">Discipline: {item.discipline}</p>
                      <p id="event-status">Status: {item.status}</p>
                      <p id="event-series">Series: {item.series}</p>
                    </div>
                    <Divider variant="middle" />
                    <div id="event-footer">
                      <a href="#">View details</a>
                      <Button id="event-button" variant="contained" href="">
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default ScrollableItems
