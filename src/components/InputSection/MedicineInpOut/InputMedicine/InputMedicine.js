import DropDown from '../../../ReUsable/DropDown/DropDown'
import InputField from '../../../ReUsable/InputField/InputField'
import InputNumber from '../../../ReUsable/InputNumber/InputNumber'
import classes from './InputMedicine.module.css'

const InputMedicine = ({ setMedicine }) => {
    const option = [
        { name: 'After Meal', value: 'after' },
        { name: 'Before Meal', value: 'before' },
    ]

    return (
        <div className={classes.InputMedicine}>
            <form>
                <div className={classes.formWrap}>
                    <InputField label="Medicine name" />
                    <div className={classes.timeWrap}>
                        <InputNumber label="Morning" />
                        <InputNumber label="Evening" />
                        <InputNumber label="Night" />
                        <DropDown arr={option} />
                        <InputNumber label="Day" />
                    </div>
                </div>
                <InputField label="Remark" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default InputMedicine
