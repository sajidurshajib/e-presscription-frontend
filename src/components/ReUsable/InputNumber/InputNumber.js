import classes from './InputNumber.module.css'

const InputNumber = ({ label, num, setNum, negetive = true }) => {
    return (
        <div className={classes.InputNumber}>
            <div className={classes.wrap}>
                {negetive === true ? (
                    <input type="number" value={num} onChange={(e) => setNum(parseInt(e.target.value))} required />
                ) : (
                    <input
                        type="number"
                        value={num}
                        onChange={(e) => setNum(parseInt(e.target.value))}
                        min={0}
                        required
                    />
                )}

                <label>{label}</label>
            </div>
        </div>
    )
}

export default InputNumber
