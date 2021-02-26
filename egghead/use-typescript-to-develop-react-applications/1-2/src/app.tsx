import * as React from 'react'
import * as ReactDOM from 'react-dom';

// const App = ({ message }) => <div>{ message }</div>

// const <App:React.SFC> message: string </App:React.SFC> = ({ message }) => <div>{ message }</div>


// class App extends React.Component {
//   render() {
//     return (
//       <div>Hello General Kenobi</div>
//     )
//   }
// }

type AppProps = {
  message: string,
}
type AppState = {
  count: number,
}
class App extends React.Component<AppProps, AppState> {
//   message: string
// }, {
//   count: number,
//   }, {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState({
      count: this.state.count +1
    })
  }
  render() {
    return (
      // <div>{this.props.message} {this.state.count}</div>
      <div onClick={this.increment}>{this.props.message}{this.state.count}</div>
    )
  }

}


ReactDOM.render(
  // <App/>,
  <App message ="hello world"/>,

  document.getElementById('root')
)