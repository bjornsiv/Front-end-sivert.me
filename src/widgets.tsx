import * as React from 'react';
import { ReactNode, ChangeEvent, useState } from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';

// Card - for å ramme inn innhold på nettsiden, kan sette tittel
// Properties: title
export class Card extends Component<{ title: ReactNode }> {
  render() {
    return (
      <div className="card rounded">
        <div className="card-body">
          <p className="card-title">{this.props.title}</p>
          <div className="card-text">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

// Row
export class Row extends Component {
  render() {
    return <div className="row">{this.props.children}</div>;
  }
}


/*<h2>{this.props.title}</h2>*/
export class Logo extends Component<{ title?: string }> {
  render(){
    return (
      <>
        <div className="container">
            <img src="/Assets/sivert.jpg" className="img-round" alt="Sivert Bjørnstad"></img>
        </div>
      </>
    )
  }
}

export class CardRow extends Component {
  render() {
    return (
      <div className="card">
        <div className="row">{this.props.children}</div>
      </div>
    );
  }
}

export class ColumnPadd extends Component<{ width?: number; right?: boolean }> {
  render() {
    return (
      <div padding-left={5}>
        <div className={'col' + (this.props.width ? '-' + this.props.width : '')}>
          <div className={'float-' + (this.props.right ? 'end' : 'start')}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
export class AutoColumn extends Component<{ right?: boolean }> {
  render() {
    return (
      <div className={'col-md-auto'}>
        <div className={'float-' + (this.props.right ? 'end' : 'start')}>{this.props.children}</div>
      </div>
    );
  }
}
// Column (properties: width, right)
export class Column extends Component<{ width?: number; right?: boolean }> {
  render() {
    return (
      <div className={'col' + (this.props.width ? '-' + this.props.width : '')}>
        <div className={'float-' + (this.props.right ? 'end' : 'start')}>{this.props.children}</div>
      </div>
    );
  }
}

class ButtonDark extends Component<{ onClick: () => void }> {
  render() {
    return (
      <button type="button" className="btn btn-dark button-darker" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

// Button Success - opprette spill, anmeldelse, rating
// properties: onClick
class ButtonSuccess extends Component<{ onClick: () => void }> {
  render() {
    return (
      <button type="button" className="btn btn-success" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

// Button Danger - slette spill, slette anmeldelse, slette rating
// properties: onClick
class ButtonDanger extends Component<{ onClick: () => void }> {
  render() {
    return (
      <button type="button" className="btn btn-danger" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

// Button Light - lys knapp som brukes til ...
// properties: onClick
class ButtonLight extends Component<{ onClick: () => void }> {
  render() {
    return (
      <button type="button" className="btn btn-light" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

class ButtonInfo extends Component<{ onClick: () => void }> {
  render() {
    return (
      <button type="button" className="btn btn-info" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

// Denne passer godt inn med bakgrunnsfargene - vil bli mest brukt
class ButtonSecondary extends Component<{ onClick: () => void }> {
  render() {
    return (
      <button type="button" className="btn btn-secondary" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
class ButtonDarkModeToggle extends Component <{ onClick: () => void }>{
  render(){
    return(
      <div className="container">
	        <button 
            className="toggle--checkbox" 
            aria-label="Toggle Light Mode" 
            onClick={this.props.onClick}>
	        </button> 
    </div>
    )
  }
}

export class Button {
  static Dark = ButtonDark;
  static Success = ButtonSuccess;
  static Danger = ButtonDanger;
  static Light = ButtonLight;
  static Info = ButtonInfo;
  static Secondary = ButtonSecondary;
  static Toogle = ButtonDarkModeToggle;
}

// Navigation bar link (properties: to)
export class NavBarLink extends Component<{ to: string }> {
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
      <nav className="navbar navbar-expand-sm navbar-dark navbar-style NavBar-header" >
        <div className="container-fluid justify-content-start" >
          <NavLink className="navbar-brand" activeClassName="active" exact to="/">
            {this.props.brand}
          </NavLink>
          <div className="navbar-nav">{this.props.children}</div>
        </div>
      </nav>
    );
  }
}

// Form label - etikett
class FormLabel extends Component {
  render() {
    return (
      <span>
        <label className="form col-form-label form-display">{this.props.children}</label>
      </span>
    );
  }
}

// Form input - legge til spill
class FormInput extends Component<{
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  [prop: string]: any;
}> {
  render() {
    // ...rest will contain extra passed attributes such as disabled, required, width, height, pattern
    // For further information, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    const { type, value, onChange, ...rest } = this.props;
    return (
      <input
        {...rest}
        className="form-input form form-control"
        type={this.props.type}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

class FormNumberInput extends Component<{
  value: number;
  max: number;
  min: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  [prop: number]: any;
}> {
  render() {
    // ...rest will contain extra passed attributes such as disabled, required, width, height, pattern
    // For further information, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    const { value, onChange, max, min, ...rest } = this.props;
    return (
      <input
        {...rest}
        min={this.props.min}
        max={this.props.max}
        type="number"
        className="form-control"
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

// Form textarea - legge til spill
class FormTextarea extends React.Component<{
  value: string | number;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  [prop: string]: any;
}> {
  render() {
    // ...rest will contain extra passed attributes such as disabled, required, rows, cols
    // For further information, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    const { value, onChange, ...rest } = this.props;
    return <textarea {...rest} className="form-control" value={value} onChange={onChange} />;
  }
}

// Form checkbox
class FormCheckbox extends Component<{
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  [prop: string]: any;
}> {
  render() {
    const { onChange, value, ...rest } = this.props;
    return (
      <input
        {...rest}
        checked={value}
        className="form-check-input form-item form-check"
        type="checkbox"
        onChange={onChange}
      />
    );
  }
}

// Form select
class FormSelect extends Component<{
  key: string | number;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  [prop: string]: any;
}> {
  render() {
    const { key, value, onChange, children, ...rest } = this.props;
    return (
      <select {...rest} className="custom-select" value={value} key={key} onChange={onChange}>
        {children}
      </select>
    );
  }
}

class FormDate extends Component<{
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  [prop: string]: any;
}> {
  render() {
    const { placeholder, value, onChange, ...rest } = this.props;
    return (
      <div>
        <input
          className="form-input form-control"
          type="date"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...rest}
        ></input>
      </div>
    );
  }
}

class FormSelectDropdown extends Component<{
  valueList:string[];
  value: string;

  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  [prop: string]: any;
}> {
  render() {
    const { value, valueList, onChange, ...rest } = this.props;
    return (
      <div>
        <select className="form-select" value={value} onChange={onChange} {...rest}>
          {valueList.map((option, index) => {
            return (
              <option key={index} className="dropdown-item" value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export class Form {
  static Label = FormLabel; // = From.Label osv.
  static Input = FormInput;
  static Textarea = FormTextarea;
  static Checkbox = FormCheckbox;
  static Select = FormSelect;
  static NumberInput = FormNumberInput;
  static Date = FormDate;
  static SelectDropDown = FormSelectDropdown;
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


// Søkefelt. Hentet fra (Forms) https://getbootstrap.com/docs/4.0/components/navbar/#forms
export class SearchBar extends Component<{
  value: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string) => void;
  [prop: string]: any;
}> 
{
  fieldValue: string = "";

  render() {
    const { value, onClick, ...rest } = this.props;
    return (
        <form className="form-inline search-div">
          <input
            className="form-control mr-sm-2 search-div"
            type="search"
            placeholder="Search for games"
            aria-label="Search"
            value={this.fieldValue}
            onChange={(event) => {this.fieldValue = event.currentTarget.value;}}
            {...rest}
          />
          <button 
            className="btn btn-dark my-2 my-sm-0" 
            type="submit"
            onClick={(event) => onClick(event, this.fieldValue)}
          >
            Search 
          </button>
        </form>
    );
  }
}

// Innlogging. Hentet fra (Menu forms) https://getbootstrap.com/docs/4.0/components/dropdowns/#menu-forms
// Mulig vi ikke kommer til å bruke denne hvis vi har innlogging via fb e.l.
// Bytte ut
export class SignIn extends Component {
  render() {
    return (
      <div className="dropdown-menu">
        <form className="px-4 py-3">
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail1">E-post</label>
            <input
              type="email"
              className="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormPassword1">Passord</label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck" />
            <label className="form-check-label" htmlFor="dropdownCheck">
              Husk meg
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Logg inn
          </button>
        </form>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">
          Opprett ny bruker
        </a>
        <a className="dropdown-item" href="#">
          Glemt passordet?
        </a>
      </div>
    );
  }
}

/*
// Image - bilder av spill o.l. Vi ble aldri ferdige med denne, men lar den likevel stå 
// for å vise at vi har tenkt på denne funksjonaliteten.

export class Image extends Component {
  render() {
    return (
      <div>
        <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
      </div>
    );
  }
}

*/
