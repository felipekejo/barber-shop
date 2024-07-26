import { Professional } from "../professional"
import { Service } from "../service"

export default interface Booking {
  id:number
  emailClient: string
  date: Date
  professional: Professional
  services: Service[]
}