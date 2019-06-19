import React from "react"

function App() {
     function handleClick() {
          console.log("Button Clicked")
     }

     function handleMouseOver() {
          console.log("Mouse is over me")
     }
     return (
          <div>
               <img src="https://picsum.photos/200/300" onMouseOver={handleMouseOver} alt="random images"/>
               <br />
               <br />
               <button onClick={handleClick}>Click Me</button>
          </div>
     )
}
export default App;