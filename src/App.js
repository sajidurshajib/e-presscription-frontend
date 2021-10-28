import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EprescriptionPage from './pages/EprescriptionPage'

const App = () => {
    return (
        <div>
            {/* Router */}
            <Router>
                <Switch>
                    <Route exact={true} path="/">
                        <EprescriptionPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default App
