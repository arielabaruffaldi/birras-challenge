import React from 'react';
import Title from '../../components/UI/Title/Title';
import Card from '../../components/UI/Card/Card';
import { useSelector } from "react-redux";
import ProvicionesCard from '../../components/ProvicionesCard/ProvicionesCard';
import styles from './Proviciones.module.scss';
import Search from '../../components/Search/Search';

const Proviciones = () => {
    const stateMeet = useSelector((state) => state.meet);
    const stateWeather = useSelector((state) => state.weather);

    return (
        <section className={styles['Proviciones']}>
            <Search />
            {stateMeet.meets.length ? <Title hasMargin underlined title={"Proviciones pendientes"} /> : null}
            <main className={styles['Proviciones--container']}>
                {stateMeet.meets.length ?
                    stateMeet.meets.map(meet => {
                        return (
                            <Card editar customClass={styles['Card']}>
                                <ProvicionesCard
                                    description={meet.title}
                                    date={meet.date}
                                    participants={meet.participants}
                                    provisions={meet.provisions}
                                    temp={stateWeather.weatherData.data.temp}
                                ></ProvicionesCard>
                            </Card>
                        )
                    })
                    :
                    <>
                        <Title customClass={styles.noProvisionsText} tag={"p"} hasMargin title={"No tenes proviciones pendientes"} />
                    </>
                }
            </main>
        </section>
    )
}

export default Proviciones;