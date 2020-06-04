import renderer from "react-test-renderer"
import React from "react"
import * as Gatsby from "gatsby"
import SEO from "./seo"
import { SEODataInterface } from "../@types/components/seo"
import { Helmet } from "react-helmet"

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")

describe("SEO", () => {
  beforeEach(() => {
    const data: SEODataInterface = {
      site: {
        siteMetadata: {
          title: "Gatsby Default Starter",
          description:
            "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
          author: "@gatsbyjs",
        },
      },
    }

    useStaticQuery.mockImplementation(() => data)
  })

  it("renders correctly with passed title", () => {
    renderer.create(<SEO title={"test title"} />)
    const helmet = Helmet.peek()

    expect(helmet.title.toString()).toEqual(
      `<title data-react-helmet="true">test title | Gatsby Default Starter</title>`
    )
    expect(helmet.meta.toString()).toEqual(
      `<meta data-react-helmet="true" name="description" content="Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need."/><meta data-react-helmet="true" property="og:title" content="test title"/><meta data-react-helmet="true" property="og:description" content="Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need."/><meta data-react-helmet="true" property="og:type" content="website"/><meta data-react-helmet="true" name="twitter:card" content="summary"/><meta data-react-helmet="true" name="twitter:creator" content="@gatsbyjs"/><meta data-react-helmet="true" name="twitter:title" content="test title"/><meta data-react-helmet="true" name="twitter:description" content="Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need."/>`
    )
  })

  it("renders correctly with passed description", () => {
    renderer.create(
      <SEO title={"test title"} description={"test description"} />
    )
    const helmet = Helmet.peek()

    expect(helmet.meta.toString()).toEqual(
      `<meta data-react-helmet="true" name="description" content="test description"/><meta data-react-helmet="true" property="og:title" content="test title"/><meta data-react-helmet="true" property="og:description" content="test description"/><meta data-react-helmet="true" property="og:type" content="website"/><meta data-react-helmet="true" name="twitter:card" content="summary"/><meta data-react-helmet="true" name="twitter:creator" content="@gatsbyjs"/><meta data-react-helmet="true" name="twitter:title" content="test title"/><meta data-react-helmet="true" name="twitter:description" content="test description"/>`
    )
  })

  it("renders correctly with passed lang", () => {
    renderer.create(<SEO title={"test title"} lang={"nl"} />)
    const helmet = Helmet.peek()

    expect(helmet.htmlAttributes.toString()).toEqual(`lang="nl"`)
  })

  it("renders correctly with passed meta tags", () => {
    renderer.create(
      <SEO
        title={"test title"}
        meta={[
          { name: "test name", content: "test name content" },
          { property: "test property", content: "test property content" },
        ]}
      />
    )
    const helmet = Helmet.peek()

    expect(helmet.meta.toString()).toEqual(
      `<meta data-react-helmet="true" name="description" content="Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need."/><meta data-react-helmet="true" property="og:title" content="test title"/><meta data-react-helmet="true" property="og:description" content="Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need."/><meta data-react-helmet="true" property="og:type" content="website"/><meta data-react-helmet="true" name="twitter:card" content="summary"/><meta data-react-helmet="true" name="twitter:creator" content="@gatsbyjs"/><meta data-react-helmet="true" name="twitter:title" content="test title"/><meta data-react-helmet="true" name="twitter:description" content="Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need."/><meta data-react-helmet="true" name="test name" content="test name content"/><meta data-react-helmet="true" property="test property" content="test property content"/>`
    )
  })
})
