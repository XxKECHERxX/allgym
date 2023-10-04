import styles from './Features.module.css'
import Second from '../photos/Second.png'
import FeartMan from '../photos/FeartMan.png'
import CrossFit from '../photos/CrossFit.png'
import Group from '../photos/Group.png'
import LineRedHorr from '../../UI/RedLines/LineRedHorr'
import { useEffect, useState } from 'react'

const transDuration = 1500

const Features = () => {
  const [scrollTop, setScrollTop] = useState(0)

  const positionY = scrollTop <= 400 ? 400 - scrollTop : 0

  const handleScroll = (event) => {
    setScrollTop(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <LineRedHorr />
      <div className={styles.featuresContainer}>
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
      </div>

      {/* Мобильная версия */}
      <div className={styles.featuresContainerMobile}>
        <div className={styles.frameFeatures}>
          <img src={Second} alt="Second"></img>
          <div className={styles.frameText}>Доступ 24 часа во все залы.</div>
        </div>
        <div className={styles.frameFeatures}>
          <img src={FeartMan} alt="FeartMan"></img>
          <div className={styles.frameText}>
            Большой штат тренеров и специалистов
          </div>
        </div>
        <div className={styles.frameFeatures}>
          <img src={CrossFit} alt="CrossFit"></img>
          <div className={styles.frameText}>
            Функциональные залы под любые нужды
          </div>
        </div>
        <div className={styles.frameFeatures}>
          <img src={Group} alt="Group" />
          <div className={styles.frameText}>
            Групповые занятия и кроссфит зоны
          </div>
        </div>
      </div>
      <LineRedHorr />
    </>
  )
}

export default Features
