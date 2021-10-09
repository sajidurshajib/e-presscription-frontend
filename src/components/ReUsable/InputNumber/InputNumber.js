import classes from './InputNumber.module.css'

const InputNumber = ({ label }) => {
    return (
        <div className={classes.InputNumber}>
            <form>
                <input type="number" />
                <label>{label}</label>
            </form>
        </div>
    )
}

export default InputNumber
