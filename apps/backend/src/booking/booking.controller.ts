import { Booking, GetOccupiedSlotsUseCase } from '@barber/core'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'

import { BookingRepository } from './booking.repository'

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingRepository: BookingRepository) {}

  @Post()
  create(@Body() booking: Booking) {
    return this.bookingRepository.create(booking)
  }

  @Get(':email')
  findByEmail(@Param('email') email: string) {
    return this.bookingRepository.findByEmail(email)
  }

  @Get('professional/:professionalId/:date')
  findByProfessionalAndDate(
    @Param('professionalId') professionalId: number,
    @Param('date') date: Date,
  ) {
    const getOccupiedSlotsUseCase = new GetOccupiedSlotsUseCase(
      this.bookingRepository,
    )
    return getOccupiedSlotsUseCase.execute(+professionalId, new Date(date))
  }
}
