import { Link } from 'react-router-dom'
import classes from './Nav.module.css'

const Nav = () => {
    return (
        <div className={classes.Nav}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/patients">Patients</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    )
}
export default Nav
