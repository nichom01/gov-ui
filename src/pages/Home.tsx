import Navigation from '../components/Navigation'

function Home() {
  const navigationItems = [
    { href: '/', text: 'Home', current: true },
    { href: '/about', text: 'About' },
  ]

  return (
    <>
      <Navigation navigation={navigationItems} />
      <div className="govuk-width-container" style={{ flex: '1' }}>
        <main className="govuk-main-wrapper" id="main-content">
          <h1 className="govuk-heading-xl">Welcome to GOV.UK</h1>
          <p className="govuk-body-l">
            This is the home page of your application.
          </p>
          <p className="govuk-body">
            You can use this template to build your GOV.UK styled application.
          </p>
        </main>
      </div>
    </>
  )
}

export default Home
