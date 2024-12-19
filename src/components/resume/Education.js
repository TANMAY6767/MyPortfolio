import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="24 june 2024 - 30 july 2024 "
          title="Data Analyst"
          subTitle=" in house internship SIES GST"
          des="learnt Data visualization using tablue, PowerBi, Excel and python data minig libraries like Pandas, NumPy, Matplotlib "
        />
        
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2022 - Present"
          title="Bachelor of Engineering, Computer Engineering"
          subTitle="SIES Graduate School of Technology"
          des="


Pursuing a bachelor's degree with a focus on web development, software engineering, and competitive programming."
        />
        
      </div>
    </div>
  );
};

export default Education;
