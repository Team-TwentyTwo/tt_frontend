import Header from "../components/Header";
import styles from './Privategroup.module.css';
import sbutton from '../assets/button_submit.svg';

function Privatechueok() {

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>비공개 추억</h1>
        <div className={styles.description}>
          비공개 추억에 접근하기 위해 권한 확인이 필요합니다.
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>비밀번호를 입력해 주세요</label>
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            className={styles.input}
          />
        </div>
        <div className={styles.sbuttonContainer}>
          <img 
            src={sbutton} 
            alt="제출하기 버튼" 
            className={styles.sbutton}
          />
        </div>
      </div>
    </>
  );
}

export default Privatechueok;
