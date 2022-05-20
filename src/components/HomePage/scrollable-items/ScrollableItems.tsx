import { memo, useRef } from 'react'
import { Divider, Button } from '@mui/material'
import useStyles from '../../../theme/useStyle'
import useScrollableStyles from './useScrollableStyles'
import clsx from 'clsx'
import moment from 'moment'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { EventData } from '../../../types/globalTypes'

interface Props {
  eventData: EventData
  resent: boolean
}

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
const img =
  'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png'

const ScrollableItems: React.FC<Props> = ({ eventData, resent }) => {
  const classes = useStyles()
  const classesScrollable = useScrollableStyles()
  const sRef = useRef<typeof Slider>(null)

  return (
    <div>
      <Slider
        ref={sRef}
        dots={true}
        style={{ maxWidth: '86vw', width: '100%', overflow: 'hidden' }}
        {...settings}
      >
        {eventData.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(classes.filterGreyScale, classesScrollable.event, classes.flexCenter)}
            >
              <div>
                <div id="img">
                  <img src={img} alt="event img" />
                  <div className={classesScrollable.eventContent}>
                    <p id="event-title">
                      {resent ? 'resent event'.toUpperCase() : 'next event'.toUpperCase()}
                    </p>
                    <p id="event-name">{item.title}</p>
                    <p id="event-date">
                      {moment(item.date).format('DD.MM.YYYY')}{' '}
                      <span id="event-place">{item.place}</span>
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

export default memo(ScrollableItems)
