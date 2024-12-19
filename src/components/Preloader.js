import React from "react";
import { TailSpin } from "react-loader-spinner";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"} style={{ textAlign: "center", marginTop: "20%" }}>
      <TailSpin
        height={100}
        width={100}
        color="#343e47"
        ariaLabel="loading"
        visible={props.load}
      />
    </div>
  );
}

export default Preloader;
