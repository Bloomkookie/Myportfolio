"use client";

import { achievements } from "@/data/achievements";

export default function AchievementsContent() {
    return (
        <div className="panel-3d">
            <h2 className="panel-title">Achievements</h2>
            <p className="panel-subtitle-text">Milestones and recognitions</p>

            <div className="panel-grid">
                {achievements.map((item, idx) => (
                    <div key={idx} className="panel-card panel-card-compact">
                        <span className="panel-badge" style={{ marginBottom: "0.5rem", display: "inline-block" }}>🏆 {item.award}</span>

                        <h3 className="panel-card-title">{item.title}</h3>

                        <p className="panel-text-sm">{item.description}</p>

                        {item.link && (
                            <div className="panel-links" style={{ marginTop: "1rem" }}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-neon btn-neon-outline btn-sm"
                                >
                                    🔗 View Details
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
