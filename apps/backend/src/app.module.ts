import { Module } from '@nestjs/common';

import { DbModule } from './db/db.module';
import { BarberServiceModule } from './barber-service/barber-service.module';
import { BookingModule } from './booking/booking.module';


@Module({
  imports: [DbModule, BarberServiceModule, BookingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
