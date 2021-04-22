import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./../../store/actions/";
import Title from '../../components/UI/Title/Title';
import Search from "./../../components/Search/Search"
import WeatherInfo from "./../../components/WeatherInfo/WeatherInfo"
import styles from './Home.module.scss';
import Card from '../../components/UI/Card/Card';
import MeetCard from '../../components/MeetCard/MeetCard';
import { setModalOpen, getWeather } from "./../../store/actions/";
import Modal from "./../../components/UI/Modal/Modal";
import MeetModal from '../../components/MeetModal/MeetModal';

const Home = () => {
    const state = useSelector((state) => state.general);
    const stateMeet = useSelector((state) => state.meet);
    const stateWeather = useSelector((state) => state.weather);
    const dispatch = useDispatch();

    useEffect(() => {
        !stateWeather.weatherData.name && dispatch(getWeather());
    }, [])

    const newMeetModal = state.newMeetModalOpen && (
        <Modal typeModal="newMeet">
            <MeetModal
                type={"create"}
            />
        </Modal>
    );

    return (
        <>
            {newMeetModal}
            <Search />

            <section className={styles['Home']}>

                <div>
                    <Title title={'Clima'} priority={2}></Title>
                    {stateWeather.weatherData.name && <WeatherInfo
                        city={stateWeather.weatherData.name}
                        temp={stateWeather.weatherData?.data?.temp}
                        priority={3}
                        customClass={styles['Home-WeatherInfo']}
                        colorSvg={"var(--blanco)"}
                    />}
                </div>
                <div>
                    <Title title={'Agregar meet'} priority={2}></Title>
                    <Card
                        customClass={`${styles['Home--Card']}`}
                        addCard
                        action={
                            () => dispatch(setModalOpen(true, "newMeet"))
                        }>
                    </Card>
                </div>

                {stateMeet.meets.length ?
                    stateMeet.meets.map((meet, index) => (
                        <>
                            <Card key={index} editar eliminar customClass={styles['Home-MeetCard']}>
                                <MeetCard
                                    hour={meet.hour}
                                    participants={meet.participants}
                                    date={meet.date}
                                    title={meet.title}
                                />
                            </Card>
                        </>
                    )) : null
                }
            </section>
        </>
    )
}

export default Home