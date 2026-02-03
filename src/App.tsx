import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer2'
import Footer2 from './components/Footer2'

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
      <div className="govuk-width-container" style={{ flex: '1' }}>
        <main className="govuk-main-wrapper" id="main-content">
          <h1 className="govuk-heading-xl">Default page template</h1>
        </main>
      </div>
      <Footer2 />
    </div>
  )
}

export default App
