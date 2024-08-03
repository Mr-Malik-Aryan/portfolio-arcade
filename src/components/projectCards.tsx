import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import project from "../components/cardData.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Reorder, useDragControls } from "framer-motion";
import Image from "next/image";
export default function ProjectCards() {
  interface CardType {
    no: number;
    name: string;
    color: string;
    image: string;
    title: string;
    description: string;
    techStack: string;
    url: string;
    urlWebsite: string;
    InitialCommit: string;
    content: string;
  }
  const [cardShuffled,setCardShuffled]=useState(false);
  const Prjcards: CardType[] = project.cards;
  const [cards, setCards] = useState(Prjcards);
  const controls = useDragControls();

  const handleDragEnd = (event: any, info: any, card: CardType) => {
    const threshold = 100;
    if (info.point.x > threshold) {
      // setCards((prevCards) => {
      //   const newCards = prevCards.filter(c => c.no !== card);
      //   return [ card,...newCards];
      // });
      console.log(cards);
      setCards((prevCards) => {
        setCardShuffled(true)
        const newCards = prevCards.filter((c) => c !== card);

        return [card, ...newCards];
      });
    }
  };
useEffect(()=>{

},[cardShuffled])
  return (
    <div className=" flex gap-[500px] lg:gap-[700px] xl:gap-[300px]   xl:flex-row flex-col w-full lg:justify-center xl:items-baseline items-center justify-between h-full ">
      <Reorder.Group
        className="flex "
        values={cards}
        axis="x"
        onReorder={setCards}
      >
        {cards.map((project) => (
          <Reorder.Item
            key={project.no}
            value={project.no}
            dragControls={controls}
            dragListener={false}
          >
            <motion.div
             
              className={` reorder-handle w-0 h-0  cursor-grab flex justify-center p-4 md:p-8 `}
              drag="x"
              dragElastic={{ right: 0.6, left: 0.1 }}
              layout
              dragConstraints={{ left: 0, right: 20 }}
              onPointerDown={(e) => controls.start(e)}
              onDragEnd={(event, info) => {
                handleDragEnd(event, info, project);
               // console.log(info.point.x);
              }}
              whileHover={{
               
              
              }}
            >
              <Card
                style={{  backgroundColor: `${project.color}` }}
                className={` border-l-[12px] border-b-[10px] border-t-[10px] rotate-[-4deg] scale-50 md:scale-70 lg:scale-90  w-[450px] h-[650px] rounded-xl  absolute `}
              >
                <CardHeader className="flex flex-row justify-between items-center">
                  <CardTitle className="text-3xl">{project.name}</CardTitle>
                  <FaGithub className="h-8 w-8" />
                </CardHeader>

                <CardContent>
                  <Image
                    draggable={false}
                    src={`${project.image}`}
                    width={400}
                    height={500}
                    alt="some image"
                  ></Image>
                </CardContent>
              </Card>
           
            </motion.div>
            
           
          </Reorder.Item>
         
        ))}
      </Reorder.Group>
      <motion.div className=" bg-[#1e1e20]  w-3/12 min-w-80 rounded-xl p-4 ">
                 <h2 className="w-3/12 mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                   About 
                 </h2>
                 <motion.p className="w-full scroll-m-20 mt-2 text-xl leading-8 " >
                  {!cardShuffled?project.cards[2].title:cards[2].title}
                 </motion.p>
               </motion.div>
    </div>
  );
}
