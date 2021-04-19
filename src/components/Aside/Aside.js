import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sprite from "./../../assets/icons/iconsprite.svg";
import userIcon from "./../../assets/icons/user.svg";
import { getUser } from "./../../store/actions/";
import Option from "./../Option/Option";

import styles from "./Aside.module.scss";

const optionsList = [
    {
        name: "Home",
        href: "/",
        icon: `${sprite}#home`,
        scope: ["admin", "user"],
    },
    {
        name: "Provisiones",
        href: "/provisiones",
        icon: `${sprite}#transacciones`,
        scope: ["admin"],
    },
    {
        name: "Temperatura",
        href: "/temperatura",
        icon: `${sprite}#usuarios`,
        scope: ["admin", "user"],
    },
    {
        name: "Meet up",
        href: "/meet",
        icon: `${sprite}#usuarios`,
        scope: ["admin"],
    },
    {
        name: "Meet up",
        href: "/meet/:id",
        icon: `${sprite}#transacciones`,
        scope: ["user"],
    }
];

const Aside = () => {
    const state = useSelector((state) => state.general);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser())
    }, [])
    console.log("entra")
    console.log(state.userData.role)
    return (
        <aside className={styles.Aside}>
            <div className={styles.AsideSession}>
                <div className={styles.AsideUserIcon}>
                    <img src={userIcon} alt="Avatar usuario" />
                </div>
                <div className={styles.AsideUserData}>
                    <h3>Hola,</h3>
                    <span>{state.userData.name}</span>
                </div>
            </div>
            <ul className={styles.OptionsContainer}>
                {optionsList.map((option, value) =>
                    option.scope.includes(state.userData.role) ? (
                        <Option
                            key={value}
                            name={option.name}
                            href={option.href}
                            icon={option.icon}
                        />
                    ) : null
                )}
            </ul>
            <div className={styles.AsideFooter}>
                <label>
                    <svg className="">
                        <use href={sprite + "#cerrarsesion"}></use>
                    </svg>
                    Cerrar sesión
                </label>
            </div>
        </aside>
    )
}

export default Aside;