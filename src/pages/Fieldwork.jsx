import gangaSurvey1 from '../assets/ganga_survey1.jpg';
import gangaSurvey2 from '../assets/ganga_survey2.jpg';
import stokGlacier1 from '../assets/stok_glacier1.jpg';
import stokGlacier2 from '../assets/stok_glacier2.jpg';
import stokGlacier3 from '../assets/stok_glacier3.jpg';



export default function Fieldwork() {
  return (
    <section id="fieldwork" className="portfolio-section">
      <h2>Fieldwork</h2>
      <div className="fieldwork-block">
        <h3>Hydro-geological Survey of Ganga Basin</h3>
        <p>
          Participated in a comprehensive hydro-geological survey of the Ganga basin, focusing on groundwater assessment, river morphology, and water quality analysis. The fieldwork involved data collection at multiple locations, interaction with local communities, and hands-on use of survey instruments for hydrological measurements.
        </p>
        <div className="fieldwork-images">
          <img src={gangaSurvey1} alt="Ganga Basin Survey - Data Collection" style={{maxWidth: '350px', marginRight: '1rem'}} />
          <img src={gangaSurvey2} alt="Ganga Basin Survey - Team at River" style={{maxWidth: '350px'}} />
        </div>
      </div>
      {/* Dissertation Projects Section */}
      <div className="fieldwork-block" style={{marginTop: '2rem'}}>
        <h3>Glacier Expedition: Stok Glacier</h3>
        <p>
          Joined a scientific expedition to Stok Glacier, Ladakh, to study glacier dynamics, snow cover, and climate interactions. The fieldwork included trekking across challenging terrain, conducting glaciological measurements, and observing the unique landscape and environmental conditions of the Himalayan region.
        </p>
        <div className="fieldwork-images">
          <img src={stokGlacier1} alt="Stok Glacier Expedition - Team" style={{maxWidth: '350px', marginRight: '0.5rem'}} />
          <img src={stokGlacier2} alt="Stok Glacier Expedition - Glacier View" style={{maxWidth: '350px', marginRight: '0.5rem'}} />
          <img src={stokGlacier3} alt="Stok Glacier Expedition - Glacier View" style={{maxWidth: '350px'}} />
        </div>
      </div>
    </section>
  );
}
