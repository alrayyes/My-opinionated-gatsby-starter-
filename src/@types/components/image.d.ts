import { FluidObject } from "gatsby-image"

export interface ImageDataInterface {
  placeholderImage: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}
