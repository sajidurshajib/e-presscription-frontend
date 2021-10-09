import InputField from '../../../ReUsable/InputField/InputField'
import InputNumber from '../../../ReUsable/InputNumber/InputNumber'
import classes from './InputMedicine.module.css'

const InputMedicine = ({ setMedicine }) => {
    return (
        <div className={classes.InputMedicine}>
            <form>
                <div className={classes.formWrap}>
                    <InputField label="Medicine name" />
                    <div className={classes.timeWrap}>
                        <InputNumber label="Morning" />
                        <InputNumber label="Evening" />
                        <InputNumber label="Night" />
                        <select name="beforeAfter" id="">
                            <option value="after">After meal</option>
                            <option value="before">Before meal</option>
                        </select>
                        <InputNumber label="Day" />
                    </div>
                </div>
                <InputField label="Remark" />
            </form>
        </div>
    )
}

export default InputMedicine
