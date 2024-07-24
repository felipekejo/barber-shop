'use client'

import OurClients from "@/components/client/OurClients"
import TitleSlogan from "@/components/landing/TitleSlogan"
import OurProfessionals from "@/components/professional/OurProfessionals"
import OurServices from "@/components/service/OurServices"
import ContainerBackground from "@/components/shared/ContainerBackground"

export default function Landing(){
  return (
    <div>
      <TitleSlogan/>
      <ContainerBackground image="/banners/servicos.webp">
        <OurServices/>
      </ContainerBackground>
      <ContainerBackground image="/banners/profissionais.webp">
        <OurProfessionals/>
      </ContainerBackground>
      <ContainerBackground image="/banners/clientes.webp">
        <OurClients/>
      </ContainerBackground>     
    </div>
  )
}