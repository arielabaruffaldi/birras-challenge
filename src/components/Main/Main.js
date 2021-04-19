import React from "react";
import Error from "./../../pages/Error/Error";
import Loading from "../UI/Loading/Loading";
import { useSelector } from "react-redux";
import styles from "./Main.module.scss";

const Main = (props) => {
  const state = useSelector((state) => state.general);
  return (
    <main className={styles.Main}>
      {state.error ? <Error {...props} /> : <> {props.children}</>}
      {state.loading ? <Loading /> : null}
    </main>
  );
};


export default Main;
