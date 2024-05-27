import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../utils";
import SectionHeader from "../ui/SectionHeader";

const Projects = () => {
    const { t } = useTranslation();

    return (
        <section className="mt-5 max-w-7xl mx-auto md:px-8" id="projects">
            <SectionHeader title={t('projects')} subtitle={t('most_recent_works')} />

            <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-0 gap-5">
                {projects.map((project, idx) => (
                    <ProjectCard project={project} key={idx} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
