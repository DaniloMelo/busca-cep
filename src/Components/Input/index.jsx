import './Input.css'

const Input = props => {

    return(
        <input type="number" 
            className='input'
            value={props.value} 
            onChange={e => props.inputHandler(e.target.value)}
        />
    )
}

export default Input
