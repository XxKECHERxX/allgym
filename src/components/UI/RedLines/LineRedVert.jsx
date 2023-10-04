import styles from './LineRedVert.module.css'

const LineRedVert = () => {
  return (
    <div className={styles.lineRedVert}>
      <svg>
        <line x1="0" y1="0" x2="0" y2="200" strokeWidth="2" stroke="#7e0000" />
      </svg>
    </div>
  )
}

export default LineRedVert
