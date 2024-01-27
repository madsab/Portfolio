import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/indexPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
