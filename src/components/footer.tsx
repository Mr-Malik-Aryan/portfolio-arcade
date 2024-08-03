import {motion} from 'framer-motion'
import Link from 'next/link'
import React from "react";
export const Footer =() =>{
return(<div className=" flex items-center w-full justify-between rounded-xl h-36 bg-[#1e1e20]">
   <div>
    <motion.p className='ml-10'>
    ©
    2024-present Aryan Malik
    </motion.p>
   </div>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className='flex w-full md:w-5/12 justify-evenly mr-6'>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contact me</Link>
        <Link href="/"></Link>

      
    </motion.div>
</div>);
}