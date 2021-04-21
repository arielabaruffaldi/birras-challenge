import React, { useState } from 'react';
import { BiDotsVerticalRounded, BiCalendarEdit, BiXCircle, BiX} from "react-icons/bi";
import styles from "./Tooltip.module.scss";

const ToolTip = ({ editar, eliminar }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={styles['ToolTip']} onClick={() => setIsOpen(!isOpen)}>
                <BiDotsVerticalRounded size={"1.2rem"} />
            </div>
            {isOpen &&
                <div className={styles['ToolTip--content']}>
                    {<BiX onClick={()=>setIsOpen(false)}className={styles['ToolTip--closeIcon']} color={"var(--negro)"} size={"1.2rem"} />}
                    {editar &&
                        <div className={`${styles['ToolTip--item']} ${styles['ToolTip-Editar']}`}>
                            <span>editar</span>
                        </div>
                    }
                    {eliminar &&
                        <div className={`${styles['ToolTip--item']} ${styles['ToolTip-Eliminar']}`}>
                            <span>eliminar</span>
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default ToolTip;