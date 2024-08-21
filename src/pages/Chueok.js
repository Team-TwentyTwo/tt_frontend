import chueokflowericon from '../assets/icon_flower.svg';
import chueokline from '../assets/chueok_line.svg';
import chueokfish from '../assets/chueok_fish.png';
import commentbtnImg from '../assets/chueok_commentbtn.svg';
import Likebutton from '../components/Likebutton';  // Likebutton 경로 수정

function Chueok() {
  return (
    <>
      <div>
        <h1>인천 앞바다에서 무려 60cm 월척을 낚다!</h1>
      </div> 
      <div>
        <h2>달봉이 아들 | 공개</h2>
      </div>
      <h3>추억 수정하기 추억 삭제하기</h3>
      <div>
        <h4>#인천 #낚시</h4>
      </div>
      <div>
        <h4>인천 앞바다 · 24.01.19 18:00</h4> 
      </div>
      <div>
        <img src={chueokflowericon} alt="추억공감아이콘" />
      </div>
      <div>
        <Likebutton />  {/* Likebutton 컴포넌트 사용 */}
      </div>
      <div>
        <p>
          인천 앞바다에서 월척을 낚았습니다!<br/>
          가족들과 기억에 오래도록 남을 멋진 하루였어요 가족들과 기억에 오래도록 남을 멋진 하루였어요 가<br/>
          족들과 기억에 오래도록 남을 멋진 하루였어요<br/>
          인천 앞바다에서 월척을 낚았습니다!<br/>
          가족들과 기억에 오래도록 남을 멋진 하루였어요<br/>
          인천 앞바다에서 월척을 낚았습니다!
        </p>
      </div>
      <div>
        <img src={chueokline} alt="추억상세페이지라인" />
      </div>
      <div>
        <img src={chueokfish} alt="추억상세페이지기본사진" /> 
      </div>
      <div>  
        <img src={commentbtnImg} alt="button" />
      </div>
    </>
  );
}

export default Chueok;
