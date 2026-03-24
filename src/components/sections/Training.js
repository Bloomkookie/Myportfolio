"use client";

import { training } from "@/data/training";

export default function TrainingContent() {
    return (
        <div className="panel-3d">
            <h2 className="panel-title">Training</h2>
            <p className="panel-subtitle-text">Continuous learning and skill development</p>

            <div className="panel-timeline">
                {training.map((item, idx) => (
                    <div key={idx} className="panel-timeline-item">
                        <div className="panel-timeline-dot" />
                        <div className="panel-card panel-card-compact">
                            <div className="panel-timeline-header">
                                <div>
                                    <h3 className="panel-card-title">{item.title}</h3>
                                    <p className="text-accent" style={{ fontSize: "0.8rem" }}>
                                        {item.company}
                                    </p>
                                </div>
                                <span className="panel-badge">{item.period}</span>
                            </div>
                            <p className="panel-text-sm">{item.description}</p>
                            <div className="panel-tags">
                                {item.tech.map((t) => (
                                    <span key={t} className="panel-tag">{t}</span>
                                ))}
                            </div>
                            {item.link && (
                                <div className="panel-links" style={{ marginTop: "1rem" }}>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-neon btn-neon-primary btn-sm"
                                    >
                                        📜 View Certificate
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
