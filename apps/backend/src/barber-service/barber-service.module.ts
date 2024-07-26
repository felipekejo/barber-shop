import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { BarberServiceController } from './barber-service.controller';

@Module({
  imports: [DbModule],
  controllers: [BarberServiceController]
})
export class BarberServiceModule {}
