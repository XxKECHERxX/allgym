import { useState } from 'react'
import styles from './EmailForm.module.css'

const EmailForm = () => {
  const [clientEmail, setClientEmail] = useState('')

  const handlerClientEmail = () => {
    setClientEmail('Email Send')
  }

  return (
    <div className={styles.emailForm}>
      <div className={styles.leftDarkSide} />
      {clientEmail !== '' ? (
        <p className={styles.submitClientEmail}>Приглашение уже на почте!</p>
      ) : (
        <form className={styles.formInput}>
          Оставайся на связи:
          <label>
            <input className={styles.emailInput} placeholder="email" />
          </label>
          <button
            type="reset"
            className={styles.btnSubmit}
            onClick={handlerClientEmail}
          >
            Отправить
          </button>
        </form>
      )}
      <div className={styles.rightDarkSide} />
    </div>
  )
}

export default EmailForm
