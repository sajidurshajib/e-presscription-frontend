import { useContext } from 'react'
import env from 'react-dotenv'
import { Route } from 'react-router-dom'
import { Auth } from '../allContext'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { stateAuth } = useContext(Auth)

    const api = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_DOC_SITE : env.REACT_APP_DOC_SITE

    return (
        <Route
            {...rest}
            render={(props) =>
                stateAuth.token.length !== 0 ? <Component {...rest} {...props} /> : window.location.remove(`${api}`)
            }
        />
    )
}
export default ProtectedRoute
