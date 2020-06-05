import { storiesOf } from "@storybook/react"
import React from "react"
import Layout from "./layout"

storiesOf("Layout component", module).add(`default`, () => (
  <Layout>content</Layout>
))
