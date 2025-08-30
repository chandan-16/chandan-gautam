import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { motion } from 'motion/react';

const About = ({isDarkMode}) => {
  return (
    <motion.div 
      id="about" className="w-full px-4 sm:px-8 lg:px-[12%] xl:px-[19%] py-10 scroll-mt-20 mx-auto"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
      >

      <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: 0.3, duration: 0.6}}
        className="text-center mb-2 text-base sm:text-lg font-Ovo">Introduction</motion.h4>

      <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay:0.5}}  
        className="text-center text-2xl sm:text-4xl lg:text-5xl font-Ovo my-8 sm:my-14 lg:my-20">About me</motion.h2>

      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}      
        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        <motion.div 
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.6}} 
          className="w-36 sm:w-52 lg:w-72 xl:w-80 rounded-3xl flex-shrink-0">

          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay:0.8}}      
          className="flex-1 text-center lg:text-left">

          <p className="mb-6 sm:mb-10 text-justify font-Ovo text-sm sm:text-base leading-relaxed sm:leading-7">
            I’m a Frontend Developer specializing in React, Next.js, TypeScript,
            and Tailwind CSS. I enjoy crafting responsive, user-friendly, and
            performance-driven applications that turn ideas into seamless
            digital experiences. I work with tools like ClerkAuth, Storybook,
            and GitHub, and explore AI technologies such as ChatGPT to enhance
            my workflow. I build impactful solutions while continuously growing as a passionate
            developer.
          </p>          

          <motion.ul 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 1}}   
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">

            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{scale: 1.05}}
                key={index}
                className="border border-gray-300 rounded-xl p-4 sm:p-5 text-center lg:text-left cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 dark:border-white dark:hover:bg-darkHover/50"
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-6 mx-auto lg:mx-0" />
                <h3 className="my-2 sm:my-3 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 0.0, duration: 0}}         
            className="mt-8 mb-4 text-gray-700 font-Ovo dark:text-white">Tools I use :</motion.h4>

          <motion.ul
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{delay: 1.5, duration: 0.6}}    
            className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
            {
              toolsData.map((tool, index) => (
                <motion.li 
                  whileHover={{scale: 1.1}}  
                  key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-100">
                  <Image src={tool} alt="tool" className="w-5 sm:w-7" />
                </motion.li>
              ))
            }
          </motion.ul>

        </motion.div>
      </motion.div>
    </motion.div>

  );
};

export default About;
