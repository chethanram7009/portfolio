import profileImg from '../assets/profile.jpg';

export default function About() {
  return (
    <section id="about" className="portfolio-section" style={{
      display: 'flex',
      alignItems: 'center',
      gap: '2.5rem',
      padding: '2.5rem 0',
    }}>
      <div style={{ flex: '0 0 380px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={profileImg} alt="Profile" style={{
          width: '380px',
          height: 'auto',
          borderRadius: '16px',
          objectFit: 'cover',
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        }} />
      </div>
      <div style={{ flex: 1, fontSize: '1.15rem', color: '#222', lineHeight: 1.7 }}>
        Hello, I'm <strong>Chethan</strong>— currently pursuing my Ph.D. at the Indian Institute of Science, Bangalore, where I focus on stochastic modeling of GRACE background   model uncertainties for gravity field recovery. My work aims to enhance our understanding of groundwater dynamics and develop sustainable water management solutions.
      </div>
    </section>
  );
}
