import Footer from './Footer'

export interface BodyProps {
  children: React.ReactNode
}

export default function Body({ children }: BodyProps) {
  return(
    <div className="flex flex-col min-h-screen w-screen">
      <main>{children}</main>
      <Footer/>
    </div>
  )
}