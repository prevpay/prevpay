export default interface FailMessage {
  icon?: FailMessageIcon,
  title?: string,
  message?: string,
  show: boolean
}

export enum FailMessageIcon {
  NOT_FOUND = './assets/illustrations/looking.svg'
}
