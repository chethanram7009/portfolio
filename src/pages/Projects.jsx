import graceDownscaling from '../assets/grace_downscaling.jpg';

export default function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <h2>Dissertation Projects</h2>
      <ul>
        <li>
          <strong>GRACE Gravity Field Recovery with Background Model Uncertainty</strong> <span style={{float:'right'}}>Aug 2023 – Current <span style={{color:'red', fontStyle:'italic'}}>(PhD - Ongoing)</span></span><br/>
          <em>Dr.-Ing. Bramha Dutt Vishwakarma (ICWaR, IISc)</em>
          <ul>
            <li>🧩   Developed a framework to pre-process GRACE Level 1B instrument data with the Bin2AsciiLevel1b tool.</li>
            <li>💻   Modified the open-source GRACETOOLS MATLAB scripts to handle missing K-band ranging instrument observations. Using this, JPL level 1B data is processed for a month, and compared the results to available level 2 spherical harmonic coefficients and formal errors.</li>
            <li>💡   A detailed error assessment of ocean tide modesls were carried out and it's Variance-Covariance matrix (VCM) was estimated.</li>
          <li>
            <strong>Downscaling GRACE Storage Change to Study Groundwater Dynamics and Drought Assessment over the Ganga Basin</strong> <span style={{float:'right'}}>June 2022 – June 2023 <span style={{fontStyle:'italic', color:'#007'}}>(M.Tech - Completed)</span></span><br/>
            <em>Dr. Bhaskar. R Nikam (Water Resource Department, IIRS-ISRO) and Dr. Suresh Kannaujiya (Geosciences Department, IIRS-ISRO)</em>
            <ul>
              <li>🛰️   GRACE TWSA was downscaled to 0.25° resolution using statistical (Linear and Partial Least Squares) and ML (Random Forest and XGBoost) methods.</li>
              <li>🤖   The Random Forest model outperformed other statistical models in downscaling.</li>
              <li>💧   Throughout the basin, groundwater is declining at an average rate of 1.16 cm/year </li>
              <li>🌞   GGDI showed Aug 2015 to Oct 2017 as the most intense drought with -21.50 severity.</li>
            </ul>
          </li>
          </ul>
        </li>
        <li>
          <strong>Ergonomically Designed Farm Tools for Weeding in Row Crops</strong> <span style={{float:'right'}}>Aug 2020 – Apr 2021 <span style={{fontStyle:'italic', color:'#007'}}>(B.Tech - Completed)</span></span><br/>
          <em>Dr. Prasanna Kumar (GKVK, UASB)</em>
          <ul>
            <li>🔧   Designed and developed farm tools such as Dibbler, Scrapper, and tiller attachments for the weeding and sowing operations in the row crops.</li>
            <li>✅   The performance of the tools were analysed in the various agricultural crops.</li>
          </ul>
        </li>
      </ul>
      <h2>Research Projects</h2>
      <ul>
        <li>
          <strong>Impact of Climate Change and Human Activities on Water Resources in HRB</strong>
          <span style={{float:'right'}}>Aug 2023 – Aug 2025 <span style={{color:'red', fontStyle:'italic'}}>(Group Project)</span></span><br/>
          <em>Water Conflict, Hydrological Modeling, GRACE, Wavelet Analysis</em>
          <ul>
            <li>Investigates the impact of climate change and human activities on water storage in HRB using remote sensing data, hydrological modeling, and wavelet analysis.</li>
            <li>The Bayesian change point detection algorithm was applied, identifying 1998 as the significant change point.</li>
            <li>Climatic shift and human activities have resulted in 40 Gt water storage loss from the Helmand River basin over the last two decades.</li>
            <li>The wavelet analysis reveals that the over-exploitation of water storage led to persistent dry conditions in the post-change period, triggering a phase shift in evapotranspiration patterns.</li>
          </ul>
        </li>
        <li>
          <strong>Specific yield of groundwater systems declines exponentially with a water table</strong>
          <span style={{float:'right'}}>Aug 2023 – Mar 2025 <span style={{color:'red', fontStyle:'italic'}}>(Group Project)</span></span><br/>
          <em>Satellite Gravimetry, Groundwater Level</em>
          <ul>
            <li>Using satellite gravimetry data and available in-situ well data, it is shown that specific yield is not constant and varies exponentially with groundwater levels.</li>
            <li>The best fit exponential function is found to be the same across the United States, Europe, Australia, China, and India, with small variations in the rate of decay.</li>
            <li>Most of the regions investigated have experienced a decline in specific yield over the last two decades and the amount of groundwater perceived to be available for some locations is 80% less than that estimated using constant specific yield.</li>
          </ul>
        </li>
        <li>
          <strong>Enhancing Streamflow and Drought Assessment Over Conflicted Cauvery Basin</strong>
          <span style={{float:'right'}}>Aug 2023 – Nov 2023 <span style={{color:'red', fontStyle:'italic'}}>(Group Project)</span></span><br/>
          <em>abcd Model, SWAT Model, Drought Analysis</em>
          <ul>
            <li>Estimated streamflow using both the lumped "abcd" hydrological model and the semi-distributed Soil and Water Assessment Tool (SWAT) model, ensuring robust calibration and validation. The SWAT model performed better with NSE and R-square of 0.4 and 0.5, respectively.</li>
            <li>Predicted the streamflow at ungauged sub-basins using a well-calibrated SWAT model.</li>
            <li>Ensemble of SWAT and "abcd" models were developed to improve streamflow estimation, and long-term droughts were analyzed.</li>
          </ul>
        </li>
        <li>
          <strong>Improved Land Use Land Cover Classification using Google Earth Engine</strong>
          <span style={{float:'right'}}>Sept 2023 – Nov 2023 <span style={{color:'red', fontStyle:'italic'}}>(Group Project)</span></span><br/>
          <em>Random Forest, CART, Google Earth Engine</em>
          <ul>
            <li>Utilized Random Forest and CART (Classification and Regression Tree) supervised classification algorithms on the Google Earth Engine (GEE) cloud platform for accurate Land Use and Land Cover (LULC) classification.</li>
            <li>Results were validated against the ESRI 2020 LULC dataset, with CART achieving an overall accuracy of 0.79 and Random Forest demonstrating higher accuracy at 0.823.</li>
          </ul>
        </li>
        <li>
          <strong>Indices and Satellite Data Visualization using Google Earth Engine Apps</strong>
          <span style={{float:'right'}}>Sep 2022 – Nov 2022 <span style={{color:'red', fontStyle:'italic'}}>(Group Project)</span></span><br/>
          <em>Analytical Cartography, 3D GIS, Google Earth Engine</em>
          <ul>
            <li>As a part of Analytical Cartography & 3D GIS Academic Course, created a GEE-based app for visualization of various indices such as NDVI, NDWI, MNDWI, NDBI.</li>
          </ul>
        </li>
        <li>
          <strong>Web-based solutions for preparedness against landslides and floods</strong>
          <span style={{float:'right'}}>June 2022 – Jul 2022 <span style={{color:'red', fontStyle:'italic'}}>(Group Project)</span></span><br/>
          <em>Geospatial Workflows, Flood & Landslide Visualization</em>
          <ul>
            <li>As a part of the Geospatial Workflows Course, created a user-friendly web interface to visualize the flood and landslide regions of Ernakulam and Kottayam districts of Kerala in real time and locate the nearest available rescue sites.</li>
          </ul>
        </li>
        <li>
          <strong>Soil Erosion Modeling in Asan Watersheds Using RUSLE and Remote Sensing Data</strong>
          <span style={{float:'right'}}>Feb 2022 – Mar 2022 <span style={{color:'red', fontStyle:'italic'}}>(Group Project)</span></span><br/>
          <em>Rainfall, LULC, NDVI, Soil Data, Precipitation Indices</em>
          <ul>
            <li>This study used various geospatial inputs, such as rainfall, land use, land cover, NDVI, Soil data, and Precipitation indices, to estimate soil erosion rates in the Asan watershed.</li>
            <li>Estimated average soil erosion rates were found to be 5 - 7 tonnes per year.</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
