import React from "react"

class App extends React.Component {
     constructor() {
          super()
          this.state = {
               count:0
          }
          this.handleClick = this.handleClick.bind(this)
     }
     handleClick() {
          // console.log("clicked")
          /* This class method handleClick need to be binded with the class in constructor
             This is a rule pertaining to using the method setState()
             this.handleClick = this.handleClick.bind(this)
          */
          this.setState(prevState => {
               return {
                    count:prevState.count + 1
               }
          })
     }
     render() {
          return (
               <div>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.handleClick}>Change!</button>
               </div>
          )
     }
}
export default App;