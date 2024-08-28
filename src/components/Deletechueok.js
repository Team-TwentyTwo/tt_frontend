import React from 'react';
import deletebutton from '../assets/deletechueok_button'
import x from '../assets/icon_x'

function Deletechueok() {
    return (
      <>
      <h1>추억 삭제</h1>
      <h2>삭제 권한 인증</h2>
      <div>
        <h3>비밀번호를 입력해 주세요</h3>
        
      </div>
      <div>
      <img src={deletebutton} alt="삭제하기버튼" />
      </div>
      

      
      </>
    );
  }
  
  export default Deletechueok;