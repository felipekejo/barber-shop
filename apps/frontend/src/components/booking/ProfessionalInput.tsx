import useProfessionals from "@/data/hooks/useProfessional";
import { Professional } from "@barber/core";
import Image from "next/image";

export interface ProfessionalInputProps{
  professional: Professional | null
  professionalChanged: (professional: Professional) => void
}

function Option(props: {
  professional: Professional
  onClick: (p: Professional) => void
  selected?: boolean
}){
  return (
    <div className={`
      flex flex-col items-center cursor-pointer select-none rounded-lg border w-[150px] h-[180px]
      ${props.selected ? 'border-green-400' : 'border-zinc-700'} overflow-hidden
  `}onClick={() => props.onClick(props.professional)}>
      <Image
        src={props.professional.imgURL}
        alt={props.professional.name}
        width={150}
        height={150}
      />
      <div>
        {props.professional.name.split(' ')[0]}
      </div>
    </div>
  )
}
export default function ProfessionalInput(props: ProfessionalInputProps) {
  const { professionals } = useProfessionals();
  return (
    <div className="flex flex-col gap-5">
      <span className="text-sm uppercase text-zinc-400">Available Professionals</span>
      <div className="grid grid-cols-2 md:grid-cols-3 self-start gap-5">
        {professionals.map((professional) => (
          <div key={professional.id}>
            <Option

              key={professional.id}
              professional={professional}
              onClick={props.professionalChanged}
              selected={professional.id === props.professional?.id}
            />
            <span>{professional.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}