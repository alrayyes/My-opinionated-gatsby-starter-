interface SEOMetaNameInterface {
  name: string
  content: string
}

interface SEOMetaPropertyInterface {
  property: string
  content: string
}

export interface SEOInterface {
  description?: string
  lang?: string
  meta?: Array<SEOMetaNameInterface | SEOMetaPropertyInterface>
  title: string
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
