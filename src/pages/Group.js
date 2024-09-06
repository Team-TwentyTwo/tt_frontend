import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [loading, setLoading] = useState(true);  
  const [page, setPage] = useState(1);  
  const [totalPages, setTotalPages] = useState(1);  

  const navigate = useNavigate();  

  const handleButtonClick = () => {
    navigate('/makegroup');
  };

  // 그룹 목록을 불러오는 함수
  const fetchGroups = async (reset = false) => {
    setLoading(true);  
    try {
      const response = await axios.get('https://zogakzip.onrender.com/api/groups', {
        params: {
          page: page,
          pageSize: 8,  // 한 번에 8개씩 불러오기
          sortBy: sortBy,
          keyword: searchTerm,
          isPublic: activeTab === 'public',  // 공개/비공개 필터링
        }
      });

      if (reset) {
        // 새로 정렬하거나 탭을 전환할 때 목록을 초기화
        setGroupCards(response.data.data);
      } else {
        // 기존 목록에 새로 불러온 그룹 카드 추가
        setGroupCards(prevCards => [...prevCards, ...response.data.data]);
      }

      setTotalPages(response.data.totalPages);  
    } catch (error) {
      console.error("그룹 목록을 가져오는 중 오류 발생:", error);
    } finally {
      setLoading(false);  
    }
  };

  // 정렬 옵션 변경 시 목록을 새로 불러오고 기존 목록 초기화
  useEffect(() => {
    setPage(1);  // 페이지를 1로 초기화
    fetchGroups(true);  // 목록 초기화 후 새로 불러오기
  }, [sortBy]);

  // 공개/비공개 탭 변경 시 목록을 새로 불러오고 기존 목록 초기화
  useEffect(() => {
    setPage(1);  // 페이지를 1로 초기화
    fetchGroups(true);  // 목록 초기화 후 새로 불러오기
  }, [activeTab]);

  // 페이지 변경 시 추가 목록 불러오기 (더보기 버튼 클릭 시)
  useEffect(() => {
    if (page > 1) {
      fetchGroups();
    }
  }, [page]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);  // 페이지 수 증가
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
        <div>로딩 중...</div>
      ) : (
        <div>
          <Grouplist cards={groupCards} activeTab={activeTab} />
          {/* 8개 이상의 카드가 로드된 경우에만 더보기 버튼 활성화 */}
          {groupCards.length % 8 === 0 && page < totalPages && (
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
