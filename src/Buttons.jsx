import { useState } from 'react';
import { useImmer } from 'use-immer';

function intiArrButtons(count) {
  const arrButtons = [];
  for (let i = 0; i < count; i++) {
    arrButtons.push(0);
  }

  return arrButtons;
}

export default function Buttons({ count = 3 }) {
  const [counters, setCounters] = useImmer(intiArrButtons(count));
  const [lastCounter, setlastCounter] = useState(null);

  function handleIncrementClick(index) {
    setCounters((draft) =>
      draft.map((counter, i) => (i === index ? counter + 1 : counter))
    );
    setlastCounter(index);
  }

  return (
    <>
      {counters.map((counter, i) => (
        <button
          type="button"
          key={i}
          className={
            lastCounter === i ? 'btn btn-success m-1' : 'btn btn-primary m-1'
          }
          onClick={() => handleIncrementClick(i)}>
          {counter}
        </button>
      ))}
    </>
  );
}
