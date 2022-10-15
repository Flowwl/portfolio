import React from "react";
import Router from "./Router";
import "./App.scss";
import TopBar from "@/components/layout/topBar/TopBar";
import Footer from "@/components/layout/footer/Footer";

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
