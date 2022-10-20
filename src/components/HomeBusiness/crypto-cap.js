import React from "react";
import styles from '../../css/styles.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import moneyTransfer from '../assets/images/Money\ Transfer.svg'
import Security from '../assets/images/Security.svg'
import emei from '../assets/images/EMI.svg'


function SecondScroll() {

  return (
    <>
   <div className={styles.container}>
    <div className={styles.futureTitle}>
        <center>
            <strong style = {{fontSize:'36px', fontWeight:'600'}}>
            Payment tools designed for you
        </strong>
        <p style={{fontSize:'18px',fontWeight:'400'}}>Explore payment feature that provide you with every possible solution</p>
        </center>
        
    </div>
    <div className={styles.feature}>
        <div className={styles.feature_one}>
            <div className={styles.firstItem}>
                <div className={styles.moneyTransfer}>
                    <img src ={moneyTransfer}/>
                </div>
                <div className={styles.frame109}>
                    <strong>
                        User Friendly
                    </strong>
                    <p>Highly responsive and easy to negotiate</p>
                </div>
            </div>
        </div>
        <div className={styles.feature_two}>
            <div className={styles.feature_two_item}>
                <div className={styles.security}>
                <img src ={Security}/>
                </div>
                <div className={styles.frame109}>
                    <p>Your data is secured. It is continuously monitored, edited and stored in an encrypted format</p>
                </div>
            </div>
        </div>
        <div className={styles.feature_three}>
            <div className={styles.feature_three_item}>
                <div className={styles.security}>
                <img src ={emei}/>
                </div>
                <div className={styles.frame109}>
                    <p>Transaction takes only a few seconds - It's convinient and safe</p>
                </div>
            </div>
        </div>
        

    </div>
   </div>

    </>
  );
}

export default SecondScroll;
