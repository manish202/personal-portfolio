import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectPopupModal from "./ProjectPopupModal";
import { type Project } from "./constantsAndTypes";

const ProjectsContainer = ({filteredProjects}:{filteredProjects:Project[]}) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    return (
        <>
            <div className="row g-4">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="col-md-6 col-lg-4">
                        <ProjectCard project={project} onViewMore={() => setSelectedProject(project)} />
                    </div>
                ))}
            </div>
            {selectedProject && (
                <ProjectPopupModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </>
    )
}

export default ProjectsContainer;