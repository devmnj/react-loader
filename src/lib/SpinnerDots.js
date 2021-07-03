import styles from './css.module.css'

import React from 'react'

export default function SpinnerDots( ) {
    
    return (
        <div>
            <div className="flex        justify-center ">
                <div className={styles.spinner_dots}></div>

            </div>
        </div>
    )
}