import React from 'react';
import deletebox from '../assets/deletechueok_box'
import deletebutton from '../assets/deletechueok_button'
import x from '../assets/icon_x'

function Deletechueok() {
    return (
      <>
      <h1>추억 삭제</h1>
      <h2>삭제 권한 인증</h2>
      <div>
        <h3>비밀번호를 입력해 주세요</h3>
        <img src={deletebox} alt="삭제권한인증박스" />
      </div>
      <div>
      <img src={deletebutton} alt="삭제하기버튼" />
      </div>
      

      
      </>
    );
  }
  
  export default Deletechueok;