import {
    faClosedCaptioning,
    faHistory,
    faSearchPlus,
    faCommentMedical,
    faCalendarAlt,
    faPrescription,
    faUserCheck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import docImg from '../../../assets/img/doc.png'
import classes from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={classes.Sidebar}>
            <div className={classes.doc}>
                <div className={classes.docImg} style={{ backgroundImage: 'url(' + docImg + ')' }}></div>
                <h3>Demo Doctor</h3>
                <p>Medicine Specialist</p>
                <hr />
            </div>

            <ul className={classes.nav}>
                <li>
                    <FontAwesomeIcon icon={faClosedCaptioning} />
                    Chief Complaints
                </li>
                <li>
                    <FontAwesomeIcon icon={faHistory} />
                    History
                </li>
                <li>
                    <FontAwesomeIcon icon={faUserCheck} />
                    On-examination
                </li>
                <li>
                    <FontAwesomeIcon icon={faSearchPlus} />
                    Investigation
                </li>
                <li>
                    <FontAwesomeIcon icon={faCommentMedical} />
                    Advice
                </li>
                <li>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    Next Follow up{' '}
                </li>
                <li>
                    <FontAwesomeIcon icon={faPrescription} />
                    Medicine
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
