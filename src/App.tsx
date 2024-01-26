import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CV from "./pages/CV";
import Index from "./pages/IndexPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
