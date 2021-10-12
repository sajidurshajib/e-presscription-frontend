import classes from './Advice.module.css'

const AdvicePrev = ({ advice }) => {
    return (
        <div className={classes.AdvicePrev}>
            <p>{advice}</p>
        </div>
    )
}

export default AdvicePrev
