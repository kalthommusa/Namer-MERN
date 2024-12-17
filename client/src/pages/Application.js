import React, { useState } from "react";

const Application = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="application-container">
      <h1 className="application-title">Major Focusing</h1>
      <div className="industry-list">
        {[
          {
            title: "Textile Industry",
            content:
              "Dyeing, bleaching, and finishing are all techniques used to make fabrics and clothes. These methods produce wastewater that is high in colors, detergents, salts, and organic contaminants, necessitating treatment to decrease environmental effect.",
          },
          {
            title: "Chemical Industry",
            content:
              "Fertilizers, insecticides, and acids are among the items manufactured. Its effluent contains heavy metals, hazardous organic compounds, and acids, all of which pose significant water treatment issues.",
          },
          {
            title: "Food Industries",
            content:
              "Processes and packages food products. These industries' wastewater contains organic debris, lipids, oils, and nutrients, which can lead to eutrophication if not properly treated.",
          },
          {
            title: "Edible Oil Industry",
            content:
              "Cooking oils are produced by refining, which results in wastewater with high oil and grease content, as well as organic components that require separation and biodegradation.",
          },
          {
            title: "Petrochemical Industry",
            content:
              "Converts crude oil into chemicals and fuel. This sector's wastewater contains hydrocarbons, heavy metals, and volatile organic compounds (VOCs), necessitating the use of specialized treatment technology.",
          },
          {
            title: "Dye Industries",
            content:
              "Colorants for textiles and other items are their specialty. Its wastewater is frequently contaminated with persistent dyes, salts, and organic solvents, which are difficult to remove and hazardous to aquatic habitats.",
          },
        ].map((industry, index) => (
          <div key={index} className="industry-item">
            <div
              className={`industry-header ${
                openSection === index ? "active" : ""
              }`}
              onClick={() => toggleSection(index)}
            >
              <span className="plus-sign">
                {openSection === index ? "-" : "+"}
              </span>
              {industry.title}
            </div>
            {openSection === index && (
              <div className="industry-content">{industry.content}</div>
            )}
          </div>
        ))}
      </div>
      <p className="special-paragraph">
        These industries make major contributions to industrial water pollution,
        needing tailored treatment measures to reduce their environmental
        impact.
      </p>
    </div>
  );
};

export default Application;
