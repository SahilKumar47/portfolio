import React, { createRef, Fragment, useContext } from "react";
import { Fade, Slide, Zoom } from "react-reveal";
import "./EducationCard.css";
import StyleContext from "../../contexts/StyleContext";
import Button from "../button/Button";

export default function EducationCard({ school, value }) {
  const imgRef = createRef();

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => {
          return (
            <li key={i} className="subTitle">
              {item}
              {i === 0 && value === 0 ? (
                <Fragment>
                  <Button
                    text="Certificate"
                    newTab={true}
                    href="https://drive.google.com/file/d/1NdoxhNvpqNZecaguSSC6QDdjzfcduaf2/view?usp=sharing"
                  ></Button>
                  <p></p>
                </Fragment>
              ) : null}
            </li>
          );
        })
      : null;
  };
  const { isDark } = useContext(StyleContext);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          <div className="education-card-left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
