import React from 'react';

class ChangeValuesOnButtonClicks extends React.Component {
     constructor() {
          super()
          this.state ={
               count:0
          }
          this.handleClick = this.handleClick.bind(this)
          this.handleMinusClick = this.handleMinusClick.bind(this)
          this.handleSquareClick = this.handleSquareClick.bind(this)
          this.handleCubeClick = this.handleCubeClick.bind(this)
     }

     // Methods/functions inside a class
     // must bind with the class explicitly
     handleClick () {
          // console.log("I am clicked")
          this.setState(prevState => {
               return {
                    count:prevState.count + 1
               }
          })
     }

     // lets try another method here
     handleMinusClick() {
          console.log("second method fired")
          this.setState(prevState => {
               return {
                    count:prevState.count -1
               }
          })
     }

     // handling squares
     handleSquareClick() {
          this.setState(prevState => {
               return {
                    count: prevState.count * prevState.count
               }
          })
     }

     handleCubeClick() {
          this.setState(prevState => {
               return {
                    count: prevState.count * prevState.count * prevState.count
               }
          })
     }
     render() {
          return (
               <div>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.handleClick}>Add +1</button>
                    <button onClick={this.handleMinusClick}>Subtract -1</button>
                    <button onClick={this.handleSquareClick}>Square Value</button>
                    <button onClick={this.handleCubeClick}>Cube Value</button>
               </div>

          )
     }
}
export default ChangeValuesOnButtonClicks

