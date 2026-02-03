import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer2 from './components/Footer2'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  useEffect(() => {
    // Add classes to body element for GOV.UK Frontend
    if (!document.body.className.includes('js-enabled')) {
      document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');
    }
  }, [])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <a href="#main-content" className="govuk-skip-link" data-module="govuk-skip-link">Skip to main content</a>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer2 />
    </div>
  )
}

export default App
