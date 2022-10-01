import React from "react";
import NavigationBar from "./app1/components/layout/NavigationBar2";
import Router from "./Router";
import Footer from "./app1/components/layout/footer/Footer2";
import "./App.scss";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavigationBar />
      <div className="flex grow">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
