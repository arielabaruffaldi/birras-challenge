import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByMail, logOutUser } from "./../../store/actions/";
import Option from "./../Option/Option";
//https://react-icons.github.io/react-icons/icons?name=bi
import { BiHomeAlt, BiBeer, BiSun, BiUserPlus, BiArrowBack } from "react-icons/bi";

import styles from "./Aside.module.scss";

const optionsList = [
    {
        name: "Home",
        href: "/",
        Icon: <BiHomeAlt size={"2rem"} color={"#01A3FF"} />,
        scope: ["admin", "user"],
    },
    {
        name: "Proviciones",
        href: "/proviciones",
        Icon: <BiBeer size={"2rem"} color={"#01A3FF"} />,
        scope: ["admin"],
    },
    {
        name: "Clima",
        href: "/clima",
        Icon: <BiSun size={"2rem"} color={"#01A3FF"} />,
        scope: ["admin", "user"],
    },
    {
        name: "Meet",
        href: "/meet",
        Icon: <BiUserPlus size={"2rem"} color={"#01A3FF"} />,
        scope: ["admin"],
    },
    {
        name: "Meet",
        href: "/meet/:id",
        Icon: <BiUserPlus size={"2rem"} color={"#01A3FF"} />,
        scope: ["user"],
    }
];

const Aside = () => {
    const state = useSelector((state) => state.general);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserByMail())
    }, [dispatch])
    
    return (
        <aside className={styles.Aside}>
            <div className={styles.AsideSession}>
                <div className={styles.AsideUserIcon}>
                    <BiBeer size={"4rem"} />
                </div>
                <div className={styles.AsideUserData}>
                    <h3>{state.userData.name}</h3>
                    <span>{state.userData.lastName}</span>
                </div>
            </div>
            <nav>
                <ul className={styles.OptionsContainer}>
                    {optionsList.map((option, value) =>
                        option.scope.includes(state.userData.role) ? (
                            <Option
                                key={value}
                                name={option.name}
                                href={option.href}
                                icon={option.Icon}
                            />
                        ) : null
                    )}
                </ul>
            </nav>
            <div className={styles.AsideFooter} onClick={dispatch(logOutUser)}>
                <label>
                    <BiArrowBack/>
                    Cerrar sesión
                </label>
            </div>
        </aside>
    )
}

export default Aside;