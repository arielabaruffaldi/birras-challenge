import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../UI/Input/Input";
import { useInput } from './../../utils/useInput';
import TimeField from 'react-simple-timefield';
import { setMeet, setLoading } from '../../store/actions';
import {beersPerPerson} from "./../../utils/provisions";
import styles from "./MeetModal.module.scss";
import Button from "../UI/Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {dateFormater} from "../../utils/formaters";

const MeetModal = () => {
    const { value: title, bind: bindTitle } = useInput('')
    const { value: hourStart, bind: bindHourStart } = useInput('')
    const { value: hourEnd, bind: bindHourEnd } = useInput('')
    const { value: participants, bind: bindParticipants } = useInput('')
    const [date, setDate] = useState(new Date());

    const dispatch = useDispatch();
    const stateWeather = useSelector((state) => state.weather);
 
    const handleSubmit = event => {
        event.preventDefault();
        let participantsArray = participants.split(',');
        dispatch(setLoading(true));

        let beers = beersPerPerson(stateWeather.weatherData.data.temp, participantsArray.length);
        dispatch(setMeet({
            title: title,
            hour: {
                start: hourStart,
                end: hourEnd
            },
            date: dateFormater(date),
            participants: participantsArray,
            provisions: beers * participantsArray.length
        }))
    }


    return (
        <section className={styles.MeetModal}>
            <form>
                <div className={styles['MeetModal--container']}>
                    <Input
                        tag={"input"}
                        name="titleMeet"
                        placeholder="Añade un título"
                        customClass={styles['MeetModal--Input']}
                        {...bindTitle}
                    />
                    <Input
                        tag={"input"}
                        name="participants"
                        placeholder="Añadir participantes"
                        customClass={styles['MeetModal--Input']}
                        {...bindParticipants}
                    />
                    <DatePicker
                        placeholderText="Fecha del evento"
                        onChange={date => setDate(date)}
                        date={date}
                        dateFormat="dd/MM/yyyy"
                        className={`${styles.Input} stylePicker`}
                        selected={date}
                    />
                    <div className={styles.HourWrapper}>
                        <TimeField
                            name="hour"
                            colon=":"
                            className={styles.Input}
                            style={{
                                width: "50%",
                            }}
                            {...bindHourStart}
                        />
                        <TimeField
                            name="hour"
                            colon=":"
                            className={styles.Input}
                            style={{
                                width: "50%",
                            }}
                            {...bindHourEnd}
                        />
                    </div>
                </div>
                <Button onClick={(event) => handleSubmit(event)} secondary>crear</Button>
            </form>
        </section>
    )
}

export default MeetModal;