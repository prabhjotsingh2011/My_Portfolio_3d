import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <>
          <div className="hidden  sm:block w-28 h-28"  key={technology.name} >
            <BallCanvas icon={technology.icon} />
          </div>

          <div className="block  sm:hidden"  key={technology.name} >
            {/* <BallCanvas icon={technology.icon} /> */}
            <div class="rounded-lg overflow-hidden shadow-lg   ">
              <img class="rounded-full h-25 w-20 mx-auto mt-4  border rounded-full" src={technology.icon} alt="Logo"/>
              {/* <div class="px-6 py-4 ">
                <div class="font-bold text-xl mb-2">Title</div>
              </div> */}
            </div>
          </div>
          </>
          
        ))} 
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
