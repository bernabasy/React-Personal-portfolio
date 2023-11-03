import React from "react";

const experienceContent = [
  {
    year: "   2018 - Present",
    position: " Web Developer",
    compnayName: "Bootstrap Ict solutions",
    details: `  Bulid Complex ERP system, Buld Procurement system with react app`,
  },
  {
    year: "2021 - Present",
    position: " ERPnext devloper",
    compnayName: "Ken-Tecno",
    details: `Customized Erpnext with Javascript and Payton Code`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
