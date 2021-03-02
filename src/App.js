import { Component } from 'react'

class App extends Component {
  
  state = {
    name: "",
  }


  //add fetch here to get names

  handleNameButton = () => {
   this.setState({ name: "george" })
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Stage!</h1>
        <button onClick={this.handleNameButton}>generate a name</button> 
        <h2>{this.state.name}</h2>
      </div>
    )
  } 
}


export default App;