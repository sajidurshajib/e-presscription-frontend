import classes from './EpPreview.module.css'
import Example from './Example'

const EpPreview = () => {
    return (
        <div className={classes.EpPreview}>
            <div className={classes.Page}>
                <h2>E prescription</h2>
                <Example />
            </div>
        </div>
    )
}

export default EpPreview
