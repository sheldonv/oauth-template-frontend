import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {myContext} from './Context';
import HomePage from './components/HomePage/HomePage'
import LoginPage from './components/LoginPage/LoginPage';
import NavBar from './components/NavBar/NavBar';
import  './GlobalStyles.css'

const App = () => {
    const userObject = useContext(myContext)
    console.log(userObject)
    return (
        <div>
            <Router>
                <NavBar />  
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    {!userObject && <Route path="/login" component={LoginPage} exact />}
                    <Redirect to="/"/>
                </Switch>
                
            </Router>
        </div>
    )
}

export default App
