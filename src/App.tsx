import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Set dark mode to true by default
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    // Check for user's preference in localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
    }
    // No else statement to preserve dark mode as default
  }, []);

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    // Handle window resize to determine mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Project data array for easy management and slider functionality
  const projects = [
    {
      title: "iMovie Application",
      description: "A movie booking application built using microservices architecture with Java, Spring Boot, and Angular. Implemented service discovery and load balancing for optimized communication.",
      sourceCode: "https://github.com/imovie-app",
      liveDemo: null
    },
    {
      title: "Malaria Cell Detection Tool",
      description: "A tool that detects malaria by classifying blood cells using Deep Learning (CNN). Created an interactive Streamlit interface for users to upload images and receive diagnostic results.",
      sourceCode: null,
      liveDemo: "https://sumanth1602-malaria-cell-detection-nndl-deploy-psbkrc.streamlit.app/"
    },
    {
      title: "AI Based Resume Parser",
      description: "A user-friendly resume parser utilizing large language models (GPT, Llama) with automatic text extraction and multi-faceted analysis of uploaded resumes.",
      sourceCode: "https://github.com/Sumanth1602/ai-resume-parser",
      liveDemo: null
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website built with React and TypeScript, featuring dark mode toggle and mobile-friendly design.",
      sourceCode: "https://github.com/Sumanth1602/portfolio-website",
      liveDemo: null
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather forecast application using OpenWeather API with location tracking and interactive data visualization.",
      sourceCode: "https://github.com/Sumanth1602/weather-app",
      liveDemo: "https://sumanth-weather-dashboard.netlify.app"
    },
    {
      title: "Task Management System",
      description: "A full-stack task management application with user authentication, task categorization, and deadline reminders built with Spring Boot and React.",
      sourceCode: "https://github.com/Sumanth1602/task-manager",
      liveDemo: null
    }
  ];

  // State for project slider
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projectsPerPage = isMobile ? 1 : 3;

  const nextProjects = () => {
    setCurrentProjectIndex((prevIndex) => 
      (prevIndex + projectsPerPage) % projects.length
    );
  };

  const prevProjects = () => {
    setCurrentProjectIndex((prevIndex) => {
      if (prevIndex === 0) {
        // Calculate the proper starting index when going from the first to the last set
        const remainder = projects.length % projectsPerPage;
        const lastPageStart = remainder === 0 
          ? projects.length - projectsPerPage 
          : projects.length - remainder;
        return lastPageStart;
      }
      return prevIndex - projectsPerPage;
    });
  };

  // Get current visible projects
  const currentProjects = () => {
    const result = [];
    for (let i = 0; i < projectsPerPage; i++) {
      const index = (currentProjectIndex + i) % projects.length;
      result.push(projects[index]);
    }
    return result;
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      {/* Header/Navigation */}
      <header className="header">
        <div className="logo">
          <h2>Sumanth</h2>
        </div>
        
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
        
        <button 
          className="theme-toggle" 
          onClick={toggleDarkMode} 
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Sumanth</h1>
          <h2>Software Developer</h2>
          <p>Enthusiastic Computer Science graduate with hands-on experience in developing RESTful APIs, microservices, and ML-based applications.</p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-primary">Contact Me</a>
            <a href="#projects" className="cta-secondary">View My Work</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate software developer with a strong foundation in modern web technologies.
              My goal is to build efficient, scalable, and user-friendly applications that solve real-world problems.
            </p>
            <p>
              With a background in Computer Science from Amrita Vishwa Vidhyapeetham, I specialize in developing
              RESTful APIs, microservices, and ML-based applications. I'm currently working as a Specialist Programmer
              at Infosys Ltd, where I contribute to building high-quality software solutions.
            </p>
          </div>
          <div className="about-image">
            {/* Placeholder for profile image */}
            <div className="profile-image-placeholder"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          <div className="skill-category">
            <h3>Languages</h3>
            <ul className="skill-list">
              <li>Java</li>
              <li>Python</li>
              <li>TypeScript</li>
              <li>SQL</li>
              <li>C++</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <ul className="skill-list">
              <li>Spring Boot</li>
              <li>Angular</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Streamlit</li>
              <li>Pandas/NumPy</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Concepts</h3>
            <ul className="skill-list">
              <li>Git</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>REST APIs</li>
              <li>Microservices</li>
              <li>Deep Learning (CNN, LLM)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-slider">
          <button 
            className="slider-btn slider-btn-prev" 
            onClick={prevProjects}
            aria-label="Previous projects"
          >
            &#10094;
          </button>
          
          <div className="projects-grid">
            {currentProjects().map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  {/* Project image placeholder */}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.sourceCode && (
                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                      Source Code
                    </a>
                  )}
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      View Live
                    </a>
                  )}
                  {!project.sourceCode && !project.liveDemo && (
                    <span>Coming Soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="slider-btn slider-btn-next" 
            onClick={nextProjects}
            aria-label="Next projects"
          >
            &#10095;
          </button>
        </div>
        
        <div className="slider-dots">
          {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
            <span 
              key={index} 
              className={`dot ${Math.floor(currentProjectIndex / projectsPerPage) === index ? 'active' : ''}`}
              onClick={() => setCurrentProjectIndex(index * projectsPerPage)}
            ></span>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Specialist Programmer</h3>
              <h4>Infosys Ltd. - Hyderabad</h4>
              <p className="timeline-date">July 2024 - Present</p>
              <p>
                Developed RESTful APIs for a logistics and shipping client (CMA CGM) using Java and Spring Boot.
                Collaborated with cross-functional teams to integrate front-end and back-end features with Angular and TypeScript.
                Optimized API performance and followed agile methodologies.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>B.Tech in Computer Science and Engineering</h3>
              <h4>Amrita Vishwa Vidhyapeetham</h4>
              <p className="timeline-date">Sept 2020 - May 2024</p>
              <p>
                GPA: 7.78/10.0. Coursework included Operating Systems, Database Management Systems, Computer Networks, 
                Machine Learning, Neural Networks and Deep Learning, Big Data Analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-container">
          <div className="cert-item">
            <h3>Developing REST APIs using Springboot</h3>
            <p className="cert-issuer">Offered by Lex - Infosys</p>
            <p className="cert-date">Jul 2024 - Aug 2024</p>
          </div>
          <div className="cert-item">
            <h3>Developing Single Page Applications using Angular</h3>
            <p className="cert-issuer">Offered by Lex - Infosys</p>
            <p className="cert-date">Aug 2024 - Sept 2024</p>
          </div>
          <div className="cert-item">
            <h3>IBM Data Science Professional Certificate</h3>
            <p className="cert-issuer">Offered by IBM & Coursera</p>
            <p className="cert-date">May 2022 - Aug 2022</p>
          </div>
          <div className="cert-item">
            <h3>Natural Language Processing Specialization</h3>
            <p className="cert-issuer">Offered by Deeplearning.AI and Coursera</p>
            <p className="cert-date">Oct 2023 - Dec 2023</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p><a href="mailto:kotlaks@gmail.com">kotlaks@gmail.com</a></p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p><a href="tel:+917981531158">+91 7981531158</a></p>
            </div>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/sayee-sumanth-kotla/" target="_blank" rel="noopener noreferrer">linkedin.com/sayee-sumanth-kotla</a>
            </div>
            <div className="contact-item">
              <h3>GitHub</h3>
              <a href="https://github.com/Sumanth1602" target="_blank" rel="noopener noreferrer">github.com/Sumanth1602</a>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Kotla Sayee Sumanth. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
