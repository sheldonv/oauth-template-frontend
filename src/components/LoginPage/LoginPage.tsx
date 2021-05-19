import React from 'react'
import googleImage from '../../assets/googleImage.png';
import gitHubImage from '../../assets/github.jpg'
import twitterImage from '../../assets/twitter.png'
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const googleLogin = () => {
        window.open("https://oauth-template.herokuapp.com/auth/google", "_self") 
    }

    const gitHubLogin = () => {
        window.open("https://oauth-template.herokuapp.com/auth/github", "_self") 
    }

    


    return (
        <div className={styles.loginPage}>
            <h1>Login Form</h1>
            <div className={styles.loginForm}>
                <div className={styles.googleContainer} onClick={googleLogin}>
                    <img src={googleImage} alt="googleLogo" />
                    <p>Login With Google</p>
                </div>

                <div className={`${styles.googleContainer} ${styles.githubContainer}`} onClick={gitHubLogin}>
                    <img src={gitHubImage} alt="gitHubLogo" />
                    <p>Login With GitHub</p>
                </div>
            </div>
            
        </div>
        
    )
}

export default LoginPage
