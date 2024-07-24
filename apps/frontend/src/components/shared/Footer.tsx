import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandYoutube,
} from '@tabler/icons-react';
import Logo from "./Logo";

export default function Footer(){
  return (
    <footer className="flex items-center bg-black">
      <div className="container flex flex-col gap-7 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-5">
          <Logo/>
          <div className="flex flex-col gap-1 items-center md:items-start">
            <span className="text-2xl text-zinc-300 font-bold mb-2.5">About</span>
            <span className="text-sm text-zinc-400">Our Story</span>
            <span className="text-sm text-zinc-400">Privacy Policy</span>
            <span className="text-sm text-zinc-400">Terms of use</span>
          </div>
          <div className="flex flex-col gap-1 items-center md:items-start">
              <span className="text-2xl text-zinc-300 font-bold mb-2.5">Contact us</span>
              <span className="text-sm text-zinc-400">suport@barbabrutal.com.au</span>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <IconBrandWhatsapp size={20} className="text-green-500" />
                  <span>Whatsapp</span>
              </div>
          </div>          
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex gap-2 text-zinc-400">
              <IconBrandYoutube size={28} stroke={1} />
              <IconBrandInstagram size={28} stroke={1} />
              <IconBrandFacebook size={28} stroke={1} />
              <IconBrandLinkedin size={28} stroke={1} />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-1.5 text-zinc-400 text-sm">
              <div className="flex gap-1.5">
                  <span>Made with</span>
                  <span>🪓</span>
                  <span>on {new Date().getFullYear()}</span>
              </div>
              <span className="hidden md:inline-block">-</span>
              <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}