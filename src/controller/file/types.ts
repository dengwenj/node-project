import { IncomingMessage } from "http"

export interface IIncomingMessage extends IncomingMessage {
  file?: {
    filename: string
    size: number
    mimetype: string
  }
}