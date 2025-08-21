import sports1 from "../assets/sports1.jpg";
import sports2 from "../assets/sports2.jpg";
import sports3 from "../assets/sports3.jpg";

import sports4 from "../assets/sports4.jpg";
import sports5 from "../assets/sports5.jpg";

export default function Extracurriculars() {
  return (
    <section id="extracurriculars" className="portfolio-section">
      <h2>Extra Curriculars</h2>
      <ul>
        <li>Won Gold Medal Twice in Badminton Premier League at IISc, Bangalore (2025).</li>
        <li>Won Two Gold Medals (1st place) in Kho-Kho at the Inter IISER and IISc Sports Meet (IISM Pune - 2024 and IISM Trivandrum - 2023), showcasing teamwork, leadership, and competitive spirit.</li>
        <li>Won Inter-Departmental Kho-Kho tournament, IISc, Bangalore (2024).</li>
        <li>Won Silver Medal (2nd place) in 800m athletics event at SPECTRUM at IISc, Bangalore (2024).</li>
        <li>Won Gold Medal in Badminton and Volleyball sports meet at IIRS, Dehradun in 2022 and 2023.</li>
        <li>Participated in National level athletic meet, GKVK, Bangalore (2018).</li>
      </ul>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
        <div style={{ maxWidth: 320, textAlign: 'center' }}>
          <img src={sports1} alt="Inter IISER Sports Meet 2023" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
          <div style={{ marginTop: '0.5rem', fontSize: '1rem' }}>IISc Badminton Premier League 2023</div>
        </div>
        <div style={{ maxWidth: 320, textAlign: 'center' }}>
          <img src={sports2} alt="Playing snooker" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
          <div style={{ marginTop: '0.5rem', fontSize: '1rem' }}>Snooker practice at IISc</div>
        </div>
        <div style={{ maxWidth: 320, textAlign: 'center' }}>
          <img src={sports3} alt="Badminton practice" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
          <div style={{ marginTop: '0.5rem', fontSize: '1rem' }}>IISM Kho-Kho 2023</div>
        </div>
        <div style={{ maxWidth: 320, textAlign: 'center' }}>
          <img src={sports4} alt="Team celebration with trophies" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
          <div style={{ marginTop: '0.5rem', fontSize: '1rem' }}>Inter-Regional Cricket Tournament</div>
        </div>
        <div style={{ maxWidth: 320, textAlign: 'center' }}>
          <img src={sports5} alt="Cricket team group photo" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
          <div style={{ marginTop: '0.5rem', fontSize: '1rem' }}>IISM 2024</div>
        </div>
      </div>
    </section>
  );
}
