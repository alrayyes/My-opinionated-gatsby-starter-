import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import tw from "twin.macro"
import { Link } from "gatsby"

const IndexPage: React.FC = () => {
  const ImageContainer = styled.div`
    ${tw`max-w-xs mb-6 mt-4`}
  `

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
    </Layout>
  )
}

export default IndexPage
