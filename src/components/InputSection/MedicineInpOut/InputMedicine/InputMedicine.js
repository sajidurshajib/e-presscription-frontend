import classes from './InputMedicine.module.css'

const InputMedicine = ({ setMedicine }) => {
    return (
        <div className={classes.InputMedicine}>
            <form>
                <div className={classes.formWrap}>
                    <input name="name" type="text" placeholder="Medicine" />
                    <div className={classes.doses}>
                        <input type="number" />
                        <input type="number" />
                        <input type="number" />
                    </div>
                    <select name="beforeAfter" id="">
                        <option value="before">Before meal</option>
                        <option value="after">After meal</option>
                    </select>
                    <input type="number" />
                </div>
                <input type="text" className={classes.remark} />
            </form>
        </div>
    )
}

export default InputMedicine
