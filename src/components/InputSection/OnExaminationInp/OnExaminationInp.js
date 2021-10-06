import { Fragment, useState } from 'react'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import AddField from './AddField'
import classes from './OnExaminationInp.module.css'

const OnExaminationInp = () => {
    let arr = []
    let sgg = ['bp', 'np']

    const [onExam, setOnExam] = useState(arr)
    const [suggestion, setSuggestion] = useState('')

    const addData = (e) => {
        e.preventDefault()

        let a = onExam
        let b
        if (a.length === 0) {
            b = { id: 1, name: suggestion, value: '' }
        } else {
            b = { id: a[a.length - 1].id + 1, name: suggestion, value: '' }
        }

        a.push(b)

        setOnExam([...a])
        setSuggestion('')
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
            <AddField addData={addData} add={suggestion} setAdd={setSuggestion} />
            {suggestion ? (
                <Suggestion
                    arr={sgg.filter((val) => val.toLocaleLowerCase().includes(suggestion.toLowerCase()))}
                    setText={setSuggestion}
                />
            ) : null}
        </div>
    )
}

export default OnExaminationInp
