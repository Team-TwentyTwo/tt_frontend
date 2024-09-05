import { useState } from 'react';
import styles from './GroupDetail.module.css';
import Header from '../components/Header';
import Groupinfo from '../components/Groupinfo';
import Chueoklist from '../components/Chueoklist';
import Menubar2 from '../components/Menubar2';

function GroupDetail() {
  const [activeTab, setActiveTab] = useState('public');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');

  const groupData = {
    id: 123,
    name: "그룹 이름",
    imageURL: "https://example.com/image.jpg",
    isPublic: true,
    likeCount: 0,
    badges: ["badge1", "badge2"],
    postCount: 0,
    createdAt: "2024-02-22T07:47:49.803Z",
    introduction: "이 그룹은..."
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Groupinfo group={groupData} />
        <h1 className={styles.title}>추억 목록</h1>
        <Menubar2 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          setSortBy={setSortBy} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
        />
        <Chueoklist groupId={groupData.id} />
      </div>
    </>
  );
}

export default GroupDetail;
