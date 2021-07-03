import styles from './css.module.css'
import React from 'react'

export default function BBar( ) {
    
    return (
        <div>
            <div className="block">
                <div className={styles.bouncing_bar}>
                    <div class={styles.line}></div>
                    <div class={styles.line}></div>
                    <div class={styles.line}></div>
                    <div class={styles.line}></div>
                </div>

            </div>
        </div>
    )
}