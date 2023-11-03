import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "95", skillName: "REACT" },
  { skillClass: "p66", skillPercent: "85", skillName: "REAXT/NEXT" },
  { skillClass: "p50", skillPercent: "95", skillName: "Redux" },
  { skillClass: "p90", skillPercent: "85", skillName: "RUBY"},
  { skillClass: "p90", skillPercent: "85", skillName: "Rails"},
  { skillClass: "p90", skillPercent: "60", skillName: "Node"},
  { skillClass: "p95", skillPercent: "95", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "90", skillName: "JAVASCRIPT" },
  { skillClass: "p89", skillPercent: "90", skillName: "TypeScript" },
  { skillClass: "p70", skillPercent: "98", skillName: "CSS3"},
  { skillClass: "p70", skillPercent: "98", skillName: "Bootstrap" },
  { skillClass: "p70", skillPercent: "98", skillName: "HTML5" },
  { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  { skillClass: "p95", skillPercent: "80", skillName: "Test Driven" },
  { skillClass: "p95", skillPercent: "80", skillName: "Rspec" },
  { skillClass: "p95", skillPercent: "95", skillName: "Agile Development" },
  { skillClass: "p95", skillPercent: "80", skillName: "Project Management"},
];




const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
