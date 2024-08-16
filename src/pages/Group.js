import Header from "../components/Header";
import mbutton from "../assets/group_makebtn_m.svg";
import styles from './Group.module.css';

function Group() {
  const handleButtonClick = () => {
    console.log("그룹 만들기 요청");
  };

  return (
    <>
      <Header>
        <div className={styles.buttonContainer}>
          <img 
            src={mbutton} 
            alt="그룹 만들기 버튼" 
            className={styles.makeButton} 
            onClick={handleButtonClick} 
          />
        </div>
      </Header>
    </>
  );
}

export default Group;