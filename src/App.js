import { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DataContext } from './allContext'
import EprescriptionPage from './pages/EprescriptionPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { dataState, dataReducer } from './reducer/dataReducer'

const App = () => {
    const [stateData, dispatchData] = useReducer(dataReducer, dataState)
    return (
        <div>
            {/* Router */}
            <Router>
                <Switch>
                    <Route exact={true} path="/">
                        {/* Data Context */}
                        <DataContext.Provider value={{ state: stateData, dispatch: dispatchData }}>
                            <EprescriptionPage />
                        </DataContext.Provider>
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
