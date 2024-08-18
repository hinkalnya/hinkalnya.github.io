import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NoPage from "./pages/NoPage"

const App = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchDataFromGitHub = async (name) => {
            const response = await fetch(
                `https://raw.githubusercontent.com/hinkalnya/rtu-task-helper-data/master/${name}.json`
            )

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const newData = await response.json()
            setData((prevData) => ({ ...prevData, [name]: newData }))
        }

        fetchDataFromGitHub("tasks")
        fetchDataFromGitHub("faq")
    }, [])

    return (
        <div className="wrapper p-3">
            {!data.faq || !data.tasks ? (
                <div className="text-xl text-center">Loading...</div>
            ) : (
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home faq={data.faq} tasks={data.tasks} />}
                        />
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </BrowserRouter>
            )}
        </div>
    )
}

export default App
