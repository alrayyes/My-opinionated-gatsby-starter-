import { storiesOf } from "@storybook/react"
import React from "react"
import NotFoundPage from "../pages/404"

storiesOf("404 page", module).add(`default`, () => <NotFoundPage />)
