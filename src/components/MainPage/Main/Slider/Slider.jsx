import styles from './Slider.module.css'
import photosGymList from './photosGymList'
import { useEffect, useState } from 'react'

let IMG_WIDTH
if (window.innerWidth >= '744') {
  IMG_WIDTH = 860
}
if (window.innerWidth <= '744' && window.innerWidth >= '576') {
  IMG_WIDTH = 554
}
if (window.innerWidth <= '576' && window.innerWidth >= '376') {
  IMG_WIDTH = 422
}
if (window.innerWidth <= '376') {
  IMG_WIDTH = 284
}

const TRANSITION_DURATION = 350

const listExtend = [
  photosGymList[photosGymList.length - 1],
  ...photosGymList,
  photosGymList[0],
]

const Slider = () => {
  const [position, setNewPosition] = useState(-IMG_WIDTH)
  const [transDuration, setTransDuration] = useState(TRANSITION_DURATION)

  const arrowLeftHandle = () => {
    setNewPosition((curr) => {
      const currNew = curr + IMG_WIDTH
      return Math.min(currNew, 0)
    })
  }

  const arrowRightHandle = () => {
    setNewPosition((curr) => {
      const maxCurr = -(IMG_WIDTH * (listExtend.length - 1))
      const currNew = curr - IMG_WIDTH
      return Math.max(currNew, maxCurr)
    })
  }

  useEffect(() => {
    if (position === 0) {
      setTimeout(() => {
        setTransDuration(0)
        setNewPosition(-(IMG_WIDTH * (listExtend.length - 2)))
      }, TRANSITION_DURATION)
      return
    }
    if (position === -(IMG_WIDTH * (listExtend.length - 1))) {
      setTimeout(() => {
        setTransDuration(0)
        setNewPosition(-IMG_WIDTH)
      }, TRANSITION_DURATION)
      return
    }

    if (transDuration === 0) {
      setTimeout(() => {
        setTransDuration(TRANSITION_DURATION)
      }, TRANSITION_DURATION)
    }
  }, [position, transDuration])

  return (
    <div className={styles.slider}>
      <div className={styles.buttonLeft} onClick={arrowLeftHandle}>
        {'<'}
      </div>
      <div
        className={styles.sliderImg}
        style={{
          transitionDuration: `${transDuration}ms`,
          transform: `translateX(${position}px)`,
        }}
      >
        {listExtend.map((img, index) => {
          return (
            <div key={index}>
              <img src={img} alt={'photo of GYM ' + index} />
            </div>
          )
        })}
      </div>
      <div className={styles.buttonRight} onClick={arrowRightHandle}>
        {'>'}
      </div>
    </div>
  )
}

export default Slider
