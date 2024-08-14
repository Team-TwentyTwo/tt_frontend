import chueokline from '../assets/chueok_line';
import chueokfish from '../assets/chueok_fish';
import commentbtnImg from '../assets/chueok_commentbtn';
import flowericon from '../assets/chueok_chueok_flowericon';
import commenticon from '../assets/chueok_chueok_commenticon';

function Chueok() {
  return (
    <>

    <div>
      <img src={flowericon} alt="추억상세페이지공감아이콘" />
      <img src={commenticon} alt="추억상세페이지댓글아이콘" />
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