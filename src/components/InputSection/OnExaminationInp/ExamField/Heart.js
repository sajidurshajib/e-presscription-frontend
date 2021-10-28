import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Heart = ({ setData }) => {
    const [heart, setHeart] = useState({ heart: '' })
    useEffect(() => {
        if (heart.heart.length !== 0) {
            setData(heart)
        }
    }, [heart])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap}>
                <p>Heart :</p>
                <input value={heart.heart} onChange={(e) => setHeart({ heart: e.target.value })} type="text" required />
            </div>
        </div>
    )
}

export default Heart
