import { useState } from 'react'
import styles from './EmailForm.module.css'

const EmailForm = () => {
  const [sendInviteEmail, setSendInviteEmail] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const handlerSendInviteEmail = () => {
    setSendInviteEmail('Email Send')
  }

  return (
    <div className={styles.emailForm}>
      <div className={styles.leftDarkSide} />
      {sendInviteEmail ? (
        <p className={styles.submitClientEmail}>
          Приглашение уже на почте: {userEmail}!
        </p>
      ) : (
        <form className={styles.formInput}>
          Оставайся на связи:
          <label>
            <input
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className={styles.emailInput}
              placeholder="email"
            />
          </label>
          <button
            type="submit"
            className={styles.btnSubmit}
            onClick={handlerSendInviteEmail}
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
