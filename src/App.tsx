import React from "react";
import Router from "./Router";
import TopBar from "@/components/layout/topBar/TopBar";
import Footer from "@/components/layout/footer/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-700 text-gray-0 overscroll-y-none relative font-roboto font-light">
      <TopBar className="h-topBar" />
      <div className="flex grow">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
