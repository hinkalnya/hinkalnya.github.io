import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NoPage from "./pages/NoPage"

const App = () => {
    return (
        <div className="wrapper p-3">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
