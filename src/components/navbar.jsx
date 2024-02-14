export default function Navbar({ scrollToSection, selected }) {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="navbar">
      <p>Loïc Khodarkovsky</p>
      <ul className="nav-list">
        <li className={selected === "home" ? "selected" : ""} onClick={handleHomeClick}>home</li>
        <li className={selected === "about" ? "selected" : ""} onClick={() => scrollToSection("about")}>about</li>
        <li className={selected === "projects" ? "selected" : ""} onClick={() => scrollToSection("projects")}>projects</li>
        <li className={selected === "contact" ? "selected" : ""} onClick={() => scrollToSection("contact")}>contact</li>
      </ul>
    </div>
  );
}
