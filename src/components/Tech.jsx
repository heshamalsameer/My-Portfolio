import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../Styles";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <div className="flex flex-col items-center gap-1 justify-center">
        <h1 className={styles.sectionHeadText}> Skills</h1>
        <p className={`${styles.sectionSubText} lowercase`}>
          basic skills that <span className=" uppercase">I</span> learned and
          used in various projects{" "}
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
