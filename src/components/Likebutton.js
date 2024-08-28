import like_button  from '../assets/like.svg';
<<<<<<< HEAD
import styles from '../pages/Chueok.module.css';

function Likebutton() {
  return (
    <div> 
=======
import styles from './Likebutton.module.css';

function Likebutton() {
  return (
    <div>
>>>>>>> 7e008fac94cb376407485d259a87400951ef0aaf
      <img className={styles.likebutton} src={like_button} alt="공감보내기버튼" />
    </div>
  );
}

export default Likebutton;