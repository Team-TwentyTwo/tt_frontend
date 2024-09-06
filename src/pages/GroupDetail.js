import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './GroupDetail.module.css';
import Header from '../components/Header';
import Groupinfo from '../components/Groupinfo';
import Chueoklist from '../components/Chueoklist';
import Menubar2 from '../components/Menubar2';

function GroupDetail() {
  const [activeTab, setActiveTab] = useState('public');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');

  const location = useLocation();
  const { group } = location.state;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Groupinfo group={group} />
        <h1 className={styles.title}>추억 목록</h1>
        <Menubar2 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          setSortBy={setSortBy} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
        />
        <Chueoklist groupId={group.id} />
      </div>
    </>
  );
}

export default GroupDetail;
