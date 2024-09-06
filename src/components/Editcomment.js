import React from 'react';
import styles from './Editcomment.module.css';
import registerbutton from '../assets/register_button.svg';


function Editcomment() {
    return (
      <>
        

        
         <div className={styles.container}>
         <h1 className={styles.title}>댓글 수정</h1>
           
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
           <label className={styles.label}>댓글</label>
           <input
             type="text"
             placeholder="댓글을 입력해 주세요"
             className={styles.commentinput}
           />
         </div>

         <div>
           <label className={styles.label}>수정 권한 인증</label>
           <input
             type="password"
             placeholder="비밀번호를 입력해 주세요"
             className={styles.input}
           />
         </div>
       </div>

       <div className={styles.registerbtContainer}>
         <img 
           src={registerbutton} 
           alt="등록하기버튼"
           className={styles.registerbt} 
         />
       </div>  
         </div>
      </>
    );
}

export default Editcomment;
