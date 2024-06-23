import React from "react";
import styles from "./Speed.module.css";

export const Speed = ({ onChange, value }) => {
  return (
    <div className={styles.wrapper}>
        <div style={{color:"white"}}>Playback speed: {value / 50. + .5}</div>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="0"
        className={styles.slider}
        id="speedRange"
        onChange={onChange}
        style={{
          background: `linear-gradient(90deg, var(--speedUsed) ${
            value
          }%, var(--speedLeft) ${100. - value}%)`,
        }}
      />
    </div>
  );
};
