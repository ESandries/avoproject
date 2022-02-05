import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "../components/Header";
import AvoProject from "../projects/avo-Project-React/AvoProject";
import '../main.css'

const App = () => {
    return (
        <div>
            <Header></Header>
            <AvoProject></AvoProject>
            {/* <BrowserRouter BrowserRouter >
                <Routes>
                    <Route exact path="/" element={<AvoProject />} />
                </Routes>
            </BrowserRouter > */}
        </div>
    );
};

export default App;
