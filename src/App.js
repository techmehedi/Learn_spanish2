import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [words, setWords] = useState([
    {
      front: 'perro',
      back: 'dog'  
    },
    {
      front: 'gato',  
      back: 'cat'
    },
    {
      front: 'vaca',
      back: 'cow' 
    },
    {
      front: 'caballo',  
      back: 'horse'
    },
    {
      front: 'oveja',
      back: 'sheep'
    },
    {
      front: 'cerdo',
      back: 'pig'
    },
    {
      front: 'pollo',
      back: 'chicken'
    }, 
    {
      front: 'vaca',
      back: 'cow'
    },
    {
      front: 'pato',
      back: 'duck'
    },
    {
      front: 'conejo',
      back: 'rabbit'
    }
  ]);
  const [randomWord, setRandomWord] = useState(words[0]);
  const [flipped, setFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');
  
  useEffect(() => {
    shuffleWords();
  }, []);

  const handleCardClick = () => {
    setFlipped(!flipped);
  }

  const shuffleWords = () => {
    setRandomWord(words[Math.floor(Math.random() * words.length)]);
    setFlipped(false);
  }

  const checkAnswer = () => {
    if (userInput.toLowerCase() === randomWord.back.toLowerCase()) {
      alert('Correct!');
    } else {
      alert('Incorrect. Try again!');
    }
  };

  const goBack = () => {
    const currentIndex = words.indexOf(randomWord);
    const newIndex = currentIndex === 0 ? words.length - 1 : currentIndex - 1;
    setRandomWord(words[newIndex]);
    setFlipped(false);
  }

  const goNext = () => {
    const currentIndex = words.indexOf(randomWord);
    const newIndex = currentIndex === words.length - 1 ? 0 : currentIndex + 1;
    setRandomWord(words[newIndex]);
    setFlipped(false);
  }

  return (
    <div>
      <div className="heading">
        <h1>Learn Spanish</h1>
        <h2>How good at Spanish are you? Test all of your Spanish knowledge here!</h2>
      </div>

      <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="front">{randomWord.front}</div>
        <div className="back">{randomWord.back}</div>
      </div>

      <div className="inputDiv">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your guess"
        />
        <button onClick={checkAnswer}>Submit</button>
      </div>

      <div className="btndiv">
        <button className='btn' onClick={goBack}>Back</button>
        <button className='btn' onClick={goNext}>Next</button>
        <button className='btn' onClick={shuffleWords}>Shuffle</button>
      </div>
    </div>
  );
}

export default App;


