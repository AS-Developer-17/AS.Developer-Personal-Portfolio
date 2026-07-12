import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './firebase';
import Header from './components/Header'
import Welcome from './components/Welcome'
import AboutMe from './components/AboutMe'
import Accolades from './components/Accolades'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    // Sleek minimal dark themed on initial loading: defaults to dark (true)
    return savedTheme ? savedTheme === 'dark' : true
  })

  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Apply dark mode class to HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 theme-transition flex flex-col justify-between">
      <div>
        {/* Responsive Header Component */}
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        {/* Centered Main Layout with Spacing/Margins around components */}
        <main className="max-w-5xl mx-auto px-4 md:px-8 py-10 md:py-14 w-full">
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="flex flex-col gap-12 md:gap-16">
                  <Welcome />
                  <AboutMe />
                  <Accolades />
                  <Projects />
                  <Skills />
                  <Contact />
                </div>
              } 
            />
            
            <Route 
              path="/about" 
              element={
                <div className="flex flex-col gap-12 md:gap-16">
                  <AboutMe />
                  <Accolades />
                </div>
              } 
            />
            
            <Route 
              path="/contact" 
              element={
                <div className="flex flex-col gap-12 md:gap-16">
                  <Contact />
                </div>
              } 
            />
          </Routes>
        </main>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default App
