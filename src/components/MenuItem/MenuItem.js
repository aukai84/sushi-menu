import * as React from "react"
import "./MenuItem.css"

const MenuItem = ({ title, description }) => {
  return (
    <div className="menu-item">
      <h2 className="menu-item__title">{title}</h2>
      <p className="menu-item__description">{description}</p>
    </div>
  )
}

export default MenuItem
