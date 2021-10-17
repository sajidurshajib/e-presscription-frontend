import InputNumber from '../../ReUsable/InputNumber/InputNumber'
import classes from './NextFollowUpInpOut.module.css'

const NextFollowUpInpOut = () => {
    return (
        <div className={classes.NextFollowUpInpOut}>
            <h3>Next Follow up</h3>

            <div className={classes.days}>
                <InputNumber label="After days" />
                <InputNumber label="After days" />
                <InputNumber label="After days" />
            </div>
        </div>
    )
}

export default NextFollowUpInpOut
