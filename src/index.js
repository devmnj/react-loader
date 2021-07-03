import styles from './css.module.css'
import React from 'react'
export default function ReactLoader(props) {
  var element;
  const pad = { paddingLeft: 40, paddingRight: 40, paddingTop: 30, paddingBottom: 30 }
  if (props.type === 'BouncingBars') {

    element =
      <div className={styles.bouncing_bar}>
        <div class={styles.line}></div>
        <div class={styles.line}></div>
        <div class={styles.line}></div>
        <div class={styles.line}></div>
      </div>

  }
  else if (props.type === 'Circle') {
    element = <div className="">
      <div className={styles.circle}></div>
    </div>
  }
  else if (props.type === 'Dots') {
    element = <div className=" ">
      <div className={styles.dots}></div>
    </div>
  }
  else if (props.type === 'SpinnerDots') {
    element = <div className=" ">
      <div className={styles.spinner_dots}></div>
    </div>
  }
  else if (props.type === 'TwinCircles') {
    element = <div className=" ">
      <div className={styles.twin_circles}></div>
    </div>
  }
  else if (props.type === 'Wave') {
    element = <div className="">
      <div className={styles.wave}></div>
    </div>
  }
  else {
   element =   <div className="   ">
      <div className={styles.focus}></div>
    </div>
  }

  return (
    <div style={pad} >
      {element}
    </div>
  )
}

