import React from 'react'
import styles from '../.ExternalCss/mainSign.module.css'
import img from '../assets/images/ChooseSign.png'

const MainSign = () => {
    return (
        <div className={`${styles["main-container"]}`}>
            <div className={`${styles["main-container-left"]}`}>
                <img className={`${styles["main-img"]}`} src={img} alt="" />
            </div>
            <div className={`${styles["main-container-right"]}`}>
                <div className={`${styles["choose-sign-up"]}`}>
                    <p>Tutor</p>
                </div>
                <div className={`${styles["choose-sign-up"]}`}>
                    <p>Tutor</p>
                </div>
                <div className={`${styles["choose-sign-up"]}`}>
                    <p>Tutor</p>
                </div>
            </div>
        </div>
    )
}

export default MainSign