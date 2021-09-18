import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EprescriptionPage from './pages/EprescriptionPage'
import LoginPage from './pages/LoginPage'
import PatientsPage from './pages/PatientsPage'
import RegisterPage from './pages/RegisterPage'

const App = () => {
    return (
        <div>
            {/* Router */}
            <Router>
                <Switch>
                    <Route exact={true} path="/">
                        <EprescriptionPage />
                    </Route>
                    <Route path="/patients">
                        <PatientsPage />
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
