import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friendsData={props.state.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route exact path='/dialogs/*'
                               element={<Dialogs dialogs={props.state.dialogsPage}
                                                 store={props.store}
                                                 dispatch={props.dispatch}
                               />}/>
                        <Route path='/profile'
                               element={<Profile profilePage={props.state.profilePage}
                                                 dispatch={props.dispatch}
                               />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
