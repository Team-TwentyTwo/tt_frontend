import { useState, useEffect } from 'react';
import styles from './Menubar.module.css';
import searchIcon from "../assets/icon_search.svg";
import sortIcon from "../assets/icon_dropdown.svg";

function Menubar({ activeTab, setActiveTab, setSortBy, searchTerm, setSearchTerm }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('공감순');
  const [inputValue, setInputValue] = useState(searchTerm);  

  const handleSearchChange = (e) => {
    setInputValue(e.target.value); 
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(inputValue); 
    }
  };

  useEffect(() => {
    setInputValue(searchTerm); 
  }, [searchTerm]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);  
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);  
  };

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
    setIsDropdownOpen(false);

    switch (sortOption) {
      case '최신순':
        setSortBy('latest');  
        break;
      case '게시글 많은순':
        setSortBy('mostPosted');  
        break;
      case '공감순':
        setSortBy('mostLiked');  
        break;
      case '획득 배지순':
        setSortBy('mostBadge');  
        break;
      default:
        setSortBy('latest');  
        break;
    }
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
          value={inputValue}  
          onChange={handleSearchChange}  
          onKeyPress={handleSearchKeyPress}  
        />
      </div>
      <div className={styles.sortFilter} onClick={toggleDropdown}>
        {selectedSort}
        <img src={sortIcon} alt="Sort Icon" className={styles.sortIcon} />
        {isDropdownOpen && (
          <div className={styles.dropdownMenu}>
            <div onClick={() => handleSortChange('최신순')}>최신순</div>
            <div onClick={() => handleSortChange('게시글 많은순')}>게시글 많은순</div>
            <div onClick={() => handleSortChange('공감순')}>공감순</div>
            <div onClick={() => handleSortChange('획득 배지순')}>획득 배지순</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menubar;
