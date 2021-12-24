import { useState } from 'react';
import './App.css';
import Data from './data/qoutes.json';
import Card from './components/Card';
import Colors from './components/Colors';

function App() {
  
  const [ quotes, setQuote ] = useState(Data[getNumber(Data.length)]);
  const background = Colors[getNumber(Colors.length)];

  const getQuotes = () => {
    const index = getNumber(Data.length);
    setQuote(Data[index]);
  }

  console.log(background);

  document.body.style = `background: ${background}`;

  const { quote, author } = quotes;

  return (
    <div className="App" style={{ background }}>
      <Card 
        quote={quote}
        author={author}
        background={background}
        changeQuote={getQuotes}
      />
    </div>
  );
}

const getNumber = (max) => Math.floor(Math.random() * max);

export default App;
