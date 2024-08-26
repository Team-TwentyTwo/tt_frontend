import { useState } from "react";
import Header from '../components/Header';
import Menubar from '../components/Menubar';
import mbutton from '../assets/group_makebtn_m.svg';
import styles from './Group.module.css';
import Grouplist from '../components/Grouplist';

function Group() {
  const [activeTab, setActiveTab] = useState('public');
  const [sortBy, setSortBy] = useState('latest');  
  const [searchTerm, setSearchTerm] = useState('');  

  const handleButtonClick = () => {
    console.log("그룹 만들기 요청");
  };

  const groupCards = [
    {
      id: 1,
      name: '달봉이네 가족',
      imageURL: '/path/to/image.jpg',
      isPublic: true,
      likeCount: 1500,
      badgesCount: 2,
      postCount: 8,
      createdAt: '2024-02-22T07:47:49.803Z',
      introduction: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.'
    },
    {
      id: 2,
      name: '하윤이네 가족',
      imageURL: '/path/to/image.jpg',
      isPublic: true,
      likeCount: 1104,
      badgesCount: 3,
      postCount: 6,
      createdAt: '2003-02-22T07:47:49.803Z',
      introduction: '하윤이네 가족 소개입니다.'
    }
  ];

  const filteredCards = groupCards
    .filter(card => 
      activeTab === 'public' ? card.isPublic : !card.isPublic
    )
    .filter(card => 
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'latest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'mostPosted':
          return b.postCount - a.postCount;
        case 'mostLiked':
          return b.likeCount - a.likeCount;
        case 'mostBadge':
          return b.badgesCount - a.badgesCount;
        default:
          return 0;
      }
    });

  return (
    <>
      <Header>
        <div className={styles.buttonContainer}>
          <img 
            src={mbutton} 
            alt="그룹 만들기 버튼" 
            className={styles.makeButton} 
            onClick={handleButtonClick} 
          />
        </div>
      </Header>
      <div>
        <Menubar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setSortBy={setSortBy} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div>
        <Grouplist cards={filteredCards} />
      </div>
    </>
  );
}

export default Group;
