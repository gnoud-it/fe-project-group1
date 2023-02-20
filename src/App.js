import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./containers/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
