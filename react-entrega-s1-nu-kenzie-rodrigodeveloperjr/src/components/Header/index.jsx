import titulo from "../../assets/Nu-Kenzie-black.png"
import { useHistory } from "react-router-dom";
import { StyledHeader } from "./style"
import { TemaBotoes } from "../../styles/buttons"
import { Container } from "../../styles/global"

const Header = () => {

    const history = useHistory()

    return (
        <StyledHeader>
            <Container>
                <img src={titulo} alt="Nu Kenzie" />
            
                <TemaBotoes
                botaoTamanho="p"
                botaoCor="header"
                onClick={ () => history.push("/", 
                {message: "Você está na Home"}) 
                }>Início</TemaBotoes>
            </Container>
        </StyledHeader>
    )
}

export default Header
