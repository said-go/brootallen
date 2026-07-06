import { useState } from 'react';
import styles from './ContactsPage.module.css';

function ContactsPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className={`container ${styles.page}`}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Контакты</p>
        <h1>Свяжитесь с нашим стилистом.</h1>
        <p>Личный шопинг, консультации и подбор образов. Мы всегда на связи.</p>
      </section>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Контакты</h2>
          <p>hello@brootallen.com</p>
          <p>+7 (900) 123-45-67</p>
          <p>Москва, улица Гоголя, 14</p>
        </div>
        <form className={styles.card} onSubmit={handleSubmit}>
          <h2>Напишите нам</h2>
          <label className={styles.field}>
            <span>Имя</span>
            <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
          </label>
          <label className={styles.field}>
            <span>Email или телефон</span>
            <input required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
          </label>
          <label className={styles.field}>
            <span>Сообщение</span>
            <textarea required rows="5" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
          </label>
          <button className={styles.button} type="submit">Отправить</button>
          {submitted ? <p className={styles.success}>Сообщение успешно отправлено.</p> : null}
        </form>
      </div>
    </div>
  );
}

export default ContactsPage;
