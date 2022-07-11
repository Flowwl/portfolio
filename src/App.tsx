import React from 'react';
import NavigationBar from "./components/layout/NavigationBar";
import Router from "./Router";
import Footer from "./components/layout/footer/Footer";
import "./App.scss";

function App() {
    return (
        <div>
            <NavigationBar/>
            <Router/>
            <Footer/>
        </div>
    );
}

export default App;
