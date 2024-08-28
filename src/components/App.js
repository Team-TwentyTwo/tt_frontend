import Group from "../pages/Group";
import Makegroup from "../pages/Makegroup";
import Privategroup from "../pages/Privategroup";
import styles from './App.module.css';
import Chueok from "../pages/Chueok";
import Privatechueok from "../pages/Privatechueok";
import Notfoundpage from "../pages/Notfoundpage";



function App() {
  return (
    <div className={styles.appContainer}>
      <Notfoundpage />
    </div>
  );
}

export default App;