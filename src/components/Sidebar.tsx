import profile from "../assets/profile.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img className="profile-pic" src={profile}></img>
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
