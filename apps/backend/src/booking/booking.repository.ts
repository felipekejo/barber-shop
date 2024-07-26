import { Booking, BookingRepositoryCore } from '@barber/core'
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/db/prisma.service'

@Injectable()
export class BookingRepository implements BookingRepositoryCore {
  constructor(private readonly prismarServer: PrismaService) {}
  async create(booking: Booking): Promise<void> {
    await this.prismarServer.booking.create({
      data: {
        date: booking.date,
        emailClient: booking.emailClient,
        professional: { connect: { id: booking.professional.id } },
        services: {
          connect: booking.services.map((service) => ({ id: service.id })),
        },
      },
    })
  }

  async findByEmail(email: string): Promise<Booking[]> {
    const bookings = await this.prismarServer.booking.findMany({
      where: {
        emailClient: email,
        date: {
          gte: new Date(),
        },
      },
      include: {
        professional: true,
        services: true,
      },
      orderBy: {
        date: 'desc',
      },
    })

    return bookings
  }

  async findByProfessionalAndDate(
    professional: number,
    date: Date,
  ): Promise<Booking[]> {
    const year = date.getFullYear()
    const month = date.getUTCMonth()
    const day = date.getUTCDate()

    const startOfDay = new Date(year, month, day, 0, 0, 0)
    const endOfDay = new Date(year, month, day, 23, 59, 59)

    const bookings: any = await this.prismarServer.booking.findMany({
      where: {
        professionalId: professional,
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: { services: true },
    })

    return bookings
  }
}
