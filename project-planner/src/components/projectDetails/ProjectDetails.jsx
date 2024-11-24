import { useRef } from "react";
import classes from "./ProjectDetails.module.css";

export default function ProjectDetails({ project, addTask, clearTask, deleteProject }) {
    const taskRef = useRef();

    const handleAddTask = () => {
        const newTask = taskRef.current.value;

        if (newTask === "") {
            return;
        }

        const updatedProject = {
            ...project,
            tasks: [...project.tasks, newTask]
        };

        addTask(updatedProject); // Update the project with the new task
        taskRef.current.value = ""; // Clear the input field

    };

    return (
        <div className={classes.container}>
            <div className={classes.infromation}>
                <div className={classes.title_button}>
                    <h1>{project.title}</h1>
                    <button className="cancel-button" onClick={() => deleteProject(project)}>Delete</button>
                </div>
                <p>{project.date}</p>
                <p>{project.desc}</p>
            </div>
            <div>
                <h1>Tasks</h1>
                <div className={classes.form_group}>
                    <input type="text" ref={taskRef} />
                    <button className="custom_button" onClick={handleAddTask}>
                        Add Task
                    </button>
                </div>

                <div className={classes.task_list}>
                    {project.tasks.map((currTask, index) => (
                        <div key={index} className={classes.task_item}>
                            <p>{currTask}</p>
                            <button
                                className={classes.clear_button}
                                onClick={() => clearTask(project, currTask)}
                            >
                                Clear
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
