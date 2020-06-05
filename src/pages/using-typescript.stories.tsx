import { storiesOf } from "@storybook/react"
import React from "react"
import UsingTypescript from "./using-typescript"
import { UsingTypescriptDataInterface } from "../@types/pages/using-typescript"

const data: UsingTypescriptDataInterface = {
  data: {
    site: {
      buildTime: "2020-06-05T10:23:36.000Z",
    },
  },
}
storiesOf("Using Typescript page", module).add(`default`, () => (
  <UsingTypescript data={data.data} path={"/using-typescript/"} />
))
