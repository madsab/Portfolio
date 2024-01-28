import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import CV from "./pages/CV";
import IndexPage from "./pages/IndexPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
