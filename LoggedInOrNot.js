import React from "react"

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class App extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               isLoggedIn: true
          }
     }
     render() {
          return (
               <div>
                    <h1>You are currently logged {this.state.isLoggedIn ?
                                                  "In" :
                                                  "Out"}</h1>
               </div>
          )
     }
}

export default App