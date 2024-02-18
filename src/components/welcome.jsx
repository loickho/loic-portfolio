import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import profile from "../assets/profile-red.png";
import Carousel from "./carousel";
import Contact from "./contact";

export default function Welcome() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="welcome-container container">
        <h1 className="welcome scroll-to" id="home">
          Hey.
          <br />
          I&apos;m Loïc.
        </h1>
      </div>

      <h1 className="section-header scroll-to" id="about">
        about
      </h1>
      <div className="about-container container">
        <div className="about-photo">
          <img
            id="profile"
            src={profile}
            alt="a photo of me"
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-easing="ease-in-sine"
          />
        </div>
        <div className="about-text">
          <p>
            Hi there! I&apos;m Loïc, a full-stack developer with a background in
            media and design. My passion lies in crafting elegant and efficient
            solutions that bridge the gap between creativity and functionality.{" "}
            <br />
            <br /> Here&apos;s a glimpse into my tech stack:
            <br />
            <br /> JavaScript and Typescript <br />
            Node.js, Express, and MongoDB
            <br /> React and React Native <br />
            <br /> I am an ambitious and adaptable developer who quickly grasps
            new concepts and technologies. I thrive in fast-paced environments,
            where tight schedules push me to deliver my best work. My passion
            for learning drives me to continuously seek out new challenges and
            opportunities for growth. <br />
            <br /> Outside of work, I enjoy experimenting in the kitchen
            (i&apos;m currently cooking my way through Ixta Belfrage&apos;s
            Mezcla), cycling, and playing board games with friends. Feel free to
            reach out — let&apos;s explore how we can collaborate!
          </p>
        </div>
      </div>

      <h1 className="section-header scroll-to" id="projects">
        projects
      </h1>
      <div className="projects-container">
        <Carousel />
      </div>

      <div className="contact-container container">
        <Contact />
      </div>
    </>
  );
}
