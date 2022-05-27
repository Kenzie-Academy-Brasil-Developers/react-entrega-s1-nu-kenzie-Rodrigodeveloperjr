import { useState } from "react";
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Form from "./components/Form"
import Money from "./components/Money"
import List from './components/List';
import Card from "./components/Card"

function App() {

  /* lista Principla */
  const [ cards, setCards ] = useState([])

  /* lista Filtrada */
  const [filterCards, setFilterCards ] = useState([])


  const addCard = newCard => {

    const copyNewCard = {...newCard}
    
    if(newCard.option === "Despesas") {
      copyNewCard.valor = -copyNewCard.valor
    }

    setCards([...cards, copyNewCard])
  }

  const handleCard = card => setCards(cards.filter(x => x != card))
  
  return (

    <>
      <Header />
      <div className="container">
        <div className="dentroContainer">
          <Form addCard={ addCard } />
          { cards.length > 0 && (
              <Money cards={ filterCards.length > 0 ? filterCards : cards } /> 
            )
          }
          
        </div>
        <List cards={ cards } setFilterCards={ setFilterCards } children={ <Card cards={ filterCards.length > 0 ? filterCards : cards } handleCard={ handleCard } /> } />
      </div>
    </>

    /*
    <Home/>
    */
    )
}

export default App;
