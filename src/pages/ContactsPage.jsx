import styles from './ContactsPage.module.css';

const whatsappUrl = 'https://wa.me/79387778181';
const instagramUrl = 'https://www.instagram.com/br_noxchi?igsh=MTNnOTY0cHViNTB0dQ==';

function ContactsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Контакты</p>
        <h1>Связаться с Brootallen</h1>
        <p>Пишите в WhatsApp или Instagram. Отвечаем по наличию, размерам и примерке.</p>
      </section>

      <div className={styles.grid}>
        <section className={styles.card}>
          <h2>Мессенджеры</h2>
          <div className={styles.actions}>
            <a className={styles.whatsapp} href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className={styles.instagram} href={instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </section>

        <section className={styles.card}>
          <h2>Адрес бутика</h2>
          <p className={styles.address}>Грозный, ул. Эсет Кишиевой 28а, Садовое кольцо</p>
          <a
            className={styles.mapLink}
            href="https://yandex.ru/maps/?text=Грозный,%20ул.%20Эсет%20Кишиевой%2028а"
            target="_blank"
            rel="noreferrer"
          >
            Открыть на карте
          </a>
        </section>
      </div>
    </div>
  );
}

export default ContactsPage;
