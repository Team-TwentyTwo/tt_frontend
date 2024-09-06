import React, {useState} from 'react';
import styles from './Registercomment.module.css';
import x from '../assets/icon_x.svg';
import registerbutton from '../assets/register_button.svg';


function Registercomment({ onClose }) {
  
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

         <div>
        {/* Close Button */}
        <img 
          src={x} 
          alt="닫기" 
          className={styles.closeButton}
          onClick={onClose} 
        />
        </div>


          
         <h1 className={styles.title}>댓글 등록</h1>
           
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
           <label className={styles.label}>비밀번호 생성</label>
           <input
             type="password"
             placeholder="댓글 비밀번호를 생성해 주세요"
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
         </div>
         </div>
      </>
    );
}

export default Registercomment;
