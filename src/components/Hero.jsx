import { motion } from "framer-motion";
import { styles } from "../Styles";
import { ComputersCanvas } from "./canvas";

// const cvURL = "http://localhost:5173/cv.pdf";
const Hero = () => {
  // const downloadcv = (URL) => {
  //   fetch(URL)
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       const blodURL = window.URL.createObjectURL(new blob([blob]));
  //       const filename = URL.split("/").pop();
  //       const aTag = document.createElement("a");
  //       aTag.href = blodURL;
  //       aTag.setAttribute("download", filename);
  //       document.body.appendChild(aTag);
  //       aTag.click();
  //       aTag.remove();
  //     });
  // };

  return (
    <section className=" relative w-full h-screen mx-auto">
      <div
        className={`
      ${styles.paddingX} absolute inset-0 top-[120px]
      max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I' m {}
            <span className="text-[#915eff]">Hesham</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Frontend websites, using
            <br className="sm:block hidden" />
            React Js and Next Js framework
          </p>

          {/* <button
            onClick={() => downloadcv(cvURL)}
            className=" z-20 absolute bg-tertiary text-center hover:bg-blue-950 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
          >
            download cv
          </button> */}

          <a
            href="https://drive.google.com/file/d/1iKtVrwId4lf1P5vp0KNwt9zE4_8Mdfq2/view?usp=sharing"
            target="blank"
            className=" z-20 absolute bg-tertiary text-center hover:bg-blue-950 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
          >
            Download CV
          </a>
          {/* <a
            href="https://heshamportfolio.surge.sh/dist/cv.pdf"
            download="cv.pdf"
            className=" z-20 absolute bg-tertiary text-center hover:bg-blue-950 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
          >
            Download CV
          </a> */}
        </div>
      </div>
      <br />
      <br />
      <ComputersCanvas />
      <div className=" absolute  bottom-10 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.15,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 bg-secondary rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
