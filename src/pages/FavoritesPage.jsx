import { Link } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';
import products from '../data/products';
import styles from './FavoritesPage.module.css';

function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const favoriteProducts = products.filter((product) => favorites.includes(product.id));

  if (favoriteProducts.length === 0) {
    return (
      <div className={`container ${styles.page}`}>
        <h1>Избранное пусто</h1>
        <p>Сохраните понравившиеся модели из каталога и возвращайтесь к ним позже.</p>
        <Link to="/catalog" className={styles.button}>В каталог</Link>
      </div>
    );
  }

  return (
    <div className={`container ${styles.page}`}>
      <h1>Избранное</h1>
      <div className={styles.grid}>
        {favoriteProducts.map((product) => (
          <article key={product.id} className={styles.card}>
            <Link to={`/product/${product.id}`}>
              <img src={product.images[0]} alt={product.name} />
            </Link>
            <div className={styles.content}>
              <h2>{product.name}</h2>
              <p>{product.gender} · {product.category}</p>
              <p>{product.price.toLocaleString('ru-RU')} ₽</p>
              <button onClick={() => toggleFavorite(product.id)}>Удалить</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
