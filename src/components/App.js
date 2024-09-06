import Group from "../pages/Group";
import Makegroup from "../pages/Makegroup";
import Privategroup from "../pages/Privategroup";
import styles from './App.module.css';
import Chueok from "../pages/Chueok";
import Privatechueok from "../pages/Privatechueok";
import Notfoundpage from "../pages/Notfoundpage";
import Removechueok from "./Removechueok";
import Removecomment from "./Removecomment";
import Editcomment from "./Editcomment";
import Registercomment from "./Registercomment";
import Uploadchueok from "./Uploadchueok";
import Editchueok from "./Editchueok";
import Uploadmain from "../pages/Uploadmain";


function App() {
  return (
    <div className={styles.appContainer}>
      <Chueok/>
    </div>
  );
}

export default App;