import classes from './InputNumber.module.css'

const InputNumber = ({ label, num, setNum }) => {
    return (
        <div className={classes.InputNumber}>
            <div className={classes.wrap}>
                <input type="number" value={num} onChange={(e) => setNum(parseInt(e.target.value))} required />
                <label>{label}</label>
            </div>
        </div>
    )
}

export default InputNumber
