import React from "react";
import './Style.css'

class ActionSingle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            txt1: '',
            txt2: '',
            txt3: ''
        };
    }

    doAction = (action) => {
        const { txt1, txt2 } = this.state;
        let a = parseInt(txt1);
        let b = parseInt(txt2);
        let result = '';

        if (isNaN(a) || isNaN(b)) {
            result = "Please enter valid numbers";
        } 
        else if (action === "sum") {
            result = `The sum is ${a + b}`;
        } 
        else if (action === "subtraction") {
            result = `The subtraction is ${a - b}`;
        } 
        else if (action === "multipication") {
            result = `The multiplication is ${a * b}`;
        } 
        else if (action === "division") {
            if (b !== 0) {
                result = `The division is ${a / b}`;
            } else {
                result = "Cannot divide by zero";
            }
        } 
        else {
            result = "Invalid action";
        }

        this.setState({ txt3: result });
    };

    render() { 
        return ( 
            <div className="calculator-container">

                No1:
                <input type="text" onChange={(e) => this.setState({ txt1: e.target.value })} />
                
                No2:
                <input type="text" onChange={(e) => this.setState({ txt2: e.target.value })} />
                <br />
                
                  
                <input type="button" value="Sum" onClick={() => this.doAction("sum")} />
                
                <input type="button" value="Subtraction" onClick={() => this.doAction("subtraction")} />
            
                <input type="button" value="Multiplication" onClick={() => this.doAction("multipication")} />
                
                <input type="button" value="Division" onClick={() => this.doAction("division")}/>
            
            <h1>{this.state.txt3}</h1>
                
            </div>
        );
    }
}

export default ActionSingle;
