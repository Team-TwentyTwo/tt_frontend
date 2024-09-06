import React, { useState } from 'react';
import chueokflowericon from '../assets/icon_flower.svg';
import chueokbubbleicon from '../assets/icon_bubble.svg';
import chueokfish from '../assets/chueok_fish.png';
import editicon from '../assets/icon_edit.svg';
import deleteicon from '../assets/icon_delete.svg';
import commentbtnImg from '../assets/chueok_commentbtn.svg';
import Likebutton from '../components/Likebutton';
import styles from './Chueok.module.css';
import Header from '../components/Header';
import Editchueok from '../components/Editchueok';
import Removechueok from '../components/Removechueok';
import Removecomment from '../components/Removecomment';
import Editcomment from '../components/Editcomment';
import Registercomment from '../components/Registercomment';

function Chueok() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [isRemovecmtModalOpen, setIsRemovecmtModalOpen] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [isRegistercmtModalOpen, setIsRegistercmtModalOpen] = useState(false); // 댓글 등록 모달 상태

  const handleOpenEditModal = () => {
    setIsModalOpen(true);
    setIsRemoveModalOpen(false);
    setIsRemovecmtModalOpen(false);
    setEditingCommentId(null);
    setIsRegistercmtModalOpen(false);
  };

  const handleOpenRemoveModal = () => {
    setIsRemoveModalOpen(true);
    setIsModalOpen(false);
    setIsRemovecmtModalOpen(false);
    setEditingCommentId(null);
    setIsRegistercmtModalOpen(false);
  };

  const handleOpenRemoveCmtModal = () => {
    setIsRemovecmtModalOpen(true);
    setIsModalOpen(false);
    setIsRemoveModalOpen(false);
    setEditingCommentId(null);
    setIsRegistercmtModalOpen(false);
  };

  const handleOpenEditcmtModal = (commentId) => {
    setIsRemovecmtModalOpen(false);
    setIsModalOpen(false);
    setIsRemoveModalOpen(false);
    setEditingCommentId(commentId);
    setIsRegistercmtModalOpen(false);
  };

  // 댓글 등록 모달 열기
  const handleOpenRegistercmtModal = () => {
    setIsRegistercmtModalOpen(true);
    setIsModalOpen(false);
    setIsRemoveModalOpen(false);
    setIsRemovecmtModalOpen(false);
    setEditingCommentId(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsRemoveModalOpen(false);
    setIsRemovecmtModalOpen(false);
    setEditingCommentId(null);
    setIsRegistercmtModalOpen(false);
  };

  const [flowerCount, setFlowerCount] = useState(120);

  const [comments, setComments] = useState([
    { id: 1, nickname: '다람이네가족', date: '24.01.18', time: '21:50', text: '우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~' },
    { id: 2, nickname: '핑구', date: '24.01.18', time: '21:50', text: '우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~' },
    { id: 3, nickname: '달팽스', date: '24.01.18', time: '21:50', text: '우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~' },
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
        {isModalOpen && <Editchueok onClose={handleCloseModal} />}
        <span className={styles.delete} onClick={handleOpenRemoveModal}>추억 삭제하기</span>
        {isRemoveModalOpen && <Removechueok onClose={handleCloseModal} />}
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

      <div className={styles.likebutton}>
        <Likebutton onLike={handleFlowerClick} />
      </div>

      <div className={styles.container}>
        <p className={styles.text}>
          인천 앞바다에서 월척을 낚았습니다! 
          가족들과 기억에 오래도록 남을 멋진 하루였어요. 가족들과 기억에 오래도록 남을 멋진 하루였어요 
          가족들과 기억에 오래도록 남을 멋진 하루였어요.
          
      
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
              <img
                src={editicon}
                alt="댓글수정아이콘"
                className={styles.commentEditIcon}
                onClick={() => handleOpenEditcmtModal(comment.id)} // 댓글 수정 모달 열기
              />
              <img
                src={deleteicon}
                alt="댓글삭제아이콘"
                className={styles.commentDeleteIcon}
                onClick={handleOpenRemoveCmtModal}
              />
            </div>
          </div>
        ))}
      </div>

      {/* 댓글 삭제 모달 */}
      {isRemovecmtModalOpen && <Removecomment onClose={handleCloseModal} />}

      <div className={styles.commentButtonContainer}>
        <img
          className={styles.comment}
          src={commentbtnImg}
          alt="댓글남기기"
          onClick={handleOpenRegistercmtModal} // 클릭 시 댓글 등록 모달 열기
        />
      </div>

      {/* 댓글 수정 모달 */}
      {editingCommentId && <Editcomment commentId={editingCommentId} onClose={handleCloseModal} />}

      {/* 댓글 등록 모달 */}
      {isRegistercmtModalOpen && <Registercomment onClose={handleCloseModal} />}
    </>
  );
}

export default Chueok;
