import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import CV from "./pages/CV";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
