import Groupcard from './Groupcard';
import styles from './Grouplist.module.css';
import noneIcon from '../assets/group_nocontent.png';
import mbuttonBig from '../assets/group_makebtn_l.svg';

function Grouplist({ cards, activeTab }) {
  const handleButtonClick = () => {
    console.log("그룹 만들기 요청");
  };

  if (cards.length === 0) {
    const noGroupsMessage = activeTab === 'public' 
      ? '등록된 공개 그룹이 없습니다.' 
      : '등록된 비공개 그룹이 없습니다.';

    return (
      <div className={styles.emptyMessage}>
        <img src={noneIcon} alt="목록 없음 아이콘" />
        <div className={styles.noGroupsMessage}>{noGroupsMessage}</div>
        <div className={styles.suggestCreateGroup}>가장 먼저 그룹을 만들어보세요!</div>
        <img src={mbuttonBig} alt="그룹 만들기 버튼" className={styles.createButton} onClick={handleButtonClick} />
      </div>
    );
  }

  return (
    <div className={styles.listContainer}>
      {cards.map((card, index) => (
        <Groupcard key={index} data={card} isPublicTab={activeTab === 'public'}/>
      ))}
    </div>
  );
}

export default Grouplist;
