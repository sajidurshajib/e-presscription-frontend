import { Link } from 'react-router-dom'
// import { EpGetStorage } from '../../../../utils/EpLocalStorage'
import classes from './SubmitEP.module.css'

const SubmitEP = () => {
    return (
        <div className={classes.SubmitEP}>
            <Link to="/ep" target="_blank">
                <button>Create Prescription</button>
            </Link>
        </div>
    )
}

export default SubmitEP
