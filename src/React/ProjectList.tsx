import { FC } from 'react';
import type { ImageMetadata } from 'astro';


export interface Project {
    title: string;
    image: ImageMetadata;
    link?: string;
    preview?: string;
    report_link?:string;
    year?: string;
    status: 'Completed' | 'On Development' | 'Contributor';
    description: string;
    stack: string[];
    achievements: string[];
}

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="group flex h-full min-h-[38rem] flex-col rounded-2xl border border-[#ffffff10] bg-[#1414149c] p-4 transition-all duration-300 hover:border-[#ffffff30]">
            <div className="flex h-full flex-1 flex-col gap-4">
                <div className="overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
                    <img
                        src={project.image.src}
                        alt={project.title}
                        width={project.image.width}
                        height={project.image.height}
                        className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="flex flex-1 flex-col gap-4">
                    <div className="space-y-2">
                        <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
                        <p className="text-[var(--white-icon)] text-sm line-clamp-2">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs bg-yellow-500 rounded-full text-yellow-950 font-semibold"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-3">
                        {project.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-[var(--white-icon)]">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.17157L16.2426 7.75736L10.5858 13.4142Z" />
                                </svg>
                                <span>{achievement}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-[#ffffff10] pt-4">
                        <span className="text-sm px-2 py-1 bg-[#ffffff10] rounded-full text-[var(--white-icon)]">
                            {project.status}
                        </span>
                        {(project.link || project.preview) && (
                            <div className="flex gap-2">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 hover:bg-[#ffffff10] rounded-lg transition-colors duration-200"
                                        aria-label="Source Code"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
                                        </svg>
                                    </a>
                                )}
                                {project.preview && (
                                    <a
                                        href={project.preview}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 hover:bg-[#ffffff10] rounded-lg transition-colors duration-200"
                                        aria-label="Live Preview"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectList: FC<{ projects: Project[] }> = ({ projects }) => {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch auto-rows-fr">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};

export default ProjectList;