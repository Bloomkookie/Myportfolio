"use client";

import { certifications } from "@/data/certifications";

export default function CertificationsContent() {
    return (
        <div className="panel-3d">
            <h2 className="panel-title">Certifications</h2>
            <p className="panel-subtitle-text">Official recognitions of my skills</p>

            <div className="panel-grid">
                {certifications.map((cert, idx) => (
                    <div key={idx} className="panel-card panel-card-compact">
                        <div
                            className="panel-accent-bar"
                            style={{
                                background: `linear-gradient(90deg, ${idx % 3 === 0 ? "#7c3aed, #a855f7"
                                    : idx % 3 === 1 ? "#a855f7, #c084fc"
                                        : "#6d28d9, #7c3aed"
                                    })`,
                            }}
                        />
                        <h3 className="panel-card-title">{cert.title}</h3>
                        <p className="text-accent" style={{ fontSize: "0.85rem", marginBottom: "1rem" }}>
                            {cert.issuer}
                        </p>

                        <div className="panel-links mt-auto">
                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-neon btn-neon-primary btn-sm"
                                >
                                    📜 View Credential
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
