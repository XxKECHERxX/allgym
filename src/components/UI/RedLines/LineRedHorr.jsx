import styles from './LineRedHorr.module.css'

const LineRedHorr = () => {
  return (
    <div className={styles.lineRedHorr}>
      <svg>
        <line x1="0" y1="0" x2="1000" y2="0" strokeWidth="2" stroke="#7e0000" />
      </svg>
    </div>
  )
}

export default LineRedHorr
