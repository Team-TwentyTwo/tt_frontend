import React, { useState } from 'react';
import chueokflowericon from '../assets/icon_flower.svg';
import chueokbubbleicon from '../assets/icon_bubble.svg';
import chueokline from '../assets/chueok_line.svg';
import chueokfish from '../assets/chueok_fish.png';
import editicon from '../assets/icon_edit.svg';
import deleteicon from '../assets/icon_delete.svg';
import commentbtnImg from '../assets/chueok_commentbtn.svg';
import Likebutton from '../components/Likebutton';
import styles from './Chueok.module.css';
import Header from '../components/Header';
import Editchueok from '../components/Editchueok';
import Removechueok from '../components/Removechueok';

function Chueok() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 추억 수정 모달 상태
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false); // 추억 삭제 모달 상태

  // 추억 수정 모달 열기
  const handleOpenEditModal = () => {
    setIsModalOpen(true);  
    setIsRemoveModalOpen(false); // 추억 삭제 모달 닫기
  };

  // 추억 삭제 모달 열기
  const handleOpenRemoveModal = () => {
    setIsRemoveModalOpen(true);  
    setIsModalOpen(false); // 추억 수정 모달 닫기
  };

  // 모든 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false); 
    setIsRemoveModalOpen(false); 
  };

  const [flowerCount, setFlowerCount] = useState(120);

  const [comments, setComments] = useState([
    { id: 1, nickname: '다람이네가족', date: '24.01.18', time: '21:50', text: '우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~' },
    { id: 2, nickname: '핑구', date: '24.01.18', time: '21:50', text: '우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~' },
    { id: 3, nickname: '달팽스', date: '24.01.18', time: '21:50', text: '우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~' },
    { id: 4, nickname: '다람이네가족', date: '24.01.18', time: '21:50', text: '우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~' },
    { id: 5, nickname: '다람이네가족', date: '24.01.18', time: '21:50', text: '우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~' },
    { id: 6, nickname: '다람이네가족', date: '24.01.18', time: '21:50', text: '우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~' },
    { id: 7, nickname: '다람이네가족', date: '24.01.18', time: '21:50', text: '우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~' },
    { id: 8, nickname: '다람이네가족', date: '24.01.18', time: '21:50', text: '우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~' }
    
  ]);

  const handleFlowerClick = () => {
    setFlowerCount(flowerCount + 1);
  };

  const visibleComments = comments.slice(0, 3);

  return (
    <>
      <Header />

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
        <span className={styles.edit} onClick={handleOpenEditModal}>추억 수정하기</span>
        {isModalOpen && 
          <Editchueok onClose={handleCloseModal}/>
        }
        <span className={styles.delete} onClick={handleOpenRemoveModal}>추억 삭제하기</span>
        {isRemoveModalOpen && 
          <Removechueok onClose={handleCloseModal}/>
        }
      </h3>
      <div>
        <h4 className={styles.tag}>#인천 #낚시</h4>
      </div>
      <div>
        <h4 className={styles.date}>인천 앞바다 · 24.01.19 18:00</h4> 
      </div>
      <div className={styles.iconContainer}>
        <img src={chueokflowericon} alt="추억공감아이콘" className={styles.flowericon} />
        <span className={styles.flowernumb}>{flowerCount}</span>
        <img src={chueokbubbleicon} alt="추억버블아이콘" className={styles.bubbleicon} />
        <span className={styles.bubblenumb}>80</span>
      </div>

      <div className={styles.likebuttonContainer}>
        <Likebutton onLike={handleFlowerClick} />
      </div>

      <div>
        <img src={chueokline} alt="추억상세페이지라인" />
      </div>

      <div className={styles.container}>
        <p className={styles.text}>
          인천 앞바다에서 월척을 낚았습니다!
          가족들과 기억에 오래도록 남을 멋진 하루였어요...
        </p>
        <img className={styles.mainpic} src={chueokfish} alt="추억상세페이지기본사진" /> 
      </div>

      <div className={styles.commentSection}>
        <h4 className={styles.commentTitle}>댓글 {comments.length}</h4>
        <hr className={styles.commentSeparator} />
        {visibleComments.map((comment) => (
          <div key={comment.id} className={styles.commentBox}>
            <div className={styles.commentHeader}>
              <span className={styles.commentNickname}>{comment.nickname}</span>
              <span className={styles.commentDate}>{comment.date} {comment.time}</span>
            </div>
            <p className={styles.commentText}>{comment.text}</p>
            <div className={styles.commentActions}>
              <img src={editicon} alt="댓글수정아이콘" className={styles.commentEditIcon} />
              <img src={deleteicon} alt="댓글삭제아이콘" className={styles.commentDeleteIcon} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.commentButtonContainer}>
        <img className={styles.comment} src={commentbtnImg} alt="댓글남기기" />
      </div>
    </>
  );
}

export default Chueok;
