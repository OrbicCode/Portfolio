import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './components/About/About'
import Expertise from './components/Expertise/Expertise'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import ProjectPage from './Pages/ProjectPage/ProjectPage'
import Scrimba from './Pages/Scrimba/Scrimba'
import HeaderTop from './components/HeaderTop/HeaderTop'
import ScrollHandler from './components/ScrollHandler'; // New component

import './App.css'

function App() {
  return (
    <Router>
      <div className="layout">
        <ScrollHandler>
          <Routes>
            <Route path="/" element={
              <>
                <Header id="home" />
                <About id="about" />
                <Expertise id="expertise" />
                <Work id="work" />
                <Contact id="contact" />
              </>
            } />
            <Route path="/projects/:id" element={<ProjectPage />} />
            <Route path="/scrimba" element={<Scrimba />} />
          </Routes>
        </ScrollHandler>
      </div>
    </Router>
  )
}

export default App
