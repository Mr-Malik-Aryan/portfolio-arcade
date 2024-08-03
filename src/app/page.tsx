"use client"
import Image from "next/image";
import { useRef, useEffect } from 'react';
import { Paytone_One } from "next/font/google";
import { Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import gameBoy from "../../public/gameboy.png"
import ProjectCards from "@/components/projectCards";
import { motion,useDragControls } from "framer-motion"
import { Navbar } from "@/components/navbar";
import ExpCard from "@/components/experience";
import GameInterface from "@/components/gameboy";
const paytone = Paytone_One({
  weight: '400',
  subsets: ['latin'],
});
const outfit = Outfit({
weight:'300',
subsets:['latin']
})

export default function Home() {
  const constraintsRef = useRef(null);
  const controls = useDragControls();
  return (<>

    <div className=" flex w-full justify-center mt-2 ">
      <Navbar/>
      </div>
    
    <main  className="flex gap-40 flex-col h-full w-full  items-center overflow-x-clip" >
     
    <div ref ={constraintsRef} className="flex flex-col md:flex-row  w-full items-center justify-evenly p-10 " >
      <div className="flex flex-col items-start mt-10">
      <motion.div   initial={{opacity:0, y:100}}animate={{ opacity: 1 , y:0}} transition={{ ease:'linear'}}
>

    <p className={`${paytone.className}  text-5xl md:text-7xl  lg:text-8xl xl:text-9xl text-[#F1EBCE]`}>  Hey There,
    </p>
    </motion.div>
    <motion.p   initial={{opacity:0,y:100}}
     animate={{ opacity:1,y:0 }}
     transition={{delay:0.5}} className={`${outfit.className} text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-[#F1EBCE] mt-10 `}>  I'm Aryan Malik
    </motion.p>
    <motion.p   initial={{opacity:0,y:100}}
     animate={{ opacity:1,y:0 }}
     transition={{delay:0.5}} className={`${outfit.className} text-3xl md:text-3xl xl:text-5xl text-[#F1EBCE] mt-6 mb-10  `}>  I am passionate about building<br></br>innovative stuff on web
    </motion.p>

    </div>
   
   <motion.div
    //drag
    dragConstraints={constraintsRef}
    initial={{opacity:0 ,x:100}}
    animate={{opacity :1,x:0}}
    
  
    className="z-10 mt-0 md:mt-10 "
    dragElastic={1}
  > 
  <Image 
     src={gameBoy}
     alt="put random shit here"
     />
<div className="post__iframe absolute top-40 left-auto h-screen" style={{ width:"500px",height:"281px"}} >
  {/* <iframe loading="lazy" width="500" height="281" src="https://www.onlinegames.io/games/2024/more/tapman/index.html" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" aria-controls="false" scrolling="no" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="true" allowfullscreen="allowfullscreen"></iframe>
  </div>    */}
  </div>
     
    
  
    </motion.div>
    </div>
    <div id="About"className="w-full flex flex-col p-4 md:flex-row items-center justify-around ">
     <motion.div
     className="bg-[#1e1e20] h-full w-full md:w-6/12 rounded-xl p-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        About me
      </h2>
        <h4 className="scroll-m-20 mt-2 text-xl leading-8  ">Hello! I'm Aryan Malik, a Bachelor of Engineering student at BITS Pilani, Hyderabad Campus. <br></br>
I am deeply passionate about full-stack web development, constantly seeking to enhance my skills and knowledge in this dynamic field. 
I love building projects that help solve real-world issues. This drive motivates me to continually learn and apply new technologies to create impactful solutions. <br></br>
I am eager to connect with like-minded individuals and explore opportunities that challenge me to grow both personally and professionally.
Whether it's collaborating on exciting projects, discussing new ideas, or simply networking, I'm always open to new experiences and learning opportunities. <br></br>
Feel free to reach out to me!

</h4>
      </motion.div> 
      <motion.div className="bg-[#1e1e20] h-full w-full min-w-96 md:w-3/12 p-4 mt-20 md:mt-0 rounded-xl">
    
      <ExpCard></ExpCard>
      </motion.div>
    </div>
    <div id="Projects"className=" w-full flex justify-center ">
     <motion.div className=" flex flex-col items-center w-full">
      <h1 className="scroll-m-20 md:mb-16  text-4xl font-extrabold tracking-tight lg:text-5xl"> My Projects</h1>
     <ProjectCards></ProjectCards>
    
    
      </motion.div>
    </div>
   
    </main>
    <div className=" h-1 bottom-0 p-24  w-full  mt-36 xl:mt-[600px]">
    <Footer/>
    </div>
    </>
  );
}
