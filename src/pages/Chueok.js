import React from 'react';
import chueokflowericon from '../assets/icon_flower.svg';
import chueokbubbleicon from '../assets/icon_bubble.svg';
import chueokline from '../assets/chueok_line.svg';
import chueokfish from '../assets/chueok_fish.png';
import commentbtnImg from '../assets/chueok_commentbtn.svg';
import Likebutton from '../components/Likebutton';
import styles from './Chueok.module.css';

function Chueok() {
  return (
    <>
      <div>
        <h1 className={styles.titles}>인천 앞바다에서 무려 60cm 월척을 낚다!</h1>
      </div> 
      <div>
        <h2>
          <span className={styles.nickname}>달봉이 아들</span>
          <span className={styles.visibility}> | 공개</span>
        </h2>
      </div>
      <h3>
        <span className={styles.edit}>추억 수정하기</span>
        <span className={styles.delete}>추억 삭제하기</span>
      </h3>
      <div>
        <h4 className={styles.tag}>#인천 #낚시</h4>
      </div>
      <div>
        <h4 className={styles.date}>인천 앞바다 · 24.01.19 18:00</h4> 
      </div>
      <div className={styles.iconContainer}>
        <img
          src={chueokflowericon} alt="추억공감아이콘"
          className={styles.flowericon}
        />
        <span className={styles.flowernumb}>120</span>
        <img
          src={chueokbubbleicon} alt="추억버블아이콘"
          className={styles.bubbleicon}
        />
        <span className={styles.bubblenumb}>80</span>
      </div>
      <div className={styles.likebuttonContainer}>
        < Likebutton />
      </div>
      <div>
        <p className={styles.text}>
          인천 앞바다에서 월척을 낚았습니다!<br/>
          가족들과 기억에 오래도록 남을 멋진 하루였어요<br/>
        </p>
      </div>
      <div>
        <img src={chueokline} alt="추억상세페이지라인" />
      </div>
      <div>
        <img className={styles.mainpic} src={chueokfish} alt="추억상세페이지기본사진" /> 
      </div>
      <div>  
        <img className={styles.comment} src={commentbtnImg} alt="댓글남기기" />
      </div>
    </>
  );
}

export default Chueok;
