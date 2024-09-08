import "../style/main.less";
import WebFontLoader from "webfontloader";
import { useEffect } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "../components/Sidebar";

function Home() {
  useEffect(() => {
    WebFontLoader.load({
      google: {
        families: ["Droid Sans", "Comic Neue"],
      },
    });
  }, []);

  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <article className="page-home">
          <h3>About</h3>
          <p>Game developer and Computer Graphics enthusiast.</p>
          <p>
            Here I'll post my most relevant works on both games and personal
            projects.
          </p>
          <p>
            I'm currently studying a CS master on Computer Vision and Robotics.
          </p>
        </article>
      </div>
    </>
  );
}

export default Home;
