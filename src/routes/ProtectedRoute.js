import { useContext } from 'react'
import { Route } from 'react-router-dom'
import { Auth } from '../allContext'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { stateAuth } = useContext(Auth)

    return (
        <Route
            {...rest}
            render={(props) =>
                stateAuth.token.length !== 0 ? (
                    <Component {...rest} {...props} />
                ) : (
                    (window.location.href = 'http://localhost:3000')
                )
            }
        />
    )
}
export default ProtectedRoute
