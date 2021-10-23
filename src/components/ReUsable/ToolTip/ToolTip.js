import classes from './ToolTip.module.css'

const ToolTip = ({ tip }) => {
    return (
        <div className={classes.ToolTip}>
            <p>?</p>
            <span>{tip}</span>
        </div>
    )
}

export default ToolTip
