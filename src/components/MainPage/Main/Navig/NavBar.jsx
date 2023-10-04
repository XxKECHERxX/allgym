import styles from './NavBar.module.css'
import { MenuIcon } from '../../../UI/Icons/MenuIcon'
import { useState } from 'react'

const NavBar = ({ setTestDrive }) => {
  const handlerScrollToAction = () => {
    window.scrollTo(0, 100 + 550)
  }

  const handlerScrollToAdress = () => {
    window.scrollTo(0, 100 + 550 + 400 + 1625)
  }

  const handlerScrollToActionMiniMenu = () => {
    window.scrollTo(0, 100 + 225 + 550)
  }

  const handlerScrollToAdressMiniMenu = () => {
    window.scrollTo(0, 100 + 225 + 550 + 400 + 1625)
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
