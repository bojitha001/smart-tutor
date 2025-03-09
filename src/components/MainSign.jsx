import React from 'react'
import styles from '../.ExternalCss/mainSign.module.css'
import img from '../assets/images/ChooseSign.png'

const MainSign = () => {
    return (
        <div className={`${styles["main-container"]}`}>
            <div className={`${styles["main-container-left"]}`}>
                <img className={`${styles["main-img"]}`} src={img} alt="" />
            </div>
            <div></div>
        </div>
    )
}

export default MainSign