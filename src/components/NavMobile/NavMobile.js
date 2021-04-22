import React, { useState, useEffect } from 'react';
import Link from './../Link/Link';
import styles from './NavMobile.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { getUserByMail, logOutUser } from "./../../store/actions/";
import { BiArrowBack } from "react-icons/bi";

const optionsList = [
    {
        name: "Home",
        href: "/",
        scope: ["admin", "user"],
    },
    {
        name: "Proviciones",
        href: "/proviciones",
        scope: ["admin"],
    },
    {
        name: "Clima",
        href: "/clima",
        scope: ["admin", "user"],
    },
    {
        name: "Meet",
        href: "/meet",
        scope: ["admin"],
    },
    {
        name: "Meet",
        href: "/meet/:id",
        scope: ["user"],
    }
];

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollingUp, setScrollingUp] = useState(false);
    const [scrollPosition, setSrollPosition] = useState(0);
    const state = useSelector((state) => state.general);
    const dispatch = useDispatch();

    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position)
        position < scrollPosition ? setScrollingUp(true) : setScrollingUp(false)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    useEffect(() => {
        dispatch(getUserByMail())
    }, [dispatch])

    return (
        <>
            <header className={`${styles['NavMobile']} ${isOpen ? styles["navOpen"] : ""} ${!scrollingUp && scrollPosition > 50 ? styles.hiddenNav : ""}`}>
                <div className={styles["NavWrapper"]}>
                    <div className={`${styles['NavMobile--Burger']} ${isOpen ? styles["open"] : ""}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <nav className={`${styles['NavLinks']} ${isOpen ? styles["navOpen"] : ""}`}>
                    {isOpen &&
                        <ul className={`${styles['NavLinks--container']}`}>
                            {optionsList.map((link, index) => {
                                return (
                                    <>
                                        {link.scope.includes(state.userData.role) &&
                                            <li key={index} className={`${isOpen ? styles["navLinkOpen"] : ""}`}>
                                                <Link text={link.name} href={link.href} onClick={() => setIsOpen(!isOpen)}></Link>
                                            </li>}
                                    </>)
                            })}
                        </ul>}
                    <div className={styles.AsideFooter} onClick={dispatch(logOutUser)}>
                        <label>
                            <BiArrowBack />
                    Cerrar sesión
                </label>
                    </div>
                </nav>

            </header>

        </>
    )
}

export default NavMobile;