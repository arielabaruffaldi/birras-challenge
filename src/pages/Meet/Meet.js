import React, { useEffect } from 'react';
import MeetCard from '../../components/MeetCard/MeetCard';
import Card from '../../components/UI/Card/Card';
import Title from '../../components/UI/Title/Title';
import styles from "./Meet.module.scss";
import Search from "./../../components/Search/Search"
import { useSelector, useDispatch } from "react-redux";
import { setModalOpen, getWeather } from "./../../store/actions/";
import Modal from "./../../components/UI/Modal/Modal";
import MeetModal from '../../components/MeetModal/MeetModal';

const Meet = () => {
    const dispatch = useDispatch();

    const state = useSelector((state) => state.general);
    const stateMeet = useSelector((state) => state.meet);
    const stateWeather = useSelector((state) => state.weather);

    const newMeetModal = state.newMeetModalOpen && (
        <Modal typeModal="newMeet">
            <MeetModal
                type={"create"}
            />
        </Modal>
    );
    useEffect(() => {
        !stateWeather.weatherData.data && dispatch(getWeather())
    }, [stateWeather.weatherData, dispatch]);

    return (
        <>
            {newMeetModal}
            <Search />
            <Title hasMargin underlined title={"Próxima meet"}></Title>
            <section className={styles['MeetCards--container']}>
                {stateMeet.meets && stateMeet.meets.map((meet, index) => (
                    <>
                        <Card key={index} editar eliminar customClass={styles.Card}>
                            <MeetCard
                                hour={meet.hour}
                                participants={meet.participants}
                                date={meet.date}
                                title={meet.title}
                            />
                        </Card>
                    </>
                ))
                }
                <Card
                    customClass={`${styles.Card}`}
                    addCard
                    action={
                        () => dispatch(setModalOpen(true, "newMeet"))
                    }>
                </Card>
            </section>
        </>
    )
}

export default Meet;