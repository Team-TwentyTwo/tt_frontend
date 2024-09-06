import React from 'react';
import uploadbutton from '../assets/upload_button.svg'
import x from '../assets/icon_x.svg'
import styles from './Uploadchueok.module.css';




function Uploadchueok () {
    return (
      <>
      <div className={styles.container}>
         <h1 className={styles.title}>추억 올리기</h1>
      </div>
        
      
        
        <div className={styles.inputGroup} >
          <label className={styles.label}>올리기 권한 인증</label>
          <input
            type="password"
            placeholder="그룹 비밀번호를 입력해 주세요"
            className={styles.input}
          />
        </div>

        <div>
          <img className={styles.xbt}
          src={x} 
          alt="나가기" />
        </div>

        <div className={styles.uploadbtContainer}>
          <img src={uploadbutton} 
          alt="제출하기버튼"
          className={styles.uploadbt} />
        </div>  
  
        
        


      </>
    );
  }
  
  export default Uploadchueok;