import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/content" component={Content}/>
                </div>
            </div>
        </BrowserRouter>
    )

}

export default App;
