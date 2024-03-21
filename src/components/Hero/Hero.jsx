import React from "react";
import profile from "../../assets/samnang.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h3>Hello, I`m </h3>
          <h2>Samnang Keo</h2>
          <div className="hero-iam">
            <h3>And i`m a</h3>
            <h3 className="web-dev">Web Developer</h3>
          </div>
          <p>
            Experienced web developer adept at crafting innovative solutions,
            leveraging cutting-edge technologies to build robust, user-centric
            websites and applications.
          </p>
        </div>

        <div className="hero-img">
          <div>
            <img src={profile} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
