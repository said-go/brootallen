import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import styles from './Layout.module.css';

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/catalog', label: 'Каталог' },
  { to: '/favorites', label: 'Избранное' },
  { to: '/about', label: 'О магазине' },
  { to: '/contacts', label: 'Контакты' }
];

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <NavLink to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
            Brootallen
          </NavLink>
          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Основная навигация">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/cart" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Корзина {totalItems > 0 ? `(${totalItems})` : ''}
            </NavLink>
          </nav>
          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <p>© 2026 Brootallen. Подборка выразительной одежды для современного гардероба.</p>
          <div className={styles.footerLinks}>
            <NavLink to="/catalog">Каталог</NavLink>
            <NavLink to="/about">О магазине</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
