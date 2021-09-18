import { faPrescription, faSignInAlt, faSignOutAlt, faUserInjured, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import classes from './Nav.module.css'

const Nav = () => {
    return (
        <div className={classes.Nav}>
            <ul>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faPrescription} />
                        ePrescription
                    </Link>
                </li>
                <li>
                    <Link to="/patients">
                        <FontAwesomeIcon icon={faUserInjured} />
                        Patients
                    </Link>
                </li>
                <li>
                    <Link to="/register">
                        <FontAwesomeIcon icon={faUserPlus} />
                        Register
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        <FontAwesomeIcon icon={faSignInAlt} />
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Nav
