import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from "../components/Header";
import styles from './Privategroup.module.css';
import sbutton from '../assets/button_submit.svg';

function Privategroup() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { groupId } = location.state;

  const handlePasswordSubmit = async () => {
    try {
      const response = await axios.post(`https://zogakzip.onrender.com/api/groups/${groupId}/verify-password`, {
        password
      });

      if (response.status === 200) {
        const groupResponse = await axios.get(`https://zogakzip.onrender.com/api/groups/${groupId}`);
        navigate('/group-detail', { state: { group: groupResponse.data } });
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        alert("그룹 비밀번호가 틀렸습니다.");
        navigate('/');
      } else {
        console.error("비밀번호 확인 중 오류 발생:", error);
      }
    }
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>비공개 그룹</h1>
        <div className={styles.description}>
          비공개 그룹에 접근하기 위해 권한 확인이 필요합니다.
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>비밀번호를 입력해 주세요</label>
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.sbuttonContainer}>
          <img 
            src={sbutton} 
            alt="제출하기 버튼" 
            className={styles.sbutton}
            onClick={handlePasswordSubmit}
          />
        </div>
      </div>
    </>
  );
}

export default Privategroup;
