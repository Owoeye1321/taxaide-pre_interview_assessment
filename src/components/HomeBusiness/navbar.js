import React from "react";
import styles from '../../css/styles.module.css'


function Navigation() {

  return (
    <div className={styles.navbar}>
      <div className={styles.frame2938}>
        <div className={styles.logo}></div>
        <div className={styles.firstNavItem}>
          <div className={styles.business}>
          <a href='#' className={styles.a}>  <strong>
              For Individuals
            </strong>
            </a>
          </div>
          <div className={styles.someOtherBusiness}>
          <a href='#' className={styles.a}> 
          <strong  className={styles.navText}>
              For Business
            </strong>
            </a>
          </div>
        
      </div>
      </div>

      <div className={styles.section_two}>
        <div className={styles.aboutUs}>
         <a href='#' className={styles.a}><strong >
            About Us
          </strong>
          </a> 
        </div>
        <div className={styles.contact}>
        <a href='#' className={styles.a}> <strong>
            Contact
          </strong>
          </a> 
        </div>
        <div className={styles.vertical_line}></div>
        <div className={styles.loginLink}>
        <a href='#' className={styles.a}> <strong>
            Login
          </strong>
          </a> 
        </div>
        <button className={styles.create_new_profile}>Create free account</button>
      </div>
        
       
    </div>
  );
}

export default Navigation;
