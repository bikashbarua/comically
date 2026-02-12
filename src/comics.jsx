import comic1 from "./assets/c4.webp";
import comic2 from "./assets/c5.jpg";
import comic3 from "./assets/c6.jpeg";
import comic4 from "./assets/c7.webp";
import comic5 from "./assets/c8.webp";
import comic6 from "./assets/c9.jpg";
import comic7 from "./assets/c10.jpg";
import comic8 from "./assets/c11.png";
import "./comics.css";

export default function ComicsGrid() {
  const comics = [
    comic1,
    comic2,
    comic3,
    comic4,
    comic5,
    comic6,
    comic7,
    comic8,
  ];

  return (
    <section className="comics-section">
      <h2>Read From Across 1000000+ Comics</h2>

      <div className="comics-grid">
        {comics.map((comic, index) => (
          <div key={index} className="comic-card">
            <img src={comic} alt="comic" />
            {index === 7 && <div className="overlay">more...</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
