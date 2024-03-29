import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Network Automation",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "In today’s fast-paced digital landscape, manual network management is no longer sustainable. Enter network automation—the process of automating the configuration, management, testing, deployment, and operation of both physical and virtual devices within a network. By leveraging software-defined solutions, businesses can achieve improved efficiency, reduced human error, and lower operating expenses.",
  },
  {
    text: "Applications",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "In the dynamic landscape of today’s business world, application development is the heartbeat of innovation. At Alpharez, we specialize in crafting robust, user-centric applications across various platforms—mobile, web, desktop, smartwatch, VR, and AR. Our seasoned engineers transform ideas into unforgettable digital experiences, whether it’s a consumer-facing app or a B2B solution.",
  },
  {
    text: "Cloud",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "In today’s digital landscape, enterprises rely on cloud services for agility, scalability, and innovation. At Alpharez, we specialize in bridging the gap between your existing infrastructure and the cloud, ensuring a harmonious blend of on-premises systems and cloud-based solutions.",
  },
]

const headerPageLinks = [
  {
    text: "Projects",
    url: "Projects",
    badge: false,
    description:
      "Projects Page",
  },
  {
    text: "About Us",
    url: "Projects",
    badge: false,
    description:
      "Projects Page",
  },
]

const moreLinks = [
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", 
    url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/at.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        alpharez.com
      </h1>
      <p className={styles.intro}>
        {" "}
        {headerPageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== headerPageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
