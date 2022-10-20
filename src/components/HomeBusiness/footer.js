import React from "react";
import styles from '../../css/styles.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import instagram from '../assets/images/instagram-ic.svg'
import facebook from '../assets/images/facebook-ic.svg'
import twitter from '../assets/images/twitter-ic.svg'

function Footer() {

  return (
    <>
    <div className={styles.footer}>
        
        <div className={styles.biggerFooter}>
            <hr className={styles.horizontal}></hr>
                <div className={styles.frame152}>
                    <div className={styles.frame151}>
                        <div className={styles.footerLogo}></div>
                    </div>
                    <div className={styles.frame150}>
                        <div className={styles.socialMedia}>
                            <a href="#" className={styles.a}> 
                            <img src ={instagram}/>
                            </a>
                            <a href="#"  className={styles.a}> 
                            <img src ={facebook}/>
                            </a>
                            <a href="#"  className={styles.a}> 
                            <img src ={twitter}/>
                            </a>
                        </div>
                        <div className={styles.extra}>
                            2015-2022 Taxaide Technologies limited. All right reserved

                        </div>
                    </div>

                </div>
                <div className={styles.othersIng}>
                    <div className={styles.aboutUsSection}>
                        <div className={styles.innerShite}>
                           <strong>
                           About Us
                            </strong> 
                        </div>
                        <div className={styles.menu}>
                            <a style={{textDecoration:'none', color:'black', fontSize:'13px'}} href="#">About </a>
                            <a style={{textDecoration:'none', color:'black', fontSize:'13px'}} href="#">Legal & Privacy</a>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.serviceTitle}>
                            <strong> 
                                Products
                            </strong>

                        </div>
                        <div className={styles.menu}>
                            <a style={{textDecoration:'none', color:'black', fontSize:'13px'}} href="#">TBook </a>
                            <a style={{textDecoration:'none', color:'black', fontSize:'13px'}} href="#">TaxiTWithHold</a>
                            <a style={{textDecoration:'none', color:'black', fontSize:'13px'}} href="#">TaxiTPayroll</a>
                        </div>

                    </div>

                </div>
            </div>
           
        
    </div>
    </>
  );
}

export default Footer;
