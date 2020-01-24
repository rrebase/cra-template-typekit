import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Counter.module.scss";
import { increment, decrement } from "./CounterSlice";
import { RootState } from "store";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p className={styles.value}>{count}</p>
      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className={styles.button}
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
