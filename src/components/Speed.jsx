import React from "react";
import styles from "./Speed.module.css";

export const Speed = ({ onChange, value }) => {
  let dv = (value - .5) * 50;
  
  let handleChange = (e) => {
    onChange(e.target.value / 50 + .5);
  };

  return (
    <div className={styles.wrapper}>
        <div style={{color:"white"}}>Playback speed: {value}</div>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue={dv}
        className={styles.slider}
        id="speedRange"
        onChange={handleChange}
        style={{
          background: `linear-gradient(90deg, var(--speedUsed) ${
            dv
          }%, var(--speedLeft) ${100. - dv}%)`,
        }}
      />
    </div>
  );
};
