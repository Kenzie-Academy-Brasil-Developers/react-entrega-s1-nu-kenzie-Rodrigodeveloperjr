import card from "../../assets/NoCard.png"
import "./styles.css"

const List = ({ cards, setFilterCards, children }) => {

    return  (

        <menu className="list">
            <div className="listHeader">
                <h2>Resumo financeiro</h2>

                <nav>
                    <button onClick={ () => setFilterCards([]) }>Todos</button>
                    <button onClick={ () => setFilterCards(cards.filter(card => card.option === "Entradas")) }>Entradas</button>
                    <button onClick={ () => setFilterCards(cards.filter(card => card.option === "Despesas")) }>Despesas</button>
                </nav>
            </div>

            <section className="secaoCards">
                { cards.length > 0 ? (       
                    <>
                        {children}
                    </>
                ) : (
                    <>
                        <h1>Você ainda não possui nenhum lançamento</h1>

                        <img className="imgCardVazio" src={card} alt="Cards Vazios" />
                    </>
                )
            }
            </section>
        </menu>
    )
}

export default List
