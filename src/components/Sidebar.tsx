import profile from "../assets/profile.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="about">
        <img className="profile-pic" src={profile}></img>
        <h3>José Meroño Martínez</h3>
        <p>Computer Scientist and software developer from Spain.</p>
        <p>I'm a Computer Graphics and game development enthusiats, having strong C/C++ skills and learning about modern OpenGL (4.5+) and Vulkan (1.3+).</p>
        <p> I've also worked in the web development industry, mainly with NodeJS and MongoDB and SQL databases.</p>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <div className="contact-item">
          <a href="https://github.com/jmermar">
            <i className="devicon-github-original"></i>jmermar
          </a>
        </div>
        <div className="contact-item">
          <i className="fa">&#xf0e0;</i> josesmerono@gmail.com
        </div>
      </div>
    </div>
  );
}
