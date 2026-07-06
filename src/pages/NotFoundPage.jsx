import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={`container ${styles.page}`}>
      <h1>404</h1>
      <p>Страница не найдена. Возможно, вы ушли не туда.</p>
      <Link to="/" className={styles.button}>На главную</Link>
    </div>
  );
}

export default NotFoundPage;
