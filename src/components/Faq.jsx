import React, { useState } from "react"

const Faq = ({ faq: { question, answer } }) => {
    const [isOpen, setIsOpen] = useState(false)

    const headerElement = <h3>+ {question}</h3>
    const answerElement = isOpen && <p>{answer}</p>

    return (
        <div onClick={() => setIsOpen(!isOpen)} className="faq-item">
            {headerElement}
            {answerElement}
        </div>
    )
}

export default Faq
