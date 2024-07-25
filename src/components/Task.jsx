import React from "react"

function Task({ title, description, price }) {
    return (
        <div className="task m-3 p-4 max-h-full duration-500">
            <h3 className="text-lg mb-1">{title}</h3>

            <p className="mb-10">{description}</p>

            <p className="price">
                Price: from {price.min} to {price.max}
            </p>

            <button className="accept">I need this!</button>
        </div>
    )
}

export default Task
