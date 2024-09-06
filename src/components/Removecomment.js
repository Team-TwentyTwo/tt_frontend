import React, { useState }from 'react';
import removebutton from '../assets/remove_button.svg'
import x from '../assets/icon_x.svg'
import styles from './Removecomment.module.css';




function Removecomment({ onClose }) {
  
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
      <div className={styles.modalBackdrop}>
      <div className={styles.modalconainer}>
      <div className={styles.container}>
         <h1 className={styles.title}>댓글 삭제</h1>
      </div>
        
      
        
        <div className={styles.inputGroup} >
          <label className={styles.label}>삭제 권한 인증</label>
          <input
            type="password"
            placeholder="댓글 비밀번호를 입력해 주세요"
            className={styles.input}
          />
        </div>

        <div>
        <img
          className={styles.xbt}
          src={x} 
          alt="나가기"
          onClick={onClose} // 닫기 버튼 클릭 시 모달 닫기
        />
        </div>

        <div className={styles.removebtContainer}>
          <img src={removebutton} 
          alt="삭제하기버튼"
          className={styles.removebt} />
        </div>  
  
        </div>
        </div>
        


      </>
    );
  }
  
  export default Removecomment;