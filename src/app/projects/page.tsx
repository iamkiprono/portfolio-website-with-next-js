import { Projects as _Projects } from "@/MyProjectsData/Projects";
import MyCard from "../components/MyLibrary/MyCard";

const Projects = () => {
  return (
    <div className="p-6">
      <p className="text-xl font-bold mb-4">Projects</p>

      <div className="p-2 md:p-6 border-l-[1px] flex flex-wrap justify-center gap-6">
        {_Projects.map((project, index) => {
          return <MyCard project={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
