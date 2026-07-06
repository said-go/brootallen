import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';
import products from '../data/products';
import styles from './ProductPage.module.css';

const whatsappUrl = 'https://wa.me/79387778181';

function ProductPage() {
  const { id } = useParams();
  const { favorites, toggleFavorite } = useFavorites();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [activeImage, setActiveImage] = useState(0);

  const product = useMemo(() => products.find((item) => item.id === Number(id)), [id]);
  const similarProducts = useMemo(
    () => products.filter((item) => item.category === product?.category && item.id !== product?.id).slice(0, 3),
    [product]
  );

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 0' }}>
        <h1>Товар не найден</h1>
        <Link to="/catalog" className={styles.primaryButton}>Вернуться в каталог</Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(product.id);
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.grid}>
        <div className={styles.gallery}>
          <img src={product.images[activeImage]} alt={product.name} className={styles.mainImage} />
          <div className={styles.thumbRow}>
            {product.images.map((image, index) => (
              <button key={image} className={`${styles.thumb} ${activeImage === index ? styles.activeThumb : ''}`} onClick={() => setActiveImage(index)} aria-label={`Показать фото ${index + 1}`}>
                <img src={image} alt={`${product.name}, фото ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.details}>
          <p className={styles.eyebrow}>{product.gender} · {product.category}</p>
          <h1>{product.name}</h1>
          <div className={styles.priceRow}>
            <div>
              <span className={styles.price}>{product.price.toLocaleString('ru-RU')} ₽</span>
            </div>
            {product.isNew ? <span className={styles.badge}>Новинка</span> : null}
          </div>
          <p className={styles.description}>{product.description}</p>

          <div className={styles.optionBlock}>
            <h2>Цвет</h2>
            <div className={styles.optionGroup}>
              {product.colors.map((color) => (
                <button key={color} className={`${styles.optionButton} ${selectedColor === color ? styles.optionActive : ''}`} onClick={() => setSelectedColor(color)}>
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.optionBlock}>
            <h2>Размер</h2>
            <div className={styles.optionGroup}>
              {product.sizes.map((size) => (
                <button key={size} className={`${styles.optionButton} ${selectedSize === size ? styles.optionActive : ''}`} onClick={() => setSelectedSize(size)}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            <a className={styles.primaryButton} href={whatsappUrl} target="_blank" rel="noreferrer">
              {product.inStock ? 'Написать в WhatsApp' : 'Уточнить поступление'}
            </a>
            <button className={styles.secondaryButton} onClick={() => toggleFavorite(product.id)}>
              {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
            </button>
          </div>
          {selectedColor && selectedSize ? <p className={styles.description}>Выбран вариант: {selectedColor}, размер {selectedSize}.</p> : null}

          <div className={styles.metaBox}>
            <p><strong>Состав:</strong> {product.material}</p>
            <p><strong>Доставка:</strong> Бесплатно по Москве и Санкт-Петербургу, доставка по России от 2 дней.</p>
            <p><strong>Возврат:</strong> 14 дней на обмен и возврат при сохранности товара.</p>
          </div>
        </div>
      </div>

      <section className={styles.similarSection}>
        <div className={styles.sectionHeader}>
          <h2>Похожие товары</h2>
          <Link to="/catalog" className={styles.textLink}>В каталог</Link>
        </div>
        <div className={styles.similarGrid}>
          {similarProducts.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className={styles.similarCard}>
              <img src={item.images[0]} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.price.toLocaleString('ru-RU')} ₽</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
