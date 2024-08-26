import { useState } from "react";
import Header from "../components/Header";
import styles from './Makegroup.module.css';
import mbutton from '../assets/group_makebtn_l.svg';

function Makegroup() {
  const [isPublic, setIsPublic] = useState(true);

  const handleTabClick = () => {
    setIsPublic(!isPublic);
  };

  const handleButtonClick = () => {
    console.log("그룹 만들기 성공");
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>그룹 만들기</h1>
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>그룹명</label>
          <input
            type="text"
            placeholder="그룹명을 입력해 주세요"
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>대표 이미지</label>
          <div className={styles.fileInputWrapper}>
            <input
              type="file"
              placeholder="파일을 선택해 주세요"
              className={styles.fileInput}
            />
            <button className={styles.fileButton}>파일 선택</button>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>그룹 소개</label>
          <textarea
            placeholder="그룹을 소개해 주세요"
            className={`${styles.input} ${styles.textarea}`}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>그룹 공개 선택</label>
          <div className={styles.tabWrapper}>
            <span className={styles.tabText}>{isPublic ? '공개' : '비공개'}</span>
            <div
              className={`${styles.tab} ${isPublic ? styles.activeTab : styles.inactiveTab}`}
              onClick={handleTabClick}
            ></div>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            className={styles.input}
          />
        </div>
        <div className={styles.mbuttonContainer}>
          <img 
            src={mbutton} 
            alt="그룹 만들기 버튼" 
            className={styles.makeButton} 
            onClick={handleButtonClick} 
          />
        </div>
      </div>
    </>
  );
}

export default Makegroup;