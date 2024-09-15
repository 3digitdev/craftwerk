import type {Project} from "../../types/projects";
import {ProjectType} from "../../types/projects";
import './ProjectList.css';

const getProjects = (): Project[] => {
    const now = new Date()
    return [
        {
            type: ProjectType.Knitting,
            title: 'Test Project',
            creator: 'Max Bussiere',
            startDate: now,
            endDate: new Date(now.getDate() + 7),
            dedication: null,
            dedicationDate: null,
            createdFor: null,
            occasion: null,
            dimensions: null,
            fabricInfo: null,
            quiltInfo: null,
            binding: null,
        }
    ];
}

type ProjectStubProps = {
    project: Project;
}

function ProjectStub({ project }: ProjectStubProps) {
    return <li>{project.title}  ({project.type})</li>;
}

function ProjectList() {
    const projects = getProjects().map(project => ProjectStub({ project }));
    return <ul>{projects}</ul>;
}

export default ProjectList;