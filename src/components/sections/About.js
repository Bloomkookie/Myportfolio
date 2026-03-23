"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 80, damping: 20 }
    }
};

export default function AboutContent() {
    return (
        <motion.div
            className="panel-3d"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.h2 variants={itemVariants} className="panel-title">About Me</motion.h2>

            <div className="panel-card">
                <motion.p variants={itemVariants} className="panel-text">
                    I’m an aspiring AI engineer with a strong interest in transforming complex, real-world data into intelligent and scalable solutions. My work is driven by curiosity and a problem-solving mindset, particularly in areas where machine learning can uncover hidden patterns and insights.
                </motion.p>

                <motion.p variants={itemVariants} className="panel-text">
                    Currently, I’m working on an advanced <span className="text-accent">exoplanet detection system</span> using Temporal Fusion Transformers, applying deep learning techniques to time-series astronomical data to identify potential planets beyond our solar system. This project reflects my interest in combining AI with scientific research, particularly in domains like astronomy and space analytics.
                </motion.p>

                <motion.p variants={itemVariants} className="panel-text">
                    I have hands-on experience building end-to-end machine learning pipelines, from data collection and preprocessing to model development, evaluation, and deployment. I’ve worked on a diverse range of projects across computer vision, natural language processing, clustering, and predictive modeling. These include real-time systems, classification models, and data-driven applications, allowing me to develop both breadth and depth in AI/ML.
                </motion.p>

                <motion.p variants={itemVariants} className="panel-text">
                    Beyond machine learning, I bring a strong foundation in software engineering and backend development. I have experience working with REST APIs, databases (MySQL, MongoDB), and cloud platforms like AWS, along with tools such as Docker for building scalable and production-ready systems. This enables me to not only build models but also deploy and integrate them into real-world applications.
                </motion.p>

                <motion.p variants={itemVariants} className="panel-text">
                    I actively explore and work with datasets from platforms such as <span className="text-accent">NASA</span>, <span className="text-accent">ISRO</span>, SpaceX, and Kaggle, strengthening my data analysis skills using tools like Pandas, NumPy, and Matplotlib. I am also continuously advancing my knowledge in deep learning, model optimization, and system design, with a focus on building efficient and impactful AI solutions.
                </motion.p>

                <motion.h4 variants={itemVariants} className="panel-subtitle mt-6">Currently:</motion.h4>

                <div className="panel-list">
                    {[
                        "Developing an exoplanet detection system using Temporal Fusion Transformers",
                        "Building AI/ML projects across deep learning, NLP, and computer vision",
                        "Strengthening skills in advanced machine learning, data analysis, and visualization",
                        "Exploring large-scale real-world datasets from NASA, ISRO, and SpaceX",
                    ].map((item, i) => (
                        <motion.div key={i} variants={itemVariants} className="panel-list-item">
                            <span className="text-accent">✓</span>
                            <span>{item}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
