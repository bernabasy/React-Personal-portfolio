import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Bernabas" },
  { meta: "last name", metaInfo: "Yosef" },
  { meta: "Age", metaInfo: "25 Years" },
  { meta: "Nationality", metaInfo: "Ethiopian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Ethiopa" },
  { meta: "phone", metaInfo: "+251926517118" },
  { meta: "Email", metaInfo: "bernabasjosef@mail.com" },
  { meta: "langages", metaInfo: "English, Ameharic" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
