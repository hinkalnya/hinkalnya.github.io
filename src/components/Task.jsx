import React from "react"

function Task({ title, description, price }) {
    return (
        <div className="task">
            <h3>{title}</h3>

            <p className="description">{description}</p>

            <p className="price">
                {price.min} to {price.max}€
            </p>

            <button className="accept">I need this!</button>
        </div>
    )
}

export default Task
