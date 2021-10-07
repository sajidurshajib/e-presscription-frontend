import { useState } from 'react'
import InputMedicine from './InputMedicine/InputMedicine'
import classes from './MedicineInpOut.module.css'
import PreviewMedicine from './PreviewMedicine/PreviewMedicine'

const MedicineInpOut = () => {
    const [medicine, setMedicine] = useState([])

    return (
        <div className={classes.MedicineInpOut}>
            <PreviewMedicine medicine={medicine} />
            <InputMedicine setMedicine={setMedicine} />
        </div>
    )
}

export default MedicineInpOut
