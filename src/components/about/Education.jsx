import React from "react";

const educationContent = [
  {
    year: "Oct 2017 - Jun2022",
    degree: "ENGINEERING DEGREE",
    institute: "Addis Ababa Science and Tecnology Univercity",
    details: `  Developed a thesis paper on Car parking automation control systems. 
    bullet with javascript and control different mechanical motions including security and
     safety of motion. The thesis was the best project of the 2022 thesis of the college.`,
  },
  {
    year: "Sep 2022 - Jun 2023",
    degree: "Web Devlopment",
    institute: "Microverse(USA Reamote Full Time)",
    details: `Mentorship of junior developers`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
