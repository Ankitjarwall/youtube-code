import React, { useState } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newYoutubeUrl = `https://www.youtube.com/embed/${userInput}`;
    setYoutubeUrl(newYoutubeUrl);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>YouTube Player App</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Enter YouTube Video ID:
            <input type="text" value={userInput} onChange={handleInputChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
        {youtubeUrl && (
          <iframe
            title="YouTube Player"
            width="560"
            height="315"
            src={youtubeUrl}
            frameborder="0"
            allowfullscreen
          ></iframe>
        )}
      </header>
    </div>
  );
}

export default App;
