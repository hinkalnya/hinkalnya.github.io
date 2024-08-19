import Task from "../components/Task"

const PopularTasks = ({ tasks }) => {
    return (
        <div className="popular-tasks flex flex-wrap justify-center">
            {tasks &&
                tasks
                    .slice(0, 6)
                    .map((task, index) => (
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
