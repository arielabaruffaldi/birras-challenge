import React, { useState } from 'react';
import styles from "./Modal.module.scss";
import { setModalOpen, setError } from "./../../../store/actions/GeneralActions";
import { useDispatch } from "react-redux";
import { BiX } from "react-icons/bi";

const Modal = (props) => {
    const dispatch = useDispatch();
    const [modalClose, setModalClose] = useState(false);

    const closeModal = () => {
        setModalClose(true);
        setTimeout(() => {
            dispatch(setModalOpen(false, props.typeModal));
            dispatch(setError(false));
        }, 600);
    };
    return (
        <>
            <div
                onClick={(e) => closeModal(e)}
                className={
                    modalClose ? `${styles['Modal--container']} ${styles['container-out']}` : styles['Modal--container']
                }
            >
            </div>
            <div className={styles["Modal--wrapper"]}>
                <div className={modalClose ? `${styles["Modal--content"]} ${styles["out"]}` : styles["Modal--content"]}>
                    <div className={styles["Modal--close"]}>
                        <span onClick={(e) => closeModal(e)}>
                           <BiX size={"2rem"} color={"var(--gris2)"}></BiX>
                        </span>
                    </div>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Modal;