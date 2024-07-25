import React, { useState } from "react"

const Faq = ({ faq: { question, answer } }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen(!isOpen)

    const headerElement = <h3 className="text-lg">+ {question}</h3>
    const answerElement = isOpen && <p className="mt-2">{answer}</p>

    return (
        <div
            onClick={toggleIsOpen}
            className="faq-item mt-4 p-3 cursor-pointer select-none"
        >
            {headerElement}
            {answerElement}
        </div>
    )
}

export default Faq
