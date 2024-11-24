import classes from './App.module.css'
import ProjectGallery from "./components/projectGallery/ProjectGallery.jsx";
import MyProject from "./components/myProject/MyProject.jsx";
import {useState} from "react";
import AddProject from "./components/addProject/AddProject.jsx";
import ProjectDetails from "./components/projectDetails/ProjectDetails.jsx";


function App() {
    const [addProject, setAddProject] = useState(false);
    const [project, setProject] = useState(undefined);

    const [myProjects, setMyProjects] = useState([]);

    function handleAddProject(){
        setAddProject(true);
        setProject(undefined);
    }

    function handleCloseAddProject(){
        setAddProject(false);
        setProject(undefined);
    }

    function handleSaveProject(newProject){
        setAddProject(false);

        setMyProjects((prevMyProjects) => {
            return [...prevMyProjects, newProject];
        })
    }

    function handleProjectDetail (selectedProject) {
        setProject(selectedProject);
    }


    function addTask(updatedProject) {
        setMyProjects((prevProjects) => {
            const updatedProjects = prevProjects.map((proj) =>
                proj.id === updatedProject.id ? updatedProject : proj
            );


            setProject(updatedProject);

            console.log(updatedProjects); // Provera ažuriranih podataka
            return updatedProjects;
        });
    }



    function clearTask(project, taskToRemove) {
        const updatedProject = {
            ...project,
            tasks: project.tasks.filter((task) => {
                return task !== taskToRemove;
            }),
        };
        addTask(updatedProject);
    }


    function deleteProject(projectToDelete) {
        setMyProjects((prevState) => {
            const updatedProjects = prevState.map((proj) => ({
                ...proj,
                tasks: [...proj.tasks]
            }));

            return updatedProjects.filter(proj => proj.id !== projectToDelete.id);
        });
        setProject(false);
        console.log(myProjects);
    }



    return (
    <main>
      <div className={classes.container_flex}>
          <ProjectGallery projects={myProjects} addProject = {handleAddProject}  existingProject = {handleProjectDetail}/>
          { project ?
              <ProjectDetails project={project} addTask = {addTask} clearTask = {clearTask} deleteProject = {deleteProject}/> :
              addProject ? <AddProject closeAddProject = {handleCloseAddProject} saveProject = {handleSaveProject}/> : <MyProject addProject = {handleAddProject}/>
          }

      </div>
    </main>
  )
}

export default App
