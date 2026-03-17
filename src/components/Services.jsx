import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import Servicecard from './Servicecard'
import { motion } from "motion/react"

const Services = () => {
    
    const servicesData = [
        {
            title: 'GRAPHICS DESIGN', 
            description: 'we turn bold ideas into creative and visual solutions that are not just visually engaging....',
            icon: assets.graphics
        },
         {
            title: 'CREATIVITY', 
            description: 'we blend visual storytelling with creativity and we approach every project with a balance of...',
            icon: assets.marketing_icon
        }
    ]
  return (
    <motion.div 
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{once: false }}
    
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

    <Title  title='How can we help?' desc='From creativity to execution, we craft creative solutions that move your business forward'/>
      
      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index)=>(
          <Servicecard key={index} service={service} index={index}/>
        ))}
      </div>
    </motion.div> 
  )
}

export default Services
