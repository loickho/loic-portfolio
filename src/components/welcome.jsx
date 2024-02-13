import profile from "../assets/profile-red.png";

export default function Welcome() {
  return (
    <>
      <div className="welcome-container container">
        <h1 className="welcome">
          Hey.
          <br />
          I&apos;m Loïc.{" "}
        </h1>
      </div>
      <h1 className="section-header">about</h1>
      <div className="about-container container">
        <div className="about-photo">
          <img id="profile" src={profile} alt="a photo of me" />
        </div>
        <div className="about-text">
          <p>Hi there! I'm Loïc, a full-stack developer with a background in media
          and design. My passion lies in crafting elegant and efficient
          solutions that bridge the gap between creativity and functionality.{" "}
          <br />
          <br /> Here's a glimpse into my tech stack:
          <br />
          <br /> JavaScript and Typescript <br />
          Node.js, Express, and MongoDB
          <br /> React and React Native <br />
          <br /> I am an ambitious and adaptable developer who quickly grasps
          new concepts and technologies. I thrive in fast-paced environments,
          where tight schedules push me to deliver my best work. My passion for
          learning drives me to continuously seek out new challenges and
          opportunities for growth. <br />
          <br /> Outside of work, I enjoy experimenting in the kitchen (i'm
          currently cooking my way through Ixta Belfrage's Mezcla), cycling, and
          playing board games with friends. Feel free to reach out — let's
          explore how we can collaborate!</p>
        </div>
      </div>
    </>
  );
}
