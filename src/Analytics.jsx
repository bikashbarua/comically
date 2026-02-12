import puzzle from "./assets/c2.png"; // put your image here
import "./Analytics.css"; // create a CSS file for styling
export default function AnalyticsSection() {
  return (
    <section className="analytics">
      <div className="analytics-left">
        <img src={puzzle} alt="analytics"  />
      </div>

      <div className="analytics-right">
        <h2>
          PUBLISH WITH BUILT IN <br />
          ANALYTICS TO TRACK YOU: <br />
          SALES
        </h2>

        <p>
          Use our built in AI to scale your sales.
          Use our built in analytics dashboard
          to pull valuable insights an monitor them efficiently
        </p>

        <button className="publish-btn">PUBLISH NOW</button>
      </div>
    </section>
  );
}
