import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EPrescriptionPDF from './pages/EPrescriptionPDF'
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
                    <Route path="/ep">
                        <EPrescriptionPDF />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default App
