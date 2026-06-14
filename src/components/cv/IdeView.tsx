import * as React from 'react';

type FileTab = 'java' | 'yaml' | 'sql' | 'about';

interface IdeViewProps {
  name: string;
  email: string;
  phone: string;
  github: string;
}

export const IdeView: React.FC<IdeViewProps> = ({ name, email, phone, github }) => {
  const [activeTab, setActiveTab] = React.useState<FileTab>('java');
  const [isRunning, setIsRunning] = React.useState(false);
  const [logs, setLogs] = React.useState<string[]>([
    '$ mvn compile exec:java -Dexec.mainClass="cv.anhnbt.NguyenBaTuanAnh"',
    'Console initialized. Ready to compile and run class...',
  ]);

  const terminalEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const handleRun = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs([]);

    const logSteps = [
      { text: '$ mvn clean compile exec:java', delay: 0 },
      { text: '[INFO] Scanning for projects...', delay: 250 },
      { text: '[INFO] ------------------------------------------------------------------------', delay: 400 },
      { text: '[INFO] Building anhnbt-cv-core 1.0.0-SNAPSHOT', delay: 550 },
      { text: '[INFO]   from pom.xml', delay: 650 },
      { text: '[INFO] ------------------------------------------------------------------------', delay: 800 },
      { text: '[INFO] --- maven-clean-plugin:3.1.0:clean (default-clean) @ anhnbt-cv ---', delay: 1000 },
      { text: '[INFO] Deleting /target', delay: 1150 },
      { text: '[INFO] --- maven-resources-plugin:3.2.0:resources (default-resources) @ anhnbt-cv ---', delay: 1300 },
      { text: '[INFO] Copying 2 resources', delay: 1450 },
      { text: '[INFO] --- maven-compiler-plugin:3.8.1:compile (default-compile) @ anhnbt-cv ---', delay: 1600 },
      { text: '[INFO] Changes detected - recompiling the module!', delay: 1750 },
      { text: '[INFO] Compiling 1 source file to /target/classes', delay: 1900 },
      { text: '[INFO] --- exec-maven-plugin:3.0.0:exec (default-cli) @ anhnbt-cv ---', delay: 2150 },
      { text: '[INFO] Running: cv.anhnbt.NguyenBaTuanAnh.main()', delay: 2350 },
      { text: '>> [SYSTEM] Instantiating NguyenBaTuanAnh.class...', type: 'sys', delay: 2600 },
      { text: '>> [SYSTEM] Connecting references and skill sets...', type: 'sys', delay: 2850 },
      { text: '>> [STATUS] Current Position: Instructor – Java Web Developer Bootcamp at CodeGym Vietnam', type: 'sys', delay: 3100 },
      { text: '>> [SKILLS] Core Backend: Java, Spring Boot, Spring MVC, REST API, Microservices, JWT', type: 'sys', delay: 3350 },
      { text: '>> [SKILLS] Core Frontend: ReactJS, Angular, React Native (Expo), TypeScript, HTML, CSS', type: 'sys', delay: 3600 },
      { text: '>> [SKILLS] Database: MySQL, PostgreSQL, SQL Server, Oracle Database', type: 'sys', delay: 3850 },
      { text: '>> [SKILLS] DevOps: Docker, Nginx, Apache Tomcat, Linux Servers', type: 'sys', delay: 4100 },
      { text: '>> [CONTACT] Reach candidate at: anhnbt.it@gmail.com | +84 349 876 595', type: 'sys', delay: 4350 },
      { text: '[INFO] ------------------------------------------------------------------------', delay: 4600 },
      { text: '[INFO] BUILD SUCCESS', type: 'success', delay: 4750 },
      { text: '[INFO] Total time:  4.750 s', delay: 4900 },
      { text: '[INFO] Finished at: 2026-06-14T16:38:00+07:00', delay: 5000 },
      { text: '[INFO] ------------------------------------------------------------------------', delay: 5150 },
    ];

    logSteps.forEach((step) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step.text]);
        if (step.delay === logSteps[logSteps.length - 1].delay) {
          setIsRunning(false);
        }
      }, step.delay);
    });
  };

  return (
    <div className="cv-ide-frame">
      {/* IDE Window Bar */}
      <div className="cv-ide-header">
        <div className="cv-ide-dots">
          <span className="cv-ide-dot red" />
          <span className="cv-ide-dot yellow" />
          <span className="cv-ide-dot green" />
        </div>
        <div style={{ color: '#64748b', fontSize: '0.75rem', fontFamily: 'var(--cv-font-mono)', fontWeight: 500 }}>
          IntelliJ IDEA — cv-project-anhnbt
        </div>
        <button
          className="cv-btn btn-accent"
          onClick={handleRun}
          disabled={isRunning}
          style={{ padding: '4px 14px', fontSize: '0.75rem', borderRadius: '4px' }}
        >
          <i className="fas fa-play" style={{ color: '#ffffff' }} aria-hidden="true" />{' '}
          {isRunning ? 'Running...' : 'Run Class'}
        </button>
      </div>

      {/* Tab bar */}
      <div className="cv-ide-tabs-bar">
        <div
          className={`cv-ide-tab ${activeTab === 'java' ? 'active' : ''}`}
          onClick={() => setActiveTab('java')}
        >
          <i className="fab fa-java" aria-hidden="true" /> NguyenBaTuanAnh.java
        </div>
        <div
          className={`cv-ide-tab ${activeTab === 'yaml' ? 'active' : ''}`}
          onClick={() => setActiveTab('yaml')}
        >
          <i className="fas fa-file-lines" aria-hidden="true" /> skills.yaml
        </div>
        <div
          className={`cv-ide-tab ${activeTab === 'sql' ? 'active' : ''}`}
          onClick={() => setActiveTab('sql')}
        >
          <i className="fas fa-database" aria-hidden="true" /> projects.sql
        </div>
        <div
          className={`cv-ide-tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          <i className="fas fa-file-lines" aria-hidden="true" /> about_me.txt
        </div>
      </div>

      {/* Main Area */}
      <div className="cv-ide-main">
        {/* File Tree Explorer */}
        <aside className="cv-ide-sidebar">
          <div className="cv-tree-title">Project Explorer</div>
          <div className="cv-tree-node">
            <span style={{ color: '#e2e8f0', fontWeight: 'bold' }}>📂 src</span>
            <div className="cv-tree-node" style={{ marginLeft: '12px' }}>
              <span>📂 main</span>
              <div className="cv-tree-node" style={{ marginLeft: '12px' }}>
                <span>📂 java</span>
                <div className="cv-tree-node" style={{ marginLeft: '12px' }}>
                  <div
                    className={`cv-tree-file ${activeTab === 'java' ? 'active' : ''}`}
                    onClick={() => setActiveTab('java')}
                  >
                    <i className="fab fa-java" aria-hidden="true" /> NguyenBaTuanAnh.java
                  </div>
                </div>
              </div>
              <div className="cv-tree-node" style={{ marginLeft: '12px' }}>
                <span>📂 resources</span>
                <div className="cv-tree-node" style={{ marginLeft: '12px' }}>
                  <div
                    className={`cv-tree-file ${activeTab === 'yaml' ? 'active' : ''}`}
                    onClick={() => setActiveTab('yaml')}
                  >
                    <i className="fas fa-file-lines" aria-hidden="true" /> skills.yaml
                  </div>
                  <div
                    className={`cv-tree-file ${activeTab === 'sql' ? 'active' : ''}`}
                    onClick={() => setActiveTab('sql')}
                  >
                    <i className="fas fa-database" aria-hidden="true" /> projects.sql
                  </div>
                  <div
                    className={`cv-tree-file ${activeTab === 'about' ? 'active' : ''}`}
                    onClick={() => setActiveTab('about')}
                  >
                    <i className="fas fa-file-lines" aria-hidden="true" /> about_me.txt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Code Editor View */}
        <div className="cv-ide-editor">
          {activeTab === 'java' && (
            <>
              <div className="cv-code-line">
                <span className="cv-line-num">1</span>
                <span className="cv-code-text"><span className="cv-code-kw">package</span> cv.anhnbt;</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">2</span>
                <span className="cv-code-text"></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">3</span>
                <span className="cv-code-text"><span className="cv-code-kw">import</span> java.time.LocalDate;</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">4</span>
                <span className="cv-code-text"><span className="cv-code-kw">import</span> java.util.List;</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">5</span>
                <span className="cv-code-text"></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">6</span>
                <span className="cv-code-text"><span className="cv-code-cmt">/**</span></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">7</span>
                <span className="cv-code-text"><span className="cv-code-cmt"> * @author {name}</span></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">8</span>
                <span className="cv-code-text"><span className="cv-code-cmt"> * Role: Java Web Instructor & Full-Stack Engineer</span></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">9</span>
                <span className="cv-code-text"><span className="cv-code-cmt"> */</span></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">10</span>
                <span className="cv-code-text"><span className="cv-code-ann">@Builder</span></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">11</span>
                <span className="cv-code-text"><span className="cv-code-kw">public class</span> <span className="cv-code-cls">NguyenBaTuanAnh</span> <span className="cv-code-kw">implements</span> <span className="cv-code-cls">FullStackDeveloper</span> {"{"}</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">12</span>
                <span className="cv-code-text">    <span className="cv-code-kw">public static final</span> <span className="cv-code-type">String</span> <span className="cv-code-kw">EMAIL</span> = <span className="cv-code-str">"{email}"</span>;</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">13</span>
                <span className="cv-code-text">    <span className="cv-code-kw">public static final</span> <span className="cv-code-type">String</span> <span className="cv-code-kw">PHONE</span> = <span className="cv-code-str">"{phone}"</span>;</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">14</span>
                <span className="cv-code-text">    <span className="cv-code-kw">public static final</span> <span className="cv-code-type">String</span> <span className="cv-code-kw">GITHUB</span> = <span className="cv-code-str">"https://github.com/{github}"</span>;</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">15</span>
                <span className="cv-code-text"></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">16</span>
                <span className="cv-code-text">    <span className="cv-code-kw">public</span> <span className="cv-code-type">void</span> <span className="cv-code-meth">main</span>(<span className="cv-code-type">String</span>[] args) {"{"}</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">17</span>
                <span className="cv-code-text">        <span className="cv-code-cls">System</span>.out.println(<span className="cv-code-str">"Initializing developer profile..."</span>);</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">18</span>
                <span className="cv-code-text">        <span className="cv-code-cls">NguyenBaTuanAnh</span> dev = <span className="cv-code-kw">new</span> <span className="cv-code-cls">NguyenBaTuanAnh</span>();</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">19</span>
                <span className="cv-code-text">        dev.compileSkills();</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">20</span>
                <span className="cv-code-text">        dev.verifyStatus();</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">21</span>
                <span className="cv-code-text">    {"}"}</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">22</span>
                <span className="cv-code-text">{"}"}</span>
              </div>
            </>
          )}

          {activeTab === 'yaml' && (
            <>
              <div className="cv-code-line">
                <span className="cv-line-num">1</span>
                <span className="cv-code-text"><span className="cv-code-kw">skills:</span></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">2</span>
                <span className="cv-code-text">  <span className="cv-code-kw">backend:</span></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">3</span>
                <span className="cv-code-text">    - Java</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">4</span>
                <span className="cv-code-text">    - Spring Boot</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">5</span>
                <span className="cv-code-text">    - Spring MVC</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">6</span>
                <span className="cv-code-text">    - Microservices</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">7</span>
                <span className="cv-code-text">    - JWT REST APIs</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">8</span>
                <span className="cv-code-text">  <span className="cv-code-kw">frontend:</span></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">9</span>
                <span className="cv-code-text">    - ReactJS</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">10</span>
                <span className="cv-code-text">    - Angular</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">11</span>
                <span className="cv-code-text">    - React Native (Expo)</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">12</span>
                <span className="cv-code-text">    - TypeScript</span>
              </div>
            </>
          )}

          {activeTab === 'sql' && (
            <>
              <div className="cv-code-line">
                <span className="cv-line-num">1</span>
                <span className="cv-code-text"><span className="cv-code-kw">CREATE TABLE</span> <span className="cv-code-cls">projects</span> (</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">2</span>
                <span className="cv-code-text">    id <span className="cv-code-type">INT PRIMARY KEY</span>,</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">3</span>
                <span className="cv-code-text">    name <span className="cv-code-type">VARCHAR(100)</span>,</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">4</span>
                <span className="cv-code-text">    type <span className="cv-code-type">VARCHAR(50)</span>,</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">5</span>
                <span className="cv-code-text">    duration <span className="cv-code-type">VARCHAR(50)</span></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">6</span>
                <span className="cv-code-text">);</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">7</span>
                <span className="cv-code-text"></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">8</span>
                <span className="cv-code-text"><span className="cv-code-kw">INSERT INTO</span> <span className="cv-code-cls">projects</span> <span className="cv-code-kw">VALUES</span> (</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">9</span>
                <span className="cv-code-text">    <span className="cv-code-num">1</span>, <span className="cv-code-str">'EAGENT PAYMENT PLATFORM'</span>, <span className="cv-code-str">'Full-stack'</span>, <span className="cv-code-str">'2023-Present'</span></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">10</span>
                <span className="cv-code-text">);</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">11</span>
                <span className="cv-code-text"><span className="cv-code-kw">INSERT INTO</span> <span className="cv-code-cls">projects</span> <span className="cv-code-kw">VALUES</span> (</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">12</span>
                <span className="cv-code-text">    <span className="cv-code-num">2</span>, <span className="cv-code-str">'ANHNBT.COM BLOG'</span>, <span className="cv-code-str">'Personal CMS'</span>, <span className="cv-code-str">'2016-2025'</span></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">13</span>
                <span className="cv-code-text">);</span>
              </div>
            </>
          )}

          {activeTab === 'about' && (
            <>
              <div className="cv-code-line">
                <span className="cv-line-num">1</span>
                <span className="cv-code-text"><span className="cv-code-cmt"># Personal Philosophy</span></span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">2</span>
                <span className="cv-code-text">As an educator and software developer, I believe:</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">3</span>
                <span className="cv-code-text">1. Clear communication is as critical as clean code.</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">4</span>
                <span className="cv-code-text">2. Respecting system history makes us better developers.</span>
              </div>
              <div className="cv-code-line">
                <span className="cv-line-num">5</span>
                <span className="cv-code-text">3. Sustainability in work is key to longevity in this career.</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Terminal Pane */}
      <div className="cv-ide-console">
        <div className="cv-console-title">
          <span>Terminal (Maven Run Panel)</span>
          <span style={{ fontSize: '0.7rem', color: '#475569' }}>mvn-run [active]</span>
        </div>
        <div>
          {logs.map((log, index) => {
            let logClass = 'cv-console-log';
            if (log.startsWith('[INFO]')) {
              if (log.includes('SUCCESS')) {
                logClass += ' success';
              } else {
                logClass += ' info';
              }
            } else if (log.startsWith('$')) {
              logClass += ' cmd';
            }
            return (
              <div key={index} className={logClass}>
                {log}
              </div>
            );
          })}
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
};
