import PreviewSection from '../PreviewSection/PreviewSection'
import classes from './Body.module.css'

const Body = () => {
    return (
        <div className={classes.Body}>
            <div>
                <PreviewSection />
            </div>
            <div></div>
        </div>
    )
}

export default Body
