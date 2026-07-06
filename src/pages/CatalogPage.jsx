import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';
import products from '../data/products';
import styles from './CatalogPage.module.css';

const genders = ['Женское', 'Мужское', 'Унисекс'];
const categories = ['Аксессуары', 'Обувь', 'Костюм', 'Верхняя одежда', 'Нижняя одежда'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'One Size'];
const colors = ['Black', 'Ash', 'Stone', 'Midnight', 'Ivory', 'Cream', 'Cocoa', 'Brown', 'Graphite', 'Gold', 'Sand', 'Olive', 'Mink'];
const maxPrice = Math.max(...products.map((product) => product.price));

function CatalogPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const [query, setQuery] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState(maxPrice);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [showPopularOnly, setShowPopularOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesQuery = product.name.toLowerCase().includes(query.trim().toLowerCase());
      const matchesGender = !gender || product.gender === gender;
      const matchesCategory = !category || product.category === category;
      const matchesSize = !size || product.sizes.includes(size);
      const matchesColor = !color || product.colors.some((item) => item.toLowerCase() === color.toLowerCase());
      const matchesPrice = product.price <= price;
      const matchesStock = !inStockOnly || product.inStock;
      const matchesNew = !showNewOnly || product.isNew;
      const matchesPopular = !showPopularOnly || product.isPopular;

      return matchesQuery && matchesGender && matchesCategory && matchesSize && matchesColor && matchesPrice && matchesStock && matchesNew && matchesPopular;
    });

    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name, 'ru');
        case 'new':
          return Number(b.isNew) - Number(a.isNew);
        case 'popular':
          return Number(b.isPopular) - Number(a.isPopular);
        default:
          return 0;
      }
    });

    return result;
  }, [category, color, gender, inStockOnly, price, query, showNewOnly, showPopularOnly, size, sortBy]);

  const resetFilters = () => {
    setQuery('');
    setGender('');
    setCategory('');
    setSize('');
    setColor('');
    setPrice(maxPrice);
    setInStockOnly(false);
    setShowNewOnly(false);
    setShowPopularOnly(false);
    setSortBy('featured');
  };

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.heroRow}>
        <div>
          <p className={styles.eyebrow}>Каталог</p>
          <h1 className={styles.title}>Подборка для современного гардероба.</h1>
        </div>
        <button className={styles.mobileFilterButton} onClick={() => setMobileFiltersOpen(true)}>
          Фильтры
        </button>
      </div>

      <div className={styles.layout}>
        <aside className={`${styles.filters} ${mobileFiltersOpen ? styles.filtersOpen : ''}`}>
          <div className={styles.filtersHeader}>
            <h2>Фильтры</h2>
            <button className={styles.closeButton} onClick={() => setMobileFiltersOpen(false)} aria-label="Закрыть фильтры">
              ×
            </button>
          </div>

          <label className={styles.field}>
            <span>Поиск</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Название товара" />
          </label>

          <label className={styles.field}>
            <span>Для кого</span>
            <select value={gender} onChange={(event) => setGender(event.target.value)}>
              <option value="">Все</option>
              {genders.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span>Тип изделия</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="">Все</option>
              {categories.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span>Размер</span>
            <select value={size} onChange={(event) => setSize(event.target.value)}>
              <option value="">Все</option>
              {sizes.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span>Цвет</span>
            <select value={color} onChange={(event) => setColor(event.target.value)}>
              <option value="">Все</option>
              {colors.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span>Цена до {price.toLocaleString('ru-RU')} ₽</span>
            <input type="range" min="2000" max={maxPrice} step="100" value={price} onChange={(event) => setPrice(Number(event.target.value))} />
          </label>

          <label className={styles.checkboxRow}>
            <input type="checkbox" checked={inStockOnly} onChange={() => setInStockOnly((value) => !value)} />
            <span>В наличии</span>
          </label>

          <label className={styles.checkboxRow}>
            <input type="checkbox" checked={showNewOnly} onChange={() => setShowNewOnly((value) => !value)} />
            <span>Новинки</span>
          </label>

          <label className={styles.checkboxRow}>
            <input type="checkbox" checked={showPopularOnly} onChange={() => setShowPopularOnly((value) => !value)} />
            <span>Популярное</span>
          </label>

          <button className={styles.resetButton} onClick={resetFilters}>Сбросить фильтры</button>
        </aside>

        <section className={styles.content}>
          <div className={styles.toolbar}>
            <p>{filteredProducts.length} товаров</p>
            <label className={styles.sortLabel}>
              <span>Сортировка</span>
              <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                <option value="featured">По умолчанию</option>
                <option value="price-asc">По цене ↑</option>
                <option value="price-desc">По цене ↓</option>
                <option value="name">По названию</option>
                <option value="new">По новизне</option>
                <option value="popular">По популярности</option>
              </select>
            </label>
          </div>

          {filteredProducts.length === 0 ? (
            <div className={styles.emptyState}>
              <h3>Ничего не найдено</h3>
              <p>Попробуйте изменить фильтры или вернуться к базовой подборке товаров.</p>
            </div>
          ) : (
            <div className={styles.catalogGrid}>
              {filteredProducts.map((product) => {
                const isFavorite = favorites.includes(product.id);
                return (
                  <article key={product.id} className={styles.card}>
                    <Link to={`/product/${product.id}`} className={styles.imageLink}>
                      <img src={product.images[0]} alt={product.name} className={styles.productImage} />
                    </Link>
                    <div className={styles.cardContent}>
                      <div className={styles.cardTop}>
                        <span className={styles.category}>{product.gender} · {product.category}</span>
                        <button className={styles.favoriteButton} onClick={() => toggleFavorite(product.id)} aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}>
                          {isFavorite ? '♥' : '♡'}
                        </button>
                      </div>
                      <Link to={`/product/${product.id}`} className={styles.linkBlock}>
                        <h3>{product.name}</h3>
                        <div className={styles.priceRow}>
                          <div>
                            <span className={styles.price}>{product.price.toLocaleString('ru-RU')} ₽</span>
                            {product.oldPrice ? <span className={styles.oldPrice}>{product.oldPrice.toLocaleString('ru-RU')} ₽</span> : null}
                          </div>
                          {product.oldPrice ? <span className={styles.discount}>-{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%</span> : null}
                        </div>
                      </Link>
                      <div className={styles.badges}>
                        {product.isNew ? <span className={styles.badge}>Новинка</span> : null}
                        {product.isPopular ? <span className={styles.badge}>Популярное</span> : null}
                        {!product.inStock ? <span className={styles.badge}>Нет в наличии</span> : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default CatalogPage;
