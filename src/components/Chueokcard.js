import { useNavigate } from 'react-router-dom';
import styles from './Chueokcard.module.css';
import likeIcon from '../assets/icon_flower.svg';
import comIcon from '../assets/icon_bubble.svg';

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
            <p className={styles.nicknameRow}>
              {nickname}
              <span className={styles.divider}>|</span>
              <span className={styles.status}>{isPublic ? '공개' : '비공개'}</span>
            </p>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.tags}>{tags.join(', ')}</p>
            <div className={styles.footer}>
              <p>{location} · {formatDate(createdAt)}</p>
              <div className={styles.likeCommentContainer}>
                <p>
                  <img src={likeIcon} alt="좋아요 아이콘" className={styles.likeIcon} />
                  {likeCount}
                </p>
                <p>
                  <img src={comIcon} alt="댓글 아이콘" className={styles.comIcon} />
                  {commentCount}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <p className={styles.nicknameRow}>
              {nickname}
              <span className={styles.divider}>|</span>
              <span className={styles.status}>{isPublic ? '공개' : '비공개'}</span>
            </p>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.likeCommentContainer}>
              <p>
                <img src={likeIcon} alt="좋아요 아이콘" className={styles.likeIcon} />
                {likeCount}
              </p>
              <p>
                <img src={comIcon} alt="댓글 아이콘" className={styles.comIcon} />
                {commentCount}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Chueokcard;
