import * as React from "react"

import { Link } from "gatsby"

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="navigation__link" to="/sushi-menu">
        Sushi
      </Link>
      <Link className="navigation__link" to="/drink-menu">
        Drinks
      </Link>
    </div>
  )
}

export default Navigation
