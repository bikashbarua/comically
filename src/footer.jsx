import "./footer.css"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h2>COMICALLY</h2>
      </div>

      <div className="footer-links">
        <div>
          <p>Home</p>
          <p>About</p>
          <p>Publish</p>
          <p>Read</p>
        </div>

        <div>
          <p>Contact</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
        </div>

        <div>
          <p>Join our newsletter</p>
          <p>E-mail:</p>
        </div>
      </div>
    </footer>
  );
}
