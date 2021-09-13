import { Link } from 'react-router-dom'
const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Dashboard
