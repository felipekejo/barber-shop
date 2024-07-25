'use client'

import useUser from "@/data/hooks/useUser"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Logo from "../shared/Logo"


const userLoginSchema = z.object({
  name: z.string(),
  email: z.string(),
  telephone:z.string()
})

type UserLoginFormSchema = z.infer<typeof userLoginSchema>

export default function UserLoginForm() {
  const {register, handleSubmit} = useForm<UserLoginFormSchema>({
    resolver:zodResolver(userLoginSchema),
  })

  const {user, login} = useUser()
  const params = useSearchParams()
  const router = useRouter()
  
  useEffect(() => {
    if (user?.email) {
        const dest = params.get('destino') as string
        router.push(dest ? dest : '/')
    }
}, [user, router, params])
  function handleSubmitUser(data: UserLoginFormSchema) {
    login(data)
  }

  return (
    <div className="flex justify-center items-center h-screen relative">
      <Image src="/banners/principal.webp" fill alt="Barbearia" className="object-cover" />
      <div
          className="
              flex flex-col justify-center items-center gap-10
              absolute top-0 left-0 w-full h-full
              bg-black/80 md:bg-transparent md:bg-gradient-to-r from-black/30 via-black/90 to-black/30
          "
      >
        <Logo />
        <div className="flex flex-col w-1/5 gap-5">
          <form className="flex flex-col gap-4 rounded" onSubmit={handleSubmit(handleSubmitUser)}>
              <input
                type="text"
                placeholder="Name"
                className="bg-zinc-900 px-4 py-2 rounded"
                {...register('name')}
              />
              <input
                type="email"
                placeholder="E-mail"
                className="bg-zinc-900 px-4 py-2 rounded"
                {...register('email')}
              />
              <input
                type="tel"
                {...register('telephone')}
                placeholder="Telefone"
                className="bg-zinc-900 px-4 py-2 rounded"
              />
              <div className="flex gap-5">
                  <button
                      type="submit"
                      className="button bg-green-600 flex-1"
                  >
                      Entrar
                  </button>
                  <button
                      onClick={() => {
                          router.push('/')
                      }}
                      className="button flex-1"
                  >
                      Cancelar
                  </button>
              </div>
          </form>
      </div>        
      </div>
    </div>
  )

}