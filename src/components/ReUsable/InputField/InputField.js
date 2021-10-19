import classes from './InputField.module.css'

const InputField = ({ text, setText, label }) => {
    return (
        <div className={classes.InputField}>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} required />
            <label>
                <span>{label}</span>
            </label>
        </div>
    )
}

export default InputField
