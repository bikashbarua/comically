import pic1 from "./assets/c1.png";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Create and Publish <br /> Comics
        </h1>

        <p>
          Immerse into deep realm of creativity. Create your own comic story
          and reach a greater audience
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Join Now</button>
          <button className="btn-secondary">Read Comic</button>
        </div>
      </div>

      <div className="hero-right">
        <img src={pic1} alt="Figma Characters" />
         
      </div>
    </section>
  );
}
