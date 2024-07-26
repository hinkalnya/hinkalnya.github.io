import React, { useState } from "react"

const Faq = ({ faq: { question, answer } }) => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div onClick={toggleVisibility} className="faq">
            <div className="text-lg">+ {question}</div>
            <div className={`mt-2 ${isVisible ? "visible" : "hidden"}`}>
                {answer}
            </div>
        </div>
    )
}

export default Faq
