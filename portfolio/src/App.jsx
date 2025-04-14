import Header from './components/Header'
import About from './components/About'
import Expertise from './components/Expertise'
import Work from './components/Work'
import Contact from './components/Contact'
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
