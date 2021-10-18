import classes from './InputNumber.module.css'

const InputNumber = ({ label, num, setNum }) => {
    return (
        <div className={classes.InputNumber}>
            <form>
                <input type="number" value={num} onChange={(e) => setNum(parseInt(e.target.value))} required />
                <label>{label}</label>
            </form>
        </div>
    )
}

export default InputNumber
