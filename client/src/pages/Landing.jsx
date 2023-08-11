import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby dSA beard lumbersexual, tonx tumblr kombucha big mood
            portland sartorial prism tofu four dollar toast echo park lomo tote
            bag. Art party mlkshk cardigan pork belly. Gorpcore praxis
            microdosing hoodie pitchfork, chicharrones narwhal meh food truck
            gentrify hashtag sriracha mixtape lyft fixie. Ramps try-hard quinoa,
            poke sriracha offal YOLO mixtape.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
