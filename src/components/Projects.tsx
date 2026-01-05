export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with React, TypeScript, and Vite. Designed to showcase my software engineering skills. Self taught with the help of YouTube tutorials and skills learned at QUT ",
      tags: ["React", "TypeScript", "Vite", "CSS"]
    },
    {
      title: "NeuroDeck",
      description: "An interactive study app for university students integrating LibreTexts for open-access textbooks. Features AI-powered summaries, automated flashcard generation, and Anki-style spaced repetition for active learning.",
      tags: ["Java", "AI Integration", "LibreTexts API", "Web Scraping"],
      link: "https://lammy8.github.io/CAB-302/"
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
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link-btn">
                JavaDocs →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
