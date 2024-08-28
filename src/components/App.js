import Group from "../pages/Group";
import Makegroup from "../pages/Makegroup";
import Privategroup from "../pages/Privategroup";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Makegroup />
    </div>
  );
}

export default App;