import useProfessionals from "@/data/hooks/useProfessional"
import { Professional } from "@barber/core"
import Title from "../shared/Title"
import ItemProfessional from "./ItemProfessional"

export default function OurProfessionals(){
  const { professionals } = useProfessionals()
  return (
    <div className="container flex flex-col items-center gap-y-16">
      <Title
        tag="Team"
        primary="Our Brutes"
        secondary="Only the bravest are here! We are proud to have the most qualified team in the World"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {professionals.map((professional:Professional)=>(
          <ItemProfessional key={professional.id} professional={professional} />
        ))}
      </div>
    </div>
  )
}