import { useState } from 'react'
import Input from '../Input'
import './Form.css'

const Form = props => {

    const [cep, setCep] = useState('')

    const onNewSearch = (event) => {
        event.preventDefault()
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => props.getData(data))
    }

    return(
        <section className='form'>
            <form onSubmit={onNewSearch}>
                <label>Digite o CEP</label>
                <Input inputHandler={ num => setCep(num)} value={cep} />
                <button>VAAAAAAAI</button>
            </form>
        </section>
    )
}

export default Form