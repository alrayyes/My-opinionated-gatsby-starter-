import React from "react"
import renderer from "react-test-renderer"
import * as Gatsby from "gatsby"
import NotFoundPage from "./404"
import { SEODataInterface } from "../@types/components/seo"

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")

describe("NotFoundPage", () => {
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

  it("renders correctly", () => {
    expect(renderer.create(<NotFoundPage />).toJSON()).toMatchSnapshot()
  })
})
