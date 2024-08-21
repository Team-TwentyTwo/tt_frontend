import { useState } from 'react';
import styles from './Menubar.module.css';
import searchIcon from "../assets/icon_search.svg";
import sortIcon from "../assets/icon_dropdown.svg";

function Menubar({ activeTab, setActiveTab }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.menubarContainer}>
      <div className={styles.tabBar}>
        <button
          className={`${styles.tabButton} ${activeTab === 'public' ? styles.active : ''}`}
          onClick={() => handleTabClick('public')}
        >
          공개
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'private' ? styles.active : ''}`}
          onClick={() => handleTabClick('private')}
        >
          비공개
        </button>
      </div>
      <div className={styles.searchContainer}>
        <img src={searchIcon} alt="Search Icon" className={styles.searchIcon} />
        <input
        type="text"
        placeholder="그룹명을 검색해 주세요"
        className={styles.searchBar}
        value={searchTerm}
        onChange={handleSearchChange}
        />
      </div>
      <div className={styles.sortFilter}>
        공감순
        <img src={sortIcon} alt="Sort Icon" className={styles.sortIcon} />
      </div>
    </div>
  );
}

export default Menubar;
