import styles from './Features.module.css'
import Second from '../photos/Second.jpg'
import FeartMan from '../photos/FeartMan.jpg'
import CrossFit from '../photos/CrossFit.jpg'
import Group from '../photos/Group.jpg'
import LineRedHorr from '../../UI/RedLines/LineRedHorr'
import { useEffect, useState } from 'react'

const transDuration = 1500

const Features = () => {
  const [scrollTop, setScrollTop] = useState(0)

  let positionY = scrollTop <= 400 ? 400 - scrollTop : 0

  const handleScroll = (event) => {
    setScrollTop(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [positionYver2, setPositionYver2] = useState(1000)

  useEffect(() => {
    setTimeout(() => setPositionYver2(0), 500)
  }, [])

  if (window.innerHeight >= '780') {
    positionY = positionYver2
  }

  return (
    <div id='services'>
      <LineRedHorr />
      <section className={styles.featuresContainer}>
        <div
          className={styles.frameFeatures}
          style={{
            transitionDuration: `${transDuration / 1.75}ms`,
            transform: `translateY(${positionY}px)`,
          }}
        >
          <img src={Second} alt="Second"></img>
          <div className={styles.frameText}>Доступ 24 часа во все залы.</div>
        </div>
        <div
          className={styles.frameFeatures}
          style={{
            transitionDuration: `${transDuration / 1.5}ms`,
            transform: `translateY(${positionY}px)`,
          }}
        >
          <img src={FeartMan} alt="FeartMan"></img>
          <div className={styles.frameText}>
            Большой штат тренеров и специалистов
          </div>
        </div>
        <div
          className={styles.frameFeatures}
          style={{
            transitionDuration: `${transDuration / 1.25}ms`,
            transform: `translateY(${positionY}px)`,
          }}
        >
          <img src={CrossFit} alt="CrossFit"></img>
          <div className={styles.frameText}>
            Функциональные залы под любые нужды
          </div>
        </div>
        <div
          className={styles.frameFeatures}
          style={{
            transitionDuration: `${transDuration}ms`,
            transform: `translateY(${positionY}px)`,
          }}
        >
          <img src={Group} alt="Group" />
          <div className={styles.frameText}>
            Групповые занятия и кроссфит зоны
          </div>
        </div>
      </section>

      {/* Планшетная и Мобильная версия */}
      <section className={styles.featuresContainerMobile}>
        <div
          className={styles.frameFeatures}
          style={{
            transitionDuration: `${transDuration / 1.75}ms`,
            transform: `translateY(${positionYver2}px)`,
          }}
        >
          <img src={Second} alt="Second"></img>
          <div className={styles.frameText}>Доступ 24 часа во все залы.</div>
        </div>
        <div
          className={styles.frameFeatures}
          style={{
            transitionDuration: `${transDuration / 1.5}ms`,
            transform: `translateY(${positionYver2}px)`,
          }}
        >
          <img src={FeartMan} alt="FeartMan"></img>
          <div className={styles.frameText}>
            Большой штат тренеров и специалистов
          </div>
        </div>
        <div
          className={styles.frameFeatures}
          style={{
            transitionDuration: `${transDuration / 1.25}ms`,
            transform: `translateY(${positionYver2}px)`,
          }}
        >
          <img src={CrossFit} alt="CrossFit"></img>
          <div className={styles.frameText}>
            Функциональные залы под любые нужды
          </div>
        </div>
        <div
          className={styles.frameFeatures}
          style={{
            transitionDuration: `${transDuration}ms`,
            transform: `translateY(${positionYver2}px)`,
          }}
        >
          <img src={Group} alt="Group" />
          <div className={styles.frameText}>
            Групповые занятия и кроссфит зоны
          </div>
        </div>
      </section>
      <LineRedHorr />
    </div>
  )
}

export default Features
