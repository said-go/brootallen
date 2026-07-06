import { Link } from 'react-router-dom';
import products from '../data/products';
import styles from './HomePage.module.css';

const categories = ['Мужское', 'Женское', 'Верхняя одежда', 'Аксессуары'];
const highlights = [
  'Эксклюзивные подборки',
  'Бесплатная доставка от 5000 ₽',
  'Персональные консультации стилиста'
];

function HomePage() {
  const featured = products.filter((item) => item.isPopular).slice(0, 4);
  const news = products.filter((item) => item.isNew).slice(0, 4);

  return (
    <div>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Премиальный бутик</p>
            <h1>Тонкость формы, свобода стиля.</h1>
            <p className={styles.heroText}>
              Brootallen объединяет редкие ткани, точную посадку и современные силуэты для тех,
              кто выбирает глубину в деталях.
            </p>
            <div className={styles.heroActions}>
              <Link to="/catalog" className={styles.primaryButton}>Открыть каталог</Link>
              <Link to="/about" className={styles.secondaryButton}>О магазине</Link>
            </div>
          </div>
          <div className={styles.heroImageWrap}>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=80"
              alt="Премиальная витрина одежды"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Категории</h2>
          <p className="section-copy">Подборки для каждой стороны вашего гардероба.</p>
          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <Link to="/catalog" key={category} className={styles.categoryCard}>
                <span>{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className="section-title">Новинки</h2>
              <p className="section-copy">Новые поступления с акцентом на текстуры и чистые линии.</p>
            </div>
            <Link to="/catalog" className={styles.textLink}>Смотреть все</Link>
          </div>
          <div className={styles.productGrid}>
            {news.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className={styles.productCard}>
                <img src={product.images[0]} alt={product.name} />
                <div className={styles.productInfo}>
                  <p className={styles.categoryName}>{product.category}</p>
                  <h3>{product.name}</h3>
                  <div className={styles.productMeta}>
                    <span>{product.price.toLocaleString('ru-RU')} ₽</span>
                    {product.isNew ? <span className={styles.badge}>Новинка</span> : null}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className="section-title">Популярное</h2>
              <p className="section-copy">Избранные вещи, которыми чаще всего завершают образ.</p>
            </div>
            <Link to="/catalog" className={styles.textLink}>Смотреть все</Link>
          </div>
          <div className={styles.productGrid}>
            {featured.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className={styles.productCard}>
                <img src={product.images[0]} alt={product.name} />
                <div className={styles.productInfo}>
                  <p className={styles.categoryName}>{product.category}</p>
                  <h3>{product.name}</h3>
                  <div className={styles.productMeta}>
                    <span>{product.price.toLocaleString('ru-RU')} ₽</span>
                    {product.isPopular ? <span className={styles.badge}>Популярное</span> : null}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutPanel}>
            <div>
              <p className={styles.eyebrow}>О Brootallen</p>
              <h2 className="section-title">Место, где детали говорят громче моды.</h2>
              <p className="section-copy">
                Мы собираем одежду и аксессуары с особым вниманием к ткани, посадке и характеру
                для тех, кто ценит сдержанную роскошь.
              </p>
            </div>
            <div className={styles.highlights}>
              {highlights.map((highlight) => (
                <div key={highlight} className={styles.highlightItem}>{highlight}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Почему выбирают нас</h2>
          <div className={styles.benefitGrid}>
            <div className={styles.benefitCard}>
              <strong>Индивидуальный подбор</strong>
              <p>Стилист помогает собрать образ под ваш ритм, стиль и поводы.</p>
            </div>
            <div className={styles.benefitCard}>
              <strong>Надежная доставка</strong>
              <p>Премиальная упаковка и аккуратная доставка по всей России.</p>
            </div>
            <div className={styles.benefitCard}>
              <strong>Ограниченные серии</strong>
              <p>Каждая вещь подбирается так, чтобы выглядеть как долгосрочная инвестиция.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
