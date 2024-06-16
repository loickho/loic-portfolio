export default function Contact() {
  return (
    <>
      <h1 className="section-header scroll-to" id="contact">
        contact
      </h1>
      <div className="social-links">
        <p id="social-question">
          Have a <strong>question</strong>,
          <br /> want to <strong>work</strong> together,
          <br /> or simply want to say hello? <br /><br /> Get in touch:
        </p>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/loickho/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/loickho"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:lkhodarkovsky@gmail.com">
            Email
          </a>
        </div>
        <p>Created by yours truly using React. Deployed on Netlify. </p>
      </div>
      {/* <div className="additional-info">
      </div> */}
    </>
  );
}
