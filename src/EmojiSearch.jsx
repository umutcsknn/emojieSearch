// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';

// eslint-disable-next-line react/prop-types
function EmojiSearch({ emojis }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    
    // eslint-disable-next-line react/prop-types
    const filteredEmojis = emojis.filter((emoji) =>
      emoji.keywords.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredEmojis);
  };

  const handleEmojiClick = (emoji) => {
    
    setSearchTerm(emoji.symbol);
  };

  return (
    <div className="emoji-search-container">
      <h1 className="emoji-title">Emoji Arama Motoru</h1>
      <input
        type="text"
        className="search-bar"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="emoji-list">
        {searchResults.map((emoji, index) => (
          <div
            key={index}
            className="emoji-item"
            onClick={() => handleEmojiClick(emoji)} 
          >
            <div className="emoji-symbol">{emoji.symbol}</div>
            <div className="emoji-name">{emoji.keywords}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmojiSearch;
