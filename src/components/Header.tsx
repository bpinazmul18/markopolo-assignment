export default function Header() {
  return (
    <header>
      <h2>Dashboard</h2>

      <div className="search-wrapper">
        <img src="./images/magnifying-glass-thin.svg" alt="Search icon" />
        <input type="text" className="search" placeholder="Search..." />
      </div>
    </header>
  );
}
