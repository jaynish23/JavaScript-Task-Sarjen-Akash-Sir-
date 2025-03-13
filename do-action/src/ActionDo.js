import React from 'react'
import './Style.css';

class ActionDo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            txt1 : "",
            txt2 : "",
            txt3 : ""
        }
    }
    sum = () => {
        // var a = this.state.txt1;
        // var b = this.state.txt2;
        // var c = parseInt(a)+ parseInt(b)
        // this.setState({txt3: "the value is"+c})

        const {txt1,txt2} = this.state
        let c = parseInt(txt1)+ parseInt(txt2)
        this.setState({txt3 : `the value is ${c}`})
    }

    subtraction = () =>{
        const {txt1,txt2} = this.state
        let c = parseInt(txt1) - parseInt(txt2)
        this.setState({txt3 : `the value is ${c}`})
    }

    multiplication = () => {
        let a = parseInt(this.state.txt1);
        let b = parseInt(this.state.txt2);
        if (!isNaN(a) && !isNaN(b)) {
            let c = a * b;
            this.setState({ txt3: "The multiplication is " + c });
        } 
    };

    division = () => {
        let a = parseInt(this.state.txt1);
        let b = parseInt(this.state.txt2);
        if (!isNaN(a) && !isNaN(b)) {
            if (b !== 0) {
                let c = a / b;
                this.setState({ txt3: "The division is " + c });
            } else {
                this.setState({ txt3: "Cannot divide by zero" });
            }
        } 
    };

    render(){
        return(
            <div className="calculator-container">
            No1: <input type="text" onChange={(e) => this.setState({txt1: e.target.value})} />
            No2: <input type="text" onChange={(e) => this.setState({txt2 : e.target.value})} />
            
            <br />

            <input type="button" value="Sum" onClick={this.sum} />
            <input type="button" value="Subtraction" onClick={this.subtraction} />
            <input type="button" value="Multiplication" onClick={this.multiplication} />
            <input type="button" value="Division" onClick={this.division} />
            <h1>{this.state.txt3}</h1>
            </div>
        )
    }
}
export default ActionDo