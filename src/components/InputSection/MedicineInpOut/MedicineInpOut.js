import { useReducer } from 'react'
import { Medicine } from '../../../allContext'
import { medicineReducer, medicineState } from '../../../reducer/MedicineReducer'
import InputMedicine from './InputMedicine/InputMedicine'
import classes from './MedicineInpOut.module.css'
import PreviewMedicine from './PreviewMedicine/PreviewMedicine'

const MedicineInpOut = () => {
    const [stateMedicine, dispatchMedicine] = useReducer(medicineReducer, medicineState)
    return (
        <div className={classes.MedicineInpOut}>
            <Medicine.Provider value={{ stateMedicine, dispatchMedicine }}>
                <InputMedicine />
                <PreviewMedicine />
            </Medicine.Provider>
        </div>
    )
}

export default MedicineInpOut
