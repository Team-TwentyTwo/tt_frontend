import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  
import Header from '../components/Header';
import Menubar from '../components/Menubar';
import mbutton from '../assets/group_makebtn_m.svg';
import styles from './Group.module.css';
import Grouplist from '../components/Grouplist';
import Pagination from '../components/Pagination';

function Group() {
  const [activeTab, setActiveTab] = useState('public');
  const [sortBy, setSortBy] = useState('latest');  
  const [searchTerm, setSearchTerm] = useState('');  
  const [groupCards, setGroupCards] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [page, setPage] = useState(1);  
  const [totalPages, setTotalPages] = useState(1);  

  const navigate = useNavigate();  

  const handleButtonClick = () => {
    navigate('/makegroup');
  };

  useEffect(() => {
    const fetchGroups = async () => {
      setLoading(true);  
      try {
        const response = await axios.get('https://zogakzip.onrender.com/api/groups', {
          params: {
            page: page,
            pageSize: 5,  
            sortBy: sortBy,
            keyword: searchTerm,
            isPublic: activeTab === 'public',
          }
        });
        setGroupCards(response.data.data);  
        setTotalPages(response.data.totalPages);  
      } catch (error) {
        console.error("그룹 목록을 가져오는 중 오류 발생:", error);
      } finally {
        setLoading(false);  
      }
    };

    fetchGroups();
  }, [page, sortBy, searchTerm, activeTab]);  

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
        <div></div>
      ) : (
        <div>
          <Grouplist cards={groupCards} activeTab={activeTab} />
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
      )}
    </>
  );
}

export default Group;
