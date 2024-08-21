import { useState } from "react";
import Header from "../components/Header";
import Menubar from "../components/Menubar";
import mbutton from "../assets/group_makebtn_m.svg";
import styles from './Group.module.css';
import Grouplist from "../components/Grouplist";

function Group() {
  const [activeTab, setActiveTab] = useState('public');

  const handleButtonClick = () => {
    console.log("그룹 만들기 요청");
  };

  const groupCards = [
    {
      status: 'D+265  |  공개',
      name: '달봉이네 가족',
      description: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
      badges: '획득 배지 2, 추억 8, 그룹 공감 1.5K'
    },
    {
      status: 'D+265  |  공개',
      name: '달봉이네 가족',
      description: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
      badges: '획득 배지 2, 추억 8, 그룹 공감 1.5K'
    },
    {
      status: 'D+265  |  공개',
      name: '달봉이네 가족',
      description: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
      badges: '획득 배지 2, 추억 8, 그룹 공감 1.5K'
    },
    {
      status: 'D+265  |  공개',
      name: '달봉이네 가족',
      description: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
      badges: '획득 배지 2, 추억 8, 그룹 공감 1.5K'
    },
    {
      status: 'D+265  |  공개',
      name: '달봉이네 가족',
      description: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
      badges: '획득 배지 2, 추억 8, 그룹 공감 1.5K'
    },
    {
      status: 'D+265  |  공개',
      name: '달봉이네 가족',
      description: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
      badges: '획득 배지 2, 추억 8, 그룹 공감 1.5K'
    },
    {
      status: 'D+265  |  공개',
      name: '달봉이네 가족',
      description: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
      badges: '획득 배지 2, 추억 8, 그룹 공감 1.5K'
    },
    {
      status: 'D+265  |  공개',
      name: '달봉이네 가족',
      description: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
      badges: '획득 배지 2, 추억 8, 그룹 공감 1.5K'
    }
  ];

  const filteredCards = groupCards.filter(card => 
    activeTab === 'public' ? card.status.includes('공개') : card.status.includes('비공개')
  );

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
        <Menubar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div>
        <Grouplist cards={filteredCards} />
      </div>
    </>
  );
}

export default Group;