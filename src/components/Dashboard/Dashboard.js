import Body from '../Body/Body'
import Nav from '../Nav/Nav'
import classes from './Dashboard.module.css'
import Sidebar from './Sidebar/Sidebar'

const Dashboard = () => {
    return (
        <div className={`${classes.Dashboard}`}>
            {/* <div className={`${classes.Dashboard} ${classes.minimize}`}> */}
            <Sidebar />
            <div>
                <Nav />
                <Body />
            </div>
        </div>
    )
}

export default Dashboard
