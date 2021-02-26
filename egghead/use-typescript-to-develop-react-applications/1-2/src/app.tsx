import * as React from 'react'
import * as ReactDOM from 'react-dom';

// class App extends React.Component {
//   render() {
//     return (
//       <div>Hello General Kenobi</div>
//     )
//   }
// }

const App = ({ message }) => <div>{ message }</div>


ReactDOM.render(
  <App message ="hello world"/>,
  document.getElementById('root')
)