import React from "react";
import styles from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={styles.dialog}>
          <NavLink to={`/dialogs/${props.id}`}>
            <img src={props.image} className={styles.photo} alt="ava"></img>
            {props.name}
          </NavLink>
        </div>
    )
}

export default Dialog;