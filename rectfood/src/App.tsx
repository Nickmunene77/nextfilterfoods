import './App.css'
import { Button } from './components/ui/button'

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button variant={'ghost'} className="text-3xl bg-teal-700">
        Button
      </Button>
    </>
  )
}

export default App
