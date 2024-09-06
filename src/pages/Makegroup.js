import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import axios from "axios"; 
import Header from "../components/Header";
import styles from './Makegroup.module.css';
import mbutton from '../assets/button_make.svg';
import tabOnBtn from '../assets/tab_active.svg';
import tabOffBtn from '../assets/tab_default.svg';

function Makegroup() {
  const [isPublic, setIsPublic] = useState(true);
  const [name, setName] = useState('');  
  const [password, setPassword] = useState('');  
  const [fileInfo, setFileInfo] = useState('');
  const [introduction, setIntroduction] = useState('');  
  const [imageFile, setImageFile] = useState(null);  // 이미지 파일 상태 추가
  const [loading, setLoading] = useState(false);  // 로딩 상태 추가

  const navigate = useNavigate(); 

  const handleTabClick = () => {
    setIsPublic(!isPublic);
  };

  // 파일 선택 시 처리 (FormData에 추가될 파일 저장)
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileInfo(`${file.name} (${(file.size / 1024).toFixed(2)}KB, ${file.type})`);
      setImageFile(file);  // 이미지 파일을 상태로 저장
    }
  };

  // 이미지 파일을 서버에 업로드하고, 이미지 URL을 반환하는 함수
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('image', imageFile);  // 선택된 파일을 FormData로 전송

    try {
      const response = await axios.post('https://zogakzip.onrender.com/api/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      return response.data.imageURL;  // 서버에서 받은 이미지 URL 반환
    } catch (error) {
      console.error('이미지 업로드 실패:', error.response ? error.response.data : error.message);
      throw error;  // 에러가 발생하면 그룹 등록을 중단
    }
  };

  // 그룹 생성 버튼 클릭 시 처리
  const handleButtonClick = async () => {
    setLoading(true);  // 로딩 상태 시작
    let imageURL = '';

    try {
      // 1. 이미지 파일이 있으면 먼저 이미지 URL을 생성
      if (imageFile) {
        imageURL = await uploadImage();
        console.log("생성된 이미지 URL:", imageURL);
      }

      // 2. 그룹 정보 전송
      const groupData = {
        name: name,
        password: password,
        imageURL: imageURL,  // 생성된 이미지 URL을 포함
        isPublic: isPublic,
        introduction: introduction
      };

      const response = await axios.post('https://zogakzip.onrender.com/api/groups', groupData);

      if (response.status === 201) {
        console.log('그룹 생성 성공:', response.data);
        navigate('/');  // 그룹 생성 성공 후 메인 페이지로 이동
      }
    } catch (error) {
      console.error('그룹 생성 실패:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);  // 로딩 상태 종료
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
            value={name}
            onChange={(e) => setName(e.target.value)}  
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
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}  
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}  
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
