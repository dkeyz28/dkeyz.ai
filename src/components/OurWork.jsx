import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"

const OurWork = () => {

    const workData =[
        {
            title: 'Brand Flyer',
            description:'From creativity to execution, we craft visual solutions that move your brand forward..',
            image: assets.work_image
        },
         {
            title: 'Season Flyer',
            description:'We create fresh and vibrant fliers to welcome new seasons and captivate your audience.',
            image: assets.season
        },
         {
            title: 'Event Flyer',
            description:'We turn bold ideas into powerful creative solutions that helps publicize your events.',
            image: assets.program
        },
        {
            title: 'Direction Flyer',
            description:'We design visually striking flyers that guide attention with clear diretion, purposeful layouts, and strategic composition',
            image: assets.transport
        },
        {
            title: 'Carousel Flyer',
            description:'We create smooth, engaging carousel flyers that guide viewers slide by slide with strong visual direction, seamless flow, and impactful storytelling.',
            image: assets.carousel
        }
        
    ]
  return (
    <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren:0.2 }}
            viewport={{once: false}}
    id='our-works' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Our latest work' desc='From creativity to execution, we craft visual solutions that move your business forward.'/>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            {
                workData.map((work, index)=>(
                    <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity:1, y: 0 }}
                    transition={{duration: 0.5, delay: index * 0.2 }}
                    viewport={{once: false}}
                    key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                        <img src={work.image} alt="" className='w-full rounded-xl'/>
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                        <p className='text-sm opacity-60 w-5/6'>{work.description}</p>

                    </motion.div>
                ))
            }

        </div>
    </motion.div>
  )
}

export default OurWork
