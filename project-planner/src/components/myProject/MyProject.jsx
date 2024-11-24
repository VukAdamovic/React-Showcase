import logo from '../../assets/no-projects.png'
import classes from './MyProject.module.css'

export default function MyProject({ addProject}){
    return (
        <div className={classes.container}>
            <img src={logo} alt="Logo"/>
            <h2 className={classes.custom_h2}>No project selected</h2>
            <p className={classes.custom_p}>Select a project or get started with new one</p>
            <button className="custom_button" onClick={addProject}>Create new project</button>
        </div>
    )
}
