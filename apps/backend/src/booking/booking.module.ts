import { Module } from '@nestjs/common'
import { DbModule } from 'src/db/db.module'

import { BookingController } from './booking.controller'
import { BookingRepository } from './booking.repository'

@Module({
  imports: [DbModule],
  controllers: [BookingController],
  providers: [BookingRepository],
})
export class BookingModule {}
