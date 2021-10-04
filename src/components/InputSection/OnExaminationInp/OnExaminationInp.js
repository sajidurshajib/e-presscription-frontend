import { Fragment, useState } from 'react'
import AddField from './AddField'
import classes from './OnExaminationInp.module.css'

const OnExaminationInp = () => {
    let arr = [
        { id: 1, name: 'BP', value: '' },
        { id: 2, name: 'Pulse', value: '' },
        { id: 3, name: 'Temp', value: '' },
    ]

    const [onExam, setOnExam] = useState(arr)
    const [add, setAdd] = useState('')

    const addData = (e) => {
        e.preventDefault()

        let a = onExam
        let b = { id: a[a.length - 1].id + 1, name: add, value: '' }
        a.push(b)

        setOnExam([...a])
        setAdd('')
    }

    return (
        <div className={classes.OnExaminationInp}>
            {onExam.map((v) => {
                return (
                    <Fragment key={v.id}>
                        <div className={classes.Inp}>
                            <input type="text" required />
                            <label>{v.name}</label>
                        </div>
                    </Fragment>
                )
            })}
            <AddField addData={addData} add={add} setAdd={setAdd} />
        </div>
    )
}

export default OnExaminationInp
