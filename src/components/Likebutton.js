import React from 'react';
import chueokflowericon from '../assets/icon_flower.svg';
import styles from './Likebutton.module.css';  // 스타일을 적용할 CSS 파일을 import

function Likebutton({ onLike }) {
  return (
    <button onClick={onLike} className={styles.likeButton}>
    
      <img
        src={chueokflowericon}
        alt="추억공감아이콘"
        className={styles.flowericon}
      />
      <span className={styles.buttonText}>공감 보내기</span>
    </button>
  );
}

export default Likebutton;
