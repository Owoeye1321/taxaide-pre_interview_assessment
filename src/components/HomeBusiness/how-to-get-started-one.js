import React from "react";
import styles from '../../css/styles.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import image from '../assets/images/image\ 39.svg'


function ThirdScroll() {

  return (
    <>
  <div className={styles.parent}>
    <div className={styles.frame2938}>
            <div className={styles.borders}> 
            
                <div className={styles.itemizing_one} style={{marginRight:'5px solid green'}}>
                    <strong>Pay bills</strong>
                    <p>Paying your bills has never been so easy</p>
                </div>
            
            
                <div className={styles.itemizing_two} >
                    <strong>Buy Airtiem & Data</strong>
                    <p>Never get caught with low airtime and data again</p>
                </div>
            
            
                <div className={styles.itemizing_three} >
                    <strong>Money Transfer</strong>
                    <p>Transferring Money is now hassle-free</p>
                </div>
            
            
                <div className={styles.itemizing_four} >
                    <strong>Pay Toll Fee</strong>
                    <p>Never worry about a getting a toll ticket again </p>
                </div>
            
            </div>
       
    </div>
    <div className={styles.rightPanel}>
        <div className={styles.background}>
            <div className={styles.image}>
                <img src={image} style={{width:'400px',height:'450px'}}/>
            </div>
        </div>
    </div>

  </div>
    </>
  );
}

export default ThirdScroll;
