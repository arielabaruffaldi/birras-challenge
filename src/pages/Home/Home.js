import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./../../store/actions/";
import Title from '../../components/UI/Title/Title';
import Search from "./../../components/Search/Search"

const Home = () => {
    const state = useSelector((state) => state.general);

    return (
        <>
            <Search/>
            <Title hasMargin underlined title={'Home'} priority={2}></Title>
        </>
    )
}

export default Home