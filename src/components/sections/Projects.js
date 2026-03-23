"use client";

import { projects } from "@/data/projects";

export default function ProjectsContent() {
    return (
        <div className="panel-3d">
            <h2 className="panel-title">Projects</h2>
            <p className="panel-subtitle-text">A collection of things I&apos;ve built</p>

            <div className="panel-grid">
                {projects.slice(0, 4).map((project, idx) => (
                    <div key={project.title} className="panel-card panel-card-compact">
                        {project.featured && (
                            <span className="panel-badge">★ Featured</span>
                        )}

                        <div
                            className="panel-accent-bar"
                            style={{
                                background: `linear-gradient(90deg, ${idx % 3 === 0 ? "#7c3aed, #a855f7"
                                    : idx % 3 === 1 ? "#a855f7, #c084fc"
                                        : "#6d28d9, #7c3aed"
                                    })`,
                            }}
                        />

                        <h3 className="panel-card-title">{project.title}</h3>

                        <p className="panel-text-sm">{project.description}</p>

                        <div className="panel-tags">
                            {project.tech.map((t) => (
                                <span key={t} className="panel-tag">{t}</span>
                            ))}
                        </div>

                        <div className="panel-links">
                            {project.github && project.github !== "#" && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-neon btn-neon-outline btn-sm"
                                >
                                    ⟨/⟩ GitHub
                                </a>
                            )}
                            {project.demo && project.demo !== "#" && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-neon btn-neon-primary btn-sm"
                                >
                                    🔗 Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
