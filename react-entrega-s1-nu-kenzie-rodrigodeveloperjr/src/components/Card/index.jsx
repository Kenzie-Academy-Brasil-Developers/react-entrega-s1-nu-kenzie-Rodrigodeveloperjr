import "./styles.css"
import lixeira from "./lixeira.png"

const Card = ({ cards, handleCard }) => {

    return (

        cards.map((card, i) => 

            <div className="card" key={i}>
                <hr style={ card.option === "Entradas" ? {background: "#03B898"}  : {background: "#E9ECEF"} } />
                
                <div className="divDentroCard">
                    <div className="divNomeCompra">
                        <h2 className="nomeCompra">{card.descricao}</h2>
                    
                        <span>{card.option}</span>
                    </div>

                    <div className="divPreco">
                        <span className="preco">R$ {card.valor}</span>

                        <img onClick={ () => handleCard(card) } style={{backgroundImage: lixeira}} className="lixeira" />
                    </div>
                </div>
            </div>
        )
    )
}

export default Card
