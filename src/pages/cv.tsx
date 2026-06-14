import * as React from 'react';
import type { PageProps } from 'gatsby';
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import { DashboardView } from '../components/cv/DashboardView';
import { IdeView } from '../components/cv/IdeView';
import '../styles/cv.css';

// Structured CV Data derived from Nguyen_Ba_Tuan_Anh_CV.yaml
const cvData = {
  name: 'Nguyễn Bá Tuấn Anh',
  headline: 'Java Web Developer Full-Stack & Instructor',
  location: 'Phường Hoàng Liệt, TP Hà Nội',
  email: 'anhnbt.it@gmail.com',
  phone: '+84 349 876 595',
  github: 'anhnbt',
  summary: 'Full-stack engineer with 8+ years of experience in web development, currently Java Web Instructor at CodeGym Vietnam. Skilled in designing and building scalable systems with Java, Spring Boot, React, and React Native. Strong focus on mentoring junior developers, modular architecture, and writing clean, maintainable systems.',
  experiences: [
    {
      company: 'CodeGym Vietnam',
      position: 'Instructor – Java Web Developer Bootcamp',
      startDate: '2024-05',
      endDate: 'Present',
      location: 'Hà Nội, Vietnam',
      highlights: [
        'Full-time instructor training 200+ students in core Java, Spring Boot, database design, and modern web development principles.',
        'Mentored student squads through complex end-to-end projects, performing deep code reviews and architecture consulting.',
      ],
    },
    {
      company: 'BINH MINH INFORMATICS JOINT STOCK COMPANY',
      position: 'Full-Stack Developer',
      startDate: '2021-03',
      endDate: '2025-04',
      location: 'Hà Nội, Vietnam',
      highlights: [
        'Developed secure, highly scalable government platforms using Spring Boot, Angular, and Oracle Database.',
        'Optimized legacy database query execution times and enhanced system security policies.',
      ],
    },
    {
      company: 'Manteiv Group',
      position: 'Full-Stack Developer',
      startDate: '2015',
      endDate: '2019',
      location: 'Hà Nội, Vietnam',
      highlights: [
        'Built engaging, SEO-optimized game portals and landing pages.',
        'Improved page rendering performance, Core Web Vitals, and search visibility, resulting in increased organic search volume.',
      ],
    },
  ],
  projects: [
    {
      name: 'EAGENT PAYMENT PLATFORM',
      startDate: '2023-04',
      endDate: 'Present',
      summary: 'Full-stack',
      highlights: [
        'Integrated dynamic transaction confirmations usingVietQR, MB Bank, and BIDV payment gateways.',
      ],
    },
    {
      name: 'ANHNBT.COM BLOG',
      startDate: '2016-05',
      endDate: '2025',
      summary: 'Personal CMS project',
      highlights: [
        'Designed and deployed a lightweight, highly custom content management system driving ~1 million page visits per month.',
      ],
    },
  ],
  educations: [
    {
      institution: 'Hanoi-Aptech',
      area: 'Software Engineering',
      startDate: '2013',
      endDate: '2025',
      location: 'Hà Nội, Vietnam',
    },
    {
      institution: 'CodeGym Vietnam',
      area: 'Full-Stack Java Web Developer',
      startDate: '2020-07',
      endDate: '2021-02',
      location: 'Hà Nội, Vietnam',
    },
  ],
  skills: [
    {
      label: 'Backend Development',
      details: 'Java, Spring Boot, Spring MVC, REST API, Microservices, JWT',
    },
    {
      label: 'Frontend Systems',
      details: 'ReactJS, Angular, React Native (Expo), HTML, CSS, JavaScript, TypeScript',
    },
    {
      label: 'Database Management',
      details: 'MySQL, PostgreSQL, SQL Server, Oracle Database',
    },
    {
      label: 'DevOps & Infrastructure',
      details: 'Docker, Nginx, Apache Tomcat, Ubuntu/CentOS, Windows Server',
    },
    {
      label: 'Other Methodologies',
      details: 'Git Version Control, Agile Scrum',
    },
  ],
  reference: 'Le Thi Chau - Training Director, CodeGym Vietnam (Phone: 0966807709, Email: chau.le@codegym.vn)',
};

const CvPage = (_props: PageProps) => {
  const [viewMode, setViewMode] = React.useState<'dashboard' | 'ide'>('dashboard');

  const toggleView = () => {
    setViewMode((prev) => (prev === 'dashboard' ? 'ide' : 'dashboard'));
  };

  const handlePrint = () => {
    // Media queries force dashboard layout and hide other blocks during window.print
    window.print();
  };

  return (
    <Layout>
      <div className="cv-page-wrapper">
        {/* Controls bar */}
        <div className="cv-controls-bar">
          <button className="cv-btn btn-accent" onClick={toggleView} aria-label="Toggle CV Presentation Mode">
            {viewMode === 'dashboard' ? (
              <>
                <i className="fas fa-code" aria-hidden="true" />
                <span>IDE View</span>
              </>
            ) : (
              <>
                <i className="fas fa-desktop" aria-hidden="true" />
                <span>Dashboard View</span>
              </>
            )}
          </button>
          <button className="cv-btn" onClick={handlePrint} aria-label="Print CV to PDF">
            <i className="fas fa-print" aria-hidden="true" />
            <span>Print / PDF</span>
          </button>
        </div>

        {/* View Switcher with slide-in styles */}
        {viewMode === 'dashboard' ? (
          <DashboardView {...cvData} />
        ) : (
          <IdeView
            name={cvData.name}
            email={cvData.email}
            phone={cvData.phone}
            github={cvData.github}
          />
        )}
      </div>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Nguyễn Bá Tuấn Anh - Java Web Developer Full-Stack (CV)</title>
    <meta name="description" content="Online CV of Nguyễn Bá Tuấn Anh - Java Web Developer Full-Stack & Instructor at CodeGym Vietnam." />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
  </>
);

export default CvPage;
