import React, {Component} from "react"

class ClassAndFunctions extends Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        models: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeColor = () => {
      this.setState({color: "blue", brand: "bmw", year: "2023", models : "ford"});
    }
    
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color} {this.state.models} from {this.state.year}.
          </p>
          <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }

  export default ClassAndFunctions