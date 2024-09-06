import { Routes, Route } from 'react-router-dom';  
import Group from "../pages/Group";
import GroupDetail from "../pages/GroupDetail";
import Makegroup from "../pages/Makegroup";  
import Privategroup from "../pages/Privategroup";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Routes>  
        <Route path="/" element={<Group />} />
        <Route path="/group-detail" element={<GroupDetail />} />
        <Route path="/makegroup" element={<Makegroup />} />  
        <Route path="/privategroup" element={<Privategroup />} />
      </Routes>
    </div>
  );
}

export default App;
