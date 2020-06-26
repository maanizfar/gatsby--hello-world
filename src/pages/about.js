import React from "react"
import { Link } from "gatsby"

export default function About() {
  return (
    <div>
      <h1>About me</h1>
      <p>I'm Salman</p>

      <h3>Links</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  )
}
