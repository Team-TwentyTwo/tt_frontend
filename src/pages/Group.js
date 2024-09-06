import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";  
import Header from '../components/Header';
import Menubar from '../components/Menubar';
import mbutton from '../assets/group_makebtn_m.svg';
import styles from './Group.module.css';
import Grouplist from '../components/Grouplist';

function Group() {
  const [activeTab, setActiveTab] = useState('public');
  const [sortBy, setSortBy] = useState('latest');  
  const [searchTerm, setSearchTerm] = useState('');  
  const [groupCards, setGroupCards] = useState([]);  
  const [filteredCards, setFilteredCards] = useState([]); 
  const [loading, setLoading] = useState(true);  
  const [page, setPage] = useState(1);  
  const [totalPages, setTotalPages] = useState(1);  

  const navigate = useNavigate();  
  const location = useLocation();

  const handleButtonClick = () => {
    navigate('/makegroup');
  };

  useEffect(() => {
    if (location.state?.reset) {
      setActiveTab('public');  
      setSortBy('latest');     
      setSearchTerm('');       
      setPage(1);              
      fetchGroups(true);       
      navigate('/', { state: {} });
    }
  }, [location.state]);

  const fetchGroups = async (reset = false) => {
    setLoading(true);  
    try {
      const response = await axios.get('https://zogakzip.onrender.com/api/groups', {
        params: {
          page: page,
          pageSize: 8,  
          sortBy: sortBy,
          isPublic: activeTab === 'public',  
        }
      });

      if (reset) {
        setGroupCards(response.data.data);
        setFilteredCards(response.data.data); 
      } else {
        const newCards = [...groupCards, ...response.data.data];
        setGroupCards(newCards);
        setFilteredCards(newCards); 
      }

      setTotalPages(response.data.totalPages);  
    } catch (error) {
      console.error("그룹 목록을 가져오는 중 오류 발생:", error);
    } finally {
      setLoading(false);  
    }
  };

  useEffect(() => {
    fetchGroups(true); 
  }, []);

  useEffect(() => {
    setPage(1);  
    fetchGroups(true);  
  }, [sortBy]);

  useEffect(() => {
    setPage(1);  
    fetchGroups(true);  
  }, [activeTab]);

  useEffect(() => {
    if (page > 1) {
      fetchGroups();
    }
  }, [page]);

  const filterGroups = () => {
    if (searchTerm.trim() === "") {
      setFilteredCards(groupCards); 
    } else {
      const filtered = groupCards.filter((group) =>
        group.name.toLowerCase().includes(searchTerm.toLowerCase())  
      );
      setFilteredCards(filtered);  
    }
  };

  useEffect(() => {
    if (searchTerm) {
      filterGroups();  
    }
  }, [searchTerm]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);  
    }
  };

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
      {loading ? ( 
        <div className={styles.loadingText}>로딩 중...</div>
      ) : (
        <div>
          <Grouplist cards={filteredCards} activeTab={activeTab} />  
          {filteredCards.length !== 0 && filteredCards.length % 8 === 0 && page < totalPages && (
            <div className={styles.loadMoreContainer}>
              <button className={styles.loadMoreButton} onClick={handleLoadMore}>
                더보기
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Group;
