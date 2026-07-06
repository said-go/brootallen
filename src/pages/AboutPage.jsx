import styles from './AboutPage.module.css';

function AboutPage() {
  return (
    <div className={`container ${styles.page}`}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>О магазине</p>
        <h1>Премиальный бутик, который держит баланс между роскошью и спокойствием.</h1>
        <p>
          Brootallen создан для тех, кто ценит сдержанную элегантность, высокое качество и детали,
          которые делают образ цельным.
        </p>
      </section>
      <section className={styles.grid}>
        <div className={styles.card}>
          <h2>Наш взгляд</h2>
          <p>Мы выбираем вещи, которые работают на уровне ткани, посадки и честного дизайна.</p>
        </div>
        <div className={styles.card}>
          <h2>Наш подход</h2>
          <p>Сезонные подборки, редкие бренды и внимательный сервис без лишнего шума.</p>
        </div>
        <div className={styles.card}>
          <h2>Наши ценности</h2>
          <p>Качество, честность и искусство делать гардероб более глубоким и выразительным.</p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
