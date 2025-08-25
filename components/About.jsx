import { assets, infoList } from "@/assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20 mx-auto">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am a Frontend Developer skilled in React, Next.js, TypeScript,
            Redux, Tailwind CSS, Bootstrap, Flowbite, ShadCN UI, and
            GetStream.io. I work with tools like ClerkAuth, Storybook, Clover,
            Copilot, GitHub, and VS Code, along with AI technologies such as
            ChatGPT, DeepSeek-AI, and Voxa-AI to build responsive, user-friendly
            applications. With expertise in responsive design and strong
            communication skills, I currently contribute at Engineer’s Cradle in
            Pune, creating impactful digital experiences while growing as a
            developer.
          </p>

          <ul>
            { infoList.map(({icon, iconDark, title, description}, index) => (
                <li key={index}>
                    <Image src={icon} alt={title}  />
                    <h3>{title}</h3>
                    <p>{description}</p>
                </li>
            )) }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
