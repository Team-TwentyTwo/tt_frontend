import like_button  from '../assets/like.svg';
import styles from '../pages/Chueok.module.css';

function Likebutton() {
  return (
    <div> 
      <img className={styles.likebutton} src={like_button} alt="공감보내기버튼" />
    </div>
  );
}

export default Likebutton;