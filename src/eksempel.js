<li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Something else here</a>
    </div>
  </li>


  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Sivert.me</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Hjem <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/nettside/">The Adventure of Cassi</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Arbeid</a>
      </li>
    </ul>
    </div>
  </nav>

  <ul className="header navbar-expand-lg navbar-dark bg-dark navbar-nav mr-auto"><span className="h3 text-white bg-dark">Sivert.me</span>
    <li className="nav-item btn btn-outline-light text-white bg-dark"><NavLink className="nav-link active" to="/">Hjem</NavLink></li>
    <li className="nav-item btn btn-outline-light text-white bg-dark"><NavLink className="nav-link" to="/test">Test Tekst</NavLink></li>
    <li className="nav-item btn btn-outline-light text-white bg-dark"><NavLink className="nav-link" to="/kontakt">Kontakt meg</NavLink></li>
    <li className="nav-item btn btn-outline-light text-white bg-dark"><NavLink className="nav-link" to="/pepe">Pepe</NavLink></li>
  </ul>


  <div className="content">
    <Route exact path="/" component={Arbeid}/>
    <Route path="/test" component={Test}/>
    <Route path="/kontakt" component={Kontakt}/>
    <Route path="/pepe" component={Pepe}/>
  </div>
