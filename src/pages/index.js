import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This website is built with gatsby!</p>
      <p>Here's a random picture for you</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />

      <h3>Links</h3>
      <ul>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="https://github.com/maanizfar/gatsby-hello-world">Repo</Link>
        </li>
      </ul>
    </div>
  )
}
