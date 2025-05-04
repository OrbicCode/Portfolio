import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './components/About/About'
import Expertise from './components/Expertise/Expertise'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import ProjectPage from './Pages/ProjectPage/ProjectPage'
import Scrimba from './Pages/Scrimba/Scrimba'
import HeaderTop from './components/HeaderTop/HeaderTop'
import ScrollHandler from './components/ScrollHandler';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import NotFound from './Pages/NotFound/NotFound'
import './App.css'

function App() {
  
  const [isScrolled, setIsScrolled] = useState(false)

      useEffect(() => {
        const saveScrollPosition = () => {
          sessionStorage.setItem('scrollPosition', window.scrollY);
        };
        window.addEventListener('beforeunload', saveScrollPosition);
        return () => window.removeEventListener('beforeunload', saveScrollPosition);
      }, []);
    
      useEffect(() => {
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        if (scrollPosition) {
          window.scrollTo(0, parseInt(scrollPosition, 10));
        }
      }, []);

      useEffect(() => {

        if (window.scrollY > 500) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
  
      function handleScroll() {
          if (window.scrollY > 500) {
              setIsScrolled(true);
          } else {
              setIsScrolled(false);
          }
      }
  
          window.addEventListener('scroll', handleScroll)
          return () => window.removeEventListener('scroll', handleScroll)
      }, [])
  return (
    <Router>
      <div className="layout">
        <ScrollHandler>
          <Routes>
            <Route path="/" element={
              <>
                <Header id="home" isScrolled={isScrolled}/>
                <About id="about" />
                <Expertise id="expertise" />
                <Work id="work" />
                <Contact id="contact" />
              </>
            } />
            <Route path="/projects/:id" element={<ProjectPage />} />
            <Route path="/scrimba" element={<Scrimba isScrolled={isScrolled} />} />
            <Route path='*' element={<NotFound />} />
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </ScrollHandler>
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
