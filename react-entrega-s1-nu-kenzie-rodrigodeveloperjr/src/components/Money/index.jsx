import "./styles.css"

const Money = ({ cards }) => {

    return (

        <section className="secaoValorTotal">
            <div className="divValorTotal">
                <h3 className="textoValorTotal">Valor Total:</h3>

                <p className="valorTotal">$ {cards.reduce((valoAnterior, valorAtual) => valoAnterior + Number(valorAtual.valor), 0)}</p>
            </div>

            <span className="textoValorMenor">O valor se refere ao saldo</span>
        </section>
    )
}

export default Money
