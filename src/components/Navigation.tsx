interface NavigationItem {
  href?: string
  text: string
  html?: string
  current?: boolean
  active?: boolean
  attributes?: Record<string, string>
}

interface NavigationProps {
  navigation: NavigationItem[]
  menuButtonText?: string
  menuButtonLabel?: string
  navigationLabel?: string
  navigationId?: string
  navigationClasses?: string
  ariaLabel?: string
  classes?: string
  attributes?: Record<string, string>
}

function Navigation({
  navigation,
  menuButtonText = "Menu",
  menuButtonLabel,
  navigationLabel,
  navigationId = "navigation",
  navigationClasses,
  ariaLabel = "Menu",
  classes,
  attributes,
}: NavigationProps) {
  const containerClasses = `govuk-service-navigation${classes ? ` ${classes}` : ""}`
  const navClasses = `govuk-service-navigation__wrapper${navigationClasses ? ` ${navigationClasses}` : ""}`

  return (
    <div
      className={containerClasses}
      data-module="govuk-service-navigation"
      {...attributes}
    >
      <div className="govuk-width-container">
        <div className="govuk-service-navigation__container">
          <nav aria-label={ariaLabel} className={navClasses}>
            <button
              type="button"
              className="govuk-service-navigation__toggle govuk-js-service-navigation-toggle"
              aria-controls={navigationId}
              hidden
              aria-hidden="true"
              aria-label={menuButtonLabel || menuButtonText}
            >
              {menuButtonText}
            </button>

            <ul className="govuk-service-navigation__list" id={navigationId}>
              {navigation.map((item, index) => {
                const isCurrent = item.current
                const isActive = item.active || isCurrent
                const itemClasses = `govuk-service-navigation__item${
                  isActive ? " govuk-service-navigation__item--active" : ""
                }`

                return (
                  <li key={index} className={itemClasses}>
                    <a
                      className="govuk-service-navigation__link"
                      href={item.href || "#"}
                      aria-current={isCurrent ? "page" : undefined}
                      {...item.attributes}
                    >
                      {isCurrent && (
                        <strong className="govuk-service-navigation__active-fallback">
                          {item.html ? (
                            <span dangerouslySetInnerHTML={{ __html: item.html }} />
                          ) : (
                            item.text
                          )}
                        </strong>
                      )}
                      {!isCurrent &&
                        (item.html ? (
                          <span dangerouslySetInnerHTML={{ __html: item.html }} />
                        ) : (
                          item.text
                        ))}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navigation
