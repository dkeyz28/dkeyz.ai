import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Footer = ({theme}) => {
  return (
    <motion.div
          initial={{ opacity: 0, y: 50}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
    className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
        {/* footer top */}
        <div
        className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
            <motion.div
            initial={{ opacity: 0, x: -30}}
            whileInView={{ opacity: 1, x: 0}}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                <img src={theme === 'dark' ? assets.my_logo : assets.my_logo_dark} className='size-15 ' alt=""/>
                <p className='max-w-md'>From creativity to execution, we craft visual solutions that move your business forward.</p>
                <ul className='flex gap-8'>
                    <li><a  className='hover:text-primary'href="#hero">Home</a></li>
                    <li><a  className='hover:text-primary'href="#services">Services</a></li>
                    <li><a  className='hover:text-primary'href="#our-work">Our work</a></li>
                    <li><a  className='hover:text-primary'href="#contact-us">Contact us</a></li>
                </ul>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, x: 30}}
            whileInView={{ opacity: 1, x: 0}}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className='text-gray-600 dark:text-gray-400'>
                <h3 className='font-semibold'>Follow us on Our Social media handles</h3>
                <p className='text-sm mt-2 mb-2'>To stay in the loop.</p>
                <div className='flex gap-3'>
                    <a href="https://www.instagram.com/dkeyz_visuals28/#"><img src={assets.instagram}  className='size-10 sm:w-10 hover:scale-105' alt="" /></a>
                    <a href="https://www.pinterest.com/dennisolaniyan/"><img src={assets.pinterest}  className='size-10 sm:w-10 hover:scale-105' alt="" /></a>
                </div>
            </motion.div>
        </div>
        <hr className='border-gray-300 dark:border-gray-600 my-6'/>
        {/* footer bottom */}
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration:0.5, delay:0.4 }}
        viewport={{ once: false }}
        className='text-center  dark:border-gray-600'>
            <p className='text-sm text-gray-500'>Copyright 2026 © Dkeyz - All Right Reserved.</p>
        </motion.div>
      
    </motion.div>
  )
}

export default Footer
