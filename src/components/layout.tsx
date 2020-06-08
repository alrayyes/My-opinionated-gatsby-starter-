/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../utils/layout.css"
import {
  LayoutDataInterface,
  LayoutInterface,
} from "../@types/components/layout"

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  const data: LayoutDataInterface = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={"layoutContainer"}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
