'use client'

import useServices from "@/data/hooks/useService"
import { Service } from "@barber/core"
import { useRouter } from "next/navigation"
import Title from "../shared/Title"
import ItemService from "./ItemService"

export default function OurServices(){
  const router = useRouter()
  const{services} = useServices()

  function startBooking(){
    router.push('/booking')
  }
  return (
    <div className="flex flex-col gap-16">
      <Title
        tag="Services"
        primary="From Classic to Rock"
        secondary="Sharp hair, lumberjack beard and biker hands, all to the sound of heavy rock!"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {services.map((service:Service)=>(
          <ItemService key={service.id} service={service} onClick={startBooking}/>
        ))

        }
      </div>
    </div>
  )
}