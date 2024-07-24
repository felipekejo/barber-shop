import { clients } from "@barber/core";
import Title from "../shared/Title";
import { LayoutGrid } from "../ui/layout-grid";
import ItemClient from "./ItemClient";


export default function OurClients(){
  const classes = ['md:col-span-2', 'col-span-1', 'col-span-1', 'md:col-span-2']
  const cards = clients.map((client,i)=>{
    return {
      id: client.id,
      content: <ItemClient name={client.name} review={client.review} />,
      className: classes[i],
      thumbnail: client.imgURL,
    }
  })
  return (
    <div>
      <Title
        tag="Clients"
        primary="Who's in charge here"
        secondary="Our customers are the bosses! Here, they rule, rule and still leave with rockstar style!"
      />
      <div className="h-[900px] w-full">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  )
}