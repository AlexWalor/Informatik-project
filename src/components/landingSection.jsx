import { useLayoutEffect, useRef } from "react";
import "../CSS/LandingSection.scss";
import { gsap } from "gsap";
import { InformationSection } from "./informationSection";

const LandingSection = ({ data }) => {
  data = data[0];
  const headlineDivRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headlineDivRef.current, {
        x: 0,
        opacity: 1,
        stagger: 0.015,
        duration: 1,
        delay: 0.3,
      });
    });

    return () => {
      ctx.revert();
    };
  }, [headlineDivRef]);

  return (
    <>
      <div className="landingSection">
        <div ref={headlineDivRef} className="landing-wrapper">
          <div className="headline-div">
            <h1 className="headline">{data.headline}</h1>
            <div className="divider"></div>
            <p className="description">{data.description}</p>
          </div>
          <img src={data.image} alt="img" className="landing-image" />
        </div>

        <div className="mouse"></div>
        <div className="seperator"></div>
      </div>
      {data.sections.map((section) => (
        <InformationSection section={section} key={section.id} />
      ))}
    </>
  );
};

export default LandingSection;
