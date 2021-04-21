import React from "react";
import ToolTip from "../ToolTip/Tooltip";
import styles from "./Card.module.scss";

const Card = ({ children, editar, eliminar, customClass, addCard, action,  }) => {
    return (
        <div onClick={action} className={`${styles.Card} ${customClass ? customClass : " "} ${addCard ? styles.addCard : ""}`}>
            {editar || eliminar ? <ToolTip editar={editar} eliminar={eliminar} /> : null}
            {addCard &&
                <>
                <span>+</span>
                </>
            }
            {children}
        </div>
    )
}

export default Card;