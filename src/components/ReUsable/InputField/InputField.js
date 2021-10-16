import classes from './InputField.module.css'

const InputField = ({ text, setText, label }) => {
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={classes.InputField}>
            <form onSubmit={(e) => onSubmit(e)}>
                <input type="text" onChange={(e) => setText(e.target.value)} value={text} required />
                <label>
                    <span>{label}</span>
                </label>
            </form>
        </div>
    )
}

export default InputField
