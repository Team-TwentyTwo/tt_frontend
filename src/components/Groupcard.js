import { useNavigate } from 'react-router-dom';
import styles from './Groupcard.module.css';
import axios from "axios"; 
import likeIcon from '../assets/icon_flower.svg';

function Groupcard({ data, isPublicTab }) {

  const navigate = useNavigate();

  const handleCardClick = async () => {
    if (data.isPublic) {
      try {
        const response = await axios.get(`https://zogakzip.onrender.com/api/groups/${data.id}`);
        navigate('/group-detail', { state: { group: response.data } });
      } catch (error) {
        console.error("그룹 정보를 가져오는 중 오류 발생:", error);
      }
    } else {
      navigate('/privategroup', { state: { groupId: data.id } });
    }
  };

  const calculateDDay = (createdAt) => {
    const createdDate = new Date(createdAt);
    const today = new Date();
    const diffTime = Math.abs(today - createdDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `D+${diffDays}`;
  };

  return (
    <div className={styles.cardContainer} onClick={handleCardClick}>
      {isPublicTab && (
        <>
          <img src={data.imageURL} alt={`${data.name} 이미지`} className={styles.groupImage} />
          <p className={styles.dateStatus}>
            <span className={styles.date}>{calculateDDay(data.createdAt)}</span>  
            <span className={styles.divider}>{"  |  "}</span>
            <span className={styles.status}>{data.isPublic ? '공개' : '비공개'}</span>
          </p>
          <h3 className={styles.title}>{data.name}</h3>
          <p className={styles.introduction}>{data.introduction}</p>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <p className={styles.statTitle}>획득 배지</p>
              <p className={styles.statValue}>{data.badgesCount}</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statTitle}>추억</p>
              <p className={styles.statValue}>{data.postCount}</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statTitle}>그룹 공감</p>
              <div className={styles.likeCountContainer}>
                <img src={likeIcon} alt="공감 아이콘" className={styles.likeIcon} />
                <p className={styles.statValue}>{data.likeCount}</p>
              </div>
            </div>
          </div>
        </>
      )}

      {!isPublicTab && (
        <>
          <p className={styles.dateStatus}>
            <span className={styles.date}>{calculateDDay(data.createdAt)}</span>  
            <span className={styles.divider}>{"  |  "}</span>
            <span className={styles.status}>{data.isPublic ? '공개' : '비공개'}</span>
          </p>
          <h3 className={styles.title}>{data.name}</h3>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <p className={styles.statTitle}>추억</p>
              <p className={styles.statValue}>{data.postCount}</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statTitle}>그룹 공감</p>
              <div className={styles.likeCountContainer}>
                <img src={likeIcon} alt="공감 아이콘" className={styles.likeIcon} />
                <p className={styles.statValue}>{data.likeCount}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Groupcard;