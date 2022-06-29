import React from 'react';
import NavigationBar from "./components/layout/NavigationBar";
import Router from "./Router";

function App() {
    return (
        <div className="bg-red-400">
            <NavigationBar/>
            <Router/>
        </div>
    );
}

export default App;
