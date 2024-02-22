import React from 'react'

import useSound from 'use-sound';
import clickSound from './sounds/mouse-click.mp3';

const Test = () => {
  const [play] = useSound(clickSound, { volume: 3.0 });

  const handleClick = () => {
    play();
  };

  return (
    <div>
        <h1>Sound</h1>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Test
