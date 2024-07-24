import React from "react"
import Task from "../components/Task"
import { popularTasks } from "../data.js"

const PopularTasks = () => {
    return (
        <div className="popular-tasks">
            {popularTasks.map((task, index) => (
                <Task
                    title={task.title}
                    description={task.description}
                    price={task.price}
                    key={index}
                />
            ))}
        </div>
    )
}

export default PopularTasks
