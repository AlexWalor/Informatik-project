import "../CSS/informationSections.scss";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const InformationSection = ({ section }) => {
  const sectionRef = useRef(null);
  const divRef = useRef(null);
  const dividersRef = useRef(new Array());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        pin: divRef.current,
      });
    });
    dividersRef.current.forEach((ref) => {
      gsap.to(ref, {
        width: "100%",
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ref,
          start: "top bottom",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section className="information-section" ref={sectionRef}>
        {/* Left Side */}
        <div ref={divRef} className="left-div">
          <h1 className="id">{section.id}</h1>
          <h1 className="title">{section.title}</h1>
        </div>

        {/* Right Side */}
        <div>
          {section.infos.map((info, index) => (
            <div className="info-box" key={info.description}>
              <h1>{info.title}</h1>
              <p>{info.description}</p>
              <div
                className="divider"
                ref={(element) => dividersRef.current.push(element)}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
