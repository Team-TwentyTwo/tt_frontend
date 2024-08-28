import React from 'react';
import styles from './EditChueok.module.css';
import imageselect from '../assets/editchueok_img.svg'
import nicknamebox from '../assets/editchueok_namebox.svg'
import textbox from '../assets/editchueok_textbox.sgv'
import titlebox from '../assets/editchueok_titlebox.svg'
import tagbox from '../assets/editchueok_tagbox.svg'
import placebox from '../assets/editchueok_placebox.svg'
import datebox from '../assets/editchueok_datebox.svg'
import calandericon from '../assets/editchueok_calander.svg'
import toggle1 from '../assets/editchueok_toggleon.svg'
import pwbox from '../assets/editchueok_pwbox.svg'
import editbutton from '../assets/editchueok_editbutton.svg'


import x from '../assets/icon_x.svg'


function EditChueok() {
  return (
    <>
      <div>
        <h1>추억 수정</h1>
      
      </div>
      <div>
        <h2>닉네임</h2>
        <img src={nicknamebox} alt="닉네임박스" /> <h2>닉네임을 입력해주세요</h2>
      </div>
      <div>
        <h3>제목</h3>
        <img src={titlebox} alt="제목박스" />
      </div>
      <div>
        <h4>본문</h4>
        <img src={textbox} alt="텍스트박스" />
      </div>
      <div>
        <h5>태그</h5>
        <img src={tagbox} alt="태그박스" />
      </div>
      <div>
        <h6>장소</h6>
        <img src={placebox} alt="장소박스" />
      </div>
      <div>
        <h7>추억의 순간</h7>
        <img src={datebox} alt="날짜박스" />
        <img src={calandericon} alt="달력아이콘" />
      </div>
      <div>
        <h8>추억 공개 선택</h8>
        <h9>공개</h9> 
        <img src={toggle1} alt="공개토글" />
      </div>
      <div>
        <h9>수정 권한 인증</h9>
        <img src={pwbox} alt="비번박스" />
      </div>
      <div>
        <img src={editbutton} alt="수정하기버튼" />
      </div>


    </>
  );
}

export default EditChueok;
