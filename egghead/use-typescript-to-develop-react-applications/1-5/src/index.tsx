import * as React from 'react'

export const Fancy: React.FunctionComponent<{ text: string }>
  = (props) => <h1>{props.text}</h1>
  

// type React.SFC<P = { }> = React.FunctionComponent<P>

// type React.SFC<Fancy = { text: string }> = React
  
// export const Fancy: React.FunctionComponent<p>

// type React.FunctionComponent<Fancy>