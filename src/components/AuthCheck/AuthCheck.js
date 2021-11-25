import { useParams, useHistory } from 'react-router-dom'
import classes from './AuthCheck.module.css'

const AuthCheck = () => {
    const { token } = useParams()
    let history = useHistory()

    localStorage.setItem('auth', JSON.stringify({ token }))
    history.push('/')

    return <div className={classes.AuthCheck}></div>
}

export default AuthCheck
