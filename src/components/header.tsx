import { Link } from "gatsby"
import React from "react"
import { HeaderInterface } from "../@types/components/header"
import styled from "@emotion/styled"
import tw from "twin.macro"

const Header: React.FC<HeaderInterface> = ({ siteTitle }) => {
  const Header = styled.header`
    ${tw`bg-purple-600 mb-6`}
  `

  return (
    <Header>
      <div className={"headerContainer"}>
        <Link className={"headerLink"} to={"/"}>
          {siteTitle}
        </Link>
      </div>
    </Header>
  )
}

export default Header
