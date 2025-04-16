import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './components/About/About'
import Expertise from './components/Expertise/Expertise'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import ProjectPage from './Pages/ProjectPage/ProjectPage'
import './App.css'

function App() {

  return (
    <Router>
      <div className="layout">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <About />
              <Expertise />
              <Work />
              <Contact />
            </>
          } />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
