const Task = ({ title, description, price }) => {
    return (
        <div className="task">
            <div className="task-title text-lg mb-1">{title}</div>
            <div className="task-description mb-10">{description}</div>
            <div className="task-price">
                Price: from {price.min} to {price.max}
            </div>

            <button className="task-button px-2 py-1 m-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 duration-300">
                I need this!
            </button>
        </div>
    )
}

export default Task
