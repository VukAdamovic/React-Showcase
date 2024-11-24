import classes from "./AddProject.module.css"
import Project from "../../MyClasses/Project.js";
import {useRef} from "react";

export default function AddProject({closeAddProject, saveProject}){
    const title = useRef('');
    const desc = useRef('');
    const date = useRef('');

    return (
        <div className={classes.container}>
            <form>
                <div className={classes.form_group}>
                    <label>Title</label>
                    <input ref={title} type="text"/>
                </div>
                <div className={classes.form_group}>
                    <label>Description</label>
                    <textarea ref={desc} type="text"/>
                </div>
                <div className={classes.form_group}>
                    <label>Due Date</label>
                    <input ref={date}  type="date" id="dueDate" name="dueDate"/>
                </div>
            </form>

            <div className={classes.group_button}>
                <button className="cancel-button" onClick={closeAddProject}>Cancel</button>
                <button className="custom_button"  onClick={() => saveProject(new Project(title.current.value, desc.current.value, date.current.value))}>
                    Save
                </button>
            </div>
        </div>
    );
}