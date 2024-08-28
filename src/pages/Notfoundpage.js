import React from 'react';
import Header from '../components/Header';
import notfound from '../assets/404_404img.svg'
import styles from '../pages/Notfoundpage.module.css'

function Notfoundpage() {
    return (
      <>
            <Header></Header>

            <div className={styles.container} >
                <img src={notfound} alt="404" /> 
            </div>

        </>
    );
  }
  
  export default Notfoundpage;