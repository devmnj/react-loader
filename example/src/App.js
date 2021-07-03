import React from 'react'
// import { ExampleComponent } from '@codehat/react-loader'
import '@codehat/react-loader/dist/index.css'
import ReactLoader from '@codehat/react-loader'

const App = () => {
  return (
    <div  className="flex items-center align-middle">
      <ReactLoader type="Circle" />
      <ReactLoader type="BouncingBars" />
      <ReactLoader type="Wave" />
      <ReactLoader type="TwinCircles" />
      <ReactLoader type="SpinnerDots" />
      <ReactLoader type="Focus" />
    </div>);
}

export default App
