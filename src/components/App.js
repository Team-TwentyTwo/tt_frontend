import Group from "../pages/Group";
import GroupDetail from "../pages/GroupDetail";
import Makegroup from "../pages/Makegroup";
import Privategroup from "../pages/Privategroup";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Group />
    </div>
  );
}

export default App;