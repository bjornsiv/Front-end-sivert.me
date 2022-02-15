import React, { Component } from "react";
import { Card, Column, Logo, Row } from './widgets';

class CV extends Component {
  render() {
    return (
      <>
      <div className="container">
          <Row>
          <Column>
                <Logo title=""></Logo>
                <div>
                    <h3><i>Student, Bachelor i <br/> Digital Forretningsutvikling</i></h3>
                </div>
                <div className="icon-div">
                    <a href="https://github.com/bjornsiv"><img src="../Assets/icons/github.png" className="img-icon" alt="github" ></img></a>
                    <a href="https://www.linkedin.com/in/sivert-bj%C3%B8rnstad/"><img src="../Assets/icons/Linkedin.png" className="img-icon" alt="linkedin"></img></a>
                    <a href="../Assets/Sivert bjørnstad.pdf"><img src="../Assets/icons/pdf.png" className="img-icon" alt="pdf" ></img></a>
                    <hr/>
                </div>
            <Card title="Om Meg">
                Jeg er 23 år gammel og er for øyeblikket påbegynt 3. året Bachelor i Digital Forretningsutvikling hos NTNU. Jeg er veldig læringsivrig og arbeidsom, og trives best i å arbeide med andre. Jeg verdsetter et arbeidsmiljø der man fokuserer på læring og samarbeid, der en del av motivasjonen kommer fra miljøet og de man arbeider med.
            </Card>
            <hr></hr>
            <Card title="Interesser">
                <b>Sport</b><br/> Jeg har prøvd meg på mange forskjellige ballsporter, som basketball, fotball, innebandy, og squash<br/><br/>
                <b>Data og teknologi</b><br/> Fra ung alder av har jeg alltid hatt en interesse fordata og teknologi generelt, spesielt ny teknologisom åpner for nye muligheter
            </Card>
            <hr></hr>
            <Card title="Kontaktinformasjon">
                Telefon: +47 938 27 427<br/>
                E-post: sivertbjorn@gmail.com<br/>
                LinkedIn: www.linkedin.com/in/sivert-bjørnstad<br/>
            </Card>
          </Column>
          <Column>
            <br/>
            <Card title="Erfaring">
                <b>Lagermedarbeider</b><br/><i>ASKO sentrallager | 2019-Present</i><br/><br/>
                <b>Butikkmedarbeider</b><br/><i>Coop mega Torvbyen | 2016-2017</i>
                
            </Card>
            <hr></hr>
            <Card title="Utdannelse">
                <b>NTNU</b><br/> <i>Bachelorgrad i Digital Forretningsutvikling | 2019 - Nå<br/> Forventet fullført våren 2022</i><br/><br/>
                <b>Frederik II videregående skole</b><br/> <i>Studiespesialisering | 2014 - 2017</i><br/>
            </Card>
            <hr></hr>
            <Card title="Nøkkelkompetanse">
                <b>Digital endring</b><br/>
                    Kompetanse om hvordan planlegge, gjennomføre og etterfølgedigitale endringsprosjekter
                    Relevante fag: Digital endring og transformasjon<br/><br/>
                <b>Prosjektledelse</b><br/>
                    Gjennom studiet har jeg tilegnet med teoretisk kunnskap, samt
                    praktisk erfaring med å gjennomføre og lede prosjekter. Jeg har og
                    stiftet kjennskap til Agile og Scrum.<br/><br/>
                <b>Front-end programmering</b><br/>
                    Gjennom studiet har jeg hatt flere fag med front-end programmeringog har vært borti flere rammeverk og teknologier for utvikling.
            </Card>
          </Column>
          </Row>
      </div>
      </>
    );
  }
}
export default CV;

