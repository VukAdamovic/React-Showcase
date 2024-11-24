import classes from './ProjectGallery.module.css'

export default function ProjectGallery({ addProject, projects, existingProject }){
    return (
        <div className={classes.container}>
            <h2>Your Projects</h2>
            <button className="custom_button" onClick= {addProject} >+ Add Project</button>
            <ul className={classes.custom_ul}>
                {
                    projects.map((project) => {
                        return <li key={project.id} onClick={() => existingProject(project)} >{project.title}</li>;
                    })
                }
            </ul>
        </div>
    );
}