"use client";

import { experience } from "@/data/experience";

export default function ExperienceContent() {
    return (
        <div className="panel-3d">
            <h2 className="panel-title">Experience</h2>
            <p className="panel-subtitle-text">My journey so far</p>

            <div className="panel-timeline">
                {experience.map((item, idx) => (
                    <div key={idx} className="panel-timeline-item">
                        <div className="panel-timeline-dot" />
                        <div className="panel-card panel-card-compact">
                            <div className="panel-timeline-header">
                                <div>
                                    <h3 className="panel-card-title">{item.role}</h3>
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
