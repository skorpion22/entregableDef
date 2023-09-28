import "./QuoteCard.css"

const QuoteCard = ({quote, handleChangeQuote}) => {  
  return (
    <section className="quoteCard">

        <article className="quoteCard_container">
          <div className="title">
          <h1 className="quoteCard_title">CURIOSIDADES DBZ</h1>
          </div>
          <div className="phrase">
          <p className="quoteCard_phrase">{quote.phrase}</p>
          </div>
        </article>

       <div className="container-btn">
        <button className="quoteCard_btn" onClick={handleChangeQuote}>SIGUIENTE</button>
       </div>

        <footer className="quoteCard_footer">
        Author: {quote.author}
        </footer>
        
    </section>

  )
}

export default QuoteCard