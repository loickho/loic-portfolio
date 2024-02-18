import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "@react-spring/web";

import SoSummit from "../assets/SoSummit.png";
import WeekendTraveller from "../assets/weekendTraveller.png";
import BlossomBud from "../assets/blossombud.png";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [springsPrev, apiPrev] = useSpring(() => ({
    from: { x: 0 },
  }));

  const [springsNext, apiNext] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClickPrev = () => {
    apiPrev.start({
      from: { x: 0 },
      to: { x: 1 },
      reset: true,
      reverse: true,
      config: { tension: 150, friction: 30 },
      onRest: () => apiPrev.start({ x: 0 }),
    });
  };

  const handleClickNext = () => {
    apiNext.start({
      from: { x: 0 },
      to: { x: 1 },
      reset: true,
      reverse: true,
      config: { tension: 150, friction: 30 },
      onRest: () => apiNext.start({ x: 0 }),
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    handleClickNext();
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
    handleClickPrev();
  };

  function handleClickLink (link) {
    window.open(link);
  }

  const slides = [
    {
      src: SoSummit,
      alt: "Image 1",
      title: "SoSummit",
      tags: ["TypeScript", "React", "React Native", "Node", "MongoDB"],
      link: 'https://sosummit.netlify.app',
      text: "SoSummit is a service designed to make snowsports safer. It consists of a mobile app, used to receive notifications and send requests for help, and a dashboard, which receives these help requests and can dispatch ski patrol to the injured person. My responsibilities included:• Configuring the backend infrastructure, defining API routes and integrating socket.io for real-time communication between the mobile app and the dashboard.• Designing schemas and implementing data modeling in Mongoose to efficiently handle database queries.• Building the React Native mobile app and React dashboard, using Redux for state management and WebSockets for real-time communication, to ensure robust and efficient user experiences across platforms.",
    },
    {
      src: WeekendTraveller,
      alt: "Image 2",
      title: "Weekend Traveller",
      tags: ["TypeScript", "React", "Node", "PostgreSQL"],
      link: 'https://github.com/pooya-jb/weekend-traveller',
      text: "addd",
    },
    {
      src: BlossomBud,
      alt: "Image 3",
      title: "BlossomBud",
      tags: ["JavaScript", "React", "Node", "MongoDB"],
      link: 'https://github.com/loickho/BlossomBud',
      text: "a",
    },
  ];
  return (
    <div className="carousel-container">
      <animated.div
        onClick={prevSlide}
        style={{
          transform: springsPrev.x
            .interpolate({
              range: [0, 0.25, 0.5, 0.75, 1],
              output: [0, -10, 0, 10, 0],
            })
            .interpolate((x) => `translate3d(${x}px, 0, 0)`),
        }}
        className="prev"
      >
        <FontAwesomeIcon icon={faCircleArrowLeft} />
      </animated.div>
      <div className="carousel">
        {slides.map((slide, index) => (
          <>
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => handleClickLink(slide.link)}
            >
              <div className="image-title">{slide.title}</div>
              <div className="tags">
                {slide.tags.map((tag, i) => (
                  <span key={i} className="tag" id={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <img src={slide.src} alt={slide.alt}/>
              {/* <div className="text">{slide.text}</div> */}
            </div>
          </>
        ))}
      </div>
      <animated.div
        onClick={nextSlide}
        style={{
          transform: springsNext.x
            .interpolate({
              range: [0, 0.25, 0.5, 0.75, 1],
              output: [0, -10, 0, 10, 0],
            })
            .interpolate((x) => `translate3d(${x}px, 0, 0)`),
        }}
        className="next"
      >
        <FontAwesomeIcon icon={faCircleArrowRight} />
      </animated.div>
    </div>
  );
}
