import './Input.css'

const Input = props => {

    return(
        <input type="text" 
            className='input'
            value={props.value} 
            onChange={e => props.inputHandler(e.target.value)}
        />
    )
}

export default Input
