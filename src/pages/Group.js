import { useState, useEffect } from "react";
import axios from "axios";  // axios 추가
import Header from '../components/Header';
import Menubar from '../components/Menubar';
import mbutton from '../assets/group_makebtn_m.svg';
import styles from './Group.module.css';
import Grouplist from '../components/Grouplist';
import Pagination from '../components/Pagination'; // 페이지네이션 컴포넌트 추가

function Group() {
  const [activeTab, setActiveTab] = useState('public');
  const [sortBy, setSortBy] = useState('latest');  
  const [searchTerm, setSearchTerm] = useState('');  
  const [groupCards, setGroupCards] = useState([]);  // 그룹 데이터 상태
  const [loading, setLoading] = useState(true);  // 로딩 상태
  const [page, setPage] = useState(1);  // 현재 페이지
  const [totalPages, setTotalPages] = useState(1);  // 총 페이지 수

  const handleButtonClick = () => {
    console.log("그룹 만들기 요청");
  };

  useEffect(() => {
    // 그룹 목록을 가져오는 함수
    const fetchGroups = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://zogakzip.onrender.com/api/groups', {
          params: {
            page: page,
            pageSize: 5,  // 한 페이지에 표시할 그룹 수
            sortBy: sortBy,
            keyword: searchTerm,
            isPublic: activeTab === 'public',
          }
        });
        setGroupCards(response.data.data);
        setTotalPages(response.data.totalPages);  // 총 페이지 수 설정
      } catch (error) {
        console.error("그룹 목록을 가져오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, [page, sortBy, searchTerm, activeTab]);  // 페이지, 정렬 기준, 검색어, 공개 여부 변경 시마다 호출

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
        <div> {/* 로딩 중일 때는 빈 화면 */}
        </div>
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