import React from "react";
import "./Mail.css";
import logo from "./assets/flex_em_outsystems_logo.png";
import cover from "./assets/survey.PNG";
import twtr from "./assets/logo-twitter 1.png";
// import youtube from "./assets/play-square.png"
import insta from "./assets/logo-instagram 1.png";
import fb from "./assets/logo-fb-simple 1.png";

const Mail = () => {
  return (
    <div className="wrapper">
      <img src={logo} alt="logo" />
      <div className="cover">
        <img src={cover} alt="cover" />
      </div>
      <div className="info">
        <p>
          Hi there,
          <br />
          <br />
          <span>
            Don’t miss your chance to participate in the OutSystems State of
            Application Development survey, covering important topics like
            cloud-native development, AI, and mobile apps.
          </span>
          <br />
          <br />
          The survey will only take about 10 minutes to complete. For each
          survey response, we will donate $1 to charity .{" "}
          <a href="www.google.com" target="blank">
            Click here{" "}
          </a>{" "}
          to start the survey now.
          <br />
          <br />
          We hope you can find a few minutes in your day to participate!
          <br />
          <br />
          Thanks,
          <br />
          <br />
          The OutSystems Team
        </p>
      </div>

      <div className="bottom">
        <p>
          ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          <br />
          <br />
          <div className="medias">
            <div className="fb">
              <img src={fb} alt="fb" />
            </div>
            <div className="twtr">
              <img src={twtr} alt="twtr" />
            </div>

            <div className="insta">
              <img src={insta} alt="insta" />
            </div>
          </div>
          <div className="name">outsystems.com</div>
          <br />
          <br />
          55 Thomson Place | Second Floor | Boston, MA | 02210
          <br />
          <br />
          <a href="www.google.com" target="blank">
            Unsubscribe or change your email preferences | Privacy Statement
          </a>
        </p>
      </div>
      <footer className="footer">
        <p>Copyright © 2023 OutSystems, Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Mail;
