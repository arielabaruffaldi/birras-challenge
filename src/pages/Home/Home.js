import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./../../store/actions/";
import Title from '../../components/UI/Title/Title';

const Home = () => {
    const state = useSelector((state) => state.general);

    return (
        <>
            <Title title={'Home'} priority={2}></Title>
        </>
    )
}

export default Home