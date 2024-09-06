import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import logoImg from '../assets/logo.svg';

function Header({children}) {
  const navigate = useNavigate(); 

  const handleLogoClick = () => {
    navigate('/', { state: { reset: true } });
  };

  return (
    <div className={styles.header}>
      <img
        src={logoImg}
        alt="zogakzip Logo"
        className={styles.logo}
        onClick={handleLogoClick} 
        style={{ cursor: 'pointer' }} 
      />
      {children}
    </div>
  );
}

export default Header;
