import React from "react";
import Lottie from "react-lottie";
import error from "./../../assets/lotties/error.json";
import { connect } from "react-redux";
import styles from "./Error.modules.scss"

const defaultOptions = {
  loop: false,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const ErrorPage = (props) => {
  return (
    <div className={styles.finishContent}>
      <Lottie
        options={{ animationData: error, ...defaultOptions }}
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          paddingTop: "0px",
          paddinBottom: "0px",
          width: "150px",
          height: "150px",
        }}
        height={20}
        width={20}
      />
      <h3 className="error-message">
        {props.messageError
          ? props.messageError
          : "Ups! el recurso solicitado no existe."}
      </h3>

    {/*   <Button
        type="submit"
        event={"Ir a inicio"}
        onClick={() => handleSubmit()}
      /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    messageError: state.general.generalMessageError,
  };
};

export default connect(mapStateToProps)(ErrorPage);
