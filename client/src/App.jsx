import './App.css'
import Login from './components/General/Login'
import { Button } from './components/ui/button'

function App() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className='font-bold text-2xl my-4'>Login Or Register</h1>
     <Login/>
    </div>
  )
}

export default App
