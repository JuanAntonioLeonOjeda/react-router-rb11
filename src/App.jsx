import { RouterProvider } from 'react-router-dom'
import config from './router'

import './App.css'

function App() {

  return (
    <>
      <RouterProvider router={config}/>
    </>
  )
}

export default App
