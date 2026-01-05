export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with React, TypeScript, and Vite. Designed to showcase my software engineering skills.",
      tags: ["React", "TypeScript", "Vite", "CSS"]
    },
    {
      title: "Network Packet Sniffer",
      description: "A Python-based tool for analyzing network traffic patterns and detecting potential security anomalies.",
      tags: ["Python", "Networking", "Security"]
    },
    {
      title: "Secure Chat Application",
      description: "End-to-end encrypted messaging app utilizing AES-256 for secure communication between clients.",
      tags: ["Java", "Cryptography", "Socket Programming"]
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
