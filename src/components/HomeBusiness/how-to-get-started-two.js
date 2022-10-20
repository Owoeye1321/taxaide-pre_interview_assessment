import React from "react";
import styles from '../../css/styles.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import image from '../assets/images/Google\ Pixel\ 5.svg'
import appStore from '../assets/images/appstore.svg'
import googleplay from '../assets/images/googleplay.svg'


function FourthScroll() {

  return (
    <>
    <div className={styles.gettingStarted}>
       <div className={styles.leftPanel}>
        <center>
        <img src = {image} style ={{height:'490px', marginTop:'60px'}}/>
        </center>
       </div>
       <div className={styles.newPanel}>
        <strong style={{fontSize:'38px', weigth:'600'}}>
            Transact on the go
        </strong>
        <p>Stay on top of your business with our easy-to-use app</p>
        <button className={styles.create_new_profile}>Get Started</button>
        <div className={styles.newDiv}>
        <img src = {appStore}  style={{marginRight:'20px'}}/>
        <img src = {googleplay}/>
        </div>
       </div>
    </div>
    </>
  );
}

export default FourthScroll;
