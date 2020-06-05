import { Link } from "gatsby"
import React from "react"
import { HeaderInterface } from "../@types/components/header"
import styled from "@emotion/styled"

const Header: React.FC<HeaderInterface> = ({ siteTitle }) => {
  const Header = styled.header`
    background: rebeccapurple;
    margin-bottom: 1.45rem;
  `

  const Container = styled.div`
    margin: 0 auto;
    max-width: 960;
    padding: 1.45rem 1.0875rem;
  `

  const H1 = styled.h1`
    margin: 0;
  `

  const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
  `

  return (
    <Header>
      <Container>
        <H1>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </H1>
      </Container>
    </Header>
  )
}

export default Header
