import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PatientPage from './pages/PatientPage'
import RegisterPage from './pages/RegisterPage'

const App = () => {
    return (
        <div>
            {/* Router */}
            <Router>
                <Switch>
                    <Route exact={true} path="/">
                        <HomePage />
                    </Route>
                    <Route path="/patient">
                        <PatientPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/register">
                        <RegisterPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default App
