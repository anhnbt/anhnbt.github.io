import * as React from 'react';

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
}

interface Project {
  name: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

interface Education {
  institution: string;
  area: string;
  startDate: string;
  endDate: string;
  location: string;
}

interface SkillGroup {
  label: string;
  details: string;
}

interface DashboardViewProps {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  summary: string;
  experiences: Experience[];
  projects: Project[];
  educations: Education[];
  skills: SkillGroup[];
  reference: string;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  name,
  headline,
  location,
  email,
  phone,
  github,
  summary,
  experiences,
  projects,
  educations,
  skills,
  reference,
}) => {
  return (
    <div className="cv-dashboard-view">
      {/* Header Banner */}
      <header className="cv-hero-header">
        <div className="cv-hero-main">
          <div className="cv-avatar-wrapper">
            <span className="cv-initials">TA</span>
            <div className="cv-avatar-ring"></div>
          </div>
          <div className="cv-hero-intro">
            <span className="cv-hero-badge">Java Web Instructor & Engineer</span>
            <h1 className="cv-hero-name">{name}</h1>
            <p className="cv-hero-tagline">{headline} — Building robust backends, teaching clean code, and engineering full-stack platforms.</p>
            <div className="cv-hero-meta">
              <span className="cv-meta-tag">
                <i className="fas fa-map-marker-alt" aria-hidden="true" /> {location}
              </span>
              <span className="cv-meta-tag">
                <i className="fas fa-briefcase" aria-hidden="true" /> CodeGym Vietnam
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Two-Column Layout */}
      <div className="cv-grid-container">
        {/* Left Sidebar */}
        <aside className="cv-sidebar-col">
          {/* Contact Cards */}
          <section className="cv-card-el">
            <h2 className="cv-card-title">
              <i className="fas fa-address-card" aria-hidden="true" /> Contact
            </h2>
            <div className="cv-contact-list">
              <a href={`mailto:${email}`} className="cv-contact-item">
                <span className="cv-contact-icon">
                  <i className="fas fa-envelope" aria-hidden="true" />
                </span>
                <div className="cv-contact-body">
                  <span className="cv-contact-label">Email</span>
                  <span className="cv-contact-value">{email}</span>
                </div>
              </a>
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="cv-contact-item">
                <span className="cv-contact-icon">
                  <i className="fas fa-phone" aria-hidden="true" />
                </span>
                <div className="cv-contact-body">
                  <span className="cv-contact-label">Phone</span>
                  <span className="cv-contact-value">{phone}</span>
                </div>
              </a>
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-contact-item"
              >
                <span className="cv-contact-icon">
                  <i className="fab fa-github" aria-hidden="true" />
                </span>
                <div className="cv-contact-body">
                  <span className="cv-contact-label">GitHub</span>
                  <span className="cv-contact-value">github.com/{github}</span>
                </div>
              </a>
              <div className="cv-contact-item">
                <span className="cv-contact-icon">
                  <i className="fas fa-map-marker-alt" aria-hidden="true" />
                </span>
                <div className="cv-contact-body">
                  <span className="cv-contact-label">Location</span>
                  <span className="cv-contact-value">{location}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Grouped Skills */}
          <section className="cv-card-el">
            <h2 className="cv-card-title">
              <i className="fas fa-tools" aria-hidden="true" /> Key Skills
            </h2>
            <div className="cv-skills-stack">
              {skills.map((grp, idx) => (
                <div key={idx} className="cv-skills-group">
                  <h3 className="cv-skills-title">{grp.label}</h3>
                  <div className="cv-skills-badges">
                    {grp.details.split(',').map((s, sIdx) => (
                      <span key={sIdx} className="cv-skill-badge">
                        {s.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* References */}
          <section className="cv-card-el">
            <h2 className="cv-card-title">
              <i className="fas fa-users" aria-hidden="true" /> References
            </h2>
            <div className="cv-ref-card">
              <span className="cv-ref-name">Lê Thị Châu</span>
              <span className="cv-ref-role">Training Director</span>
              <span className="cv-ref-company">CodeGym Vietnam</span>
              <div className="cv-ref-contact-row" style={{ marginTop: '10px' }}>
                <a href="tel:0966807709" className="cv-ref-link">
                  <i className="fas fa-phone-alt" aria-hidden="true" /> 0966807709
                </a>
                <a href="mailto:chau.le@codegym.vn" className="cv-ref-link">
                  <i className="fas fa-envelope" aria-hidden="true" /> chau.le@codegym.vn
                </a>
              </div>
            </div>
          </section>
        </aside>

        {/* Right Main Panel */}
        <main className="cv-main-col">
          {/* Summary Statement */}
          <section className="cv-card-el">
            <h2 className="cv-card-title">
              <i className="fas fa-user" aria-hidden="true" /> Professional Profile
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', margin: 0 }}>
              {summary}
            </p>
          </section>

          {/* Experience Timeline */}
          <section className="cv-card-el">
            <h2 className="cv-card-title">
              <i className="fas fa-briefcase" aria-hidden="true" /> Professional Experience
            </h2>
            <div className="cv-timeline">
              {experiences.map((exp, idx) => (
                <div key={idx} className="cv-timeline-node">
                  <div className="cv-timeline-marker"></div>
                  <div className="cv-timeline-header">
                    <h3 className="cv-timeline-title">{exp.position}</h3>
                    <span className="cv-timeline-date">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="cv-timeline-firm">
                    <i className="far fa-building" aria-hidden="true" /> {exp.company}
                  </div>
                  <ul className="cv-timeline-bullets">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects Showcase */}
          <section className="cv-card-el">
            <h2 className="cv-card-title">
              <i className="fas fa-project-diagram" aria-hidden="true" /> Featured Projects
            </h2>
            <div className="cv-projects-grid">
              {projects.map((proj, idx) => (
                <div key={idx} className="cv-project-card">
                  <div className="cv-project-header">
                    <h3 className="cv-project-name">{proj.name}</h3>
                    <span className="cv-project-tag">{proj.summary}</span>
                  </div>
                  <span className="cv-project-date">{proj.startDate} - {proj.endDate}</span>
                  <ul className="cv-timeline-bullets" style={{ margin: '8px 0 0 0', paddingLeft: '16px', fontSize: '0.88rem' }}>
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Sections */}
          <section className="cv-card-el">
            <h2 className="cv-card-title">
              <i className="fas fa-graduation-cap" aria-hidden="true" /> Education
            </h2>
            <div className="cv-edu-list">
              {educations.map((edu, idx) => (
                <div key={idx} className="cv-edu-item">
                  <div className="cv-edu-content">
                    <h3 className="cv-edu-degree">{edu.area}</h3>
                    <span className="cv-edu-school">{edu.institution} ({edu.location})</span>
                  </div>
                  <span className="cv-timeline-date">{edu.startDate} - {edu.endDate}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
