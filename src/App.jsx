import React from "react"
import PopularTasks from "./modules/PopularTasks"
import FaqSection from "./modules/FaqSection"
import { faqData } from "./data"

const App = () => {
    return (
        <div className="container">
            <header>
                <h1>University Task Helper</h1>
                <p>
                    Offering comprehensive assistance with homeworks, lab works
                    and tests.
                </p>
            </header>
            <section>
                <h2>Popular orders</h2>
                <PopularTasks />
            </section>
            <section>
                <h2>FAQ</h2>
                <FaqSection faqs={faqData} />
            </section>
        </div>
    )
}

export default App
