import { useState } from "react";
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Form from "./components/Form"
import Money from "./components/Money"
import List from './components/List';
import Card from "./components/Card"
import { Switch, Route } from "react-router-dom";

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

    <Switch>

      <Route exact path="/">
        <Home/>
      </Route>
      
      <Route exact path="/dashboard">
        <Header />
        
        <div className="container">
          
          <div>
            <Form addCard={ addCard } />

            { cards.length > 0 && (
                <Money cards={ filterCards.length > 0 ? filterCards : cards } /> 
              )
            }
          </div>

          <List cards={ cards } setFilterCards={ setFilterCards } children={ <Card cards={ filterCards.length > 0 ? filterCards : cards } handleCard={ handleCard } /> } />  
        </div>
      
      </Route>
    </Switch>
    )
}

export default App
