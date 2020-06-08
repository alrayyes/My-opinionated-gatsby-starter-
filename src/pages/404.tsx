import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import tw from "twin.macro"

const Header = styled.h1`
  ${tw`text-5xl font-bold`}
`

const Text = styled.p`
  ${tw`mt-6 text-xl`}
`

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header>NOT FOUND</Header>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </Layout>
)

export default NotFoundPage
