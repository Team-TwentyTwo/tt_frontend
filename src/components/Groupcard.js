import { useNavigate } from 'react-router-dom';
import styles from './Groupcard.module.css';
import axios from "axios"; 

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
          <p>{calculateDDay(data.createdAt)}  |  {data.isPublic ? '공개' : '비공개'}</p>
          <h3 className={styles.title}>{data.name}</h3>
          <p>{data.introduction}</p>
          <p>획득 배지 {data.badgesCount}, 추억 {data.postCount}, 그룹 공감 {data.likeCount}</p>
        </>
      )}

      {!isPublicTab && (
        <>
          <p>{calculateDDay(data.createdAt)}  |  {data.isPublic ? '공개' : '비공개'}</p>
          <h3 className={styles.title}>{data.name}</h3>
          <p>추억 {data.postCount}, 그룹 공감 {data.likeCount}</p>
        </>
      )}
    </div>
  );
}

export default Groupcard;