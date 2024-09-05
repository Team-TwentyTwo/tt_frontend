import styles from './Chueoklist.module.css';
import Chueokcard from './Chueokcard';

function Chueoklist({ groupId, activeTab, searchTerm = '' }) {
  const posts = [
    {
      id: 1,
      groupId: 123,
      nickname: "User1",
      title: "First Memory",
      content: "This is the first memory.",
      imageURL: "/images/memory1.jpg",
      tags: ["fun", "happy"],
      location: "Seoul",
      moment: "2024-02-21",
      isPublic: true,
      likeCount: 10,
      commentCount: 2,
      createdAt: "2024-02-22T07:47:49.803Z",
    }
  ]; 

  const filteredPosts = posts
    .filter(post => activeTab === 'public' ? post.isPublic : !post.isPublic)
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
