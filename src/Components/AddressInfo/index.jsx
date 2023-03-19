import './AddressInfo.css'
import TextField from '../TextField'

const AddressInfo = props => {


    return(
        <section className='AddresInfo'>
            <TextField label='Logradouro' info={props.data.logradouro}/>
            <TextField label='Bairro' info={props.data.bairro}/>
            <TextField label='Cidade' info={props.data.localidade}/>
            <TextField label='Estado' info={props.data.uf}/>
        </section>
    )
}

export default AddressInfo