import Button from "../button/Button";
import "./style.scss";

const AboutYou = () => {
  return (
    <section className="about-you wrapper">
      <h3 className="about-you__subtitle">WHAT WE EXPECT</h3>
      <h2 className="about-you__title">About you</h2>
      <div className="about-you__container">
        <ul className="about-you__list">
          <li className="about-you__item">
            A passion for Front-end development
          </li>
          <li className="about-you__item">
            Understanding of good UI/UX principles
          </li>
          <li className="about-you__item">
            Basic knowledge and literacy in React
          </li>
          <li className="about-you__item">
            An understanding of critical CSS techniques (CSS in JS, Styled
            components, CSS modules etc)
          </li>
          <li className="about-you__item">Basic knowledge of JavaScript</li>
          <li className="about-you__item">
            Proclivity towards Photoshop/Illustrator
          </li>
          <li className="about-you__item">
            Self-motivated with the ability to work independently, or with a
            team
          </li>
        </ul>

        <ul className="about-you__additional">
          <li className="about-you__item">
            12 months working for a start-up or similar fast paced growing
            company
          </li>
          <li className="about-you__item">Experience with Typescript</li>
          <li className="about-you__item">Experience with NodeJs</li>
          <li className="about-you__item">
            Experience with writing MS-SQL queries
          </li>
          <li className="about-you__item">HTML email (MJML)</li>
        </ul>
      </div>
      <Button />
    </section>
  );
};

export default AboutYou;
