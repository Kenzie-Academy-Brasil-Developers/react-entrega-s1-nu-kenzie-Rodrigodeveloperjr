import logo from '../../Group 277.svg';
import titulo from '../../assets/Nu-Kenzie.png'
import { useHistory } from "react-router-dom";
import { Container } from '../../styles/global';
import { TemaSpan, TemaTitulo } from '../../styles/typography';
import { StyleHome } from './style';
import { TemaBotoes } from '../../styles/buttons';

const Home = () => {

    const history = useHistory()

    return (
        <div>
            <StyleHome>
                <Container>
                    <div className="content">
                        
                        <img className="titulo" src={titulo}  alt="Titulo" />
                        
                        <div className='text'>
                            <TemaTitulo tag="h1">
                                Centralize o controle das suas finanças
                            </TemaTitulo>
                        </div>

                        <TemaSpan>
                            de forma rápida e segura
                        </TemaSpan>
                    

                        <div className='botao'>
                            <TemaBotoes
                            botaoTamanho="g"
                            botaoCor="normal"
                            onClick={ () => history.push("/dashboard",
                            {message: "Você está Na Dashboard"}) 
                            }>Iniciar</TemaBotoes>
                        </div>
                    </div>
                    
                    <div className='image'>
                        <img src={logo} alt="Nu Kenzie" />
                    </div>
                </Container>
            </StyleHome>
        </div>
    )
}

export default Home
