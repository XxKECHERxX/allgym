import styles from './Page.module.css'
import { useState } from 'react'
import NavBar from './Main/Navig/NavBar'
import Slider from './Main/Slider/Slider'
import Features from './Features/Features'
import Action from './Actions/Action'
import AdressMap from './ContactsAdress/AdressMap/AdressMap'
import EmailForm from './ContactsAdress/EmailForm/EmailForm'
import Footer from '../MainPage/Footer/Footer'
import FormReg from '../FormReg/FormReg'

const MainPage = () => {
  const [openMdleWindow, setOpenMdleWindow] = useState(false)

  const handlerTestDrive = (data) => {
    setOpenMdleWindow(data)
  }

  const handlerBtnClose = (data) => {
    setOpenMdleWindow(data)
  }

  return (
    <>
      {openMdleWindow && <FormReg clickBtnClose={handlerBtnClose} />}
      <div className={styles.pageNormal}>
        <NavBar setTestDrive={handlerTestDrive} />
        <Slider />
        <Features />
        <Action />
        <AdressMap />
        <EmailForm />
        <Footer />
      </div>
    </>
  )
}

export default MainPage
