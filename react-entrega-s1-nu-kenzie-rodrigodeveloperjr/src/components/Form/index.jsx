import { useState } from "react"
import { TemaBotoes } from "../../styles/buttons"
import { InputStyled, SelectStyled } from "../../styles/inputs"
import { StyledForm } from "./style"

const Form = ({ addCard}) => {

    const [ descricao, setDescricao ] = useState("")
    const [ option, setOption ] = useState("Entradas")
    const [ valor, setValor ] = useState("")

    const handleSubmit = (e) => e.preventDefault()
    

    const handleChange = () => {
    
        const card = {
            descricao,
            option,
            valor
        }

        return card
    }


    return (

        <StyledForm onSubmit={ handleSubmit }>
            <div>
                <label>Descrição</label>

                <InputStyled
                inputTamanho="g"
                autoComplete="off"
                className="inputDescricao" 
                type="text" 
                name="descricao"
                placeholder="Digite aqui sua descrição"
                value={ descricao }
                onChange={ (e) => setDescricao(e.target.value) } />
                
                <span>Ex: Compra de roupas</span>
            </div>

            <section>
                <div>
                    <label>Valor</label>
                    <InputStyled
                    inputTamanho="p"
                    autoComplete="off"
                    type="number"
                    name="valor"
                    placeholder="R$"
                    value={ valor }
                    onChange={ (e) => setValor(e.target.value) } />
                </div>
                
                <div>
                    <label>Tipo de valor</label>
                    <SelectStyled name="options" onChange={ (e) => setOption(e.target.value) }>
                        <option name="entradas">Entradas</option>
                        <option name="despesas">Despesas</option>
                    </SelectStyled>
                </div>
            </section>

            <TemaBotoes botaoTamanho="gg" botaoCor="normal" onClick={ () => addCard(handleChange()) }>Inserir valor</TemaBotoes>

        </StyledForm>
    )
}

export default Form
