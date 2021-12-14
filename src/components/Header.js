

function Header() { // The Header of the WebPage. 
  return (
    <div>
      <nav className="nav">
        <div className="nav-left">
          <a className="brand" href="/">
            The Task Buddy
          </a>
        </div>
        <div className="nav-right">
          <div className="tabs">
            <a href="https://www.google.com">Search Googlr</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
