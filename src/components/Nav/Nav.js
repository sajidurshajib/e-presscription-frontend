import { faAlignLeft, faPrescription } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SidebarContext } from '../../allContext'
import epLogo from '../../assets/img/logo.png'
import classes from './Nav.module.css'

const Nav = () => {
    let location = useLocation()

    const { state, dispatch } = useContext(SidebarContext)
    let h = state.expand ? 'hide' : 'unhide'

    return (
        <div className={classes.Nav}>
            {/* e-prescription logo */}
            {location.pathname === '/' ? (
                <span className={classes.alignLeft} onClick={() => dispatch({ type: h })}>
                    <FontAwesomeIcon icon={faAlignLeft} />
                </span>
            ) : (
                <Link to="/">
                    <img src={epLogo} alt="" />
                </Link>
            )}

            <ul>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faPrescription} />
                        ePrescription
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Nav
