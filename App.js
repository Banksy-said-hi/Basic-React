import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
      hobby: "Singing",
      errormessage: "",
      brand: "Ford",
      model: "Mustang",
      color: "Blue",
      year: "1990",
      food: "pasta",
      description: "This is going well,Thanks GOD <3"
    };
  }





//===================================================================
// Functions
// Declaring functions in order to change the State object via button or ...

  alert = (a) => {
    alert(a)
  }

  changeColor = () => {
    this.setState({color: "Red"})
  }

  changeBrand = () => {
    this.setState({brand: "Tesla"})
  }






//=====================================================================
// Event handlers
// Add an event handler in the onChange attribute, and let the event handler update the State object
// Specifying myChangeHandler for multiple inputs by addressing each name to a value in our event
// Alerting the user for a wrong input type in age field



  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    if (nam === "age") {
      if (val !=="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }







//=====================================================================
// getDerivedStateFromProps
// (fetching the state instantly from props passing to the component)

  static getDerivedStateFromProps(props, state) {
    return {year: props.year}
  }






//===========================================================================================
// ComponentDidMount 
// Could do (any functionality) anything in the component after being mounted on the document

  componentDidMount() {
    setTimeout(() => {
      this.setState({food: "taco"})
    }, 2000);
  }





  render() {



    // We can add (if.then) statement exactly below the render to work with conditional statements
    let header = "";
    if (this.state.username && this.state.age) {
      header = <h1>Hello {this.state.username} :) Actually now i know you are {this.state.age}</h1>
    } else {
      header = "";
    }



    return (
      <div>
          {/* We can access our conditional variable via curly braces */}
          {header}
          {/* Specifying the blue color for the next sentence */}
          <strict>I love spending time for {this.state.hobby}</strict>
          <h2>My car is a {this.state.color} {this.state.model} from {this.state.brand} company in {this.state.year}</h2>
          <h3>My favorite food is {this.state.food}</h3>


          <button type="button" onClick={this.changeColor}>Change Color</button>
          <button type="button" onClick={this.changeBrand}>Change Brand</button>
        {/* this button needs a parameter to get called(Because the alert function needs one parameter) and this is the way we send our parameter to it */}
          <button type="button" onClick={() => this.alert("Goal")}>Alert</button>


          <form>
            <p>Hi!What is your name?</p>
            <input type="text" name="username" onChange={this.myChangeHandler}/>
            <input type="submit"/>
          </form>


          <form>
            <p>How old are you?</p>
            <input type="text" name="age" onChange={this.myChangeHandler}/>
            {/* Making the color of the button light blue */}
            <input type="submit" style={{backgroundColor: "lightblue"}}/>
            {this.state.errormessage}
          </form>

          <form>
            <textarea value={this.state.description} />
          </form>


          <form>
            <select value={this.state.singing}>
              <option value="Sking">Snowboarding</option>
              <option value="Coding">Programming</option>
              <option value="Boxing">Heavy bag training</option>
            </select>
          </form>
      </div>
    )
  }
}

export default App;
