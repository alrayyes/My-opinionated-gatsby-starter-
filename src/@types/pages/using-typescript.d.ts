export interface UsingTypescriptDataInterface {
  data: {
    site: {
      buildTime: string
    }
  }
}

export interface UsingTypescriptInterface extends UsingTypescriptDataInterface {
  path: string
}
