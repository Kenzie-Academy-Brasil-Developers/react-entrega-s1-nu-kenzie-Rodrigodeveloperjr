import { useState } from "react"
import "./styles.css"

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

        <form className="formulario" onSubmit={ handleSubmit }>
            <label>Descrição</label>

            <input 
            autoComplete="off"
            className="inputDescricao" 
            type="text" 
            name="descricao"
            placeholder="Digite aqui sua descrição"
            value={ descricao }
            onChange={ (e) => setDescricao(e.target.value) } />
            
            <span>Ex: Compra de roupas</span>

            <section>
                <div className="divValor">
                    <label>Valor</label>
                    <input 
                    autoComplete="off"
                    type="number"
                    name="valor"
                    placeholder="R$"
                    value={ valor }
                    onChange={ (e) => setValor(e.target.value) } />
                </div>
                
                <div className="divTipoValor">
                    <label>Tipo de valor</label>
                    <select name="options" onChange={ (e) => setOption(e.target.value) }>
                        <option name="entradas">Entradas</option>
                        <option name="despesas">Despesas</option>
                    </select>
                </div>
            </section>

            <button onClick={ () => addCard(handleChange()) } className="botaoInserirValor">Inserir valor</button>

        </form>
    )
}

export default Form
