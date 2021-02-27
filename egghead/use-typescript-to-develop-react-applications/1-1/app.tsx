import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Better = (props: { compiler: string, framework: string }) => {
  return (
    <div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
    </div>
  )
}

ReactDOM.render(
  <Better compiler="TypeScript" framework="React" />
  document.getElementById("root")
)