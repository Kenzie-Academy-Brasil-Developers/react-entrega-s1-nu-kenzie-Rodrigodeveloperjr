import titulo from "../../Nu-Kenzie-black.png"
import Home from "../Home"
import "./styles.css"

const Header = () => {

    return (

        <header className="header">
            <img className="titulo" src={titulo} />

            <button className="botaoInicio">Início</button>
        </header>
    )
}

export default Header
