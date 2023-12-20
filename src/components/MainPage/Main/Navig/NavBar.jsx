import styles from './NavBar.module.css'
import { MenuIcon } from '../../../UI/Icons/MenuIcon'
import { useState } from 'react'

const NavBar = ({ setTestDrive }) => {
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
            <li>
              <a href="#services">Услуги</a>
            </li>
            <li>
              <a href="#contacts">Адрес и Контакты</a>
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
          <div>
            <a href="#services">Услуги</a>
          </div>
          <div>
            <a href="#contacts">Адрес и Контакты</a>
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
