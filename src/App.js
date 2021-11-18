import React, { Component } from "react";
import "./App.css";
import Image from "./ghada.jpg";

class App extends Component {
  state = {
    Person: {
      fullName: "Ghada Nasri",
      bio: "self-taught developer",
      profession: "developer",
    },
    show: true,
    timer: 0,
  };
  toggle = () => this.setState((state) => ({ show: !state.show }));

  /*changeMessage(){
    this.setState({
      Person: {
        fullName: "thank you for subscribing"
      }
    })
  }*/
  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="commandeContainer">
          <button className="btn" onClick={this.toggle}>
            {!this.state.show ? "Hidden" : "Visible"}
            <h2 className="timer">{this.state.timer}</h2>
          </button>
        </div>
        <br />
        <div>
          {this.state.show ? (
            <div className="profile">
              <div className="imgContainer"></div>
              <div className="infoContainer">
                <img src={Image} />
                <h1> {this.state.Person.fullName}</h1>
                <h1> Profession :{this.state.Person.profession}</h1>
                <h1>{this.state.Person.bio} </h1>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default App;

/*<button onClick={() => this.changeMessage()}>Subscribe</button>*/
