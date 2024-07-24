import Service from '../service/Service'

const services: Service[] = [
    {
        id: 1,
        name: 'Viking Cut',
        description:
            'Come and receive a Viking cut, with a blade on your skin and a warrior style. Come out ready to face any battle with a look that commands respect.',
        price: 55,
        qtySlots: 3,
        imgURL: '/services/corte-de-cabelo.jpg',
    },
    {
        id: 2,
        name: 'Lumberjack Beard',
        description:
            'Come and give your lumberjack beard a makeover, with a precise trim and a masculine root style. Go out with a beard that commands respect and makes even the trees tremble.',
        price: 45,
        qtySlots: 2,
        imgURL: '/services/corte-de-barba.jpg',
    },
    {
        id: 3,
        name: 'Brutal Claws',
        description:
            'Come and transform your bear paws into wolf claws. Our Manicure & Pedicure service for men is as rough as you are, but with a touch of class.',
        price: 40,
        qtySlots: 2,
        imgURL: '/services/manicure-pedicure.jpg',
    },
    {
        id: 4,
        name: 'Alpha Combo',
        description:
            'Our "Alpha" combo includes a Viking haircut, a lumberjack beard and a gladiator manicure & pedicure. Get ready to face any battle with style and sharp nails.',
        price: 95,
        qtySlots: 2,
        imgURL: '/services/combo.jpg',
    },
    {
        id: 5,
        name: 'Little Hunter',
        description:
            'Transform your little adventurer into a mini hunter, with a cut full of attitude and style. Hair sharp like a guitar and cool like a Harley.',
        price: 60,
        qtySlots: 2,
        imgURL: '/services/corte-infantil.jpg',
    },
    {
        id: 6,
        name: 'Root Groom',
        description:
            'Get ready for the big day with treatment worthy of a true road warrior. Sharp haircut, lumberjack beard and biker manicure, all while you relax to the sounds of heavy rock.',
        price: 189,
        qtySlots: 2,
        imgURL: '/services/dia-de-noivo.jpg',
    },
]

export default services
