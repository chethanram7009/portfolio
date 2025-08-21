import graceBg from '../assets/grace_bg.jpg';

export default function Home() {
  return (
    <section id="home" className="portfolio-hero" style={{
      width: '100%',
      minHeight: '420px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      position: 'relative',
      marginBottom: '2rem',
    }}>
      <div style={{
        width: '40%',
        background: 'linear-gradient(180deg, #fff 80%, #e3e3e3 100%)',
        padding: '3.5rem 1.5rem 3.5rem 2.5rem',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <h1 style={{
          color: '#222',
          fontSize: '2.5rem',
          fontWeight: 700,
          letterSpacing: '2px',
          marginBottom: '1rem',
          textTransform: 'uppercase',
        }}>Welcome!</h1>
        <div style={{ color: '#444', fontSize: '1.15rem', fontWeight: 500 }}>
          Welcome to my portfolio! I am passionate about advancing Earth observation and water resources research through satellite data, geospatial analytics, and hydrological modeling. My work primarily focuses on stochastic modeling of GRACE background model uncertainties for gravity field recovery, as well as understanding groundwater dynamics and developing sustainable water management solutions. Explore my academic journey, research projects, and achievements as I strive to make meaningful contributions to both science and society.
        </div>
      </div>
      <div style={{
        width: '60%',
        height: '420px',
        backgroundImage: `url(${graceBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        borderRadius: '0 0 32px 0',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
      }}></div>
    </section>
  );
}
