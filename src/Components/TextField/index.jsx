import './TextField.css'

const TextField = props => {

    return (
        <div className='textField'>
            <label>{props.label}</label>
            <p>{props.info}</p>
        </div>
    )
}

export default TextField