import { TIME_SLOT } from '../constants';

import BookingRepositoryCore from "./BookingRepositoryCore";

export default class GetOccupiedSlotsUseCase {
  constructor(private readonly bookingRepository: BookingRepositoryCore) {}

  async execute(professionalId: number, date: Date): Promise<string[]> {
    const bookings = await this.bookingRepository.findByProfessionalAndDate(professionalId, date)
    const data = bookings.map((booking)=>{
      return {
        date: booking.date,
        slots: booking.services.reduce((total,s)=>total+s.qtySlots,0)
      }
    }).reduce((slotsOccupied: Date[], data: any) => {
      const hour = data.date
      const slots = data.slots
      const hours = Array.from({ length: slots }, (_, i) =>
        this.sumMinutes(hour, i * TIME_SLOT)
      )
      return [...slotsOccupied, ...hours]
    },[]).map((d) => d.toTimeString().slice(0, 5))

    return data // [ '10:00', '10:15', '10:30', '10:45', '14:15' ]
  }

  private sumMinutes(date: Date, minutes: number): Date {
    return new Date(date.getTime() + minutes * 60000)
  }
}