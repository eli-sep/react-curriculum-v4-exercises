// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';

export default function FindCorrectHook() {
  const clickCount = useRef(0); //

  function handleClick() {
    clickCount.current += 1;
    console.log('The click count is', clickCount.current);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount.current} Clicks</button>
    </div>
  );
}
