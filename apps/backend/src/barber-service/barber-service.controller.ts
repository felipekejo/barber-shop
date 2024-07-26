import { Controller, Get } from '@nestjs/common'
import { PrismaService } from 'src/db/prisma.service'

@Controller('barber-service')
export class BarberServiceController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getAll() {
    return this.prisma.service.findMany()
  }
}
