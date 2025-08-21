import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Training from './pages/Training';
import Publications from './pages/Publications';
import Awards from './pages/Awards';
import Fieldwork from './pages/Fieldwork';
import Extracurriculars from './pages/Extracurriculars';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="portfolio-layout">
      <header className="portfolio-header" style={{
        width: '100%',
        background: 'rgba(255,255,255,0.95)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
      }}>
        <nav className="portfolio-navbar" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '64px',
          gap: '2rem',
        }}>
          <a href="#home" style={{ color: '#222', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '6px', transition: 'background 0.2s', margin: '0 0.5rem' }}>Home</a>
          <a href="#about" style={{ color: '#222', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '6px', transition: 'background 0.2s', margin: '0 0.5rem' }}>About</a>
          <a href="#education" style={{ color: '#222', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '6px', transition: 'background 0.2s', margin: '0 0.5rem' }}>Education</a>
          <a href="#skills" style={{ color: '#222', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '6px', transition: 'background 0.2s', margin: '0 0.5rem' }}>Skills</a>
          <a href="#projects" style={{ color: '#222', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '6px', transition: 'background 0.2s', margin: '0 0.5rem' }}>Projects</a>
          <a href="#experience" style={{ color: '#222', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '6px', transition: 'background 0.2s', margin: '0 0.5rem' }}>Experience</a>
          <a href="#training" style={{ color: '#222', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '6px', transition: 'background 0.2s', margin: '0 0.5rem' }}>Training</a>
          <a href="#publications" style={{ color: '#222', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '6px', transition: 'background 0.2s', margin: '0 0.5rem' }}>Publications</a>
          <a href="#awards" style={{ color: '#222', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '6px', transition: 'background 0.2s', margin: '0 0.5rem' }}>Awards</a>
          <a href="#fieldwork" style={{ color: '#222', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '6px', transition: 'background 0.2s', margin: '0 0.5rem' }}>Fieldwork</a>
          <a href="#extracurriculars" style={{ color: '#222', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '6px', transition: 'background 0.2s', margin: '0 0.5rem' }}>Extra Curriculars</a>
          <a href="#contact" style={{ color: '#222', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '6px', transition: 'background 0.2s', margin: '0 0.5rem' }}>Contact</a>
        </nav>
      </header>
      <main className="portfolio-main" style={{ textAlign: 'justify', marginTop: '80px' }}>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="training"><Training /></section>
        <section id="publications"><Publications /></section>
        <section id="awards"><Awards /></section>
        <section id="fieldwork"><Fieldwork /></section>
        <section id="extracurriculars"><Extracurriculars /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
