import classes from './InputNumber.module.css'

const InputNumber = ({ label }) => {
    return (
        <div className={classes.InputNumber}>
            <form>
                <input type="number" required />
                <label>{label}</label>
            </form>
        </div>
    )
}

export default InputNumber
