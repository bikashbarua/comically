export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">COMICALLY</h1>

      <div className="nav-links">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Sign in</a>
        <a href="#" className="publish-link">Publish</a>
      </div>
    </nav>
  );
}
