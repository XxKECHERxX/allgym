import styles from './NavBar.module.css'
import { MenuIcon } from '../../../UI/Icons/MenuIcon'
import { useState } from 'react'

const NavBar = ({ setTestDrive }) => {
  const handlerScrollToAction = () => {
    window.scrollTo(0, 692)
  }

  const handlerScrollToAdress = () => {
    window.scrollTo(0, 2455)
  }

  const handlerScrollToActionMiniMenu = () => {
    if (window.innerWidth <= '900' && window.innerWidth >= '761') {
      window.scrollTo(0, 725)
    }
    if (window.innerWidth <= '760' && window.innerWidth >= '591') {
      window.scrollTo(0, 700)
    }
    if (window.innerWidth <= '590' && window.innerWidth >= '477') {
      window.scrollTo(0, 590)
    }
    if (window.innerWidth <= '476' && window.innerWidth >= '383') {
      window.scrollTo(0, 510)
    }
    if (window.innerWidth <= '382') {
      window.scrollTo(0, 475)
    }
  }

  const handlerScrollToAdressMiniMenu = () => {
    if (window.innerWidth <= '900' && window.innerWidth >= '761') {
      window.scrollTo(0, 2215)
    }
    if (window.innerWidth <= '760' && window.innerWidth >= '670') {
      window.scrollTo(0, 1910)
    }
    if (window.innerWidth <= '669' && window.innerWidth >= '591') {
      window.scrollTo(0, 1950)
    }
    if (window.innerWidth <= '590' && window.innerWidth >= '477') {
      window.scrollTo(0, 1950)
    }
    if (window.innerWidth <= '476' && window.innerWidth >= '383') {
      window.scrollTo(0, 2095)
    }
    if (window.innerWidth <= '382') {
      window.scrollTo(0, 2010)
    }
  }

  const handlerModuleWindow = () => {
    setTestDrive(true)
  }

  const [openMenu, setOpenMenu] = useState(false)

  const handlerMenuDown = () => {
    !!openMenu ? setOpenMenu(false) : setOpenMenu(true)
  }

  return (
    <>
      <nav className={styles.NavBar}>
        <div className={styles.logo}>
          All<span style={{ color: 'aliceblue' }}>GYM</span>
        </div>
        <div className={styles.menu}>
          <ul>
            <li onClick={handlerScrollToAction} style={{ cursor: 'pointer' }}>
              Услуги
            </li>
            <li onClick={handlerScrollToAdress} style={{ cursor: 'pointer' }}>
              Адрес и Контакты
            </li>
            <li
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={handlerModuleWindow}
            >
              Тест-Драйв
            </li>
            <li style={{ cursor: 'text' }}>+7 (999) 000-00-00</li>
          </ul>
        </div>
        <div className={styles.menuIcon} onClick={handlerMenuDown}>
          <MenuIcon />
        </div>
      </nav>
      {openMenu && (
        <div className={styles.menuPoints}>
          <div
            onClick={handlerScrollToActionMiniMenu}
            style={{ cursor: 'pointer' }}
          >
            Услуги
          </div>
          <div
            onClick={handlerScrollToAdressMiniMenu}
            style={{ cursor: 'pointer' }}
          >
            Адрес и Контакты
          </div>
          <div onClick={handlerModuleWindow} style={{ cursor: 'pointer' }}>
            Тест-Драйв
          </div>
          <div
            style={{
              borderLeft: '1px solid #7e0000',
              borderRight: '1px solid #7e0000',
              borderBottom: '1px solid #7e0000',
              width: 'calc(100% - 1px)',
              background: '#0c0909',
            }}
          >
            +7 (999) 000-00-00
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar
