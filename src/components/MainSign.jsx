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
                    <div>
                        <button>Tutor</button>
                    </div>
                </div>
                <div className={`${styles["choose-sign-up"]}`}>
                    <div>
                        <button>Student</button>
                    </div>
                </div>
                <div className={`${styles["choose-sign-up"]}`}>
                    <div>
                        <button>Parents</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSign

