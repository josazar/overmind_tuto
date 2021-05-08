import React from 'react'
import { useState, useActions} from '../overmind'
import Header from './Header'

const App = () => {
  // General
  const state = useState()
  const actions = useActions()




  return (
    <>
      <Header title={state.title}/>
      <div className="container" style={{
        backgroundColor : state.backgroundColor,
        width: state.width,
        height: state.height
      }}></div>
      <button onClick={()=> {actions.setWidth(50)}}>Change width to 50px</button>
    </>)
}

export default App
