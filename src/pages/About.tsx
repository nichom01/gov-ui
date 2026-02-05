import Navigation from '../components/Navigation'
import Breadcrumb from '../components/Breadcrumb'

function About() {
  const navigationItems = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'Test Data Generation', current: true },
    { href: '/about', text: 'Trade Test'},
    { href: '/about', text: 'Bulk Data Generation' },
    { href: '/about', text: 'Historical Data Sets' },
    { href: '/about', text: 'Uploads' },
  ]

  const breadcrumbItems = [
    { href: '/', text: 'Home' },
    { text: 'About' },
  ]

  return (
    <div style={{ flex: '1' }}>
      <Navigation navigation={navigationItems} />
      <div className="govuk-width-container">
        <Breadcrumb items={breadcrumbItems} />
        <main className="govuk-main-wrapper" id="main-content">
          <h1 className="govuk-heading-xl">About</h1>
          <p className="govuk-body-l">
            Learn more about this application.
          </p>
          <p className="govuk-body">
            This is a GOV.UK styled application built with React and TypeScript.
          </p>
          <h2 className="govuk-heading-l">Purpose</h2>
          <p className="govuk-body">
            This template provides a foundation for building accessible, user-friendly
            government services that follow the GOV.UK Design System.
          </p>
        </main>
      </div>
    </div>
  )
}

export default About
