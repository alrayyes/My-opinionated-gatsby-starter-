import renderer from "react-test-renderer"
import React from "react"
import * as Gatsby from "gatsby"
import Layout from "./layout"
import { LayoutDataInterface } from "../@types/components/layout"

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")

describe("Layout", () => {
  beforeEach(() => {
    const data: LayoutDataInterface = {
      site: {
        siteMetadata: {
          title: "Gatsby Default Starter",
        },
      },
    }

    useStaticQuery.mockImplementation(() => data)
  })

  it("renders correctly", () => {
    const tree = renderer.create(<Layout>children</Layout>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
