// import { Link } from 'react-router-dom'
import classes from './Dashboard.module.css'
import Sidebar from './Sidebar/Sidebar'

const Dashboard = () => {
    return (
        <div className={`${classes.Dashboard}`}>
            {/* <div className={`${classes.Dashboard} ${classes.minimize}`}> */}
            <Sidebar />
            <div>
                {/* <h2>Dashboard</h2>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link> */}
            </div>
        </div>
    )
}

export default Dashboard
