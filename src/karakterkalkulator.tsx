import React, { Component, useState} from "react";
import { Form, Card, Row, Column, Button } from "./widgets";


class Kalkulator extends Component{

    grad_niva_list = ["Bachleor", "Master", "Doktor"];
    antall_semestre = 0;
    accepted_grades = ['A', 'B', 'C', 'D', 'E', 'Bestått']

    state = {
        inputs: "",
        setInputs: ""
    }
    

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('The name you entered was: ${name}')
    }

    render(){
        return(
            <>
                <Card title="Karakterkalkulator">
                    <Row>
                        <Column>
                        <Form.Label>Grads nivå?</Form.Label>
                                <Button.Secondary onClick={() => {
                                        this.antall_semestre = 6;
                                }}>
                                    Bachleor
                                </Button.Secondary>
                                <Button.Secondary onClick={() => {
                                        this.antall_semestre = 10;
                                }}>
                                    Master
                                </Button.Secondary>
                                <Button.Secondary onClick={() => {
                                        this.antall_semestre = 14;
                                }}>
                                    Doktor
                                </Button.Secondary>
                           
                        </Column>
                        <Column width={4}>
                        </Column>
                    </Row>
                    <Row>
                        <form onSubmit={handleSubmit}>
                            <label>Emne:</label><input type="text" name="Emne" value={this.inputs || ""} onChange={this.handleChange}></input>
                            <label>Emne:</label><input type="text" name="karakter" value={this.inputs || ""} onChange={this.handleChange}></input>
                        </form>
                    </Row>
                </Card>
            </>
        )
    }
}

export default Kalkulator;

function setInputs(arg0: (values: any) => any) {
    throw new Error("Function not implemented.");
}
