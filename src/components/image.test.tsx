import renderer from "react-test-renderer"
import React from "react"
import Image from "./image"
import * as Gatsby from "gatsby"
import { ImageDataInterface } from "../@types/components/image"

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")

describe("Image", () => {
  beforeEach(() => {
    const data: ImageDataInterface = {
      placeholderImage: {
        childImageSharp: {
          fluid: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",
            aspectRatio: 1,
            src:
              "/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png",
            srcSet:
              "/static/6d91c86c0fde632ba4cd01062fd9ccfa/69585/gatsby-astronaut.png 200w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/497c6/gatsby-astronaut.png 400w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w",
            srcSetWebp:
              "/static/6d91c86c0fde632ba4cd01062fd9ccfa/61e93/gatsby-astronaut.webp 200w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/1f5c5/gatsby-astronaut.webp 400w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/58556/gatsby-astronaut.webp 800w",
            srcWebp:
              "/static/6d91c86c0fde632ba4cd01062fd9ccfa/58556/gatsby-astronaut.webp",
            sizes: "(max-width: 800px) 100vw, 800px",
          },
        },
      },
    }

    useStaticQuery.mockImplementation(() => data)
  })

  it("renders correctly", () => {
    const tree = renderer.create(<Image />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
