import React, { useState } from 'react';
import styles from './Editcomment.module.css';
import x from '../assets/icon_x.svg';
import registerbutton from '../assets/register_button.svg';

function Editcomment({ onClose }) {
  const [nickname, setNickname] = useState('');
  const [comment, setComment] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!nickname || !comment || !password) {
      alert('모든 필드를 입력해 주세요');
      return;
    }

    // Handle the form submission (e.g., call an API or update state)
    console.log({ nickname, comment, password });

    // Close the modal after submission
    onClose();
  };

  return (
    <>
      <div className={styles.container}>
        {/* Close Button */}
        <img 
          src={x} 
          alt="닫기" 
          className={styles.closeButton}
          onClick={onClose} 
        />

        <h1 className={styles.title}>댓글 수정</h1>

        <form onSubmit={handleSubmit} className={styles.inputGroup}>
          <div>
            <label className={styles.label}>닉네임</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임을 입력해 주세요"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>댓글</label>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력해 주세요"
              className={styles.commentinput}
            />
          </div>

          <div>
            <label className={styles.label}>수정 권한 인증</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해 주세요"
              className={styles.input}
            />
          </div>

          {/* Submit Button */}
          <div className={styles.registerbtContainer}>
            <button type="submit" className={styles.registerbt}>
              <img src={registerbutton} alt="등록하기 버튼" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Editcomment;
