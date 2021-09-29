import Button from "../button/Button";
import "./style.scss";

const AboutYou = () => {
  return (
    <section className="about-you">
      <h3>WHAT WE EXPECT</h3>
      <h2>About you</h2>
      <ul>
        <li>A passion for Front-end development</li>
        <li>Understanding of good UI/UX principles</li>
        <li>Basic knowledge and literacy in React</li>
        <li>
          An understanding of critical CSS techniques (CSS in JS, Styled
          components, CSS modules etc)
        </li>
        <li>Basic knowledge of JavaScript</li>
        <li>Proclivity towards Photoshop/Illustrator</li>
        <li>
          Self-motivated with the ability to work independently, or with a team
        </li>
        <li>
          12 months working for a start-up or similar fast paced growing company
        </li>
        <li>Experience with Typescript</li>
        <li>Experience with NodeJs</li>
        <li>Experience with writing MS-SQL queries</li>
        <li>HTML email (MJML)</li>
      </ul>

      <Button />
    </section>
  );
};

export default AboutYou;
