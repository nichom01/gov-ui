interface BreadcrumbItem {
  text?: string
  html?: string
  href?: string
  attributes?: Record<string, string>
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  classes?: string
  collapseOnMobile?: boolean
  attributes?: Record<string, string>
  labelText?: string
}

function Breadcrumb({
  items,
  classes,
  collapseOnMobile = false,
  attributes,
  labelText = "Breadcrumb",
}: BreadcrumbProps) {
  let containerClasses = "govuk-breadcrumbs"
  
  if (classes) {
    containerClasses += ` ${classes}`
  }
  
  if (collapseOnMobile) {
    containerClasses += " govuk-breadcrumbs--collapse-on-mobile"
  }

  return (
    <nav
      className={containerClasses}
      aria-label={labelText}
      {...attributes}
    >
      <ol className="govuk-breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const hasHref = !!item.href
          
          // Last item without href is the current page
          if (!hasHref && isLast) {
            return (
              <li
                key={index}
                className="govuk-breadcrumbs__list-item"
                aria-current="page"
                {...item.attributes}
              >
                {item.html ? (
                  <span dangerouslySetInnerHTML={{ __html: item.html }} />
                ) : (
                  item.text
                )}
              </li>
            )
          }
          
          // Items with href are links
          return (
            <li key={index} className="govuk-breadcrumbs__list-item">
              <a
                className="govuk-breadcrumbs__link"
                href={item.href}
                {...item.attributes}
              >
                {item.html ? (
                  <span dangerouslySetInnerHTML={{ __html: item.html }} />
                ) : (
                  item.text
                )}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
