import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { VscServerProcess } from "react-icons/vsc";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Building interactive, user-centric websites and applications with the MERN stack and cutting-edge technologies."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Crafting responsive and visually engaging user interfaces with a strong emphasis on user experience, leveraging React and Tailwind CSS."
      />
      <ServicesCard
        icons={<VscServerProcess />}
        title="Backend Development"
        subTitle="Developing efficient and scalable backends using Node.js, Express, and MongoDB to deliver seamless server performance."
      />
      
    </div>
  );
};

export default MyServices;
