import React from "react";
import Router from "./Router";
import "./App.scss";
import TopBar from "./app2/components/layout/TopBar";
import Footer from "./app2/components/layout/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-700 relative">
      <TopBar className="h-topBar" />
      <div className="flex grow">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
