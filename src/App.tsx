import { BrowserRouter, Route, Routes } from "react-router-dom"
import CV from "./pages/CV/CV"
import IndexPage from "./pages/Index/IndexPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
