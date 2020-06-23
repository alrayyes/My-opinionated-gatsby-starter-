export interface SEOInterface {
  title: string
  description?: string
  lang?: string
  meta?: Array<
    | {
        property: string
        content: string
      }
    | {
        name: string
        content: string
      }
  >
}

export interface SEODataInterface {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}
