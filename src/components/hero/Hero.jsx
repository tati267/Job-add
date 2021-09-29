import "./style.scss";
import { Picture } from "react-responsive-picture";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__header">
        <h3 class="hero__subtitle">Panthera Finance looking for a</h3>
        <h1 class="hero__title">Graduate or Junior Web Developer</h1>
      </div>

      <div className="hero__img">
        <Picture
          sources={[
            {
              srcSet: "hero.desktop.png",
              media: "(min-width: 1250px",
            },
            {
              srcSet: "hero.tablet.png",
              media: "(min-width: 768px)",
            },
            {
              srcSet: "hero.mobile.png",
              type: "png",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Hero;
