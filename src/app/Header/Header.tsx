import React from "react"
import "./Header.css"
import logo from "./logo.svg"

export default () => (
  <header className="Header-container">
    {["left", "right"].map(el => (
      <img key={el} src={logo} className={`Header-logo-${el}`} alt="logo" />
    ))}
  </header>
)
