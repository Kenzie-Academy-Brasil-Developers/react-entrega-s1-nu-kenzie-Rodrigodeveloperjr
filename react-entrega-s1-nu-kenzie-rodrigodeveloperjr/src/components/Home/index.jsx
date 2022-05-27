import logo from '../../Group 277.svg';
import titulo from '../../Nu-Kenzie.png'
import "./styles.css"

const Home = () => {

    return (

        <div className="divPrincipal">
        
            <div className="divHome">
                <img className="titulo" src={titulo} />

                <p className="textoMaior">Centralize o controle das suas finanças</p>

                <span className="textoMenor">de forma rápida e segura</span>

                <button className="botaoIniciar">Iniciar</button>
            </div>
        
            <img className="imgMaior" src={logo} />    
        </div>
    )
}

export default Home