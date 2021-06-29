import React from 'react';
import './App.css';
import Books from './components/books';
import Characters from './components/characters';
import Quotes from './components/quotes';
import Movies from './components/movies';


function App() {

  return (
    <div className='App'>
      <div className='Info-Card'>
        <div className='Info'>
          <h1>Lord of the Rings</h1>
          <h2>Which LOTR Things Are You?</h2>

          <div>
            <Books />
          </div>

          <div>
            <Characters />
          </div>

          <div>
            <Quotes />
          </div>

          <div>
            <Movies />
          </div>

          {/* <button onClick={getBook}>Get Your Book!</button>

          <div>
            <blockquote>{quote}</blockquote>
            <cite>- {character}</cite>
          </div> */}

        </div>
      </div>
      
    </div>
  );
}

export default App;
