export default function Experience() {
  return (
    <section id="experience" className="portfolio-section">
      <h2>Experience</h2>
      <div className="internship-block">
        <h3>Internship</h3>
        <div className="internship-details">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <em>Water Resources Department, Govt. of Karnataka</em>
            <span>Jan 2021 – Mar 2021</span>
          </div>
          <ul>
            <li>"Jalamrutha water literacy training".</li>
            <li>As a part of this industrial attachment, I have worked on GIS-based watershed planning and implementation of a water security plan at the Gram Panchayath level.</li>
          </ul>
        </div>
        <div className="internship-details" style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <em>V.S.T. Tillers and Tractors Limited</em>
            <span>July 2019 – Aug 2019</span>
          </div>
          <ul>
            <li>As a part of industrial training, worked in the production department of VST Tillers, Malur. Obtained hands-on experience in the manufacturing and testing of tillers.</li>
            <li>During this internship, I have shown a hardworking nature and resilient work culture.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
