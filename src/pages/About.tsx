function About() {
  return (
    <div className="govuk-width-container" style={{ flex: '1' }}>
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
  )
}

export default About
