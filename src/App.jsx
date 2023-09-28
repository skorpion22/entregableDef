import { useState } from 'react';
import './App.css'
import quotes from "./info/phrases.json"
import { getRandomPhrases } from './utils/random';
import QuoteCard from './components/QuoteCard';

const interfaces = ["dbz1", "dbz2", "dbz3", "dbz4", "dbz5", "dbz6"]

function App() {
  const [quote, setQuote] = useState(getRandomPhrases(quotes))
  const [currentimag, setcurrentimag] = useState(getRandomPhrases(interfaces))

  const handleChangeQuote = () => {
    setQuote(getRandomPhrases(quotes));
    setcurrentimag(getRandomPhrases(interfaces))
  }
  
  return (
    <main className={`app ${currentimag}`}>
      <QuoteCard
       quote={quote}
       handleChangeQuote={handleChangeQuote}
      />
    </main>
  )
}

export default App
