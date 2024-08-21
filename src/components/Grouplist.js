import Groupcard from './Groupcard';
import styles from './Grouplist.module.css';

function Grouplist({ cards }) {
  if (cards.length === 0) {
    return <div className={styles.emptyMessage}>등록된 그룹이 없습니다.</div>;
  }

  return (
    <div className={styles.listContainer}>
      {cards.map((card, index) => (
        <Groupcard key={index} data={card} />
      ))}
    </div>
  );
}

export default Grouplist;
