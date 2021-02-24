console.log("Hello from TypeScript!")

import React from "react"
import { render } from "react-dom"

// const App = () => <div>Hello there General Kenobi</div>

class App extends React.Component {
  render() {
    return <div>Hello there General Kenobi</div>
  }
}

render(
  // const App: () => JSX.Element("app")
  <App />, document.getElementById("app")
  
)
