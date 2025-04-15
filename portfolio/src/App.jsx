import Header from './components/Header/Header'
import About from './components/About/About'
import Expertise from './components/Expertise/Expertise'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {

  return (
    <div className="layout">
      <Header />
      <About />
      <Expertise />
      <Work />
      <Contact />
    </div>
  )
}

export default App
