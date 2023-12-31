import React from "react";

const SocialShare = [
  {
    iconName: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/bernabasjosef/",
  },
  { iconName: "fab fa-github", link: "https://github.com/bernabasy" },
  { iconName: "fa fa-twitter", link: "https://twitter.com/bernabasjosef" },
  { iconName: "fab fa-github", link: "https://wellfound.com/u/bernabas-yosef" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
