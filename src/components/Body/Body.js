import InputSection from '../InputSection/InputSection'
import PreviewSection from '../PreviewSection/PreviewSection'
import classes from './Body.module.css'

const Body = () => {
    return (
        <div className={classes.Body}>
            <div>
                <PreviewSection />
            </div>
            <div>
                <InputSection />
            </div>
        </div>
    )
}

export default Body
