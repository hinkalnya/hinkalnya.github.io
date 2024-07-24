import React from "react"
import Faq from "../components/Faq"

const FaqSection = ({ faqs }) => (
    <div className="faq-section">
        {faqs.map((faq, index) => (
            <Faq key={index} faq={faq} />
        ))}
    </div>
)

export default FaqSection
