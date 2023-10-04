import styles from './FormReg.module.css'
import BtnCloseForm from '../UI/FuncBtn/CloseFormReg'

const FormReg = ({ clickBtnClose }) => {
  const handleBtnClose = () => {
    clickBtnClose(false)
  }

  return (
    <div className={styles.screenHide}>
      <div className={styles.frameFormReg}>
        <div className={styles.closeBtn} onClick={handleBtnClose}>
          <BtnCloseForm />
        </div>
        <div className={styles.formReg}>
          <form className={styles.textFormReg}>
            <h3>Хотите на пробное занятие?</h3>
            <h4 style={{ color: 'white' }}>Заполните форму</h4>
            <label>
              <input className={styles.formRegInput} placeholder="Имя" />
            </label>
            <label>
              <input className={styles.formRegInput} placeholder="Фамилия" />
            </label>
            <label>
              <input
                className={styles.formRegInput}
                placeholder="Номер телефона"
              />
            </label>
            <label>
              <input
                className={styles.formRegInput}
                placeholder="Какое занятие или направление вас интересует?"
                style={{
                  height: '100px',
                }}
              />
            </label>
            <button className={styles.btnSubmit}>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormReg
