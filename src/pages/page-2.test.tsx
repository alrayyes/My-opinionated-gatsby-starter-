import React from "react"
import renderer from "react-test-renderer"
import * as Gatsby from "gatsby"
import { SEODataInterface } from "../@types/components/seo"
import SecondPage from "./page-2"

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")

describe("SecondPage", () => {
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
    expect(renderer.create(<SecondPage />).toJSON()).toMatchSnapshot()
  })
})
