import styles from './Header.module.css';
import logoImg from '../assets/logo.svg';

function Header({children}) {
  return (
    <div className={styles.header}>
      <img src={logoImg} alt="zogakzip Logo" className={styles.logo}/>
      {children}
    </div>
  );
}

export default Header;