import { Route, Routes } from 'react-router-dom'
import './App.css'
import '../app/globals.css'
import Homepage from './pages/home-page'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
