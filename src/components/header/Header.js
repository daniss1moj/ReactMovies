import './Header.css'

const Header = () => {
    return (
        <nav className="#004d40 teal darken-4">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">React Movies</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Header;