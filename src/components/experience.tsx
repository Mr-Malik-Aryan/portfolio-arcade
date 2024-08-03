import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Skeleton } from "@/components/ui/skeleton"

  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import fitnessFundaslogo from '../../public/fitnessfundas.webp'
  const ExpCard =()=>{
    return (<Card className="bg-[#1e1e20] ">
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent className="grid  gap-8">
          <div className="flex items-center gap-4">
            <Avatar className=" h-12 w-12 flex">
              <AvatarImage src={fitnessFundaslogo.src} alt="Avatar" />
              <AvatarFallback> <Skeleton className="h-12 w-12 rounded-full" /></AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-lg font-medium leading-none">
                Fitness Fundas
              </p>
              <p className="text-base text-muted-foreground">
                Web Development and Marketing Intern
              </p>
              <p className="text-base text-muted-foreground">
              Hyderabad
              </p>
            </div>
      
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 flex">
              <AvatarImage src="https://avatars.githubusercontent.com/u/13749121?s=200&v=4" alt="Avatar" />
              <AvatarFallback> <Skeleton className="h-12 w-12 rounded-full" /></AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-lg font-medium leading-none">
                  Department of Technical Arts 
              </p>
              <p className="text-base text-muted-foreground">
              Full Stack Web Developer 
              </p>
              <p className="text-base text-muted-foreground">
                Bits Pilani Hyderabad Campus
              </p>
            </div>
      
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 flex">
              <AvatarImage src="https://scontent.fdel25-1.fna.fbcdn.net/v/t39.30808-6/298200719_472469991554840_7723336245599867666_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=lb2GdTOeFYgQ7kNvgHVdvSe&_nc_ht=scontent.fdel25-1.fna&oh=00_AYDnm2_cRFVNls4gVqdaBnZdIeLyNbpsKlFndV_cylDr8Q&oe=66AA9D3E" alt="Avatar" />
              <AvatarFallback> <Skeleton className="h-12 w-12 rounded-full" /></AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-lg font-medium leading-none">
                 Innovation Cell
              </p>
              <p className="text-base text-muted-foreground">
              Tech Team
              </p>
              <p className="text-base text-muted-foreground">
                Bits Pilani Hyderabad Campus
              </p>
            </div>
      
          </div>
        
        </CardContent>
      </Card>);
  }
  export default ExpCard;