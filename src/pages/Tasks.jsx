import ListTasks from "../modules/ListTasks"

const Tasks = ({ tasks }) => {
    return (
        <section>
            <h2 className="text-2xl mt-4">List of all tasks I can do</h2>
            <ListTasks tasks={tasks} />
        </section>
    )
}

export default Tasks
