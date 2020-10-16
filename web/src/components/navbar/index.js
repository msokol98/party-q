import React from 'react';
import styles from './styles.module.css';
import { oauthHost } from 'config';

const Nav = ({ user, logout }) => (

    <div className={styles.container}>

        <div onClick={() => window.location.replace("/")} className={styles.org}>
            <img alt="icon" src="icon.png" width="30px" />
            <h1 className={styles.brand}>Party Q</h1>
            <img alt="icon" src="icon.png" width="30px" />
        </div>

        <input type="checkbox" id={styles.navToggle} className={styles.navToggle}/>

        <nav className={styles.nav}>
            <ul>
                
                <li><a href="/party">My Party</a></li>

                {!user ?

                    <li>
                        <div className={styles.navAuth} onClick={() => window.location=`${oauthHost}/login`}>
                            <a>Login through Spotify</a>
                        </div>
                    </li>
                : 
                    <li>
                        <div className={styles.navAuth}  onClick={logout} variant="link">
                            <a>Logout</a>
                        </div>
                    </li>
                }



            </ul>
        </nav>
        
        <label htmlFor={styles.navToggle} className={styles.navToggleLabel}>
            <span></span>
        </label>
    </div>
    
    
)


export default Nav;