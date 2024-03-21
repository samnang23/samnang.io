import React from "react";
import profile from "../../assets/samnang.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import php from "../../assets/php.png";
import react from "../../assets/react.png";
import laravel from "../../assets/laravel.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h3>HELLO 👋 I`M </h3>
          <h2>Samnang Keo</h2>
          <div>
            <h3>AND I`M </h3>
            <h2 className="web-dev">Web Developer</h2>
          </div>
          <p>
            Experienced web developer adept at crafting innovative solutions,
            leveraging cutting-edge technologies to build robust, user-centric
            websites and applications.
          </p>
        </div>

        <div className="hero-img">
          <div>
            <div>
              <div className="tech-icon">
                <img src={react} alt="" />
              </div>
              <div className="tech-icon">
                <img src={laravel} alt="" />
              </div>
            </div>
            <img src={profile} alt="" />
          </div>

          <div>
            <div className="tech-icon">
              <img src={html} alt="" />
            </div>
            <div className="tech-icon">
              <img src={css} alt="" />
            </div>
            <div className="tech-icon">
              <img src={javascript} alt="" />
            </div>
            <div className="tech-icon">
              <img src={php} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
