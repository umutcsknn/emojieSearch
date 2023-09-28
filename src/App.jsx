// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import EmojiSearch from './EmojiSearch';
import emojis from './emojis.json';

function App() {
  return (
    <div className="App">
      <EmojiSearch emojis={emojis} />
    </div>
  );
}

export default App;
