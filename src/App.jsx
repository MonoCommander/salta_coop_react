import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home/Home'
import About from './Screens/About/About'
import Contact from './Screens/Contact/Contact'
import Services from './Screens/Services/Services'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/services' element={<Services />}/>
      </Routes>
    </>
  )
}

export default App
