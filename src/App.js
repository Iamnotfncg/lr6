import "./App.css"
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Header from './Components/Header';
import { CSSTransition } from 'react-transition-group';
import LoginPage from './Components/Auth/LoginPage';
import { SignInContext } from './context/SignInContext';

function App() {
    const [isLogged, setIsLogged] = useState(false);

    return (
            <SignInContext.Provider value={{ isLogged, setIsLogged }}>
                <DialogWindow />
                <Router>
                <Header />
                        <CSSTransition
                            timeout={300} classNames="dialog" unmountOnExit >
                            <Routes>
                                <Route path="/Login" Component={() => <LoginPage />} />
                            </Routes>
                        </CSSTransition>
                </Router>
            </SignInContext.Provider>
    );
}

export default App;
