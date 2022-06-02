import { memo, useRef } from 'react'
import useScrollableStyles from './useScrollableStyles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { EventData } from '../../../types/globalTypes'
import EventCard from '../../EventCard/EventCard'

interface Props {
  eventData: EventData
  isResentEvent: boolean
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

const ScrollableItems: React.FC<Props> = ({ eventData, isResentEvent }) => {
  const classesScrollable = useScrollableStyles()

  const sRef = useRef<typeof Slider>(null)

  return (
    <div>
      <Slider ref={sRef} dots={true} className={classesScrollable.sliderContainer} {...settings}>
        {eventData.map((item, index) => {
          return (
            <div key={index} className={classesScrollable.scrollContainer}>
              <EventCard eventItem={item} idType="scrollable" isResentEvent={isResentEvent} />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default memo(ScrollableItems)
