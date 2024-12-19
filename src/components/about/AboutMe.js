import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello, I'm Tanmay Dhole</h2>
          <p className="text-base leading-6 ">
          
          A passionate web developer from Maharashtra, India. I specialize in MERN stack development, creating dynamic and user-focused websites and applications. My expertise lies in React, Node.js, and Express.js, along with a solid understanding of databases like MongoDB and PostgreSQL. I thrive on building innovative and efficient web solutions that bring ideas to life. Let’s collaborate to turn your vision into reality!
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            20
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            INDIA
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Navi Mumbai, Nerul
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
