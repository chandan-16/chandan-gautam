import Image from "next/image"
import { assets } from './../assets/assets';

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
        <div className="text-center">
            <h1 className="w-36 mx-auto mb-2 text-gray-700 font-semibold  text-3xl text-left align-middle dark:text-white">Gautam <span className="text-red-600 font-bold text-4xl -pr-[5px]">.</span></h1>
            <div className="w-max flex items-center gap-2 mx-auto">
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='footer-mail' className="w-6" />
                chandangautam420.cg@gmail.com
            </div>
        </div>
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[12%] mt-12 py-6">
            <p>&copy; 2025 Chandan Gautam. All Rights Reserved.</p>
            <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-">
                <li><a target="_blank" href="https://github.com/chandan-16">Github</a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/chandan1699/">LinkedIn</a></li>
                <li><a target="_blank" href="https://app.netlify.com/teams/chandan-16/projects">Netlify</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer