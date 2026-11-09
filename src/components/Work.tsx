import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    title: "Multimodal and multidomain misinformation Fake News Detection System",
    category: "AI/ML",
    tools:
      "Python, TensorFlow, Pandas, BertTokenizer, FPSO (Fuzzy Pattern Search Optimization)",
    image: "/images/AI-Powered Fake News Detection System.png",
    alt: "AI-Powered Fake News Detection System",
  },
  {
    title: "Route Planning System",
    category: "Full-stack",
    tools: "C++, React, JavaScript, REST APIs, MongoDB",
    image: "/images/Route-Planner-Dashboard.png",
    alt: "Route Planning System",
  },
   {
    title: "DeepSeekAI - AI-Powered Search Engine",
    category: "Full-stack and AI/ML",
    tools: "TypeScript, React, JavaScript, REST APIs, clerk for Authentication, OpenAI API, MongoDB, Tailwind CSS, Node.js",
    image: "/images/deep-seek-ai.png",
    alt: "DeepSeekAI - AI-Powered Search Engine",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.title}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
