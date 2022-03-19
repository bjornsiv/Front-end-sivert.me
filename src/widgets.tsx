import * as React from 'react';
import { ReactNode } from 'react';
import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export class Card extends Component<{ title: ReactNode, center?: boolean }> {
  render() {
    return (
      <div className="card rounded align">
        <div className="card-body">
          <h2 className={" text-" + (this.props.center ? 'center' : 'none')}>{this.props.title}</h2>
          <div className={"card-text text-" + (this.props.center ? 'center' : 'none')}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export class Row extends Component<{ className?: string }>{
  render() {
    return <div className={"row "+ (this.props.className)} >{this.props.children}</div>;
  }
}

export class Logo extends Component<{ src?: string }> {
  render(){
    return (
      <>
        <div className="container">
            <img src={this.props.src} className="img-round" alt="Sivert Bjørnstad"></img>
        </div>
      </>
    )
  }
}

export class Column extends Component<{ width?: number; right?: boolean; center?: boolean}> {
  render() {
    return (
      <div className={'col' + (this.props.width ? '-' + this.props.width : '')}>
        <div className={'float-' + (this.props.right ? 'end' : 'start') + " text-" + (this.props.center ? 'center' : 'none')}>{this.props.children}</div>
      </div>
    );
  }
}

// Navigation bar link (properties: to)
export class NavBarLink extends Component<{ to: string; }> {
  render() {
    return (
      <NavLink className="nav-link" activeClassName="active" to={this.props.to}>
        {this.props.children}
      </NavLink>
    );
  }
}

// Navigation bar (properties: brand)
export class NavBar extends Component<{ brand: ReactNode }> {
static Link = NavBarLink;
  render() {
    return (
    <>
      <div className='nav-bar-width'>
        <nav className="navbar navbar-expand-md navbar-dark " >
        <a href="#" className="navbar-brand">{this.props.brand}</a>
        <button className="navbar-toggler nav-button" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav">
            <li className="nav-item d-none d-md-inline  ">
              {this.props.children}
            </li>
            <li className="nav-item d-xs-block d-md-none">
              {this.props.children}
            </li>
          </ul>
        </div>
        </nav>
      </div>
    </>
    );
  }
}

export class HeaderLink extends Component<{ to: string; title: string}> {
  
  render() {
    return (
      <Link className=" h1 header-link " to={this.props.to}><h1>{this.props.title}</h1></Link>
    );
  }
}


export class OppgaveView extends Component<{ src?: string , desc?: string, title?: string, fagkode?: string, img?: string }> {
  render() {
    return(
      <>
        <div className="pdf-style" >
          <h3 className="text-justify">{this.props.title} - {this.props.fagkode}</h3>
          <div className="text-justify">{this.props.desc}</div>
          <div className="img-container">
            <img src={this.props.img} className="pdf-img"/>
              <div className="overlay">
                <a className="link-img" href={this.props.src}>Åpne pdf</a>
              </div>
          </div>
      </div>

      
      <br/>
        <br/>
        <br/>
      </>
    )
  }
}

/*
// Alert messages - beskjeder på nettsiden
export class Alert extends Component {
  alerts: { id: number; text: ReactNode; type: string }[] = [];
  nextId: number = 0;
  render() {
    return (
      <div>
        {this.alerts.map((alert, i) => (
          <div
            key={alert.id}
            className={'alert alert-dismissible alert-' + alert.type}
            role="alert"
          >
            {alert.text}
            <button
              type="button"
              className="btn-close btn-sm"
              onClick={() => this.alerts.splice(i, 1)}
            />
          </div>
        ))}
      </div>
    );
  }

  // Success alert
  static success(text: ReactNode) {
    // To avoid 'Cannot update during an existing state transition' errors, run after current event through setTimeout
    setTimeout(() => {
      let instance = Alert.instance(); // Get rendered Alert component instance
      if (instance) instance.alerts.push({ id: instance.nextId++, text: text, type: 'success' });
    });
  }

  // Info alert
  static info(text: ReactNode) {
    // To avoid 'Cannot update during an existing state transition' errors, run after current event through setTimeout
    setTimeout(() => {
      let instance = Alert.instance(); // Get rendered Alert component instance
      if (instance) instance.alerts.push({ id: instance.nextId++, text: text, type: 'info' });
    });
  }

  // Warning alert
  static warning(text: ReactNode) {
    // To avoid 'Cannot update during an existing state transition' errors, run after current event through setTimeout
    setTimeout(() => {
      let instance = Alert.instance(); // Get rendered Alert component instance
      if (instance) instance.alerts.push({ id: instance.nextId++, text: text, type: 'warning' });
    });
  }

  // Danger alert
  static danger(text: ReactNode) {
    // To avoid 'Cannot update during an existing state transition' errors, run after current event through setTimeout
    setTimeout(() => {
      let instance = Alert.instance(); // Get rendered Alert component instance
      if (instance) instance.alerts.push({ id: instance.nextId++, text: text, type: 'danger' });
    });
  }
}
*/



