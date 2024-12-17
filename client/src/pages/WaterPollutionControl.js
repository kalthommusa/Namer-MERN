import React from "react";

import filtrationImage from '../imgs/unite1.png'; 
import adsorptionImage from '../imgs/unite2.png';
import uvImage from '../imgs/unite2.png';  
import regenerationImage from "../imgs/unite1.png"; 
import nanofiltrationImage from "../imgs/unite4.png";

const WaterPollutionControl = () => {
  return (
    <div className="water-pollution-control-container">
      <h1 className="title">Water Pollution Control</h1>

      {/* Integrated Filtration Unit */}
      <section className="unit-section">
        <div className="unit-content">
          <h2>1. Integrated Filtration Unit</h2>
          <p>
            <strong>Design:</strong> Compact and modular, facilitating
            installation and relocation. <br />
            <strong>Materials:</strong> Corrosion-resistant materials, such as
            stainless steel or reinforced plastic. <br />
            <strong>Function:</strong> Mechanical filtration removes big solid
            particles from water, preparing it for further treatment.
          </p>
          <strong>Benefits:</strong>
          <ul>
            <li>Reduces strain on subsequent treatment stages.</li>
            <li>Easy mechanical processes result in minimal energy usage.</li>
          </ul>
        </div>
        <img
          src={filtrationImage}
          alt="Integrated Filtration Unit"
          className="unit-image"
        />
      </section>

      {/* Adsorption Unit */}
      <section className="unit-section">
        <div className="unit-content">
          <h2>2. Adsorption Unit</h2>
          <h3>i. Primary Adsorption Unit (R-DETA and R-Dithizone)</h3>
          <p>
            <strong>Design:</strong> Cylindrical or cubical to maximize water
            flow and adsorption. <br />
            <strong>Materials:</strong> Enhanced magnetic polymers that can be
            reused several times. <br />
            <strong>Function:</strong> Effectively eliminates anionic dyes and
            heavy metals.
          </p>
          <strong>Benefits:</strong>
          <ul>
            <li>Simultaneous adsorption reduces treatment time.</li>
            <li>Cost-effective due to the regenerating nature of the materials.</li>
          </ul>
          <h3>ii. Secondary Adsorption Unit (Modified Truffle Peels with TiO2 Nanoparticles)</h3>
          <p>
            <strong>Design:</strong> Optimized for maximum water contact
            surface. <br />
            <strong>Materials:</strong> Natural materials treated in an
            environmentally acceptable manner with TiO2 nanoparticles. <br />
            <strong>Function:</strong> Reduces leftover contaminants and
            improves water quality.
          </p>
          <ul>
            <li>Innovative use of sustainable and repurposed materials.</li>
            <li>Encourages environmental sustainability.</li>
          </ul>
        </div>
        <img
          src={adsorptionImage}
          alt="Adsorption Unit"
          className="unit-image"
        />
      </section>

      {/* UV Disinfection Unit */}
      <section className="unit-section">
        <div className="unit-content">
          <h2>3. UV Disinfection Unit</h2>
          <p>
            <strong>Design:</strong> Compact and enclosed to enhance operational
            safety and prevent UV leaks. <br />
            <strong>Materials:</strong> High-efficiency ultraviolet (UV) lamps
            encased in heat-resistant tubes. <br />
            <strong>Function:</strong> Removes bacteria, viruses, and
            microorganisms, resulting in biologically clean water.
          </p>
          <strong>Benefits:</strong>
          <ul>
            <li>Safe and effective disinfection without the use of chemicals.</li>
            <li>Ensures microbiological purity.</li>
          </ul>
        </div>
        <img
          src={uvImage}
          alt="UV Disinfection Unit"
          className="unit-image"
        />
      </section>

      {/* Adsorbent Regeneration Unit */}
      <section className="unit-section">
        <div className="unit-content">
          <h2>4. Adsorbent Regeneration Unit</h2>
          <p>
            <strong>Design:</strong> External unit for simple material removal
            and regeneration. <br />
            <strong>Materials:</strong> Regeneration procedures are based on
            heat or solvents. <br />
            <strong>Function:</strong> Restores reusable adsorbents such as
            R-DETA and R-Dithizone.
          </p>
          <strong>Benefits:</strong>
          <ul>
            <li>Lowers operating costs and material waste.</li>
            <li>Promotes sustainability by lengthening adsorbent life cycles.</li>
          </ul>
        </div>
        <img
          src={regenerationImage}
          alt="Adsorbent Regeneration Unit"
          className="unit-image"
        />
      </section>

      {/* Final Filtration Stage */}
      <section className="unit-section">
        <div className="unit-content">
          <h2>5. Final Filtration Stage (Nanofiltration)</h2>
          <p>
            <strong>Design:</strong> Multi-layered to boost filtration
            efficiency. <br />
            <strong>Materials:</strong> Advanced nanofiltration membranes. <br />
            <strong>Function:</strong> Removes small particles, salts, and
            organic substances.
          </p>
          <strong>Benefits:</strong>
          <ul>
            <li>
              Provides high-purity water that meets industry and environmental
              standards.
            </li>
            <li>Effective at dealing with difficult-to-remove pollutants.</li>
          </ul>
        </div>
        <img
          src={nanofiltrationImage}
          alt="Final Filtration Stage (Nanofiltration)"
          className="unit-image"
        />
      </section>

      {/* Special Paragraph */}
      <div className="special-paragraph">
        This integrated system is intended to ensure comprehensive treatment
        while balancing cost-effectiveness, environmental sustainability, and
        technical innovation.
      </div>
    </div>
  );
};

export default WaterPollutionControl;
