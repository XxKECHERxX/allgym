import styles from './Action.module.css'
import Action from '../photos/Action.png'
import Yoga from '../photos/Yoga.png'
import Sauna from '../photos/Sauna.png'
import Pool from '../photos/Pool.png'
import LineRedVert from '../../UI/RedLines/LineRedVert'
import { useState, useEffect } from 'react'

const transDuration = 2000

const Actions = () => {
  // const [scrollTop, setScrollTop] = useState(0)

  // const positionX = scrollTop <= 500 ? 500 - scrollTop : 0

  // const handleScroll = (event) => {
  //   setScrollTop(window.scrollY)
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  const [positionXver2, setPositionXver2] = useState(500)

  useEffect(() => {
    setTimeout(() => setPositionXver2(0), 500)
  }, [])

  return (
    <>
      <section className={styles.frameActionBigVer}>
        <div className={styles.frameAction}>
          <div
            className={styles.textAction}
            style={{
              transitionDuration: `${transDuration}ms`,
              transform: `translateX(${-positionXver2}px)`,
            }}
          >
            Готовьтесь к новому уровню подготовки! Наша кроссфит-зона была
            создана с целью помочь вам достичь максимальных результатов в
            тренировках.
          </div>
          <LineRedVert />
          <div
            className={styles.imgOfAction}
            style={{
              transitionDuration: `${transDuration}ms`,
              transform: `translateX(${positionXver2}px)`,
            }}
          >
            <img src={Action} alt="Action" />
          </div>
        </div>

        <div className={styles.frameAction}>
          <div
            className={styles.imgOfAction}
            style={{
              transitionDuration: `${transDuration * 1.25}ms`,
              transform: `translateX(${-positionXver2}px)`,
            }}
          >
            <img src={Yoga} alt="Yoga" />
          </div>
          <LineRedVert />
          <div
            className={styles.textAction}
            style={{
              transitionDuration: `${transDuration * 1.5}ms`,
              transform: `translateX(${positionXver2}px)`,
            }}
          >
            Программа йоги включает в себя разнообразные упражнения, начиная от
            повышения гибкости до улучшения дыхательной системы.
          </div>
        </div>

        <div className={styles.frameAction}>
          <div
            className={styles.textAction}
            style={{
              transitionDuration: `${transDuration * 1.75}ms`,
              transform: `translateX(${-positionXver2}px)`,
            }}
          >
            Найдите время, чтобы восстановиться с помощью наших оздоровительных
            спа-услуг.
          </div>
          <LineRedVert />
          <div
            className={styles.imgOfAction}
            style={{
              transitionDuration: `${transDuration * 2}ms`,
              transform: `translateX(${positionXver2}px)`,
            }}
          >
            <img src={Sauna} alt="Sauna" />
          </div>
        </div>

        <div className={styles.frameAction}>
          <div
            className={styles.imgOfAction}
            style={{
              transitionDuration: `${transDuration * 2}ms`,
              transform: `translateX(${-positionXver2}px)`,
            }}
          >
            <img src={Pool} alt="Pool" />
          </div>
          <LineRedVert />
          <div
            className={styles.textAction}
            style={{
              transitionDuration: `${transDuration * 2}ms`,
              transform: `translateX(${positionXver2}px)`,
            }}
          >
            Мы предлагаем профессиональные уроки, индивидуальные занятия, а
            также время для свободного плавания.
          </div>
        </div>
      </section>

      {/*Мобильная версия*/}
      <div className={styles.frameActionMobile}>
        <div
          className={styles.imgOfActionMobile}
          style={{
            transitionDuration: `${transDuration}ms`,
            transform: `translateX(${positionXver2}px)`,
          }}
        >
          <img src={Action} alt="Action" />
        </div>
        <div
          className={styles.textActionMobile}
          style={{
            transitionDuration: `${transDuration}ms`,
            transform: `translateX(${-positionXver2}px)`,
          }}
        >
          Готовьтесь к новому уровню подготовки! Наша кроссфит-зона была создана
          с целью помочь вам достичь максимальных результатов в тренировках.
        </div>
      </div>

      <div className={styles.frameActionMobile}>
        <div
          className={styles.imgOfActionMobile}
          style={{
            transitionDuration: `${transDuration}ms`,
            transform: `translateX(${positionXver2}px)`,
          }}
        >
          <img src={Yoga} alt="Yoga" />
        </div>
        <div
          className={styles.textActionMobile}
          style={{
            transitionDuration: `${transDuration}ms`,
            transform: `translateX(${-positionXver2}px)`,
          }}
        >
          Программа йоги включает в себя разнообразные упражнения, начиная от
          повышения гибкости до улучшения дыхательной системы.
        </div>
      </div>

      <div className={styles.frameActionMobile}>
        <div
          className={styles.imgOfActionMobile}
          style={{
            transitionDuration: `${transDuration}ms`,
            transform: `translateX(${positionXver2}px)`,
          }}
        >
          <img src={Sauna} alt="Sauna" />
        </div>
        <div
          className={styles.textActionMobile}
          style={{
            transitionDuration: `${transDuration}ms`,
            transform: `translateX(${-positionXver2}px)`,
          }}
        >
          Найдите время, чтобы восстановиться с помощью наших оздоровительных
          спа-услуг.
        </div>
      </div>

      <div className={styles.frameActionMobile}>
        <div
          className={styles.imgOfActionMobile}
          style={{
            transitionDuration: `${transDuration}ms`,
            transform: `translateX(${positionXver2}px)`,
          }}
        >
          <img src={Pool} alt="Pool" />
        </div>
        <div
          className={styles.textActionMobile}
          style={{
            transitionDuration: `${transDuration}ms`,
            transform: `translateX(${-positionXver2}px)`,
          }}
        >
          Мы предлагаем профессиональные уроки, индивидуальные занятия, а также
          время для свободного плавания.
        </div>
      </div>
    </>
  )
}

export default Actions
