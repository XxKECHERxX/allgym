import styles from './AdressMap.module.css'
import LineRedHorr from '../../../UI/RedLines/LineRedHorr'

const AdressMap = () => {
  return (
    <div className={styles.adressMap}>
      <LineRedHorr />
      <div className={styles.frameAdressMap}>
        <div className={styles.adressContacts}>
          <p>Адрес:</p>
          <p>город Москва ул. Большая Очаковоская дом 42. стр. 1</p>
          <p>+7 (999) 000-00-00</p>
        </div>
        <div className={styles.mapFrame}>
          <iframe
            title="GoogleMap"
            style={{
              width: '700px',
              height: '350px',
              border: '0px',
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.6884815743083!2d37.44364577648377!3d55.67701709782633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54dc10c1c9893%3A0x341c3d9d37e12163!2z0JHQvtC70YzRiNCw0Y8g0J7Rh9Cw0LrQvtCy0YHQutCw0Y8g0YPQuy4sIDQyINGB0YLRgNC-0LXQvdC40LUgMSwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDExOTM2MQ!5e0!3m2!1sru!2srs!4v1693922909754!5m2!1sru!2srs"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default AdressMap
