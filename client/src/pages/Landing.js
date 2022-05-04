import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

function Landing() {
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
            I'm baby distillery venmo fam +1 jianbing. Af sriracha shaman
            bespoke kitsch pinterest. Post-ironic XOXO shaman, tote bag
            pour-over meggings art party wayfarers kitsch selvage actually DIY.
            Wolf kickstarter poke, cornhole 3 wolf moon fixie single-origin
            coffee lyft chartreuse flannel tote bag chillwave dreamcatcher
            bespoke knausgaard.
          </p>
          <button className="btn btn-hero">login/signUp</button>
        </div>
        <img src={main} alt="job hunter" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
