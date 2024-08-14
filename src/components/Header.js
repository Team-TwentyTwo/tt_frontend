import styles from './Header.module.css';
import logoImg from '../assets/logo.svg';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img src={logoImg} alt="zogakzip Logo" className={styles.logo}/>
      </div>
    </div>
  );
}

export default Header;