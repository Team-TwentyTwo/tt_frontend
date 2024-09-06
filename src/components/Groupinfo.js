import styles from './Groupinfo.module.css';
import Likebutton from '../components/Likebutton';

function Groupinfo({ group }) {
  const { id, name, imageURL, isPublic, likeCount, badges, postCount, createdAt, introduction } = group;

  const handleEdit = () => {
    console.log("수정 요청");
  };

  const handleDelete = () => {
    console.log("삭제 요청");
  };

  const daysSinceCreated = Math.floor((new Date() - new Date(createdAt)) / (1000 * 60 * 60 * 24));
  const publicStatus = isPublic ? "공개" : "비공개";

  return (
    <div className={styles.groupinfo}>
      <img src={imageURL} alt="그룹 이미지" className={styles.image} />
      <div className={styles.info}>
        <div className={styles.firstLine}>
          <span>D+{daysSinceCreated}</span>
          <span className={styles.publicStatus}>| {publicStatus}</span>
          <div className={styles.actions}>
            <span onClick={handleEdit}>그룹 정보 수정하기</span>
            <span onClick={handleDelete}>그룹 삭제하기</span>
          </div>
        </div>
        <div className={styles.secondLine}>
          <span className={styles.name}>{name}</span>
          <span className={styles.postCount}>게시글 {postCount}개</span>
          <span className={styles.likeCount}>공감 {likeCount}개</span>
        </div>
        <div className={styles.introduction}>{introduction}</div>
        <div className={styles.badges}>
          <span>획득 배지</span>
        </div>
      </div>
      <div className={styles.likeButton}>
        <Likebutton /> 
      </div>
    </div>
  );
}

export default Groupinfo;
