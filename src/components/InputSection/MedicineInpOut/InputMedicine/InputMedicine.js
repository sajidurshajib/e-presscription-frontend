import { useState, useEffect, useContext } from 'react'
import { Medicine } from '../../../../allContext'
import DropDown from '../../../ReUsable/DropDown/DropDown'
import InputField from '../../../ReUsable/InputField/InputField'
import InputNumber from '../../../ReUsable/InputNumber/InputNumber'
import SuggestionMedicine from '../Suggestion/SuggestionMedicine'
import classes from './InputMedicine.module.css'

const InputMedicine = () => {
    const { stateMedicine, dispatchMedicine } = useContext(Medicine)

    const apiV1 = process.env.REACT_APP_API_V1

    const option = [
        { name: 'After Meal', value: true },
        { name: 'Before Meal', value: false },
    ]

    const [arr, setArr] = useState([])
    const [medicineObj, setMedicineObj] = useState({ name: '' })

    const [id, setId] = useState(0)
    const [medicine, setMedicine] = useState('')
    const [form, setForm] = useState('')
    const [strength, setStrength] = useState('')
    const [generic, setGeneric] = useState('')

    const [morning, setMorning] = useState(0)
    const [evening, setEvening] = useState(0)
    const [night, setNight] = useState(0)
    const [after, setAfter] = useState(true)

    const [day, setDay] = useState('')
    const [remark, setRemark] = useState('')

    useEffect(() => {
        //Fetch from Api
        const funFetch = async () => {
            try {
                const response = await fetch(`${apiV1}/medicines/?search_medicine=${medicine}&skip=0&limit=10`)
                if (response.ok) {
                    const data = await response.json()
                    setArr(data)
                }
            } catch (err) {}
        }
        if (medicine.length !== 0) {
            funFetch()
        }
        //Medicine name set from object

        if (medicineObj.name && medicineObj.name !== medicine) {
            setId(medicineObj.id)
            setMedicine(medicineObj.name)
            setForm(medicineObj.form)
            setStrength(medicineObj.strength)
            setGeneric(medicineObj.generic)
            setMedicineObj({ ...medicineObj, name: '' })
        }
    }, [medicineObj, medicine, apiV1])

    const submit = (e) => {
        e.preventDefault()
        dispatchMedicine({
            type: 'input',
            payload: [
                ...stateMedicine.medicine,
                {
                    id,
                    name: medicine,
                    form,
                    strength,
                    generic,
                    doses: morning + ' + ' + evening + ' + ' + night,
                    after,
                    day,
                    remark,
                },
            ],
        })
        setId(0)
        setMedicine('')
        setForm('')
        setStrength('')
        setGeneric('')
        setMorning(0)
        setEvening(0)
        setNight(0)
        setAfter(true)
        setDay('')
        setRemark('')
    }

    return (
        <div className={classes.InputMedicine}>
            <form>
                <div className={classes.formWrap}>
                    <InputField text={medicine} setText={setMedicine} label="Medicine name" />
                    {medicine.length !== 0 ? (
                        arr.length !== 0 && !arr.some((obj) => obj.id === id) ? (
                            <SuggestionMedicine objArr={arr} setObj={setMedicineObj} />
                        ) : null
                    ) : null}

                    <div className={classes.typeWrap}>
                        <InputField text={form} setText={setForm} label="Form" />
                        <InputField text={strength} setText={setStrength} label="Strength" />
                        <InputField text={generic} setText={setGeneric} label="Generic name" />
                    </div>
                    <div className={classes.timeWrap}>
                        <InputNumber num={morning} setNum={setMorning} label="Morning" />
                        <InputNumber num={evening} setNum={setEvening} label="Evening" />
                        <InputNumber num={night} setNum={setNight} label="Night" />
                        <DropDown drop={after} setDrop={setAfter} arr={option} />
                        <InputNumber text={day} setNum={setDay} label="Day" />
                    </div>
                </div>
                <InputField text={remark} setText={setRemark} label="Remark" />
                <button onClick={submit}>Submit</button>
            </form>
        </div>
    )
}

export default InputMedicine
