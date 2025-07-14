import React from 'react';

const App = () => {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', background: '#0f0f2d', color: '#f0f0f0', lineHeight: '1.6', overflowX: 'hidden' }}>
      <header style={{ textAlign: 'center', padding: '40px 20px', background: 'linear-gradient(to right, #1a1a40, #3f0071)', color: 'white' }}>
        <h1>Ponabirami A</h1>
        <p>⚡ EEE Student | 💻 Full Stack Learner | 🔌 Embedded Systems & Tech Enthusiast | 🤖 Minor in AI/ML</p>
        <div style={{ marginTop: '15px' }}>
          <a href="mailto:iamponabirami@gmail.com" style={linkStyle}>📧 Gmail</a>
          <a href="https://www.linkedin.com/in/ponabirami-a-28aba4317" target="_blank" rel="noopener noreferrer" style={linkStyle}>🔗 LinkedIn</a>
          <a href="https://github.com/Ponabirami1718" target="_blank" rel="noopener noreferrer" style={linkStyle}>💻 GitHub</a>
        </div>
      </header>

      <NavSection />

      <Section id="academics" title="📚 Academic Details">
        <div style={gridStyle}>
          <Card title="B.Tech in EEE" details={["Institution: Amrita Vishwa Vidyapeetham, Coimbatore", "CGPA: 9.2", "Expected Graduation: 2027"]} />
          <Card title="Higher Secondary Schooling" details={["Institution: Adwaith Thought Academy, Coimbatore", "Year of Completion: 2023", "Percentage: 90.5%"]} />
          <Card title="SSLC" details={["Institution: Adwaith G.N.S Matric Higher Sec School", "Year of Completion: 2021"]} />
        </div>
      </Section> 

      <Section id="skills" title="🧠 Skills">
        <div style={gridStyle}>
          <Card title="Programming Languages" list={['C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'React.js']} />
          <Card title="Tools" list={['MATLAB', 'Simulink', 'PSpice', 'LTSpice', 'Arduino IDE', 'Proteus', 'MPLAB']} />
          <Card title="Microcontrollers" list={['PIC16F877A', 'ESP32', 'Arduino UNO', 'ARM Cortex', 'Embedded Systems']} />
          <Card title="Machine Learning" list={['Linear and Logistic Regression', 'Decision Tree', 'Random Forest', 'SVM', 'XGBoost']} />
          <Card title="Deep Learning" list={['CNN', 'RNN', 'ANN', 'LSTM']} />
        </div>
      </Section>

      <Section id="projects" title="🚀 Projects">
        <div style={gridStyle}>
          {projectList.map(({ title, desc }) => <Card key={title} title={title} description={desc} />)}
        </div>
      </Section>

      <Section id="internships" title="💼 Internships">
        <div style={gridStyle}>
          <Card title="Malabar Cements Ltd." details={["Duration: 10 Days", "Overviewed control and electrical systems in cement production."]} />
          <Card title="Southern Railways – Signal & Telecommunication" details={["Duration: 15 Days", "Learned railway signaling and fiber optic systems."]} />
        </div>
      </Section>

      <Section id="certifications" title="📜 Certifications">
        <div style={gridStyle}>
          {certifications.map(({ title, desc }) => <Card key={title} title={title} description={desc} />)}
        </div>
      </Section>

      <Section id="resume" title="📄 Resume">
        <p>Download my complete resume below:</p>
        <a href="Ponabirami.pdf" download style={buttonStyle}>📥 Download Resume (PDF)</a>
      </Section>

      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#1a1a40', color: 'white', fontSize: '14px' }}>
        <p>&copy; 2025 Ponabirami A. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

const Section = ({ id, title, children }) => (
  <section id={id} style={sectionStyle}>
    <h2 style={headingStyle}>{title}</h2>
    <div style={boxStyle}>{children}</div>
  </section>
);

const Card = ({ title, details = [], list = [], description }) => (
  <div style={cardStyle}>
    <h3 style={cardTitleStyle}>{title}</h3>
    {description && <p>{description}</p>}
    {details.map((d, i) => <p key={i}>{d}</p>)}
    {list.length > 0 && <ul>{list.map((item, i) => <li key={i}>{item}</li>)}</ul>}
  </div>
);

const NavSection = () => (
  <nav style={{ background: '#250045', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '15px 0' }}>
    <a href="#academics" style={navLinkStyle}>🎓 Academics</a>
    <a href="#skills" style={navLinkStyle}>🛠️ Skills</a>
    <a href="#projects" style={navLinkStyle}>📂 Projects</a>
    <a href="#internships" style={navLinkStyle}>🏢 Internships</a>
    <a href="#certifications" style={navLinkStyle}>🏅 Certifications</a>
    <a href="#resume" style={navLinkStyle}>📄 Resume</a>
  </nav>
);

const linkStyle = { color: '#ffb703', textDecoration: 'none', margin: '0 10px' };
const navLinkStyle = { color: '#f0f0f0', textDecoration: 'none', margin: '10px 20px', fontWeight: 'bold', fontSize: '18px' };
const buttonStyle = { padding: '12px 24px', background: '#6a0dad', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' };
const sectionStyle = { padding: '50px 10%' };
const headingStyle = { color: '#ffb703', marginBottom: '20px', fontSize: '2rem', textTransform: 'uppercase' };
const boxStyle = { background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '30px', boxShadow: '0 8px 20px rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)' };
const cardStyle = { backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: '10px' };
const cardTitleStyle = { color: '#ffb703', marginBottom: '10px' };
const gridStyle = { display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' };

const projectList = [
  { title: 'Smart Waste Management Agent', desc: 'Goal-based agent to optimize waste collection using AI logic and simulation.' },
  { title: 'Gas Leakage Detection', desc: 'Simulation-based gas leakage alerting system for industrial safety applications.' },
  { title: 'Smart Waiting Room', desc: 'Built using PIC16F877A to automate queue management in clinics.' },
  { title: 'Fake Currency Detection', desc: 'Uses ESP32 camera module and ML to detect counterfeit notes.' },
  { title: 'Karnaugh Map Generator', desc: 'Python tool to simplify Boolean expressions and generate K-maps.' },
  { title: 'Power Output Prediction', desc: 'ML model to predict electrical power generation from environmental data.' },
  { title: 'Stability Classification in Smart Grid', desc: 'ML model to classify grid states for proactive stability management.' },
  { title: 'Temperature and Humidity Detector', desc: 'ESP32-based sensor system with web dashboard.' }
];

const certifications = [
  { title: '🔧 MATLAB Onramp', desc: 'Hands-on course to learn MATLAB basics by MathWorks.' },
  { title: '🧠 Data Structures & Algorithms – Udemy', desc: 'DSA training with C++ and Python.' },
  { title: '💻 Front-End Development – Simplilearn', desc: 'HTML, CSS, JavaScript, and responsive UI development.' },
  { title: '📘 Embedded C Programming', desc: 'C programming for microcontroller development and interfacing.' },
  { title: '📚 Object Oriented Programming – NPTEL', desc: 'OOP concepts using C++ and Java.' },
  { title: '🤖 Introduction to Machine Learning – Coursera', desc: 'ML algorithms by Andrew Ng (Stanford).' },
  { title: '🌐 Responsive Web Design – freeCodeCamp', desc: 'Media queries and mobile-first design principles.' },
  { title: '🌐 Cisco – Introduction to Networking', desc: 'Networking basics including IP, Ethernet, and router config.' }
];

export default App;