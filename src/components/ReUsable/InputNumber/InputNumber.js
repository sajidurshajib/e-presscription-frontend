import classes from './InputNumber.module.css'

const InputNumber = ({ label, num, setNum, negetive = true, step = '1' }) => {
    return (
        <div className={classes.InputNumber}>
            <div className={classes.wrap}>
                {negetive === true ? (
                    <input
                        type="number"
                        value={num}
                        onChange={(e) => setNum(parseFloat(e.target.value))}
                        step={step}
                        required
                    />
                ) : (
                    <input
                        type="number"
                        value={num}
                        onChange={(e) => setNum(parseFloat(e.target.value))}
                        min={0}
                        step={step}
                        required
                    />
                )}

                <label>{label}</label>
            </div>
        </div>
    )
}

export default InputNumber
