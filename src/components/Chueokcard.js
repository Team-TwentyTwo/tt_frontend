import { useNavigate } from 'react-router-dom';
import styles from './Chueokcard.module.css';

function Chueokcard({ post, isPublicTab }) {
  const navigate = useNavigate();

  const { id, nickname, title, tags, location, createdAt, likeCount, commentCount, imageURL, isPublic } = post;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString(undefined, options).replace(',', '');
  };

  const handleCardClick = () => {
    navigate(`/chueok/${id}`);
  };

  return (
    <div className={styles.cardContainer} onClick={handleCardClick}>
      <img src={imageURL} alt="추억 이미지" className={styles.groupImage} />
      <div className={styles.cardContent}>
        {isPublicTab ? (
          <>
            <p>{nickname}</p>
            <h3 className={styles.title}>{title}</h3>
            <p>{tags.join(', ')}</p>
            <p className={styles.footer}>
              {location}  ·  {formatDate(createdAt)}    {likeCount} / {commentCount}
            </p>
          </>
        ) : (
          <>
            <p>{nickname}</p>
            <h3 className={styles.title}>{title}</h3>
            <p>{likeCount} / {commentCount}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Chueokcard;
