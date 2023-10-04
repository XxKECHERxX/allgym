import styles from './ScrollTop.module.css'
import { useState } from 'react'

const ScrollTop = () => {
  const [listenerScroll, setListenerScroll] = useState('')

  const handlerScroll = () => {
    setListenerScroll(window.scrollY)
  }

  window.addEventListener('scroll', handlerScroll)

  const handlerScrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {!!listenerScroll && (
        <div className={styles.btnUp} onClick={handlerScrollTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <circle cx="25" cy="25" r="24" stroke="#7E0000" />
          </svg>
          <svg
            className={styles.arrowBtn}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.0607 0.939341C12.4749 0.353554 11.5251 0.353554 10.9393 0.939341L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939341ZM13.5 27L13.5 2L10.5 2L10.5 27L13.5 27Z"
              fill="#7E0000"
            />
          </svg>
        </div>
      )}
    </>
  )
}

export default ScrollTop
