import React from "react";
import styles from '../../css/styles.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from "./navbar";


function Frame() {

  return (
    <div className="m-5">
    <div className={styles.firstBigFrame}>
     <Navigation/>
     <div className={styles.headerTitle}>
        <strong className={styles.headerFirstText}> 
        Secure & seamless <br></br>online transactions 
        </strong>
        <p style={{color:'white'}}>Providing you with the best online payment experience </p>
          <button className={styles.createFreeAccount}><p className={styles.sending}>
            <center>
            Create free account
             </center>
             </p>
             </button>
     </div>
     <div className={styles.next}>
     </div>
     <div className={styles.eclipse_three}></div>
     <div className={styles.eclipse_five}></div>
     <div className={styles.entertainment}>
        <div className={styles.eclipse_one}></div>
     </div>
    
    </div>
    </div>
  );
}

export default Frame;
