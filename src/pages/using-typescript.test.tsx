import React from "react"
import renderer from "react-test-renderer"
import UsingTypescript from "./using-typescript"
import { UsingTypescriptDataInterface } from "../@types/pages/using-typescript"
import { SEODataInterface } from "../@types/components/seo"
import * as Gatsby from "gatsby"

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
    const data: UsingTypescriptDataInterface = {
      data: {
        site: {
          buildTime: "2020-06-04T09:48:20.000Z",
        },
      },
    }

    expect(
      renderer
        .create(<UsingTypescript data={data.data} path={"/path"} />)
        .toJSON()
    ).toMatchSnapshot()
  })
})
