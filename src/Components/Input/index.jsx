import './Input.css'

const Input = props => {

    return(
        <input type="number" 
               value={props.value} 
               onChange={e => props.inputHandler(e.target.value)}
        />
    )
}

export default Input
