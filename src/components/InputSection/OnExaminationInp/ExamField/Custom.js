import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Custom = ({ setData }) => {
    const [custom, setCustom] = useState({ custom: '' })
    useEffect(() => {
        if (custom.custom.length) {
            setData(custom)
        }
    }, [custom])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap}>
                <p>Custom :</p>
                <input
                    value={custom.custom}
                    onChange={(e) => setCustom({ custom: e.target.value })}
                    type="text"
                    required
                />
            </div>
        </div>
    )
}

export default Custom
