import { useState } from "react";
import Header from "../components/Header";
import styles from './Makegroup.module.css';
import mbutton from '../assets/button_make.svg';
import tabOnBtn from '../assets/tab_active.svg';
import tabOffBtn from '../assets/tab_default.svg';

function Makegroup() {
  const [isPublic, setIsPublic] = useState(true);
  const [fileInfo, setFileInfo] = useState('');

  const handleTabClick = () => {
    setIsPublic(!isPublic);
  };

  const handleButtonClick = () => {
    console.log("그룹 만들기 성공");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileInfo(`${file.name} (${(file.size / 1024).toFixed(2)}KB, ${file.type})`);
    }
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
              id="fileInput"
              accept="image/*"
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
            <img
              src={isPublic ? tabOnBtn : tabOffBtn}
              alt="탭 버튼"
              className={styles.tab}
              onClick={handleTabClick}
            />
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
            alt="만들기 버튼" 
            className={styles.makeButton} 
            onClick={handleButtonClick} 
          />
        </div>
      </div>
    </>
  );
}

export default Makegroup;
