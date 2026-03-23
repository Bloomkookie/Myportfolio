"use client";

import { skills } from "@/data/skills";

export default function SkillsContent() {
    return (
        <div className="panel-3d">
            <h2 className="panel-title">My Skills</h2>
            <p className="panel-subtitle-text">
                Combining deep technical expertise with creative thinking.
            </p>

            <div className="panel-skills-grid">
                {skills.map((category, catIdx) => (
                    <div key={category.category} className="panel-card panel-card-compact">
                        <h3 className="panel-card-title" style={{ color: "#c084fc" }}>
                            <span className="panel-cat-icon">
                                {catIdx === 0 ? "⚡" : catIdx === 1 ? "🔧" : "🛠️"}
                            </span>
                            {category.category}
                        </h3>

                        <div className="panel-tags">
                            {category.items.map((skill) => (
                                <span key={skill.name} className="panel-tag">
                                    {skill.icon} {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
