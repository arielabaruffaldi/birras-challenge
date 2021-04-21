import React from 'react';
import Lottie from "react-lottie";
import errorLottie from './../../../assets/lotties/error.json';

const ErrorPage = () => {
    return(
        <Lottie
        options={{ animationData: errorLottie }}
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
    )
}

export default ErrorPage;