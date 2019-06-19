import React from "react";
import "./style.css";


class App extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
                    name:"Shloks",
                    age:'9'
          }
     }
     render() {
          return (
               <div>
                    <h1>{this.state.name}</h1>
                    <h3>{this.state.age} years old</h3>
               </div>
          )
     }
}
export default App;
