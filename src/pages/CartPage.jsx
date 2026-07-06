import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import styles from './CartPage.module.css';

function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className={`container ${styles.page}`}>
        <h1>Корзина пуста</h1>
        <p>Ваша корзина пока не содержит товаров. Перейдите в каталог, чтобы подобрать что-то особенное.</p>
        <Link to="/catalog" className={styles.button}>Открыть каталог</Link>
      </div>
    );
  }

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.grid}>
        <div className={styles.items}>
          {cart.map((item) => (
            <div key={item.cartKey} className={styles.item}>
              <img src={item.images[0]} alt={item.name} className={styles.image} />
              <div className={styles.info}>
                <h2>{item.name}</h2>
                <p>{item.category}</p>
                <p>{item.selectedColor} · {item.selectedSize}</p>
                <p>{item.price.toLocaleString('ru-RU')} ₽</p>
                <div className={styles.row}>
                  <label>
                    <span>Кол-во</span>
                    <input type="number" min="1" value={item.quantity} onChange={(event) => updateQuantity(item.cartKey, Number(event.target.value))} />
                  </label>
                  <button onClick={() => removeFromCart(item.cartKey)}>Удалить</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <aside className={styles.summary}>
          <h2>Итог</h2>
          <p>Общая стоимость: <strong>{totalPrice.toLocaleString('ru-RU')} ₽</strong></p>
          <Link to="/catalog" className={styles.button}>Продолжить покупки</Link>
        </aside>
      </div>
    </div>
  );
}

export default CartPage;
