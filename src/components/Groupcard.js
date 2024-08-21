import styles from './Groupcard.module.css';

function Groupcard({ data }) {
  return (
    <div className={styles.cardContainer}>
      <p>{data.status}</p>
      <h3 className={styles.title}>{data.name}</h3>
      <p>{data.description}</p>
      <p>{data.badges}</p>
    </div>
  );
}

export default Groupcard;