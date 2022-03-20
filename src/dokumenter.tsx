import React, { Component } from "react";
import { Column, Row, OppgaveView } from './widgets';

class DokumentArkiv extends Component {
  render() {
    return (
        <>
        <div className="header-align">
            <h1 >Oppgavesamling fra NTNU</h1>
            <div>Et utvalg av større semesteroppgaver jeg har deltatt på iløpet av studietiden min på NTNU</div>
            <hr className="my-4"></hr>
        </div>
        <div className="container">
        <Row>
 
            <Column>
                <OppgaveView 
                    src=".\Assets\oppgaver\anvendt_data_science.pdf" 
                    desc="Analyse av arbeidsledighetsprosenten under forskjellige kriser" 
                    title="Anvendt Data Science" 
                    fagkode="TDT4259"
                    img=".\Assets\oppgaver\anvendt-data-science.png"
                />
                <OppgaveView 
                    src=".\Assets\oppgaver\digitalisering_i_bransjer.pdf" 
                    desc="Digitalisering i Aluminiumsbransjen" 
                    title="Digitalisering i bransjer" 
                    fagkode="DIFT2503"
                    img=".\Assets\oppgaver\bransjer.png"
                />
            </Column>
            <Column>
                <OppgaveView 
                    src=".\Assets\oppgaver\Digital_strategi.pdf" 
                    desc="Analyse av Sparebanken 1 SMN Regnskapshuset" 
                    title="Digital strategi" 
                    fagkode="DIFT2008"
                    img=".\Assets\oppgaver\Digital-strategi.png"
                />
                <OppgaveView 
                    src=".\Assets\oppgaver\prosjektledelse.pdf" 
                    desc="Implementering av ERP-system" 
                    title="Prosjektledelse og forretningssystemer" 
                    fagkode="DIFT2008"
                    img=".\Assets\oppgaver\prosjektledelse.png"
                />
                <OppgaveView 
                    src=".\Assets\oppgaver\enterpice-modelling.pdf" 
                    desc="Modellerte virksomhets arktitekturen til en fiktig virksomhet" 
                    title="Virksomhet arkitektur og innovasjon" 
                    fagkode="TDT4252"
                    img=".\Assets\oppgaver\enterprice-modelling.png"
                />
            </Column>
        </Row>
        </div>
        </>
    );
  }
}

export default  DokumentArkiv;
    
