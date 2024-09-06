import React, { useState } from 'react';
import styles from './Uploadmain.module.css';
import oligibutton from '../assets/oligi_button.svg';
import tabOnBtn from '../assets/tab_active.svg'; 
import tabOffBtn from '../assets/tab_default.svg';
import x from '../assets/icon_x.svg'
import Header from '../components/Header';

function Uploadmain() {
  
  const [fileInfo, setFileInfo] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileInfo(file ? file.name : '');
  };

  const handleTabClick = () => {
    setIsPublic(!isPublic);
  };

  return (
    <>
    <Header></Header>
      
        <h1 className={styles.title}>추억 올리기</h1>
      

      <div className={styles.parentContainer}>
      {/* 첫 번째 container */}
      <div className={styles.firstcontainer}>
        <div className={styles.inputGroup}>
          <div>
            <label className={styles.label}>닉네임</label>
            <input
              type="text"
              placeholder="닉네임을 입력해 주세요"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>제목</label>
            <input
              type="text"
              placeholder="제목을 입력해 주세요"
              className={styles.commentinput}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>이미지</label>
            <div className={styles.fileInputWrapper}>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                className={styles.hiddenFileInput}
              />
              <input
                type="text"
                value={fileInfo}
                placeholder="파일을 선택해 주세요"
                className={styles.fileDisplayInput}
                readOnly
              />
              <button
                className={styles.fileButton}
                onClick={() => document.getElementById('fileInput').click()}
              >
                파일 선택
              </button>
            </div>
          </div>

          <div>
            <label className={styles.label}>본문</label>
            <input
              type="text"
              placeholder="본문 내용을 입력해 주세요"
              className={styles.input}
            />
          </div>
        </div>
      </div>
      



      {/* 두 번째 container */}
      <div className={styles.secondcontainer}>
        <div className={styles.inputGroup}>
          <div>
            <label className={styles.label}>태그</label>
            <input
              type="text"
              placeholder="태그 입력 후 Enter"
              className={styles.input}
            />
          </div>

          <div>
            <label className={styles.label}>장소</label>
            <input
              type="text"
              placeholder="장소를 입력해 주세요"
              className={styles.commentinput}
            />
          </div>

          <div>
            <label className={styles.label}>추억의 순간</label>
            <input
              type="text"
              placeholder="추억의 순간을 입력해 주세요"
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>추억 공개 선택</label>
            <div className={styles.tabWrapper}>
              <span className={styles.tabText}>{isPublic ? '공개' : '비공개'}</span>
              <img
                src={isPublic ? tabOnBtn : tabOffBtn}
                alt="탭 버튼"
                className={styles.tab}
                onClick={handleTabClick}
              />
            </div>
          </div>

          <div>
            <label className={styles.label}>수정 권한 인증</label>
            <input
              type="text"
              placeholder="비밀번호를 입력해 주세요"
              className={styles.input}
            />
          </div>
        </div>
      </div>
      </div>

      <div className={styles.oligiContainer}>
        <img
          src={oligibutton}
          alt="올리기버튼"
          className={styles.oligibt}
        />
      </div>
      

     


    </>
  );
}

export default Uploadmain;
