import React from "react";
import Router from "./Router";
import Footer from "./app1/components/layout/footer/Footer2";
import "./App.scss";
import TopBar from "./app2/components/layout/TopBar";

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-700">
      <TopBar />
      <div className="flex grow">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
