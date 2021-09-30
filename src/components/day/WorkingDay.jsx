import "./style.scss";

const WorkingDay = () => {
  return (
    <section className="working-day">
      <h3 className="working-day__subtitle">WHAT WILL YOUR</h3>
      <h2 className="working-day__title">Typical day look like?</h2>
      <ul className="working-day__list">
        <li className="working-day__item">Daily 10min stand-up meetings</li>
        <li className="working-day__item">
          Comment on new and existing customer facing websites with ideas on how
          we can improve the design & UI/UX
        </li>
        <li className="working-day__item">Implement front-end code in React</li>
        <li className="working-day__item">Support bug fixing</li>
        <li className="working-day__item">Create designs or graphics</li>
        <li className="working-day__item">Build wireframes</li>
      </ul>
    </section>
  );
};

export default WorkingDay;
