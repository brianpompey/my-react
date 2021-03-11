import * as React from "react"
import { Link } from "gatsby"

import logo from '../images/gatsby-icon.png'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>I love it here</h1>
        <p>This is my home!</p>
        <p>Now go build something great.</p>

        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        <div className="Logos">
          <img src={logo}width="50" />
          <img src={logo}width="50" />
          <img src={logo}width="50" />
          <img src={logo}width="50" />
          <img src={logo}width="50" />
          <img src={logo}width="50" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f3f4f5" fill-opacity="1" >
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0,32L40,64C80,96,160,160,240,186.7C320,213,400,203,480,181.3C560,160,640,128,720,112C800,96,880,96,960,106.7C1040,117,1120,139,1200,122.7C1280,107,1360,53,1400,26.7L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
          </path>
        </svg>
      </div>
    </div>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
