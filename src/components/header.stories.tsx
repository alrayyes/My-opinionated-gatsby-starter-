import { storiesOf } from "@storybook/react"
import React from "react"
import Header from "./header"

storiesOf("Header component", module).add(`default`, () => (
  <Header siteTitle={"My Opinionated Gatsby Default Starter"} />
))
