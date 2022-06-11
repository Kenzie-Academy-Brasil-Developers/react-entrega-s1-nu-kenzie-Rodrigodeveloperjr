import lixeira from "../../assets/lixeira.png"
import { StyledCard } from "./style"

const Card = ({ cards, handleCard }) => {

    return (

        cards.map((card, i) => 

            <StyledCard key={i}>
                <hr style={ card.option === "Entradas" ? {background: "#03B898"}  : {background: "#E9ECEF"} } />

                <div className="divDentroCard">
                    <div className="divNomeCompra">
                        <h2 className="nomeCompra">{card.descricao}</h2>
                    
                        <span>{card.option}</span>
                    </div>

                    <div className="divPreco">
                        <span className="preco">R$ {card.valor}</span>

                        <img onClick={ () => handleCard(card) } alt="Lixeira" />
                    </div>
                </div>
            </StyledCard>
        )
    )
}

export default Card
