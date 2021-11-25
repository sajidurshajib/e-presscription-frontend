import { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Auth } from './allContext'
import AuthCheck from './components/AuthCheck/AuthCheck'
import EPrescriptionPDF from './pages/EPrescriptionPDF'
import EprescriptionPage from './pages/EprescriptionPage'
import { authReducer, authState } from './reducer/authReducer'
import ProtectedRoute from './routes/ProtectedRoute'

const App = () => {
    const [stateAuth, dispatchAuth] = useReducer(authReducer, authState)
    return (
        <div>
            {/* Router */}
            <Auth.Provider value={{ stateAuth, dispatchAuth }}>
                <Router>
                    <Switch>
                        <ProtectedRoute exact={true} path="/" component={EprescriptionPage} />
                        <ProtectedRoute path="/ep" component={EPrescriptionPDF} />
                        <Route path="/auth/:token">
                            <AuthCheck />
                        </Route>
                    </Switch>
                </Router>
            </Auth.Provider>
        </div>
    )
}
export default App
