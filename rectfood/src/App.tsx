import { Route, Routes } from 'react-router-dom'
import './App.css'
import '../app/globals.css'
import Homepage from './pages/home-page'
import RecipePage from './pages/recipe-pge'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipes/:recipId" element={<RecipePage />} />
        <Route
          path="*"
          element={
            <p className="text-red-500 text-center text-7xl font-bold mt-16">
              Page not found
            </p>
          }
        />
      </Routes>
    </>
  )
}

export default App
