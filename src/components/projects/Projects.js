import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Tanishq clone (with AR)"
            category="E-commerce Website with AR"
            image={workImgThree}
          />
          <ProjectsCard
            title="Clip verse"
            category="Video Streaming Platform"
            image={workImgOne}
          />
          
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Car Renting Website"
            category="Full Stack Application"
            image={workImgFour}
          />
          <ProjectsCard
            title="Game Money"
            category="tally website for board games"
            image={workImgSix}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
