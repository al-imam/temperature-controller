import React, { useState, useEffect } from "react";
import classes from "./temp.module.css";

const setColor = (temp: number): void => {
  let h = 0;
  let s = 0;

  if (temp > 0) {
    h = 10;
    s = temp + 60;
  }

  if (temp < 0) {
    h = 225;
    s = Math.abs(temp) + 30;
  }

  if (s === 100) {
    return;
  }

  document.documentElement.style.setProperty(
    "--color-code",
    `hsl(${h}, ${s}%, 54%)`
  );
};

const Temperature: React.FunctionComponent<{ init: number }> = ({ init }) => {
  const [temp, setTemp] = useState<number>(init);

  const addHandler = (): void => {
    setTemp((t) => t + 1);
    setColor(temp + 1);
  };

  const subHandler = (): void => {
    setTemp((t) => t - 1);
    setColor(temp - 1);
  };

  useEffect(() => {
    setColor(init);
  }, [init]);

  return (
    <div className={classes.card}>
      <div className={classes.circle}>
        <p className={classes.text}>{temp}°C</p>
      </div>
      <div className={classes.buttons}>
        <button className={classes.button} onClick={addHandler}>
          increment
        </button>
        <button className={classes.button} onClick={subHandler}>
          decrement
        </button>
      </div>
    </div>
  );
};

export default Temperature;
