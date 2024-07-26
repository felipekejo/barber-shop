
import Booking from "./Booking";

export default interface BookingRepositoryCore {
  create(booking: Booking): Promise<void>
  findByEmail(email: string): Promise<Booking[]>
  findByProfessionalAndDate(professional: number, date: Date): Promise<Booking[]>
}