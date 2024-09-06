import styles from './Chueoklist.module.css';
import Chueokcard from './Chueokcard';
import fishImage from '../assets/chueok_fish.png';

function Chueoklist({ groupId, activeTab, searchTerm = '' }) {
  const posts = [
    {
      id: 1,
      groupId: 123,
      nickname: "달봉이아들",
      title: "인천 앞바다에서 무려 60cm 월척을 낚다!",
      content: "content",
      imageURL: fishImage,
      tags: ["#인천", "#낚시"],
      location: "인천 앞바다",
      moment: "2024-02-21",
      isPublic: true,
      likeCount: 120,
      commentCount: 8,
      createdAt: "2024-02-22T07:47:49.803Z",
    }
  ]; 

  const filteredPosts = posts
    .filter(post => {
      if (activeTab === 'public') return post.isPublic;
      if (activeTab === 'private') return !post.isPublic;
      return true;
    })
    .filter(post => {
      const lowerSearchTerm = searchTerm ? searchTerm.toLowerCase() : '';
      const titleMatches = post.title ? post.title.toLowerCase().includes(lowerSearchTerm) : false;
      const tagsMatch = post.tags && Array.isArray(post.tags)
        ? post.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm))
        : false;
      return titleMatches || tagsMatch;
    });

  const noPostsMessage = '게시된 추억이 없습니다.';
  const suggestCreatePost = '첫 번째 추억을 올려보세요!';

  return (
    <div className={styles.chueoklist}>
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => <Chueokcard key={post.id} post={post} isPublicTab={activeTab === 'public'} />)
      ) : (
        <div className={styles.noPosts}>
          <p>{noPostsMessage}</p>
          <p>{suggestCreatePost}</p>
        </div>
      )}
    </div>
  );
}

export default Chueoklist;
