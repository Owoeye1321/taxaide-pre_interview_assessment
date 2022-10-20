import React from "react";
import styles from '../../css/styles.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import image from '../assets/images/image\ 38.svg'

function Banner() {

  return (
    <>
    <div className={styles.allBanner}>
        <div className={styles.somethingNew}>
                <p>Send Funds</p>
                <p style={{fontSize:'25px',marginTop:'-30px',fontStyle:'normal'}}>Remit taxes</p>
                <p style={{fontSize:'25px',marginTop:'-30px'}}>Buy Limit</p>
                <button className={styles.create_new_profile} style={{background:'white',fontSize:'20px',color:'green'}}>Get Started</button>
        </div>
        <div style={{float:'right'}}>
            <img src={image} style={{height:'422px', width:'1000px'}}/>

        </div>
    </div>
    </>
  );
}

export default Banner;
