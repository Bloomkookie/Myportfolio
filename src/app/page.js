"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import ChatWidget from "@/components/chatbot/ChatWidget";
import DetailModal from "@/components/ui/DetailModal";
import AboutContent from "@/components/sections/About";
import ProjectsContent from "@/components/sections/Projects";
import SkillsContent from "@/components/sections/Skills";
import ExperienceContent from "@/components/sections/Experience";
import ContactContent from "@/components/sections/Contact";
import HeroContent from "@/components/sections/Hero";
import TrainingContent from "@/components/sections/Training";
import CertificationsContent from "@/components/sections/Certifications";
import AchievementsContent from "@/components/sections/Achievements";

const SpaceCanvas = dynamic(
  () => import("@/components/three/SpaceCanvas"),
  { ssr: false }
);

const WAYPOINTS = [
  { id: "about", icon: "👩‍🚀", title: "About Me", tagline: "The person behind the code" },
  { id: "projects", icon: "🛸", title: "Projects", tagline: "Things I've launched into orbit" },
  { id: "skills", icon: "⚡", title: "Skills", tagline: "My technical arsenal" },
  { id: "experience", icon: "🌌", title: "Journey", tagline: "Where I've traveled so far" },
  { id: "training", icon: "📚", title: "Training", tagline: "Continuous learning" },
  { id: "certifications", icon: "📜", title: "Certifications", tagline: "Official credentials" },
  { id: "achievements", icon: "🏆", title: "Achievements", tagline: "Milestones reached" },
  { id: "contact", icon: "📡", title: "Contact", tagline: "Send a signal" },
];

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      {/* 3D Background — fixed behind everything */}
      <SpaceCanvas />

      {/* Scrollable HTML content on top */}
      <main className="space-journey">
        {/* Hero — full content */}
        <section className="space-section">
          <div className="waypoint-hero">
            <HeroContent />
          </div>
        </section>

        {/* Waypoints */}
        {WAYPOINTS.map((wp) => (
          <section className="space-section" key={wp.id}>
            <button
              className="waypoint-card"
              onClick={() => setActiveModal(wp.id)}
            >
              <span className="waypoint-icon">{wp.icon}</span>
              <h2 className="waypoint-title">{wp.title}</h2>
              <p className="waypoint-tagline">{wp.tagline}</p>
              <span className="waypoint-cta">Click to explore →</span>
            </button>
          </section>
        ))}
      </main>

      {/* Modals */}
      <DetailModal isOpen={activeModal === "about"} onClose={() => setActiveModal(null)} title="About Me" icon="👩‍🚀">
        <AboutContent />
      </DetailModal>
      <DetailModal isOpen={activeModal === "projects"} onClose={() => setActiveModal(null)} title="Projects" icon="🛸">
        <ProjectsContent />
      </DetailModal>
      <DetailModal isOpen={activeModal === "skills"} onClose={() => setActiveModal(null)} title="Skills" icon="⚡">
        <SkillsContent />
      </DetailModal>
      <DetailModal isOpen={activeModal === "experience"} onClose={() => setActiveModal(null)} title="Journey" icon="🌌">
        <ExperienceContent />
      </DetailModal>
      <DetailModal isOpen={activeModal === "training"} onClose={() => setActiveModal(null)} title="Training" icon="📚">
        <TrainingContent />
      </DetailModal>
      <DetailModal isOpen={activeModal === "certifications"} onClose={() => setActiveModal(null)} title="Certifications" icon="📜">
        <CertificationsContent />
      </DetailModal>
      <DetailModal isOpen={activeModal === "achievements"} onClose={() => setActiveModal(null)} title="Achievements" icon="🏆">
        <AchievementsContent />
      </DetailModal>
      <DetailModal isOpen={activeModal === "contact"} onClose={() => setActiveModal(null)} title="Contact" icon="📡">
        <ContactContent />
      </DetailModal>

      {/* Chatbot */}
      <div style={{ position: "fixed", zIndex: 100 }}>
        <ChatWidget />
      </div>
    </>
  );
}
