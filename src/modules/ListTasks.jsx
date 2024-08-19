import Task from "../components/Task"

const ListTasks = ({ tasks, limit }) => {
    tasks = tasks || []
    limit = limit || tasks.length
    const selectedTasks = tasks.slice(0, limit)

    return (
        <div className="popular-tasks flex flex-wrap justify-center">
            {selectedTasks.map((task, index) => (
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

export default ListTasks
